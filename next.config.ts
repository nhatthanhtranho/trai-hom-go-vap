const nextConfig = {
  output: 'export',
  basePath: '/trai-hom-go-vap',
  assetPrefix: '/trai-hom-go-vap',
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizeCss: true, // giúp CSS được inlined đúng
  },
};

module.exports = nextConfig;
