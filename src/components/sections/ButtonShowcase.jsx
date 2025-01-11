import React, { useState } from 'react';
import ButtonShowcaseData from '../ui/ButtonShowcaseData';


function ButtonShowcase() {
  return (
    <section id="buttons" className="py-20  bg-[#001524]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">Beautiful Button Collection</h2>
          <p className="text-white max-w-2xl mx-auto">
            Explore our collection of carefully crafted buttons, each designed with attention to detail
            and modern interaction patterns.
          </p>
        </div>

        <div>
          
          <ButtonShowcaseData />
          

        </div>
      </div>
      

    </section>
  );
}

export default ButtonShowcase;
