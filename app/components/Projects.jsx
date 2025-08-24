"use client";

import useI18n from '../hooks/useI18n';
import useReveal from '../hooks/useReveal';

function Projects() {
  const { t } = useI18n();
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
  )
}

export default Projects