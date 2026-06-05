"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={
        {
          background:
            "radial-gradient(ellipse at var(--mx, 50%) var(--my, 40%), rgba(149,18,44,0.18) 0%, transparent 60%), linear-gradient(160deg, #100C08 0%, #1a0a0f 50%, #100C08 100%)",
        } as React.CSSProperties
      }
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(245,240,235,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,235,0.8) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full border border-crimson/10 animate-[spin_30s_linear_infinite]" />
      <div className="absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full border border-crimson/8 animate-[spin_20s_linear_infinite_reverse]" />

      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display text-[18vw] font-bold text-white/[0.025] tracking-tighter whitespace-nowrap"
        >
          VELTRO
        </span>
      </div>

      {/* Vertical line accent */}
      <div className="absolute left-12 top-1/4 bottom-1/4 w-px bg-gradient-to-b from-transparent via-crimson/40 to-transparent hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          {/* Label */}
          <div className="flex items-center gap-3 mb-8 animate-[fadeUp_0.6s_ease_forwards]">
            <div className="w-8 h-px bg-crimson" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-crimson">
              Premium Design Studio
            </span>
          </div>

          {/* Heading */}
          <h1
            className="font-display text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] mb-8 animate-[fadeUp_0.7s_0.1s_ease_both]"
            style={{ opacity: 0, animationFillMode: "forwards" }}
          >
            We Design
            <br />
            <em className="not-italic text-gradient">Bold</em>
            <br />
            Futures.
          </h1>

          {/* Tagline */}
          <p
            className="font-body text-warm-white/55 text-lg leading-relaxed max-w-md mb-12 animate-[fadeUp_0.7s_0.2s_ease_both]"
            style={{ opacity: 0, animationFillMode: "forwards" }}
          >
            Veltro Studio crafts premium digital identities, immersive interfaces,
            and unforgettable brand experiences for businesses that refuse to be ordinary.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-wrap gap-4 animate-[fadeUp_0.7s_0.3s_ease_both]"
            style={{ opacity: 0, animationFillMode: "forwards" }}
          >
            <button onClick={() => scrollTo("#portfolio")} className="btn-primary">
              View Our Work
            </button>
            <button onClick={() => scrollTo("#contact")} className="btn-outline">
              Get Started
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex gap-10 mt-16 pt-10 border-t border-white/8 animate-[fadeUp_0.7s_0.4s_ease_both]"
            style={{ opacity: 0, animationFillMode: "forwards" }}
          >
            {[
              { value: "120+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "8yr", label: "Studio Experience" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-semibold text-gradient">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-warm-white/40 tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side visual */}
        <div
          className="hidden lg:flex items-center justify-center animate-[fadeIn_1s_0.5s_ease_both]"
          style={{ opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="relative">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-crimson/20 blur-3xl scale-110" />

            {/* Main card stack */}
            <div className="relative w-80 h-96">
              {/* Card 3 (back) */}
              <div
                className="absolute inset-0 rounded-2xl border border-white/5"
                style={{
                  background: "rgba(149,18,44,0.1)",
                  transform: "rotate(6deg) translateY(8px)",
                }}
              />
              {/* Card 2 (mid) */}
              <div
                className="absolute inset-0 rounded-2xl border border-white/8"
                style={{
                  background: "rgba(149,18,44,0.15)",
                  transform: "rotate(3deg) translateY(4px)",
                }}
              />
              {/* Card 1 (front) */}
              <div
                className="absolute inset-0 rounded-2xl border border-crimson/30 flex flex-col justify-between p-8"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(149,18,44,0.25) 0%, rgba(16,12,8,0.8) 100%)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div>
                  <div className="w-10 h-10 bg-crimson/30 rounded-lg flex items-center justify-center mb-6 border border-crimson/40">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#95122C" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-warm-white mb-2">Brand Identity</h3>
                  <p className="font-body text-sm text-warm-white/40 leading-relaxed">
                    Crafting visual systems that communicate your essence at a glance.
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {["#95122C", "#7a0e24", "#C9A84C"].map((c, i) => (
                      <div
                        key={i}
                        className="w-7 h-7 rounded-full border-2 border-obsidian"
                        style={{ background: c }}
                      />
                    ))}
                  </div>
                  <span className="font-body text-xs text-warm-white/30 tracking-widest uppercase">
                    2024 Project
                  </span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -left-8 bg-obsidian border border-crimson/30 rounded-xl px-5 py-3 crimson-glow"
            >
              <div className="font-body text-xs text-warm-white/50 uppercase tracking-wider">Awarded</div>
              <div className="font-display text-lg font-semibold text-gradient">Design Studio 2024</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-body text-xs text-warm-white/30 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-crimson/60 to-transparent" />
      </div>
    </section>
  );
}
