import React from 'react';

const NavLink = ({ href, label, mobile }) => {
  return (
    <a 
      href={href} 
      className={`text-white hover:text-indigo-600 transition-colors ${mobile ? 'block' : ''}`}
    >
      {label}
    </a>
  );
};

export default NavLink;