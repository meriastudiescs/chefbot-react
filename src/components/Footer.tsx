import React from 'react';
import { ChefHat, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <ChefHat className="h-8 w-8 mr-2 text-primary-500" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Chef<span className="text-primary-500">Bot</span>
              </span>
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm">
              Turn your ingredients into delicious meals with AI-powered recipe recommendations.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Features</h3>
            <ul className="mt-4 space-y-2">
              <li><FooterLink href="#ingredients">Ingredient Input</FooterLink></li>
              <li><FooterLink href="#recipes">Recipe Recommendations</FooterLink></li>
              <li><FooterLink href="#favorites">Save Favorites</FooterLink></li>
              <li><FooterLink href="#profile">Dietary Preferences</FooterLink></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li><FooterLink href="#how-it-works">How It Works</FooterLink></li>
              <li><FooterLink href="#faq">FAQ</FooterLink></li>
              <li><FooterLink href="#blog">Recipe Blog</FooterLink></li>
              <li><FooterLink href="#tips">Cooking Tips</FooterLink></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><FooterLink href="#about">About Us</FooterLink></li>
              <li><FooterLink href="#contact">Contact</FooterLink></li>
              <li><FooterLink href="#privacy">Privacy Policy</FooterLink></li>
              <li><FooterLink href="#terms">Terms of Service</FooterLink></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} ChefBot. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center text-gray-500 dark:text-gray-400 text-sm">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by ChefBot Team
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
    >
      {children}
    </a>
  );
};

export default Footer;