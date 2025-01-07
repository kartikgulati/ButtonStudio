
import React, { useState } from 'react';
import { Copy } from 'lucide-react';

const ButtonShowcaseCard = ({ title, description, component, code, dev }) => {
  const [isCopied, setIsCopied] = useState(false);


  // const copyCode = () => {
  //   navigator.clipboard.writeText(`<${component.type.name} ${Object.keys(component.props)
  //     .map((key) => `${key}="${component.props[key]}"`)
  //     .join(' ')}>${component.props.children}</${component.type.name}>`);
  // };


  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative">
      <div className="right-4 top-4 absolute">
        <button onClick={handleCopy}>
          <Copy color="#808080" size={18} />
        </button>
        {isCopied && <span className="text-xs text-green-500 ml-2">Copied!</span>}
      </div>

      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-1 text-sm">{description}</p>
      <div className='mb-3'>
        <p className="text-gray-600 mb-1 text-xs"><b>Developer:</b> @{dev}</p>
      </div>
      <div className="flex justify-center items-center min-h-[60px]">
        {component}
      </div>
    </div>
  );
};

export default ButtonShowcaseCard;
