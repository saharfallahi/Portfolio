"use client";

import useI18n from "../hooks/useI18n";
import useReveal from "../hooks/useReveal";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "Tailwind CSS",
  "React",
  "Next.js",
  "MongoDB",
  "REST API",
  "Postman",
  "React Query",
  "Redux",
  "React Hook Form",
  "React Router",
  "Photoshop",
  "Figma",
  "Github",
  "Git",
];

function Skills() {
  const { t } = useI18n();
  useReveal();

  return (
    <section id="skills" className="section">
      <div className="container-std">
        <h2 className="section-title" data-reveal>
          {t("skills.title")}
        </h2>
        <ul
          className="flex flex-wrap gap-2 p-0 list-none"
          data-reveal
          data-reveal-delay="80"
        >
          {skills.map((s) => (
            <li
              key={s}
              className=" rounded-full bg-[color-mix(in_oklab,var(--text),transparent_92%)] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  px-4 py-2 text-sm font-medium  hover:bg-[var(--primary-2)] hover:text-[var(--surface)] transition-all duration-300 ease-in-out "
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
