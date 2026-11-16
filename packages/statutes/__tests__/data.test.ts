import { ALL_TOPICS, getTopicData, getAvailableTopics } from "../src/data";
import { TopicDataFile } from "../src/loader";

describe("ALL_TOPICS", () => {
  it("has 10 topic entries", () => {
    expect(ALL_TOPICS).toHaveLength(10);
  });

  it("each topic has required metadata", () => {
    for (const topic of ALL_TOPICS) {
      expect(topic.topic).toBeTruthy();
      expect(topic.description).toBeTruthy();
      expect(Array.isArray(topic.entries)).toBe(true);
    }
  });
});

describe("topic entry counts", () => {
  it("each topic has 51 entries (50 states + DC)", () => {
    for (const topic of ALL_TOPICS) {
      expect(topic.entries).toHaveLength(51);
    }
  });
});

describe("topic entry fields", () => {
  it("all entries have required fields", () => {
    for (const topic of ALL_TOPICS) {
      for (const entry of topic.entries) {
        expect(entry.jurisdiction).toBeTruthy();
        expect(entry.title).toBeTruthy();
        expect(entry.code).toBeTruthy();
        expect(entry.section).toBeTruthy();
        expect(entry.citation).toBeTruthy();
        expect(entry.sourceUrl).toBeTruthy();
      }
    }
  });

  it("all jurisdiction codes are lowercase 2-letter codes", () => {
    for (const topic of ALL_TOPICS) {
      for (const entry of topic.entries) {
        expect(entry.jurisdiction).toMatch(/^[a-z]{2}$/);
      }
    }
  });

  it("all sourceUrls start with 'https://'", () => {
    for (const topic of ALL_TOPICS) {
      for (const entry of topic.entries) {
        expect(entry.sourceUrl.startsWith("https://")).toBe(true);
      }
    }
  });

  it("no duplicate jurisdiction codes within a topic", () => {
    for (const topic of ALL_TOPICS) {
      const jurisdictions = topic.entries.map((e) => e.jurisdiction);
      const unique = new Set(jurisdictions);
      expect(unique.size).toBe(jurisdictions.length);
    }
  });
});

describe("getTopicData", () => {
  it("returns data for 'minimum-wage'", () => {
    const data = getTopicData("minimum-wage");
    expect(data).toBeDefined();
    expect(data!.topic).toBe("minimum-wage");
    expect(data!.entries.length).toBeGreaterThan(0);
  });

  it("returns undefined for 'nonexistent'", () => {
    const data = getTopicData("nonexistent");
    expect(data).toBeUndefined();
  });
});

describe("getAvailableTopics", () => {
  it("returns 10 topic IDs", () => {
    const topics = getAvailableTopics();
    expect(topics).toHaveLength(10);
    expect(topics).toContain("minimum-wage");
    expect(topics).toContain("security-deposits");
  });
});
