import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { I18nProvider } from "./hooks/useI18n";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://sahar-fallahi.ir"),
  title: "Sahar Fallahi | سحر فلاحی ",
  description:
    "Frontend Web Developer Portfolio Specializing in React, Next.js, JavaScript & Tailwind  |پورتفولیو طراح سایت، برنامه نویس و توسعه دهنده وب سحر فلاحی متخصص در React، Next.js، JavaScript و Tailwind ",
  keywords: [
    "سحر فلاحی",
    "Sahar Fallahi",
    "طراح سایت",
    "برنامه نویس وب",
    "توسعه دهنده فرانت‌اند",
    "React",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "پورتفولیو",
    "Frontend Developer",
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
    canonical: "https://sahar-fallahi.ir",
  },
  openGraph: {
    title: "سحر فلاحی | Sahar Fallahi",
    description:
      "طراح سایت، برنامه نویس و توسعه دهنده وب متخصص در طراحی و توسعه رابط کاربری مدرن با React و Next.js | Frontend Developer | مشاهده نمونه‌کارها در sahar-fallahi.ir",
    url: "https://sahar-fallahi.ir",
    siteName: "Sahar Fallahi",
    images: [
      {
        url: "https://sahar-fallahi.ir/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "پورتفولیوی سحر فلاحی | طراح و توسعه‌دهنده فرانت‌اند",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
    shortcut: "/icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "سحر فلاحی | طراح و توسعه‌دهنده فرانت‌اند",
    description:
      "Front-end Developer متخصص در React و Next.js | پورتفولیوی شخصی من در sahar-fallahi.ir",
    images: ["https://sahar-fallahi.ir/opengraph-image.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" data-theme="dark" suppressHydrationWarning>
       <head>
        {/* ✅ JSON-LD برای معرفی شخص و لوگو */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "سحر فلاحی",
              "alternateName": "Sahar Fallahi",
              "url": "https://sahar-fallahi.ir",
              "image": "https://sahar-fallahi.ir/icon.png",
              "jobTitle": "Frontend Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance Web Developer"
              },
              "sameAs": [
                "https://www.linkedin.com/in/sahar-fallahi/", 
                "https://github.com/saharfallahi",
                "https://www.instagram.com/saharfallahi.ir"
              ],
              "description": "طراح و توسعه‌دهنده وب با تخصص در React، Next.js و Tailwind CSS. ساخت رابط‌های کاربری حرفه‌ای و مدرن برای کسب‌وکارهای کوچک و بزرگ.",
              "knowsAbout": ["Frontend Development","Web Development", "React", "Next.js", "Tailwind CSS", "UI/UX Design"],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IR",
                "addressLocality": "Iran"
              }
            })
          }}
        />
      </head>
      <body
        className={`${vazirmatn.className} bg-[var(--bg)] text-[var(--text)]`}
      >
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
