import React from 'react';
import Button from '../ui/Button';


const Hero = () => {
  return (
    <section id="home" className="bg-gray-900 text-white py-20">



      {/* <div className="container mx-auto px-6 py-20 w-max">
        
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Welcome to ButtonStudio</h1>
          <p className="text-xl mb-12 text-indigo-100">Beautiful web library of button components. Built on top of the power of React and Tailwind CSS. <br/>Customize, create, and share.</p>
          <div className="flex flex-wrap justify-center gap-4">

            <a href="#buttons"><Button variant="primary" >Get Started</Button></a> 
            <a href="#features"><Button variant="outline">Learn More</Button></a> 
          </div>
        </div>
      </div> */}

<div className="flex flex-wrap min-h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-900">
      <div className='p-8'>
      <img src="https://i.postimg.cc/02NkRVQr/img-light.png" alt="Contact Us" className="max-w-full h-auto shadow-[16px_16px_5px_0px_rgba(255,_255,_255,_0.55)]" />
      </div>
        
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
      <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Welcome to ButtonStudio</h1>
          <p className="text-xl mb-12 text-indigo-100">Beautiful web library of button components. Built on top of the power of React and Tailwind CSS. <br/>Customize, create, and share.</p>
          <div className="flex flex-wrap justify-center gap-4">

            <a href="#buttons"><Button variant="primary" >Get Started</Button></a> 
            <a href="#features"><Button variant="outline">Learn More</Button></a> 
          </div>
        </div>
      </div>
    </div>






    </section>
  );
};

export default Hero;