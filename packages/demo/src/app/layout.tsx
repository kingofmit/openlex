import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OpenLex Demo",
  description: "Open-source jurisdiction mapping engine for U.S. law",
};

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/compare", label: "50-State Compare" },
  { href: "/statutes", label: "Statute Lookup" },
  { href: "/courts", label: "Court Systems" },
  { href: "/citations", label: "Citation Parser" },
  { href: "/preemption", label: "Preemption" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-gray-950 text-gray-100">
        <nav className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              <Link href="/" className="flex items-center gap-2 font-bold text-lg text-white">
                <span className="text-teal-400">&#167;</span> OpenLex
              </Link>
              <div className="flex gap-1">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="px-3 py-1.5 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-gray-800 mt-auto py-6 text-center text-sm text-gray-500">
          OpenLex provides legal information, not legal advice. Not a substitute for professional legal counsel.
        </footer>
      </body>
    </html>
  );
}
