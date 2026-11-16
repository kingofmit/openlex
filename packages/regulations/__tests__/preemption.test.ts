import {
  findPreemptionByTopic,
  findPreemptionByType,
  getPreemptionSummary,
  getAllPreemptionDomains,
  canStateExceedFederal,
} from "../src";

describe("findPreemptionByTopic", () => {
  it("returns 4+ rules for 'employment'", () => {
    const rules = findPreemptionByTopic("employment");
    expect(rules.length).toBeGreaterThanOrEqual(4);
  });

  it("returns results for 'minimum-wage'", () => {
    const rules = findPreemptionByTopic("minimum-wage");
    expect(rules.length).toBeGreaterThan(0);
  });

  it("returns empty for an obscure/unmatched topic", () => {
    const rules = findPreemptionByTopic("nonexistent-topic-xyz");
    expect(rules).toHaveLength(0);
  });

  it("each rule has required fields", () => {
    const rules = findPreemptionByTopic("employment");
    for (const rule of rules) {
      expect(rule.id).toBeTruthy();
      expect(rule.federalStatute).toBeTruthy();
      expect(rule.federalCitation).toBeTruthy();
      expect(rule.type).toBeTruthy();
      expect(rule.description).toBeTruthy();
      expect(rule.sourceUrl).toBeTruthy();
      expect(typeof rule.stateCanExceed).toBe("boolean");
      expect(Array.isArray(rule.affectedTopics)).toBe(true);
    }
  });
});

describe("FLSA preemption (minimum wage)", () => {
  it("FLSA is a 'floor' type with stateCanExceed: true", () => {
    const rules = findPreemptionByTopic("minimum-wage");
    const flsa = rules.find((r) => r.id === "flsa-minimum-wage");
    expect(flsa).toBeDefined();
    expect(flsa!.type).toBe("floor");
    expect(flsa!.stateCanExceed).toBe(true);
  });
});

describe("ERISA preemption", () => {
  it("ERISA is 'express' preemption type", () => {
    const rules = findPreemptionByTopic("employment");
    const erisa = rules.find((r) => r.id === "erisa-employee-benefits");
    expect(erisa).toBeDefined();
    expect(erisa!.type).toBe("express");
    expect(erisa!.stateCanExceed).toBe(false);
  });
});

describe("getPreemptionSummary", () => {
  it("for minimum-wage mentions 'minimum standard'", () => {
    const summary = getPreemptionSummary("ca", "minimum-wage");
    expect(summary.toLowerCase()).toContain("minimum standard");
  });

  it("returns 'No federal preemption' for unmatched topic", () => {
    const summary = getPreemptionSummary("ca", "nonexistent-topic");
    expect(summary).toContain("No federal preemption");
  });
});

describe("getAllPreemptionDomains", () => {
  it("returns 8 domains", () => {
    const domains = getAllPreemptionDomains();
    expect(domains).toHaveLength(8);
  });

  it("each domain has required fields", () => {
    const domains = getAllPreemptionDomains();
    for (const domain of domains) {
      expect(domain.domain).toBeTruthy();
      expect(domain.description).toBeTruthy();
      expect(Array.isArray(domain.rules)).toBe(true);
      expect(domain.rules.length).toBeGreaterThan(0);
    }
  });
});

describe("canStateExceedFederal", () => {
  it("states can exceed federal minimum wage", () => {
    expect(canStateExceedFederal("ca", "minimum-wage")).toBe(true);
  });
});

describe("findPreemptionByType", () => {
  it("finds floor preemptions", () => {
    const rules = findPreemptionByType("floor");
    expect(rules.length).toBeGreaterThan(0);
    for (const rule of rules) {
      expect(rule.type).toBe("floor");
    }
  });

  it("finds express preemptions", () => {
    const rules = findPreemptionByType("express");
    expect(rules.length).toBeGreaterThan(0);
    for (const rule of rules) {
      expect(rule.type).toBe("express");
    }
  });
});
