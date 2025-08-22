"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import useI18n from "./hooks/useI18n";

function useReveal(dep) {
  useEffect(() => {
    const items = document.querySelectorAll("[data-reveal]");
    if (items.length === 0) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => io.observe(el));

    // Immediately reveal items already in view to avoid flicker on language/theme toggle
    const viewportH =
      window.innerHeight || document.documentElement.clientHeight;
    items.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const visible = rect.bottom > 0 && rect.top < viewportH;
      if (visible) {
        el.classList.add("is-visible");
        io.unobserve(el);
      }
    });

    return () => io.disconnect();
  }, [dep]);
}

function useParallax(heroRef) {
  useEffect(() => {
    const hero = heroRef.current;
    const layers = hero?.querySelectorAll(".parallax .layer") ?? [];
    if (!hero || layers.length === 0) return;

    const update = () => {
      const rect = hero.getBoundingClientRect();
      const viewportH =
        window.innerHeight || document.documentElement.clientHeight;
      const visible = rect.bottom > 0 && rect.top < viewportH;
      if (!visible) return;
      const progress =
        1 -
        Math.min(
          Math.max(
            (rect.top + rect.height / 2) / (viewportH + rect.height / 2),
            0
          ),
          1
        );
      layers.forEach((layer) => {
        const speed = parseFloat(layer.dataset.speed || "0.2");
        const translateY = (progress - 0.5) * 200 * speed;
        layer.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
      });
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [heroRef]);
}

export default function HomePage() {
  const { lang, t, toggleLanguage } = useI18n();
  const [isLightTheme, setIsLightTheme] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      const htmlAttr = document.documentElement.getAttribute("data-theme");
      let current = (saved || htmlAttr || "dark").toLowerCase();
      if (current !== "light" && current !== "dark") current = "dark";
      document.documentElement.setAttribute("data-theme", current);
      setIsLightTheme(current === "light");
    } catch {
      // no-op
    }
  }, []);
  useReveal(lang);
  const heroRef = useRef(null);
  useParallax(heroRef);

  const submitContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.querySelector("#name")?.value || "";
    const email = form.querySelector("#email")?.value || "";
    const message = form.querySelector("#message")?.value || "";
    const subject = encodeURIComponent(
      `${t("contact.emailSubjectPrefix")} ${name}`
    );
    const body = encodeURIComponent(
      `${message}\n\n${t("contact.emailSender")}: ${name} <${email}>`
    );
    window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <main>
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

      <section
        id="home"
        ref={heroRef}
        className="section min-h-[88vh] grid place-items-center overflow-hidden"
      >
        <div className="parallax" aria-hidden="true">
          <span className="layer layer--1" data-speed="0.12"></span>
          <span className="layer layer--2" data-speed="0.25"></span>
          <span className="layer layer--3" data-speed="0.45"></span>
        </div>
        <div className="container-std">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div
              className={`flex justify-center ${
                lang === "fa" ? "md:order-1" : "md:order-2"
              }`}
              data-reveal
            >
              <div
                className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 rounded-full p-[3px]"
                style={{
                  background:
                    "conic-gradient(from 180deg at 50% 50%, var(--primary), var(--primary-2))",
                }}
              >
                <div
                  className="absolute -inset-2 rounded-full blur-xl opacity-30"
                  style={{
                    background:
                      "radial-gradient(closest-side, var(--primary), transparent)",
                  }}
                  aria-hidden="true"
                />
                <Image
                  src="/myphoto.png"
                  alt={lang === "fa" ? "عکس پروفایل" : "Profile photo"}
                  fill
                  className="rounded-full object-cover"
                  sizes="(max-width: 640px) 9rem, (max-width: 768px) 11rem, 14rem"
                  priority
                />
              </div>
            </div>
            <div
              className={`text-center ${
                lang === "fa"
                  ? "md:text-right md:order-2"
                  : "md:text-left md:order-1"
              }`}
              data-reveal
            >
              <div className="mb-5">
                <span className="text-lg font-medium text-indigo-600 dark:text-cyan-300 tracking-wider">
                  {t("hero.hello")}{" "}
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-2)] text-transparent bg-clip-text ">
                {t("hero.am")}
              </h1>
              <h2 className="text-balance text-3xl sm:text-4xl font-semibold leading-snug mb-6">
                {t("hero.developer")}
              </h2>{" "}
              <p
                className="text-[var(--muted)] mb-4"
                data-reveal
                data-reveal-delay="80"
              >
                {t("hero.description")}
              </p>
              <div
                className={`flex flex-wrap justify-center ${
                  lang === "fa" ? "md:justify-end" : "md:justify-start"
                } gap-3`}
                data-reveal
                data-reveal-delay="140"
              >
                <a href="#projects" className="btn btn-primary">
                  {t("hero.ctaProjects")}
                </a>
                <a href="#contact" className="btn btn-ghost">
                  {t("hero.ctaContact")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section section-alt">
        <div className="container-std grid sm:grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
          <div data-reveal>
            <h2 className="section-title">{t("about.title")}</h2>
            {(t("about.body") || []).map((para, i) => (
              <p key={i} className="mb-3 last:mb-0">
                {para}
              </p>
            ))}
            <ul className="flex flex-wrap gap-2 mt-4 p-0 list-none">
              {(t("about.badges") || []).map((b) => (
                <li
                  key={b}
                  className="px-2.5 py-1.5 rounded-md bg-[color-mix(in_oklab,var(--text),transparent_92%)] text-[var(--text)]"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="grid grid-cols-3 gap-4"
            data-reveal
            data-reveal-delay="120"
          >
            {(t("about.stats") || []).map(([num, label]) => (
              <div
                key={label}
                className="text-center bg-[var(--surface)] border border-[color-mix(in_oklab,var(--text),transparent_85%)] rounded-xl p-4"
              >
                <div className="text-xl font-bold">{num}</div>
                <div className="text-[var(--muted)]">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="container-std">
          <h2 className="section-title" data-reveal>
            {t("skills.title")}
          </h2>
          <ul
            className="flex flex-wrap gap-2 p-0 list-none"
            data-reveal
            data-reveal-delay="80"
          >
            {[
              "HTML5",
              "CSS3",
              "JavaScript (ES6+)",
              "Tailwind CSS",
              "React",
              "Next.js",
              "MongoDB",
              "REST API",
              "Postman",
              "React Query",
              "Redux",
              "React Hook Form",
              "React Router",
              "Photoshop",
              "Figma",
              "Github",
              "Git",
            ].map((s) => (
              <li
                key={s}
                className=" rounded-full bg-[color-mix(in_oklab,var(--text),transparent_92%)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  px-4 py-2 text-sm font-medium  hover:bg-[var(--primary-2)] hover:text-[var(--surface)] transition-all duration-300 ease-in-out "
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id="projects"
        className="section bg-fixed"
        style={{
          backgroundImage:
            "radial-gradient(40% 60% at 80% 0%, color-mix(in oklab, var(--primary), transparent 80%), transparent), radial-gradient(50% 50% at 10% 60%, color-mix(in oklab, var(--primary-2), transparent 85%), transparent)",
        }}
      >
        <div className="container-std">
          <h2 className="section-title" data-reveal>
            {t("projects.title")}
          </h2>
          <div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            data-reveal
            data-reveal-delay="100"
          >
            {(t("projects.items") || []).map(([title, desc], idx) => (
              <article key={idx} className="card shadow-soft">
                <div
                  className="aspect-video bg-gradient-to-br from-[color-mix(in_oklab,var(--primary),transparent_65%)] to-[color-mix(in_oklab,var(--primary-2),transparent_65%)]"
                  aria-hidden="true"
                />
                <div className="p-4">
                  <h3 className="text-lg mb-1">{title}</h3>
                  <p className="text-[var(--muted)] mb-4">{desc}</p>
                  <div className="flex gap-2">
                    <a href="#" className="btn btn-primary !py-2 !px-3 text-sm">
                      {t("projects.demo")}
                    </a>
                    <a href="#" className="btn btn-ghost !py-2 !px-3 text-sm">
                      {t("projects.code")}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-alt">
        <div className="container-std grid md:grid-cols-2 gap-8 items-start">
          <div data-reveal>
            <h2 className="section-title">{t("contact.title")}</h2>
            <p>{t("contact.body")}</p>
            <ul className="flex flex-wrap items-center gap-4 mt-4 p-0 list-none">
              <li>
                <a
                  className="inline-flex items-center gap-2 no-underline text-[var(--text)] hover:text-[var(--primary)]"
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener"
                  aria-label={t("contact.github")}
                >
                  <span>GitHub</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 no-underline text-[var(--text)] hover:text-[var(--primary)]"
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener"
                  aria-label={t("contact.linkedin")}
                >
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex items-center gap-2 no-underline text-[var(--text)]"
                  href="mailto:you@example.com"
                  aria-label={t("contact.emailLabel")}
                >
                  📧 <span>you@example.com</span>
                </a>
              </li>
            </ul>
          </div>
          <form
            onSubmit={submitContact}
            className="bg-[var(--surface)] border border-[color-mix(in_oklab,var(--text),transparent_85%)] rounded-2xl p-4"
            data-reveal
            data-reveal-delay="120"
          >
            <div className="flex flex-col gap-1.5 mb-3">
              <label htmlFor="name">{t("contact.name")}</label>
              <input
                id="name"
                name="name"
                required
                placeholder={t("contact.namePlaceholder")}
                className="bg-transparent border border-[color-mix(in_oklab,var(--text),transparent_80%)] text-[var(--text)] rounded-lg px-3 py-2 outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)] focus:border-transparent"
              />
            </div>
            <div className="flex flex-col gap-1.5 mb-3">
              <label htmlFor="email">{t("contact.email")}</label>
              <input
                id="email"
                name="email"
                required
                placeholder={t("contact.emailPlaceholder")}
                type="email"
                className="bg-transparent border border-[color-mix(in_oklab,var(--text),transparent_80%)] text-[var(--text)] rounded-lg px-3 py-2 outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)] focus:border-transparent"
              />
            </div>
            <div className="flex flex-col gap-1.5 mb-3">
              <label htmlFor="message">{t("contact.message")}</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder={t("contact.messagePlaceholder")}
                className="bg-transparent border border-[color-mix(in_oklab,var(--text),transparent_80%)] text-[var(--text)] rounded-lg px-3 py-2 outline-none focus-visible:ring-4 focus-visible:ring-[var(--ring)] focus:border-transparent"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              {t("contact.submit")}
            </button>
            <p className="text-[var(--muted)] text-sm mt-2">
              {t("contact.submitHint")}
            </p>
          </form>
        </div>
      </section>

      <footer className="py-10 border-t border-[color-mix(in_oklab,var(--text),transparent_90%)] text-center text-[var(--muted)]">
        <div className="container-std">
          <p>
            © {new Date().getFullYear()} {t("footer.note")}
          </p>
        </div>
      </footer>
    </main>
  );
}
