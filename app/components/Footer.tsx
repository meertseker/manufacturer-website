"use client";
import React from 'react'
import { useLanguage } from './LanguageToggle'

const Footer = () => {
  const { language } = useLanguage();
  
  const content = {
    tr: "Tüm hakları saklıdır. www.hasmar.com.tr ®",
    en: "All rights reserved. www.hasmar.com.tr ®"
  };

  return (
    <footer className='bg-[#2f92d0] text-white'>
      <div className='container mx-auto px-4 py-6 text-center'>
        <p>©2025 {content[language]}</p>
      </div>
    </footer>
  )
}

export default Footer