import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div>
      
    <div className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow-hover shadow-white">
      <div className="text-indigo-600 mb-4 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 text-white">{description}</p>
    </div>


    </div>
    
  );
};

export default FeatureCard;