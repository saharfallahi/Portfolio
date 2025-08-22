import React from "react";

function Contact() {
  return (
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
  );
}

export default Contact;
