import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div 
      className={`fixed inset-0 bg-dark bg-opacity-95 z-50 flex flex-col justify-center items-center transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <button 
        onClick={toggleMenu}
        className="absolute top-6 right-6 text-white hover:text-secondary"
        aria-label="Close menu"
      >
        <FaTimes size={28} />
      </button>
      
      <nav className="flex flex-col items-center space-y-6">
        <Link 
          href="/" 
          className="text-white text-2xl font-medium hover:text-secondary transition-colors"
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link 
          href="/menu" 
          className="text-white text-2xl font-medium hover:text-secondary transition-colors"
          onClick={toggleMenu}
        >
          Menu
        </Link>
        <Link 
          href="/location" 
          className="text-white text-2xl font-medium hover:text-secondary transition-colors"
          onClick={toggleMenu}
        >
          Location
        </Link>
        <Link 
          href="/about" 
          className="text-white text-2xl font-medium hover:text-secondary transition-colors"
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className="text-white text-2xl font-medium hover:text-secondary transition-colors"
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </nav>
      
      <div className="mt-12">
        <a 
          href="https://www.instagram.com/bunz.rw/?hl=en" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Follow on Instagram
        </a>
      </div>
    </div>
  );
};

export default MobileMenu; 