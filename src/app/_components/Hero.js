"use client"
import Image from 'next/image'
import Button from './Button'
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='grid grid-cols-12 mb-5 p-28 '>
      <div className='col-span-7 w-5/6'>
        <h2 className='text-3xl font-semibold '>I am Abara Vivian,</h2>
        <p className='text-6xl text-transparent bg-clip-text bg-[linear-gradient(to_right,#A259FF,#FFFFFF,#A259FF)] font-bold mb-3'>
          A Web Developer
        </p>
        <p className='text-lg text-gray-200'>I specialize in building modern front-end experiences using clean, scalable code and intuitive design. From pixel-perfect UI to performance optimization, I focus on creating seamless user experiences that work across devices and platforms.</p>
        <div className='flex items-center mt-5 space-x-4'>
          <Button />
          <ul className="flex space-x-6 text-white items-center">
            <li className='text-xl hover:scale-110 transition-all duration-300'>
              <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
                <RiTwitterXFill />
              </a>
            </li>
            <li className='text-xl hover:scale-110 transition-all duration-300'>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </li>
            <li className='text-xl hover:scale-110 transition-all duration-300'>
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </li>
          </ul>


        </div>

      </div>

      <div className="col-span-5 ">
        {/* Animated Blur Gradient */}

        <div className='relative'>
          <div className="absolute bottom-0 -left-30 translate-x-1/4 translate-y-1/4 w-60 h-60 bg-gradient-to-tr from-[#A259FF] to-[#A259FF] blur-2xl opacity-60 rounded-full z-0 " />
          {/* Image */}
          <Image
            src="/heropic.jpg"
            width={300}
            height={350}
            alt="Vivian"
            className="rounded-lg rotate-6 relative z-10"
          />
        </div>


      </div>



    </div>
  )
}

export default Hero