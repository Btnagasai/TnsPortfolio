function Experience() {
  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden bg-[var(--bg)] text-[var(--text)]"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[var(--text-h)]">
          Experience
        </h2>

        <p className="text-center text-[var(--text)] opacity-70 mt-3 mb-12">
          My professional journey as a Frontend Developer
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Left Card */}
          <div
            className="
            bg-[var(--card)]
            border border-[var(--border)]
            shadow-[var(--shadow)]
            p-6 rounded-2xl
            hover:-translate-y-2 transition duration-300
          "
          >
            <h3 className="text-2xl font-bold text-[var(--text-h)]">
              Frontend Developer
            </h3>

            <p className="text-cyan-500 font-semibold mt-2">
              Aryadit Solutions
            </p>

            <p className="text-[var(--text)] opacity-70 mt-2">
              2023 - Present
            </p>

            <div
              className="mt-4 inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full
              bg-cyan-500/10 text-cyan-500"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
              Vijayawada • On-site
            </div>

            <div className="mt-6 text-sm text-[var(--text)] opacity-70">
              Full-Time Employee
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-cyan-500 mb-2">
                Tech Stack
              </h4>

              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Bootstrap",
                  "WordPress",
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div
            className="
            md:col-span-2
            bg-[var(--card)]
            border border-[var(--border)]
            shadow-[var(--shadow)]
            p-6 rounded-2xl
            hover:-translate-y-2 transition duration-300
          "
          >
            <h4 className="text-xl font-semibold text-[var(--text-h)] mb-5">
              Key Responsibilities
            </h4>

            <ul className="space-y-4 text-[var(--text)]">

              {[
                "Developed responsive and user-friendly websites using React.js, JavaScript, HTML and CSS.",
                "Built and maintained WordPress websites using Elementor and custom page designs.",
                "Integrated REST APIs and dynamic functionalities into web applications.",
                "Optimized website performance, responsiveness and user experience.",
                "Worked on educational, real estate, restaurant and corporate business websites.",
                "Collaborated with designers and backend developers to deliver high-quality solutions.",
                "Resolved bugs and improved application functionality through continuous maintenance.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3">
                  <span className="text-cyan-500 mt-1">●</span>
                  <span>{item}</span>
                </li>
              ))}

            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Experience;