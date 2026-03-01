/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  generateRobotsTxt: true,
  basePath: '/daama-spare-parts',
  assetPrefix: '/daama-spare-parts/',
};

export default nextConfig;
