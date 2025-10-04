import React, { useState } from 'react';
import { Button } from '../ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <header className="bg-white shadow-md dark:bg-gray-800 dark:shadow-gray-700 fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="w-full px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-900 dark:text-blue-400">MAS GROUP</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">Home</a>
            <a href="/about" className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">About Us</a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleServices}
                className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium flex items-center"
              >
                Our Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-md shadow-lg py-2 dark:shadow-gray-700">
                  <a href="/services/manpower" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400">Manpower Support</a>
                  <a href="/services/contracting" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400">Contracting & Engineering</a>
                  <a href="/services/trading" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400">Trading & Supply</a>
                  <a href="/services/transportation" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400">Transportation & Limousine</a>
                  <a href="/services/corporate" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400">Corporate & Real Estate</a>
                  <a href="/services/facility" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:text-blue-400">Facility Management</a>
                </div>
              )}
            </div>
            
            <a href="/projects" className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">Our Projects</a>
            <a href="/safety" className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">Safety</a>
            <a href="/contact" className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">Contact Us</a>
          </nav>

  

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a href="/" className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">Home</a>
              <a href="/about" className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">About Us</a>
              
              {/* Mobile Services Dropdown */}
              <div>
                <button 
                  onClick={toggleServices}
                  className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium flex items-center w-full justify-between"
                >
                  Our Services
                  <svg className={`w-4 h-4 transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="/services/manpower" className="block text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400">Manpower Support</a>
                    <a href="/services/contracting" className="block text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400">Contracting & Engineering</a>
                    <a href="/services/trading" className="block text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400">Trading & Supply</a>
                    <a href="/services/transportation" className="block text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400">Transportation & Limousine</a>
                    <a href="/services/corporate" className="block text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400">Corporate & Real Estate</a>
                    <a href="/services/facility" className="block text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400">Facility Management</a>
                  </div>
                )}
              </div>
              
              <a href="/projects" className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">Our Projects</a>
              <a href="/safety" className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">Safety</a>
              <a href="/contact" className="text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 font-medium">Contact Us</a>
            
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;