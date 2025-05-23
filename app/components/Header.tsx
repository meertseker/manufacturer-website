"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageToggle, { useLanguage } from './LanguageToggle';

// Define content type
type ContentType = {
  tr: {
    nav: {
      home: string;
      corporate: string;
      products: string;
      certificates: string;
    };
    contact: string;
  };
  en: {
    nav: {
      home: string;
      corporate: string;
      products: string;
      certificates: string;
    };
    contact: string;
  };
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Control header visibility based on scroll direction
  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      // Make header visible when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down (after scrolling a bit)
      else if (currentScrollY > 10 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', controlHeader);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', controlHeader);
    };
  }, [lastScrollY]);

  // Navigation content in both languages
  const content: ContentType = {
    tr: {
      nav: {
        home: 'Ana Sayfa',
        corporate: 'Kurumsal',
        products: 'Ürünler',
        certificates: 'Kalite Sertifikaları',
      },
      contact: 'İletişim',
    },
    en: {
      nav: {
        home: 'Home',
        corporate: 'Corporate',
        products: 'Products',
        certificates: 'Quality Certificates',
      },
      contact: 'Contact',
    },
  };

  // Get current language content
  const t = content[language];

  return (
    <div className="relative">
      <header 
        className={`bg-white px-4 md:px-8 py-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Logo */}
        <Link href="/">
        <div className="flex items-center font-bold text-lg md:text-xl text-indigo-900">
          <div className="w-18 h-18">
            <Image src="/logo.png" alt="Logo" width={400} height={400} />
          </div>
        </div>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base text-black font-medium pl-30">
          <Link href="/" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.home}
          </Link>
          <Link href="/corporate" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.corporate}
          </Link>
          <Link href="/products" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.products}
          </Link>
          <Link href="/certificates" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.certificates}
          </Link>
        </nav>

        {/* Right side: Language Toggle + Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageToggle />
          <Link
            href="/contact"
            className="bg-[#2f92d0] text-white text-sm px-5 py-2 rounded-full hover:bg-red-800 transition-colors duration-200 shadow-sm"
          >
            {t.contact}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <LanguageToggle />
          <button
            onClick={toggleMenu}
            className="text-slate-800 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-20"></div>

      {/* Mobile Menu */}
      {isMenuOpen && isVisible && (
        <div className="md:hidden fixed top-26 left-0 right-0 bg-white shadow-md z-40 py-4 px-6 flex flex-col space-y-4 text-slate-800 font-medium transition-transform duration-300">
          <Link href="/" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.home}
          </Link>
          <Link href="/corporate" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.corporate}
          </Link>
          <Link href="/products" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.products}
          </Link>
          <Link href="/certificates" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.certificates}
          </Link>
          <Link
            href="/contact"
            className="bg-indigo-700 text-white text-center py-2 rounded-full hover:bg-indigo-800 transition-colors duration-200 mt-2 shadow-sm"
          >
            {t.contact}
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;