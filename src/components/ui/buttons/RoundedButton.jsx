import React from 'react';

const RoundedButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`px-8 py-3 bg-emerald-500 text-white rounded-full font-medium
        hover:bg-emerald-600 transform hover:scale-105 transition-all
        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default RoundedButton;