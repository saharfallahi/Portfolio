"use client";

import { FaGithub } from "react-icons/fa";
import useI18n from "../hooks/useI18n";
import useReveal from "../hooks/useReveal";
import { HiOutlineMail } from "react-icons/hi";

function Contact() {
  const { t } = useI18n();
  useReveal();

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
    <section id="contact" className="section section-alt">
      <h2 className="section-title" data-reveal>
        {t("contact.title")}
      </h2>
      <div className="container-std grid md:grid-cols-2 gap-8 items-start">
        <div data-reveal>
          <p>{t("contact.body")}</p>
          <ul className="flex flex-col  items-center gap-4 mt-4 p-0 list-none">
            <div className="contact-card ">
              <li>
                <a
                  className="inline-flex items-center gap-2 no-underline text-[var(--text)] hover:text-[var(--primary)]"
                  href="https://github.com/saharfallahi"
                  target="_blank"
                  rel="noopener"
                  aria-label={t("contact.github")}
                >
                  <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </li>
            </div>
            <div className="contact-card ">
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
            </div>
            <div className="contact-card ">
              <HiOutlineMail  className="w-6 h-6"/>
              <li>

                <a
                  className="flex flex-col items-start gap-2 no-underline text-[var(--text)]"
                  href="mailto:you@example.com"
                  aria-label={t("contact.emailLabel")}
                >
                  <span>ایمیل</span>
                  <span>s.fallahi.66@gmail.com</span>
                </a>
              </li>
            </div>
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
