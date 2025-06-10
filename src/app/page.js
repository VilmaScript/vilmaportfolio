import About from "./_components/About";
import Contact from "./_components/Contact";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";
import Reveal from "./_components/Reveal";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <div className="scroll-smooth relative">
      <div className="absolute -right-[10%] top-0 transform -translate-y-1/2 sm:w-72 sm:h-72 w-52 h-52 bg-gradient-to-tr from-[#A259FF] to-[#A259FF] blur-3xl opacity-60 rounded-full z-10" />
      <Navbar />
      <Reveal>
        <Hero />
      </Reveal>
        <Skills />
      <Reveal>
        <Projects />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
    </div>
  );
}
