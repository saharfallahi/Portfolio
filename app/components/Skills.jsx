"use client";

import useI18n from "../hooks/useI18n";
import useReveal from "../hooks/useReveal";

const skills = [
  {
    name: "HTML5",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        width={30}
        alt="html5 logo"
      />
    ),
  },
  {
    name: "CSS3",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        width={30}
        alt="css logo"
      />
    ),
  },
  {
    name: "JavaScript (ES6+)",
    icon: (
      <img
        src="https://skillicons.dev/icons?i=js"
        width={30}
        alt="javascript logo"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <img
        src="https://skillicons.dev/icons?i=tailwind"
        width={30}
        alt="tailwindcss logo"
      />
    ),
  },
  {
    name: "React",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        width={30}
        alt="react logo"
      />
    ),
  },
  {
    name: "Redux",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
        width={30}
        alt="redux logo"
      />
    ),
  },
  {
    name: "Next.js",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        width={30}
        alt="nextjs logo"
      />
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <img
        src="https://skillicons.dev/icons?i=mongodb"
        width={30}
        alt="mongodb logo"
      />
    ),
  },

  {
    name: "Postman",
    icon: (
      <img
        src="https://skillicons.dev/icons?i=postman"
        width={30}
        alt="postman logo"
      />
    ),
  },
  {
    name: "VS Code",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        width={30}
        alt="vscode logo"
      />
    ),
  },

  {
    name: "Vite",
    icon: (
      <img
        src="https://skillicons.dev/icons?i=vite"
        width={30}
        alt="vite logo"
      />
    ),
  },
  {
    name: "Photoshop",
    icon: (
      <img
        src="https://skillicons.dev/icons?i=ps"
        width={30}
        alt="adobephotoshop logo"
      />
    ),
  },
  {
    name: "Figma",
    icon: (
      <img
        src="https://skillicons.dev/icons?i=figma"
        width={30}
        alt="figma logo"
      />
    ),
  },

  {
    name: "Vercel",
    icon: (
      <img
        src="https://skillicons.dev/icons?i=vercel"
        width={30}
        alt="vercel logo"
      />
    ),
  },
  {
    name: "Wordpress",
    icon: (
      <img
        src="https://skillicons.dev/icons?i=wordpress"
        width={30}
        alt="wordpress logo"
      />
    ),
  },
  {
    name: "Git",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        width={30}
        alt="git logo"
      />
    ),
  },
  {
    name: "Github",
    icon: (
      <img
        src="https://skillicons.dev/icons?i=github"
        width={30}
        alt="github logo"
      />
    ),
  },
  {
    name:"JSONServer",
    icon:""
  },
  {
    name: "REST API",
    icon: "",
  },
  {
    name: "React Query",
    icon: "",
  },
  {
    name: "React Hook Form",
    icon: "",
  },
  {
    name: "React Router",
    icon: "",
  },
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
          className="flex flex-wrap p-0 list-none  justify-center gap-3 max-w-4xl mx-auto"
          data-reveal
          data-reveal-delay="80"
        >
          {skills.map((skill) => (
            <li
              key={skill.name}
              className="flex flex-row gap-2 items-center rounded-full bg-[var(--bg-icon)]  border border-[var(--border-icon)]  shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2  px-4 py-2 text-sm font-medium  hover:bg-[var(--primary-1)] hover:text-[var(--surface)] transition-all duration-300 ease-in-out "
            >
              <span>{skill.icon}</span>
              <span>{skill.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
