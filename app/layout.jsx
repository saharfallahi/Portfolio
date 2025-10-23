import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { I18nProvider } from "./hooks/useI18n";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});


export const metadata = {
  title: "Sahar Fallahi | سحر فلاحی | طراح سایت و توسعه‌دهنده وب",
  description: "Frontend Developer Portfolio Specializing in React, Next.js, JavaScript & Tailwind  |پورتفولیو برنامه نویس وب و طراح سایت سحر فلاحی متخصص در React، Next.js، JavaScript و Tailwind ",
  
  openGraph: {
    title: "سحر فلاحی | طراح سایت و توسعه دهنده وب | Frontend Developer",
    description:
      "طراحی و توسعه رابط کاربری مدرن با React و Next.js | مشاهده نمونه‌کارها در sahar-fallahi.ir",
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
      <body
        className={`${vazirmatn.className} bg-[var(--bg)] text-[var(--text)]`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
