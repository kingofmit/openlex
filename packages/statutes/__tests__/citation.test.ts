import {
  parseCitation,
  formatCitation,
  validateCitation,
  processCitation,
} from "../src";

describe("parseCitation", () => {
  it("parses '42 U.S.C. § 1983' as USC", () => {
    const result = parseCitation("42 U.S.C. § 1983");
    expect(result.type).toBe("usc");
    expect(result.title).toBe("42");
    expect(result.section).toBe("1983");
    expect(result.jurisdiction).toBe("us");
  });

  it("parses '29 C.F.R. § 785.11' as CFR", () => {
    const result = parseCitation("29 C.F.R. § 785.11");
    expect(result.type).toBe("cfr");
    expect(result.title).toBe("29");
    expect(result.section).toBe("785.11");
    expect(result.jurisdiction).toBe("us");
  });

  it("parses 'Cal. Civ. Code § 1950.5' as state citation", () => {
    const result = parseCitation("Cal. Civ. Code § 1950.5");
    expect(result.type).toBe("state");
    expect(result.jurisdiction).toBe("ca");
    expect(result.section).toBe("1950.5");
  });

  it("parses 'U.S. Const. amend. XIV, § 1' as constitution", () => {
    const result = parseCitation("U.S. Const. amend. XIV, § 1");
    expect(result.type).toBe("constitution");
    expect(result.amendment).toBe("XIV");
    expect(result.section).toBe("1");
    expect(result.jurisdiction).toBe("us");
  });

  it("parses 'Pub. L. No. 117-169' as public law", () => {
    const result = parseCitation("Pub. L. No. 117-169");
    expect(result.type).toBe("public-law");
    expect(result.section).toBe("117-169");
    expect(result.jurisdiction).toBe("us");
  });

  it("parses 'Exec. Order No. 14067' as executive order", () => {
    const result = parseCitation("Exec. Order No. 14067");
    expect(result.type).toBe("exec-order");
    expect(result.section).toBe("14067");
    expect(result.jurisdiction).toBe("us");
  });

  it("returns 'unknown' for unparseable text", () => {
    const result = parseCitation("not a citation at all");
    expect(result.type).toBe("unknown");
  });
});

describe("round-trip: parse -> format(bluebook)", () => {
  it("produces a valid bluebook citation for USC", () => {
    const parsed = parseCitation("42 U.S.C. § 1983");
    const formatted = formatCitation(parsed, "bluebook");
    expect(formatted).toContain("U.S.C.");
    expect(formatted).toContain("1983");
    expect(formatted).toContain("42");
  });

  it("round-trips a CFR citation", () => {
    const parsed = parseCitation("29 C.F.R. § 785.11");
    const formatted = formatCitation(parsed, "bluebook");
    expect(formatted).toContain("C.F.R.");
    expect(formatted).toContain("785.11");
  });

  it("round-trips a constitutional amendment", () => {
    const parsed = parseCitation("U.S. Const. amend. XIV");
    const formatted = formatCitation(parsed, "bluebook");
    expect(formatted).toContain("U.S. Const.");
    expect(formatted).toContain("XIV");
  });
});

describe("formatCitation plain-english", () => {
  it("formats USC as plain English with 'United States Code'", () => {
    const parsed = parseCitation("42 U.S.C. § 1983");
    const plain = formatCitation(parsed, "plain-english");
    expect(plain).toContain("United States Code");
    expect(plain).toContain("1983");
  });

  it("formats 'U.S. Const. amend. XIV' as 'Fourteenth Amendment'", () => {
    const parsed = parseCitation("U.S. Const. amend. XIV");
    const plain = formatCitation(parsed, "plain-english");
    expect(plain).toContain("Fourteenth Amendment");
  });

  it("formats CFR as plain English with 'Code of Federal Regulations'", () => {
    const parsed = parseCitation("29 C.F.R. § 785.11");
    const plain = formatCitation(parsed, "plain-english");
    expect(plain).toContain("Code of Federal Regulations");
  });
});

describe("validateCitation", () => {
  it("validates a valid USC citation as valid", () => {
    const parsed = parseCitation("42 U.S.C. § 1983");
    const result = validateCitation(parsed);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });

  it("reports errors for USC with title > 54", () => {
    const parsed = parseCitation("99 U.S.C. § 1");
    const result = validateCitation(parsed);
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors.some((e) => e.includes("outside valid range"))).toBe(true);
  });

  it("validates a constitution citation as valid", () => {
    const parsed = parseCitation("U.S. Const. amend. XIV, § 1");
    const result = validateCitation(parsed);
    expect(result.valid).toBe(true);
  });

  it("reports errors for unknown citation type", () => {
    const parsed = parseCitation("not a real citation");
    const result = validateCitation(parsed);
    expect(result.valid).toBe(false);
  });
});

describe("processCitation", () => {
  it("parses, formats, and validates in one call", () => {
    const result = processCitation("42 U.S.C. § 1983", "bluebook");
    expect(result.parsed.type).toBe("usc");
    expect(result.formatted).toContain("U.S.C.");
    expect(result.validation.valid).toBe(true);
  });
});
