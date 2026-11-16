"use client";

import { useState, useMemo } from "react";
import { StateCourtSystem, Court } from "@openlex/core";

interface Props {
  courtSystemsJson: string;
}

export default function CourtsClient({ courtSystemsJson }: Props) {
  const systems: StateCourtSystem[] = useMemo(
    () => JSON.parse(courtSystemsJson),
    [courtSystemsJson],
  );

  const [selectedState, setSelectedState] = useState("");

  const system = systems.find((s) => s.stateId === selectedState);

  return (
    <div className="space-y-8">
      {/* State Selector */}
      <div className="max-w-sm">
        <label className="block text-xs font-semibold uppercase tracking-widest text-[#00e5cc] mb-2">
          Select State
        </label>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full"
        >
          <option value="">Choose a state...</option>
          {systems
            .sort((a, b) => a.stateName.localeCompare(b.stateName))
            .map((s) => (
              <option key={s.stateId} value={s.stateId}>
                {s.stateName}
              </option>
            ))}
        </select>
      </div>

      {!system ? (
        <div className="glass glow-border rounded-xl p-16 text-center">
          <svg
            className="mx-auto mb-4 opacity-30"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#00e5cc"
            strokeWidth="1.5"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
          <p className="text-[#5a8a8a] text-lg">Select a state to explore its court system.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-2xl font-bold text-[#e0f2f1]">{system.stateName}</h2>
            <div className="flex gap-2">
              <span className="badge badge-purple">
                {system.hasIntermediateAppellate ? "Has Appellate Courts" : "No Intermediate Appellate"}
              </span>
              {system.judicialDistricts && (
                <span className="badge badge-blue">
                  {system.judicialDistricts} Judicial Districts
                </span>
              )}
            </div>
          </div>

          {/* Notes / Notable Quirks */}
          {system.notes.length > 0 && (
            <div className="glass rounded-xl p-5 border-l-2 !border-l-[#f59e0b]">
              <h3 className="text-sm font-semibold text-[#f59e0b] mb-3">Notable Quirks</h3>
              {system.notes.map((note, i) => (
                <p key={i} className="text-sm text-[#b0d4d4] italic leading-relaxed">
                  {note}
                </p>
              ))}
            </div>
          )}

          {/* Court Hierarchy */}
          <div className="flex flex-col items-center space-y-0">
            {/* HIGHEST COURT */}
            <div className="w-full">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-[#a855f7] mb-3 text-center">
                Highest Court
              </h3>
              <div className="glass rounded-xl p-4 !border-[#00e5cc] glow-border max-w-lg mx-auto">
                <CourtCard court={system.supremeCourt} badgeClass="badge-purple" />
              </div>
            </div>

            {/* Connector */}
            <div className="w-[2px] h-[30px] bg-gradient-to-b from-[#00e5cc] to-[rgba(0,229,204,0.2)]" />

            {/* APPELLATE COURTS */}
            {system.appellateCourts.length > 0 && (
              <>
                <div className="w-full">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#3b82f6] mb-3 text-center">
                    Appellate Courts
                  </h3>
                  <div className={`grid gap-3 ${system.appellateCourts.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-lg mx-auto"}`}>
                    {system.appellateCourts.map((court) => (
                      <div key={court.id} className="glass glass-hover glow-border-hover rounded-xl p-4 transition-all">
                        <CourtCard court={court} badgeClass="badge-blue" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-[2px] h-[30px] bg-gradient-to-b from-[#00e5cc] to-[rgba(0,229,204,0.2)]" />
              </>
            )}

            {/* TRIAL COURTS */}
            {system.trialCourts.length > 0 && (
              <>
                <div className="w-full">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#00e5cc] mb-3 text-center">
                    Trial Courts
                  </h3>
                  <div className={`grid gap-3 ${system.trialCourts.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-lg mx-auto"}`}>
                    {system.trialCourts.map((court) => (
                      <div key={court.id} className="glass glass-hover glow-border-hover rounded-xl p-4 transition-all">
                        <CourtCard court={court} badgeClass="badge-cyan" />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* SPECIALIZED COURTS */}
            {system.specializedCourts.length > 0 && (
              <>
                <div className="w-[2px] h-[30px] bg-gradient-to-b from-[#00e5cc] to-[rgba(0,229,204,0.2)]" />
                <div className="w-full">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#f59e0b] mb-3 text-center">
                    Specialized Courts
                  </h3>
                  <div className={`grid gap-3 ${system.specializedCourts.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "max-w-lg mx-auto"}`}>
                    {system.specializedCourts.map((court) => (
                      <div key={court.id} className="glass glass-hover glow-border-hover rounded-xl p-4 transition-all">
                        <CourtCard court={court} badgeClass="badge-amber" />
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CourtCard({ court, badgeClass }: { court: Court; badgeClass: string }) {
  return (
    <div>
      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="font-semibold text-[#e0f2f1] text-sm">{court.name}</div>
          <div className="text-xs text-[#5a8a8a] mt-0.5 font-mono">{court.abbreviation}</div>
        </div>
        <span className={`badge ${badgeClass} shrink-0`}>{court.level}</span>
      </div>
      {court.circuit && (
        <div className="text-xs text-[#5a8a8a] mt-2">Circuit: {court.circuit}</div>
      )}
      {court.district && (
        <div className="text-xs text-[#5a8a8a] mt-1">District: {court.district}</div>
      )}
      {court.url && (
        <a
          href={court.url}
          target="_blank"
          rel="noopener noreferrer"
          className="source-link mt-2 inline-block"
        >
          Website &rarr;
        </a>
      )}
    </div>
  );
}
