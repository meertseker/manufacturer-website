"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { useLanguage } from '../components/LanguageToggle';
import { useRouter, useSearchParams } from 'next/navigation';
import Header from '../components/Header';
import { LanguageProvider } from '../components/LanguageToggle';
import { ProductCategory } from '../lib/products';

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

async function getProducts(): Promise<ProductCategory[]> {
  const response = await fetch('/api/products');
  const data = await response.json();
  return data;
}

const ProductsContent = () => {
  const { language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<ProductCategory[]>([]);
  
  useEffect(() => {
    // Load products data
    getProducts().then(productsData => {
      setCategories(productsData);
    });

    // Get category from URL if present
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory(null);
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

  // Get current language content
  const t = content[language];

  // Get selected category's products
  const selectedCategoryData = selectedCategory 
    ? categories.find(cat => cat.id === selectedCategory)
    : null;

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    const newCategory = categoryId === selectedCategory ? null : categoryId;
    setSelectedCategory(newCategory);
    
    // Update URL without causing a page reload
    if (newCategory) {
      router.push(`/products?category=${newCategory}`, { scroll: false });
    } else {
      router.push('/products', { scroll: false });
    }
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
                  {category.name[language]}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {selectedCategoryData ? (
              selectedCategoryData.products.map((product, index) => (
                <div 
                  key={`${selectedCategoryData.id}-${index}`}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105"
                >
                  <div className="h-48 relative bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="object-contain"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {selectedCategoryData.name[language]}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 h-16 flex items-start">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              // Show all categories with their first product as preview
              categories.map(category => (
                <div 
                  key={category.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <div className="h-48 relative bg-gray-100">
                    <Image
                      src={category.image}
                      alt={category.name[language]}
                      className="object-contain"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={false}
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {category.products.length} {language === 'tr' ? 'ürün' : 'products'}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 h-16 flex items-start">
                      {category.name[language]}
                    </h3>
                  </div>
                </div>
              ))
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