import React from 'react';

const OutlineButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-6 py-2 border-2 border-indigo-600 text-indigo-600 rounded-md font-medium
        hover:bg-indigo-600 hover:text-white transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlineButton;