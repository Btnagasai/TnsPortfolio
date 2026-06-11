import { useState } from "react";

import collegeWebsite from "../assets/projects/college_website.png";
import realEstateWebsite from "../assets/projects/realEstate_website.png";
import coachingWebsite from "../assets/projects/Coaching_Website.png";
import restaurantWebsite from "../assets/projects/Restaurant_website.png";
import portfolioWebsite from "../assets/projects/Portfolio_website.png";
import exportsWebsite from "../assets/projects/Exports_website.png";
import consultingWebsite from "../assets/projects/consulting_website.png";

function Projects() {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      title: "College Website",
      description:
        "Educational institution website with admissions, departments and notices management.",
      tech: "WordPress",
      builder: "Elementor",
      image: collegeWebsite,
      category: "WordPress",
      link: "https://rvrrced.ac.in/",
    },
    {
      title: "Real Estate Website",
      description:
        "Modern property listing platform with property details and enquiry forms.",
      tech: "WordPress",
      builder: "Elementor",
      image: realEstateWebsite,
      category: "WordPress",
      link: "https://www.vibrantdevelopers.com/",
    },
    {
      title: "Coaching Website",
      description:
        "Training institute website featuring courses, admissions and student resources.",
      tech: "WordPress",
      builder: "Elementor",
      image: coachingWebsite,
      category: "WordPress",
      link: "https://www.premieredu.in/",
    },
    {
      title: "Restaurant Website",
      description:
        "Restaurant website with menu showcase, reservations and contact forms.",
      tech: "WordPress",
      builder: "Elementor",
      image: restaurantWebsite,
      category: "WordPress",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio developed using React.js showcasing skills and projects.",
      tech: "React",
      builder: "Tailwind CSS",
      image: portfolioWebsite,
      category: "React",
      link: "#",
    },
    {
      title: "Exports Website",
      description:
        "Business exports website highlighting products, services and global trade solutions.",
      tech: "WordPress",
      builder: "Elementor",
      image: exportsWebsite,
      category: "WordPress",
      link: "https://greenpackexports.com/",
    },
    {
      title: "Consulting Website",
      description:
        "Professional consulting website featuring services, expertise and client solutions.",
      tech: "WordPress",
      builder: "Elementor",
      image: consultingWebsite,
      category: "WordPress",
      link: "#",
    },
  ];

  const tabs = ["All", "React", "WordPress"];

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="relative py-20 overflow-hidden bg-[var(--bg)] text-[var(--text)]"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[var(--text-h)]">
          My Projects
        </h2>

        <p className="text-center mt-3 text-[var(--text)] opacity-70">
          Selected work showcase
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full border transition ${
                activeTab === tab
                  ? "bg-cyan-500 text-black border-cyan-500"
                  : "border-[var(--border)] text-[var(--text)] hover:border-cyan-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((project, index) => (
            <div
              key={index}
              className="
              group
              rounded-2xl
              overflow-hidden
              bg-[var(--card)]
              border border-[var(--border)]
              shadow-lg
              hover:-translate-y-2
              hover:shadow-2xl
              transition-all duration-300
              "
            >
              {/* Project Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                  w-full
                  h-56
                  object-cover
                  object-top
                  group-hover:scale-105
                  transition-transform
                  duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="p-5">

                <h3 className="text-xl font-semibold text-[var(--text-h)]">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-[var(--text)] opacity-80 min-h-[72px]">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="mt-4 flex gap-2 flex-wrap">

                  <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-500">
                    {project.tech}
                  </span>

                  <span className="px-3 py-1 text-xs rounded-full bg-purple-500/10 text-purple-500">
                    {project.builder}
                  </span>

                </div>

                {/* Live Demo */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-block
                  mt-5
                  px-5
                  py-2.5
                  rounded-lg
                  bg-cyan-500
                  text-black
                  font-medium
                  hover:opacity-90
                  transition
                  "
                >
                  Live Demo
                </a>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;