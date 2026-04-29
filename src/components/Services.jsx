import { motion } from "framer-motion";
import { FaCode, FaGithub, FaDatabase } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    desc: "Building modern, fast and scalable UI using React & Tailwind.",
    icon: <FaCode />,
  },
  {
    title: "PostgreSQL Database",
    desc: "Designing and managing relational databases, queries, and optimization.",
    icon: <FaDatabase />,
  },
  {
    title: "Git & GitHub",
    desc: "Version control, collaboration and project management.",
    icon: <FaGithub />,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#020617] text-white py-20 px-6"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center mb-12">
        My Services
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-gray-700 rounded-xl p-6 text-center hover:scale-105 hover:border-blue-500 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Icon */}
            <div className="text-3xl mb-4 text-blue-400">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}