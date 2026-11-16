import { ALL_TOPICS, loadStatuteEntries } from "@allem-law/statutes";
import { JURISDICTIONS } from "@allem-law/statutes";
import { StatuteEntry } from "@allem-law/core";
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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Statute Lookup</h1>
        <p className="text-gray-400 mt-1">
          Browse statutes by state and topic. See citations, key provisions, penalties, and official source links.
        </p>
      </div>
      <StatutesClient
        topicsJson={JSON.stringify(allData)}
        statesJson={JSON.stringify(states)}
      />
    </div>
  );
}
