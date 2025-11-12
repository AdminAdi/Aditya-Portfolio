/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enable static exports for Netlify
  output: 'export',
  // Add a trailing slash to all paths
  trailingSlash: true,
  // Disable image optimization API (not needed for static export)
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com']
  },
  // Environment variables
  env: {
    // Add your environment variables here if needed
  },
  // Webpack configuration
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fixes npm packages that depend on `fs` module
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
