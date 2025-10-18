/** @type {import('next').NextConfig} */
const isProd = process.env.NEXT_PUBLIC_ENV === "PRODUCTION";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/trai-hom-go-vap" : "",
  assetPrefix: isProd ? "/trai-hom-go-vap/" : "",
};

export default nextConfig;
