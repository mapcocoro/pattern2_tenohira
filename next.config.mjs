/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/pattern2_tenohira' : '',
  assetPrefix: isProd ? '/pattern2_tenohira' : '',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/pattern2_tenohira' : '',
  },
};

export default nextConfig;
