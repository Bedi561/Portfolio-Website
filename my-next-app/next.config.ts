// next.config.js
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['*'], // Allow images from all domains
  },
};

export default nextConfig;
