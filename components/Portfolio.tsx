"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Noir Collective",
    category: "Brand Identity",
    year: "2024",
    image: "/nexo.png",
    bg: "linear-gradient(135deg, #2d0a14 0%, #95122C 100%)",
    accent: "#C9A84C",
  },
  {
    title: "Apex Finance",
    category: "Web Development",
    year: "2024",
    image: "/apex.png",
    bg: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)",
    accent: "#95122C",
  },
  {
    title: "Lumina Health",
    category: "UI/UX Design",
    year: "2023",
    image: "/rata.png",
    bg: "linear-gradient(135deg, #1a0a0f 0%, #3d1020 100%)",
    accent: "#f5f0eb",
  },
  {
    title: "Strata Architecture",
    category: "Digital Marketing",
    year: "2023",
    image: "/archi.png",
    bg: "linear-gradient(135deg, #0d0d0d 0%, #2a0d16 100%)",
    accent: "#C9A84C",
  },
  {
    title: "Velour Fashion",
    category: "Brand Identity",
    year: "2023",
    image: "/fashion.png",
    bg: "linear-gradient(135deg, #1f0811 0%, #95122C 60%, #c9a84c 100%)",
    accent: "#f5f0eb",
  },
  {
    title: "Ether Studio",
    category: "Web Development",
    year: "2022",
    image: "/ether.png",
    bg: "linear-gradient(135deg, #0a0608 0%, #1e0a10 100%)",
    accent: "#95122C",
  },
];

export default function Portfolio() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-crimson/5 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-20">
          <div className="reveal flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-crimson" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-crimson">
              Selected Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="reveal font-display text-5xl md:text-6xl font-light leading-tight">
              Work We&apos;re
              <br />
              <span className="italic text-gradient">Proud Of.</span>
            </h2>
            <p className="reveal font-body text-warm-white/50 max-w-sm text-sm leading-relaxed">
              A curated selection of projects where we pushed boundaries and delivered extraordinary results.
            </p>
          </div>
          <div className="divider reveal mt-6" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal portfolio-item cursor-pointer"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              {/* Thumbnail */}
              <div
                className="relative h-64 overflow-hidden"
                style={{ background: project.bg }}
              >
                {/* Show image if provided, else show letter fallback */}
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="font-display text-8xl font-bold opacity-20"
                      style={{ color: project.accent }}
                    >
                      {project.title[0]}
                    </span>
                  </div>
                )}

                {/* Hover overlay — always shown on hover */}
                <div className="overlay">
                  <div>
                    <span className="font-body text-xs tracking-widest uppercase text-crimson mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="font-display text-2xl font-medium text-warm-white mb-4">
                      {project.title}
                    </h3>
                    <button className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-warm-white/70 hover:text-warm-white transition-colors">
                      View Project
                      <svg
                        width="14" height="14" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" strokeWidth="2"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Card footer */}
              <div
                className="border border-t-0 border-white/6 px-5 py-4 flex items-center justify-between"
                style={{ background: "rgba(255,255,255,0.02)" }}
              >
                <div>
                  <h3 className="font-display text-lg font-medium text-warm-white">
                    {project.title}
                  </h3>
                  <span className="font-body text-xs text-warm-white/35 tracking-wider">
                    {project.category}
                  </span>
                </div>
                <span className="font-body text-xs text-warm-white/25 tracking-widest">
                  {project.year}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="reveal text-center mt-14">
          <button className="btn-outline px-12">View All Projects</button>
        </div>
      </div>
    </section>
  );
}
