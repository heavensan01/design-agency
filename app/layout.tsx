import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Veltro Studio | Premium Design Agency",
  description:
    "We craft bold digital identities, stunning interfaces, and unforgettable brand experiences for ambitious businesses.",
  keywords: "design agency, UI/UX design, branding, web development, digital marketing",
  openGraph: {
    title: "Veltro Studio | Premium Design Agency",
    description: "Crafting bold digital identities and stunning experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${cormorant.variable} ${jost.variable} bg-obsidian text-warm-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
