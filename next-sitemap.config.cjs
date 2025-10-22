/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://traihomgovap.com',
  trailingSlash: false,
  generateRobotsTxt: true, // (optional)
  outDir: './out', // (optional) The out directory to write the sitemap to.
  // ...other options
  transform: async (config, path) => {
    let priority = 0.5;
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0, // Home page has the highest priority
      };
    } else if (path.startsWith('/dich-vu-tang-le-tron-goi')) {
      priority = 0.8; // Service pages have a higher priority
    }
    return {
      loc: path + '.html',
      changefreq: 'monthly',
      priority,
    };
  },
};
