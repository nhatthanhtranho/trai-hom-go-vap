/** @type {import('next').NextConfig} */
const isAWS = process.env.NEXT_PUBLIC_ENV === "AWS";
const isProd = process.env.NEXT_PUBLIC_ENV === "PRODUCTION";
let assetPrefix = ''
const basePath = ''
if (isAWS === false && isProd) {
  assetPrefix = '/trai-hom-go-vap/'
  // basePath = '/trai-hom-go-vap'
}
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
};

export default nextConfig;
