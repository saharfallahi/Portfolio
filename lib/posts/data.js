export const posts = [
  {
    slug: "react-vs-nextjs-view-source",
    title:
      "تفاوت View Page Source در سایت‌های React و Next.js: چرا این تفاوت وجود دارد؟",
    summary:
      "اگر تا به حال کد منبع یک سایت React را با یک سایت Next.js مقایسه کرده باشید، حتماً متوجه تفاوت‌های چشمگیر شده‌اید. در این مقاله به زبان ساده می‌فهمیم چرا این تفاوت وجود دارد و چه تأثیری روی SEO و عملکرد سایت دارد.",
    description:
      "بررسی تفاوت‌های View Page Source در React (Client-Side Rendering) و Next.js (Server-Side Rendering): از ساختار HTML تا تأثیر روی SEO و عملکرد سایت.",
    coverImage: "/blog/react-nextjs-view-source.svg",
    tags: [
      "React",
      "Next.js",
      "SEO",
      "Server-Side Rendering",
      "Client-Side Rendering",
      "View Page Source",
    ],
    date: "2025-11-19",
    readTime: "۱۰ دقیقه مطالعه",
    keywords: [
      "React vs Next.js",
      "View Page Source",
      "Server-Side Rendering",
      "Client-Side Rendering",
      "تفاوت React و Next.js",
      "SEO React",
      "SSR vs CSR",
    ],
    content: [
      {
        type: "paragraph",
        text: 'احتمالاً برای شما هم پیش آمده که کد منبع یک سایت را با View Page Source بررسی کرده باشید. اگر سایت‌های مختلف را با هم مقایسه کنید، متوجه می‌شوید که بعضی از آن‌ها HTML کاملی با تمام محتوا دارند، اما بعضی دیگر فقط یک `<div id="root">` خالی و چند فایل JavaScript! این تفاوت دقیقاً همان چیزی است که می‌خواهیم در این مقاله بررسی کنیم.',
      },
      {
        type: "heading",
        text: "View Page Source چیست؟",
      },
      {
        type: "paragraph",
        text: "View Page Source (یا همان Ctrl+U) کد HTML خامی است که سرور به مرورگر شما ارسال می‌کند. این همان چیزی است که قبل از اجرای JavaScript در مرورگر می‌بینید. نکته جالب اینجاست که این کد می‌تواند بسته به اینکه سایت با React ساخته شده یا Next.js، کاملاً متفاوت باشد.",
      },
      {
        type: "heading",
        text: "سایت‌های React: Client-Side Rendering (CSR)",
      },
      {
        type: "paragraph",
        text: "وقتی یک سایت با React خالص (بدون Next.js) ساخته می‌شود، معمولاً از Client-Side Rendering استفاده می‌کند. یعنی چه؟",
      },
      {
        type: "list",
        items: [
          'سرور فقط یک فایل HTML ساده ارسال می‌کند که شامل یک `<div id="root">` خالی است',
          "تمام محتوا و ساختار صفحه توسط JavaScript در مرورگر کاربر ساخته می‌شود",
          "بعد از بارگذاری JavaScript، React شروع به ساخت DOM می‌کند",
        ],
      },
      {
        type: "paragraph",
        text: "اگر View Page Source یک سایت React را باز کنید، چیزی شبیه این می‌بینید:",
      },
      {
        type: "code",
        text: '<div id="root"></div>\n<script src="/static/js/bundle.js"></script>',
      },
      {
        type: "paragraph",
        text: "یعنی محتوای واقعی صفحه در کد منبع وجود ندارد! همه چیز بعد از اجرای JavaScript ساخته می‌شود.",
      },
      {
        type: "heading",
        text: "سایت‌های Next.js: Server-Side Rendering (SSR) یا Static Site Generation (SSG)",
      },
      {
        type: "paragraph",
        text: "Next.js برخلاف React خالص، از Server-Side Rendering یا Static Site Generation استفاده می‌کند. یعنی چه؟",
      },
      {
        type: "list",
        items: [
          "سرور (یا در زمان build) HTML کامل صفحه را می‌سازد",
          "مرورگر یک HTML کامل با تمام محتوا دریافت می‌کند",
          "JavaScript فقط برای تعاملی کردن صفحه استفاده می‌شود (Hydration)",
        ],
      },
      {
        type: "paragraph",
        text: "اگر View Page Source یک سایت Next.js را باز کنید، HTML کاملی با تمام محتوا، تگ‌های `<h1>`, `<p>`, `<article>` و غیره می‌بینید. انگار که یک سایت HTML خالص است!",
      },
      {
        type: "heading",
        text: "چرا این تفاوت وجود دارد؟",
      },
      {
        type: "paragraph",
        text: "این تفاوت به دلیل تفاوت در رویکرد رندرینگ است:",
      },
      {
        type: "list",
        items: [
          "React خالص: رندرینگ در مرورگر (Client) انجام می‌شود → HTML خالی",
          "Next.js: رندرینگ در سرور (Server) انجام می‌شود → HTML کامل",
        ],
      },
      {
        type: "paragraph",
        text: "به زبان ساده: React می‌گوید «من HTML را در مرورگر می‌سازم» اما Next.js می‌گوید «من HTML را در سرور می‌سازم و بعد به مرورگر می‌فرستم».",
      },
      {
        type: "heading",
        text: "مثال عملی: یک صفحه مقاله",
      },
      {
        type: "paragraph",
        text: "بیایید یک مثال عملی بزنیم. فرض کنید یک صفحه مقاله با این محتوا داریم:",
      },
      {
        type: "quote",
        text: "عنوان: «آموزش React»\nمحتوا: «React یک کتابخانه JavaScript برای ساخت رابط کاربری است...»",
      },
      {
        type: "paragraph",
        text: "در سایت React (CSR):",
      },
      {
        type: "list",
        items: [
          'View Page Source: فقط `<div id="root"></div>`',
          "بعد از بارگذاری JS: محتوا ظاهر می‌شود",
          "موتور جستجو: ممکن است محتوا را نبیند (اگر JavaScript را اجرا نکند)",
        ],
      },
      {
        type: "paragraph",
        text: "در سایت Next.js (SSR/SSG):",
      },
      {
        type: "list",
        items: [
          "View Page Source: `<h1>آموزش React</h1><p>React یک کتابخانه JavaScript...</p>`",
          "بعد از بارگذاری JS: صفحه تعاملی می‌شود",
          "موتور جستجو: محتوا را فوراً می‌بیند",
        ],
      },
      {
        type: "heading",
        text: "تأثیر روی SEO",
      },
      {
        type: "paragraph",
        text: "این تفاوت تأثیر مستقیمی روی SEO دارد:",
      },
      {
        type: "list",
        items: [
          "سایت‌های React: موتورهای جستجو باید JavaScript را اجرا کنند تا محتوا را ببینند (که ممکن است زمان‌بر باشد یا کامل انجام نشود)",
          "سایت‌های Next.js: موتورهای جستجو فوراً محتوا را می‌بینند (مثل سایت‌های HTML خالص)",
        ],
      },
      {
        type: "quote",
        text: "گوگل می‌تواند JavaScript را اجرا کند، اما همیشه این کار را به صورت کامل انجام نمی‌دهد. داشتن HTML کامل در کد منبع، تضمین می‌کند که محتوای شما همیشه قابل ایندکس شدن است.",
      },
      {
        type: "heading",
        text: "تأثیر روی عملکرد",
      },
      {
        type: "paragraph",
        text: "عملکرد هم تحت تأثیر قرار می‌گیرد:",
      },
      {
        type: "list",
        items: [
          "سایت‌های React: کاربر باید منتظر بماند تا JavaScript بارگذاری و اجرا شود تا محتوا را ببیند (ممکن است چند ثانیه طول بکشد)",
          "سایت‌های Next.js: کاربر فوراً محتوا را می‌بیند (HTML کامل از همان اول موجود است)",
        ],
      },
      {
        type: "paragraph",
        text: "این یعنی در Next.js، حتی اگر JavaScript کند بارگذاری شود، کاربر حداقل محتوا را می‌بیند. اما در React، اگر JavaScript کند باشد، کاربر فقط یک صفحه خالی می‌بیند.",
      },
      {
        type: "heading",
        text: "چطور تشخیص دهیم یک سایت React است یا Next.js؟",
      },
      {
        type: "paragraph",
        text: "با View Page Source می‌توانید به راحتی تشخیص دهید:",
      },
      {
        type: "list",
        items: [
          'React: فقط `<div id="root">` یا `<div id="app">` خالی + فایل‌های JavaScript',
          "Next.js: HTML کامل با محتوا + وجود `__NEXT_DATA__` در کد (یک اسکریپت که داده‌های اولیه را نگه می‌دارد)",
        ],
      },
      {
        type: "paragraph",
        text: "همچنین می‌توانید به URL فایل‌های JavaScript نگاه کنید. Next.js معمولاً فایل‌هایی با نام‌های مثل `_next/static/...` دارد.",
      },
      {
        type: "heading",
        text: "مزایا و معایب هر کدام",
      },
      {
        type: "paragraph",
        text: "React (CSR):",
      },
      {
        type: "list",
        items: [
          "✅ مزایا: ساده‌تر برای شروع، مناسب برای اپلیکیشن‌های داخلی (که SEO مهم نیست)",
          "❌ معایب: SEO ضعیف‌تر، زمان بارگذاری اولیه بیشتر، نیاز به JavaScript برای نمایش محتوا",
        ],
      },
      {
        type: "paragraph",
        text: "Next.js (SSR/SSG):",
      },
      {
        type: "list",
        items: [
          "✅ مزایا: SEO عالی، زمان بارگذاری اولیه کمتر، محتوا فوراً قابل مشاهده است",
          "❌ معایب: پیچیده‌تر برای شروع، نیاز به سرور (برای SSR) یا زمان build بیشتر (برای SSG)",
        ],
      },
      {
        type: "heading",
        text: "نتیجه‌گیری",
      },
      {
        type: "paragraph",
        text: "تفاوت View Page Source در React و Next.js به دلیل تفاوت در رویکرد رندرینگ است. React محتوا را در مرورگر می‌سازد (CSR) اما Next.js محتوا را در سرور می‌سازد (SSR) یا در زمان build (SSG). این تفاوت تأثیر مستقیمی روی SEO و عملکرد سایت دارد. اگر SEO و زمان بارگذاری اولیه برای شما مهم است، Next.js انتخاب بهتری است. اما اگر یک اپلیکیشن داخلی می‌سازید که SEO مهم نیست، React خالص هم کافی است.",
      },
      {
        type: "paragraph",
        text: "دفعه بعد که View Page Source یک سایت را باز کردید، به ساختار HTML نگاه کنید. اگر HTML کامل با محتوا دیدید، احتمالاً از Next.js یا یک فریمورک SSR استفاده می‌کند. اگر فقط یک div خالی دیدید، احتمالاً React خالص است!",
      },
    ],
  },
  {
    slug: "view-page-source-for-developers",
    title:
      "View Page Source: چه اطلاعاتی از کد منبع یک وب‌سایت می‌توانیم استخراج کنیم؟",
    summary:
      "View Page Source یکی از ساده‌ترین و قدرتمندترین ابزارهای یادگیری برای توسعه‌دهندگان است. بیایید ببینیم چطور می‌توانیم از آن برای تحلیل، یادگیری و بهبود پروژه‌های خود استفاده کنیم.",
    description:
      "راهنمای جامع استفاده از View Page Source برای استخراج اطلاعات مفید از وب‌سایت‌ها: از متادیتا و SEO تا ساختار HTML، کتابخانه‌های استفاده شده و نکات امنیتی.",
    coverImage: "/blog/view-page-source.svg",
    tags: [
      "Web Development",
      "HTML",
      "SEO",
      "Learning",
      "Tools",
      "view page source",
    ],
    date: "2025-11-18",
    readTime: "۹ دقیقه مطالعه",
    keywords: [
      "View Page Source",
      "تحلیل کد منبع",
      "یادگیری از وب‌سایت‌ها",
      "HTML analysis",
      "Web development tools",
    ],
    content: [
      {
        type: "paragraph",
        text: "View Page Source یکی از اولین ابزارهایی است که هر توسعه‌دهنده وب با آن آشنا می‌شود. با کلیک راست روی صفحه و انتخاب «View Page Source» یا فشردن `Ctrl+U` (در ویندوز) و `Cmd+Option+U` (در مک)، می‌توانید کد HTML خام صفحه را ببینید. اما آیا می‌دانستید که این کد منبع می‌تواند اطلاعات بسیار ارزشمندی درباره ساختار، تکنولوژی‌ها و استراتژی‌های به‌کاررفته در یک وب‌سایت به شما بدهد؟",
      },
      {
        type: "heading",
        text: "۱. اطلاعات متادیتا و SEO",
      },
      {
        type: "paragraph",
        text: "اولین بخشی که باید بررسی کنید، تگ `<head>` است. این بخش شامل اطلاعات مهمی است که موتورهای جستجو و مرورگرها از آن استفاده می‌کنند.",
      },
      {
        type: "list",
        items: [
          "تگ `<title>`: عنوان صفحه که در تب مرورگر و نتایج جستجو نمایش داده می‌شود",
          'تگ `<meta name="description">`: توضیحات صفحه که در نتایج جستجو ظاهر می‌شود',
          'تگ `<meta name="keywords">`: کلمات کلیدی (اگرچه دیگر تأثیر مستقیمی در SEO ندارد)',
          "تگ‌های Open Graph: برای بهینه‌سازی اشتراک‌گذاری در شبکه‌های اجتماعی",
          'تگ `<meta name="viewport">`: تنظیمات نمایش در موبایل',
          'تگ `<link rel="canonical">`: URL اصلی صفحه برای جلوگیری از محتوای تکراری',
        ],
      },
      {
        type: "paragraph",
        text: "با بررسی این بخش می‌توانید ببینید که یک سایت چطور SEO خود را بهینه کرده و چه استراتژی‌ای برای بهبود رتبه در موتورهای جستجو دارد.",
      },
      {
        type: "heading",
        text: "۲. شناسایی تکنولوژی‌ها و فریمورک‌ها",
      },
      {
        type: "paragraph",
        text: "کد منبع می‌تواند اطلاعات زیادی درباره تکنولوژی‌های استفاده شده در پروژه به شما بدهد. به دنبال این نشانه‌ها باشید:",
      },
      {
        type: "list",
        items: [
          "React/Next.js: وجود `__NEXT_DATA__` یا کامپوننت‌های React در HTML",
          "Vue.js: وجود `data-v-` attributes یا `__vue__` در المنت‌ها",
          "Angular: وجود `ng-` attributes یا کامپوننت‌های Angular",
          "CSS Framework: کلاس‌های Tailwind، Bootstrap، یا Material-UI",
          "CDN و کتابخانه‌ها: لینک‌های به CDN های مختلف (jQuery، Lodash، و غیره)",
          "Analytics: کدهای Google Analytics، Facebook Pixel، یا سایر ابزارهای تحلیل",
        ],
      },
      {
        type: "quote",
        text: "با بررسی کد منبع می‌توانید ببینید که تیم‌های دیگر چطور مشکلات مشابه شما را حل کرده‌اند و از تجربه آن‌ها یاد بگیرید.",
      },
      {
        type: "heading",
        text: "۳. ساختار HTML و Semantic Markup",
      },
      {
        type: "paragraph",
        text: "ساختار HTML یک صفحه می‌تواند اطلاعات زیادی درباره معماری و رویکرد توسعه‌دهندگان به شما بدهد. به این نکات توجه کنید:",
      },
      {
        type: "list",
        items: [
          "استفاده از Semantic HTML: آیا از تگ‌های معنادار مانند `<article>`, `<section>`, `<nav>` استفاده شده است؟",
          "ساختار Navigation: چطور منوی سایت پیاده‌سازی شده است؟",
          "ساختار محتوا: آیا از Grid یا Flexbox استفاده شده است؟",
          "Accessibility: وجود attributes مانند `aria-label`, `role`, و `alt` برای تصاویر",
          "ساختار کامپوننت‌ها: در پروژه‌های React/Vue، می‌توانید ساختار کامپوننت‌ها را ببینید",
        ],
      },
      {
        type: "heading",
        text: "۴. بهینه‌سازی Performance",
      },
      {
        type: "paragraph",
        text: "کد منبع می‌تواند نشان دهد که یک سایت چطور عملکرد خود را بهینه کرده است:",
      },
      {
        type: "list",
        items: [
          'Lazy Loading: وجود `loading="lazy"` در تگ‌های `<img>`',
          'Preconnect/Prefetch: استفاده از `<link rel="preconnect">` برای اتصال زودهنگام به دامنه‌های خارجی',
          "Resource Hints: استفاده از `dns-prefetch`, `prefetch`, یا `preload`",
          "Minification: آیا کدها minify شده‌اند؟ (کدهای فشرده و بدون فاصله)",
          "Inline CSS/JS: آیا CSS یا JavaScript به صورت inline در HTML قرار گرفته است؟",
          "Defer/Async: استفاده از `defer` یا `async` در تگ‌های `<script>`",
        ],
      },
      {
        type: "heading",
        text: "۵. امنیت و Privacy",
      },
      {
        type: "paragraph",
        text: "کد منبع می‌تواند اطلاعاتی درباره رویکرد امنیتی یک سایت به شما بدهد:",
      },
      {
        type: "list",
        items: [
          'Content Security Policy (CSP): وجود تگ `<meta http-equiv="Content-Security-Policy">`',
          "X-Frame-Options: جلوگیری از نمایش صفحه در iframe",
          "API Keys: هرگز API Key های واقعی نباید در کد منبع قابل مشاهده باشند (این یک مشکل امنیتی است)",
          "Tracking Scripts: چه ابزارهای ردیابی استفاده شده است؟",
          "Cookies: وجود تگ‌های مربوط به مدیریت کوکی‌ها",
        ],
      },
      {
        type: "quote",
        text: "همیشه به یاد داشته باشید که هر چیزی که در کد منبع قابل مشاهده است، برای همه قابل دسترسی است. هرگز اطلاعات حساس را در کد منبع قرار ندهید.",
      },
      {
        type: "heading",
        text: "۶. JSON-LD و Structured Data",
      },
      {
        type: "paragraph",
        text: 'بسیاری از سایت‌های مدرن از JSON-LD برای ساختاردهی داده‌ها استفاده می‌کنند. این داده‌ها به موتورهای جستجو کمک می‌کنند تا محتوای صفحه را بهتر درک کنند. به دنبال تگ‌های `<script type="application/ld+json">` باشید که می‌توانند شامل اطلاعاتی درباره مقالات، محصولات، سازمان‌ها و غیره باشند.',
      },
      {
        type: "heading",
        text: "۷. چطور از این اطلاعات استفاده کنیم؟",
      },
      {
        type: "paragraph",
        text: "حالا که می‌دانید چه اطلاعاتی می‌توانید از کد منبع استخراج کنید، بیایید ببینیم چطور می‌توانید از آن‌ها استفاده کنید:",
      },
      {
        type: "list",
        items: [
          "یادگیری: از سایت‌های موفق الهام بگیرید و ببینید چطور مشکلات مشابه را حل کرده‌اند",
          "تحلیل رقبا: ببینید رقبای شما چه تکنولوژی‌هایی استفاده می‌کنند و چطور SEO خود را بهینه کرده‌اند",
          "بهبود پروژه خود: از بهترین practices که در سایت‌های دیگر می‌بینید، در پروژه خود استفاده کنید",
          "Debugging: اگر مشکلی در سایت خود دارید، ببینید سایت‌های مشابه چطور آن را حل کرده‌اند",
          "Research: قبل از انتخاب یک تکنولوژی جدید، ببینید سایت‌های بزرگ چطور از آن استفاده می‌کنند",
        ],
      },
      {
        type: "heading",
        text: "۸. ابزارهای پیشرفته‌تر",
      },
      {
        type: "paragraph",
        text: "اگرچه View Page Source مفید است، اما ابزارهای پیشرفته‌تری هم وجود دارند که اطلاعات بیشتری به شما می‌دهند:",
      },
      {
        type: "list",
        items: [
          "Developer Tools (F12): برای بررسی Network requests، Console errors، و Elements",
          "BuiltWith: ابزار آنلاین برای شناسایی تکنولوژی‌های استفاده شده در یک سایت",
          "Wappalyzer: افزونه مرورگر برای شناسایی تکنولوژی‌ها",
          "PageSpeed Insights: برای تحلیل عملکرد و SEO",
          "Lighthouse: برای بررسی Performance، Accessibility، و Best Practices",
        ],
      },
      {
        type: "paragraph",
        text: "View Page Source یک نقطه شروع عالی است، اما برای تحلیل عمیق‌تر، استفاده از این ابزارها را هم یاد بگیرید.",
      },
      {
        type: "heading",
        text: "نتیجه‌گیری",
      },
      {
        type: "paragraph",
        text: "View Page Source یک ابزار ساده اما قدرتمند است که می‌تواند اطلاعات زیادی درباره ساختار، تکنولوژی‌ها و استراتژی‌های یک وب‌سایت به شما بدهد. با یادگیری چطور این اطلاعات را بخوانید و تحلیل کنید، می‌توانید مهارت‌های خود را بهبود ببخشید و از تجربه دیگران یاد بگیرید. دفعه بعد که به یک سایت جالب برخورد کردید، حتماً کد منبع آن را بررسی کنید و ببینید چه چیزهای جدیدی می‌توانید یاد بگیرید.",
      },
    ],
  },
  {
    slug: "nextjs-seo-practical-guide",
    title: "راهنمای کامل و عملی سئو برای Next.js: از صفر تا صد",
    summary:
      "راهنمای جامع و قدم‌به‌قدم برای بهینه‌سازی سئو در Next.js: از تنظیم DNS و Search Console تا metadata، sitemap، Core Web Vitals و تمام تکنیک‌های پیشرفته. مناسب برای پورتفولیو، وب‌سایت شخصی یا شرکتی.",
    description:
      "راهنمای کامل و کاربردی سئو برای Next.js شامل تنظیمات فنی (DNS، Search Console)، متادیتا، sitemap، robots.txt، JSON-LD، بهینه‌سازی تصاویر و فونت‌ها، Core Web Vitals و تمام مراحل لازم برای بهبود رتبه در موتورهای جستجو.",
    coverImage: "/blog/nextjs-seo-practical-guide.svg",
    tags: [
      "SEO",
      "Next.js",
      "Search Console",
      "Sitemap",
      "Metadata",
      "JSON-LD",
      "Core Web Vitals",
      "Performance",
    ],
    date: "2025-01-22",
    readTime: "۲۰ دقیقه مطالعه",
    keywords: [
      "سئو Next.js",
      "راهنمای سئو",
      "Google Search Console",
      "sitemap Next.js",
      "metadata Next.js",
      "JSON-LD",
      "Core Web Vitals",
    ],
    content: [
      {
        type: "paragraph",
        text: "ساخت یک سایت با Next.js کار ساده‌ای است، اما اگر می‌خواهید در گوگل پیدا شوید و رتبه بهتری بگیرید، باید یکسری کارهای فنی و محتوایی را به‌صورت کامل انجام دهید. Next.js امکانات خوبی برای سئو دارد، اما به‌تنهایی کافی نیست. در این راهنمای جامع، تمام مراحل از تنظیم metadata و Search Console تا بهینه‌سازی Core Web Vitals را قدم به قدم با مثال‌های عملی و مسیر فایل‌ها توضیح داده‌ایم.",
      },
      {
        type: "heading",
        text: "قبل از شروع",
      },
      {
        type: "paragraph",
        text: "این راهنما برای سایت‌های Next.js 13+ با App Router نوشته شده است. اگر از Pages Router استفاده می‌کنید، برخی مراحل متفاوت خواهد بود. تمام مثال‌ها و کدها آماده استفاده هستند و می‌توانید مستقیماً در پروژه خود از آن‌ها استفاده کنید.",
      },
      {
        type: "heading",
        text: "مرحله ۱: تنظیم متادیتا (Metadata) - اولین قدم مهم",
      },
      {
        type: "paragraph",
        text: "متادیتا همان اطلاعاتی است که گوگل و سایر موتورهای جستجو از صفحه شما می‌بینند. در Next.js 13+ (با App Router) می‌توانید از `metadata` برای صفحات استاتیک و `generateMetadata` برای صفحات پویا استفاده کنید.",
      },
      {
        type: "paragraph",
        text: "در App Router، این کار در `app/layout.js` برای صفحه اصلی انجام می‌شود:",
      },
      {
        type: "code",
        text: 'export const metadata = {\n  title: "عنوان سایت شما",\n  description: "توضیح کوتاه درباره سایت یا خدمات.",\n  keywords: ["کلمه کلیدی 1", "کلمه کلیدی 2"],\n  icons: {\n    icon: \'/icon.png\',\n    shortcut: \'/icon.png\',\n    apple: \'/icon.png\',\n  },\n  openGraph: {\n    title: "عنوان در شبکه‌های اجتماعی",\n    description: "توضیح پیش‌نمایش برای اشتراک لینک.",\n    url: "https://your-domain.com",\n    siteName: "نام برند",\n    images: [\n      {\n        url: "https://your-domain.com/opengraph-image.png",\n        width: 1200,\n        height: 630,\n        alt: "توضیح تصویر OG",\n      },\n    ],\n    locale: "fa_IR",\n    type: "website",\n  },\n  twitter: {\n    card: "summary_large_image",\n    title: "عنوان توییتر",\n    description: "توضیحات توییتر",\n    images: ["https://your-domain.com/opengraph-image.png"]\n  },\n  robots: {\n    index: true,\n    follow: true,\n  },\n};',
      },
      {
        type: "paragraph",
        text: "برای صفحات پویا (مثل صفحات بلاگ) از `generateMetadata` استفاده کنید:",
      },
      {
        type: "code",
        text: "export async function generateMetadata({ params }) {\n  const post = getPost(params.slug);\n  return {\n    title: post.title,\n    description: post.description,\n    keywords: post.keywords,\n    openGraph: {\n      title: post.title,\n      description: post.description,\n      images: [post.coverImage],\n    },\n  };\n}",
      },
      {
        type: "heading",
        text: "نکات مهم metadata",
      },
      {
        type: "list",
        items: [
          "عنوان (title): باید کوتاه، واضح و شامل کلمه کلیدی اصلی باشد (حداکثر 60 کاراکتر)",
          "توضیحات (description): یک جمله جذاب که کاربر را ترغیب به کلیک کند (حداکثر 160 کاراکتر)",
          "کلمات کلیدی (keywords): 3-5 کلمه کلیدی مرتبط با محتوا",
          "برای هر صفحه title و description اختصاصی داشته باشید",
          "تصویر OG باید 1200×630 پیکسل و در مسیر `public/` باشد",
          "robots: برای صفحاتی که نمی‌خواهید ایندکس شوند، از `noindex` استفاده کنید",
          "Open Graph و Twitter Cards: برای نمایش بهتر در شبکه‌های اجتماعی ضروری هستند",
        ],
      },
      {
        type: "heading",
        text: "مرحله ۲: ایجاد robots.txt",
      },
      {
        type: "paragraph",
        text: "فایل robots.txt به موتورهای جستجو می‌گوید کدام صفحات را ایندکس کنند و کدام را نه.",
      },
      {
        type: "paragraph",
        text: "در پوشه `public/` فایل `robots.txt` را بسازید:",
      },
      {
        type: "code",
        text: "User-agent: *\nAllow: /\n\nSitemap: https://your-domain.com/sitemap.xml\nHost: https://your-domain.com",
      },
      {
        type: "paragraph",
        text: "پس از دیپلوی، تست کنید: `https://your-domain.com/robots.txt`",
      },
      {
        type: "heading",
        text: "مرحله ۳: ساخت خودکار sitemap با next-sitemap",
      },
      {
        type: "paragraph",
        text: "sitemap به گوگل کمک می‌کند تمام صفحات سایت شما را پیدا کند. با استفاده از `next-sitemap` می‌توانید به صورت خودکار sitemap تولید کنید.",
      },
      {
        type: "list",
        items: [
          "نصب: `npm install next-sitemap`",
          "ساخت فایل پیکربندی `next-sitemap.config.js` در ریشه پروژه",
          "افزودن اسکریپت در `package.json`",
          "اجرای build",
        ],
      },
      {
        type: "paragraph",
        text: "فایل پیکربندی `next-sitemap.config.js`:",
      },
      {
        type: "code",
        text: "module.exports = {\n  siteUrl: 'https://your-domain.com',\n  generateRobotsTxt: true,\n  outDir: 'public',\n  changefreq: 'weekly',\n  priority: 0.7,\n};",
      },
      {
        type: "paragraph",
        text: "افزودن اسکریپت در `package.json`:",
      },
      {
        type: "code",
        text: '"scripts": {\n  "build": "next build",\n  "postbuild": "next-sitemap"\n}',
      },
      {
        type: "paragraph",
        text: "فایل‌های `sitemap.xml` و `robots.txt` به‌صورت خودکار در `public/` ایجاد می‌شوند. پس از دیپلوی، آدرس sitemap را تست کنید: `https://your-domain.com/sitemap.xml`",
      },
      {
        type: "heading",
        text: "مرحله ۴: ثبت سایت در Google Search Console",
      },
      {
        type: "paragraph",
        text: "بعد از ساخت sitemap و robots.txt، باید سایت را در Google Search Console ثبت کنید. این ابزار اصلی برای مدیریت و مانیتورینگ سایت در گوگل است.",
      },
      {
        type: "list",
        items: [
          "اضافه‌کردن یک Property از نوع Domain",
          "دریافت رکورد TXT از گوگل مثل: `google-site-verification=XXXX`",
          "ثبت این TXT در DNS دامنه",
          "تایید در Search Console",
          "ارسال sitemap در بخش Sitemaps",
        ],
      },
      {
        type: "paragraph",
        text: "بعد از تایید می‌توانید وضعیت ایندکس صفحات را بررسی کنید و برای صفحات مهم Request Indexing بزنید.",
      },
      {
        type: "heading",
        text: "مرحله ۵: بهینه‌سازی تصاویر - تأثیر مستقیم روی سرعت",
      },
      {
        type: "paragraph",
        text: "تصاویر بزرگ یکی از اصلی‌ترین دلایل کند شدن سایت هستند. Next.js با کامپوننت `Image` این مشکل را حل کرده است.",
      },
      {
        type: "list",
        items: [
          "همیشه از `next/image` استفاده کنید (نه تگ `<img>` معمولی)",
          "فرمت WebP: Next.js به صورت خودکار تصاویر را به WebP تبدیل می‌کند (حجم کمتر)",
          "Lazy Loading: تصاویر فقط وقتی بارگذاری می‌شوند که کاربر به آن‌ها نزدیک شود",
          "اندازه مناسب: تصاویر را قبل از آپلود به اندازه مناسب برش دهید",
          "Alt Text: همیشه متن جایگزین برای تصاویر بنویسید (برای SEO و دسترسی‌پذیری)",
        ],
      },
      {
        type: "paragraph",
        text: "مثال:",
      },
      {
        type: "code",
        text: '<Image\n  src="/blog-image.jpg"\n  alt="توضیحات تصویر"\n  width={1200}\n  height={630}\n  priority={true} // برای تصویر اصلی صفحه\n/>',
      },
      {
        type: "heading",
        text: "مرحله ۶: ساختار URL - ساده و خوانا",
      },
      {
        type: "paragraph",
        text: "URL های ساده و واضح هم برای کاربران و هم برای گوگل بهتر است.",
      },
      {
        type: "list",
        items: [
          "از کلمات فارسی یا انگلیسی واضح استفاده کنید",
          "از کاراکترهای خاص و اعداد پیچیده پرهیز کنید",
          "URL را کوتاه نگه دارید",
          "از خط تیره (-) برای جدا کردن کلمات استفاده کنید",
        ],
      },
      {
        type: "paragraph",
        text: "مثال خوب: `/blog/آموزش-nextjs`",
      },
      {
        type: "paragraph",
        text: "مثال بد: `/blog/post?id=123&cat=tech`",
      },
      {
        type: "heading",
        text: "مرحله ۷: اضافه‌کردن JSON-LD (Schema.org)",
      },
      {
        type: "paragraph",
        text: "این کار باعث می‌شود گوگل بهتر ماهیت سایت را بفهمد. مثال برای یک پروفایل شخصی:",
      },
      {
        type: "code",
        text: '<script\n  type="application/ld+json"\n  dangerouslySetInnerHTML={{\n    __html: JSON.stringify({\n      "@context": "https://schema.org",\n      "@type": "Person",\n      "name": "Your Name",\n      "alternateName": "Your English Name",\n      "url": "https://your-domain.com",\n      "image": "https://your-domain.com/icon.png",\n      "jobTitle": "عنوان شغلی",\n      "description": "توضیح مختصر.",\n      "sameAs": [\n        "https://linkedin.com/your-profile",\n        "https://github.com/your-profile"\n      ]\n    })\n  }}\n/>',
      },
      {
        type: "paragraph",
        text: "محل قرارگیری: داخل `<head>` در فایل `app/layout.js`.",
      },
      {
        type: "heading",
        text: "مرحله ۸: اضافه‌کردن favicon / icon",
      },
      {
        type: "paragraph",
        text: "favicon و icon ها برای شناسایی بهتر سایت در تب مرورگر و بوکمارک‌ها مهم هستند.",
      },
      {
        type: "list",
        items: [
          "فایل `icon.png` (512×512 پیکسل) را در پوشه `public/` بگذارید",
          "در metadata آن را معرفی کنید (همانطور که در مرحله ۱ دیدیم)",
          "مطمئن شوید آدرس آن در JSON-LD نیز استفاده شده باشد",
        ],
      },
      {
        type: "heading",
        text: "مرحله ۹: بهینه‌سازی فونت‌ها",
      },
      {
        type: "paragraph",
        text: "فونت‌های بزرگ می‌توانند سرعت سایت را کند کنند. در Next.js از `next/font` استفاده کنید:",
      },
      {
        type: "list",
        items: [
          "فونت‌ها به صورت خودکار بهینه می‌شوند",
          "از فونت‌های سیستم استفاده کنید (سریع‌تر)",
          "اگر از فونت سفارشی استفاده می‌کنید، از `display: swap` استفاده کنید",
        ],
      },
      {
        type: "heading",
        text: "مرحله ۱۰: بهینه‌سازی JavaScript",
      },
      {
        type: "list",
        items: [
          "از Dynamic Import استفاده کنید برای کامپوننت‌های بزرگ",
          "کدهای غیرضروری را حذف کنید (Tree Shaking)",
          "از Code Splitting استفاده کنید",
        ],
      },
      {
        type: "paragraph",
        text: "مثال Dynamic Import:",
      },
      {
        type: "code",
        text: "const HeavyComponent = dynamic(() => import('./HeavyComponent'), {\n  loading: () => <p>در حال بارگذاری...</p>\n})",
      },
      {
        type: "heading",
        text: "مرحله ۱۱: Core Web Vitals - معیارهای عملکرد",
      },
      {
        type: "paragraph",
        text: "گوگل از سه معیار اصلی برای سنجش کیفیت سایت استفاده می‌کند. این معیارها تأثیر مستقیمی روی رتبه سایت شما دارند:",
      },
      {
        type: "list",
        items: [
          "LCP (Largest Contentful Paint): زمان بارگذاری محتوای اصلی صفحه (باید کمتر از 2.5 ثانیه باشد)",
          "FID (First Input Delay): زمان پاسخ به اولین کلیک کاربر (باید کمتر از 100 میلی‌ثانیه باشد)",
          "CLS (Cumulative Layout Shift): میزان جابجایی عناصر صفحه (باید کمتر از 0.1 باشد)",
        ],
      },
      {
        type: "paragraph",
        text: "چطور بهبود دهیم:",
      },
      {
        type: "list",
        items: [
          "LCP: تصویر اصلی را با `priority` بارگذاری کنید، از فونت‌های بهینه استفاده کنید، از CDN استفاده کنید",
          "FID: JavaScript را بهینه کنید، از Code Splitting استفاده کنید، از Dynamic Import برای کامپوننت‌های بزرگ استفاده کنید",
          "CLS: برای تصاویر و ویدیوها width و height مشخص کنید، از فونت‌های بهینه استفاده کنید، از CSS برای رزرو فضا استفاده کنید",
        ],
      },
      {
        type: "heading",
        text: "مرحله ۱۲: صفحات و محتوای بهینه‌شده",
      },
      {
        type: "list",
        items: [
          "هر صفحه یک H1 مشخص داشته باشد",
          "توضیحات هر صفحه حداقل ۳۰۰–۸۰۰ کلمه باشد",
          "کلیدواژه‌های مرتبط را طبیعی در متن استفاده کنید (فارسی و انگلیسی)",
          "تصاویر با `next/image` و دارای alt باشند",
        ],
      },
      {
        type: "heading",
        text: "مرحله ۱۳: لینک‌سازی و حضور در شبکه‌های اجتماعی",
      },
      {
        type: "list",
        items: [
          "لینک سایت را در پروفایل‌های اجتماعی و رزومه قرار دهید",
          "یک پست معرفی سایت در شبکه‌های اجتماعی منتشر کنید",
          "اگر بلاگ دارید، لینک‌سازی داخلی و خارجی ایجاد کنید",
        ],
      },
      {
        type: "heading",
        text: "مرحله ۱۴: تست و مانیتورینگ",
      },
      {
        type: "paragraph",
        text: "بعد از انجام تمام مراحل، باید سایت را تست کنید:",
      },
      {
        type: "list",
        items: [
          "Google Search Console → URL Inspection: برای بررسی ایندکس شدن صفحات و Request Indexing برای صفحات مهم",
          "Google PageSpeed Insights: برای بررسی سرعت و Core Web Vitals (https://pagespeed.web.dev/)",
          "Lighthouse: ابزار Chrome DevTools (F12 → Lighthouse) برای بررسی کامل SEO، Performance، Accessibility و Best Practices",
          "Rich Results Test: بررسی صحت JSON-LD (https://search.google.com/test/rich-results)",
          "Facebook Sharing Debugger: بررسی و رفرش کردن OG image (https://developers.facebook.com/tools/debug/)",
          "Twitter Card Validator: بررسی کارت اشتراک لینک (https://cards-dev.twitter.com/validator)",
          "Mobile-Friendly Test: برای اطمینان از سازگاری با موبایل (https://search.google.com/test/mobile-friendly)",
        ],
      },
      {
        type: "heading",
        text: "چک‌لیست نهایی",
      },
      {
        type: "list",
        items: [
          "✅ سایت در Search Console ثبت و تایید شده",
          "✅ sitemap.xml تولید و در Search Console ارسال شده",
          "✅ robots.txt درست کار می‌کند",
          "✅ metadata کامل برای تمام صفحات تنظیم شده",
          "✅ OG image با اندازه 1200×630 پیکسل آماده شده",
          "✅ JSON-LD برای صفحات مهم اضافه شده",
          "✅ favicon در public/icon.png قرار دارد",
          "✅ صفحات دارای H1 و محتوای کافی (حداقل 300 کلمه)",
          "✅ تصاویر با next/image و alt text بهینه شده‌اند",
          "✅ فونت‌ها با next/font بهینه شده‌اند",
          "✅ Core Web Vitals در حد قابل قبول است",
          "✅ PageSpeed Insights بدون هشدارهای مهم است",
          "✅ لینک‌سازی خارجی انجام شده",
        ],
      },
      {
        type: "heading",
        text: "نتیجه‌گیری",
      },
      {
        type: "paragraph",
        text: "بهینه‌سازی سئو یک فرایند مداوم است. با انجام این مراحل، پایه محکمی برای سئوی سایت خود ایجاد می‌کنید. یادتان باشد که گوگل چند هفته تا چند ماه زمان می‌برد تا تغییرات را ببیند و ایندکس کند، پس صبور باشید و به طور منظم وضعیت سایت را در Search Console بررسی کنید.",
      },
      {
        type: "quote",
        text: "نکته مهم: سئو یک فرایند بلندمدت است. با رعایت این نکات و تولید محتوای باکیفیت، به مرور زمان رتبه سایت شما بهبود خواهد یافت.",
      },
    ],
  },
];
