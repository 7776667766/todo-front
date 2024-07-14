/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    typedRoutes: true,
  },
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
  i18n: {
    locales: ["en", "ar"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
