"use client";
import Image from 'next/image'
import React from 'react'
import { useLanguage } from './LanguageToggle'

type ContentType = {
  tr: {
    aboutTitle: string;
    aboutText: string;
    missionTitle: string;
    missionText: string;
    buttonText: string;
  };
  en: {
    aboutTitle: string;
    aboutText: string;
    missionTitle: string;
    missionText: string;
    buttonText: string;
  };
};

const About = () => {
  const { language } = useLanguage();

  const content: ContentType = {
    tr: {
      aboutTitle: "Hakkımızda",
      aboutText: `1999 yılında Hasmar Dış Ticaret olarak kurulan firmamız, artan uluslararası sipariş taleplerini karşılamak ve müşteri memnuniyetini sağlamak amacıyla 2003 yılında İstanbul Sefaköy'de üretime başlamıştır. Öncelikli olarak endüstriyel mutfak ekipmanlarında kullanılan ısıtıcıları üreten firmamız, daha sonra ürün yelpazesini genişleterek beyaz eşya, ankastre cihazlar vb. için ısıtma elemanları üretmeye başlamıştır. Firmamız 2010 yılında İstanbul Avcılar'da 2500m² kapalı alana sahip fabrikasına taşınarak paslanmaz boru ve kettle ısıtıcıları üretimine devam etmektedir. Değerli müşterilerimize daha iyi hizmet verebilmek için yatırımlarına devam etmektedir.`,
      missionTitle: "Misyon ve Vizyon",
      missionText: `Misyonumuz;
Müşteri ihtiyaçlarını en etkin şekilde karşılamak ve hızlı çözümler üreterek yüksek kaliteli ürünler üretmek.
Vizyonumuz;
Isıtıcılar üretiminde farklar yaratarak kalıcı avantajlar sağlamak`,
      buttonText: "Daha Fazla"
    },
    en: {
      aboutTitle: "About Us",
      aboutText: `Our company, which was established as Hasmar Foreign Trade in 1999, started production in Istanbul Sefakoy in 2003 with the aim of meeting the increasing international order demands and ensuring customer satisfaction. Our company, which primarily produces heaters used in industrial kitchen appliances, then increased its product range and started to produce heating elements for electrical home appliances, built-in appliances etc... Our company moved to its factory with a closed area of 2500m2 in Istanbul Avcilar in 2010, where it produces stainless pipes and kettle heaters. Our company continues its investments in order to provide better service to our valued customers.`,
      missionTitle: "Mission and Vision",
      missionText: `Our Mission;
To meet customer needs in the most effective way and to produce high quality products by producing fast solutions.
Our Vision;
To provide permanent advantages by creating differences in heaters production`,
      buttonText: "Read More"
    }
  };

  const t = content[language];

  return (
    <div className='flex justify-center'>
      <div className="py-16 bg-white w-270">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
                {t.aboutTitle}
              </h2>
              <p className="text-gray-700 mb-6">{t.aboutText}</p>
              <a href="#" className="inline-block bg-[#2f92d0] hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-sm">
                {t.buttonText}
              </a>
            </div>
            <div className="md:w-1/2 relative">
              <Image
                src="/image.png"
                alt={t.aboutTitle}
                className="relative z-0 w-full max-w-md h-auto rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mt-16">
            <div className="md:w-1/2 relative order-2 md:order-1">
              <Image 
                src="/image.png" 
                alt={t.missionTitle}
                className="relative z-0 w-full max-w-md h-auto rounded-lg object-cover"
                width={400}
                height={400}
              />
            </div>
            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
                {t.missionTitle}
              </h2>
              <p className="text-gray-700 mb-6">{t.missionText}</p>
              <a href="#" className="inline-block bg-[#2f92d0] hover:bg-blue-500 text-white font-medium px-6 py-3 rounded-full transition-colors duration-200 shadow-sm">
                {t.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About