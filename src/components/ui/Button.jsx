import React from 'react';

const variants = {
  primary: "bg-white text-indigo-600 hover:bg-opacity-90",
  outline: "border-2 border-white text-white hover:bg-white hover:text-indigo-600"
};

const Button = ({ children, variant = "primary", className = "", ...props }) => {
  return (
    <button
      className={`px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;