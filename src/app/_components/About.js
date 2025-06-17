import Image from "next/image";
import Softskills from "./Softskills";

const About = () => {
  return (
    <div id="about" className="bg-secondary p-10">
      <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 mx-auto text-center">
  {/* Heading */}
  <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-transparent py-5 bg-clip-text bg-[linear-gradient(to_right,#6f15e6,#FFFFFF,#A259FF)] tracking-wider mb-5">
    About Me 👧🏿
  </h2>

  {/* Image with Glow */}
  <div className="relative mb-7">
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-tr from-[#A259FF] to-[#A259FF] blur-2xl opacity-60 rounded-full z-0" />
    <Image
      src="/heropic.jpg"
      width={200}
      height={300}
      alt="Vivian"
      className="rounded-lg relative z-10 mx-auto"
    />
  </div>

  {/* Description */}
  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
    I&apos;m <span className="font-semibold text-white">Abara Vivian</span>, a passionate Web Developer.
    I specialize in crafting modern, responsive front-end experiences using clean, scalable code.
    I focus on building intuitive user interfaces that are not only visually appealing but also optimized for performance across all devices and platforms.
    From pixel-perfect designs to smooth interactions, I&apos;m dedicated to delivering seamless digital experiences.
  </p>
</div>

      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-10 pt-16 sm:px-8 max-w-screen-xl mx-auto">

        {/* Experience Section */}
        <div>
          <h2 className="text-2xl text-center sm:text-3xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6f15e6] via-white to-[#A259FF]">
            My Experience 💼
          </h2>
          <div className="bg-surface p-6 rounded-lg shadow-lg mb-6">
            <p className="text-gray-300 text-xs font-medium">2023 - 2024</p>
            <h4 className="text-white font-bold text-base">Junior Frontend Developer</h4>
            <p className="text-gray-300 text-sm">Pyraglle.LLC</p>
            <p className="font-medium text-white my-2">Skills</p>
            <ul className="list-disc list-inside text-gray-300 text-xs space-y-1">
              <li>HTML, CSS, JavaScript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Git & GitHub</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>

        {/* Education Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6f15e6] via-white to-[#A259FF] mb-5 text-center">
            My Education 🎓
          </h2>
          <div className="bg-surface p-6 rounded-lg shadow-lg mb-4">
            <p className="text-gray-300 text-xs font-medium">2018 - 2023</p>
            <h4 className="text-white font-bold text-base">Bachelor of Science in Biochemistry</h4>
            <p className="text-gray-300 text-sm">University of Nigeria</p>
          </div>
          <div className="bg-surface p-6 rounded-lg shadow-lg">
            <p className="text-gray-300 text-xs font-medium">2022 - 2023</p>
            <h4 className="text-white font-bold text-base">Web Development Course</h4>
            <p className="text-gray-300 text-sm">Udemy</p>
          </div>
        </div>
      </div>

      {/* Softskills Section */}
      <div className="mt-10 sm:px-8">
        <Softskills />
      </div>
    </div>
  );
};

export default About;
