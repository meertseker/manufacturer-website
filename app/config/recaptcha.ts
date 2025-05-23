export const RECAPTCHA_CONFIG = {
  siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  secretKey: process.env.RECAPTCHA_SECRET_KEY || 'YOUR_SECRET_KEY', // This should be kept secret and only used on the server
}; 