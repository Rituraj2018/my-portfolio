import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#020617] text-white py-16 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        {/* Intro */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m <span className="text-blue-400 font-semibold">Rituraj Singh</span>,  
         A motivated and dedicated Computer Science & Engineering student seeking opportunities to apply my technical
knowledge, problem-solving skills, and passion for technology in a growth-oriented organization while continuously
learning and improving my skills.
        </motion.p>

        {/* Skills */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold mb-4">
            Skills
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "java",
              "Python(basic)",
              "HTML",
              "CSS",
              "JavaScript",
              "sql",
              "PostgreSQL",
              "Git",
            ].map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-white/10 border border-gray-700 rounded-full text-sm hover:bg-blue-500 transition"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Learning */}
        <motion.div
          className="mt-10 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold mb-2">
            Currently Learning
          </h3>
          <p>
            I am currently improving my skills in Advanced React, APIs,
            and Backend Development (Node.js).
          </p>
        </motion.div>

        {/* Interests */}
        <motion.div
          className="mt-8 text-gray-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-semibold mb-2">
            Interests
          </h3>
          <p>
            I love exploring new technologies, UI/UX design, and building
            real-world projects that solve problems.
          </p>
        </motion.div>

      </div>
    </section>
  );
}