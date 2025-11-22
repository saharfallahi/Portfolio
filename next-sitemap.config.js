/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://sahar-fallahi.ir',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  outDir: "public",
  // اضافه کردن صفحات بلاگ و پست‌ها به sitemap
  additionalPaths: async (config) => {
    // استفاده از dynamic import برای ES modules
    const { posts } = await import('./lib/posts/data.js');
    
    // مرتب‌سازی پست‌ها بر اساس تاریخ (جدیدترین اول)
    const sortedPosts = [...posts].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    
    const blogPaths = [
      {
        loc: '/blog',
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      },
    ];
    
    const postPaths = sortedPosts.map((post) => ({
      loc: `/blog/${post.slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(post.date).toISOString(),
    }));
    
    return [...blogPaths, ...postPaths];
  },
}
