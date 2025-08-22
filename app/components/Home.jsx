import React from "react";

function Home() {
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
  );
}

export default Home;
