import { useState } from 'react';
import Link from 'next/link';
import { FaInstagram, FaBars, FaTimes } from 'react-icons/fa';
import MobileMenu from './MobileMenu';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-white shadow-md py-4">
        <div className="container-custom flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-200">
            <Image
              src="/images/logo.jpg"
              alt="BUNZ Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-display text-primary">BUNZ</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {[
              { href: '/', label: 'Home' },
              { href: '/menu', label: 'Menu' },
              { href: '/location', label: 'Location' },
              { href: '/about', label: 'About' },
              { href: '/contact', label: 'Contact' }
            ].map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="relative group"
              >
                <span className="relative inline-block font-medium text-gray-700 hover:text-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-primary transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/bunz.rw/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-dark hover:text-primary transition-colors duration-200 hover:scale-110 transform"
            >
              <FaInstagram size={24} />
            </a>
            <button 
              className="md:hidden text-gray-500 hover:text-primary transition-all duration-200 hover:rotate-180"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <FaBars size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />

    </>
  );
};

export default Header; 