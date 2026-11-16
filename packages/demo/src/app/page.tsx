import Link from "next/link";
import { ALL_TOPICS, getAvailableTopics } from "@openlex/statutes";
import { getPracticeAreas } from "@openlex/core";
import { ALL_PREEMPTION_DOMAINS } from "@openlex/regulations";
import { STATE_COURT_SYSTEMS } from "@openlex/courts";

export default function Home() {
  const topics = getAvailableTopics();
  const totalEntries = ALL_TOPICS.reduce((s, t) => s + t.entries.length, 0);
  const preemptionRules = ALL_PREEMPTION_DOMAINS.reduce((s, d) => s + d.rules.length, 0);

  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-teal-400">&#167;</span> OpenLex
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Open-source jurisdiction mapping engine for U.S. law.
          Real statutes, real citations, real source URLs — across all 50 states.
        </p>
      </section>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Statute Entries", value: totalEntries, color: "text-teal-400" },
          { label: "Legal Topics", value: topics.length, color: "text-blue-400" },
          { label: "Court Systems", value: STATE_COURT_SYSTEMS.length, color: "text-purple-400" },
          { label: "Preemption Rules", value: preemptionRules, color: "text-amber-400" },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
            <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          {
            href: "/compare",
            title: "50-State Comparison",
            description: "Compare how all 50 states handle any legal topic. Sortable tables with rates, limits, and structured data.",
            color: "border-teal-500/30 hover:border-teal-500/60",
          },
          {
            href: "/statutes",
            title: "Statute Lookup",
            description: "Browse statutes by state and topic. See citations, key provisions, penalties, and official source links.",
            color: "border-blue-500/30 hover:border-blue-500/60",
          },
          {
            href: "/courts",
            title: "Court Systems",
            description: "Explore state court hierarchies — from trial courts to supreme courts, including all the quirks.",
            color: "border-purple-500/30 hover:border-purple-500/60",
          },
          {
            href: "/citations",
            title: "Citation Parser",
            description: "Parse and format legal citations in Bluebook, ALWD, and plain English. Supports 15+ citation formats.",
            color: "border-amber-500/30 hover:border-amber-500/60",
          },
          {
            href: "/preemption",
            title: "Preemption Map",
            description: "See where federal law preempts state law — floor, ceiling, field, express, and conflict preemption.",
            color: "border-red-500/30 hover:border-red-500/60",
          },
        ].map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className={`block bg-gray-900 border ${card.color} rounded-xl p-6 transition-colors`}
          >
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm text-gray-400">{card.description}</p>
          </Link>
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Topics Covered</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {ALL_TOPICS.map((t) => (
            <Link
              key={t.topic}
              href={`/compare?topic=${t.topic}`}
              className="bg-gray-900 border border-gray-800 hover:border-gray-600 rounded-lg px-3 py-2 text-sm transition-colors"
            >
              <div className="font-medium truncate">{t.description.split(",")[0].split("—")[0]}</div>
              <div className="text-gray-500 text-xs">{t.entries.length} states</div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
