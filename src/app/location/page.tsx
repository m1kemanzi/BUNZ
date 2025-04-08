import ClientLayout from '@/components/ClientLayout';
import { FaMapMarkerAlt, FaPhone, FaClock, FaParking, FaWifi, FaUtensils } from 'react-icons/fa';

export default function LocationPage() {
  return (
    <ClientLayout>
      <main>
        <section className="py-12 bg-light">
          <div className="container-custom">
            <h1 className="text-4xl font-display text-center mb-8">Our Locations</h1>
            
            {/* KABC Location */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
              <div className="h-[400px] bg-gray-200">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy" 
                  allowFullScreen
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn8BW0KKn3BkR0Dz9rB2mPew&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                ></iframe>
              </div>
              
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">KABC Location</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <FaMapMarkerAlt className="text-primary mr-2" />
                      Address
                    </h3>
                    <p className="mb-2">KG 5 Ave</p>
                    <p className="mb-2">Near Kigali Heights</p>
                    <p className="mb-2">Kacyiru, Kigali</p>
                    <p>Rwanda</p>
                    
                    <div className="mt-6">
                      <a 
                        href="https://g.co/kgs/bkeje8v" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary inline-block"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <FaClock className="text-primary mr-2" />
                      Opening Hours
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tuesday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wednesday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thursday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>11:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>11:00 AM - 10:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <FaPhone className="text-primary mr-2" />
                      Contact
                    </h3>
                    <p className="mb-4">Phone: +250 788 123 456</p>
                    <p className="mb-4">Email: info@bunzrwanda.com</p>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">Amenities</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <FaWifi className="text-primary mr-2" />
                        Free Wi-Fi
                      </li>
                      <li className="flex items-center">
                        <FaParking className="text-primary mr-2" />
                        Parking Available
                      </li>
                      <li className="flex items-center">
                        <FaUtensils className="text-primary mr-2" />
                        Dine-in & Takeaway
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Simba Center Location */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-[400px] bg-gray-200">
                <iframe 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  loading="lazy" 
                  allowFullScreen
                  src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJN74uKQCh3BkRMZrXBvKS7w8&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                ></iframe>
              </div>
              
              <div className="p-6 md:p-8">
                <h2 className="text-2xl font-bold mb-4">Simba Center Location</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <FaMapMarkerAlt className="text-primary mr-2" />
                      Address
                    </h3>
                    <p className="mb-2">Simba Supermarket</p>
                    <p className="mb-2">KG 7 Ave</p>
                    <p className="mb-2">Kimihurura, Kigali</p>
                    <p>Rwanda</p>
                    
                    <div className="mt-6">
                      <a 
                        href="https://maps.app.goo.gl/msFZKQRgzwHTkdLu5" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-primary inline-block"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <FaClock className="text-primary mr-2" />
                      Opening Hours
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Monday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tuesday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wednesday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thursday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday</span>
                        <span>10:00 AM - 9:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday</span>
                        <span>11:00 AM - 10:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span>11:00 AM - 10:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <FaPhone className="text-primary mr-2" />
                      Contact
                    </h3>
                    <p className="mb-4">Phone: +250 788 789 012</p>
                    <p className="mb-4">Email: info@bunzrwanda.com</p>
                    
                    <h3 className="text-xl font-bold mb-4 mt-8">Amenities</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <FaWifi className="text-primary mr-2" />
                        Free Wi-Fi
                      </li>
                      <li className="flex items-center">
                        <FaParking className="text-primary mr-2" />
                        Parking Available
                      </li>
                      <li className="flex items-center">
                        <FaUtensils className="text-primary mr-2" />
                        Dine-in & Takeaway
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="section-heading">How to Find Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Public Transportation</h3>
                  <p className="mb-4">
                    Take bus lines 103, 105, or 107 to either Kigali Heights or Simba Center stops.
                    Both of our locations are easily accessible via public transportation.
                  </p>
                  <p>
                    Motorcycle taxis and ride-sharing services like VW Move and YegoCabs
                    are also readily available throughout Kigali.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Parking Information</h3>
                  <p className="mb-4">
                    Both of our locations have convenient parking options available.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>KABC Location: Parking available in the KABC complex</li>
                    <li>Simba Center: Free parking available in the Simba Supermarket lot</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ClientLayout>
  );
} 