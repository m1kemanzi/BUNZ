'use client';

import { useState } from 'react';
import ClientLayout from '@/components/ClientLayout';
import Image from 'next/image';
import PageTransition from '@/components/PageTransition';
import JobApplicationModal from '@/components/JobApplicationModal';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <PageTransition>
      <ClientLayout>
        <main>
          <section className="py-12 bg-light">
            <div className="container-custom">
              <h1 className="text-4xl font-display text-center mb-12">About BUNZ</h1>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                  <p className="mb-4">
                    BUNZ was founded in 2022 with a simple vision: to bring delicious, high-quality sandwiches to the 
                    heart of Kigali. What started as a small sandwich stand quickly grew into the vibrant sandwich 
                    shop you know today.
                  </p>
                  <p className="mb-4">
                    Our founder, a passionate foodie and entrepreneur, noticed that while Kigali had many restaurants, 
                    there was a gap in the market for a dedicated sandwich shop that could serve fresh, creative, and 
                    satisfying sandwiches made with locally-sourced ingredients.
                  </p>
                  <p>
                    Since our humble beginnings, we've been committed to bringing the best sandwich experience to our 
                    customers, combining international flavors with local touches that make our sandwiches uniquely BUNZ.
                  </p>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/images/bunzresto.jpg"
                    alt="BUNZ Restaurant Exterior"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-center">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Quality</h3>
                    <p className="text-gray-600">
                      We never compromise on quality. From the bread we use to the ingredients we source, 
                      we ensure everything is fresh and of the highest quality.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Community</h3>
                    <p className="text-gray-600">
                      We believe in supporting our local community. We source ingredients from local farmers 
                      and producers whenever possible.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Innovation</h3>
                    <p className="text-gray-600">
                      We're always exploring new flavor combinations and sandwich creations. 
                      Our menu evolves with seasonal ingredients and customer feedback.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
                <p className="text-center max-w-2xl mx-auto mb-8">
                  BUNZ is made up of passionate food lovers who take pride in creating the perfect sandwich. 
                  From our chefs to our servers, everyone plays a crucial role in delivering the BUNZ experience.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src="/images/ceo.png"
                        alt="Bond - CEO"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-lg">Bond</h3>
                      <p className="text-primary">Owner</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative h-64">
                      <Image
                        src="/images/barista.jpeg"
                        alt="Ronald - Barista"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-lg">Ronald</h3>
                      <p className="text-primary">Barista</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Team Member Photo</span>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-lg">Sarah</h3>
                      <p className="text-primary">Assembler</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Team Member Photo</span>
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-lg">John</h3>
                      <p className="text-primary">Assembler</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center">Visit Us Today</h2>
                <p className="text-center max-w-2xl mx-auto mb-8">
                  We invite you to come experience BUNZ for yourself. Whether you're stopping by for a quick lunch or 
                  planning to hang out with friends, we're ready to serve you the best sandwiches in Kigali.
                </p>
                <div className="text-center">
                  <a 
                    href="https://g.co/kgs/bkeje8v" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary inline-block mx-2"
                  >
                    Get Directions
                  </a>
                  <a 
                    href="https://www.instagram.com/bunz.rw/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary inline-block mx-2"
                  >
                    Follow on Instagram
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Join Our Team Section */}
          <section className="py-16 bg-white">
            <div className="container-custom">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="section-heading mb-6">Join Our Team</h2>
                <p className="text-gray-600 mb-8">
                  Are you passionate about creating amazing sandwiches and providing exceptional customer service? 
                  We're always looking for talented individuals to join our growing team at BUNZ. 
                  Whether you're an experienced food service professional or just starting your career, 
                  we offer a fun, dynamic work environment with opportunities for growth.
                </p>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </section>

          {/* Job Application Modal */}
          <JobApplicationModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        </main>
      </ClientLayout>
    </PageTransition>
  );
} 