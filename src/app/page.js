import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Projects";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute -right-[10%] top-0 transform -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-[#A259FF] to-[#A259FF] blur-3xl opacity-60 rounded-full z-10" />
      <Navbar/>
     <Hero/>
     <Skills/>
     <Projects/>
    </div>
  );
}
