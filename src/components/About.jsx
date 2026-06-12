function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[var(--bg)] text-[var(--text)]"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[320px] h-[320px] bg-cyan-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Title */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-h)]">
            About Me
          </h2>

          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-3 rounded-full"></div>

          <p className="text-gray-500 dark:text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base">
            Passionate Frontend Developer focused on building modern,
            responsive and high-performance web applications.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left */}
          <div>

            <h3 className="text-2xl sm:text-3xl font-semibold mb-6">
              Frontend Developer | React.js Developer
            </h3>

            <p className="text-[var(--text)] leading-8 mb-5">
              I am Tulasi Naga Sai, a Frontend Developer with 2 years of
              professional experience in developing responsive websites and web
              applications using React.js, JavaScript, HTML, CSS, Bootstrap,
              WordPress and Elementor.
            </p>

            <p className="text-[var(--text)] leading-8 mb-8">
              I have successfully delivered multiple projects including college
              websites, real estate platforms, coaching institute portals,
              restaurant websites and corporate business websites. My focus is
              on creating user-friendly, visually appealing and
              performance-optimized digital experiences.
            </p>

            <a
              href="#projects"
              className="inline-block px-6 py-3 rounded-full
              bg-cyan-500 text-black font-semibold
              hover:bg-cyan-400 hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-2 gap-5">

            <div
              className="p-6 rounded-xl text-center
              bg-[var(--card)]
              border border-[var(--border)]
              shadow-[var(--shadow)]"
            >
              <h4 className="text-3xl font-bold text-cyan-500">2+</h4>
              <p className="mt-2 text-sm">Years Experience</p>
            </div>

            <div
              className="p-6 rounded-xl text-center
              bg-[var(--card)]
              border border-[var(--border)]
              shadow-[var(--shadow)]"
            >
              <h4 className="text-3xl font-bold text-cyan-500">7+</h4>
              <p className="mt-2 text-sm">Projects Completed</p>
            </div>

            <div
              className="p-6 rounded-xl text-center
              bg-[var(--card)]
              border border-[var(--border)]
              shadow-[var(--shadow)]"
            >
              <h4 className="text-3xl font-bold text-cyan-500">MCA</h4>
              <p className="mt-2 text-sm">Education</p>
            </div>

            <div
              className="p-6 rounded-xl text-center
              bg-[var(--card)]
              border border-[var(--border)]
              shadow-[var(--shadow)]"
            >
              <h4 className="text-3xl font-bold text-cyan-500">React.js</h4>
              <p className="mt-2 text-sm">Specialization</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default About;