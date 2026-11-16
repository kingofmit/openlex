import Link from "next/link";
import { ALL_TOPICS, getAvailableTopics } from "@allem-law/statutes";
import { getPracticeAreas } from "@allem-law/core";
import { ALL_PREEMPTION_DOMAINS } from "@allem-law/regulations";
import { STATE_COURT_SYSTEMS } from "@allem-law/courts";

export default function Home() {
  const topics = getAvailableTopics();
  const totalEntries = ALL_TOPICS.reduce((s, t) => s + t.entries.length, 0);
  const preemptionRules = ALL_PREEMPTION_DOMAINS.reduce((s, d) => s + d.rules.length, 0);

  const stats = [
    { value: totalEntries, label: "Statute Entries", sub: "Across all 50 states + DC" },
    { value: topics.length, label: "Legal Topics", sub: "10 practice areas covered" },
    { value: STATE_COURT_SYSTEMS.length, label: "Court Systems", sub: "Complete hierarchies" },
    { value: preemptionRules, label: "Preemption Rules", sub: "8 legal domains" },
  ];

  const features = [
    { href: "/compare", label: "50-State Compare", desc: "Sortable comparison matrices with rates, limits, and structured data across every jurisdiction.", icon: "M3 10h18M3 14h18M3 6h18M3 18h18" },
    { href: "/statutes", label: "Statute Lookup", desc: "Browse real citations, key provisions, penalties, and official government source links.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
    { href: "/courts", label: "Court Systems", desc: "Visual court hierarchies with all the quirks — NY, TX dual courts, MD 2023 renames.", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
    { href: "/citations", label: "Citation Parser", desc: "Parse 15+ citation formats. Output in Bluebook, ALWD, or plain English — in real time.", icon: "M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" },
    { href: "/preemption", label: "Preemption Map", desc: "Floor, ceiling, field, express, and conflict preemption — with key cases and source links.", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  ];

  return (
    <div className="space-y-20">
      {/* Hero */}
      <section className="text-center pt-16 pb-8 relative">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#00e5cc08] rounded-full blur-[100px] pointer-events-none" />

        <div className="relative">
          <div className="flex items-center justify-center gap-3 mb-6">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00e5cc" strokeWidth="1.5" className="opacity-70">
              <path d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
            Open<span className="glow-text text-[#00e5cc]">Lex</span>
          </h1>
          <p className="text-lg text-[#5a8a8a] max-w-xl mx-auto leading-relaxed">
            Open-source jurisdiction mapping engine for U.S. law.<br />
            Real statutes. Real citations. All 50 states.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="glass glow-border rounded-xl p-6 text-center">
            <div className="text-4xl font-bold stat-glow mb-1">{s.value}</div>
            <div className="text-sm font-medium text-[#e0f2f1] mb-1">{s.label}</div>
            <div className="text-xs text-[#5a8a8a]">{s.sub}</div>
          </div>
        ))}
      </section>

      {/* Features */}
      <section>
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#00e5cc] uppercase mb-6">Explore</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f) => (
            <Link
              key={f.href}
              href={f.href}
              className="glass glow-border glass-hover glow-border-hover rounded-xl p-6 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e5cc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-hover:opacity-100 transition-opacity">
                  <path d={f.icon} />
                </svg>
                <h3 className="font-semibold text-[#e0f2f1] group-hover:text-[#00e5cc] transition-colors">{f.label}</h3>
              </div>
              <p className="text-sm text-[#5a8a8a] leading-relaxed">{f.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Topics grid */}
      <section>
        <h2 className="text-xs font-semibold tracking-[0.2em] text-[#00e5cc] uppercase mb-6">Topics Covered</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {ALL_TOPICS.map((t) => (
            <Link
              key={t.topic}
              href={`/compare?topic=${t.topic}`}
              className="glass rounded-lg px-4 py-3 hover:border-[#00e5cc33] transition-all duration-200 group"
            >
              <div className="text-sm font-medium text-[#b0d4d4] group-hover:text-[#00e5cc] transition-colors truncate">
                {t.description.split(",")[0].split("—")[0].split("including")[0].trim()}
              </div>
              <div className="text-xs text-[#5a8a8a] mt-1 font-mono">{t.entries.length} states</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
