import { ALL_TOPICS, loadStatuteEntries } from "@openlex/statutes";
import { JURISDICTIONS } from "@openlex/statutes";
import { StatuteEntry } from "@openlex/core";
import StatutesClient from "./StatutesClient";

export const metadata = {
  title: "Statute Lookup | OpenLex",
  description: "Browse statutes by state and topic",
};

interface TopicEntries {
  topic: string;
  description: string;
  entries: StatuteEntry[];
}

export default function StatutesPage() {
  const allData: TopicEntries[] = ALL_TOPICS.map((topicFile) => ({
    topic: topicFile.topic,
    description: topicFile.description,
    entries: loadStatuteEntries(topicFile),
  }));

  const states = Object.entries(JURISDICTIONS)
    .filter(([id]) => id.length === 2 && id !== "us" && id !== "pr" && id !== "gu" && id !== "vi" && id !== "as" && id !== "mp")
    .sort(([, a], [, b]) => a.localeCompare(b));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#e0f2f1] glow-text">Statute Lookup</h1>
        <p className="text-[#5a8a8a] mt-2">
          Browse statutes by state and topic. See citations, key provisions, penalties, and official source links.
        </p>
      </div>
      <div className="gradient-line" />
      <StatutesClient
        topicsJson={JSON.stringify(allData)}
        statesJson={JSON.stringify(states)}
      />
    </div>
  );
}
