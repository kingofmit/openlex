import { Statute, Regulation } from "@openlex/core";
import { InvertedIndex } from "./inverted-index";

/** Build a search index from statutes and regulations */
export function buildLegalIndex(statutes: Statute[], regulations: Regulation[]): InvertedIndex {
  const index = new InvertedIndex();
  for (const s of statutes) {
    const text = [s.title, s.fullCitation, s.text ?? "", s.topics.join(" ")].join(" ");
    index.add(s.id, text, { type: "statute", jurisdictionId: s.jurisdictionId, citation: s.fullCitation });
  }
  for (const r of regulations) {
    const text = [r.title, r.fullCitation, r.agency, r.text ?? "", r.topics.join(" ")].join(" ");
    index.add(r.id, text, { type: "regulation", jurisdictionId: r.jurisdictionId, citation: r.fullCitation });
  }
  return index;
}
