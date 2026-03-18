const links = [
  {
    label: 'Email',
    value: 'azeezadekannmbimichael@gmail.com',
    href: 'mailto:azeezadekannmbimichael@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'michael-azeez-adekanmbi',
    href: 'https://linkedin.com/in/michael-azeez-adekanmbi-968b70267',
  },
  {
    label: 'GitHub',
    value: 'github.com/Mykel-Az',
    href: 'https://github.com/Mykel-Az',
  },
  {
    label: 'Twitter / X',
    value: '@Michael_Azed',
    href: 'https://x.com/Michael_Azed',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/[0.10]">
      <div className="max-w-4xl mx-auto px-6">

        <p
          className="text-[12px] tracking-[0.14em] uppercase text-[#8a8a85] mb-3"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Connect
        </p>
        <h2
          className="text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.02em] italic text-[#edebe6] mb-16"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Get in touch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.10] border border-white/[0.10]">
          {links.map(({ label, value, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="block bg-[#141414] px-7 py-7 no-underline group transition-colors duration-150 hover:bg-[#1e1e1e]"
            >
              <p
                className="text-[11px] tracking-[0.12em] uppercase text-[#8a8a85] mb-2"
                style={{ fontFamily: 'var(--font-mono)' }}
              >
                {label}
              </p>
              <p className="text-[15px] text-[#c4c2bc] transition-colors duration-150 group-hover:text-[#00d4ff]">
                {value}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}