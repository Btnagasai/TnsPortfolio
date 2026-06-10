import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden
      bg-[var(--bg)] text-[var(--text)]"
    >

      {/* PREMIUM BACKGROUND GLOW */}
      <div className="absolute top-10 left-5 md:left-10 w-40 md:w-72 h-40 md:h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-5 md:right-10 w-40 md:w-72 h-40 md:h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">

        {/* TITLE */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-h)]">
            Contact Me
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm md:text-base">
            One click to reach me directly
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {/* LEFT CARD */}
          <div className="
            p-6 md:p-8 rounded-2xl
            bg-[var(--card)]
            border border-[var(--border)]
            shadow-[var(--shadow)]
            backdrop-blur-xl
            hover:-translate-y-2 transition
          ">

            <h3 className="text-lg md:text-xl font-semibold mb-6 text-[var(--text-h)]">
              Contact Information
            </h3>

            <div className="space-y-5 text-sm md:text-base">

              <a href="mailto:your-email@gmail.com"
                className="flex items-center gap-3 md:gap-4 hover:text-cyan-500 transition">
                <FaEnvelope className="text-cyan-500" />
                btnagasai@gmail.com
              </a>

              <a href="tel:+91XXXXXXXXXX"
                className="flex items-center gap-3 md:gap-4 hover:text-cyan-500 transition">
                <FaPhone className="text-cyan-500" />
                +91 6303640929
              </a>

              <a href="https://www.linkedin.com/in/tulasi-naga-sai-b-90675a271/"
                target="_blank"
                className="flex items-center gap-3 md:gap-4 hover:text-cyan-500 transition">
                <FaLinkedin className="text-cyan-500" />
                LinkedIn Profile
              </a>

              <a href="https://github.com/Btnagasai"
                target="_blank"
                className="flex items-center gap-3 md:gap-4 hover:text-cyan-500 transition">
                <FaGithub className="text-cyan-500" />
                GitHub Profile
              </a>

            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="
            p-6 md:p-8 rounded-2xl
            bg-[var(--card)]
            border border-[var(--border)]
            shadow-[var(--shadow)]
            backdrop-blur-xl
            hover:-translate-y-2 transition
          ">

            <h3 className="text-lg md:text-xl font-semibold mb-6 text-[var(--text-h)]">
              Career Status
            </h3>

            <ul className="space-y-4 text-sm md:text-base text-[var(--text)]">

              <li>✔ Frontend Developer (React.js)</li>
              <li>✔ 2 Years Experience</li>
              <li>✔ Vijayawada, Andhra Pradesh</li>
              <li>✔ Open to Full-Time Roles</li>
              <li>✔ On-site Preferred</li>

            </ul>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;