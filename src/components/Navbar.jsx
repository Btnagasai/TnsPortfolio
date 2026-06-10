import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];

  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50
      bg-white/80 dark:bg-[#0b1220]/80
      backdrop-blur-xl
      border-b border-gray-200 dark:border-gray-800
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#home"
          className="
          text-xl sm:text-2xl font-extrabold tracking-widest
          bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500
          text-transparent bg-clip-text
          "
        >
          TNS
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium text-[var(--text-h)]">

          <li>
            <a href="#home" className="hover:text-cyan-500 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-500 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-500 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-cyan-500 transition">
              Experience
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-500 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl text-[var(--text-h)]"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="
          md:hidden
          bg-[var(--card)]
          border-t border-[var(--border)]
          px-6 py-4
          "
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setMenuOpen(false)}
              className="
              block py-3 capitalize
              text-[var(--text)]
              hover:text-cyan-500
              transition
              "
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}