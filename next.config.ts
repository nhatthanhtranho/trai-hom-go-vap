/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // bắt buộc để xuất static HTML
  trailingSlash: true, // tốt cho GitHub Pages
};

export default nextConfig;