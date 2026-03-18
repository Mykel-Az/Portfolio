export default function Footer() {
  return (
    <footer className="border-t border-white/[0.10] py-9">
      <div className="max-w-4xl mx-auto px-6 flex items-center justify-between flex-wrap gap-3">
        <p
          className="text-[11px] text-[#8a8a85]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          © 2025 <span className="text-[#c4c2bc]">Michael Azeez-Adekanmbi</span>
        </p>
        <p
          className="text-[11px] text-[#8a8a85]"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Open to fullstack &amp; backend roles
        </p>
      </div>
    </footer>
  );
}