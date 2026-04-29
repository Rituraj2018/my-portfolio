import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#020617] text-white py-16 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">
          Contact Me
        </h2>

        <p className="text-gray-400 mb-10">
          Feel free to reach out for opportunities or just a friendly hello 👋
        </p>

        {/* Contact Info */}
        <div className="mb-10 space-y-2">
          <p>Email: <span className="text-blue-400">singhrituraj8077@gmail.com</span></p>
          <p>Phone: <span className="text-blue-400">+91 8543842018</span></p>
        </div>

        {/* Contact Form */}
        <motion.form
          action="https://formsubmit.co/riturajsingh8543@gmail.com"
          method="POST"
          className="space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 outline-none"
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="4"
            className="w-full p-3 rounded-lg bg-white/10 border border-gray-700 outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:opacity-90"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10 text-2xl">
          
          <a
            href="https://www.linkedin.com/in/rituraj-singh-437472284"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/Rituraj2018"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.instagram.com/rajsaurabhs"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>

        </div>

      </div>
    </section>
  );
}