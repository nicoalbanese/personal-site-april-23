/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.scdn.co", "v5.airtableusercontent.com", "res.cloudinary.com"],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
