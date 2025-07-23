import {
  SiPython,
  SiReact,
  SiNodedotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiDjango, 
  SiPostgresql, 
  SiJavascript,
  SiNextdotjs,
  SiFastapi,
  SiMysql,
  SiAmazon,
  SiDocker,
  SiGit,
  SiPostman
} from 'react-icons/si';

const skills = [
  { name: "React", icon: <SiReact className="text-amber-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-amber-500" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-amber-500" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-amber-500" /> },
  { name: "Django", icon: <SiDjango className="text-amber-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-amber-500" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-amber-500" /> },
  { name: "Python", icon: <SiPython className="text-amber-500" /> },
  { name: "NextJs", icon: <SiNextdotjs className="text-amber-500" /> },
  { name: "FastApi", icon: <SiFastapi className="text-amber-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-amber-500" /> },
  { name: "AWS", icon: <SiAmazon className="text-amber-500" /> },
  { name: "Docker", icon: <SiDocker className="text-amber-500" /> },
  { name: "Git", icon: <SiGit className="text-amber-500" /> },
  { name: "Postman", icon:<SiPostman className='text-amber-500' /> }
];

const Skills = () => {
  return (
    <section className="py-12 px-4 bg-gradient-to-br from-purple-50/30 to-amber-50/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-purple-700 mb-2">
            Skills & Tools
          </h2>
          <hr className="border-t-2 border-amber-500 w-40 mb-8" />
        </div>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white px-3 py-1.5 rounded-full shadow-sm border border-purple-100 hover:shadow-md transition-all duration-300 flex items-center gap-1.5 text-sm"
            >
              <div className="text-lg">
                {skill.icon}
              </div>
              <span className="text-purple-800 font-medium">{skill.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;