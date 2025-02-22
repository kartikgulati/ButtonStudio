import React from 'react';
import Button from '../ui/Button';


const Hero = () => {
  return (
    <section id="home" className="bg-[#001524] text-white py-1" >



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

<div className="flex flex-wrap min-h-screen" >
      

      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
      <div className="text-center mt-10">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to ButtonStudio</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-40 dark:text-gray-400">Beautiful web library of button components. Built on top of the power of React and Tailwind CSS. <br/>Customize, create, and share.</p>
          <div className="flex flex-wrap justify-center gap-4">

            <a href="#buttons"><Button variant="primary" cal >Get Started</Button></a> 
            <a href="#features"><Button variant="outline">Learn More</Button></a> 
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center">
      <div className='p-8'>
      <img src="https://i.postimg.cc/2ys6jxq8/Green-Teal-Geometric-Modern-Computer-Programmer-Code-Editor-Quotes-Instagram-Post-1.png" alt="Contact Us" className="max-w-full h-auto rounded-xl " />
      </div>
        
      </div>
    </div>
    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-auto m-4"></hr>
    </section>
    
  );
};

export default Hero;