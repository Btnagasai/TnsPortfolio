import profileImage from "../assets/home_frontendimg.png";
import resumePdf from "../assets/TulasiNS_Resume.pdf";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 relative overflow-hidden
      bg-[var(--bg)] text-[var(--text)] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">

          <p className="text-cyan-500 font-semibold tracking-widest uppercase text-sm sm:text-base">
            Hello, I'm
          </p>

          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-3
            bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500
            text-transparent bg-clip-text"
          >
            Tulasi Naga Sai
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl mt-4 font-medium opacity-80">
            Frontend Developer | React.js Developer
          </h2>

          <p className="mt-6 leading-7 max-w-xl mx-auto md:mx-0 opacity-80">
            I build modern, responsive and high-performance web applications
            using React.js, JavaScript, HTML, CSS, Bootstrap and WordPress.
          </p>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">

            <a
              href="#projects"
              className="px-6 py-3 rounded-full
              bg-gradient-to-r from-purple-500 to-blue-500
              text-white font-semibold shadow-lg
              hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href={resumePdf}
              download
              className="px-6 py-3 rounded-full
              border border-[var(--border)]
              text-[var(--text)]
              hover:border-cyan-400
              transition duration-300"
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center relative">

          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div
            className="relative p-3 sm:p-4 rounded-3xl
            bg-white/10 dark:bg-white/5
            backdrop-blur-lg
            border border-white/20
            shadow-2xl
            hover:scale-105 transition duration-500"
          >
            <img
              src={profileImage}
              alt="Frontend Developer"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96
              object-cover rounded-2xl"
            />
          </div>

        </div>

      </div>
    </section>
  );
}