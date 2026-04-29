import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Zerodha Clone",
    desc: "Zerodha clone with trading dashboard, portfolio UI, and authentication.",
image:"/Zerodha.png",
    github: "https://github.com/Rituraj2018/zerodha-clone",
    live: "https://your-live-link.com",
  },
  {
    title: "Ecommerce Website under Construction",
    desc: "Modern UI design inspired by UltraEdit website.",
    image: "/Raj.jpeg",
    github: "https://github.com/yourusername/ultraedit-ui",
    live: "https://your-live-link.com",
  },
  {
    title: "Portfolio Website",
   desc: "A fully responsive portfolio website developed with React, Tailwind CSS, and animations, showcasing projects, certifications, and contact details.",
    image: "/Portfolio.png",
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-live-link.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#020617] text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-gray-700 rounded-xl p-6 
                       hover:scale-105 hover:border-purple-500 transition duration-300"
          >
            {/*image*/}
 <img
    src={project.image}
    alt={project.title}
    className="w-full h-40 object-cover rounded-lg mb-4"
  />

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm mb-4">
              {project.desc}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              
              {/* Live Demo */}
              <a
                href={project.live}
                target="_blank"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-lg text-sm hover:opacity-90 transition"
              >
                <FaExternalLinkAlt /> Live
              </a>

              {/* GitHub */}
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 border border-gray-600 px-4 py-2 rounded-lg text-sm hover:bg-white hover:text-black transition"
              >
                <FaGithub /> Code
              </a>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}