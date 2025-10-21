import { copyFileSync, existsSync } from "fs";

const isAWS = process.env.NEXT_PUBLIC_ENV === "AWS";

/** @type {import('next').NextConfig} */
const assetPrefix = '';
const basePath = '';

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix,
  async exportPathMap() {
    // ✅ Copy file CNAME từ root nếu có
    if (isAWS === false && existsSync("./CNAME")) {
      copyFileSync("./CNAME", "./out/CNAME");
      console.log("📄 Đã copy file CNAME vào thư mục out/");
    }
    return {};
  },
};

export default nextConfig;
