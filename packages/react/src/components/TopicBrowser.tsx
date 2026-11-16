import { useState } from "react";

export interface TopicBrowserProps {
  topics: Array<{ id: string; name: string; parent: string | null; practiceArea: string }>;
  onSelect?: (topicId: string) => void;
  selectedTopic?: string;
  className?: string;
}

interface PracticeAreaGroup {
  practiceArea: string;
  roots: TopicNode[];
}

interface TopicNode {
  id: string;
  name: string;
  practiceArea: string;
  children: TopicNode[];
}

function buildTree(
  topics: TopicBrowserProps["topics"],
): PracticeAreaGroup[] {
  const childrenMap = new Map<string | null, typeof topics>();
  for (const topic of topics) {
    const list = childrenMap.get(topic.parent) ?? [];
    list.push(topic);
    childrenMap.set(topic.parent, list);
  }

  function buildNode(topic: (typeof topics)[0]): TopicNode {
    const children = (childrenMap.get(topic.id) ?? []).map(buildNode);
    return { id: topic.id, name: topic.name, practiceArea: topic.practiceArea, children };
  }

  const roots = (childrenMap.get(null) ?? []).map(buildNode);

  const grouped = new Map<string, TopicNode[]>();
  for (const root of roots) {
    const list = grouped.get(root.practiceArea) ?? [];
    list.push(root);
    grouped.set(root.practiceArea, list);
  }

  return [...grouped.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([practiceArea, groupRoots]) => ({ practiceArea, roots: groupRoots }));
}

function TopicNodeItem({
  node,
  selectedTopic,
  onSelect,
  expandedTopics,
  toggleExpanded,
}: {
  node: TopicNode;
  selectedTopic: string | undefined;
  onSelect: ((topicId: string) => void) | undefined;
  expandedTopics: Set<string>;
  toggleExpanded: (id: string) => void;
}) {
  const isSelected = selectedTopic === node.id;
  const isExpanded = expandedTopics.has(node.id);
  const hasChildren = node.children.length > 0;

  return (
    <li>
      <span
        role="treeitem"
        tabIndex={0}
        aria-selected={isSelected}
        aria-expanded={hasChildren ? isExpanded : undefined}
        onClick={() => {
          if (onSelect) onSelect(node.id);
          if (hasChildren) toggleExpanded(node.id);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            if (onSelect) onSelect(node.id);
            if (hasChildren) toggleExpanded(node.id);
          }
        }}
        style={{
          cursor: "pointer",
          fontWeight: isSelected ? "bold" : "normal",
          textDecoration: isSelected ? "underline" : "none",
        }}
      >
        {hasChildren && (isExpanded ? "\u25BE " : "\u25B8 ")}
        {node.name}
      </span>
      {hasChildren && isExpanded && (
        <ul role="group" style={{ listStyle: "none", paddingLeft: 16 }}>
          {node.children.map((child) => (
            <TopicNodeItem
              key={child.id}
              node={child}
              selectedTopic={selectedTopic}
              onSelect={onSelect}
              expandedTopics={expandedTopics}
              toggleExpanded={toggleExpanded}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function TopicBrowser({
  topics,
  onSelect,
  selectedTopic,
  className,
}: TopicBrowserProps) {
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(() => {
    // Auto-expand the group containing the selected topic
    if (!selectedTopic) return new Set<string>();
    const selected = topics.find((t) => t.id === selectedTopic);
    if (!selected || !selected.parent) return new Set<string>();
    return new Set([selected.parent]);
  });

  const groups = buildTree(topics);

  const toggleExpanded = (id: string) => {
    setExpandedTopics((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={className} role="tree" aria-label="Legal topics">
      {groups.map((group) => (
        <div key={group.practiceArea}>
          <h3>{group.practiceArea}</h3>
          <ul role="group" style={{ listStyle: "none", paddingLeft: 0 }}>
            {group.roots.map((root) => (
              <TopicNodeItem
                key={root.id}
                node={root}
                selectedTopic={selectedTopic}
                onSelect={onSelect}
                expandedTopics={expandedTopics}
                toggleExpanded={toggleExpanded}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
