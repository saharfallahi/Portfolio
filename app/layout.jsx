import "./globals.css";
import { Vazirmatn } from "next/font/google";
import { I18nProvider } from "./hooks/useI18n";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Sahar Fallahi | Portfolio",
  description: "Frontend Developer Portfolio",
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
