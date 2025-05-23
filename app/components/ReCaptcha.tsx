"use client";

import React, { useEffect, useState } from 'react';
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
  onError?: () => void;
}

const ReCaptcha: React.FC<ReCaptchaProps> = ({ onVerify, onError }) => {
  const [loadState, setLoadState] = useState<'loading' | 'error' | 'loaded'>('loading');
  const [retryCount, setRetryCount] = useState(0);

  const initializeCaptcha = () => {
    setLoadState('loading');
    if (window.grecaptcha) {
      try {
        window.grecaptcha.ready(() => {
          window.grecaptcha.render('recaptcha-container', {
            sitekey: RECAPTCHA_CONFIG.siteKey,
            callback: onVerify,
          });
          setLoadState('loaded');
        });
      } catch (error) {
        console.error('Failed to initialize reCAPTCHA:', error);
        setLoadState('error');
        onError?.();
      }
    }
  };

  const handleRetry = () => {
    if (retryCount < 3) {
      setRetryCount(prev => prev + 1);
      initializeCaptcha();
    }
  };

  useEffect(() => {
    // Define the callback function that will be called when reCAPTCHA is loaded
    window.onRecaptchaLoad = () => {
      initializeCaptcha();
    };

    // If script fails to load after 10 seconds, set error state
    const timeoutId = setTimeout(() => {
      if (loadState === 'loading') {
        setLoadState('error');
      }
    }, 10000);

    // Clean up
    return () => {
      clearTimeout(timeoutId);
      if (window.onRecaptchaLoad) {
        delete window.onRecaptchaLoad;
      }
    };
  }, [retryCount]);

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit`}
        strategy="lazyOnload"
        onError={() => {
          setLoadState('error');
          onError?.();
        }}
      />
      <div className="mt-4">
        <div id="recaptcha-container"></div>
        {loadState === 'loading' && (
          <div className="text-gray-600 text-sm mt-2">
            Loading captcha...
          </div>
        )}
        {loadState === 'error' && (
          <div className="text-red-600 text-sm mt-2">
            Failed to load captcha.
            {retryCount < 3 && (
              <button
                onClick={handleRetry}
                className="ml-2 text-blue-600 hover:text-blue-800 underline"
              >
                Retry
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ReCaptcha; 