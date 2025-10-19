/** @type {import('next').NextConfig} */
const isAWS = process.env.NEXT_PUBLIC_ENV === "AWS";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: isProd ? "/trai-hom-go-vap" : "",
  assetPrefix: isAWS ? process.env.NEXT_PUBLIC_CLOUDFRONT_URL : undefined,
};

export default nextConfig;
