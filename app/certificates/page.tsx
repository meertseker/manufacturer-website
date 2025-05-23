"use client";

import React, { Suspense } from 'react';
import Image from 'next/image';
import { useLanguage } from '../components/LanguageToggle';
import { LanguageProvider } from '../components/LanguageToggle';
import Header from '../components/Header';
import Footer from '../components/Footer';

type ContentType = {
  tr: {
    title: string;
    subtitle: string;
    viewCertificate: string;
  };
  en: {
    title: string;
    subtitle: string;
    viewCertificate: string;
  };
};

type CertificateType = {
  id: string;
  image: string;
};

const CertificatesContent = () => {
  const { language } = useLanguage();

  const content: ContentType = {
    tr: {
      title: "Kalite Sertifikalarımız",
      subtitle: "Kalite standartlarımızı belgeleyen sertifikalarımız",
      viewCertificate: "Sertifikayı Görüntüle"
    },
    en: {
      title: "Quality Certificates",
      subtitle: "Our certificates documenting our quality standards",
      viewCertificate: "View Certificate"
    }
  };

  const certificates: CertificateType[] = [
    {
      id: "cert-1",
      image: "/certificates/76d907fe-0c56-454e-b54e-28c0bbfbcbff.jpg"
    },
    {
      id: "cert-2",
      image: "/certificates/97846b95-fd33-4f80-bb9a-a5e74b0298c7.jpg"
    },
    {
      id: "cert-3",
      image: "/certificates/1f9d8706-af76-4649-b043-4c68030b47d4.jpg"
    },
    {
      id: "cert-4",
      image: "/certificates/67b91011-d69c-4550-abd5-820784bd73c0.jpg"
    },
    {
      id: "cert-5",
      image: "/certificates/a08e311a-424b-4bb5-9cb1-b45124b86d24.jpg"
    }
  ];

  const t = content[language];

  const handleCertificateClick = (image: string) => {
    window.open(image, '_blank');
  };

  return (
    <>
      <Header />
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
              {t.title}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certificate) => (
              <div
                key={certificate.id}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => handleCertificateClick(certificate.image)}
              >
                <div className="relative h-[400px]">
                  <Image
                    src={certificate.image}
                    alt="Quality Certificate"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 bg-gray-50 text-center">
                  <button
                    className="text-[#2f92d0] hover:text-blue-700 font-medium transition-colors duration-200"
                  >
                    {t.viewCertificate}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

const Certificates = () => {
  return (
    <LanguageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <CertificatesContent />
      </Suspense>
    </LanguageProvider>
  );
};

export const dynamic = 'force-dynamic';
export default Certificates; 