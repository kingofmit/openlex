import { ComparisonMatrix } from "@openlex/core";
import { STATE_FIPS, JURISDICTIONS } from "./jurisdiction-names";

/** GeoJSON Feature for a single state */
export interface StateFeature {
  type: "Feature";
  properties: {
    stateId: string;
    stateName: string;
    fips: string;
    value: string | number | boolean | null;
    valueLabel: string;
    citation: string;
    sourceUrl: string;
    allValues: Record<string, string | number | boolean | null>;
  };
  geometry: null; // geometry omitted — consumers should join on FIPS with their own state boundaries
}

/** GeoJSON FeatureCollection for a comparison matrix */
export interface ComparisonGeoJSON {
  type: "FeatureCollection";
  metadata: {
    topic: string;
    topicName: string;
    valueColumn: string;
    valueLabel: string;
    generatedAt: string;
  };
  features: StateFeature[];
}

/**
 * Convert a comparison matrix to GeoJSON FeatureCollection.
 * Each state is a Feature with all comparison values as properties.
 *
 * The geometry is null — consumers join on `properties.fips` with their own
 * state boundary GeoJSON (e.g., US Census TIGER/Line or Natural Earth).
 * This keeps the data lightweight (~5KB vs ~200KB with embedded boundaries).
 *
 * Compatible with: Mapbox, Leaflet, D3.js, Observable, Datawrapper, kepler.gl
 */
export function toGeoJSON(
  matrix: ComparisonMatrix,
  valueColumn: string,
): ComparisonGeoJSON {
  const column = matrix.columns.find((c) => c.key === valueColumn);
  if (!column) {
    throw new Error(
      `Column "${valueColumn}" not found. Available: ${matrix.columns.map((c) => c.key).join(", ")}`,
    );
  }

  const features: StateFeature[] = matrix.rows
    .filter((row) => STATE_FIPS[row.jurisdictionId]) // only states with FIPS
    .map((row) => ({
      type: "Feature" as const,
      properties: {
        stateId: row.jurisdictionId,
        stateName: row.jurisdictionName,
        fips: STATE_FIPS[row.jurisdictionId],
        value: row.values[valueColumn] ?? null,
        valueLabel: column.label,
        citation: row.statutes[0] ?? "",
        sourceUrl: row.sourceUrls[0] ?? "",
        allValues: row.values,
      },
      geometry: null,
    }));

  return {
    type: "FeatureCollection",
    metadata: {
      topic: matrix.topic,
      topicName: matrix.topicName,
      valueColumn,
      valueLabel: column.label,
      generatedAt: matrix.generatedAt,
    },
    features,
  };
}

/**
 * Convert GeoJSON to a string suitable for file output.
 * Produces compact but readable JSON.
 */
export function geoJSONToString(geojson: ComparisonGeoJSON): string {
  return JSON.stringify(geojson, null, 2);
}
