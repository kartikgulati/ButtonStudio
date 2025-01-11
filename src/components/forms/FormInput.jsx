import React from 'react';

const FormInput = ({ label, name, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-white mb-1">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent "
        {...props}
      />
    </div>
  );
};

export default FormInput;