import { motion } from "framer-motion";

const certifications = [
  {
    title: "Web Development Fundamentals",
    platform: "IBM",
    year: "2025",
    image: "/Web.png",
    link: "https://www.credly.com/badges/12a9bca1-1e0f-4ff1-9faf-77c9a0cef78f/public_url",
  },
  {
    title: "React_JS",
    platform: "infosys Springboard",
    year: "2026",
    image: "/React_JS.jpg",
    link: "https://infyspringboard.onwingspan.com/public-assets/infosysheadstart/cert/lex_10648877150323546000_shared/1-ce61a107-fabb-47db-9a5c-76a11b8d3293.pdf",
  },
  {
    title: "Postgres_SQL",
    platform: "YouTube / self-study ",
    year: "2026",
    image: "/postgres.jpeg",
    link: "https://your-certificate-link.com",
  },
];

export default function Certifications() {
  return (
    <section className="bg-[#020617] text-white py-16 px-6">
      
      <h2 className="text-4xl font-bold text-center mb-12">
        Certifications & Online Courses
      </h2>

      <div className="max-w-4xl mx-auto border-l-2 border-gray-700 pl-6 space-y-10">

        {certifications.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >

            {/* Dot */}
            <div className="absolute -left-3 top-2 w-4 h-4 bg-blue-500 rounded-full shadow-md shadow-blue-500/50"></div>

            {/* Card */}
            <div className="bg-white/5 backdrop-blur-md border border-gray-700 rounded-xl p-5 hover:scale-105 transition">

              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-56 h-36 object-contain mx-auto rounded-lg bg-white p-2"
              />

              {/* Title */}
              <h3 className="text-xl font-semibold">
                {item.title}
              </h3>

              {/* Platform */}
              <p className="text-gray-400 text-sm">
                {item.platform} | {item.year}
              </p>

              {/* Button */}
              <a
                href={item.link}
                target="_blank"
                className="inline-block mt-4 px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90 transition"
              >
                View Certificate
              </a>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
}