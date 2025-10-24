import React from "react"

export default function Heade(){
  return(
    <div className="min-h-screen bg-gray-100">
    {/* Header/Navigation */}
    <header className="fixed w-full bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">Your Logo</div>
        <div className="flex gap-6">
          <a href="#hero" className="hover:text-blue-600">
            Home
          </a>
          <a href="#about" className="hover:text-blue-600">
            About
          </a>
          <a href="#projects" className="hover:text-blue-600">
            Projects
          </a>
          <a href="#skills" className="hover:text-blue-600">
            Skills
          </a>
          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </div>
      </nav>
    </header>
  </div>
  )
}

