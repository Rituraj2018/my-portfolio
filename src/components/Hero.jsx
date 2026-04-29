import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4">

      {/* Profile Image */}
      <div className="relative mb-6 group flex items-center justify-center">

        {/* Soft outer glow */}
        <div className="absolute w-52 h-52 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 blur-3xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

        {/* THIN animated border ring */}
        <div className="absolute w-44 h-44 rounded-full p-[1px] bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 animate-spin">
          <div className="w-full h-full rounded-full bg-[#0f172a]"></div>
        </div>

        {/* Inner glow */}
        <div className="absolute w-40 h-40 rounded-full blur-xl bg-orange-400 opacity-20 group-hover:opacity-40 transition duration-300"></div>

        {/* Image */}
        <a
          href="https://drive.google.com/drive/u/1/folders/1TxcQLJVrCbkhfdks8bySj3Nc0SE2z-hW"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10"
        >
          <img
            src="/Rituraj.jpeg"
            alt="profile"
            className="w-40 h-40 object-cover rounded-full border border-white/10 cursor-pointer"
          />
        </a>

      </div>

      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide">
        RITURAJ SINGH
      </h1>

      {/* Role */}
      <h2 className="text-lg md:text-xl text-gray-300 mt-2">
        Data Engineer & Full-Stack Developer
      </h2>

      {/* Social Icons */}
      <div className="flex gap-4 mt-6">

        <a href="https://www.linkedin.com/in/rituraj-singh-437472284" target="_blank" rel="noopener noreferrer">
          <Icon><FaLinkedin /></Icon>
        </a>

        <a href="https://x.com/your-profile" target="_blank" rel="noopener noreferrer">
          <Icon><FaXTwitter /></Icon>
        </a>

        <a href="https://github.com/Rituraj2018" target="_blank" rel="noopener noreferrer">
          <Icon><FaGithub /></Icon>
        </a>

        <a href="https://www.instagram.com/rajsaurabhs" target="_blank" rel="noopener noreferrer">
          <Icon><FaInstagram /></Icon>
        </a>

      </div>

      {/* Description */}
      <p className="mt-6 max-w-xl text-gray-400">
        Full-Stack Developer focused on building scalable web applications and data-driven systems.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex gap-4 flex-wrap justify-center">

        {/* Download Resume */}
        <a
          href="/Rituraj_CV.pdf"
          download
          className="px-5 py-2 bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 rounded-lg font-medium hover:scale-105 transition"
        >
          Download Resume
        </a>

        {/* View More */}
        <a
          href="#about"
          className="px-5 py-2 border border-gray-500 rounded-lg hover:bg-white hover:text-black transition"
        >
          View More
        </a>

      </div>

    </section>
  );
}

/* Icon Component */
function Icon({ children }) {
  return (
    <div className="p-3 border border-gray-600 rounded-lg hover:bg-white hover:text-black transition duration-300 cursor-pointer hover:scale-110">
      {children}
    </div>
  );
}