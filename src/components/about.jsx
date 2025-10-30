import React from "react"

export default function About(){
  return(
    <section id="about" className="py-16 bg-white px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex gap-12 items-center">
          <div className="w-1/3">
            <img
              src="/profile-photo.jpg"
              alt="Profile"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-2/3">
            <p className="text-lg text-gray-700 mb-6">
              I am a passionate developer with experience in building modern
              web applications. I testspecialize in JavaScript, React, and
              Node.js. With a strong foundation in both frontend and backend
              development, I create efficient, scalable, and user-friendly
              solutions.
            </p>
            <p className="text-lg text-gray-700">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing my knowledge
              through blog posts and tutorials.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
  