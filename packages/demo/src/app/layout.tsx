import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OpenLex — Jurisdiction Mapping Engine",
  description: "Open-source jurisdiction mapping engine for U.S. law",
};

const NAV = [
  { href: "/", label: "Home" },
  { href: "/compare", label: "Compare" },
  { href: "/statutes", label: "Statutes" },
  { href: "/courts", label: "Courts" },
  { href: "/citations", label: "Citations" },
  { href: "/preemption", label: "Preemption" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="grid-bg">
        {/* Top glow line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00e5cc44] to-transparent" />

        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#050a0ecc] border-b border-[#00e5cc15]">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2.5 group">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#00e5cc" strokeWidth="2" className="opacity-80 group-hover:opacity-100 transition-opacity">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
              <span className="font-bold text-[#e0f2f1] tracking-tight">
                Open<span className="text-[#00e5cc]">Lex</span>
              </span>
            </Link>
            <div className="flex items-center gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1.5 text-[13px] text-[#5a8a8a] hover:text-[#00e5cc] rounded-md transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <main className="max-w-7xl mx-auto px-6 py-10 min-h-[calc(100vh-7rem)]">
          {children}
        </main>

        <div className="gradient-line" />
        <footer className="py-6 text-center text-xs text-[#5a8a8a] tracking-wide">
          OpenLex provides legal information, not legal advice. Not a substitute for professional legal counsel.
        </footer>
      </body>
    </html>
  );
}
