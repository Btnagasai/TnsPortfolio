import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b1220] text-gray-900 dark:text-white transition-all duration-300">

      {/* THEME BUTTON (FIXED FLOAT BUTTON) */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed bottom-5 right-5 z-[999]
        px-5 py-3 rounded-full bg-cyan-500 text-black font-semibold shadow-xl"
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>

      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Skills/>
      <Contact/>

    </div>
  );
}

export default App;