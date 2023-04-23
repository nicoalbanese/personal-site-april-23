/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['i.scdn.co', 'v5.airtableusercontent.com'],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
