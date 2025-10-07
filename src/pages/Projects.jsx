import React, { useState } from 'react';
import Client1 from '@/assets/logos/Client-1.png'
import Client2 from '@/assets/logos/Client-2.png'
import Client3 from '@/assets/logos/Client-3.png'
import Client4 from '@/assets/logos/Client-4.png'
import Client5 from '@/assets/logos/Client-5.png'
import Client6 from '@/assets/logos/Client-6.png'
import Client7 from '@/assets/logos/Client-7.png'
import Client8 from '@/assets/logos/Client-8.png'
import Client9 from '@/assets/logos/Client-9.png'
import Client10 from '@/assets/logos/Client-10.png'
import Client11 from '@/assets/logos/Client-11.png'

import Marquee from "react-fast-marquee";
const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "FIFA World Cup 2022 Support",
      service: "Manpower",
      location: "Qatar",
      image: "project1.jpg"
    },
    {
      id: 2,
      title: "Hamad International Airport Expansion",
      service: "Contracting",
      location: "Qatar",
      image: "project2.jpg"
    },
    {
      id: 3,
      title: "Doha Festival City Development",
      service: "Contracting",
      location: "Qatar",
      image: "project3.jpg"
    },
    {
      id: 4,
      title: "RasGas Facility Maintenance",
      service: "Facility Management",
      location: "Qatar",
      image: "project4.jpg"
    },
    {
      id: 5,
      title: "Corporate Transport Solutions",
      service: "Transportation",
      location: "UAE",
      image: "project5.jpg"
    },
    {
      id: 6,
      title: "Office Complex Development",
      service: "Contracting",
      location: "KSA",
      image: "project6.jpg"
    }
  ];
    const clientLogos = [
          { id: 1, name:Client1  },
          { id: 2, name:Client2  },
          { id: 3, name:Client3  },
          { id: 4, name:Client4  },
          { id: 5, name:Client5  },
          { id: 6, name:Client6  },
          { id: 7, name:Client7  },
          { id: 8, name:Client8  },
          { id: 9, name:Client9  },
          { id: 10, name:Client10  },
          { id: 11, name:Client11  },
      ];

  // Filter projects based on selected filters
  const filteredProjects = projects.filter(project => {
    const serviceMatch = filter === 'all' || project.service === filter;
    const locationMatch = locationFilter === 'all' || project.location === locationFilter;
    return serviceMatch && locationMatch;
  });

  // Get unique services and locations for filters
  const services = [...new Set(projects.map(project => project.service))];
  const locations = [...new Set(projects.map(project => project.location))];

  return (
    <div className="pt-16 bg-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of our successful partnerships and completed projects across the GCC region
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Filter by Service</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full ${
                    filter === 'all' 
                      ? 'bg-yellow-500 text-gray-900' 
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  All Services
                </button>
                {services.map(service => (
                  <button
                    key={service}
                    onClick={() => setFilter(service)}
                    className={`px-4 py-2 rounded-full ${
                      filter === service 
                        ? 'bg-yellow-500 text-gray-900' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 font-medium mb-2">Filter by Location</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setLocationFilter('all')}
                  className={`px-4 py-2 rounded-full ${
                    locationFilter === 'all' 
                      ? 'bg-yellow-500 text-gray-900' 
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                  }`}
                >
                  All Locations
                </button>
                {locations.map(location => (
                  <button
                    key={location}
                    onClick={() => setLocationFilter(location)}
                    className={`px-4 py-2 rounded-full ${
                      locationFilter === location 
                        ? 'bg-yellow-500 text-gray-900' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map(project => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-200">
              <div className="bg-gray-200 border-2 border-dashed border-gray-300 rounded-t-lg w-full h-48 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {project.service}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.location}</p>
              
              </div>
            </div>
          ))}
        </div>

        {/* Our Clients */}
       <section className="py-16  transition-colors duration-300 container mx-auto">
                <div className="px-4">
                    <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
                        Our Clients
                    </h2>

                    <Marquee
                        speed={75} gradient={false} loop={0} autoFill={true}
                    >
                        {clientLogos.map((logo) => (
                            <div
                                key={logo.id}
                                className="flex items-center justify-center bg-white p-6 rounded-lg shadow-sm w-30 h-35 mx-6 border border-gray-200"
                            >
                                <span className="font-medium text-gray-700">
                                   <img src={logo.name} alt="" className='w-full h-full' />
                                </span>
                            </div>
                        ))}
                    </Marquee>
                </div>
            </section>
      </div>
    </div>
  );
};

export default Projects;