import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 relative overflow-hidden bg-[var(--bg)] text-[var(--text)]"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-5 md:left-10 w-40 md:w-72 h-40 md:h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-5 md:right-10 w-40 md:w-72 h-40 md:h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">

        {/* Section Title */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-h)]">
            Contact Me
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm md:text-base">
            Let's connect and build something amazing together.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {/* Contact Information */}
          <div
            className="
            p-6 md:p-8 rounded-2xl
            bg-[var(--card)]
            border border-[var(--border)]
            shadow-[var(--shadow)]
            backdrop-blur-xl
            hover:-translate-y-2
            transition duration-300
          "
          >
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-[var(--text-h)]">
              Contact Information
            </h3>

            <div className="space-y-5 text-sm md:text-base">

              {/* Email */}
              <a
                href="mailto:btnagasai@gmail.com"
                className="flex items-center gap-4 hover:text-cyan-500 transition"
              >
                <FaEnvelope className="text-cyan-500 text-lg" />
                btnagasai@gmail.com
              </a>

              {/* Phone */}
              <a
                href="tel:+916303640929"
                className="flex items-center gap-4 hover:text-cyan-500 transition"
              >
                <FaPhone className="text-cyan-500 text-lg" />
                Get In Touch
              </a>

              {/* Location */}
              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-500 text-lg" />
                Tanuku, Andhra Pradesh
              </div>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tulasi-naga-sai-b-90675a271/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-cyan-500 transition"
              >
                <FaLinkedin className="text-cyan-500 text-lg" />
                Tulasi Naga Sai
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Btnagasai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 hover:text-cyan-500 transition"
              >
                <FaGithub className="text-cyan-500 text-lg" />
                Btnagasai
              </a>

            </div>
          </div>

          {/* Career Status */}
          <div
            className="
            p-6 md:p-8 rounded-2xl
            bg-[var(--card)]
            border border-[var(--border)]
            shadow-[var(--shadow)]
            backdrop-blur-xl
            hover:-translate-y-2
            transition duration-300
          "
          >
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-[var(--text-h)]">
              Career Status
            </h3>

            <ul className="space-y-4 text-sm md:text-base">

              <li>✔ Frontend Developer (React.js)</li>
              <li>✔ 2+ Years Professional Experience</li>
              <li>✔ MCA Graduate</li>
              <li>✔ Open to Full-Time Opportunities</li>
              <li>✔ Immediate Joining Available</li>
              <li>✔ React.js, JavaScript, WordPress</li>

            </ul>

            <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
              <p className="text-sm text-cyan-500 font-medium">
                Currently seeking Frontend Developer opportunities.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;