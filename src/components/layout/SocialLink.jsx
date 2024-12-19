import React from 'react';

const SocialLink = ({ icon, href }) => {
  return (
    <a href={href} className="text-gray-400 hover:text-white transition-colors">
      {icon}
    </a>
  );
};

export default SocialLink;