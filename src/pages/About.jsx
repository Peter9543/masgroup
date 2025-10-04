import React from 'react';

const About = () => {
  // Timeline data
  const timelineEvents = [
    { year: "2009", event: "Founded in Qatar" },
    { year: "2015", event: "Expansion to India" },
    { year: "2020", event: "Expansion to KSA" },
    { year: "2025", event: "Expansion to UAE" },
  ];

  return (
    <div className="pt-16 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About MAS Group</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A leading integrated business solutions provider in the GCC region
          </p>
        </div>

        {/* Company History */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Company History</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 dark:shadow-gray-700">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Established in 2009 in Qatar, MAS Group began as a specialized manpower solutions provider. 
              Over the years, we recognized the growing demand for comprehensive business services across 
              various sectors in the Gulf region.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              With a vision to become a one-stop destination for both blue and white-collar services, 
              we expanded our offerings to include contracting, engineering, trading, transportation, 
              corporate services, and facility management. Our commitment to excellence and customer 
              satisfaction has enabled us to grow our presence across multiple countries.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Today, with over 16 years of experience and a workforce of more than 1500 strong, 
              MAS Group stands as a trusted partner for businesses seeking reliable and professional 
              services across the GCC region and beyond.
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg shadow-md p-8 dark:shadow-gray-700">
              <h3 className="text-2xl font-bold text-blue-900 dark:text-blue-400 mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To be the premier integrated business solutions provider in the GCC region, 
                recognized for our innovation, reliability, and commitment to excellence. 
                We aspire to set new benchmarks in service quality and customer satisfaction 
                across all sectors we serve.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-8 dark:shadow-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300">
                To deliver exceptional manpower, contracting, trading, transportation, 
                corporate, and facility management services that empower our clients 
                to achieve their business objectives. We are committed to fostering 
                long-term partnerships built on trust, integrity, and mutual growth.
              </p>
            </div>
          </div>
        </section>

        {/* Our Journey Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Journey</h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/50 hidden md:block"></div>
            
            {/* Timeline events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div 
                  key={event.year} 
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="md:w-1/2 mb-4 md:mb-0 md:px-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-700">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.event}</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.year} marked a significant milestone in our journey as we 
                        {event.year === "2009" && " established our foundation in Qatar, beginning our mission to provide quality manpower solutions."}
                        {event.year === "2015" && " expanded our operations to India, broadening our talent pool and service capabilities."}
                        {event.year === "2020" && " entered the Saudi Arabian market, extending our regional presence and service offerings."}
                        {event.year === "2025" && " launched operations in the UAE, completing our strategic expansion across the GCC region."}
                      </p>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 flex justify-center md:justify-start md:pl-48">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-blue-700 dark:bg-blue-600 flex items-center justify-center text-white font-bold text-xl z-10">
                        {event.year}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;