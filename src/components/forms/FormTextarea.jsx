import React from 'react';

const FormTextarea = ({ label, name, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className=" block text-sm font-medium text-white  mb-1">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        className=" block w-full rounded-md bg-transparent px-3 py-1.5 text-base text-white outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
        {...props}
      ></textarea>
    </div>
  );
};

export default FormTextarea;