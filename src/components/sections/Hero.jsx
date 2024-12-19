import React from 'react';
import Button from '../ui/Button';


const Hero = () => {
  return (
    <section id="home" className="pt-24 bg-gradient-to-br from-indigo-500 to-purple-600 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">Welcome to ButtonStudio</h1>
          <p className="text-xl mb-12 text-indigo-100">Beautiful web library of button styles and components. You can be a part of our community.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="primary">Get Started</Button>
            <Button variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;