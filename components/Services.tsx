"use client";

import { useEffect, useRef } from "react";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8M12 8l4 4-4 4" />
      </svg>
    ),
    title: "UI/UX Design",
    description:
      "We design intuitive, human-centred digital experiences that convert visitors into loyal customers. Every pixel is intentional.",
    tags: ["Research", "Wireframing", "Prototyping"],
    number: "01",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Web Development",
    description:
      "Blazing-fast, responsive websites and web applications built with modern technology stacks and clean, maintainable code.",
    tags: ["Next.js", "React", "TypeScript"],
    number: "02",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: "Brand Identity",
    description:
      "From logo design to complete visual systems — we build brand identities that stand out and leave a lasting impression.",
    tags: ["Logo Design", "Style Guide", "Collateral"],
    number: "03",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Digital Marketing",
    description:
      "Data-driven campaigns that amplify your brand, grow your audience, and deliver measurable ROI across every channel.",
    tags: ["SEO", "Social Media", "Analytics"],
    number: "04",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-crimson/5 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <div className="reveal flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-crimson" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-crimson">
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="reveal font-display text-5xl md:text-6xl font-light leading-tight">
              Services Built for
              <br />
              <span className="italic text-gradient">Impact.</span>
            </h2>
            <p className="reveal font-body text-warm-white/50 max-w-sm text-sm leading-relaxed md:text-right">
              We offer a full spectrum of creative services, each delivered with
              precision and a relentless focus on results.
            </p>
          </div>
          <div className="divider reveal mt-6" />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 stagger">
          {services.map((service) => (
            <div
              key={service.title}
              className="reveal group relative border border-white/6 p-8 card-hover cursor-default"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(149,18,44,0.03) 100%)",
              }}
            >
              {/* Number watermark */}
              <div className="absolute top-6 right-8 font-display text-7xl font-bold text-white/[0.03] select-none leading-none group-hover:text-crimson/5 transition-colors duration-500">
                {service.number}
              </div>

              {/* Top row */}
              <div className="flex items-start gap-5 mb-6">
                <div className="flex-shrink-0 w-12 h-12 border border-crimson/30 flex items-center justify-center text-crimson group-hover:bg-crimson/10 transition-colors duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-medium text-warm-white mb-1">
                    {service.title}
                  </h3>
                  <div className="w-8 h-px bg-crimson/50 group-hover:w-16 transition-all duration-500" />
                </div>
              </div>

              {/* Description */}
              <p className="font-body text-warm-white/50 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-xs tracking-wider uppercase px-3 py-1 border border-white/8 text-warm-white/40 group-hover:border-crimson/20 group-hover:text-warm-white/60 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-crimson/0 group-hover:text-crimson transition-all duration-300 translate-x-0 group-hover:translate-x-1">
                <span className="font-body text-xs tracking-widest uppercase">Learn more</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
