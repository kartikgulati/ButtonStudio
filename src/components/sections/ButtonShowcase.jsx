import React, { useState } from 'react';

import ButtonShowCaseData from '../ui/ButtonShowCaseData';


function ButtonShowcase() {
  return (
    <section id="buttons" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Beautiful Button Collection</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of carefully crafted buttons, each designed with attention to detail
            and modern interaction patterns.
          </p>
        </div>

        <div>
          
          <ButtonShowCaseData />
          

        </div>
      </div>
    </section>
  );
}

export default ButtonShowcase;
