"use client"

import React from 'react';
import { useLanguage } from './LanguageToggle';

// Define content type
type ContentType = {
  tr: {
    phone: {
      title: string;
      value: string;
    };
    email: {
      title: string;
      value: string;
    };
    address: {
      title: string;
      value: string;
    };
  };
  en: {
    phone: {
      title: string;
      value: string;
    };
    email: {
      title: string;
      value: string;
    };
    address: {
      title: string;
      value: string;
    };
  };
};

const Card = () => {
  const { language } = useLanguage();

  // Content in both languages
  const content: ContentType = {
    tr: {
      phone: {
        title: 'Telefon',
        value: '+90 (212) 422 86 33'
      },
      email: {
        title: 'E-posta',
        value: 'info@hasmar.com.tr'
      },
      address: {
        title: 'Adres',
        value: 'Cihangir Mah. Güvercin Cd. No: 3 Baha İş Merkezi B Blok K:1 Avcılar / İSTANBUL'
      }
    },
    en: {
      phone: {
        title: 'Phone',
        value: '+90 (212) 422 86 33'
      },
      email: {
        title: 'Email',
        value: 'info@hasmar.com.tr'
      },
      address: {
        title: 'Address',
        value: 'Cihangir Mah. Güvercin St. No: 3 Baha Business Center B Block Floor:1 Avcılar / ISTANBUL'
      }
    }
  };

  // Get current language content
  const t = content[language];

  return (
    <div className='flex justify-center'>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center w-250">
        {/* Phone */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.phone.title}</h3>
          <p className="text-gray-600">{t.phone.value}</p>
        </div>
        
        {/* Email */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.email.title}</h3>
          <p className="text-gray-600">{t.email.value}</p>
        </div>
        
        {/* Location */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{t.address.title}</h3>
          <p className="text-gray-600">{t.address.value}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;