"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useLanguage } from '../components/LanguageToggle';
import { useRouter, useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import Head from 'next/head';
import { LanguageProvider } from '../components/LanguageToggle';
// Define types
type CategoryType = {
  id: string;
  image: string;
  tr: string;
  en: string;
};

type ProductType = {
  id: string;
  categoryId: string;
  image: string;
  tr: {
    name: string;
    description: string;
  };
  en: {
    name: string;
    description: string;
  };
};

type ContentType = {
  tr: {
    title: string;
    subtitle: string;
    allCategories: string;
    productDetails: string;
    noProducts: string;
  };
  en: {
    title: string;
    subtitle: string;
    allCategories: string;
    productDetails: string;
    noProducts: string;
  };
};

// Create a new component that uses useSearchParams
const ProductsContent = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  useEffect(() => {
    // Get category from URL if present
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);

  // Content in both languages
  const content: ContentType = {
    tr: {
      title: "Ürünlerimiz",
      subtitle: "Kategoriye göre yüksek kaliteli ısıtıcı elemanlarımızı keşfedin",
      allCategories: "Tüm Kategoriler",
      productDetails: "Ürün Detayları",
      noProducts: "Bu kategoride ürün bulunamadı."
    },
    en: {
      title: "Our Products",
      subtitle: "Discover our high-quality heating elements by category",
      allCategories: "All Categories",
      productDetails: "Product Details",
      noProducts: "No products found in this category."
    }
  };

  // Categories in both languages (same as in your Categories component)
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
      tr: "KANATLİ ISITICI ELEMANLARI",
      en: "FINNED HEATING ELEMENTS"
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

  // Example products data (you would replace this with your actual products)
  const products: ProductType[] = [
    {
      id: "tea-machine-1",
      categoryId: "tea-machine",
      image: "/products/tea-machine-1.png",
      tr: {
        name: "Çay Makinesi Rezistansı Model A",
        description: "Çay makineleri için yüksek kaliteli paslanmaz çelik rezistans, 1000W güç."
      },
      en: {
        name: "Tea Machine Heating Element Model A",
        description: "High-quality stainless steel heating element for tea machines, 1000W power."
      }
    },
    {
      id: "tea-machine-2",
      categoryId: "tea-machine",
      image: "/products/tea-machine-2.png",
      tr: {
        name: "Çay Makinesi Rezistansı Model B",
        description: "Endüstriyel çay makineleri için dayanıklı rezistans, 1500W güç."
      },
      en: {
        name: "Tea Machine Heating Element Model B",
        description: "Durable heating element for industrial tea machines, 1500W power."
      }
    },
    {
      id: "deep-fryer-1",
      categoryId: "deep-fryer",
      image: "/products/deep-fryer-1.png",
      tr: {
        name: "Fritöz Rezistansı Kompakt",
        description: "Küçük fritözler için kompakt boyutlu rezistans, kolay montaj."
      },
      en: {
        name: "Deep Fryer Heating Element Compact",
        description: "Compact sized heating element for small deep fryers, easy installation."
      }
    },
    {
      id: "deep-fryer-2",
      categoryId: "deep-fryer",
      image: "/products/deep-fryer-2.png",
      tr: {
        name: "Endüstriyel Fritöz Rezistansı",
        description: "Yüksek güçlü endüstriyel fritöz ısıtıcı elemanı, 2500W."
      },
      en: {
        name: "Industrial Deep Fryer Heating Element",
        description: "High-power industrial deep fryer heating element, 2500W."
      }
    },
    {
      id: "oven-1",
      categoryId: "oven",
      image: "/products/oven-1.png",
      tr: {
        name: "Fırın Alt Rezistansı",
        description: "Ev tipi fırınlar için uzun ömürlü alt rezistans."
      },
      en: {
        name: "Oven Bottom Heating Element",
        description: "Long-lasting bottom heating element for household ovens."
      }
    },
    {
      id: "oven-2",
      categoryId: "oven",
      image: "/products/oven-2.png",
      tr: {
        name: "Fırın Üst Rezistansı",
        description: "Profesyonel fırınlar için üst rezistans, yüksek ısı dayanımı."
      },
      en: {
        name: "Oven Top Heating Element",
        description: "Top heating element for professional ovens, high heat resistance."
      }
    }
  ];

  // Get current language content
  const t = content[language];

  // Filter products by selected category or show all if none selected
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.categoryId === selectedCategory)
    : products;

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId === selectedCategory ? null : categoryId);
    router.push(`/products?category=${categoryId === selectedCategory ? '' : categoryId}`);
  };

  return (
    <>
      <Header/>
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
              {t.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          {/* Categories Filter */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{t.allCategories}</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategorySelect(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-800 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category[language]}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => {
                const category = categories.find(cat => cat.id === product.categoryId);
                
                return (
                  <div 
                    key={product.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
                  >
                    <div className="h-48 relative bg-gray-100">
                      <Image
                        src={product.image}
                        alt={product[language].name}
                        className="object-contain"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                      />
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {category ? category[language] : ''}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 h-16 flex items-start">
                        {product[language].name}
                      </h3>
                      <p className="text-sm text-gray-600 h-20 overflow-hidden">
                        {product[language].description}
                      </p>
                      <div className="mt-4 text-center">
                        <a 
                          href={`/product-details/${product.id}`}
                          className="inline-block bg-[#2f92d0] hover:bg-blue-500 text-white font-medium px-4 py-2 rounded-full transition-colors duration-200 text-sm"
                        >
                          {t.productDetails}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-10 col-span-full">
                <p className="text-gray-600">{t.noProducts}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Products = () => {
  return (
    <LanguageProvider>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductsContent />
      </Suspense>
    </LanguageProvider>
  );
};

export const dynamic = 'force-dynamic';
export default Products;