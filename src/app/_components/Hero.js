"use client";
import Image from "next/image";
import Button from "./Button";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="py-12 px-8 md:p-28 bg-primary">
      <div className="max-w-screen-xl mx-auto flex flex-col sm:grid sm:grid-cols-12 gap-10 items-center">
        
        {/* Mobile Image */}
        <div className="sm:hidden relative">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-32 h-32 bg-gradient-to-tr from-[#A259FF] to-[#A259FF] blur-2xl opacity-60 rounded-full z-0" />
          <Image
            src="/heropic.jpg"
            width={150}
            height={200}
            alt="Vivian"
            className="rounded-lg relative z-10 mx-auto"
          />
        </div>

        {/* Text Content */}
        <div className="sm:col-span-7 text-center sm:text-left lg:w-4/5">
          <h2 className="text-lg sm:text-2xl font-semibold">I am Abara Vivian,</h2>
          <p className="text-3xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A259FF] via-white to-[#A259FF] mb-4">
            A Web Developer
          </p>
          <p className="text-base sm:text-lg text-gray-200">
            I specialize in building modern front-end experiences using clean, scalable code and intuitive design. From pixel-perfect UI to performance optimization, I focus on creating seamless user experiences that work across devices and platforms.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mt-6">
            <Button text="Download Cv" />
            <ul className="flex space-x-6 text-white text-xl">
              <li className="hover:scale-110 transition-transform duration-300">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </li>
              <li className="hover:scale-110 transition-transform duration-300">
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
              <li className="hover:scale-110 transition-transform duration-300">
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                  <RiTwitterXFill />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden sm:block sm:col-span-5 relative">
          <div className="absolute bottom-0 -left-30 translate-x-1/4 translate-y-1/4 w-60 h-60 bg-gradient-to-tr from-[#A259FF] to-[#A259FF] blur-2xl opacity-60 rounded-full z-0" />
          <Image
            src="/heropic.jpg"
            width={300}
            height={350}
            alt="Vivian"
            className="rounded-lg rotate-6 relative z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
