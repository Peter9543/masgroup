import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-800 pt-12 pb-6 transition-colors duration-300">
      <div className="w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services/manpower" className="text-gray-300 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/projects" className="text-gray-300 hover:text-white transition-colors">Our Projects</a></li>
              <li><a href="/safety" className="text-gray-300 hover:text-white transition-colors">Safety</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* UAE Office */}
          <div>
            <h3 className="text-lg font-semibold mb-4">UAE Office</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Dubai, United Arab Emirates</p>
              <p className="mb-2">Phone: +971 XXX XXX XXX</p>
              <p>Email: uae@masgroup.com</p>
            </address>
          </div>

          {/* Qatar Office */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Qatar Office</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Doha, Qatar</p>
              <p className="mb-2">Phone: +974 XXX XXX XXX</p>
              <p>Email: qatar@masgroup.com</p>
            </address>
          </div>

          {/* KSA Office */}
          <div>
            <h3 className="text-lg font-semibold mb-4">KSA Office</h3>
            <address className="not-italic text-gray-300">
              <p className="mb-2">Riyadh, Saudi Arabia</p>
              <p className="mb-2">Phone: +966 XXX XXX XXX</p>
              <p>Email: ksa@masgroup.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-300 text-center md:text-left">
                A one-stop destination for both blue and white-collar services
              </p>
            </div>
            <div className="text-gray-400 text-sm">
              <p>&copy; 2025 MAS Group of Companies. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;