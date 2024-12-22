import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['*'], // Allows images from any domain
  },
  output: 'standalone', // This is necessary for Netlify serverless functions
};

export default nextConfig;
