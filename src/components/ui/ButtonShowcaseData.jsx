import React, { useState } from 'react';
import { Apple, Heart, Send } from 'lucide-react';
import ButtonShowcaseCard from '../ui/ButtonShowcaseCard';
import PrimaryButton from '../ui/buttons/PrimaryButton';
import GradientButton from '../ui/buttons/GradientButton';
import OutlineButton from '../ui/buttons/OutlineButton';
import IconButton from '../ui/buttons/IconButton';
import RoundedButton from '../ui/buttons/RoundedButton';
import GlowButton from '../ui/buttons/GlowButton';
import ApplePaybutton from '../ui/buttons/ApplePaybutton';
import { buttonCode } from './buttonCode';

import ColorShiftButton from './buttons/ColorShiftButton';

const buttonShowcaseData = [
    {
      title: 'Primary Button',
      description: 'Classic, solid button with hover and focus states',
      
      component: <PrimaryButton>Click Me!</PrimaryButton>,
      code: buttonCode.primary,
      dev: 'kartikgulati14'
    },
    {
      title: 'Gradient Button',
      description: 'Beautiful gradient button with scale animation',
      component: <GradientButton>Get Started</GradientButton>,
      code: buttonCode.gradient,
      dev: 'kartikgulati14'
    },
    {
      title: 'Outline Button',
      description: 'Bordered button that fills on hover',
      component: <OutlineButton>Learn More</OutlineButton>,
      code: buttonCode.outline,
      dev: 'kartikgulati14'
    },
    {
      title: 'Icon Buttons',
      description: 'Buttons with icon support and subtle animation',
      component: (
        <div className="flex flex-wrap justify-center gap-4">
          <IconButton icon={Heart}>Like</IconButton>
          <IconButton icon={Send}>Send</IconButton>
        </div>
      ),
      code: buttonCode.iconbutton,
      dev: 'kartikgulati14'
    },
    {
      title: 'Rounded Button',
      description: 'Pill-shaped button with scale effect',
      component: <RoundedButton>Subscribe Now</RoundedButton>,
      code: buttonCode.rounded,
      dev: 'kartikgulati14'
    },
    {
      title: 'Glow Button',
      description: 'Button with a pulsing glow effect',
      component: <GlowButton>Explore</GlowButton>,
      code: buttonCode.glow,
      dev: 'kartikgulati14'
    },
    {
        title: 'Color ShiftButton',
        description: 'Button with a pulsing glow effect',
        component: <ColorShiftButton>Shift Color</ColorShiftButton>,
        code: buttonCode.colorshiftbutton,
        dev: 'kartikgulati14'
      },
      {
        title: 'Apple Pay Button',
        description: 'Apple Pay button with icon and text',
        component: <ApplePaybutton>Apple Pay</ApplePaybutton>,
        code: buttonCode.applepaybutton,
        dev: 'kartikgulati14'
      }

];




const ButtonShowcaseData = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 12;

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPosts = buttonShowcaseData.slice(firstPostIndex, lastPostIndex);

  const totalPages = Math.ceil(buttonShowcaseData.length / postPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }

// primary hefunction


  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {currentPosts.map((button, index) => (
          <ButtonShowcaseCard key={index} {...button} />
        ))}
      </div>
      
{/* Pagination divs */}
<div className="flex flex-col items-center">
  
  <span className="text-sm text-gray-700 dark:text-gray-400">
      Showing <span className="font-semibold text-white">{currentPage}</span> of <span className="font-semibold text-white dark:text-gray">{totalPages}</span> Pages
  </span>
  <div className="inline-flex mt-2 xs:mt-0">
    
  <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-white rounded-s hover:bg-gray-900 dark:bg-gray-200 dark:border-gray-700 dark:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handlePrevious} disabled={currentPage === 1}>
        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        Prev
    </button>
    <button className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-white border-0 border-s border-gray-200 rounded-e hover:bg-gray-900 dark:bg-gray-200 dark:border-gray-700 dark:text-gray-800 dark:hover:bg-gray-700 dark:hover:text-white" onClick={handleNext} disabled={currentPage === totalPages}>
        Next
        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </button>
  </div>
</div>
    </div>
  );
};

export default ButtonShowcaseData;


