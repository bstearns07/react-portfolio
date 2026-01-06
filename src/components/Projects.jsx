import React from "react";
import Card from "./Card";
import projectLogo1 from "../assets/TuitionCalculator.png";
import projectLogo2 from "../assets/weatherAPI.png"
import projectLogo3 from "../assets/pong.jpeg"
import projectLogo4 from "../assets/yugioh.jpeg"
import projectLogo5 from "../assets/portfolio.jpeg"
import projectLogo6 from "../assets/AchievementTracker.jpeg"
// import projectLogo2 from "../assets/project-logo.png";
// import projectLogo3 from "../assets/project-ogo.png";

const projects = [
  {
    id: 1,
    title: "Tuition Calculator",
    desc: "As Skills USA Nebraska State Champion - 2025 - I submitted this project that calculates your cost of going to college. Built with ASP.NET",
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
    imageMobile: projectLogo2,
  },
  {
    id: 3,
    title: "Pong",
    desc: "A simple Pong game using the python pygame library.",
    link: "https://github.com/bstearns07/Pong_Game",
    image: projectLogo3,
    imageMobile: projectLogo3,
  },
  {
    id: 4,
    title: "Yugioh Card Library with OCR",
    desc: "A python Flask card library app that uses OCR and Supabase to store your Yugioh card collection!",
    link: "https://github.com/bstearns07/YugiohCardLibrary_With_OCR",
    image: projectLogo4,
    imageMobile: projectLogo4,
  },
    {
    id: 5,
    title: "Ben's Portfolio Website",
    desc: "The React application for my portfolio website. Hosted on AWS.",
    link: "https://github.com/bstearns07/react-portfolio",
    image: projectLogo5,
    imageMobile: projectLogo5,
  },
      {
    id: 6,
    title: "Achievement Tracker",
    desc: "A trophy-tracker app for games. Built as Windows Form app with simple file I/O.",
    link: "https://github.com/bstearns07/AchievementTracker-BDS",
    image: projectLogo6,
    imageMobile: projectLogo6,
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
