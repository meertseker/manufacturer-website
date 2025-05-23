"use client"

import React, { useState } from 'react';
import { useLanguage } from './LanguageToggle';
import ReCaptcha from './ReCaptcha';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

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
      message: {
        label: string;
        placeholder: string;
      };
      button: string;
    };
    error: string;
    success: string;
    captchaError: string;
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
      message: {
        label: string;
        placeholder: string;
      };
      button: string;
    };
    error: string;
    success: string;
    captchaError: string;
  };
};

const Contact = () => {
  const { language } = useLanguage();
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaError, setCaptchaError] = useState<string | null>(null);

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
        message: {
          label: 'Mesajınız',
          placeholder: 'Bizimle paylaşmak istediğiniz mesajınızı buraya yazabilirsiniz...',
        },
        button: 'Gönder',
      },
      error: "Lütfen captcha'yı doğrulayın ve tekrar deneyin.",
      success: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
      captchaError: "Captcha yüklenemedi. Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin."
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
        message: {
          label: 'Your Message',
          placeholder: 'Write your message here...',
        },
        button: 'Send',
      },
      error: "Please verify the captcha and try again.",
      success: "Your message has been sent successfully. We will get back to you soon.",
      captchaError: "Failed to load captcha. Please refresh the page or try again later."
    },
  };

  // Get current language content
  const t = content[language];

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
    setFormStatus('idle');
    setCaptchaError(null);
  };

  // Handle form submission
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (!captchaToken && !captchaError) {
      setFormStatus('error');
      return;
    }

    // If there's a captcha error, show the specific error message
    if (captchaError) {
      setFormStatus('error');
      return;
    }

    try {
      setIsSubmitting(true);
      const form = (e.target as HTMLElement).closest('form');
      if (!form) return;

      const formData = {
        name: (form.querySelector('#name') as HTMLInputElement)?.value,
        email: (form.querySelector('#email') as HTMLInputElement)?.value,
        phone: (form.querySelector('#phone') as HTMLInputElement)?.value,
        message: (form.querySelector('#message') as HTMLTextAreaElement)?.value,
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
    } finally {
      setIsSubmitting(false);
    }
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
          <form>
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

              {/* ReCaptcha */}
              <div className="mt-6">
                <ReCaptcha 
                  onVerify={handleCaptchaVerify} 
                  onError={() => {
                    setCaptchaError(t.captchaError);
                    setCaptchaToken(null);
                  }}
                />
              </div>
              
              {/* Form Button */}
              <div className="mt-8 flex justify-center">
                <button
                  onClick={handleSubmit}
                  disabled={(!captchaToken && !captchaError) || isSubmitting}
                  className={`bg-blue-600 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200 shadow-md flex items-center ${
                    (!captchaToken && !captchaError) || isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700'
                  }`}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  )}
                  {t.form.button}
                </button>
              </div>

              {/* Status Messages */}
              {formStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg text-center">
                  {t.success}
                </div>
              )}

              {formStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg text-center">
                  {captchaError || t.error}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;