import React from 'react';

const IconButton = ({ icon: Icon, children, className = '', ...props }) => {
  return (
    <button
      className={`px-6 py-2 bg-gray-800 text-white rounded-md font-medium inline-flex items-center space-x-2
        hover:bg-gray-900 transform hover:-translate-y-0.5 transition-all
        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 ${className}`}
      {...props}
    >
      <Icon className="h-5 w-5" />
      <span>{children}</span>
    </button>
  );
};

export default IconButton;