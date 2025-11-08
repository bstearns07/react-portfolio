import React from "react";
import Card from "./Card";
import projectLogo1 from "../assets/TuitionCalculator.png";
import projectLogo2 from "../assets/weatherAPI.png"
import projectLogo3 from "../assets/pong.jpeg"
// import projectLogo2 from "../assets/project-logo.png";
// import projectLogo3 from "../assets/project-ogo.png";

const projects = [
  {
    id: 1,
    title: "Tuition Calculator",
    desc: "As the Skills USA Nebraska State Champion - 2025 - I submitted this project that calculates your cost your cost of going to college",
    link: "https://github.com/bstearns07/TuitionCalculator_WebApp",
    image: projectLogo1,
    imageMobile: projectLogo1,
  },
  {
    id: 2,
    title: "Weather API",
    desc: "A JavaFX project that retrieves the weather for any geographic coordinates using the Open Meteo API",
    link: "https://github.com/bstearns07/WeatherAPIApp",
    image: projectLogo2,
    imageMobile: projectLogo1,
  },
  {
    id: 3,
    title: "Pong",
    desc: "A simple Pong game using the python pygame library.",
    link: "https://github.com/bstearns07/Pong_Game",
    image: projectLogo3,
    imageMobile: projectLogo1,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Card key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
