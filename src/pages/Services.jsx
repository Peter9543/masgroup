import React from 'react';
import ServiceCard from '../components/services/ServiceCard';

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
    <div className="pt-16 bg-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;