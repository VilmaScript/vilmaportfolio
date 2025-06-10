
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa6";
import { DiJsBadge } from "react-icons/di";
import { SiSanity } from "react-icons/si";
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div id="skills" className=" relative bg-secondary py-12 overflow-hidden">

      {/* CENTERED BLURRED GRADIENT BACKGROUND */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-[#A259FF] to-[#A259FF] blur-3xl opacity-60 rounded-full z-0" />

      {/* HEADER */}
      <h2 className="text-3xl  sm:text-5xl font-bold text-center text-transparent py-10 bg-clip-text bg-[linear-gradient(to_right,#6f15e6,#FFFFFF,#A259FF)] tracking-wider">
        Tech Stack🛠
      </h2>


      {/* SKILLS GRID */}
      <div className="relative z-10 px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaHtml5 className="text-5xl text-[#FF5722] mb-3" />,
              title: "HTML",
              desc: "Building semantic and accessible structures for the web. Ensures content is well-organized and easy to understand.",
            },
            {
              icon: <FaCss3Alt className="text-5xl text-[#4FC3F7] mb-3" />,
              title: "CSS",
              desc: "Crafting responsive layouts and smooth animations. Brings visual life and personality to designs.",
            },
            {
              icon: <DiJsBadge className="text-5xl text-yellow-300 mb-3" />,
              title: "JavaScript",
              desc: "Dynamic client-side functionality with ES6+ features. Powers interactive behavior and API handling.",
            },
            {
              icon: <FaReact className="text-5xl text-blue-300 mb-3" />,
              title: "React",
              desc: "Creating component-based, scalable interfaces. Optimized for performance and developer experience.",
            },
            {
              icon: <RiNextjsFill className="text-5xl text-white mb-3" />,
              title: "Next.js",
              desc: "Building SSR apps and optimized web experiences. Combines React with routing and performance tooling.",
            },
            {
              icon: <FaGitAlt className="text-5xl text-[#FF5722] mb-3" />,
              title: "Git & GitHub",
              desc: "Version control and efficient team collaboration. Tracks code changes and enables open-source contribution.",
            },
            {
              icon: <RiSupabaseFill className="text-5xl text-green-600 mb-3" />,
              title: "Supabase",
              desc: "Modern backend with auth, storage & real-time DB. Seamless integration with modern frontends.",
            },
            {
              icon: <RiTailwindCssFill className="text-5xl text-sky-400 mb-3" />,
              title: "Tailwind CSS",
              desc: "Utility-first CSS framework for rapid UI development. Enables responsive, clean designs fast.",
            },
            {
              icon: <SiSanity className="text-4xl text-white mb-3" />,
              title: "Sanity",
              desc: "Structured content management for modern websites. Offers real-time editing and API-first content delivery.",
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-[#1F1A36] p-6 rounded-xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-purple-500/20 hover:shadow-lg"
            >
              {skill.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
