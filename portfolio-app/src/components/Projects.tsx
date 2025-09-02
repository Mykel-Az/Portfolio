import { FiExternalLink } from 'react-icons/fi';
import retailboxImage from '../assets/images/retailbox.aa6be396.jpg';
import bdsImage from '../assets/images/Bds-image.png';

const projects = [
  {
    name: "RetailBox Website",
    description: "A complete retail system designed to meet the needs of all business sizes.",
    tools: ["React", "Tailwind", "Next.js"],
    image: retailboxImage,
    link: "https://retailbox.co"
  },
  {
    name: "RetailBox App",
    description: "An all-in-one POS solution for managing products, customers, and team members",
    tools: ["React", "Python", "TypeScript", "Docker"],
    image: retailboxImage,
    link: "https://app.retailbox.co"
  },
  {
    name: "RetailBox Engine",
    description: "Retail management APIs built for performance, with interactive Swagger docs and Postman access",
    tools: ["Django", "Postman", "AWS", "PostgreSQL"],
    image: retailboxImage,
    link: "https://postman.retailbox.co/"
  },
  {
    name: "RetailBox Storefront",
    description: "Out-of-the-box e-commerce webstore for retail business of RetailBox User",
    tools: ["React", "Tailwindcss" ],
    image: retailboxImage,
    link: "https://storefront.retailbox.co"
  },
  {
    name: "BlueDiamond Solutions",
    description: "Providing IT soutions and more to business and individuals, helpining them leverage technolory for Scalability and efficiency",
    tools: ["Python", "Django", "Tailwind", "Cloudinary", "Render"],
    image: bdsImage,
    link: "https://bluediamondsolutions.org/"
  },

  {
    name: "Mecrchant Visualizer",
    description: "A web-based 2D product visualizer that allows users to customize and view products in real-time.",
    tools: ["React", "TypeScript", "Tailwind"],
    image: bdsImage,
    link: "https://bluediamondsolutions.org/services/graphics_design/visualizer/"
  },
];

const Projects = () => {
  return (
    <section className="py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-6">
          <h2 className="text-3xl font-bold text-purple-700 mb-2">Featured Projects</h2>
          <hr className="border-t-2 border-amber-500 w-40 mb-8 mx-auto md:mx-0" />
        </div>

        <div className="grid gap-4 justify-center sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-purple-100 rounded-lg shadow-xs hover:shadow-sm transition-all duration-200 overflow-hidden h-full flex flex-col w-full max-w-[350px] sm:max-w-none"
            >
              {/* Image container */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {/* overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
              </div>

              {/* Text content */}
              <div className="p-4 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-base font-semibold text-purple-800">{project.name}</h3>
                  <FiExternalLink className="text-purple-400 text-sm mt-0.5" />
                </div>
                
                <p className="text-xs text-gray-500 mb-3 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="text-[0.65rem] bg-amber-50 text-amber-600 px-2 py-0.5 rounded"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects