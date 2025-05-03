"use client";
import React from 'react'
import { useLanguage } from './LanguageToggle'

type ContentType = {
  tr: {
    titlePart1: string;
    titlePart2: string;
    contactButton: string;
    productsButton: string;
  };
  en: {
    titlePart1: string;
    titlePart2: string;
    contactButton: string;
    productsButton: string;
  };
};

const Intro = () => {
  const { language } = useLanguage();

  const content: ContentType = {
    tr: {
      titlePart1: "Hasmar'a Hoş Geldiniz!",
      titlePart2: " Endüstriyel Isıtıcı Rezistans Üretimi",
      contactButton: "İletişim",
      productsButton: "Ürünlerimiz"
    },
    en: {
      titlePart1: "Welcome to Hasmar!",
      titlePart2: "Industrial Heating Resistance Manufacturing",
      contactButton: "Contact",
      productsButton: "Our Products"
    }
  };

  const t = content[language];

  return (
    <div>
      <div className="relative overflow-hidden pt-16 pb-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/resistances4.png')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950-900/70 bg-[#2f92d0]/50"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {t.titlePart1}
              <br /> 
              {t.titlePart2}
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <a href="#" className="bg-[#2f92d0] hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 min-w-36 text-center shadow-md">
                {t.contactButton}
              </a>
              <a href="#" className="flex items-center justify-center gap-2 text-white font-medium hover:text-indigo-200 transition-colors duration-200">
                <span className="flex items-center justify-center bg-[#2f92d0] text-white rounded-full w-8 h-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </span>
                {t.productsButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro