import React from 'react';

const Safety = () => {
  return (
    <div className="pt-16 bg-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">Safety</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our unwavering commitment to safety in every project and operation
          </p>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 rounded-lg p-8 text-gray-900 text-center">
            <h2 className="text-3xl font-bold mb-4">Safety: The Axis of Our Company</h2>
            <p className="text-xl max-w-3xl mx-auto">
              At MAS Group, safety isn't just a policy—it's the foundation of everything we do. 
              We believe that every project, no matter how big or small, deserves the highest 
              standards of safety and protection.
            </p>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Safety Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrated Safety Planning</h3>
              <p className="text-gray-700 mb-4">
                Safety is integrated into every phase of our projects, from initial planning 
                through execution. Our comprehensive safety protocols are designed to anticipate 
                and mitigate risks before they occur.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Pre-project risk assessments</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Customized safety plans for each project</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Regular safety audits and inspections</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On-Site Safety Supervision</h3>
              <p className="text-gray-700 mb-4">
                Our dedicated safety officers ensure strict adherence to protocols throughout 
                project execution. We maintain constant vigilance to protect our workforce 
                and client assets.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Certified safety professionals on-site</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Continuous monitoring and reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Immediate response to safety concerns</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Regulatory Compliance</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-700 text-lg mb-6">
                We strictly adhere to all QHSE (Quality, Health, Safety, and Environment) guidelines 
                as per ministry specifications in all countries where we operate. Our commitment to 
                compliance ensures that we meet and exceed industry standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Standards</h3>
                  <p className="text-gray-600">ISO certifications and quality management systems</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Health & Safety</h3>
                  <p className="text-gray-600">Comprehensive health and safety protocols</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Environmental</h3>
                  <p className="text-gray-600">Environmental protection and sustainability</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Culture */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Building a Safety Culture</h2>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <p className="text-gray-700 text-lg mb-6">
              Our approach to safety extends beyond compliance. We foster a culture where every 
              team member takes personal responsibility for safety, creating an environment where 
              safety is a shared value, not just a requirement.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Training & Education</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Regular safety training programs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Certification and skill development</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Safety awareness campaigns</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Improvement</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Regular safety performance reviews</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Incident analysis and prevention</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>Feedback-driven safety enhancements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Safety;