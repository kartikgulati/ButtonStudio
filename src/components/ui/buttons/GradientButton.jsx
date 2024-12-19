import React from 'react';

const GradientButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md font-medium
        hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;