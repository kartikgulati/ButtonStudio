import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import SocialLink from './SocialLink';

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Showcase" },
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
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ButtonStudio</h3>
            <p className="text-gray-400">Sharing the power of buttons. Join our community.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
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
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Web Street</li>
              <li>Developer City, DC 12345</li>
              <li>contact@devstudio.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <SocialLink key={index} {...link} />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ButtonStudio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;