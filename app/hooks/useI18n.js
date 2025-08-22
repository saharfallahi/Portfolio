"use client";

import { useEffect, useMemo, useState } from "react";

const TRANSLATIONS = {
  fa: {
    nav: {
      home: "خانه",
      about: "درباره‌من",
      skills: "مهارت‌ها",
      projects: "نمونه‌کارها",
      contact: "تماس",
    },
    hero: {
      hello: "سلام! من",
      developer: "برنامه‌نویس وب",
      am: "سحر فلاحی",
      description:
        "عاشق ساخت رابط‌های کاربری سریع، تمیز و در دسترس با تمرکز روی تجربه کاربری.",
      ctaProjects: "مشاهده نمونه‌کارها",
      ctaContact: "ارتباط با من",
    },
    about: {
      title: "درباره‌من",
      body: [
        "من سحر فلاحی هستم؛ مسیری که تا امروز طی کرده‌ام، ترکیبی از علاقه به تکنولوژی، تحصیلات دانشگاهی و تجربه تدریس و کار عملی بوده است.",
        "از همان روزهای دانشجویی در رشته مهندسی نرم‌افزار و بعدتر کارشناسی ارشد IT، دنیای طراحی و توسعه وب برای من فقط یک مهارت نبود، بلکه تبدیل شد به یک شیوه بیان خلاقیت.",
        "هشت سال تدریس در دانشگاه‌ها و مراکز علمی برای من فقط تجربه آموزش نبود؛ فرصتی بود تا یاد بگیرم چطور مفاهیم پیچیده را ساده و قابل‌فهم منتقل کنم، چطور شنونده نیازهای دیگران باشم و چطور تیم‌های مختلف را به سمت یک هدف مشترک هدایت کنم. این تجربه امروز در پروژه‌هایم یک مزیت منحصربه‌فرد است، چون به من کمک می‌کند هم نیاز کارفرما را درست درک کنم و هم با زبان ساده با تیم‌ها و کاربران ارتباط بگیرم.",
        "سه سال اخیر را به‌صورت تخصصی در زمینه توسعه فرانت‌اند با React، Next.js و Tailwind کار کرده‌ام و هر روز بیشتر به این باور می‌رسم که یک رابط کاربری خوب می‌تواند آینده یک کسب‌وکار را تغییر دهد. هدف من این است که با ترکیب تخصص فنی و مهارت‌های ارتباطی، پروژه‌هایی بسازم که هم کارآمد باشند و هم اثرگذار.",
      ],
      badges: ["عملکرد بالا", "دسترسی‌پذیری", "کدنویسی تمیز", "طراحی پاسخ‌گرا"],
      stats: [
        ["4+", "سال تجربه"],
        ["25+", "پروژه تکمیل‌شده"],
        ["10+", "مشارکت متن‌باز"],
      ],
    },
    skills: {
      title: "مهارت‌ها",
    },
    projects: {
      title: "نمونه‌کارها",
      items: [
        [
          "پنل مدیریت سبک",
          "داشبورد رسپانسیو با نمودارها، جدول‌ها و تم تاریک/روشن.",
        ],
        [
          "لندینگ مارکتینگ",
          "صفحه فرود سریع با امتیاز Lighthouse بالا و SEO مناسب.",
        ],
        ["اپلیکیشن وظایف", "To-Do با Drag & Drop، فیلتر و ذخیره‌سازی محلی."],
      ],
      demo: "دمو",
      code: "کد",
    },
    contact: {
      title: "در تماس باشید",
      body: "برای همکاری، پروژه جدید یا فقط سلام کردن خوشحال می‌شوم پیام بدهید.",
      github: "گیت‌هاب",
      linkedin: "لینکدین",
      emailLabel: "ایمیل",
      name: "نام",
      email: "ایمیل",
      message: "پیام",
      namePlaceholder: "نام شما",
      emailPlaceholder: "example@mail.com",
      messagePlaceholder: "سلام!",
      submit: "ارسال",
      submitHint: "ارسال، برنامه ایمیل شما را باز می‌کند.",
      emailSubjectPrefix: "پیام از",
      emailSender: "ارسال کننده",
    },
    footer: {
      note: "ساخته‌شده با عشق و کدنویسی.",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      hello: "Hi! I'm",
      developer: "Web Developer",
      am: "Sahar Fallahi",
      description:
        "I love building fast, clean, and accessible UIs focused on great UX.",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
    },
    about: {
      title: "About me",
      body: [
        "I'm Sahar Fallahi. My journey blends a passion for technology, academic study, and years of teaching and hands-on work.",
        "From my undergraduate studies in Software Engineering to an M.Sc. in IT, web design and development became more than a skill—it became my way to express creativity.",
        "Eight years of teaching at universities and institutes taught me how to distill complex ideas, listen to real needs, and guide diverse teams toward shared goals. This background is now a unique advantage in my projects: I can understand stakeholders clearly and communicate simply with both teams and users.",
        "Over the last three years I’ve specialized in front-end development with React, Next.js, and Tailwind, and I’m increasingly convinced that great UI can change a business’s future. My aim is to combine technical expertise with strong communication to build products that are both efficient and impactful.",
      ],
      badges: [
        "High performance",
        "Accessibility",
        "Clean code",
        "Responsive design",
      ],
      stats: [
        ["4+", "Years of experience"],
        ["25+", "Projects completed"],
        ["10+", "Open-source contributions"],
      ],
    },
    skills: {
      title: "Skills",
    },
    projects: {
      title: "Projects",
      items: [
        [
          "Lightweight admin panel",
          "Responsive dashboard with charts, tables, and dark/light theme.",
        ],
        [
          "Marketing landing",
          "Fast landing page with high Lighthouse score and solid SEO.",
        ],
        [
          "Todo application",
          "To-Do with Drag & Drop, filters, and local storage.",
        ],
      ],
      demo: "Demo",
      code: "Code",
    },
    contact: {
      title: "Get in touch",
      body: "I'd love to hear from you about collaborations, new projects, or just to say hi.",
      github: "GitHub",
      linkedin: "LinkedIn",
      emailLabel: "Email",
      name: "Name",
      email: "Email",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "example@mail.com",
      messagePlaceholder: "Hi!",
      submit: "Send",
      submitHint: "Submitting opens your email client.",
      emailSubjectPrefix: "Message from",
      emailSender: "Sender",
    },
    footer: {
      note: "Built with love and code.",
    },
  },
};

export default function useI18n() {
  const [lang, setLang] = useState("fa");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fa" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "fa" ? "fa" : "en";
      document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    }
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const t = useMemo(() => {
    const dict = TRANSLATIONS[lang] || {};
    return (key) => {
      const parts = key.split(".");
      let cur = dict;
      for (const p of parts) {
        if (cur && typeof cur === "object") cur = cur[p];
      }
      return cur ?? key;
    };
  }, [lang]);

  const toggleLanguage = () => setLang((prev) => (prev === "fa" ? "en" : "fa"));
  const dir = lang === "fa" ? "rtl" : "ltr";

  return { lang, dir, t, setLang, toggleLanguage };
}
