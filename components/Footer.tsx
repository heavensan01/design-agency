"use client";

export default function Footer() {
  const scrollTo = (href: string) => {
    if (typeof window !== "undefined") {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/6 py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: "linear-gradient(rgba(245,240,235,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,235,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-crimson flex items-center justify-center">
              <span className="font-display text-warm-white text-xs font-bold">V</span>
            </div>
            <span className="font-display text-lg font-semibold tracking-widest text-warm-white uppercase">
              Veltro<span className="text-crimson">.</span>
            </span>
          </div>

          {/* Nav */}
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: "Services", href: "#services" },
              { label: "Portfolio", href: "#portfolio" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="font-body text-xs tracking-widest uppercase text-warm-white/35 hover:text-warm-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Copy */}
          <p className="font-body text-xs text-warm-white/25 tracking-wider">
            © {new Date().getFullYear()} Veltro Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
