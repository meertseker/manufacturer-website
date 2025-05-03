"use client";

import React from 'react';
import Image from 'next/image';
import { useLanguage } from './LanguageToggle';

// Define content type for categories
type CategoryType = {
  id: string;
  image: string;
  tr: string;
  en: string;
};

// Define content type
type ContentType = {
  tr: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
  en: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
};

const Categories = () => {
  const { language } = useLanguage();

  // Content in both languages
  const content: ContentType = {
    tr: {
      title: "Ürün Kategorileri",
      subtitle: "Yüksek kaliteli ısıtıcı elemanları çeşitlerimizi keşfedin",
      buttonText: "Detayları Gör"
    },
    en: {
      title: "Product Categories",
      subtitle: "Discover our range of high-quality heating elements",
      buttonText: "View Details"
    }
  };

  // Categories in both languages
  const categories: CategoryType[] = [
    {
      id: "tea-machine",
      image: "/tea-2.png",
      tr: "ÇAY MAKİNESİ ISITICI ELEMANLARI",
      en: "TEA MAKING MACHINE HEATING ELEMENTS"
    },
    {
      id: "deep-fryer",
      image: "/fritoz.png",
      tr: "DERİN FRİTÖZ ISITICI ELEMANLARI",
      en: "DEEP FRYER HEATING ELEMENTS"
    },
    {
      id: "toaster-grill",
      image: "/toaster.png",
      tr: "TOST VE IZGARA ISITICI ELEMANLARI",
      en: "TOASTER AND GRILL HEATING ELEMENTS"
    },
    {
      id: "bain-marie",
      image: "/benmari.png",
      tr: "BENMARI ISITICI ELEMANLARI",
      en: "BAIN-MARIE HEATING ELEMENTS"
    },
    {
      id: "boiler",
      image: "/boiler.png",
      tr: "BOYLER ISITICI ELEMANLARI",
      en: "BOILER HEATING ELEMENTS"
    },
    {
      id: "washing-dishwasher",
      image: "/dishwash.png",
      tr: "ÇAMAŞIR VE BULAŞIK MAKİNESİ ISITICI ELEMANLARI",
      en: "WASHING AND DISHWASHER MACHINE HEATING ELEMENTS"
    },
    {
      id: "straight",
      image: "/duz.png",
      tr: "DÜZ ISITICI ELEMANLARI",
      en: "STRAIGHT HEATING ELEMENTS"
    },
    {
      id: "oven",
      image: "/categories/oven.png",
      tr: "FIRIN ISITICI ELEMANLARI",
      en: "OVEN HEATING ELEMENTS"
    },
    {
      id: "finned",
      image: "/categories/finned.png",
      tr: "KANATLİ ISITICI ELEMANLARI",
      en: "FINNED HEATING ELEMENTS"
    },
    {
      id: "iron",
      image: "/categories/iron.png",
      tr: "ÜTÜ ISITICI ELEMANLARI",
      en: "IRON HEATING ELEMENTS"
    },
    {
      id: "technical",
      image: "/categories/technical.png",
      tr: "TEKNİK MALZEMELER",
      en: "TECHNICAL MATERIALS"
    }
  ];

  // Get current language content
  const t = content[language];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
            {t.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="h-48 relative bg-gray-100">
                <Image
                  src={category.image}
                  alt={category[language]}
                  className="object-contain"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={false}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 h-16 flex items-center justify-center text-center">
                  {category[language]}
                </h3>
                <div className="mt-4 text-center">
                  <a 
                    href={`/products/${category.id}`}
                    className="inline-block bg-[#2f92d0] hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-full transition-colors duration-200 text-sm"
                  >
                    {t.buttonText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;