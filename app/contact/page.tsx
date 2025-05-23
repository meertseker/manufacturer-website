"use client";

import React, { Suspense, useState } from 'react';
import { useLanguage } from '../components/LanguageToggle';
import { LanguageProvider } from '../components/LanguageToggle';
import Header from '../components/Header';
import Image from 'next/image';
import ReCaptcha from '../components/ReCaptcha';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

type ContentType = {
  tr: {
    title: string;
    subtitle: string;
    contactInfo: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
    form: {
      title: string;
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      send: string;
    };
    success: string;
    error: string;
  };
  en: {
    title: string;
    subtitle: string;
    contactInfo: {
      title: string;
      address: string;
      phone: string;
      email: string;
    };
    form: {
      title: string;
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
      send: string;
    };
    success: string;
    error: string;
  };
};

const ContactContent = () => {
  const { language } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);

  const content: ContentType = {
    tr: {
      title: "İletişim",
      subtitle: "Bizimle iletişime geçin",
      contactInfo: {
        title: "İletişim Bilgileri",
        address: "Cihangir Mah. Güvercin Cd. No: 3 Baha İş Merkezi B Blok K:1 Avcılar / İSTANBUL",
        phone: "+90 (212) 422 86 33",
        email: "info@hasmar.com.tr"
      },
      form: {
        title: "Mesaj Gönder",
        name: "Adınız Soyadınız",
        email: "E-posta Adresiniz",
        phone: "Telefon Numaranız",
        subject: "Konu",
        message: "Mesajınız",
        send: "Gönder"
      },
      success: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
      error: "Mesaj gönderilirken bir hata oluştu. Lütfen captcha'yı doğrulayın ve tekrar deneyin."
    },
    en: {
      title: "Contact",
      subtitle: "Get in touch with us",
      contactInfo: {
        title: "Contact Information",
        address: "Cihangir Mah. Güvercin Cd. No: 3 Baha İş Merkezi B Blok K:1 Avcılar / İSTANBUL",
        phone: "+90 (212) 422 86 33",
        email: "info@hasmar.com.tr"
      },
      form: {
        title: "Send Message",
        name: "Your Name",
        email: "Your Email",
        phone: "Your Phone",
        subject: "Subject",
        message: "Your Message",
        send: "Send"
      },
      success: "Your message has been sent successfully. We will get back to you soon.",
      error: "An error occurred while sending your message. Please verify the captcha and try again."
    }
  };

  const t = content[language];

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!captchaToken) {
      setFormStatus('error');
      return;
    }

    try {
      const form = e.currentTarget;
      const formData = {
        name: (form.elements.namedItem('name') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
        subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        'g-recaptcha-response': captchaToken,
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formData,
        EMAILJS_CONFIG.publicKey
      );

      setFormStatus('success');
      setCaptchaToken(null);
      form.reset();
      
      // Reset reCAPTCHA
      if (window.grecaptcha) {
        window.grecaptcha.reset();
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      setFormStatus('error');
    }
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

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                {t.contactInfo.title}
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-[#2f92d0] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">{t.contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-[#2f92d0] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">{t.contactInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="text-[#2f92d0] mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">{t.contactInfo.email}</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 h-[300px] relative rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.654744838737!2d28.72171091744384!3d40.989670899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa39f12a2a2e7%3A0x9c2d14d8e5c44c03!2sHasmar%20Rezistans!5e0!3m2!1str!2str!4v1709818611705!5m2!1str!2str"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-indigo-900 mb-6">
                {t.form.title}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2f92d0] focus:border-[#2f92d0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2f92d0] focus:border-[#2f92d0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.form.phone}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2f92d0] focus:border-[#2f92d0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2f92d0] focus:border-[#2f92d0]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.form.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#2f92d0] focus:border-[#2f92d0]"
                  ></textarea>
                </div>
                <ReCaptcha onVerify={handleCaptchaVerify} />

                <button
                  type="submit"
                  className="w-full bg-[#2f92d0] text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  disabled={!captchaToken}
                >
                  {t.form.send}
                </button>

                {formStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg">
                    {t.success}
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                    {t.error}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <LanguageProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <ContactContent />
      </Suspense>
    </LanguageProvider>
  );
};

export const dynamic = 'force-dynamic';
export default Contact; 