import { Link, useLocation } from 'react-router-dom';

export default function Nav() {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects/');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#141414]/90 backdrop-blur-xl border-b border-white/[0.10]">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">

        <Link
          to="/portfolio"
          className="font-['Instrument_Serif'] italic text-[17px] text-[#edebe6] no-underline tracking-[-0.01em]"
        >
          Michael{' '}
          <span className="font-['Geist_Mono'] not-italic text-[#00d4ff] text-[13px]">·</span>
          {' '}Azeez-Adekanmbi
        </Link>

        <div className="flex items-center gap-6">
          {isProjectPage ? (
            <Link
              to="/portfolio"
              className="flex items-center gap-1.5 text-[#c4c2bc] text-[13px] no-underline hover:text-[#00d4ff] transition-colors duration-150"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
              All projects
            </Link>
          ) : (
            <ul className="flex gap-6 list-none m-0 p-0">
              {[
                { label: 'Skills', href: '#skills' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[#c4c2bc] text-[13px] no-underline hover:text-[#edebe6] transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </nav>
  );
}