import { TopicExtractor } from "./extractor";
import { securityDepositsExtractor } from "./security-deposits";
import { minimumWageExtractor } from "./minimum-wage";
import { nonCompeteExtractor } from "./non-compete";
import { duiExtractor } from "./dui-dwi";
import { llcFormationExtractor } from "./llc-formation";
import { statuteOfLimitationsExtractor } from "./statute-of-limitations";
import { smallClaimsExtractor } from "./small-claims";
import { marijuanaExtractor } from "./marijuana";
import { concealedCarryExtractor } from "./concealed-carry";
import { divorceExtractor } from "./divorce";

export type { TopicExtractor } from "./extractor";
export { securityDepositsExtractor } from "./security-deposits";
export { minimumWageExtractor } from "./minimum-wage";
export { nonCompeteExtractor } from "./non-compete";
export { duiExtractor } from "./dui-dwi";
export { llcFormationExtractor } from "./llc-formation";
export { statuteOfLimitationsExtractor } from "./statute-of-limitations";
export { smallClaimsExtractor } from "./small-claims";
export { marijuanaExtractor } from "./marijuana";
export { concealedCarryExtractor } from "./concealed-carry";
export { divorceExtractor } from "./divorce";

const extractorList: TopicExtractor[] = [
  securityDepositsExtractor,
  minimumWageExtractor,
  nonCompeteExtractor,
  duiExtractor,
  llcFormationExtractor,
  statuteOfLimitationsExtractor,
  smallClaimsExtractor,
  marijuanaExtractor,
  concealedCarryExtractor,
  divorceExtractor,
];

export const ALL_EXTRACTORS: Map<string, TopicExtractor> = new Map(
  extractorList.map((e) => [e.topic, e]),
);

export function getExtractor(topicId: string): TopicExtractor | undefined {
  return ALL_EXTRACTORS.get(topicId);
}
