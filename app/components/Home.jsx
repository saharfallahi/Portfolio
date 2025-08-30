"use client";

import Image from "next/image";
import useI18n from "../hooks/useI18n";
import useReveal from "../hooks/useReveal";
import useParallax from "../hooks/useParallax";
import { useRef } from "react";
import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

function Home() {
  const { t, lang } = useI18n();
  const heroRef = useRef(null);
  useReveal();
  useParallax(heroRef);

  return (
    <section
      id="home"
      ref={heroRef}
      className="section min-h-[80vh] md:min-h-[88vh]  grid place-items-center overflow-hidden"
    >
      <div className="parallax" aria-hidden="true">
        <span className="layer layer--1" data-speed="0.12"></span>
        <span className="layer layer--2" data-speed="0.25"></span>
        <span className="layer layer--3" data-speed="0.45"></span>
      </div>
      <div className="container-std">
        <div
          className="flex flex-col md:flex-row-reverse items-center justify-between gap-8"
        >
          <div className="flex justify-center" data-reveal>
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
              lang === "fa" ? "md:text-right" : "md:text-left "
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
              className="text-[var(--muted)] mb-8"
              data-reveal
              data-reveal-delay="80"
            >
              {t("hero.description")}
            </p>
            <div
              className="flex flex-wrap justify-center md:justify-start gap-3"
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
            <div className="flex items-center justify-center md:justify-start gap-x-4 mt-8">
              <a
                href="https://github.com/saharfallahi"
                className="social-icon " 
                target="_blank"
              >
                <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/sahar-fallahi/"
                className="social-icon"
                target="_blank"
              >
                <FaLinkedinIn className="w-5 h-5 md:w-6 md:h-6" />
              </a>
              <a
                href="https://t.me/SaharFallahi"
                className="social-icon"
                target="_blank"
              >
                <FaTelegramPlane className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;



// className="p-3 rounded-full bg-white/50 backdrop-blur-sm dark:bg-white/5 transition-all duration-300 hover:scale-110 shadow-sm border border-gray-200 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-cyan-500/50 group dark:hover:bg-[#6e5494]/20 hover:bg-[#6e5494]/10"
