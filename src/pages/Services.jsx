import React from 'react';
import { Button } from '../components/ui/button';

const Services = () => {
  // Services data
  const services = [
    {
      id: "manpower",
      title: "Manpower Support",
      description: "Providing skilled, semi-skilled, and unskilled labor across various industries",
      details: [
        "House Keeping Staff",
        "Security Personnel",
        "Packing Staff",
        "Sourcing from India, Nepal, and Sri Lanka"
      ],
      cta: "Request Manpower"
    },
    {
      id: "contracting",
      title: "Contracting & Engineering",
      description: "Expertise in MEP/Civil Construction and Maintenance services",
      details: [
        "Residential, Commercial, and Public Buildings",
        "Skilled Engineering Team",
        "Complete Construction Solutions"
      ],
      cta: "Discuss Your Project"
    },
    {
      id: "trading",
      title: "Trading & Supply",
      description: "Building materials, PPE, and heavy equipment supply chain",
      details: [
        "International Links for Quality Products",
        "State-of-the-Art Warehousing",
        "Fast Delivery Services"
      ],
      cta: "Inquire About Supplies"
    },
    {
      id: "transportation",
      title: "Transportation & Limousine",
      description: "Comprehensive transportation solutions for corporate and leisure",
      details: [
        "Corporate Vehicle Rentals",
        "Group Transportation",
        "Airport Transfers",
        "Sightseeing Tours"
      ],
      cta: "Book Your Transport"
    },
    {
      id: "corporate",
      title: "Corporate & Real Estate",
      description: "Complete business setup and property management solutions",
      details: [
        "Business Setup Services",
        "Document Attestation",
        "Visa Services",
        "PRO Services in GCC",
        "Property Management",
        "Real Estate Development"
      ],
      cta: "Consult Our Experts"
    },
    {
      id: "facility",
      title: "Facility Management",
      description: "Professional facility management services for modern workplaces",
      details: [
        "Daily Office Cleaning",
        "Window Cleaning",
        "Hard Floor Surface Care",
        "International Service Standards"
      ],
      cta: "Request a Cleaning Quote"
    }
  ];

  return (
    <div className="pt-16 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive business solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden dark:shadow-gray-700">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">{service.description}</p>
                
                <ul className="mb-8 space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="bg-blue-700 hover:bg-blue-800 text-white dark:bg-blue-600 dark:hover:bg-blue-700">
                  {service.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;