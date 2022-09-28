/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [{ source: '/cancel', destination: '/', permanent: true }];
  },
};

module.exports = nextConfig;
