import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
//import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="bg-[#020617] text-white min-h-screen">
      <Hero />
      <About />
       <Skills />
      <Services />
      <Projects />
         <Experience />
      <Contact />
      <Footer />
       <Navbar />
    </div>
  );
}

export default App;