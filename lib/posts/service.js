import { posts } from "./data";

export const SITE_URL = "https://sahar-fallahi.ir";

function sortByDateDesc(list) {
  return [...list].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPosts() {
  return sortByDateDesc(posts);
}

export function getPostBySlug(slug) {
  return posts.find((post) => post.slug === slug) ?? null;
}

export function getRelatedPosts(slug) {
  return getPosts().filter((post) => post.slug !== slug);
}

export function getAllSlugs() {
  return posts.map((post) => post.slug);
}
