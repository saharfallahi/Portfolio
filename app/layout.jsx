import "./globals.css";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "پورتفولیو برنامه‌نویس",
  description:
    "پورتفولیو شخصی یک برنامه‌نویس با افکت پارالکس و رابط کاربری مدرن.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" data-theme="dark" suppressHydrationWarning>
      <body
        className={`${vazirmatn.className} bg-[var(--bg)] text-[var(--text)]`}
      >
        {children}
      </body>
    </html>
  );
}
