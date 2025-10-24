<section id="skills" className="py-16 bg-white px-6">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
      <div className="grid grid-cols-5 gap-6">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "Vite",
          "Tailwind",
        ].map((skill) => (
          <div
            key={skill}
            className="bg-gray-100 rounded-lg p-4 text-center hover:shadow-md transition-shadow"
          >
            <span className="text-lg font-semibold">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
