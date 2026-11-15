import { Jurisdiction } from "./types";

/** All 50 states + DC + territories */
export const JURISDICTIONS: Jurisdiction[] = [
  { id: "us", name: "United States", abbreviation: "US", type: "federal", fips: null, parent: null, capital: "Washington, D.C.", timezone: "America/New_York" },
  { id: "al", name: "Alabama", abbreviation: "AL", type: "state", fips: "01", parent: "us", capital: "Montgomery", timezone: "America/Chicago" },
  { id: "ak", name: "Alaska", abbreviation: "AK", type: "state", fips: "02", parent: "us", capital: "Juneau", timezone: "America/Anchorage" },
  { id: "az", name: "Arizona", abbreviation: "AZ", type: "state", fips: "04", parent: "us", capital: "Phoenix", timezone: "America/Phoenix" },
  { id: "ar", name: "Arkansas", abbreviation: "AR", type: "state", fips: "05", parent: "us", capital: "Little Rock", timezone: "America/Chicago" },
  { id: "ca", name: "California", abbreviation: "CA", type: "state", fips: "06", parent: "us", capital: "Sacramento", timezone: "America/Los_Angeles" },
  { id: "co", name: "Colorado", abbreviation: "CO", type: "state", fips: "08", parent: "us", capital: "Denver", timezone: "America/Denver" },
  { id: "ct", name: "Connecticut", abbreviation: "CT", type: "state", fips: "09", parent: "us", capital: "Hartford", timezone: "America/New_York" },
  { id: "de", name: "Delaware", abbreviation: "DE", type: "state", fips: "10", parent: "us", capital: "Dover", timezone: "America/New_York" },
  { id: "fl", name: "Florida", abbreviation: "FL", type: "state", fips: "12", parent: "us", capital: "Tallahassee", timezone: "America/New_York" },
  { id: "ga", name: "Georgia", abbreviation: "GA", type: "state", fips: "13", parent: "us", capital: "Atlanta", timezone: "America/New_York" },
  { id: "hi", name: "Hawaii", abbreviation: "HI", type: "state", fips: "15", parent: "us", capital: "Honolulu", timezone: "Pacific/Honolulu" },
  { id: "id", name: "Idaho", abbreviation: "ID", type: "state", fips: "16", parent: "us", capital: "Boise", timezone: "America/Boise" },
  { id: "il", name: "Illinois", abbreviation: "IL", type: "state", fips: "17", parent: "us", capital: "Springfield", timezone: "America/Chicago" },
  { id: "in", name: "Indiana", abbreviation: "IN", type: "state", fips: "18", parent: "us", capital: "Indianapolis", timezone: "America/Indiana/Indianapolis" },
  { id: "ia", name: "Iowa", abbreviation: "IA", type: "state", fips: "19", parent: "us", capital: "Des Moines", timezone: "America/Chicago" },
  { id: "ks", name: "Kansas", abbreviation: "KS", type: "state", fips: "20", parent: "us", capital: "Topeka", timezone: "America/Chicago" },
  { id: "ky", name: "Kentucky", abbreviation: "KY", type: "state", fips: "21", parent: "us", capital: "Frankfort", timezone: "America/New_York" },
  { id: "la", name: "Louisiana", abbreviation: "LA", type: "state", fips: "22", parent: "us", capital: "Baton Rouge", timezone: "America/Chicago" },
  { id: "me", name: "Maine", abbreviation: "ME", type: "state", fips: "23", parent: "us", capital: "Augusta", timezone: "America/New_York" },
  { id: "md", name: "Maryland", abbreviation: "MD", type: "state", fips: "24", parent: "us", capital: "Annapolis", timezone: "America/New_York" },
  { id: "ma", name: "Massachusetts", abbreviation: "MA", type: "state", fips: "25", parent: "us", capital: "Boston", timezone: "America/New_York" },
  { id: "mi", name: "Michigan", abbreviation: "MI", type: "state", fips: "26", parent: "us", capital: "Lansing", timezone: "America/Detroit" },
  { id: "mn", name: "Minnesota", abbreviation: "MN", type: "state", fips: "27", parent: "us", capital: "Saint Paul", timezone: "America/Chicago" },
  { id: "ms", name: "Mississippi", abbreviation: "MS", type: "state", fips: "28", parent: "us", capital: "Jackson", timezone: "America/Chicago" },
  { id: "mo", name: "Missouri", abbreviation: "MO", type: "state", fips: "29", parent: "us", capital: "Jefferson City", timezone: "America/Chicago" },
  { id: "mt", name: "Montana", abbreviation: "MT", type: "state", fips: "30", parent: "us", capital: "Helena", timezone: "America/Denver" },
  { id: "ne", name: "Nebraska", abbreviation: "NE", type: "state", fips: "31", parent: "us", capital: "Lincoln", timezone: "America/Chicago" },
  { id: "nv", name: "Nevada", abbreviation: "NV", type: "state", fips: "32", parent: "us", capital: "Carson City", timezone: "America/Los_Angeles" },
  { id: "nh", name: "New Hampshire", abbreviation: "NH", type: "state", fips: "33", parent: "us", capital: "Concord", timezone: "America/New_York" },
  { id: "nj", name: "New Jersey", abbreviation: "NJ", type: "state", fips: "34", parent: "us", capital: "Trenton", timezone: "America/New_York" },
  { id: "nm", name: "New Mexico", abbreviation: "NM", type: "state", fips: "35", parent: "us", capital: "Santa Fe", timezone: "America/Denver" },
  { id: "ny", name: "New York", abbreviation: "NY", type: "state", fips: "36", parent: "us", capital: "Albany", timezone: "America/New_York" },
  { id: "nc", name: "North Carolina", abbreviation: "NC", type: "state", fips: "37", parent: "us", capital: "Raleigh", timezone: "America/New_York" },
  { id: "nd", name: "North Dakota", abbreviation: "ND", type: "state", fips: "38", parent: "us", capital: "Bismarck", timezone: "America/Chicago" },
  { id: "oh", name: "Ohio", abbreviation: "OH", type: "state", fips: "39", parent: "us", capital: "Columbus", timezone: "America/New_York" },
  { id: "ok", name: "Oklahoma", abbreviation: "OK", type: "state", fips: "40", parent: "us", capital: "Oklahoma City", timezone: "America/Chicago" },
  { id: "or", name: "Oregon", abbreviation: "OR", type: "state", fips: "41", parent: "us", capital: "Salem", timezone: "America/Los_Angeles" },
  { id: "pa", name: "Pennsylvania", abbreviation: "PA", type: "state", fips: "42", parent: "us", capital: "Harrisburg", timezone: "America/New_York" },
  { id: "ri", name: "Rhode Island", abbreviation: "RI", type: "state", fips: "44", parent: "us", capital: "Providence", timezone: "America/New_York" },
  { id: "sc", name: "South Carolina", abbreviation: "SC", type: "state", fips: "45", parent: "us", capital: "Columbia", timezone: "America/New_York" },
  { id: "sd", name: "South Dakota", abbreviation: "SD", type: "state", fips: "46", parent: "us", capital: "Pierre", timezone: "America/Chicago" },
  { id: "tn", name: "Tennessee", abbreviation: "TN", type: "state", fips: "47", parent: "us", capital: "Nashville", timezone: "America/Chicago" },
  { id: "tx", name: "Texas", abbreviation: "TX", type: "state", fips: "48", parent: "us", capital: "Austin", timezone: "America/Chicago" },
  { id: "ut", name: "Utah", abbreviation: "UT", type: "state", fips: "49", parent: "us", capital: "Salt Lake City", timezone: "America/Denver" },
  { id: "vt", name: "Vermont", abbreviation: "VT", type: "state", fips: "50", parent: "us", capital: "Montpelier", timezone: "America/New_York" },
  { id: "va", name: "Virginia", abbreviation: "VA", type: "state", fips: "51", parent: "us", capital: "Richmond", timezone: "America/New_York" },
  { id: "wa", name: "Washington", abbreviation: "WA", type: "state", fips: "53", parent: "us", capital: "Olympia", timezone: "America/Los_Angeles" },
  { id: "wv", name: "West Virginia", abbreviation: "WV", type: "state", fips: "54", parent: "us", capital: "Charleston", timezone: "America/New_York" },
  { id: "wi", name: "Wisconsin", abbreviation: "WI", type: "state", fips: "55", parent: "us", capital: "Madison", timezone: "America/Chicago" },
  { id: "wy", name: "Wyoming", abbreviation: "WY", type: "state", fips: "56", parent: "us", capital: "Cheyenne", timezone: "America/Denver" },
  { id: "dc", name: "District of Columbia", abbreviation: "DC", type: "district", fips: "11", parent: "us", capital: null, timezone: "America/New_York" },
  { id: "pr", name: "Puerto Rico", abbreviation: "PR", type: "territory", fips: "72", parent: "us", capital: "San Juan", timezone: "America/Puerto_Rico" },
  { id: "gu", name: "Guam", abbreviation: "GU", type: "territory", fips: "66", parent: "us", capital: "Hagatna", timezone: "Pacific/Guam" },
  { id: "vi", name: "U.S. Virgin Islands", abbreviation: "VI", type: "territory", fips: "78", parent: "us", capital: "Charlotte Amalie", timezone: "America/Virgin" },
];

/** Look up a jurisdiction by abbreviation, name, or ID */
export function findJurisdiction(query: string): Jurisdiction | null {
  const q = query.toLowerCase().trim();
  return JURISDICTIONS.find(
    (j) => j.id === q || j.abbreviation.toLowerCase() === q || j.name.toLowerCase() === q,
  ) ?? null;
}

/** Get all states (excludes federal, territories) */
export function getStates(): Jurisdiction[] {
  return JURISDICTIONS.filter((j) => j.type === "state");
}

/** Get the full hierarchy for a jurisdiction (e.g., city → county → state → federal) */
export function getHierarchy(jurisdictionId: string): Jurisdiction[] {
  const result: Jurisdiction[] = [];
  let current = JURISDICTIONS.find((j) => j.id === jurisdictionId);
  while (current) {
    result.push(current);
    current = current.parent ? JURISDICTIONS.find((j) => j.id === current!.parent) : undefined;
  }
  return result;
}
