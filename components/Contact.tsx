"use client";

import { useEffect, useRef, useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.name.trim() || form.name.trim().length < 2)
      newErrors.name = "Please enter your full name (min 2 characters).";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 20)
      newErrors.message = "Message must be at least 20 characters.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1600));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  const handleReset = () => setStatus("idle");

  const contactInfo = [
    {
      label: "Email Us",
      value: "hello@gmail.com",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: "Call Us",
      value: "+91 xxxxx xxxxx",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
    },
    {
      label: "Location",
      value: "Chennai, Tamil Nadu",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(149,18,44,0.04) 50%, transparent 100%)" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-crimson/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-20 text-center">
          <div className="reveal flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-crimson" />
            <span className="font-body text-xs tracking-[0.25em] uppercase text-crimson">
              Get In Touch
            </span>
            <div className="w-8 h-px bg-crimson" />
          </div>
          <h2 className="reveal font-display text-5xl md:text-6xl font-light leading-tight mb-4">
            Let's Build Something
            <br />
            <span className="italic text-gradient">Remarkable.</span>
          </h2>
          <p className="reveal font-body text-warm-white/50 text-sm leading-relaxed max-w-lg mx-auto">
            Have a project in mind? We'd love to hear about it. Send us a message
            and we'll get back to you within 24 hours.
          </p>
          <div className="divider divider-center reveal" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: info */}
          <div className="lg:col-span-2 space-y-8">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="reveal flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-10 h-10 border border-crimson/30 flex items-center justify-center text-crimson group-hover:bg-crimson/10 transition-colors duration-300 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <div className="font-body text-xs tracking-widest uppercase text-warm-white/35 mb-1">
                    {item.label}
                  </div>
                  <div className="font-body text-warm-white/80 text-sm">{item.value}</div>
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="reveal pt-6 border-t border-white/6">
              <div className="font-body text-xs tracking-widest uppercase text-warm-white/35 mb-4">
                Follow Us
              </div>
              <div className="flex gap-4">
                {["Twitter", "LinkedIn", "Dribbble", "Behance"].map((social) => (
                  <button
                    key={social}
                    className="font-body text-xs text-warm-white/40 hover:text-crimson transition-colors duration-300 tracking-wider"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-3 reveal">
            <div
              className="relative border border-white/6 p-8 md:p-10"
              style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(149,18,44,0.04) 100%)" }}
            >
              {status === "success" ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 border border-crimson/40 flex items-center justify-center mb-6 crimson-glow">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#95122C" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display text-3xl font-medium text-warm-white mb-3">
                    Message Sent!
                  </h3>
                  <p className="font-body text-warm-white/50 text-sm leading-relaxed max-w-sm mb-8">
                    Thank you for reaching out. Our team will review your message and
                    get back to you within 24 hours.
                  </p>
                  <button onClick={handleReset} className="btn-outline">
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-warm-white/40 mb-2">
                      Full Name <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className={`input-field ${errors.name ? "border-crimson/60" : ""}`}
                    />
                    {errors.name && (
                      <p className="mt-1.5 font-body text-xs text-crimson">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-warm-white/40 mb-2">
                      Email Address <span className="text-crimson">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="email@mail.com"
                      className={`input-field ${errors.email ? "border-crimson/60" : ""}`}
                    />
                    {errors.email && (
                      <p className="mt-1.5 font-body text-xs text-crimson">{errors.email}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block font-body text-xs tracking-widest uppercase text-warm-white/40 mb-2">
                      Your Message <span className="text-crimson">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={5}
                      className={`input-field resize-none ${errors.message ? "border-crimson/60" : ""}`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 font-body text-xs text-crimson">{errors.message}</p>
                    )}
                    <p className="mt-1.5 font-body text-xs text-warm-white/25 text-right">
                      {form.message.length} chars
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 12a9 9 0 11-6.219-8.56" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="font-body text-xs text-warm-white/25 text-center leading-relaxed">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
