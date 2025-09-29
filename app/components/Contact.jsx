"use client";

import { FaGithub, FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import useI18n from "../hooks/useI18n";
import useReveal from "../hooks/useReveal";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

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
    window.location.href = `mailto:s.fallahi.66@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section section-alt">
      <h2 className="section-title" data-reveal>
        {t("contact.title")}
      </h2>
      <div className="container-std">
        <p className="text-center mb-10 text-[var(--text)]" data-reveal>
          {t("contact.body")}
        </p>
        <div className=" grid md:grid-cols-2 gap-8 items-start">
          <div data-reveal>
            <ul className="flex flex-col  items-center gap-2 p-0 list-none">
              <div className="contact-card ">
                <div className="flex items-center gap-2 mb-4  md:mb-0">
                  <HiOutlineMail className=" w-5 h-5 text-[var(--primary)]" />
                  <h3 className="text-[var(--primary)] font-bold ">
                    {t("contact.emailLabel")}
                  </h3>
                </div>
                <div className="flex items-center justify-end gap-x-4 ]">
                  <a
                    className="text-[var(--text) font-semibold"
                    href="mailto:s.fallahi.66@gmail.com"
                    aria-label={t("contact.emailLabel")}
                  >
                    s.fallahi.66@gmail.com
                  </a>
                </div>
              </div>
              <div className="contact-card ">
                <div className="flex items-center gap-2 mb-4 md:mb-0">
                  <HiOutlinePhone className=" w-5 h-5 text-[var(--primary)]" />
                  <h3 className="text-[var(--primary)] font-bold ">
                    {t("contact.call")}
                  </h3>
                </div>
                <div className="flex items-center justify-end gap-x-4">
                  <a
                    href="tel:09169629957"
                    className="font-semibold text-[var(--text) "
                    rel="noopener"
                    target="_blank"
                  >
                    09169629957
                  </a>
                </div>
              </div>
              <div className="contact-card ">
                <h3 className="text-[var(--primary)] font-bold mb-4 md:mb-0">
                  {t("contact.connect")}
                </h3>
                <div className="flex items-center justify-end gap-x-4">
                  <a
                    href="https://github.com/saharfallahi"
                    className="social-icon "
                    rel="noopener"
                    target="_blank"
                  >
                    <FaGithub className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sahar-fallahi/"
                    className="social-icon"
                    rel="noopener"
                    target="_blank"
                  >
                    <FaLinkedinIn className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                  <a
                    href="https://t.me/SaharFallahi"
                    className="social-icon"
                    rel="noopener"
                    target="_blank"
                  >
                    <FaTelegramPlane className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                </div>
              </div>
              <div className="contact-card ">
                <div className="flex justify-start gap-2 mb-4 md:mb-0">
                  <h3 className="text-[var(--primary)] font-bold ">
                    {t("contact.licenses")}
                  </h3>
                </div>
                <div className="flex items-center justify-end gap-x-4">
                  <a referrerPolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=653548&Code=Bigmoqoy21SSdoVra2lLjwiHi6tyvGHn'>
                  <img referrerPolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=653548&Code=Bigmoqoy21SSdoVra2lLjwiHi6tyvGHn' alt='' style={{cursor:"pointer"}} code='Bigmoqoy21SSdoVra2lLjwiHi6tyvGHn'/>
                  </a>
                </div>
              </div>
            </ul>
          </div>
          <form
            onSubmit={submitContact}
            className="rounded-2xl border border-[var(--border-icon)] shadow-sm p-6  bg-[var(--bg)]"
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
                className="bg-[var(--surface)] border border-[var(--border-icon)] text-[var(--text)] rounded-lg px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus:border-transparent"
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
                className="bg-[var(--surface)] border border-[var(--border-icon)] text-[var(--text)] rounded-lg px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus:border-transparent"
              />
            </div>
            <div className="flex flex-col gap-1.5 mb-4">
              <label htmlFor="message">{t("contact.message")}</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder={t("contact.messagePlaceholder")}
                className="bg-[var(--surface)] border border-[var(--border-icon)] text-[var(--text)] rounded-lg px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus:border-transparent resize-none"
              />
            </div>
            <button type="submit" className="w-full md:w-auto flex justify-center btn btn-primary !py-2 mt-8 ">
              {t("contact.submit")}
            </button>
            <p className="text-[var(--muted)] text-sm mt-2">
              {t("contact.submitHint")}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
