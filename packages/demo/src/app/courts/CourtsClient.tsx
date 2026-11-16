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
    <div className="space-y-6">
      {/* State Selector */}
      <div className="max-w-sm">
        <label className="block text-sm font-medium text-gray-400 mb-1">Select State</label>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-gray-100 focus:outline-none focus:border-purple-500"
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
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-12 text-center">
          <div className="text-4xl mb-3 text-gray-700">&#9878;</div>
          <p className="text-gray-400">Select a state to explore its court system.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-100">{system.stateName}</h2>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                {system.hasIntermediateAppellate ? "Has Appellate Courts" : "No Intermediate Appellate"}
              </span>
              {system.judicialDistricts && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {system.judicialDistricts} Judicial Districts
                </span>
              )}
            </div>
          </div>

          {/* Notes */}
          {system.notes.length > 0 && (
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-4 space-y-2">
              <h3 className="text-sm font-semibold text-amber-400">Notable Quirks</h3>
              {system.notes.map((note, i) => (
                <p key={i} className="text-sm text-amber-300/70">
                  {note}
                </p>
              ))}
            </div>
          )}

          {/* Court Hierarchy */}
          <div className="space-y-1">
            {/* Supreme Court */}
            <CourtTier
              label="Highest Court"
              courts={[system.supremeCourt]}
              accentColor="purple"
              isTop
            />

            {/* Connector */}
            <div className="flex justify-center">
              <div className="w-px h-6 bg-gray-700" />
            </div>

            {/* Appellate Courts */}
            {system.appellateCourts.length > 0 && (
              <>
                <CourtTier
                  label="Appellate Courts"
                  courts={system.appellateCourts}
                  accentColor="blue"
                />
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gray-700" />
                </div>
              </>
            )}

            {/* Trial Courts */}
            {system.trialCourts.length > 0 && (
              <CourtTier
                label="Trial Courts"
                courts={system.trialCourts}
                accentColor="teal"
              />
            )}

            {/* Specialized Courts */}
            {system.specializedCourts.length > 0 && (
              <>
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gray-700" />
                </div>
                <CourtTier
                  label="Specialized Courts"
                  courts={system.specializedCourts}
                  accentColor="amber"
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function CourtTier({
  label,
  courts,
  accentColor,
  isTop,
}: {
  label: string;
  courts: Court[];
  accentColor: "purple" | "blue" | "teal" | "amber";
  isTop?: boolean;
}) {
  const colorMap = {
    purple: {
      border: "border-purple-500/30",
      bg: "bg-purple-500/5",
      text: "text-purple-400",
      badge: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    blue: {
      border: "border-blue-500/30",
      bg: "bg-blue-500/5",
      text: "text-blue-400",
      badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    teal: {
      border: "border-teal-500/30",
      bg: "bg-teal-500/5",
      text: "text-teal-400",
      badge: "bg-teal-500/10 text-teal-400 border-teal-500/20",
    },
    amber: {
      border: "border-amber-500/30",
      bg: "bg-amber-500/5",
      text: "text-amber-400",
      badge: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    },
  };

  const colors = colorMap[accentColor];

  return (
    <div className={`border ${colors.border} ${colors.bg} rounded-xl p-4`}>
      <h3 className={`text-xs font-semibold uppercase tracking-wide ${colors.text} mb-3`}>
        {label}
      </h3>
      <div className={`grid gap-3 ${courts.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}>
        {courts.map((court) => (
          <div
            key={court.id}
            className={`bg-gray-900 border border-gray-800 rounded-lg p-3 ${
              isTop ? "ring-1 ring-purple-500/20" : ""
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <div className="font-medium text-gray-100 text-sm">{court.name}</div>
                <div className="text-xs text-gray-500 mt-0.5">{court.abbreviation}</div>
              </div>
              <span className={`text-xs px-1.5 py-0.5 rounded border shrink-0 ${colors.badge}`}>
                {court.level}
              </span>
            </div>
            {court.circuit && (
              <div className="text-xs text-gray-500 mt-1">Circuit: {court.circuit}</div>
            )}
            {court.district && (
              <div className="text-xs text-gray-500 mt-1">District: {court.district}</div>
            )}
            {court.url && (
              <a
                href={court.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xs ${colors.text} hover:underline mt-2 inline-block`}
              >
                Website &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
