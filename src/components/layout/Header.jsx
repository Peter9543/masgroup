import React, { useState } from 'react';
import { Button } from '../ui/button';
import logo from '@/assets/logos/logo.png'

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
    <header className="bg-white shadow-md fixed w-full top-0 z-50 transition-colors duration-300 border-b-2 border-yellow-500">
      <div className="w-full px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="MAS Group Logo" className="w-16 h-10 mr-2" />
              <span className="text-2xl font-bold text-gray-900">MAS GROUP</span>
            </a>
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-800 hover:text-yellow-600 font-medium">Home</a>
            <a href="/about" className="text-gray-800 hover:text-yellow-600 font-medium">About Us</a>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                // onClick={toggleServices}
                className="text-gray-800 hover:text-yellow-600 font-medium flex items-center"
              >
                <a href='/services'> Our Services</a>

                {/* <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg> */}
              </button>

              {/* {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 border border-yellow-100">
                  <a href="/services/manpower" className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700">Manpower Support</a>
                  <a href="/services/contracting" className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700">Contracting & Engineering</a>
                  <a href="/services/trading" className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700">Trading & Supply</a>
                  <a href="/services/transportation" className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700">Transportation & Limousine</a>
                  <a href="/services/corporate" className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700">Corporate & Real Estate</a>
                  <a href="/services/facility" className="block px-4 py-2 text-gray-800 hover:bg-yellow-50 hover:text-yellow-700">Facility Management</a>
                </div>
              )} */}
            </div>

            <a href="/projects" className="text-gray-800 hover:text-yellow-600 font-medium">Our Projects</a>
            <a href="/safety" className="text-gray-800 hover:text-yellow-600 font-medium">Safety</a>
            <a href="/contact" className="text-gray-800 hover:text-yellow-600 font-medium">Contact Us</a>
          </nav>



          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-yellow-600 focus:outline-none"
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
              <a href="/" className="text-gray-800 hover:text-yellow-600 font-medium">Home</a>
              <a href="/about" className="text-gray-800 hover:text-yellow-600 font-medium">About Us</a>

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={toggleServices}
                  className="text-gray-800 hover:text-yellow-600 font-medium flex items-center w-full justify-between"
                >
                  Our Services
                  <svg className={`w-4 h-4 transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>

                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <a href="/services/manpower" className="block text-gray-800 hover:text-yellow-600">Manpower Support</a>
                    <a href="/services/contracting" className="block text-gray-800 hover:text-yellow-600">Contracting & Engineering</a>
                    <a href="/services/trading" className="block text-gray-800 hover:text-yellow-600">Trading & Supply</a>
                    <a href="/services/transportation" className="block text-gray-800 hover:text-yellow-600">Transportation & Limousine</a>
                    <a href="/services/corporate" className="block text-gray-800 hover:text-yellow-600">Corporate & Real Estate</a>
                    <a href="/services/facility" className="block text-gray-800 hover:text-yellow-600">Facility Management</a>
                  </div>
                )}
              </div>

              <a href="/projects" className="text-gray-800 hover:text-yellow-600 font-medium">Our Projects</a>
              <a href="/safety" className="text-gray-800 hover:text-yellow-600 font-medium">Safety</a>
              <a href="/contact" className="text-gray-800 hover:text-yellow-600 font-medium">Contact Us</a>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;