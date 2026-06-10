import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaWordpress,
  FaGitAlt
} from "react-icons/fa";

import { SiTailwindcss, SiElementor } from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-400 text-4xl" />,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400 text-4xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-500 text-4xl" />,
    },
    {
      name: "WordPress",
      icon: <FaWordpress className="text-blue-600 text-4xl" />,
    },
    {
      name: "Elementor",
      icon: <SiElementor className="text-pink-500 text-4xl" />,
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt className="text-red-500 text-4xl" />,
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-20 px-4 sm:px-6 overflow-hidden scroll-mt-20
      bg-[var(--bg)] text-[var(--text)]"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-h)]">
            My Skills
          </h2>

          <p className="text-sm sm:text-base text-[var(--text)] opacity-70 mt-3">
            Technologies I use to build modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
              group p-5 sm:p-6 rounded-2xl text-center
              bg-[var(--card)]
              border border-[var(--border)]
              shadow-[var(--shadow)]
              backdrop-blur-lg
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all duration-300
              "
            >
              {/* Icon */}
              <div className="flex justify-center mb-3 group-hover:scale-110 transition duration-300">
                {skill.icon}
              </div>

              {/* Name */}
              <p className="font-semibold text-sm sm:text-base text-[var(--text)] group-hover:text-cyan-400 transition">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;