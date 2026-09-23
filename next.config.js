/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow Three.js imports
  transpilePackages: ["three"],
  // Silence Turbopack warning — app works without custom webpack rules for GLB
  turbopack: {},
  // Optimize images
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
