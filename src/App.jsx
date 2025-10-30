import React from "react";
import Header from './components/header.jsx'
import Footer from "./components/footer.jsx";
import Card from "./components/Card.jsx"
import Skills from "./components/skills.jsx";

export default function App() {
  return(
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Projects />
      </main>
      <Card />
      <Footer />
    </div>
  )
}