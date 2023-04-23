/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.scdn.co'],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
