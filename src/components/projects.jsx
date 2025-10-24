{/* Projects Section */}
  <section id="projects" className="py-16 px-6">
    <div className="container mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
      <div className="grid grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((project) => (
          <div
            key={project}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={`/project-${project}.jpg`}
              alt={`Project ${project}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Project Title {project}
              </h3>
              <p className="text-gray-600 mb-4">
                Brief description of the project and the technologies used.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:underline">
                  Demo
                </a>
                <a href="#" className="text-blue-600 hover:underline">
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
