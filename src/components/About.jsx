function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[var(--bg)] text-[var(--text)]"
    >
      {/* background glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-h)]">
            About Me
          </h2>

          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>

          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base">
            Passionate Frontend Developer focused on building modern, responsive and high-performance web applications.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-h)]">
              Frontend Developer
            </h3>

            <p className="text-sm sm:text-base text-[var(--text)] leading-7">
              I am Tulasi Naga Sai, a Frontend Developer with 2 years of experience in React.js, JavaScript, HTML, CSS, Bootstrap, WordPress and Elementor.
            </p>

            <p className="text-sm sm:text-base text-[var(--text)] leading-7">
              I build real-world projects like business websites, college portals, coaching platforms and landing pages with focus on UI/UX and performance.
            </p>

            {/* CTA */}
            <a
              href="#projects"
              className="inline-block px-6 py-3 rounded-full 
              bg-cyan-500 text-black font-medium
              hover:bg-cyan-400 hover:scale-105 transition"
            >
              View Projects
            </a>

          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">

            {[
              { value: "2+", label: "Years Experience" },
              { value: "7+", label: "Projects Completed" },
              { value: "MCA", label: "Education" },
              { value: "Frontend", label: "Role" },
            ].map((item, index) => (
              <div
                key={index}
                className="
                p-6 rounded-xl text-center
                bg-[var(--card)]
                border border-[var(--border)]
                shadow-[var(--shadow)]
                hover:-translate-y-2 transition
                "
              >
                <h4 className="text-2xl font-bold text-cyan-500">
                  {item.value}
                </h4>

                <p className="text-sm text-[var(--text)] mt-2">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;