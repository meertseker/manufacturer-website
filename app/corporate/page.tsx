"use client";

import React, { Suspense } from 'react';
import { useLanguage } from '../components/LanguageToggle';
import { LanguageProvider } from '../components/LanguageToggle';
import Header from '../components/Header';
import Image from 'next/image';

type ContentType = {
  tr: {
    title: string;
    companyProfile: {
      title: string;
      content: string[];
    };
    missionVision: {
      title: string;
      mission: {
        title: string;
        content: string;
      };
      vision: {
        title: string;
        content: string;
      };
    };
    values: {
      title: string;
      content: string;
    };
  };
  en: {
    title: string;
    companyProfile: {
      title: string;
      content: string[];
    };
    missionVision: {
      title: string;
      mission: {
        title: string;
        content: string;
      };
      vision: {
        title: string;
        content: string;
      };
    };
    values: {
      title: string;
      content: string;
    };
  };
};

const CorporateContent = () => {
  const { language } = useLanguage();

  const content: ContentType = {
    tr: {
      title: "Kurumsal",
      companyProfile: {
        title: "Şirket Profilimiz",
        content: [
          "1999 yılında Hasmar Dış Ticaret olarak kurulan firmamız, artan yurtdışı sipariş taleplerini karşılamak ve müşteri memnuniyeti sağlam amacıyla 2003 yılında İstanbul sefaköy de üretime başlayarak iç pazara da hizmet vermeye başlamıştır. Başta endüstriyel mutfak cihazlarında kullanılan ısıtıcıları üreten firmamız daha sonra ürün çeşitliliğini arttırarak elektrikli ev aletleri, ankastra ve beyaz eşya ısıtıcılarını üretmeye başlamıştır.",
          "2010 yılında avcılar daki 2500m2 kapalı alana sahip fabrikasına taşınan firmamız burada paslanmaz boru üretimi ve kettle ısıtıcıları üretmeye başlamıştır, sürekli yenilik ve kalite peşinde olan firmamız siz değerli müşterilerimize daha iyi hizmet verebilmek için yatırımlarına devam etmektedir."
        ]
      },
      missionVision: {
        title: "Misyon ve Vizyonumuz",
        mission: {
          title: "Misyonumuz",
          content: "Müşteri ihtiyaçlarını en etkin şekilde karşılamak ve hızlı çözümler üreterek yüksek kalitede ürünlerin üretimini sağlamak"
        },
        vision: {
          title: "Vizyonumuz",
          content: "Rezistans üretiminde farklılıklar yaratarak kalıcı üstünlükler sağlamak"
        }
      },
      values: {
        title: "Değerlerimiz",
        content: "Güvenilirlik kaliteden tavız vermemek verimli ürünler sunmaktır."
      }
    },
    en: {
      title: "Corporate",
      companyProfile: {
        title: "Company Profile",
        content: [
          "Established in 1999 as Hasmar Foreign Trade, our company started production in Istanbul Sefakoy in 2003 to meet increasing international order demands and ensure customer satisfaction, thus beginning to serve the domestic market as well. Initially producing heaters used in industrial kitchen equipment, our company later expanded its product range to include heaters for electrical household appliances, built-in appliances, and white goods.",
          "In 2010, our company moved to its factory in Avcilar with a 2500m2 closed area, where it started producing stainless steel pipes and kettle heaters. Continuously pursuing innovation and quality, our company continues its investments to provide better service to our valued customers."
        ]
      },
      missionVision: {
        title: "Mission and Vision",
        mission: {
          title: "Our Mission",
          content: "To meet customer needs most effectively and ensure the production of high-quality products by producing rapid solutions"
        },
        vision: {
          title: "Our Vision",
          content: "To achieve lasting superiority by creating differences in resistance production"
        }
      },
      values: {
        title: "Our Values",
        content: "Reliability is not compromising on quality and offering efficient products."
      }
    }
  };

  const t = content[language];

  return (
    <>
      <Header />
      <div className="py-16 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
              {t.title}
            </h1>
          </div>

          {/* Company Profile Section */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6">
              {t.companyProfile.title}
            </h2>
            {t.companyProfile.content.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Mission and Vision Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                {t.missionVision.mission.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t.missionVision.mission.content}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                {t.missionVision.vision.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t.missionVision.vision.content}
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-6">
              {t.values.title}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {t.values.content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Corporate = () => {
  return (
    <LanguageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <CorporateContent />
      </Suspense>
    </LanguageProvider>
  );
};

export const dynamic = 'force-dynamic';
export default Corporate; 