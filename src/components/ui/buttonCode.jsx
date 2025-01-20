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

pooja: ``,



};