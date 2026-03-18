import { useParams, Link, Navigate } from 'react-router-dom';
import projects from '../data/projects';
import Layout from '../components/Layout';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) return <Navigate to="/portfolio" replace />;

  const formatBody = (text: string) =>
    text
      .split('\n\n')
      .map((para, i) => (
        <p key={i} className="text-[14px] text-[#888884] leading-[1.85] font-light mb-3 last:mb-0">
          {para.trim()}
        </p>
      ));

  return (
    <Layout>
      <Nav />
    <div className="pt-[100px]">

      {/*  Header  */}
      <div className="border-b border-white/[0.07] pb-14 pt-16">
        <div className="max-w-4xl mx-auto px-6">

          <div
            className="flex items-center gap-2 text-[11px] tracking-[0.09em] uppercase text-[#4e4e4b] mb-6"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            <Link to="/portfolio" className="hover:text-[#00d4ff] transition-colors no-underline text-[#4e4e4b]">
              Projects
            </Link>
            <span className="opacity-30">/</span>
            <span>{project.name}</span>
          </div>

          {/* Title */}
          <h1
            className="text-[clamp(34px,5vw,58px)] leading-[1.05] tracking-[-0.02em] italic text-[#e2e0db] mb-4"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            {project.name}
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] text-[#888884] font-light leading-[1.75] max-w-xl">
            {project.description}
          </p>

          {/* Stack chips */}
          <div className="flex flex-wrap gap-2 mt-7 pt-7 border-t border-white/[0.07]">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-[11px] tracking-[0.07em] uppercase text-[#888884] border border-white/[0.13] px-3 py-1 rounded-sm bg-[#161616]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/*  Body  */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_248px] gap-16 items-start">

            {/* Main content */}
            <div className="flex flex-col gap-12">

              {/* Screenshot placeholder */}
              <div className="w-full aspect-video bg-[#161616] border border-white/[0.07] rounded-sm flex flex-col items-center justify-center gap-2">
                <span className="text-[24px] opacity-20">⬚</span>
                <span
                  className="text-[11px] tracking-[0.1em] uppercase text-[#4e4e4b]"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Add a screenshot
                </span>
              </div>

              {/* Problem */}
              <div>
                <p
                  className="text-[10px] tracking-[0.14em] uppercase text-[#00d4ff] mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Problem
                </p>
                <h3
                  className="text-[22px] italic tracking-[-0.01em] text-[#e2e0db] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Why this was built
                </h3>
                {formatBody(project.problem)}
              </div>

              {/* Role */}
              <div>
                <p
                  className="text-[10px] tracking-[0.14em] uppercase text-[#00d4ff] mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Role
                </p>
                <h3
                  className="text-[22px] italic tracking-[-0.01em] text-[#e2e0db] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  My responsibilities
                </h3>
                {formatBody(project.role)}
              </div>

              {/* Architecture */}
              <div>
                <p
                  className="text-[10px] tracking-[0.14em] uppercase text-[#00d4ff] mb-2"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Architecture
                </p>
                <h3
                  className="text-[22px] italic tracking-[-0.01em] text-[#e2e0db] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Technical decisions
                </h3>
                {formatBody(project.architecture)}
              </div>

            </div>

            {/* Sidebar */}
            <aside className="md:sticky md:top-20 flex flex-col gap-3">

              {/* Links */}
              <div className="border border-white/[0.07] p-5">
                <p
                  className="text-[10px] tracking-[0.12em] uppercase text-[#4e4e4b] mb-4"
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
                      className={`flex items-center justify-between py-2.5 text-[13px] text-[#888884] no-underline hover:text-[#00d4ff] transition-colors duration-150 ${
                        i < project.links.length - 1 ? 'border-b border-white/[0.07]' : ''
                      }`}
                    >
                      {label}
                      <span className="text-[11px] opacity-40">↗</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Stack */}
              <div className="border border-white/[0.07] p-5">
                <p
                  className="text-[10px] tracking-[0.12em] uppercase text-[#4e4e4b] mb-4"
                  style={{ fontFamily: 'var(--font-mono)' }}
                >
                  Stack
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] tracking-[0.07em] uppercase text-[#888884] border border-white/[0.13] px-2.5 py-1 rounded-sm"
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
      </div>

    </div>
      <Footer />
    </Layout>
  );
}
