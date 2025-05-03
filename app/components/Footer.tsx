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
    <div className='bg-blue-800 mt-20 py-4 text-white text-center'>
      <p>©2025 {content[language]}</p>
    </div>
  )
}

export default Footer