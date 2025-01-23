export const buttonCode ={
    primary: `import React from 'react';

const PrimaryButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={\`px-6 py-2 bg-indigo-600 text-white rounded-md font-medium
        hover:bg-indigo-700 transform hover:-translate-y-0.5 transition-all
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;`,

gradient: `import React from 'react';

const GradientButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={\`px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md font-medium
        hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all
        focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GradientButton;`,

outline: `import React from 'react';

const OutlineButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={\`px-6 py-2 border-2 border-indigo-600 text-indigo-600 rounded-md font-medium
        hover:bg-indigo-600 hover:text-white transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};

export default OutlineButton;`,

iconbutton: `import React from 'react';

const IconButton = ({ icon: Icon, children, className = '', ...props }) => {
  return (
    <button
      className={\`px-6 py-2 bg-gray-800 text-white rounded-md font-medium inline-flex items-center space-x-2
        hover:bg-gray-900 transform hover:-translate-y-0.5 transition-all
        focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 \${className}\`}
      {...props}
    >
      <Icon className="h-5 w-5" />
      <span>{children}</span>
    </button>
  );
};

export default IconButton;`,

rounded: `import React from 'react';

const RoundedButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={\`px-8 py-3 bg-emerald-500 text-white rounded-full font-medium
        hover:bg-emerald-600 transform hover:scale-105 transition-all
        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};

export default RoundedButton;`,

glow: `import React from 'react';

const GlowButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={\`px-6 py-2 bg-blue-500 text-white rounded-md font-medium relative
        hover:bg-blue-600 transition-colors duration-300
        before:absolute before:inset-0 before:rounded-md before:bg-blue-500
        before:animate-pulse before:opacity-50 before:-z-10 before:blur-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};

export default GlowButton;`,

colorshiftbutton: `
import React from 'react';

const ColorShiftButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className={\`px-6 py-2 bg-white text-blue-500 rounded-md font-medium relative
        hover:bg-blue-600 hover:text-white border-2 border-blue-500 transition-colors duration-300
        before:absolute before:inset-0 before:rounded-md before:bg-blue-500
        before:animate-pulse before:opacity-50 before:-z-10 before:blur-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 \${className}\`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ColorShiftButton;`,

applepaybutton: `import React from 'react'

const ApplePaybutton = ({ children, className = '', ...props }) => {
    return (
      <button
        className={\` text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2 \${className}\`}
        {...props}
      >
        <svg class="w-5 h-5 me-2 -ms-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
        {children}
      </button>
    );
  };

export default ApplePaybutton`,


newbutton: ``,



};