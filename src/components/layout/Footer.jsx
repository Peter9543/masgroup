import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-900 pt-2 transition-colors duration-300 border-t-2 border-yellow-500">
      <div className="w-full px-4">
        <div className="grid grid-cols-2 md:grid-cols-4  gap-6 ">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold  text-yellow-600">Quick Links</h3>
            <ul className="">
              <li><a href="/" className="text-gray-700 hover:text-yellow-600 transition-colors text-sm">Home</a></li>
              <li><a href="/about" className="text-gray-700 hover:text-yellow-600 transition-colors text-sm">About Us</a></li>
              <li><a href="/services/manpower" className="text-gray-700 hover:text-yellow-600 transition-colors text-sm">Our Services</a></li>
              <li><a href="/projects" className="text-gray-700 hover:text-yellow-600 transition-colors text-sm">Our Projects</a></li>
              <li><a href="/safety" className="text-gray-700 hover:text-yellow-600 transition-colors text-sm">Safety</a></li>
              <li><a href="/contact" className="text-gray-700 hover:text-yellow-600 transition-colors text-sm">Contact Us</a></li>
            </ul>
          </div>

          {/* UAE Office */}
          <div>
            <h3 className="text-lg font-semibold  text-yellow-600">UAE Office</h3>
            <address className="not-italic text-gray-700 text-sm">
              <p className="mb-1">Dubai, United Arab Emirates</p>
              <p className="mb-1">Phone: +971 XXX XXX XXX</p>
              <p>Email: uae@masgroup.com</p>
            </address>
          </div>

          {/* Qatar Office */}
          <div>
            <h3 className="text-lg font-semibold  text-yellow-600">Qatar Office</h3>
            <address className="not-italic text-gray-700 text-sm">
              <p className="mb-1">Doha, Qatar</p>
              <p className="mb-1">Phone: +974 XXX XXX XXX</p>
              <p>Email: qatar@masgroup.com</p>
            </address>
          </div>

          {/* KSA Office */}
          <div>
            <h3 className="text-lg font-semibold  text-yellow-600">KSA Office</h3>
            <address className="not-italic text-gray-700 text-sm">
              <p className="mb-1">Riyadh, Saudi Arabia</p>
              <p className="mb-1">Phone: +966 XXX XXX XXX</p>
              <p>Email: ksa@masgroup.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-200  ">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div className="mb-3 ">
              <p className="text-gray-700 text-center md:text-left text-sm">
                A one-stop destination for both blue and white-collar services
              </p>
            </div>
            <div className="text-gray-500 text-xs mb-3">
              <p>&copy; 2025 MAS Group of Companies. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;