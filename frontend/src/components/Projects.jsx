import React from "react";

const projects = [
  { title: "IPRO Project", description: "Ethics analysis tool", link: "#" },
  { title: "Portfolio Website", description: "Showcase my work", link: "#" },
  { title: "MIPS Simulator", description: "Instruction profiler & caches", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition transform"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-400 hover:text-blue-300 transition"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
