import React from 'react';
import { Zap, Shield, Star } from 'lucide-react';
import FeatureCard from '../ui/FeatureCard';

const featuresList = [
  { icon: <Zap className="h-12 w-12" />, title: 'Faster Development', description: 'Optimized React and TailwindCSS components for faster development' },
  { icon: <Shield className="h-12 w-12" />, title: 'Presence', description: 'Strong apealing presence for your project' },
  { icon: <Star className="h-12 w-12" />, title: 'Community', description: 'Personalized by community, Everyone can contribute' }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Promise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {featuresList.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;