/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Required for Netlify deployment
    domains: ['images.unsplash.com'], // Add any other image domains you use
  },
  // Enable static exports for Netlify
  output: 'export',
  // Optional: Add a trailing slash to all paths
  trailingSlash: true,
  // Optional: Disable image optimization API (not needed for static export)
  images: {
    unoptimized: true
  },
  // Optional: Enable React 18 features
  experimental: {
    appDir: false,
  },
  // Add any environment variables that should be available at build time
  env: {
    // Add your environment variables here if needed
  },
}

module.exports = nextConfig
