import { SITE_URL, getPosts } from "../../lib/posts";
import BlogContent from "./components/BlogContent";

export const metadata = {
  title: "وبلاگ | مقالات تخصصی سحر فلاحی",
  description:
    "مقالات تخصصی درباره توسعه فرانت‌اند، Next.js، سئو و تجربه کاربری. آموزش‌های کاربردی برای بهبود کیفیت محصولات دیجیتال.",
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
  },
};

export default function BlogPage() {
  const posts = getPosts();

  return (
    <main className="md:pt-24 pt-12">
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
