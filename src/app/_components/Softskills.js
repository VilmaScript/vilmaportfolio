const Softskills = () => {
  const skills = [
    "Strong communication skills to effectively collaborate with cross-functional teams and explain technical concepts clearly.",
    "Critical thinking and problem-solving abilities to identify UI/UX issues and implement intuitive solutions.",
    "Adaptability and continuous learning mindset to keep up with evolving frontend technologies and frameworks.",
    "Professional proficiency in English for seamless team communication, documentation, and client interaction.",
  ];

  return (
    <div className="px-6 md:px-20 bg-[#1A152D] mt-5 ">
        
     <h2 className="text-xl sm:text-2xl font-bold text-center text-transparent py-5 bg-clip-text bg-[linear-gradient(to_right,#6f15e6,#FFFFFF,#A259FF)] tracking-wider">
        Soft Skills🤝
      </h2>

      <ul className="space-y-4 max-w-2xl mx-auto">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="border-b border-gray-50 text-xs sm:text-sm pb-3 text-gray-300 hover:text-white hover:pl-2 transition-all duration-200"
          >
            <span className="font-bold text-[#A259FF] mr-2">
              {String(index + 1).padStart(2, "0")}.
            </span>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Softskills;
