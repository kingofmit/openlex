import { LegalTopic } from "./types";

/** Legal topic taxonomy — major practice areas and subtopics */
export const LEGAL_TOPICS: LegalTopic[] = [
  // Landlord-Tenant
  { id: "landlord-tenant", name: "Landlord-Tenant Law", parent: null, description: "Laws governing rental housing relationships", aliases: ["rental law", "tenant rights", "housing law"], practiceArea: "Real Estate" },
  { id: "security-deposits", name: "Security Deposits", parent: "landlord-tenant", description: "Rules for collecting, holding, and returning security deposits", aliases: ["deposit return", "deposit limits"], practiceArea: "Real Estate" },
  { id: "eviction", name: "Eviction", parent: "landlord-tenant", description: "Legal process for removing tenants", aliases: ["unlawful detainer", "forcible entry", "notice to quit"], practiceArea: "Real Estate" },
  { id: "habitability", name: "Habitability", parent: "landlord-tenant", description: "Warranty of habitability and minimum housing standards", aliases: ["repair obligations", "housing conditions"], practiceArea: "Real Estate" },
  { id: "rent-control", name: "Rent Control", parent: "landlord-tenant", description: "Rent stabilization and control ordinances", aliases: ["rent stabilization", "rent cap"], practiceArea: "Real Estate" },

  // Employment
  { id: "employment", name: "Employment Law", parent: null, description: "Laws governing the employer-employee relationship", aliases: ["labor law", "workplace law", "worker rights"], practiceArea: "Employment" },
  { id: "minimum-wage", name: "Minimum Wage", parent: "employment", description: "State and federal minimum wage requirements", aliases: ["wage floor", "pay minimum"], practiceArea: "Employment" },
  { id: "overtime", name: "Overtime", parent: "employment", description: "Overtime pay requirements and exemptions", aliases: ["overtime pay", "FLSA overtime"], practiceArea: "Employment" },
  { id: "wrongful-termination", name: "Wrongful Termination", parent: "employment", description: "Illegal firing and at-will employment exceptions", aliases: ["unfair dismissal", "illegal firing"], practiceArea: "Employment" },
  { id: "discrimination", name: "Employment Discrimination", parent: "employment", description: "Workplace discrimination protections", aliases: ["workplace discrimination", "equal opportunity"], practiceArea: "Employment" },
  { id: "non-compete", name: "Non-Compete Agreements", parent: "employment", description: "Enforceability of non-competition clauses", aliases: ["restrictive covenants", "non-competition"], practiceArea: "Employment" },

  // Family
  { id: "family", name: "Family Law", parent: null, description: "Laws governing family relationships", aliases: ["domestic relations"], practiceArea: "Family" },
  { id: "divorce", name: "Divorce", parent: "family", description: "Dissolution of marriage", aliases: ["dissolution", "marital dissolution"], practiceArea: "Family" },
  { id: "child-custody", name: "Child Custody", parent: "family", description: "Legal and physical custody of children", aliases: ["custody", "parenting plan", "visitation"], practiceArea: "Family" },
  { id: "child-support", name: "Child Support", parent: "family", description: "Financial support obligations for children", aliases: ["support payments"], practiceArea: "Family" },
  { id: "adoption", name: "Adoption", parent: "family", description: "Legal process of adopting a child", aliases: ["adoption law"], practiceArea: "Family" },

  // Business
  { id: "business", name: "Business Law", parent: null, description: "Laws governing business formation and operations", aliases: ["corporate law", "commercial law"], practiceArea: "Business" },
  { id: "business-formation", name: "Business Formation", parent: "business", description: "LLC, corporation, and partnership formation requirements", aliases: ["incorporation", "LLC formation", "entity formation"], practiceArea: "Business" },
  { id: "contracts", name: "Contracts", parent: "business", description: "Contract formation, enforcement, and disputes", aliases: ["contract law", "agreement law"], practiceArea: "Business" },
  { id: "consumer-protection", name: "Consumer Protection", parent: "business", description: "Laws protecting consumers from unfair practices", aliases: ["consumer rights", "UDAP", "deceptive practices"], practiceArea: "Business" },

  // Criminal
  { id: "criminal", name: "Criminal Law", parent: null, description: "Laws defining crimes and penalties", aliases: ["penal law"], practiceArea: "Criminal" },
  { id: "dui", name: "DUI/DWI", parent: "criminal", description: "Driving under the influence laws", aliases: ["drunk driving", "OUI", "OWI", "impaired driving"], practiceArea: "Criminal" },
  { id: "expungement", name: "Expungement", parent: "criminal", description: "Sealing or clearing criminal records", aliases: ["record sealing", "record clearing"], practiceArea: "Criminal" },
  { id: "marijuana", name: "Marijuana Legality", parent: "criminal", description: "State marijuana legalization status, possession limits, and retail licensing", aliases: ["cannabis", "weed", "pot", "THC"], practiceArea: "Criminal" },
  { id: "concealed-carry", name: "Concealed Carry", parent: "criminal", description: "Concealed weapon permit requirements and restrictions", aliases: ["CCW", "CHL", "concealed handgun", "gun permit", "firearms"], practiceArea: "Criminal" },

  // Immigration
  { id: "immigration", name: "Immigration Law", parent: null, description: "Federal immigration and naturalization laws", aliases: ["visa law", "naturalization"], practiceArea: "Immigration" },

  // Civil Procedure
  { id: "civil-procedure", name: "Civil Procedure", parent: null, description: "Rules governing civil court proceedings", aliases: ["court rules", "litigation procedure"], practiceArea: "Civil Procedure" },
  { id: "small-claims", name: "Small Claims Court", parent: "civil-procedure", description: "Dollar limits, filing procedures, and rules for small claims courts", aliases: ["small claims limit", "small claims court", "minor disputes"], practiceArea: "Civil Procedure" },

  // Personal Injury
  { id: "personal-injury", name: "Personal Injury", parent: null, description: "Tort law for physical and emotional harm", aliases: ["tort law", "negligence", "liability"], practiceArea: "Personal Injury" },
  { id: "statute-of-limitations-pi", name: "Statute of Limitations (PI)", parent: "personal-injury", description: "Time limits for filing personal injury claims", aliases: ["filing deadline", "SOL"], practiceArea: "Personal Injury" },

  // Intellectual Property
  { id: "intellectual-property", name: "Intellectual Property", parent: null, description: "Patents, trademarks, copyrights, and trade secrets", aliases: ["IP law"], practiceArea: "IP" },

  // Privacy & Data
  { id: "privacy", name: "Privacy & Data Protection", parent: null, description: "Data privacy laws and regulations", aliases: ["data privacy", "CCPA", "data protection"], practiceArea: "Privacy" },
];

/** Find topics by keyword search */
export function searchTopics(query: string): LegalTopic[] {
  const q = query.toLowerCase().trim();
  return LEGAL_TOPICS.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.aliases.some((a) => a.toLowerCase().includes(q)),
  );
}

/** Get a topic and all its subtopics */
export function getTopicTree(topicId: string): LegalTopic[] {
  const result: LegalTopic[] = [];
  const root = LEGAL_TOPICS.find((t) => t.id === topicId);
  if (!root) return result;
  result.push(root);
  const children = LEGAL_TOPICS.filter((t) => t.parent === topicId);
  for (const child of children) {
    result.push(...getTopicTree(child.id));
  }
  return result;
}

/** Get all practice areas */
export function getPracticeAreas(): string[] {
  return [...new Set(LEGAL_TOPICS.map((t) => t.practiceArea))].sort();
}
