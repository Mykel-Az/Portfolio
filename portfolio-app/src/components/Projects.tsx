import { useState, useRef } from 'react';
import projects from '../data/projects';

function formatBody(text: string) {
  return text.trim().split('\n\n').map((para, i) => (
    <p key={i} className="text-[15px] text-[#c4c2bc] leading-[1.85] font-light mb-3 last:mb-0">
      {para.trim()}
    </p>
  ));
}

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const isDev = import.meta.env.DEV;
  const rowRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggle = (id: string) => {
    const isOpening = openId !== id;
    setOpenId(isOpening ? id : null);
    if (isOpening) {
      setTimeout(() => {
        const el = rowRefs.current[id];
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 64 - 16;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <section id="projects" className="py-24 border-t border-white/[0.10]">
      <div className="max-w-4xl mx-auto px-6">

        <p
          className="text-[12px] tracking-[0.14em] uppercase text-[#8a8a85] mb-3"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Work
        </p>
        <h2
          className="text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.02em] italic text-[#edebe6] mb-16"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Featured projects
        </h2>

        <div className="border-t border-white/[0.10]">
          {projects.map((project) => {
            const isOpen = openId === project.id;
            return (
              <div
                key={project.id}
                ref={(el) => { rowRefs.current[project.id] = el; }}
                className="border-b border-white/[0.10]"
              >
                <div
                  onClick={() => toggle(project.id)}
                  className="group flex items-center justify-between gap-6 py-7 cursor-pointer transition-all duration-150 hover:pl-2"
                >
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-[21px] italic leading-tight tracking-[-0.01em] mb-1.5 transition-colors duration-150 ${isOpen ? 'text-[#00d4ff]' : 'text-[#edebe6] group-hover:text-[#00d4ff]'}`}
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {project.name}
                    </p>
                    <p className="text-[15px] text-[#c4c2bc] font-light mb-3">
                      {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] tracking-[0.07em] uppercase text-[#8a8a85] border border-white/[0.10] px-2 py-0.5 rounded-sm"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className={`text-xl flex-shrink-0 transition-all duration-300 ${isOpen ? 'text-[#00d4ff] rotate-45' : 'text-[#8a8a85] group-hover:text-[#00d4ff]'}`}
                  >
                    +
                  </span>
                </div>

                {isOpen && (
                  <div className="pb-10">

                    {project.screenshot ? (
                      <img
                        src={project.screenshot}
                        alt={`${project.name} screenshot`}
                        className="w-full rounded-sm border border-white/[0.10] object-cover mb-8"
                        onError={(e) => {
                          if (import.meta.env.DEV) {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const msg = document.createElement('div');
                            msg.style.cssText = 'width:100%;aspect-ratio:16/9;background:#1a1010;border:1.5px dashed rgba(255,80,80,0.4);border-radius:3px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;font-family:monospace;font-size:11px;color:#884444;letter-spacing:0.08em;text-transform:uppercase;padding:16px;text-align:center;margin-bottom:32px';
                            msg.innerHTML = `⚠ Image not found<br><span style="color:#663333;margin-top:4px;display:block">${project.screenshot}</span><span style="color:#553333;margin-top:8px;display:block;font-size:10px">Put the file in: portfolio-app/public${project.screenshot}</span>`;
                            target.parentNode?.insertBefore(msg, target.nextSibling);
                          }
                        }}
                      />
                    ) : isDev ? (
                      <div className="mb-8 w-full aspect-video rounded-sm border border-dashed border-white/[0.15] bg-[#1c1c1c] flex flex-col items-center justify-center gap-2">
                        <span className="text-[28px] opacity-20">⬚</span>
                        <span
                          className="text-[10px] tracking-[0.12em] uppercase text-[#8a8a85]"
                          style={{ fontFamily: 'var(--font-mono)' }}
                        >
                          Add screenshot — set <code className="text-[#c4c2bc]">screenshot</code> in projects.ts
                        </span>
                      </div>
                    ) : null}

                    <div className="md:hidden mb-8 border border-white/[0.10] p-5">
                      <p
                        className="text-[10px] tracking-[0.12em] uppercase text-[#8a8a85] mb-4"
                        style={{ fontFamily: 'var(--font-mono)' }}
                      >
                        Links
                      </p>
                      <div className="flex flex-col">
                        {project.links.map(({ label, url }, i) => (
                          <a
                            key={label}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`flex items-center justify-between py-2.5 text-[14px] text-[#c4c2bc] no-underline hover:text-[#00d4ff] transition-colors duration-150 ${i < project.links.length - 1 ? 'border-b border-white/[0.10]' : ''}`}
                          >
                            {label}
                            <span className="text-[11px] opacity-50">↗</span>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-10">

                      <div className="flex flex-col gap-9">
                        <div>
                          <p className="text-[10px] tracking-[0.14em] uppercase text-[#00d4ff] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                            Problem
                          </p>
                          <h4 className="text-[18px] italic text-[#edebe6] mb-3 tracking-[-0.01em]" style={{ fontFamily: 'var(--font-serif)' }}>
                            Why this was built
                          </h4>
                          {formatBody(project.problem)}
                        </div>
                        <div>
                          <p className="text-[10px] tracking-[0.14em] uppercase text-[#00d4ff] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                            Role
                          </p>
                          <h4 className="text-[18px] italic text-[#edebe6] mb-3 tracking-[-0.01em]" style={{ fontFamily: 'var(--font-serif)' }}>
                            My responsibilities
                          </h4>
                          {formatBody(project.role)}
                        </div>
                        <div>
                          <p className="text-[10px] tracking-[0.14em] uppercase text-[#00d4ff] mb-2" style={{ fontFamily: 'var(--font-mono)' }}>
                            Architecture
                          </p>
                          <h4 className="text-[18px] italic text-[#edebe6] mb-3 tracking-[-0.01em]" style={{ fontFamily: 'var(--font-serif)' }}>
                            Technical decisions
                          </h4>
                          {formatBody(project.architecture)}
                        </div>
                      </div>

                      <aside className="hidden md:flex flex-col gap-3">
                        <div className="border border-white/[0.10] p-5">
                          <p className="text-[10px] tracking-[0.12em] uppercase text-[#8a8a85] mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                            Links
                          </p>
                          <div className="flex flex-col">
                            {project.links.map(({ label, url }, i) => (
                              <a
                                key={label}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className={`flex items-center justify-between py-2.5 text-[13px] text-[#c4c2bc] no-underline hover:text-[#00d4ff] transition-colors duration-150 ${i < project.links.length - 1 ? 'border-b border-white/[0.10]' : ''}`}
                              >
                                {label}
                                <span className="text-[11px] opacity-50">↗</span>
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className="border border-white/[0.10] p-5">
                          <p className="text-[10px] tracking-[0.12em] uppercase text-[#8a8a85] mb-4" style={{ fontFamily: 'var(--font-mono)' }}>
                            Stack
                          </p>
                          <div className="flex flex-wrap gap-1.5">
                            {project.stack.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] tracking-[0.07em] uppercase text-[#c4c2bc] border border-white/[0.13] px-2.5 py-1 rounded-sm"
                                style={{ fontFamily: 'var(--font-mono)' }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </aside>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}