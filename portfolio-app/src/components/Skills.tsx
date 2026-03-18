const skillGroups = [
  {
    label: 'Backend',
    items: ['Python', 'Django', 'FastAPI', 'Flask', 'REST APIs'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
  },
  {
    label: 'Data & Infra',
    items: ['PostgreSQL', 'MySQL', 'Docker', 'Git & GitHub'],
  },
  {
    label: 'Tooling',
    items: ['Postman', 'Swagger / OpenAPI', 'Framer Motion'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-white/[0.10]">
      <div className="max-w-4xl mx-auto px-6">

        <p
          className="text-[12px] tracking-[0.14em] uppercase text-[#8a8a85] mb-3"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Expertise
        </p>
        <h2
          className="text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.02em] italic text-[#edebe6] mb-16"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Skills &amp; tools
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p
                className="text-[11px] tracking-[0.14em] uppercase text-[#8a8a85] mb-3 pb-2.5 border-b border-white/[0.10]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {group.label}
              </p>
              <ul className="list-none p-0 m-0 flex flex-col gap-0.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="px-3 py-2.5 text-[15px] text-[#c4c2bc] rounded-sm transition-all duration-150 hover:bg-[#242424] hover:text-[#edebe6] cursor-default"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}