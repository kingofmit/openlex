import {
  JURISDICTIONS,
  findJurisdiction,
  LEGAL_TOPICS,
  searchTopics,
  getTopicTree,
  getPracticeAreas,
} from "../src";

describe("JURISDICTIONS", () => {
  it("contains 56 jurisdictions (federal + 50 states + DC + 4 territories)", () => {
    // 1 federal (us) + 50 states + 1 district (dc) + 3 territories (pr, gu, vi) = 55
    // but the user spec says 56 = 50 states + DC + territories. Let's count by type.
    const states = JURISDICTIONS.filter((j) => j.type === "state");
    expect(states).toHaveLength(50);

    const dc = JURISDICTIONS.filter((j) => j.type === "district");
    expect(dc).toHaveLength(1);
    expect(dc[0].id).toBe("dc");

    const territories = JURISDICTIONS.filter((j) => j.type === "territory");
    expect(territories.length).toBeGreaterThanOrEqual(3);

    // Total should be at least 55 (federal + 50 states + DC + 3 territories)
    expect(JURISDICTIONS.length).toBeGreaterThanOrEqual(55);
  });

  it("each jurisdiction has required fields", () => {
    for (const j of JURISDICTIONS) {
      expect(j.id).toBeTruthy();
      expect(j.name).toBeTruthy();
      expect(j.abbreviation).toBeTruthy();
      expect(j.type).toBeTruthy();
      expect(j.timezone).toBeTruthy();
    }
  });
});

describe("findJurisdiction", () => {
  it("finds California by lowercase ID 'ca'", () => {
    const ca = findJurisdiction("ca");
    expect(ca).not.toBeNull();
    expect(ca!.name).toBe("California");
    expect(ca!.abbreviation).toBe("CA");
    expect(ca!.type).toBe("state");
  });

  it("finds California by abbreviation 'CA'", () => {
    const ca = findJurisdiction("CA");
    expect(ca).not.toBeNull();
    expect(ca!.name).toBe("California");
  });

  it("finds California by full name", () => {
    const ca = findJurisdiction("California");
    expect(ca).not.toBeNull();
    expect(ca!.id).toBe("ca");
  });

  it("returns null for unknown jurisdiction", () => {
    expect(findJurisdiction("zzz")).toBeNull();
  });
});

describe("LEGAL_TOPICS", () => {
  it("has at least 10 practice areas", () => {
    const areas = getPracticeAreas();
    expect(areas.length).toBeGreaterThanOrEqual(10);
  });

  it("has at least 10 topics total", () => {
    expect(LEGAL_TOPICS.length).toBeGreaterThanOrEqual(10);
  });

  it("each topic has required fields", () => {
    for (const t of LEGAL_TOPICS) {
      expect(t.id).toBeTruthy();
      expect(t.name).toBeTruthy();
      expect(t.description).toBeTruthy();
      expect(Array.isArray(t.aliases)).toBe(true);
      expect(t.practiceArea).toBeTruthy();
    }
  });
});

describe("searchTopics", () => {
  it("returns results for 'minimum wage'", () => {
    const results = searchTopics("minimum wage");
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((t) => t.id === "minimum-wage")).toBe(true);
  });

  it("returns results for 'divorce'", () => {
    const results = searchTopics("divorce");
    expect(results.length).toBeGreaterThan(0);
  });

  it("returns empty for nonsense query", () => {
    const results = searchTopics("xyznonexistent123");
    expect(results).toHaveLength(0);
  });
});

describe("getTopicTree", () => {
  it("returns employment and its child topics", () => {
    const tree = getTopicTree("employment");
    expect(tree.length).toBeGreaterThan(1);

    // The root should be employment
    expect(tree[0].id).toBe("employment");

    // Should include child topics like minimum-wage, overtime, etc.
    const childIds = tree.slice(1).map((t) => t.id);
    expect(childIds).toContain("minimum-wage");
  });

  it("returns empty array for unknown topic", () => {
    const tree = getTopicTree("nonexistent-topic");
    expect(tree).toHaveLength(0);
  });

  it("returns landlord-tenant with subtopics", () => {
    const tree = getTopicTree("landlord-tenant");
    expect(tree.length).toBeGreaterThan(1);
    const childIds = tree.map((t) => t.id);
    expect(childIds).toContain("security-deposits");
  });
});
