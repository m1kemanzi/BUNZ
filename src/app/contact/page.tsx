import ClientLayout from '@/components/ClientLayout';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <ClientLayout>
      <main>
        <section className="py-12 bg-light">
          <div className="container-custom">
            <h1 className="text-4xl font-display text-center mb-8">Contact Us</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                  
                  <form>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary w-full md:w-auto"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <ul className="space-y-6">
                    <li className="flex">
                      <FaMapMarkerAlt className="text-primary text-xl mt-1 mr-4" />
                      <div>
                        <h3 className="font-bold mb-1">Address</h3>
                        <p>KG 5 Ave, Near Kigali Heights</p>
                        <p>Kacyiru, Kigali, Rwanda</p>
                      </div>
                    </li>
                    <li className="flex">
                      <FaPhone className="text-primary text-xl mt-1 mr-4" />
                      <div>
                        <h3 className="font-bold mb-1">Phone</h3>
                        <p>+250 788 123 456</p>
                      </div>
                    </li>
                    <li className="flex">
                      <FaEnvelope className="text-primary text-xl mt-1 mr-4" />
                      <div>
                        <h3 className="font-bold mb-1">Email</h3>
                        <p>info@bunz.rw</p>
                      </div>
                    </li>
                    <li className="flex">
                      <FaInstagram className="text-primary text-xl mt-1 mr-4" />
                      <div>
                        <h3 className="font-bold mb-1">Instagram</h3>
                        <p>
                          <a 
                            href="https://www.instagram.com/bunz.rw/?hl=en" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            @bunz.rw
                          </a>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                  <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>10:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday - Sunday</span>
                      <span>11:00 AM - 10:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ClientLayout>
  );
} 