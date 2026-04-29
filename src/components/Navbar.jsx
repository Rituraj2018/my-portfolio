import { FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    const offset = 80; // adjust if needed

    const top = el.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-[#0f172a] px-6 py-3 rounded-full flex gap-8 shadow-lg border border-gray-700 z-50">

      <NavItem icon={<FaUser />} text="About" onClick={() => scrollToSection("about")} />
      <NavItem icon={<FaCode />} text="Skills" onClick={() => scrollToSection("skills")} />
      <NavItem icon={<FaProjectDiagram />} text="Projects" onClick={() => scrollToSection("projects")} />
      <NavItem icon={<FaEnvelope />} text="Contact" onClick={() => scrollToSection("contact")} />

    </div>
  );
}

function NavItem({ icon, text, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center text-sm hover:text-blue-400 cursor-pointer transition"
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}