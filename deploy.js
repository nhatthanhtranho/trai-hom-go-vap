// deploy.js
import { execSync } from "child_process";
import fs from "fs";

const REPO = "trai-hom-go-vap"; // 👈 đổi tên repo của bạn ở đây

try {
  console.log("🧹 Xoá thư mục build cũ...");
  if (fs.existsSync("out")) fs.rmSync("out", { recursive: true });

  console.log("🏗️  Build Next.js...");
  execSync("npm run build", { stdio: "inherit" });

  console.log("📦 Deploy lên GitHub Pages...");
  execSync(`npx gh-pages -d out`, { stdio: "inherit" });

  console.log(`✅ Deploy thành công! Xem tại: https://nhatthanhtranho.github.io/${REPO}/`);
} catch (error) {
  console.error("❌ Lỗi deploy:", error.message);
  process.exit(1);
}
