"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function BlogSidebar({ posts, currentSlug }) {
  const [query, setQuery] = useState("");

  const currentPost = useMemo(
    () => posts.find((p) => p.slug === currentSlug),
    [posts, currentSlug]
  );

  const filteredPosts = useMemo(() => {
    const cleaned = query.trim().toLowerCase();
    const others = posts.filter((post) => post.slug !== currentSlug);
    if (!cleaned) return [];

    return others.filter((post) => {
      const haystack = [post.title, post.summary, ...(post.tags || [])]
        .join(" ")
        .toLowerCase();
      return haystack.includes(cleaned);
    });
  }, [posts, currentSlug, query]);

  const relatedPosts = useMemo(() => {
    if (!currentPost) return [];
    const currentTags = currentPost.tags || [];
    if (currentTags.length === 0) return [];

    const others = posts.filter((post) => post.slug !== currentSlug);

    return others
      .map((post) => {
        const postTags = post.tags || [];
        const commonTags = currentTags.filter((tag) => postTags.includes(tag));
        return {
          post,
          score: commonTags.length,
        };
      })
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5)
      .map((item) => item.post);
  }, [posts, currentSlug, currentPost]);

  const recentPosts = useMemo(() => {
    return posts
      .filter((post) => post.slug !== currentSlug)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
  }, [posts, currentSlug]);

  return (
    <aside className="flex flex-col gap-6 lg:sticky lg:top-24">
      <div className="card p-5">
        <label
          htmlFor="blog-search"
          className="mb-3 block text-sm font-semibold text-[var(--text)]"
        >
          جستجو در مقالات
        </label>
        <div className="relative">
          <IoSearchOutline className="absolute inset-y-0 left-3 my-auto h-5 w-5 text-[var(--muted)]" />
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="عنوان یا تگ را جستجو کنید..."
            className="w-full rounded-2xl border border-[color-mix(in_oklab,var(--text),transparent_80%)] bg-[var(--bg)] py-3 pr-4 pl-10 text-sm text-[var(--text)] placeholder:text-[color-mix(in_oklab,var(--muted),transparent_20%)] focus:border-[color-mix(in_oklab,var(--primary),transparent_35%)] "
            dir="rtl"
            autoComplete="off"
          />
        </div>
        {query && filteredPosts.length > 0 && (
          <div className="mt-3 max-h-64 space-y-2 overflow-y-auto">
            {filteredPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-transparent px-3 py-2 text-sm text-[var(--text)] transition-all duration-200 hover:border-[color-mix(in_oklab,var(--primary),transparent_65%)] hover:bg-[var(--surface)]"
              >
                <span className="block font-semibold">{post.title}</span>
                <span className="mt-1 block text-[var(--muted)] text-xs">
                  {post.readTime}
                </span>
              </Link>
            ))}
          </div>
        )}
        {query && filteredPosts.length === 0 && (
          <p className="mt-3 text-sm text-[var(--muted)]">نتیجه‌ای یافت نشد.</p>
        )}
      </div>

      {relatedPosts.length > 0 && (
        <div className="card p-5">
          <h3 className="mb-4 text-base font-semibold text-[var(--text)]">
            مقالات مرتبط
          </h3>
          <ul className="flex flex-col gap-3">
            {relatedPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl border border-transparent px-3 py-2 text-sm text-[var(--text)] transition-all duration-200 hover:border-[color-mix(in_oklab,var(--primary),transparent_65%)] hover:bg-[var(--surface)]"
                >
                  <span className="block font-semibold">{post.title}</span>
                  <span className="mt-1 block text-[var(--muted)] text-xs">
                    {post.readTime}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {recentPosts.length > 0 && (
        <div className="card p-5">
          <h3 className="mb-4 text-base font-semibold text-[var(--text)]">
            مقالات اخیر
          </h3>
          <ul className="flex flex-col gap-3">
            {recentPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-xl border border-transparent px-3 py-2 text-sm text-[var(--text)] transition-all duration-200 hover:border-[color-mix(in_oklab,var(--primary),transparent_65%)] hover:bg-[var(--surface)]"
                >
                  <span className="block font-semibold">{post.title}</span>
                  <div className="mt-1 flex items-center gap-2 text-[var(--muted)] text-xs">
                    <time dateTime={post.date}>
                      {new Intl.DateTimeFormat("fa-IR", {
                        month: "short",
                        day: "numeric",
                      }).format(new Date(post.date))}
                    </time>
                    <span aria-hidden="true">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
