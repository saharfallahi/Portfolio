"use client";

import Image from "next/image";
import useI18n from "../hooks/useI18n";
import useReveal from "../hooks/useReveal";
import useParallax from "../hooks/useParallax";
import { useRef } from "react";

function Home() {
  const { t, lang } = useI18n();
  const heroRef = useRef(null);
  useReveal();
  useParallax(heroRef);

  return (
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
              className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-96 md:h-96 rounded-full "
              // style={{
              //   background:
              //     "conic-gradient(from 180deg at 50% 50%, var(--primary), var(--primary-2)) ",
              // }}
            >
             
              <Image
                src="/saharfallahi.png"
                alt={lang === "fa" ? "سحر فلاحی" : "sahar fallahi"}
                fill
                className="rounded-full object-cover"
                sizes="(max-width: 640px) 9rem, (max-width: 768px) 11rem, 14rem"
                quality={100}
                priority
                unoptimized
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
  );
}

export default Home;
