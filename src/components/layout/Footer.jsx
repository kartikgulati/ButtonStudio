import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import SocialLink from './SocialLink';
import { Menu, X, Code } from 'lucide-react';


const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#buttons", label: "Buttons" },
  { href: "#contact", label: "Contact" }
];

const socialLinks = [
  { icon: <Github className="h-6 w-6" />, href: "#" },
  { icon: <Twitter className="h-6 w-6" />, href: "#" },
  { icon: <Linkedin className="h-6 w-6" />, href: "#" },
  { icon: <Mail className="h-6 w-6" />, href: "#" }
];

const Footer = () => {
  return (
    // <footer className="bg-gray-900 text-white"> 
    //   <div className="container mx-auto px-6 py-12">
    //     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    //       <div>
    //         <h3 className="text-xl font-bold mb-4 ">ButtonStudio</h3>
    //         <p className="text-gray-400">Sharing the power of buttons. Join our community.</p>
    //       </div>
    //       <div>
    //         <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
    //         <ul className="space-y-2">
    //           {quickLinks.map(link => (
    //             <li key={link.href}>
    //               <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
    //                 {link.label}
    //               </a>
    //             </li>
    //           ))}
    //         </ul>
    //       </div>
    //       <div>
    //         <h4 className="text-lg font-semibold mb-4">About Developer</h4>
    //         <ul className="space-y-2 text-gray-400">
    //           <li>Kartik Gulati</li>
    //           <li>Developer City, DC 12345</li>
    //           <li>contact@devstudio.com</li>
    //           <li>(555) 123-4567</li>
    //         </ul>
    //       </div>
    //       <div>
    //         <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
    //         <div className="flex space-x-4">
    //           {socialLinks.map((link, index) => (
    //             <SocialLink key={index} {...link} />
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
    //       <p>&copy; {new Date().getFullYear()} ButtonStudio. All rights reserved.</p>
    //     </div>
    //   </div>
    // </footer>

    

<footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                  <Code className="h-8 w-8 text-indigo-600" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">&nbsp;ButtonStudio</span>
              </a>
             <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">Powerful and user-friendly buttons component library. Based on the React JS and Tailwind CSS. Share your buttons with the community.</p>

          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h2>
                  <ul className="space-y-2">
                  {quickLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> <a href="https://flowbite.com/" className="hover:underline">ButtonStudio</a>. All Rights Reserved. &copy; {new Date().getFullYear()}
          </span>
          
          <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
      </div>
    </div>
</footer>

  );
};

export default Footer;