// next.config.js
const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');

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

if (process.env.NODE_ENV === 'development') {
  setupDevPlatform();
}

module.exports = nextConfig;
