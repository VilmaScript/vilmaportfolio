import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import VisitLink from "./VisitLink";

const projects = [
  {
    title: "GlitzInteriors",
    description:
      "A modern e-commerce app designed for an interior decor store. It features an elegant UI with fluid navigation and an enhanced shopping experience.",
    features: [
      "Responsive and sleek UI design",
      "Secure and smooth checkout process",
      "Product filtering and search functionality",
      "Framer motion animations for better UX",
    ],
    tech: "React, Next.js, Tailwind CSS, Sanity, Context API, Stripe, Framer Motion",
    image: "/project1A.PNG",
  },
  {
    title: "ReviewApp",
    description:
      "A review and rating platform where users can share thoughts on products and services, with a clean interface and intuitive feedback flow.",
    features: [
      "Post and edit product reviews",
      "Search and filter user reviews",
      "User profile and activity tracking",
      "Review notification system",
    ],
    tech: "React, Tailwind CSS, Supabase",
    image: "/project2A.PNG",
  },
  {
    title: "VuseAdmin Dashboard",
    description:
      "A responsive and minimalistic dashboard designed to practice layout and advanced CSS styling techniques. Ideal for learning pure HTML, CSS, and JS patterns.",
    features: [
      "Clean and responsive UI layout",
      "Custom grid and card styling",
      "Dark/light mode toggle (optional)",
      "Advanced CSS flexbox/grid implementation",
    ],
    tech: "HTML, CSS, JavaScript",
    image: "/project3.PNG",
  },
  {
    title: "VeeCodes Portfolio",
    description:
      "A modern developer portfolio showcasing projects, skills, and contact info in an elegant, interactive interface.",
    features: [
      "Fully responsive and sleek UI",
      "Interactive project showcase",
      "Animated sections with Framer",
      "Built with modern frontend stack",
    ],
    tech: "Next.js, React, Tailwind CSS, Framer Motion",
    image: "/project1A.PNG",
  },
];

const Projects = () => {
  return (
    <div className="bg-[#1A152D] py-20 px-6 md:px-28">
      <h2 className="text-5xl font-bold text-center text-transparent py-10 bg-clip-text bg-[linear-gradient(to_right,#6f15e6,#FFFFFF,#A259FF)] tracking-wider">
        My Projects 📂
      </h2>

      <div className="space-y-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          >
            {/* Image */}
            <div className="w-full flex justify-center md:justify-start">
              <Image
                src={project.image}
                width={500}
                height={300}
                alt={project.title}
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="text-gray-300">
              <p className="mb-2">
                <span className="text-xl font-medium text-[#A259FF]">
                  {project.title}:
                </span>{" "}
                {project.description}
              </p>
              <p className="text-[#A259FF] font-semibold mb-1">Key Features:</p>
              <ul className="list-disc list-inside marker:text-[#A259FF] space-y-1">
                {project.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <p className="text-[#A259FF] mt-2">
                Technologies Used:{" "}
                <span className="text-white font-medium tracking-wider">
                  {project.tech}
                </span>
              </p>
              <div className="my-4 flex items-center space-x-6">
                <VisitLink />
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-300 hover:underline flex items-center gap-2"
                >
                  Git Repo <FaArrowRightLong />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


