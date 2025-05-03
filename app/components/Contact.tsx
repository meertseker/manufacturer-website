"use client"

import React from 'react';
import { useLanguage } from './LanguageToggle';

// Define content type
type ContentType = {
  tr: {
    title: string;
    subtitle: string;
    form: {
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      phone: {
        label: string;
        placeholder: string;
      };
      subject: {
        label: string;
        placeholder: string;
        options: {
          registration: string;
          program: string;
          price: string;
          visit: string;
          other: string;
        };
      };
      message: {
        label: string;
        placeholder: string;
      };
      button: string;
    };
  };
  en: {
    title: string;
    subtitle: string;
    form: {
      name: {
        label: string;
        placeholder: string;
      };
      email: {
        label: string;
        placeholder: string;
      };
      phone: {
        label: string;
        placeholder: string;
      };
      subject: {
        label: string;
        placeholder: string;
        options: {
          registration: string;
          program: string;
          price: string;
          visit: string;
          other: string;
        };
      };
      message: {
        label: string;
        placeholder: string;
      };
      button: string;
    };
  };
};

const Contact = () => {
  const { language } = useLanguage();

  // Content in both languages
  const content: ContentType = {
    tr: {
      title: 'Bize Ulaşın',
      subtitle: 'Sorularınız mı var? Formu doldurarak bize ulaşabilirsiniz. En kısa sürede size geri dönüş yapacağız.',
      form: {
        name: {
          label: 'Adınız Soyadınız',
          placeholder: 'Adınız Soyadınız',
        },
        email: {
          label: 'E-posta Adresiniz',
          placeholder: 'ornek@mail.com',
        },
        phone: {
          label: 'Telefon Numaranız',
          placeholder: '05XX XXX XX XX',
        },
        subject: {
          label: 'Konu',
          placeholder: 'Lütfen bir konu seçin',
          options: {
            registration: 'Kayıt Bilgileri',
            program: 'Eğitim Programları',
            price: 'Fiyat Bilgisi',
            visit: 'Ziyaret Talebi',
            other: 'Diğer',
          },
        },
        message: {
          label: 'Mesajınız',
          placeholder: 'Bizimle paylaşmak istediğiniz mesajınızı buraya yazabilirsiniz...',
        },
        button: 'Gönder',
      },
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Have questions? You can reach us by filling out the form. We will get back to you as soon as possible.',
      form: {
        name: {
          label: 'Full Name',
          placeholder: 'Your Full Name',
        },
        email: {
          label: 'Email Address',
          placeholder: 'example@mail.com',
        },
        phone: {
          label: 'Phone Number',
          placeholder: '05XX XXX XX XX',
        },
        subject: {
          label: 'Subject',
          placeholder: 'Please select a subject',
          options: {
            registration: 'Registration Information',
            program: 'Educational Programs',
            price: 'Price Information',
            visit: 'Visit Request',
            other: 'Other',
          },
        },
        message: {
          label: 'Your Message',
          placeholder: 'Write your message here...',
        },
        button: 'Send',
      },
    },
  };

  // Get current language content
  const t = content[language];

  // Handle form submission
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className='text-black'>
      <div className="text-center mb-10 mt-17">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
          {t.title}
        </h2>
        <p className="text-gray-700">
          {t.subtitle}
        </p>
      </div>

      <div className='flex justify-center'>
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden w-250">
          {/* Decorative Elements */}
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.form.name.label}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t.form.name.placeholder}
                  required
                />
              </div>
              
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.form.email.label}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t.form.email.placeholder}
                  required
                />
              </div>
            </div>
            
            {/* Phone Field */}
            <div className="mt-6">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.phone.label}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-purple-500"
                placeholder={t.form.phone.placeholder}
              />
            </div>
            
            {/* Subject Field */}
            <div className="mt-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.subject.label}
              </label>
              <select
                id="subject"
                name="subject"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-purple-500"
                required
                defaultValue=""
              >
                <option value="" disabled>{t.form.subject.placeholder}</option>
                <option value="kayit">{t.form.subject.options.registration}</option>
                <option value="program">{t.form.subject.options.program}</option>
                <option value="fiyat">{t.form.subject.options.price}</option>
                <option value="ziyaret">{t.form.subject.options.visit}</option>
                <option value="diger">{t.form.subject.options.other}</option>
              </select>
            </div>
            
            {/* Message Field */}
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                {t.form.message.label}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-purple-500"
                placeholder={t.form.message.placeholder}
                required
              ></textarea>
            </div>
            
            {/* Form Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={handleSubmit}
                className="bg-blue-600 hover:bg-purple-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-md flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                {t.form.button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;