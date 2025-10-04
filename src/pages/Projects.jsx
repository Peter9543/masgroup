import React, { useState } from 'react';

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
    <div className="pt-16 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of our successful partnerships and completed projects across the GCC region
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg dark:shadow-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Filter by Service</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-4 py-2 rounded-full ${
                    filter === 'all' 
                      ? 'bg-blue-700 text-white dark:bg-blue-600' 
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600'
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
                        ? 'bg-blue-700 text-white dark:bg-blue-600' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600'
                    }`}
                  >
                    {service}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">Filter by Location</label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setLocationFilter('all')}
                  className={`px-4 py-2 rounded-full ${
                    locationFilter === 'all' 
                      ? 'bg-blue-700 text-white dark:bg-blue-600' 
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600'
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
                        ? 'bg-blue-700 text-white dark:bg-blue-600' 
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600'
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
            <div key={project.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow dark:shadow-gray-700">
              <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-t-lg w-full h-48 flex items-center justify-center">
                <span className="text-gray-500 dark:text-gray-400">Project Image</span>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded">
                    {project.service}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.location}</p>
                <button className="text-blue-700 dark:text-blue-400 font-medium hover:underline">
                  View Case Study →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Our Clients */}
        <section className="py-16 dark:bg-gray-800/50 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm flex items-center justify-center h-32 dark:shadow-gray-700">
              <span className="font-medium text-gray-700 dark:text-gray-200 text-center">FIFA World Cup 2022</span>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm flex items-center justify-center h-32 dark:shadow-gray-700">
              <span className="font-medium text-gray-700 dark:text-gray-200 text-center">Qatar Steel</span>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm flex items-center justify-center h-32 dark:shadow-gray-700">
              <span className="font-medium text-gray-700 dark:text-gray-200 text-center">Hamad International Airport</span>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm flex items-center justify-center h-32 dark:shadow-gray-700">
              <span className="font-medium text-gray-700 dark:text-gray-200 text-center">RasGas</span>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm flex items-center justify-center h-32 dark:shadow-gray-700">
              <span className="font-medium text-gray-700 dark:text-gray-200 text-center">Doha Festival City</span>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm flex items-center justify-center h-32 dark:shadow-gray-700">
              <span className="font-medium text-gray-700 dark:text-gray-200 text-center">More Clients</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;