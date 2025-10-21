// deploy.js
import { execSync } from "child_process";

const REPO = "trai-hom-go-vap"; // 👈 đổi tên repo của bạn ở đây

try {
  console.log("📦 Deploy lên GitHub Pages...");
  execSync(`npx gh-pages -d out`, { stdio: "inherit" });

  console.log(`✅ Deploy thành công! Xem tại: https://nhatthanhtranho.github.io/${REPO}/`);
} catch (error) {
  console.error("❌ Lỗi deploy:", error.message);
  process.exit(1);
}
