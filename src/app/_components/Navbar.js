import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-16 text-white overflow-hidden">
  <div className="text-2xl font-bold text-yellow-300 z-10">VeeCodes.</div>
  <ul className="flex space-x-4 z-10">
    <li><a href="#home" className="hover:underline">Home</a></li>
    <li><a href="#about" className="hover:underline">About</a></li>
    <li><a href="#projects" className="hover:underline">Projects</a></li>
    <li><a href="#contact" className="hover:underline">Contact</a></li>
  </ul>
</nav>

  )
}

export default Navbar