import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const App = () => {
  const [input, setInput] = useState('');
  const [inputError, setInputError] = useState('');

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
  };

  const validateInput = (value) => {
    const mobileRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!mobileRegex.test(value) && !emailRegex.test(value)) {
      setInputError('Please enter a valid 10-digit mobile number or email address');
    } else {
      setInputError('');
    }
  };

  const handleInputChange = debounce((value) => {
    setInput(value);
    validateInput(value);
  }, 300);

  const handleNext = () => {
    alert('All good');
    setInput('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white-900">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-5 text-center">Login to Dashboard</h2>
        <div className="mb-4">
          <label htmlFor="input" className="block text-sm font-medium text-gray-700">
            Email or Mobile Number
          </label>
          <input
            type="text"
            id="input"
            value={input}
            onChange={(e) => handleInputChange(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          {inputError && <p className="mt-2 text-sm text-red-600">{inputError}</p>}
        </div>
        <div className="mb-4">
          <button
            onClick={handleNext}
            disabled={inputError || !input}
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Next
          </button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="w-full border-t border-gray-300"></span>
          <span className="px-2 text-sm text-gray-500">or</span>
          <span className="w-full border-t border-gray-300"></span>
        </div>
        <div className="mb-4">
          <button
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <FcGoogle className="mr-2 bg-white" size={24} />
            Sign in with Google
          </button>
        </div>
        <p className="text-center text-xs text-gray-500">
          Protected by reCAPTCHA. Google
          <a href="#" className="text-blue-600 hover:underline"> Privacy Policy</a> & <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> apply.
        </p>
      </div>
    </div>
  );
};

export default App;
