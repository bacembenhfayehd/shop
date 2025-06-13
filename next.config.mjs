/** @type {import('next').NextConfig} */
const nextConfig = {
   output: 'standalone', // Optionnel pour optimiser
  trailingSlash: true,
    images: {
      domains: ['raw.githubusercontent.com'],
      unoptimized: true,
    },
  };
  
  export default nextConfig;