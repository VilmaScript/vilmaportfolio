

const Footer = () => {
  return (
    <footer className="bg-[#1F1A36] text-gray-400 text-center py-3 sm:mt-4">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-yellow-300 font-semibold">Abara Vivian</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
