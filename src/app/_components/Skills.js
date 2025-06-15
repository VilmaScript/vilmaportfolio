'use client';
import { FaHtml5, FaReact } from "react-icons/fa";
import { FaCss3Alt, FaGitAlt } from "react-icons/fa6";
import { DiJsBadge } from "react-icons/di";
import { SiSanity } from "react-icons/si";
import { RiNextjsFill, RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";

const skillsData = [
  { icon: <FaHtml5 className="text-5xl text-[#FF5722]" />, title: "HTML" },
  { icon: <FaCss3Alt className="text-5xl text-[#4FC3F7]" />, title: "CSS" },
  { icon: <DiJsBadge className="text-5xl text-yellow-300" />, title: "JavaScript" },
  { icon: <FaReact className="text-5xl text-blue-300" />, title: "React" },
  { icon: <RiNextjsFill className="text-5xl text-white" />, title: "Next.js" },
  { icon: <FaGitAlt className="text-5xl text-[#FF5722]" />, title: "Git & GitHub" },
  { icon: <RiSupabaseFill className="text-5xl text-green-600" />, title: "Supabase" },
  { icon: <RiTailwindCssFill className="text-5xl text-sky-400" />, title: "Tailwind CSS" },
  { icon: <SiSanity className="text-4xl text-white" />, title: "Sanity" },
];

const Skills = () => {
  return (
    <div id="skills" className="relative bg-secondary py-12 overflow-hidden">
      
      {/* Background Circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-[#A259FF] to-[#A259FF] blur-3xl opacity-60 rounded-full z-0" />

      {/* Header */}
      <h2 className="text-3xl sm:text-5xl font-bold text-center text-transparent py-10 bg-clip-text bg-[linear-gradient(to_right,#6f15e6,#FFFFFF,#A259FF)] tracking-wider">
        Tech Stack 🛠
      </h2>

      {/* Slider */}
      <div className="relative z-10 px-4 sm:px-10 mb-14">
        <div className="overflow-hidden">
          <div className="flex animate-scroll gap-4 sm:gap-6 w-max">
            {[...skillsData, ...skillsData].map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] bg-[#1F1A36] rounded-xl shadow-md flex flex-col items-center justify-center text-center mx-2"
              >
                {skill.icon}
                <h3 className="text-sm sm:text-base font-medium text-white mt-2">{skill.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;


