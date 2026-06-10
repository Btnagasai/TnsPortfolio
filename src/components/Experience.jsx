function Experience() {
  return (
    <section
      id="experience"
      className="py-20 relative overflow-hidden bg-[var(--bg)] text-[var(--text)]"
    >
      {/* background glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* TITLE */}
        <h2 className="text-4xl font-bold text-center text-[var(--text-h)]">
          Experience
        </h2>

        <p className="text-center text-[var(--text)] opacity-70 mt-3 mb-12">
          My professional journey as a Frontend Developer
        </p>

        {/* MAIN LAYOUT */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT CARD */}
          <div className="
            bg-[var(--card)]
            border border-[var(--border)]
            shadow-[var(--shadow)]
            backdrop-blur-md
            p-6 rounded-2xl
            hover:-translate-y-2 transition
          ">

            <h3 className="text-2xl font-bold text-[var(--text-h)]">
              Frontend Developer
            </h3>

            <p className="text-cyan-500 font-semibold mt-2">
              Aryadit Solutions
            </p>

            <p className="text-[var(--text)] opacity-70 mt-2">
              2023 - Present
            </p>

            {/* STATUS BADGE */}
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full
              bg-cyan-500/10 text-cyan-500">

              <span className="w-2 h-2 rounded-full bg-cyan-500"></span>

              Vijayawada Office • On-site Work

            </div>

            <div className="mt-6 text-sm text-[var(--text)] opacity-70">
              Daily Office Attendance • Full Time Role
            </div>

          </div>

          {/* RIGHT CARD */}
          <div className="
            md:col-span-2
            bg-[var(--card)]
            border border-[var(--border)]
            shadow-[var(--shadow)]
            backdrop-blur-md
            p-6 rounded-2xl
            hover:-translate-y-2 transition
          ">

            <h4 className="text-xl font-semibold text-[var(--text-h)] mb-5">
              Responsibilities
            </h4>

            <ul className="space-y-4 text-[var(--text)]">

              {[
                "Developed responsive websites using React.js, JavaScript, HTML, CSS",
                "Built WordPress websites using Elementor and custom styling",
                "Integrated REST APIs and dynamic features in web applications",
                "Improved UI/UX design and performance optimization",
                "Worked on real estate, education, restaurant and business websites",
                "Collaborated with designers and backend developers for delivery",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-cyan-500">●</span>
                  {item}
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