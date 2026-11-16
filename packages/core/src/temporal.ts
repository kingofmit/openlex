import { StatuteEntry, StatuteVersion } from "./types";

/** A statute entry with its version history attached */
export interface VersionedStatuteEntry extends StatuteEntry {
  versions: StatuteVersion[];
}

/**
 * Resolve which version of a statute was effective on a given date.
 * Returns the statute entry with values from the correct version,
 * or the current entry if no version history exists or the date is current.
 */
export function resolveAsOfDate(
  entry: VersionedStatuteEntry,
  asOfDate: string,
): StatuteEntry {
  if (entry.versions.length === 0) return entry;

  const target = new Date(asOfDate);

  // Sort versions by effectiveDate descending (newest first)
  const sorted = [...entry.versions].sort(
    (a, b) => new Date(b.effectiveDate).getTime() - new Date(a.effectiveDate).getTime(),
  );

  // Find the version that was effective on the target date
  const applicable = sorted.find((v) => {
    const effective = new Date(v.effectiveDate);
    const expired = v.expirationDate ? new Date(v.expirationDate) : null;
    return effective <= target && (!expired || expired > target);
  });

  if (!applicable) {
    // If no version matches (date is before all versions), return the oldest version
    const oldest = sorted[sorted.length - 1];
    if (oldest) {
      return applyVersion(entry, oldest);
    }
    return entry;
  }

  return applyVersion(entry, applicable);
}

/**
 * Resolve statutes for a given date across multiple entries.
 * Filters out entries not yet effective as of the target date.
 */
export function resolveAllAsOfDate(
  entries: VersionedStatuteEntry[],
  asOfDate: string,
): StatuteEntry[] {
  const target = new Date(asOfDate);

  return entries
    .filter((entry) => {
      // Include entry if it has versions effective before the target date,
      // or if the entry's own effectiveDate is before the target
      if (entry.versions.length > 0) {
        return entry.versions.some((v) => new Date(v.effectiveDate) <= target);
      }
      return !entry.effectiveDate || new Date(entry.effectiveDate) <= target;
    })
    .map((entry) => resolveAsOfDate(entry, asOfDate));
}

/**
 * Get the full version timeline for a statute.
 * Returns versions sorted chronologically (oldest first).
 */
export function getStatuteTimeline(entry: VersionedStatuteEntry): StatuteVersion[] {
  return [...entry.versions].sort(
    (a, b) => new Date(a.effectiveDate).getTime() - new Date(b.effectiveDate).getTime(),
  );
}

/**
 * Get the version that was effective on a specific date.
 */
export function getVersionAtDate(
  entry: VersionedStatuteEntry,
  asOfDate: string,
): StatuteVersion | null {
  const target = new Date(asOfDate);
  const sorted = [...entry.versions].sort(
    (a, b) => new Date(b.effectiveDate).getTime() - new Date(a.effectiveDate).getTime(),
  );
  return sorted.find((v) => {
    const effective = new Date(v.effectiveDate);
    const expired = v.expirationDate ? new Date(v.expirationDate) : null;
    return effective <= target && (!expired || expired > target);
  }) ?? null;
}

/**
 * Check if a statute had any changes between two dates.
 */
export function hasChangedBetween(
  entry: VersionedStatuteEntry,
  startDate: string,
  endDate: string,
): boolean {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return entry.versions.some((v) => {
    const effective = new Date(v.effectiveDate);
    return effective > start && effective <= end;
  });
}

/**
 * Get all statutes that changed between two dates.
 */
export function getChangedStatutes(
  entries: VersionedStatuteEntry[],
  startDate: string,
  endDate: string,
): VersionedStatuteEntry[] {
  return entries.filter((e) => hasChangedBetween(e, startDate, endDate));
}

/** Apply a version's values to a statute entry */
function applyVersion(entry: VersionedStatuteEntry, version: StatuteVersion): StatuteEntry {
  return {
    ...entry,
    effectiveDate: version.effectiveDate,
    monetaryValues: version.monetaryValues.length > 0 ? version.monetaryValues : entry.monetaryValues,
    keyProvisions: version.keyProvisions.length > 0 ? version.keyProvisions : entry.keyProvisions,
  };
}
