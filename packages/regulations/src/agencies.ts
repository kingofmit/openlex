import { GoverningBody } from "@openlex/core";

/** Major federal regulatory agencies */
export const FEDERAL_AGENCIES: GoverningBody[] = [
  { id: "dol", jurisdictionId: "us", name: "Department of Labor", abbreviation: "DOL", type: "department", url: "https://www.dol.gov", parentBody: null, topics: ["employment", "minimum-wage", "overtime"] },
  { id: "eeoc", jurisdictionId: "us", name: "Equal Employment Opportunity Commission", abbreviation: "EEOC", type: "commission", url: "https://www.eeoc.gov", parentBody: null, topics: ["discrimination"] },
  { id: "ftc", jurisdictionId: "us", name: "Federal Trade Commission", abbreviation: "FTC", type: "commission", url: "https://www.ftc.gov", parentBody: null, topics: ["consumer-protection", "privacy"] },
  { id: "hud", jurisdictionId: "us", name: "Department of Housing and Urban Development", abbreviation: "HUD", type: "department", url: "https://www.hud.gov", parentBody: null, topics: ["landlord-tenant", "habitability"] },
  { id: "cfpb", jurisdictionId: "us", name: "Consumer Financial Protection Bureau", abbreviation: "CFPB", type: "agency", url: "https://www.consumerfinance.gov", parentBody: null, topics: ["consumer-protection"] },
  { id: "nlrb", jurisdictionId: "us", name: "National Labor Relations Board", abbreviation: "NLRB", type: "board", url: "https://www.nlrb.gov", parentBody: null, topics: ["employment"] },
  { id: "sba", jurisdictionId: "us", name: "Small Business Administration", abbreviation: "SBA", type: "agency", url: "https://www.sba.gov", parentBody: null, topics: ["business-formation", "business"] },
  { id: "uscis", jurisdictionId: "us", name: "U.S. Citizenship and Immigration Services", abbreviation: "USCIS", type: "agency", url: "https://www.uscis.gov", parentBody: null, topics: ["immigration"] },
  { id: "uspto", jurisdictionId: "us", name: "U.S. Patent and Trademark Office", abbreviation: "USPTO", type: "agency", url: "https://www.uspto.gov", parentBody: null, topics: ["intellectual-property"] },
];

/** Find agencies by topic */
export function findAgencies(topicId: string): GoverningBody[] {
  return FEDERAL_AGENCIES.filter((a) => a.topics.includes(topicId));
}
