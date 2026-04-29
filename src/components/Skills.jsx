import { motion } from "framer-motion";

const skills = [
  { name: "Java", level: 90 },
  { name: "Python(basic)", level: 70 },
  { name: "HTML", level: 91 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 55 },
  { name: "Python(basic)", level: 70 },
  { name: "Git & GitHub", level: 70 },

  
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#020617] text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">
        My Skills
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        {skills.map((skill, index) => (
          <div key={index}>
            
            {/* TOP TEXT */}
            <div className="flex justify-between mb-2 text-sm font-semibold">
              <span className="text-gray-200">{skill.name}</span>
              <span className="text-gray-400">{skill.level}%</span>
            </div>

            {/* BAR BACKGROUND */}
            <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">

              {/* ANIMATED BAR */}
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-md shadow-purple-500/40"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

            </div>

          </div>
        ))}
      </div>
    </section>
  );
}