import { buildComparisonMatrix, compareTopicAcrossStates } from "../src/compare";
import { loadStatuteEntries } from "../src/loader";
import { getTopicData } from "../src/data";
import { toGeoJSON } from "../src/geojson";
import { comparisonToCSV } from "@allem-law/export";

function loadMinimumWageEntries() {
  const data = getTopicData("minimum-wage");
  if (!data) throw new Error("minimum-wage topic data not found");
  return loadStatuteEntries(data);
}

describe("buildComparisonMatrix", () => {
  it("produces 51 rows for 'minimum-wage'", () => {
    const entries = loadMinimumWageEntries();
    const matrix = buildComparisonMatrix("minimum-wage", entries);
    expect(matrix.rows).toHaveLength(51);
    expect(matrix.topic).toBe("minimum-wage");
    expect(matrix.topicName).toBeTruthy();
  });

  it("produces correct row count with states filter", () => {
    const entries = loadMinimumWageEntries();
    const filtered = entries.filter((e) =>
      ["ca", "ny", "tx"].includes(e.jurisdictionId),
    );
    const matrix = buildComparisonMatrix("minimum-wage", filtered);
    expect(matrix.rows).toHaveLength(3);
  });

  it("has summary with ranges", () => {
    const entries = loadMinimumWageEntries();
    const matrix = buildComparisonMatrix("minimum-wage", entries);
    expect(matrix.summary).toBeDefined();
    expect(matrix.summary.totalStates).toBe(51);
    expect(matrix.summary.ranges).toBeDefined();
    expect(typeof matrix.summary.ranges).toBe("object");
  });

  it("each row has required structure", () => {
    const entries = loadMinimumWageEntries();
    const matrix = buildComparisonMatrix("minimum-wage", entries);
    for (const row of matrix.rows) {
      expect(row.jurisdictionId).toBeTruthy();
      expect(row.jurisdictionName).toBeTruthy();
      expect(row.values).toBeDefined();
      expect(Array.isArray(row.statutes)).toBe(true);
      expect(Array.isArray(row.sourceUrls)).toBe(true);
    }
  });

  it("has columns defined", () => {
    const entries = loadMinimumWageEntries();
    const matrix = buildComparisonMatrix("minimum-wage", entries);
    expect(matrix.columns.length).toBeGreaterThan(0);
    for (const col of matrix.columns) {
      expect(col.key).toBeTruthy();
      expect(col.label).toBeTruthy();
      expect(col.type).toBeTruthy();
    }
  });

  it("throws for unknown topic", () => {
    expect(() => buildComparisonMatrix("nonexistent-topic", [])).toThrow();
  });
});

describe("compareTopicAcrossStates", () => {
  it("filters to specified states", () => {
    const entries = loadMinimumWageEntries();
    const matrix = compareTopicAcrossStates("minimum-wage", entries, ["ca", "ny"]);
    expect(matrix.rows).toHaveLength(2);
  });
});

describe("toGeoJSON", () => {
  it("produces FeatureCollection with FIPS codes", () => {
    const entries = loadMinimumWageEntries();
    const matrix = buildComparisonMatrix("minimum-wage", entries);
    const firstColumn = matrix.columns[0].key;
    const geojson = toGeoJSON(matrix, firstColumn);

    expect(geojson.type).toBe("FeatureCollection");
    expect(Array.isArray(geojson.features)).toBe(true);
    expect(geojson.features.length).toBeGreaterThan(0);

    for (const feature of geojson.features) {
      expect(feature.type).toBe("Feature");
      expect(feature.properties.fips).toBeTruthy();
      expect(feature.properties.stateId).toBeTruthy();
      expect(feature.properties.stateName).toBeTruthy();
    }

    expect(geojson.metadata).toBeDefined();
    expect(geojson.metadata.topic).toBe("minimum-wage");
  });
});

describe("comparisonToCSV", () => {
  it("produces valid CSV with header row", () => {
    const entries = loadMinimumWageEntries();
    const matrix = buildComparisonMatrix("minimum-wage", entries);
    const csv = comparisonToCSV(matrix);

    const lines = csv.split("\n");
    // First line is header
    expect(lines.length).toBeGreaterThan(1);

    const header = lines[0];
    expect(header).toContain("State");

    // Data rows = 51 states + DC
    expect(lines.length).toBe(52); // 1 header + 51 data rows
  });
});
