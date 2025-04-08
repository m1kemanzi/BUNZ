import Link from 'next/link';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Location = () => {
  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">Visit Us</h2>
            <p className="text-gray-600 mb-6">
              We have two convenient locations in Kigali. Come visit us to enjoy our delicious sandwiches in a cozy atmosphere.
            </p>
            
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">KABC Location</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-primary" size={20} />
                  <div>
                    <p className="font-medium">KG 5 Ave, Kigali, Rwanda</p>
                    <p className="text-gray-600">Near Kigali Heights, Kacyiru</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaPhone className="mt-1 mr-3 text-primary" size={20} />
                  <div>
                    <p className="font-medium">+250 788 123 456</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">Simba Center Location</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-primary" size={20} />
                  <div>
                    <p className="font-medium">Simba Supermarket, KG 7 Ave</p>
                    <p className="text-gray-600">Kimihurura, Kigali</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaPhone className="mt-1 mr-3 text-primary" size={20} />
                  <div>
                    <p className="font-medium">+250 788 789 012</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h3 className="font-bold text-lg mb-4">Hours (Both Locations)</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaClock className="mt-1 mr-3 text-primary" size={20} />
                  <div>
                    <p className="font-medium">Opening Hours</p>
                    <p className="text-gray-600">Monday - Friday: 10AM - 9PM</p>
                    <p className="text-gray-600">Saturday - Sunday: 11AM - 10PM</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="flex gap-4">
              <Link href="/location" className="btn-primary">
                View All Locations
              </Link>
              <Link href="/contact" className="btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
            <iframe 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              loading="lazy" 
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJn8BW0KKn3BkR0Dz9rB2mPew&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location; 