import React from 'react';

const PrimaryButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-6 py-2 bg-indigo-600 text-white rounded-md font-medium
        hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;