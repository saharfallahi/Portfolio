"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { IoSearchOutline, IoClose } from "react-icons/io5";

export default function BlogFilters({ posts, onFilteredPostsChange, selectedTag = "", onTagChange }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // "newest" or "oldest"

  const filteredAndSortedPosts = useMemo(() => {
    let filtered = posts;

    // فیلتر بر اساس تگ
    if (selectedTag) {
      filtered = filtered.filter((post) => {
        const postTags = post.tags || [];
        return postTags.includes(selectedTag);
      });
    }

    // جستجو
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      filtered = filtered.filter((post) => {
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
  }, [posts, searchQuery, sortOrder, selectedTag]);

  // اطلاع‌رسانی به کامپوننت والد
  useEffect(() => {
    onFilteredPostsChange(filteredAndSortedPosts);
  }, [filteredAndSortedPosts, onFilteredPostsChange]);

  const handleRemoveTag = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("tag");
    router.push(`/blog${params.toString() ? `?${params.toString()}` : ""}`);
    if (onTagChange) {
      onTagChange("");
    }
  };

  return (
    <div className="mb-12 space-y-4">
      {/* نمایش تگ انتخاب شده */}
      {selectedTag && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-[var(--muted)]">فیلتر شده بر اساس:</span>
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--bg-icon)] px-3 py-1 text-xs font-medium text-[var(--primary)] shadow-sm">
            <span>#{selectedTag}</span>
            <button
              onClick={handleRemoveTag}
              className="hover:bg-[color-mix(in_oklab,var(--primary),transparent_10%)] rounded-full p-0.5 transition-colors duration-200"
              aria-label="حذف فیلتر تگ"
            >
              <IoClose className="h-4 w-4 hover:text-white" />
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
    </div>
  );
}

