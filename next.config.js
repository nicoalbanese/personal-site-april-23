/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/projects/dealflow-os",
        destination: "/writing/dealflow-os",
        permanent: true,
      },
    ];
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["i.scdn.co", "v5.airtableusercontent.com", "res.cloudinary.com"],
  },
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
