/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
  generateRobotsTxt: true,
  basePath: '/daamah-spare-parts',
  assetPrefix: '/daamah-spare-parts/',
};

export default nextConfig;
