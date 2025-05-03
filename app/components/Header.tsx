"use client"

import React, { useState } from 'react';
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
  const { language } = useLanguage();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
      <header className="bg-white px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center font-bold text-lg md:text-xl text-indigo-900">
          <div className="w-18 h-18">
            <Image src="/logo.png" alt="Logo" width={400} height={400} />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm lg:text-base text-black font-medium pl-30">
          <Link href="/" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.home}
          </Link>
          <Link href="/siniflar" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.corporate}
          </Link>
          <Link href="/" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.products}
          </Link>
          <Link href="/bultenler" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.certificates}
          </Link>
        </nav>

        {/* Right side: Language Toggle + Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <LanguageToggle />
          <a
            href="#"
            className="bg-[#2f92d0] text-white text-sm px-5 py-2 rounded-full hover:bg-red-800 transition-colors duration-200 shadow-sm"
          >
            {t.contact}
          </a>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-orange-50 shadow-md z-50 py-4 px-6 flex flex-col space-y-4 text-slate-800 font-medium">
          <Link href="/" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.home}
          </Link>
          <Link href="/siniflar" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.corporate}
          </Link>
          <Link href="/" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.products}
          </Link>
          <Link href="/bultenler" className="hover:text-indigo-700 transition-colors duration-200">
            {t.nav.certificates}
          </Link>
          <a
            href="#"
            className="bg-indigo-700 text-white text-center py-2 rounded-full hover:bg-indigo-800 transition-colors duration-200 mt-2 shadow-sm"
          >
            {t.contact}
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;