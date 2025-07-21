const projects = [
  {
    name: "RetailBox",
    description: "An app for business owners to manage sales and inventory. I handled QA and developed the React storefront.",
    tools: ["React", "TypeScript", "Next.js", "Jest"],
    github: "https://github.com/youruser/retailbox",
    demo: "https://retailbox.co"
  },
  // Add more here
];

const Projects = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div 
              key={project.name} 
              className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl font-bold text-purple-700 mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span 
                    key={tool} 
                    className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-4">
                <a 
                  href={project.github} 
                  target="_blank"
                  className="text-purple-600 hover:text-purple-800 font-medium flex items-center gap-1"
                >
                  <span>GitHub</span>
                </a>
                <a 
                  href={project.demo} 
                  target="_blank"
                  className="text-amber-600 hover:text-amber-800 font-medium flex items-center gap-1"
                >
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;