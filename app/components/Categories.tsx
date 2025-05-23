"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
    loadMore: string;
  };
  en: {
    title: string;
    subtitle: string;
    buttonText: string;
    loadMore: string;
  };
};

const Categories = () => {
  const { language } = useLanguage();
  const [visibleCategories, setVisibleCategories] = useState(4);

  // Content in both languages
  const content: ContentType = {
    tr: {
      title: "Ürün Kategorileri",
      subtitle: "Yüksek kaliteli ısıtıcı elemanları çeşitlerimizi keşfedin",
      buttonText: "Detayları Gör",
      loadMore: "Daha Fazla Göster"
    },
    en: {
      title: "Product Categories",
      subtitle: "Discover our range of high-quality heating elements",
      buttonText: "View Details",
      loadMore: "Load More"
    }
  };

  // Categories in both languages
  const categories: CategoryType[] = [
    {
      id: "tea-machine",
      image: "/1.png",
      tr: "ÇAY MAKİNESİ ISITICI ELEMANLARI",
      en: "TEA MAKING MACHINE HEATING ELEMENTS"
    },
    {
      id: "deep-fryer",
      image: "/2.png",
      tr: "DERİN FRİTÖZ ISITICI ELEMANLARI",
      en: "DEEP FRYER HEATING ELEMENTS"
    },
    {
      id: "toaster-grill",
      image: "/3.png",
      tr: "TOST VE IZGARA ISITICI ELEMANLARI",
      en: "TOASTER AND GRILL HEATING ELEMENTS"
    },
    {
      id: "bain-marie",
      image: "/4.png",
      tr: "BENMARI ISITICI ELEMANLARI",
      en: "BAIN-MARIE HEATING ELEMENTS"
    },
    {
      id: "boiler",
      image: "/5.png",
      tr: "BOYLER ISITICI ELEMANLARI",
      en: "BOILER HEATING ELEMENTS"
    },
    {
      id: "washing-dishwasher",
      image: "/6.png",
      tr: "ÇAMAŞIR VE BULAŞIK MAKİNESİ ISITICI ELEMANLARI",
      en: "WASHING AND DISHWASHER MACHINE HEATING ELEMENTS"
    },
    {
      id: "straight",
      image: "/7.png",
      tr: "DÜZ ISITICI ELEMANLARI",
      en: "STRAIGHT HEATING ELEMENTS"
    },
    {
      id: "oven",
      image: "/8.png",
      tr: "FIRIN ISITICI ELEMANLARI",
      en: "OVEN HEATING ELEMENTS"
    },
    {
      id: "finned",
      image: "/9.png",
      tr: "SERPANTİNLİ REZİSTANSLAR",
      en: "SERPENTINE HEATING ELEMENTS"
    },
    {
      id: "iron",
      image: "/10.png",
      tr: "ÜTÜ ISITICI ELEMANLARI",
      en: "IRON HEATING ELEMENTS"
    },
    {
      id: "technical",
      image: "/11.png",
      tr: "TEKNİK MALZEMELER",
      en: "TECHNICAL MATERIALS"
    }
  ];

  // Get current language content
  const t = content[language];

  const handleLoadMore = () => {
    setVisibleCategories(prev => Math.min(prev + 4, categories.length));
  };

  const visibleCategoriesList = categories.slice(0, visibleCategories);
  const hasMoreCategories = visibleCategories < categories.length;

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
          {visibleCategoriesList.map((category) => (
            <Link 
              key={category.id}
              href={`/products?category=${category.id}`}
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
                  <span 
                    className="inline-block bg-[#2f92d0] hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-full transition-colors duration-200 text-sm"
                  >
                    {t.buttonText}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {hasMoreCategories && (
          <div className="text-center mt-8">
            <button
              onClick={handleLoadMore}
              className="bg-white border-2 border-[#2f92d0] text-[#2f92d0] hover:bg-[#2f92d0] hover:text-white font-medium px-6 py-3 rounded-full transition-colors duration-200"
            >
              {t.loadMore}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;