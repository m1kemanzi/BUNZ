import Link from 'next/link';
import { FaInstagram, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-auto">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-2xl text-white mb-4">BUNZ</h3>
            <p className="mb-4">
              Delicious sandwiches made with fresh ingredients and love.
              Visit us for the best sandwich experience in Kigali.
            </p>
            <a 
              href="https://www.instagram.com/bunz.rw/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-white hover:text-secondary transition-colors"
            >
              <FaInstagram size={20} className="mr-2" />
              Follow us on Instagram
            </a>
          </div>
          
          <div>
            <h3 className="text-xl text-white font-bold mb-4">KABC Location</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-secondary" />
                <span>KG 5 Ave, Near Kigali Heights, Kacyiru</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-secondary" />
                <span>+250 788 123 456</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-white font-bold mb-4">Simba Center</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-secondary" />
                <span>Simba Supermarket, KG 7 Ave, Kimihurura</span>
              </li>
              <li className="flex items-start">
                <FaPhone className="mt-1 mr-3 text-secondary" />
                <span>+250 788 789 012</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl text-white font-bold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2">
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="hover:text-secondary transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/menu" className="hover:text-secondary transition-colors">
                      Menu
                    </Link>
                  </li>
                  <li>
                    <Link href="/location" className="hover:text-secondary transition-colors">
                      Locations
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="hover:text-secondary transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-secondary transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            
            <h3 className="text-xl text-white font-bold mb-4 mt-6">Hours</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaClock className="mt-1 mr-3 text-secondary" />
                <div>
                  <p>Monday - Friday: 10AM - 9PM</p>
                  <p>Saturday - Sunday: 11AM - 10PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BUNZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 