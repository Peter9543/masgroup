import React from 'react';
import { Button } from '../../components/ui/button';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 h-full flex flex-col">
      <div className="p-6 flex-grow">
        <h2 className="text-xl font-bold rounded text-center  bg-yellow-500 mb-3">{service.title}</h2>
        <p className="text-gray-700 mb-5">{service.description}</p>
        
        <ul className="mb-6 space-y-2">
          {service.details.map((detail, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span className="text-gray-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* <div className="px-6 pb-6">
        <Button variant="gold" className="font-medium w-full">
          {service.cta}
        </Button>
      </div> */}
    </div>
  );
};

export default ServiceCard;