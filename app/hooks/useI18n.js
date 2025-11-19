"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const TRANSLATIONS = {
  fa: {
    nav: {
      logo: "سحر فلاحی",
      home: "خانه",
      about: "درباره‌من",
      skills: "مهارت‌ها",
      projects: "نمونه‌کارها",
      blog: "مقالات",
      contact: "تماس",
    },
    hero: {
      hello: "سلام! من",
      developer: "برنامه‌نویس وب",
      am: "سحر فلاحی",
      description:
        " متخصص در فرانت‌اند و سابقه قوی در حوزه نرم افزار وعلاقه‌مند به خلق رابط‌های کاربری مدرن و تجربه‌های دیجیتال کاربرپسند.",
      ctaProjects: "مشاهده نمونه‌کارها",
      ctaContact: "ارتباط با من",
    },
    about: {
      title: "درباره‌من",
      body: [
        "من سحر فلاحی هستم؛ مسیری که تا امروز طی کرده‌ام، ترکیبی از علاقه به تکنولوژی، تحصیلات دانشگاهی و تجربه تدریس و فریلنسری بوده است.",
        "از همان روزهای دانشجویی در رشته مهندسی نرم‌افزار و بعدتر کارشناسی ارشد IT، دنیای طراحی و توسعه وب برای من فقط یک مهارت نبود، بلکه تبدیل شد به یک شیوه خلق کردن.",
        "هشت سال تدریس در دانشگاه‌ها و مراکز علمی برای من فقط تجربه آموزش نبود؛ فرصتی بود تا یاد بگیرم چطور مفاهیم پیچیده را ساده و قابل‌فهم منتقل کنم، چطور شنونده نیازهای دیگران باشم و چطور تیم‌های مختلف را به سمت یک هدف مشترک هدایت کنم. این تجربه امروز در پروژه‌هایم یک مزیت منحصربه‌فرد است، چون به من کمک می‌کند هم نیاز کارفرما را درست درک کنم و هم با زبان ساده با تیم‌ها و کاربران ارتباط بگیرم.",
        "چهار سال اخیر را به‌صورت تخصصی در زمینه توسعه فرانت‌اند کار کرده‌ام و هر روز بیشتر به این باور می‌رسم که یک رابط کاربری خوب می‌تواند آینده یک کسب‌وکار را تغییر دهد. هدف من این است که با ترکیب تخصص فنی و مهارت‌های ارتباطی، پروژه‌هایی بسازم که هم کارآمد باشند و هم اثرگذار.",
      ],
      badges: ["عملکرد بالا", "کدنویسی تمیز", "طراحی واکنش گرا"],
      stats: [
        ["8+", "سال تدریس"],
        ["4+", "سال فریلنسری"],
        ["10+", "پروژه تکمیل‌شده"],
        ["20+", "تکنولوژی مسلط"],
      ],
    },
    skills: {
      title: "مهارت‌های فنی",
    },
    projects: {
      title: "نمونه‌کارها",
      items: [
        [
          "پروژه پتروشیمی ایران زمین",
          "اپلیکیشن صنعتی برای معرفی خدمات حوزه پتروشیمی با طراحی رسپانسیو و تصاویر بهینه شده و سریع",
          "https://github.com/saharfallahi/PetrochemicalApp",
          "https://petrochemical-app.vercel.app/",
          "/PetrochemicalApp.png",
          ["React", "TailwindCss", "JSONServer"],
        ],
        [
          "اپلیکیشن فریلنسری",
          "یک اپلیکیشن فریلنسری با طراحی واکنش‌گرا دارای سه نقش مدیر، فریلنسر و مالک است. استفاده از شماره موبایل و کد OTP برای ورود به سیستم.",
          "https://github.com/saharfallahi/FreelancerApp",
          "https://freelanceproject.ir",
          "/FreelancingApp.png",
          ["React", "TailwindCss", "MongoDB", "Postman"],
        ],
        [
          "اپلیکیشن مدیریت محصولات",
          " صفحه وب برای افزودن محصولات و دسته‌بندی‌های آنها با قابلیت جستجو و مرتب‌سازی و فیلتر کردن و حذف محصولات",
          "https://github.com/saharfallahi/ProductManagementApp",
          "https://product-management-psi-swart.vercel.app",
          "/ProductManagementApp.png",
          ["React", "TailwindCss", "LocalStorage"],
        ],
      ],
      demo: "مشاهده آنلاین پروژه",
      code: "کد پروژه",
    },
    contact: {
      title: "ارتباط با من",
      body: "برای همکاری، پروژه جدید یا مشاوره در زمینه توسعه وب خوشحال می‌شوم پیام بدهید.",
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
      connect: "شبکه های اجتماعی",
      call: "شماره تماس",
      licenses: "مجوزها",
    },
    footer: {
      note: " سحر فلاحی. همه حقوق محفوظ است.",
    },
  },
  en: {
    nav: {
      logo: "Sahar Fallahi",
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      blog: "Blog",
      contact: "Contact",
    },
    hero: {
      hello: "Hi! I'm",
      developer: "Web Developer",
      am: "Sahar Fallahi",
      description:
        "A front-end expert with a strong background in software development and a passion for creating modern user interfaces and user-friendly digital experiences",
      ctaProjects: "View projects",
      ctaContact: "Contact me",
    },
    about: {
      title: "About me",
      body: [
        "I'm Sahar Fallahi. My journey blends a passion for technology, academic study, and experience of teaching and freelancing .",
        "From my undergraduate studies in Software Engineering to an M.Sc. in IT, web design and development became more than a skill—it became a way of creating.",
        "Eight years of teaching at universities and institutes taught me how to distill complex ideas, listen to real needs, and guide diverse teams toward shared goals. This background is now a unique advantage in my projects: I can understand stakeholders clearly and communicate simply with both teams and users.",
        "Over the last four years I’ve specialized in front-end development and I’m increasingly convinced that great UI can change a business’s future. My aim is to combine technical expertise with strong communication to build products that are both efficient and impactful.",
      ],
      badges: ["High performance", "Clean code", "Responsive design"],
      stats: [
        ["8+", "Years of Teaching"],
        ["4+", "Years of Freelancing"],
        ["10+", "Completed Projects"],
        ["20+", "Mastered Technologies"],
      ],
    },
    skills: {
      title: "Technical skills",
    },
    projects: {
      title: "Projects",
      items: [
        [
          "Iran Zamin Petrochemical Project",
          "Industrial application for introducing petrochemical services with responsive design and optimized and fast images",
          "https://github.com/saharfallahi/PetrochemicalApp",
          "https://petrochemical-app.vercel.app/",
          "/PetrochemicalApp.png",
          ["React", "TailwindCss", "JSONServer"],
        ],
        [
          "Freelacing App",
          "freelance application with Responsive design has 3 roles Admin, Freelancer and Owner.login with mobile number and OTP.",
          "https://github.com/saharfallahi/FreelancerApp",
          "https://freelanceproject.ir",
          "/FreelancingApp.png",
          ["React", "TailwindCss", "MongoDB", "Postman"],
        ],
        [
          "Product Management App",
          "web page for add products and their categories with capability of search and sort and filter and delete on products",
          "https://github.com/saharfallahi/ProductManagementApp",
          "https://product-management-psi-swart.vercel.app",
          "/ProductManagementApp.png",
          ["React", "TailwindCss", "LocalStorage"],
        ],
      ],
      demo: "Online Demo",
      code: "Code",
    },
    contact: {
      title: "Contact me",
      body: "I would be happy to message me for collaboration, new projects or advice on web development.",
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
      connect: "Connect with me",
      call: "Phone Number",
      licenses: "Licenses",
    },
    footer: {
      note: " Sahar Fallahi. All rights reserved.",
    },
  },
};

// export default function useI18n() {
//   const [lang, setLang] = useState("en");

//   useEffect(() => {
//     try {
//       const saved = localStorage.getItem("lang");
//       if (saved === "fa" || saved === "en") setLang(saved);
//     } catch {}
//   }, []);

//   useEffect(() => {
//     if (typeof document !== "undefined") {
//       document.documentElement.lang = lang === "fa" ? "fa" : "en";
//       document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
//     }
//     try {
//       localStorage.setItem("lang", lang);
//     } catch {}
//   }, [lang]);

//   const t = useMemo(() => {
//     const dict = TRANSLATIONS[lang] || {};
//     return (key) => {
//       const parts = key.split(".");
//       let cur = dict;
//       for (const p of parts) {
//         if (cur && typeof cur === "object") cur = cur[p];
//       }
//       return cur ?? key;
//     };
//   }, [lang]);

//   const toggleLanguage = () => setLang((prev) => (prev === "fa" ? "en" : "fa"));
//   const dir = lang === "fa" ? "rtl" : "ltr";

//   return { lang, dir, t, setLang, toggleLanguage };
// }

const I18nContext = createContext(null);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState("fa");

  // hydrate from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "fa" || saved === "en") setLang(saved);
    } catch {}
  }, []);

  // reflect on <html> and persist
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "fa" ? "fa" : "en";
      document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    }
    try {
      localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const dict = TRANSLATIONS[lang] || {};

  const t = useCallback(
    (key) => {
      const parts = key.split(".");
      let cur = dict;
      for (const p of parts) {
        if (cur && typeof cur === "object") cur = cur[p];
        else return key;
      }
      return cur ?? key;
    },
    [dict]
  );

  const toggleLanguage = useCallback(() => {
    setLang((prev) => (prev === "fa" ? "en" : "fa"));
  }, []);

  const value = useMemo(
    () => ({
      lang,
      dir: lang === "fa" ? "rtl" : "ltr",
      t,
      setLang,
      toggleLanguage,
    }),
    [lang, t, toggleLanguage]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export default function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within <I18nProvider>");
  }
  return ctx;
}
