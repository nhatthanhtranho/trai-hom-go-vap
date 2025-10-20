/** @type {import('next').NextConfig} */
const isAWS = process.env.NEXT_PUBLIC_ENV === "AWS";
const isProd = process.env.NEXT_PUBLIC_ENV === "PRODUCTION";
const basePath = isProd ? "/trai-hom-go-vap" : "";
const assetPrefix = (() => {
  if (isAWS) return "";
  if (isProd) return "/trai-hom-go-vap/";
  return "";
})();
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
};

export default nextConfig;
