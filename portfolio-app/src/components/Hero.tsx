import { motion } from 'framer-motion';

// Set this to your photo path when ready, e.g. "/images/michael.jpg"
// Leave as null to hide the avatar slot in production
const AVATAR_SRC: string | null = "/images/Az.jpeg";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const, delay },
  }),
};

const Avatar = () => {
  if (AVATAR_SRC) {
    return (
      <motion.div
        className="w-[280px] h-[340px] flex-shrink-0 overflow-hidden border border-white/[0.08]"
        style={{ borderRadius: '12px' }}
        initial="hidden"
        animate="show"
        custom={0.15}
        variants={fadeUp}
      >
        <img
          src={AVATAR_SRC}
          alt="Michael Azeez-Adekanmbi"
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            const target = e.currentTarget;
            if (import.meta.env.DEV) {
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.style.cssText += 'background:#1a1010;border:1.5px dashed rgba(255,80,80,0.4);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:16px;text-align:center';
                parent.innerHTML = `<span style="font-family:monospace;font-size:11px;color:#884444;letter-spacing:0.08em;text-transform:uppercase">⚠ Image not found</span><span style="font-family:monospace;font-size:10px;color:#663333">${AVATAR_SRC}</span><span style="font-family:monospace;font-size:10px;color:#553333">Put file in: portfolio-app/public${AVATAR_SRC}</span>`;
              }
            }
          }}
        />
      </motion.div>
    );
  }

  if (import.meta.env.DEV) {
    return (
      <motion.div
        className="w-[280px] h-[340px] flex-shrink-0 border border-dashed border-white/[0.15] bg-[#161616] flex flex-col items-center justify-center gap-3"
        style={{ borderRadius: '12px' }}
        initial="hidden"
        animate="show"
        custom={0.15}
        variants={fadeUp}
        title="Set AVATAR_SRC in Hero.tsx to add your photo"
      >
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#4e4e4b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        </svg>
        <span
          className="text-[10px] tracking-[0.1em] uppercase text-[#8a8a85] text-center px-4 leading-relaxed"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Your photo here<br />
          <span className="text-[#333330]">Set AVATAR_SRC</span>
        </span>
      </motion.div>
    );
  }

  return null;
};

export default function Hero() {
  return (
    <section className="pt-40 pb-28" id="hero">
      <div className="max-w-4xl mx-auto px-6">

        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-2.5 mb-10"
          initial="hidden"
          animate="show"
          custom={0}
          variants={fadeUp}
        >
          <span className="w-5 h-px bg-[#00d4ff] block" />
          <span
            className="text-[12px] tracking-[0.14em] uppercase text-[#00d4ff]"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Available for opportunities
          </span>
        </motion.div>

        {/* Two-column layout: left = text, right = avatar */}
        <div className="flex items-start gap-12">

          {/* Left — name, role, bio, CTAs */}
          <div className="flex-1 min-w-0">

            {/* Name */}
            <motion.h1
              className="leading-[0.95] tracking-[-0.025em] mb-2"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(52px, 7.5vw, 84px)',
              }}
              initial="hidden"
              animate="show"
              custom={0.1}
              variants={fadeUp}
            >
              Michael
              <span className="block italic text-[#c4c2bc]">
                Azeez-Adekanmbi
              </span>
            </motion.h1>

            {/* Role */}
            <motion.p
              className="text-[13px] tracking-[0.1em] uppercase text-[#8a8a85] mt-7 mb-8"
              style={{ fontFamily: 'var(--font-mono)' }}
              initial="hidden"
              animate="show"
              custom={0.2}
              variants={fadeUp}
            >
              Fullstack &amp; Backend Engineer
            </motion.p>

            {/* Bio */}
            <motion.p
              className="max-w-[460px] text-[#c4c2bc] text-[17px] leading-[1.85] font-light mb-12"
              initial="hidden"
              animate="show"
              custom={0.3}
              variants={fadeUp}
            >
              Software engineer who builds full-stack products and backend
              systems that are reliable, well-structured, and built to last.
              I'm looking to join a strong engineering team where I can
              contribute meaningfully, grow fast, and work on problems
              that matter.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial="hidden"
              animate="show"
              custom={0.4}
              variants={fadeUp}
            >
              <a
                href="https://docs.google.com/document/d/1PGBwPnyWuggefOWAypqsSBpbThAQ2PMvko92uo3bhfM/edit?tab=t.0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-[11px] bg-[#00d4ff] text-black text-[13px] tracking-[0.06em] uppercase no-underline transition-all duration-200 hover:bg-[#2ddeff]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                View CV ↗
              </a>
              <a
                href="https://github.com/Mykel-Az"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-[10px] text-[#c4c2bc] text-[13px] tracking-[0.06em] uppercase no-underline border border-white/[0.13] transition-all duration-200 hover:border-[#00d4ff]/40 hover:text-[#edebe6] hover:bg-[#00d4ff]/[0.07]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                GitHub ↗
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-[10px] text-[#c4c2bc] text-[13px] tracking-[0.06em] uppercase no-underline border border-white/[0.13] transition-all duration-200 hover:border-[#00d4ff]/40 hover:text-[#edebe6] hover:bg-[#00d4ff]/[0.07]"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                Get in touch
              </a>
            </motion.div>

          </div>

          {/* Right — avatar (hidden on mobile) */}
          <div className="hidden md:block">
            <Avatar />
          </div>

        </div>

      </div>
    </section>
  );
}