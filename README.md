# Veltro Studio — Design Agency Homepage

A premium design agency homepage built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🎨 Design Theme

- **Primary color:** `#95122C` (Deep Crimson)
- **Background:** `#100C08` (Obsidian Black)
- **Accent:** `#C9A84C` (Antique Gold)
- **Text:** `#F5F0EB` (Warm White)
- **Fonts:** Cormorant Garamond (display) + Jost (body)

---

## 🛠 Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Utility-first styling |
| Next/Font | Google Fonts optimization |
| CSS Animations | Scroll reveals, hover effects |

---

## 🚀 Getting Started

### Prerequisites

- Node.js **18+**
- npm or yarn

### Installation

```bash
# 1. Clone or extract the project
cd design-agency

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Folder Structure

```
design-agency/
├── app/
│   ├── globals.css        # Global styles, CSS variables, animations
│   ├── layout.tsx         # Root layout with metadata & fonts
│   └── page.tsx           # Main page (assembles all sections)
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile hamburger
│   ├── Hero.tsx           # Hero section with parallax mouse effect
│   ├── Services.tsx       # 4 service cards with scroll reveal
│   ├── Portfolio.tsx      # 6-project grid with hover overlays
│   ├── Contact.tsx        # Contact form with validation + success state
│   └── Footer.tsx         # Footer with nav links
├── public/                # Static assets
├── tailwind.config.ts     # Custom colors, fonts, animations
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## ✅ Features

- **4 complete sections:** Hero, Services, Portfolio, Contact
- **Scroll-reveal animations** on all sections
- **Mouse-tracking gradient** on Hero section
- **Hover effects** on service cards and portfolio thumbnails
- **Contact form** with:
  - Real-time validation
  - Error messages per field
  - Loading state with spinner
  - Success confirmation screen
- **Sticky navbar** with scroll shrink and mobile hamburger menu
- **Fully responsive** — mobile, tablet, desktop
- **SEO metadata** via Next.js Metadata API
- **Google Fonts** loaded via `next/font` (no layout shift)
- **Dark luxury aesthetic** — #100C08 base, #95122C accents

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

---

## 📝 Assumptions & Notes

- The contact form simulates a 1.6s API call — wire it to a real endpoint (e.g. Resend, EmailJS, or your own API route) in production.
- Portfolio thumbnails use CSS-generated visuals (gradients + SVG patterns). Replace with real `<Image>` components pointing to actual project screenshots.
- Brand name "Veltro Studio" is a placeholder — swap in the real agency name.
