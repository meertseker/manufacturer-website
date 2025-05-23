"use client";

import React, { useEffect } from 'react';
import Script from 'next/script';
import { RECAPTCHA_CONFIG } from '../config/recaptcha';

declare global {
  interface Window {
    grecaptcha: any;
    onRecaptchaLoad?: () => void;
  }
}

interface ReCaptchaProps {
  onVerify: (token: string) => void;
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({ onVerify }) => {
  useEffect(() => {
    // Define the callback function that will be called when reCAPTCHA is loaded
    window.onRecaptchaLoad = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.render('recaptcha-container', {
            sitekey: RECAPTCHA_CONFIG.siteKey,
            callback: onVerify,
          });
        });
      }
    };

    // Clean up
    return () => {
      if (window.onRecaptchaLoad) {
        delete window.onRecaptchaLoad;
      }
    };
  }, [onVerify]);

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`}
        strategy="lazyOnload"
      />
      <div id="recaptcha-container" className="mt-4"></div>
    </>
  );
};

export default ReCaptcha; 