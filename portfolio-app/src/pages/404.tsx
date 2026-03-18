import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center px-6 text-center">

      {/* Big dim number */}
      <p
        className="text-[clamp(120px,20vw,200px)] leading-none font-bold text-[#1e1e1e] select-none mb-0"
        style={{ fontFamily: 'var(--font-serif)', letterSpacing: '-0.04em' }}
      >
        404
      </p>

      {/* Message */}
      <h1
        className="text-[clamp(24px,3.5vw,36px)] italic tracking-[-0.02em] text-[#edebe6] -mt-4 mb-4"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Page not found
      </h1>

      <p
        className="text-[15px] text-[#8a8a85] font-light max-w-[360px] leading-relaxed mb-10"
      >
        Whatever you were looking for isn't here. It may have moved, or never existed.
      </p>

      <Link
        to="/portfolio"
        className="inline-flex items-center gap-2 px-5 py-[11px] bg-[#00d4ff] text-black text-[12px] tracking-[0.06em] uppercase no-underline transition-all duration-200 hover:bg-[#2ddeff]"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        ← Back to portfolio
      </Link>

    </div>
  );
}