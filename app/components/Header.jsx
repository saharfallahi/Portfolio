"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useI18n from "../hooks/useI18n";
import useTheme from "../hooks/useTheme";
import {
  IoDocumentTextOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";
import useOutsideClick from "../hooks/useOutsideClick";

function Header() {
  const { t, toggleLanguage, lang } = useI18n();
  const { isLightTheme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isBlogPage = pathname?.startsWith("/blog");
  const sectionHref = (hash) => (isHomePage ? hash : `/${hash}`);

  const links = [
    [t("nav.home"), isHomePage ? "#home" : "/#home"],
    [t("nav.about"), sectionHref("#about")],
    [t("nav.skills"), sectionHref("#skills")],
    [t("nav.projects"), sectionHref("#projects")],
    [t("nav.blog"), "/blog"],
    [t("nav.contact"), sectionHref("#contact")],
  ];
  return (
    <header className="fixed w-full top-0 z-50 backdrop-saturate-150 backdrop-blur bg-gradient-to-b from-[color-mix(in_oklab,var(--bg),transparent_40%)] to-transparent border-b border-[color-mix(in_oklab,var(--text),transparent_90%)]">
      <div className="container-std min-h-16 flex items-center justify-between gap-4">
        <Link
          href={sectionHref("#home")}
          className="hidden md:block font-bold text-xl text-[var(--text)] no-underline"
        >
          <span className="text-[var(--primary)] ">{t("nav.logo")}</span>
        </Link>
        <nav className="hidden md:flex">
          <ul className="flex gap-4 m-0 p-0 list-none">
            {links.map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="py-3 px-2 outline-none text-[--text] hover:text-[var(--primary-2)] transition-all duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav className="md:hidden">
          <button className="inline-flex items-center justify-center text-secondary-500 focus:outline-none ">
            <svg
              onClick={() => setIsOpen(true)}
              className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

            <svg
              onClick={() => setIsOpen(false)}
              className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </nav>
        <div className="flex items-center gap-2">
          <button
            id="themeToggle"
            className=" rounded-lg px-2.5 py-2 text-[var(--text)] hover:text-[var(--primary-2)] transition-all duration-300"
            onClick={() => {
              const next = isLightTheme ? "dark" : "light";
              document.documentElement.setAttribute("data-theme", next);
              try {
                localStorage.setItem("theme", next);
              } catch {}
              toggleTheme(next === "light");
            }}
          >
            {isLightTheme ? (
              <IoMoonOutline className="w-4 h-4 md:w-5 md:h-5" />
            ) : (
              <IoSunnyOutline className="w-4 h-4 md:w-5 md:h-5" />
            )}
          </button>
          {!isBlogPage && (
            <button
              id="langToggle"
              className=" rounded-lg px-2.5 py-2 text-[var(--text)] hover:text-[var(--primary-2)] transition-all duration-300"
              onClick={toggleLanguage}
              aria-label="toggle language"
            >
              {lang === "fa" ? "EN" : "فارسی"}
            </button>
          )}
          {!isBlogPage && (
            <button>
              <a
                href={
                  lang === "fa"
                    ? "saharfallahi-cv-fa.pdf"
                    : "saharfallahi-cv-fa.pdf"
                }
                download
                className="hidden md:block btn btn-primary py-2 "
              >
                <span className="flex flex-row gap-2 items-center ">
                  <IoDocumentTextOutline />
                  {lang === "fa" ? "رزومه" : "Resume"}
                </span>
              </a>
            </button>
          )}
        </div>
      </div>
      <div
        ref={ref}
        className={`md:hidden transition-all duration-300 ease-in-out transform 
          ${
            isOpen
              ? "h-full opacity-100 translate-y-0"
              : "h-0 opacity-0 -translate-y-4 pointer-events-none "
          }`}
      >
        <div className="px-2 pt-4 pb-3 space-y-2 sm:px-3 text-sm md:text-base  ">
          {links.map(([label, href]) => (
            <li
              key={href}
              onClick={() => setIsOpen(false)}
              className=" rounded-lg text-[--text] hover:text-[var(--primary-2)] hover:bg-[var(--surface)]"
            >
              <Link href={href} className="py-3 px-2 block">
                {label}
              </Link>
            </li>
          ))}
          {!isBlogPage && (
            <li>
              <a
                href={
                  lang === "fa"
                    ? "saharfallahi-cv-fa.pdf"
                    : "saharfallahi-cv-fa.pdf"
                }
                download
                className="block  btn btn-primary "
                onClick={() => setIsOpen(false)}
              >
                <button className="w-full flex flex-row gap-1 items-center justify-center">
                  <IoDocumentTextOutline />
                  {lang === "fa" ? "رزومه" : "Resume"}
                </button>
              </a>
            </li>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

// "./saharfallahi-cv-fa.pdf"
