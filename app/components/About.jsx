"use client";

import { FaCode } from "react-icons/fa6";
import useI18n from "../hooks/useI18n";
import useReveal from "../hooks/useReveal";

function About() {
  const { t } = useI18n();
  useReveal();

  return (
    <section id="about" className="section section-alt" >
          <h2 className="section-title" data-reveal>{t("about.title")}</h2>
      <div className="container-std grid sm:grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-8 items-center" data-reveal>
        <div >
          {(t("about.body") || []).map((para, i) => (
            <p key={i} className="mb-3 last:mb-0">
              {para}
            </p>
          ))}
          <ul className="flex flex-wrap gap-2 mt-4 p-0 list-none">
            {(t("about.badges") || []).map((b) => (
              <li
                key={b}
                className="px-2.5 py-1.5 rounded-md btn btn-primary "
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div
          className="flex flex-col gap-4"
          data-reveal
          data-reveal-delay="120"
        >
          {(t("about.stats") || []).map(([num, label]) => (
            <div
              key={label}
              className=" flex items-center justify-center gap-2 contact-card !about-card shadow-lg hover:scale-x-105 transition-all duration-300"
             
             
            >
              
              <div className="text-xl font-bold">{num}</div>
              <div className="text-sm md:text-base text-[var(--text)]">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
