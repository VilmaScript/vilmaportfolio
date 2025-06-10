
"use client";
import Image from "next/image";
import { useState } from "react";
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
      "Real-time Cart updates",
    ],
    tech: "React, Next.js, Tailwind CSS, Sanity, Context API, Stripe, Framer Motion",
    image: "/one.jpg",
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
    image: "/two.jpg",
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
    image: "/three.jpg",
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
    image: "/four.jpg",
  },
  
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("latest");

  const visibleProjects =
    activeTab === "latest" ? projects.slice(0, 2) : projects.slice(2);

  return (
    <div id="projects" className="bg-primary py-14 px-6 md:px-28">
      {/* Heading */}
      <h2 className="text-3xl sm:text-5xl font-bold text-center text-transparent py-5 bg-clip-text bg-[linear-gradient(to_right,#6f15e6,#FFFFFF,#A259FF)] tracking-wider">
        My Projects 📂
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-7">
        <div className="bg-secondary rounded-full flex">
          <button
            onClick={() => setActiveTab("latest")}
            className={`px-6 py-2 cursor-pointer text-xs sm:text-sm rounded-full transition-all duration-300 ${
              activeTab === "latest"
                ? "bg-[#A259FF] text-white shadow-md outline-none"
                : "text-gray-300 hover:bg-[#A259FF]/20"
            }`}
          >
            Latest
          </button>
          <button
            onClick={() => setActiveTab("more")}
            className={`px-6 py-2 text-xs sm:text-sm rounded-full transition-all duration-300 ${
              activeTab === "more"
                ? "bg-[#A259FF] text-white shadow-md outline-none"
                : "text-gray-300 hover:bg-[#A259FF]/20"
            }`}
          >
            See More
          </button>
        </div>
      </div>

      {/* Project Cards */}
      <div className="space-y-14">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          >
            {/* Image */}
            <div className="w-full flex justify-center md:justify-start p-6">
              <Image
                src={project.image}
                width={500}
                height={300}
                alt={project.title}
                className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div className="text-gray-300 bg-secondary p-6 rounded-lg">
              <p className="mb-2 text-sm">
                <span className="text-lg font-medium text-white">
                  {project.title}:
                </span>{" "}
                {project.description}
              </p>
              <p className="text-white font-semibold mb-1">Key Features:</p>
              <ul className="list-disc list-inside marker:text-[#A259FF] space-y-1">
                {project.features.map((feature, i) => (
                  <li className="text-sm" key={i}>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-[#A259FF] mt-2">
                Technologies Used:{" "}
                <span className="text-white font-medium tracking-wider">
                  {project.tech}
                </span>
              </p>
              <div className="my-6 flex items-center space-x-6">
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
