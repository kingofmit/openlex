// Provider
export { OpenLexProvider } from "./hooks/useOpenLex";
export type { OpenLexConfig, UseQueryResult } from "./hooks/useOpenLex";

// Hooks
export { useStatutes } from "./hooks/useStatutes";
export { useCompare } from "./hooks/useCompare";
export { useCourts } from "./hooks/useCourts";
export { useSearch } from "./hooks/useSearch";
export type { SearchResult } from "./hooks/useSearch";
export { usePreemption } from "./hooks/usePreemption";

// Components
export { JurisdictionPicker } from "./components/JurisdictionPicker";
export type { JurisdictionPickerProps } from "./components/JurisdictionPicker";
export { StatuteCard } from "./components/StatuteCard";
export type { StatuteCardProps } from "./components/StatuteCard";
export { ComparisonTable } from "./components/ComparisonTable";
export type { ComparisonTableProps } from "./components/ComparisonTable";
export { CourtHierarchy } from "./components/CourtHierarchy";
export type { CourtHierarchyProps } from "./components/CourtHierarchy";
export { TopicBrowser } from "./components/TopicBrowser";
export type { TopicBrowserProps } from "./components/TopicBrowser";
export { CitationInput } from "./components/CitationInput";
export type { CitationInputProps, CitationParseResult } from "./components/CitationInput";
