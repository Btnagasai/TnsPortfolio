function Footer() {
  return (
    <footer className="bg-[var(--bg)] text-[var(--text)] border-t border-[var(--border)]">

      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* LEFT */}
          <div className="text-center md:text-left">

            <h2 className="text-lg font-bold text-[var(--text-h)]">
              Tulasi Naga Sai
            </h2>

            <p className="text-xs font-medium text-[var(--accent)] mt-1">
              Frontend Developer | React Developer
            </p>

            <p className="text-[11px] mt-2 max-w-xs text-[var(--text)] opacity-70">
              Building modern, responsive and user-friendly web applications using React.js.
            </p>

          </div>

          {/* LINKS */}
          <div className="flex flex-wrap gap-5 text-sm">

            <a href="#home" className="hover:text-[var(--accent)]">Home</a>
            <a href="#about" className="hover:text-[var(--accent)]">About</a>
            <a href="#skills" className="hover:text-[var(--accent)]">Skills</a>
            <a href="#projects" className="hover:text-[var(--accent)]">Projects</a>
            <a href="#contact" className="hover:text-[var(--accent)]">Contact</a>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-8 text-center text-xs border-t border-[var(--border)] pt-4 text-[var(--text)] opacity-70">
          © 2026 Tulasi Naga Sai. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

export default Footer;