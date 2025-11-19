import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogSidebar from "../components/BlogSidebar";
import { SITE_URL, getPostBySlug, getPosts } from "../../../lib/posts";

function renderSection(section, index) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          key={`heading-${index}`}
          className="text-2xl font-semibold text-[var(--text)]"
        >
          {section.text}
        </h2>
      );
    case "code":
      return (
        <pre
          key={`code-${index}`}
          dir="ltr"
          className="rounded-2xl border border-[color-mix(in_oklab,var(--primary),transparent_70%)] bg-[color-mix(in_oklab,var(--primary),transparent_92%)] px-6 py-5 text-[var(--text)] font-mono text-sm whitespace-pre-wrap overflow-x-auto"
        >
          <code>{section.text}</code>
        </pre>
      );
    case "quote":
      return (
        <blockquote
          key={`quote-${index}`}
          dir="rtl"
          className="rounded-2xl border border-[color-mix(in_oklab,var(--primary),transparent_70%)] bg-[color-mix(in_oklab,var(--primary),transparent_92%)] px-6 py-5 text-[var(--text)] text-base leading-7 italic"
        >
          {section.text}
        </blockquote>
      );
    case "list":
      return (
        <ul
          key={`list-${index}`}
          className="list-disc space-y-2 pr-6 text-[var(--text)] marker:text-[var(--primary)]"
        >
          {section.items.map((item, idx) => (
            <li key={idx} className="text-base leading-8 text-[var(--muted)]">
              {item}
            </li>
          ))}
        </ul>
      );
    case "paragraph":
    default:
      return (
        <p
          key={`paragraph-${index}`}
          className="text-lg leading-9 text-[var(--muted)]"
        >
          {section.text}
        </p>
      );
  }
}

export function generateStaticParams() {
  return getPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const imageUrl = `${SITE_URL}${post.coverImage}`;

  return {
    title: `${post.title} | وبلاگ سحر فلاحی`,
    description: post.description ?? post.summary,
    keywords: post.keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      type: "article",
      locale: "fa_IR",
      url: canonical,
      siteName: "Sahar Fallahi",
      title: post.title,
      description: post.description ?? post.summary,
      publishedTime: post.date,
      authors: ["سحر فلاحی"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 780,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description ?? post.summary,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
    headline: post.title,
    description: post.description ?? post.summary,
    image: [`${SITE_URL}${post.coverImage}`],
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
    datePublished: post.date,
    dateModified: post.date,
    keywords: post.tags.join(", "),
    articleSection: "توسعه فرانت‌اند",
    articleBody: post.content
      .map((section) => section.text || (section.items || []).join("، "))
      .join(" "),
  };

  return (
    <main className="md:pt-24 pt-14">
      <article className="section">
        <div className="container-blog" dir="rtl">
          <div className="mb-10 flex items-center gap-3 text-sm text-[var(--muted)]">
            <Link href="/blog" className="hover:text-[var(--primary)]">
              مقالات
            </Link>
            <span aria-hidden="true">/</span>
            <span>{post.title}</span>
          </div>

          <header className="mb-10 space-y-4">
            <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)]">
              <time dateTime={post.date}>
                {new Intl.DateTimeFormat("fa-IR", {
                  dateStyle: "long",
                }).format(new Date(post.date))}
              </time>
              <span className="text-xs text-[color-mix(in_oklab,var(--muted),transparent_20%)]">
                {post.readTime}
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[var(--text)]">
              {post.title}
            </h1>
          </header>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />

          <div className="mb-12 overflow-hidden rounded-3xl border border-[color-mix(in_oklab,var(--text),transparent_85%)]">
            <Image
              src={post.coverImage}
              alt={post.title}
              width={1200}
              height={780}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="lg:flex lg:flex-row-reverse lg:gap-8">
            <div className="lg:w-80 lg:flex-shrink-0">
              <BlogSidebar posts={getPosts()} currentSlug={post.slug} />
            </div>

            <div className="mt-8 flex-1 lg:mt-0 lg:min-w-0">
              <div className="rounded-3xl border border-[color-mix(in_oklab,var(--text),transparent_88%)] bg-[color-mix(in_oklab,var(--surface),transparent_6%)] p-6 shadow-[0_24px_60px_-48px_color-mix(in_oklab,var(--text),transparent_80%)] space-y-6 lg:space-y-8 lg:p-10">
                {post.content.map((section, index) =>
                  renderSection(section, index)
                )}

                <div className="flex flex-wrap gap-2 border-t border-[color-mix(in_oklab,var(--text),transparent_90%)] pt-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--bg-icon)] px-3 py-1 text-xs font-medium text-[var(--primary)] shadow-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
