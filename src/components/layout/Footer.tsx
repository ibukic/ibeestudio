const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#030306] border-t border-white/[0.05] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-0.5">
          <span className="text-white font-semibold text-[15px] tracking-tight">
            ibee
          </span>
          <span className="w-[5px] h-[5px] rounded-full bg-accent-light mx-0.5 mt-[1px]" />
          <span className="text-white/40 font-light text-[15px] tracking-tight">
            studio
          </span>
        </a>

        {/* Nav */}
        <nav className="flex items-center gap-6" aria-label="Footer navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-white/30 hover:text-white/60 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="text-[12px] text-white/20">
          © {new Date().getFullYear()} ibee studio
        </p>
      </div>
    </footer>
  );
}
