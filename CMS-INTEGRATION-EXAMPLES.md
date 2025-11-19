# مثال‌های Integration با CMS

این فایل شامل مثال‌های کد برای اتصال Next.js به CMS های مختلف است.

---

## 1️⃣ Integration با Contentful

### نصب پکیج‌ها
```bash
npm install contentful
```

### ایجاد فایل `.env.local`
```env
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token
```

### ایجاد `lib/contentful.js`
```javascript
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const previewClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
  host: 'preview.contentful.com',
});

export function getContentfulClient(preview = false) {
  return preview ? previewClient : client;
}

export async function getAllPosts(preview = false) {
  const contentfulClient = getContentfulClient(preview);
  
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: '-fields.date',
  });

  return entries.items.map((item) => ({
    slug: item.fields.slug,
    title: item.fields.title,
    summary: item.fields.summary,
    description: item.fields.description,
    coverImage: item.fields.coverImage?.fields?.file?.url || '',
    tags: item.fields.tags || [],
    date: item.fields.date,
    readTime: item.fields.readTime,
    keywords: item.fields.keywords || [],
    content: item.fields.content?.content || [],
  }));
}

export async function getPostBySlug(slug, preview = false) {
  const contentfulClient = getContentfulClient(preview);
  
  const entries = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });

  if (!entries.items.length) return null;

  const item = entries.items[0];
  return {
    slug: item.fields.slug,
    title: item.fields.title,
    summary: item.fields.summary,
    description: item.fields.description,
    coverImage: item.fields.coverImage?.fields?.file?.url || '',
    tags: item.fields.tags || [],
    date: item.fields.date,
    readTime: item.fields.readTime,
    keywords: item.fields.keywords || [],
    content: item.fields.content?.content || [],
  };
}
```

### آپدیت `app/blog/[slug]/page.jsx`
```javascript
import { getPostBySlug, getAllPosts } from '../../../lib/contentful';

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    notFound();
  }
  
  // ... rest of your component
}
```

---

## 2️⃣ Integration با Sanity

### نصب پکیج‌ها
```bash
npm install @sanity/client @sanity/image-url
```

### ایجاد `lib/sanity.js`
```javascript
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
  apiVersion: '2024-01-01',
});

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}

export async function getAllPosts() {
  const query = `*[_type == "blogPost"] | order(date desc) {
    _id,
    slug,
    title,
    summary,
    description,
    coverImage,
    tags,
    date,
    readTime,
    keywords,
    content
  }`;
  
  return await client.fetch(query);
}

export async function getPostBySlug(slug) {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    slug,
    title,
    summary,
    description,
    coverImage,
    tags,
    date,
    readTime,
    keywords,
    content
  }`;
  
  return await client.fetch(query, { slug });
}
```

### ایجاد `sanity.config.js` (برای Sanity Studio)
```javascript
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

export default defineConfig({
  name: 'default',
  title: 'Portfolio Blog',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  
  plugins: [deskTool(), visionTool()],
  
  schema: {
    types: [
      {
        name: 'blogPost',
        title: 'Blog Post',
        type: 'document',
        fields: [
          {
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required(),
          },
          {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
            },
            validation: Rule => Rule.required(),
          },
          {
            name: 'summary',
            title: 'Summary',
            type: 'text',
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text',
          },
          {
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
              hotspot: true,
            },
          },
          {
            name: 'date',
            title: 'Date',
            type: 'date',
            validation: Rule => Rule.required(),
          },
          {
            name: 'readTime',
            title: 'Read Time',
            type: 'string',
          },
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
          },
          {
            name: 'keywords',
            title: 'Keywords',
            type: 'array',
            of: [{ type: 'string' }],
          },
          {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'object',
                fields: [
                  {
                    name: 'type',
                    title: 'Type',
                    type: 'string',
                    options: {
                      list: [
                        { title: 'Paragraph', value: 'paragraph' },
                        { title: 'Heading', value: 'heading' },
                        { title: 'List', value: 'list' },
                        { title: 'Quote', value: 'quote' },
                      ],
                    },
                  },
                  {
                    name: 'text',
                    title: 'Text',
                    type: 'text',
                  },
                  {
                    name: 'items',
                    title: 'Items',
                    type: 'array',
                    of: [{ type: 'string' }],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
});
```

---

## 3️⃣ Integration با MDX (ساده‌ترین روش)

### نصب پکیج‌ها
```bash
npm install @next/mdx @mdx-js/loader @mdx-js/react
```

### آپدیت `next.config.mjs`
```javascript
import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
```

### ساختار پوشه `content/posts/`
```
content/
  posts/
    frontend-architecture-patterns.mdx
    nextjs-seo-checklist.mdx
    ux-research-for-developers.mdx
```

### مثال `content/posts/frontend-architecture-patterns.mdx`
```mdx
---
slug: "frontend-architecture-patterns"
title: "بهترین الگوهای معماری فرانت‌اند برای پروژه‌های مقیاس‌پذیر"
summary: "چطور ساختار پروژه‌های React و Next.js را طوری طراحی کنیم..."
description: "بررسی معماری‌های مطرح..."
coverImage: "/blog/frontend-architecture.svg"
tags: ["React", "Next.js", "Architecture"]
date: "2024-10-12"
readTime: "۷ دقیقه مطالعه"
keywords: ["معماری فرانت‌اند", "React"]
---

وقتی پروژه‌های فرانت‌اند رشد می‌کنند، اولین چالش ما نگهداری از ساختار است.

## ۱. Atomic Design برای ماژولار کردن UI

Atomic Design کمک می‌کند اجزای تکرارشونده را به صورت لایه‌ای مدیریت کنیم.

- تعریف قرارداد نام‌گذاری
- استفاده از Storybook
- به‌کارگیری تست‌های بصری

> هر چه وابستگی بین لایه‌ها کمتر باشد، امکان تست بیشتر می‌شود.
```

### ایجاد `lib/mdx.js`
```javascript
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.mdx$/, ''),
    },
  }));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, '');
    return getPostBySlug(slug);
  });

  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
```

### آپدیت `app/blog/[slug]/page.jsx` برای MDX
```javascript
import { getPostBySlug, getAllPostSlugs } from '../../../lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  // ... rest of component
  
  return (
    <article>
      {/* ... header ... */}
      <MDXRemote source={post.content} />
    </article>
  );
}
```

---

## 4️⃣ Integration با Tina CMS

### نصب پکیج‌ها
```bash
npm install tinacms
npx @tinacms/cli@latest init
```

### ایجاد `tina/config.ts`
```typescript
import { defineConfig } from "tinacms";

export default defineConfig({
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
  token: process.env.TINA_TOKEN,
  
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  
  schema: {
    collections: [
      {
        name: "post",
        label: "Blog Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "slug",
            label: "Slug",
            required: true,
          },
          {
            type: "string",
            name: "summary",
            label: "Summary",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "readTime",
            label: "Read Time",
          },
          {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
```

---

## 📝 نکات مهم

1. **Environment Variables**: حتماً فایل `.env.local` را به `.gitignore` اضافه کنید
2. **Type Safety**: برای TypeScript، می‌توانید types برای CMS responses تعریف کنید
3. **Caching**: برای بهبود عملکرد، از Next.js caching استفاده کنید
4. **Preview Mode**: برای Contentful و Sanity، Preview Mode را فعال کنید
5. **Image Optimization**: از `next/image` برای بهینه‌سازی تصاویر استفاده کنید

---

## 🔄 Migration از داده‌های فعلی

برای انتقال داده‌های فعلی از `lib/posts/data.js` به CMS:

1. **Contentful/Sanity**: می‌توانید یک اسکریپت Node.js بنویسید که داده‌ها را بخواند و به CMS ارسال کند
2. **MDX**: می‌توانید به صورت دستی یا با اسکریپت، داده‌ها را به فایل‌های MDX تبدیل کنید

مثال اسکریپت Migration:
```javascript
// scripts/migrate-to-contentful.js
import { createClient } from 'contentful';
import { posts } from '../lib/posts/data.js';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

async function migrate() {
  for (const post of posts) {
    await client.getSpace(process.env.CONTENTFUL_SPACE_ID)
      .then(space => space.getEnvironment('master'))
      .then(environment => environment.createEntry('blogPost', {
        fields: {
          title: { 'fa-IR': post.title },
          slug: { 'fa-IR': post.slug },
          // ... other fields
        }
      }));
  }
}

migrate();
```




