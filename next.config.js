/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    path: "/",
    loader: "akamai",
  },
};

module.exports = nextConfig;
