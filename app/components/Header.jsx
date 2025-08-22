import React from "react";

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-saturate-150 backdrop-blur bg-gradient-to-b from-[color-mix(in_oklab,var(--bg),transparent_40%)] to-transparent border-b border-[color-mix(in_oklab,var(--text),transparent_90%)]">
      <div className="container-std min-h-16 flex items-center justify-between gap-4">
        <a
          href="#home"
          className="font-bold text-xl text-[var(--text)] no-underline"
        >
          Dev.<span className="text-[var(--primary)]">Portfolio</span>
        </a>
        <nav className="hidden sm:flex">
          <ul className="flex gap-4 m-0 p-0 list-none">
            {[
              [t("nav.home"), "#home"],
              [t("nav.about"), "#about"],
              [t("nav.skills"), "#skills"],
              [t("nav.projects"), "#projects"],
              [t("nav.contact"), "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="px-3 py-2 rounded-md hover:bg-[color-mix(in_oklab,var(--text),transparent_94%)] no-underline text-[var(--text)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2">
          <button
            id="themeToggle"
            className="border rounded-lg px-2.5 py-1 text-[var(--text)] border-[color-mix(in_oklab,var(--text),transparent_85%)]"
            onClick={() => {
              const next = isLightTheme ? "dark" : "light";
              document.documentElement.setAttribute("data-theme", next);
              try {
                localStorage.setItem("theme", next);
              } catch {}
              setIsLightTheme(next === "light");
            }}
          >
            {isLightTheme ? "🌙" : "☀️"}
          </button>
          <button
            id="langToggle"
            className="border rounded-lg px-2.5 py-1 text-[var(--text)] border-[color-mix(in_oklab,var(--text),transparent_85%)]"
            onClick={toggleLanguage}
            aria-label="toggle language"
          >
            {lang === "fa" ? "EN" : "فارسی"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
