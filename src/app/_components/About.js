import Softskills from "./Softskills";

const About = () => {
  return (
    <div id="about" className="bg-secondary pb-16">
      <div className="flex flex-col sm:grid sm:grid-cols-2 gap-10 pt-16 px-8 max-w-screen-xl mx-auto">
        
        {/* Experience Section */}
        <div>
          <h2 className="text-2xl text-center sm:text-3xl mb-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6f15e6] via-white to-[#A259FF]">
            My Experience 💼
          </h2>
          <div className="bg-surface p-6 rounded-lg shadow-lg mb-6">
            <p className="text-accent text-xs font-medium">2023 - 2024</p>
            <h4 className="text-white font-bold text-base">Junior Frontend Developer</h4>
            <p className="text-gray-300 text-sm">Pyraglle.LLC</p>
            <p className="font-medium text-accent my-2">Skills</p>
            <ul className="list-disc list-inside text-gray-300 text-xs marker:text-accent space-y-1">
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
            <p className="text-accent text-xs font-medium">2018 - 2023</p>
            <h4 className="text-white font-bold text-base">Bachelor of Science in Biochemistry</h4>
            <p className="text-gray-300 text-sm">University of Nigeria</p>
          </div>
          <div className="bg-surface p-6 rounded-lg shadow-lg">
            <p className="text-accent text-xs font-medium">2022 - 2023</p>
            <h4 className="text-white font-bold text-base">Web Development Course</h4>
            <p className="text-gray-300 text-sm">Udemy</p>
          </div>
        </div>
      </div>

      {/* Softskills Section */}
      <div className="mt-10 px-8">
        <Softskills />
      </div>
    </div>
  );
};

export default About;
