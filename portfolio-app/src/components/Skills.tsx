const skills = ["React", "TypeScript", "Tailwind", "Node.js", "Django", "PostgreSQL"];

const Skills = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
          Skills & Tools
        </h2>
        <ul className="flex flex-wrap justify-center gap-3">
          {skills.map((skill) => (
            <li 
              key={skill} 
              className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;