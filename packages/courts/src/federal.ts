import { Court } from "@allem-law/core";

/** Federal court system */
export const FEDERAL_COURTS: Court[] = [
  { id: "scotus", jurisdictionId: "us", name: "Supreme Court of the United States", abbreviation: "SCOTUS", level: "supreme", circuit: null, district: null, url: "https://www.supremecourt.gov" },
  // Circuit Courts of Appeals
  { id: "ca1", jurisdictionId: "us", name: "First Circuit Court of Appeals", abbreviation: "1st Cir.", level: "appellate", circuit: "1", district: null, url: null },
  { id: "ca2", jurisdictionId: "us", name: "Second Circuit Court of Appeals", abbreviation: "2d Cir.", level: "appellate", circuit: "2", district: null, url: null },
  { id: "ca3", jurisdictionId: "us", name: "Third Circuit Court of Appeals", abbreviation: "3d Cir.", level: "appellate", circuit: "3", district: null, url: null },
  { id: "ca4", jurisdictionId: "us", name: "Fourth Circuit Court of Appeals", abbreviation: "4th Cir.", level: "appellate", circuit: "4", district: null, url: null },
  { id: "ca5", jurisdictionId: "us", name: "Fifth Circuit Court of Appeals", abbreviation: "5th Cir.", level: "appellate", circuit: "5", district: null, url: null },
  { id: "ca6", jurisdictionId: "us", name: "Sixth Circuit Court of Appeals", abbreviation: "6th Cir.", level: "appellate", circuit: "6", district: null, url: null },
  { id: "ca7", jurisdictionId: "us", name: "Seventh Circuit Court of Appeals", abbreviation: "7th Cir.", level: "appellate", circuit: "7", district: null, url: null },
  { id: "ca8", jurisdictionId: "us", name: "Eighth Circuit Court of Appeals", abbreviation: "8th Cir.", level: "appellate", circuit: "8", district: null, url: null },
  { id: "ca9", jurisdictionId: "us", name: "Ninth Circuit Court of Appeals", abbreviation: "9th Cir.", level: "appellate", circuit: "9", district: null, url: null },
  { id: "ca10", jurisdictionId: "us", name: "Tenth Circuit Court of Appeals", abbreviation: "10th Cir.", level: "appellate", circuit: "10", district: null, url: null },
  { id: "ca11", jurisdictionId: "us", name: "Eleventh Circuit Court of Appeals", abbreviation: "11th Cir.", level: "appellate", circuit: "11", district: null, url: null },
  { id: "cadc", jurisdictionId: "us", name: "D.C. Circuit Court of Appeals", abbreviation: "D.C. Cir.", level: "appellate", circuit: "DC", district: null, url: null },
  { id: "cafc", jurisdictionId: "us", name: "Federal Circuit Court of Appeals", abbreviation: "Fed. Cir.", level: "appellate", circuit: "FC", district: null, url: null },
];

/** State-to-circuit mapping */
export const STATE_CIRCUIT_MAP: Record<string, string> = {
  me: "1", ma: "1", nh: "1", ri: "1", pr: "1",
  ct: "2", ny: "2", vt: "2",
  de: "3", nj: "3", pa: "3", vi: "3",
  md: "4", nc: "4", sc: "4", va: "4", wv: "4",
  la: "5", ms: "5", tx: "5",
  ky: "6", mi: "6", oh: "6", tn: "6",
  il: "7", in: "7", wi: "7",
  ar: "8", ia: "8", mn: "8", mo: "8", ne: "8", nd: "8", sd: "8",
  ak: "9", az: "9", ca: "9", hi: "9", id: "9", mt: "9", nv: "9", or: "9", wa: "9", gu: "9",
  co: "10", ks: "10", nm: "10", ok: "10", ut: "10", wy: "10",
  al: "11", fl: "11", ga: "11",
  dc: "DC",
};

/** Get the federal circuit for a state */
export function getCircuit(stateId: string): string | null {
  return STATE_CIRCUIT_MAP[stateId] ?? null;
}

/** Get the appellate court for a state */
export function getAppellateCourt(stateId: string): Court | null {
  const circuit = getCircuit(stateId);
  if (!circuit) return null;
  return FEDERAL_COURTS.find((c) => c.circuit === circuit && c.level === "appellate") ?? null;
}
