"use client";

import Image from "next/image";
import useI18n from "../hooks/useI18n";
import useReveal from "../hooks/useReveal";

function Projects() {
  const { t,lang } = useI18n();
  useReveal();

  return (
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
          {(t("projects.items") || []).map(
            ([title, desc, code, demo, image, techs], idx) => (
              <article key={idx} className="card shadow-soft hover:scale-105 transition-all duration-300">
                <div className="aspect-video relative" aria-hidden="true">
                  <Image src={image} alt={title} fill />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-1">{title}</h3>
                  <p className="text-[var(--muted)] mb-4">{desc}</p>
                  <div >
                    <h3 className="text-sm font-bold mb-2">{lang==="fa"?"تکنولوژی ها:":"Tech stack:"}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                    {techs.map((tech) => (
                      <span key={tech} className="flex flex-row gap-2 items-center rounded-full bg-[var(--bg-icon)] text-[var(--primary)] border border-[var(--border-icon)]  shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  px-2 py-1 text-xs font-medium  hover:bg-[var(--primary-1)] hover:text-[var(--surface)] transition-all duration-300 ease-in-out ">
                        {tech}
                      </span>
                    ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={demo}
                      target="_blank"
                      rel="noopener"
                      className="btn btn-primary !py-2 !px-3 text-sm"
                    >
                      {t("projects.demo")}
                    </a>
                    <a
                      href={code}
                      target="_blank"
                      rel="noopener"
                      className="btn btn-ghost !py-2 !px-3 text-sm"
                    >
                      {t("projects.code")}
                    </a>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
