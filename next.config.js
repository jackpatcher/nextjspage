/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode :true,
  images:{unoptimized : true,},
  assetPrefix :isProd ? '/nextjspage/' : '',
};
