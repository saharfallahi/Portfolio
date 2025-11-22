"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import BlogFilters from "./BlogFilters";

export default function BlogContent({ posts }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  const handleFilteredPostsChange = useCallback((filtered) => {
    setFilteredPosts(filtered);
  }, []);

  return (
    <>
      <BlogFilters
        posts={posts}
        onFilteredPostsChange={handleFilteredPostsChange}
      />

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-[var(--muted)]">
            نتیجه‌ای برای جستجوی شما یافت نشد.
          </p>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((post, index) => (
            <article
              key={post.slug}
              className="card flex h-full flex-col overflow-hidden shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  priority={index === 0}
                  sizes="(min-width: 1280px) 360px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-[var(--muted)]">
                  <time dateTime={post.date}>
                    {new Intl.DateTimeFormat("fa-IR", {
                      dateStyle: "medium",
                    }).format(new Date(post.date))}
                  </time>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold leading-snug text-[var(--text)]">
                  <Link href={`/blog/${post.slug}`} className="no-underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-[var(--muted)]">{post.summary}</p>
                <div className="mt-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn btn-primary !px-4 !py-2 text-sm"
                  >
                    بیشتر بدانید
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  );
}
