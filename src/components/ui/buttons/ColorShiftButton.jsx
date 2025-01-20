import React from 'react';

const ColorShiftButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-6 py-2 bg-white text-blue-500 rounded-md font-medium relative
        hover:bg-blue-600 hover:text-white border-2 border-blue-500 transition-colors duration-300
        before:absolute before:inset-0 before:rounded-md before:bg-blue-500
        before:animate-pulse before:opacity-50 before:-z-10 before:blur-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ColorShiftButton;