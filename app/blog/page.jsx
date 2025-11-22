import { SITE_URL, getPosts } from "../../lib/posts/service";
import BlogContent from "./components/BlogContent";

export const metadata = {
  title: "وبلاگ | مقالات تخصصی سحر فلاحی",
  description:
    "مقالات تخصصی درباره توسعه فرانت‌اند، Next.js، سئو و تجربه کاربری. آموزش‌های کاربردی برای بهبود کیفیت محصولات دیجیتال.",
  keywords: [
    "مقالات برنامه نویسی",
    "توسعه فرانت‌اند",
    "Next.js",
    "React",
    "سئو",
    "تجربه کاربری",
    "UI/UX",
    "وبلاگ تخصصی",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "وبلاگ سحر فلاحی | توسعه فرانت‌اند و تجربه کاربری",
    description:
      "جدیدترین مقالات درباره معماری فرانت‌اند، بهینه‌سازی سئو و طراحی محصول.",
    url: `${SITE_URL}/blog`,
    siteName: "Sahar Fallahi",
    locale: "fa_IR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "وبلاگ سحر فلاحی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "وبلاگ سحر فلاحی | توسعه فرانت‌اند و تجربه کاربری",
    description:
      "جدیدترین مقالات درباره معماری فرانت‌اند، بهینه‌سازی سئو و طراحی محصول.",
    images: [`${SITE_URL}/opengraph-image.png`],
  },
};

export default function BlogPage() {
  const posts = getPosts();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "وبلاگ سحر فلاحی",
    description:
      "مقالات تخصصی درباره توسعه فرانت‌اند، Next.js، سئو و تجربه کاربری",
    url: `${SITE_URL}/blog`,
    author: {
      "@type": "Person",
      name: "سحر فلاحی",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Sahar Fallahi",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description ?? post.summary,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      dateModified: post.date,
      author: {
        "@type": "Person",
        name: "سحر فلاحی",
      },
      image: `${SITE_URL}${post.coverImage}`,
    })),
  };

  return (
    <main className="md:pt-24 pt-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <section className="section">
        <div className="container-blog" dir="rtl">
          {/* <header className="mb-16 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[color-mix(in_oklab,var(--text),transparent_75%)] bg-[var(--surface)] px-4 py-1 text-sm text-[var(--muted)]">
              وبلاگ تخصصی
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-[var(--text)]">
              مقالاتی درباره توسعه فرانت‌اند، سئو و ساخت تجربه کاربری اثرگذار
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)]">
              در اینجا تجربه‌ها و آموخته‌های خودم از پروژه‌های واقعی را مستند
              می‌کنم؛ از معماری React و Next.js تا تکنیک‌های رشد و بهینه‌سازی
              محصول. هدف، ساختن یک مرجع فارسی برای توسعه‌دهندگان مشتاق است.
            </p>
          </header> */}

          <BlogContent posts={posts} />
        </div>
      </section>
    </main>
  );
}
