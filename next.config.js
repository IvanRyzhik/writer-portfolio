// next.config.js
let setupDevPlatform;
if (process.env.NODE_ENV === 'development') {
  try {
    ({ setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev'));
  } catch (e) {
    console.warn(
      "@cloudflare/next-on-pages not found; running dev without Cloudflare adapter."
    );
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['source.unsplash.com'],
  },
  webpack: (config) => {
    config.ignoreWarnings = [
      (warn) =>
        warn.module?.resource?.includes('flowbite.min.css') &&
        warn.message?.includes('autoprefixer'),

      (warn) =>
        warn.message?.includes('Skipped not serializable cache item') &&
        warn.message?.includes('flowbite.min.css'),
    ];

    return config;
  },
};

if (process.env.NODE_ENV === 'development' && typeof setupDevPlatform === 'function') {
  setupDevPlatform();
}

module.exports = nextConfig;
