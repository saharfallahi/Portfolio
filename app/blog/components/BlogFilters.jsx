"use client";

import { useState, useMemo, useEffect } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function BlogFilters({ posts, onFilteredPostsChange }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // "newest" or "oldest"

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts;

    // جستجو
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      filtered = posts.filter((post) => {
        const haystack = [
          post.title,
          post.summary,
          post.description,
          ...(post.tags || []),
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(query);
      });
    }

    // مرتب‌سازی
    const sorted = [...filtered].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

    return sorted;
  }, [posts, searchQuery, sortOrder]);

  // اطلاع‌رسانی به کامپوننت والد
  useEffect(() => {
    onFilteredPostsChange(filteredAndSortedPosts);
  }, [filteredAndSortedPosts, onFilteredPostsChange]);

  return (
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="relative flex-1 max-w-md">
        <IoSearchOutline className="absolute inset-y-0 left-3 my-auto h-5 w-5 text-[var(--muted)]" />
        <input
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="جستجو در مقالات..."
          className="w-full rounded-2xl border border-[color-mix(in_oklab,var(--text),transparent_80%)] bg-[var(--bg)] py-3 pr-4 pl-10 text-sm text-[var(--text)] placeholder:text-[color-mix(in_oklab,var(--muted),transparent_20%)] focus:border-[color-mix(in_oklab,var(--primary),transparent_35%)] outline-none"
          dir="rtl"
        />
      </div>

      <div className="flex items-center gap-3">
        <label className="text-sm text-[var(--muted)]">مرتب‌سازی:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="rounded-xl border border-[color-mix(in_oklab,var(--text),transparent_80%)] bg-[var(--bg)] px-4 py-2 text-sm text-[var(--text)] focus:border-[color-mix(in_oklab,var(--primary),transparent_35%)] focus:outline-none cursor-pointer"
          dir="rtl"
        >
          <option value="newest">جدیدترین</option>
          <option value="oldest">قدیمی‌ترین</option>
        </select>
      </div>
    </div>
  );
}

