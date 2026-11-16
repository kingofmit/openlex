export { securityDeposits } from "./security-deposits";
export { minimumWage } from "./minimum-wage";
export { nonCompete } from "./non-compete";
export { duiDwi } from "./dui-dwi";
export { llcFormation } from "./llc-formation";
export { statuteOfLimitations } from "./statute-of-limitations";
export { smallClaims } from "./small-claims";
export { marijuana } from "./marijuana";
export { concealedCarry } from "./concealed-carry";
export { divorce } from "./divorce";
import { TopicDataFile } from "../loader";
import { securityDeposits } from "./security-deposits";
import { minimumWage } from "./minimum-wage";
import { nonCompete } from "./non-compete";
import { duiDwi } from "./dui-dwi";
import { llcFormation } from "./llc-formation";
import { statuteOfLimitations } from "./statute-of-limitations";
import { smallClaims } from "./small-claims";
import { marijuana } from "./marijuana";
import { concealedCarry } from "./concealed-carry";
import { divorce } from "./divorce";

/** All topic data files */
export const ALL_TOPICS: TopicDataFile[] = [
  securityDeposits,
  minimumWage,
  nonCompete,
  duiDwi,
  llcFormation,
  statuteOfLimitations,
  smallClaims,
  marijuana,
  concealedCarry,
  divorce,
];

/** Get a topic data file by topic ID */
export function getTopicData(topicId: string): TopicDataFile | undefined {
  return ALL_TOPICS.find((t) => t.topic === topicId);
}

/** Get all available topic IDs */
export function getAvailableTopics(): string[] {
  return ALL_TOPICS.map((t) => t.topic);
}

// Version history
export { ALL_VERSIONS, getVersionHistory, getVersionedStatuteIds } from "./versions";
