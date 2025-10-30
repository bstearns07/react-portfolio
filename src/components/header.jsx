import React from "react"
import PillNav from './PillNav';
import logo from '/icon.jpg';

export default function Header(){

  return(
    <div className="min-h-screen bg-gray-100">
      <PillNav
      logo={logo}
      logoAlt="Company Logo"
      items={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Contact', href: '/contact' }
      ]}
      activeHref="/"
      className="custom-nav"
      ease="power2.easeOut"
      baseColor="#000000"
      pillColor="#ffffff"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
    />
    {/* Header/Navigation */}
    {/* <header className="text-gray-600 text-3xl fixed w-full bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold"><img src="/src/images/Logo.png" alt="Logo"className="w-24 h-auto"></img></div>
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
    </header> */}
  </div>
  )
}

