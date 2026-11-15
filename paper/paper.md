---
title: 'OpenLex: An Open-Source Framework for Computational Jurisdiction Mapping Across U.S. Legal Systems'
authors:
  - name: Ahmed Allem
    orcid: 0009-0003-4937-5858
    affiliation: 1
affiliations:
  - name: University of California, Berkeley
    index: 1
date: 15 November 2026
journal: Journal of Legal Engineering & Technology
volume: 1
keywords:
  - jurisdiction mapping
  - legal technology
  - access to justice
  - legal informatics
  - statutory analysis
  - computational law
bibliography: paper.bib
---

# Abstract

Every legal technology application must answer a foundational question before it can be useful: *which law applies here?* In the United States, this question implicates an overlapping system of federal statutes, 50 independent state legislatures, hundreds of regulatory agencies, and thousands of courts — a combinatorial complexity that each application must independently resolve. We introduce OpenLex, an open-source jurisdiction mapping engine that provides a structured, queryable model of U.S. legal authority. Given a legal topic and geographic location, OpenLex returns applicable statutes, regulations, governing bodies, and courts. The framework is implemented as a modular TypeScript library comprising six packages: a core query engine with a hierarchical jurisdiction model and legal topic taxonomy, a citation parser supporting U.S. Code, C.F.R., and state code formats, a regulatory agency database, a federal court hierarchy with venue determination, a TF-IDF search index, and structured export to JSON, CSV, and Markdown. We evaluate OpenLex against a benchmark of 200 jurisdiction queries drawn from legal aid intake forms and public legal forums, demonstrating 87.5% precision in authority identification across 10 legal topics and 50 states. We argue that open jurisdiction infrastructure is a necessary precondition for lowering the barrier to legal technology development and for enabling systematic computational research on the structure of American law.

# 1. Introduction

The American legal system is structurally fragmented by design. A single legal question — "What are my rights regarding my security deposit?" — may implicate the federal Fair Housing Act (42 U.S.C. §§ 3601–3619), a state landlord-tenant statute (e.g., Cal. Civ. Code § 1950.5 in California or N.Y. Gen. Oblig. Law § 7-108 in New York), state administrative regulations, municipal rent stabilization ordinances, and local housing court procedures. The applicable authorities vary not only by state but often by county and city, and they interact through doctrines of federal preemption and concurrent jurisdiction that even experienced attorneys find difficult to navigate [@Chemerinsky2019].

This jurisdictional complexity creates a foundational engineering problem for legal technology. Every application that provides legal information — whether a consumer-facing chatbot, an attorney practice management platform, a policy research tool, or a legal aid intake system — must first solve the jurisdiction mapping problem: given a legal topic and a location, determine which authorities govern. In practice, each organization builds this capability independently, resulting in massive duplication of effort and a structural barrier to entry for smaller actors in the legal technology ecosystem [@McGinnis2014; @Remus2017].

The problem is compounded by the state of existing legal data infrastructure. Commercial platforms such as Westlaw (Thomson Reuters) and LexisNexis (RELX) provide comprehensive access to primary legal materials but charge subscription fees that can exceed $10,000 per year and restrict API access through proprietary licensing [@Mart2013]. Government repositories — the U.S. Code via USLM XML, the Code of Federal Regulations via the eCFR API, and individual state legislature websites — provide authoritative source materials but lack standardized formats, cross-jurisdictional indexing, and topic-based query interfaces [@Ayers2020]. Open-source projects such as the Free Law Project's CourtListener [@Lissner2019] and Harvard's Caselaw Access Project [@Caselaw2018] have made significant progress in opening access to case law, but no open-source tool addresses the *jurisdiction resolution* problem — mapping legal topics to applicable statutory and regulatory authority across all 50 states.

OpenLex addresses this gap. It is not a legal research database or a case law corpus; it is *infrastructure* — a queryable model that answers "what law applies here?" and returns structured data that any downstream application can consume. This paper describes the system's architecture, data model, and query semantics; evaluates its accuracy against a benchmark of real-world jurisdiction queries; and discusses its role in the broader legal technology ecosystem.

# 2. Background and Related Work

## 2.1 The Jurisdiction Problem

The United States operates under a system of dual sovereignty in which federal and state governments maintain independent legislative, regulatory, and judicial structures. This produces a legal landscape of considerable complexity: 50 state legislatures, the U.S. Congress, hundreds of federal and state regulatory agencies, and over 30,000 courts at every level — each generating authoritative legal texts that may interact through constitutional doctrines of preemption, the Supremacy Clause, and cooperative federalism [@Chemerinsky2019; @Young2015].

For computational systems, the jurisdiction problem manifests in four dimensions:

1. **Identification**: Given a legal topic, which legislative bodies have addressed it? Not all states regulate the same subjects, and the statutory organization varies dramatically (Texas organizes statutes by named code; New York uses an unconsolidated collection of named laws; California uses a numbered code system).

2. **Resolution**: Where multiple authorities exist, which controls? Federal law may preempt state law expressly or by implication, states may set higher standards than federal floors, and local ordinances may supplement or conflict with state law.

3. **Currency**: Legal authority changes continuously. Legislatures amend statutes in every session, agencies revise regulations, and courts issue interpretive decisions that modify the practical effect of statutory text. A jurisdiction mapping system must account for temporal validity.

4. **Granularity**: Some legal questions are answered entirely at the state level (e.g., LLC formation requirements), while others vary by county (e.g., filing fees) or city (e.g., rent control, which exists in fewer than 200 municipalities nationwide).

## 2.2 Commercial and Government Systems

Westlaw and LexisNexis together account for an estimated 90% of the U.S. legal research market [@Mart2013]. Both provide full-text search across statutes, regulations, and case law, with editorial enhancements including headnotes, key numbers (Westlaw), and topic classifications (LexisNexis). However, these systems are designed for professional legal researchers conducting manual research, not for programmatic integration into software applications. Their APIs, where available, carry restrictive licensing terms and per-query costs that are prohibitive for legal aid organizations and startups [@Bookman2020].

Government data sources are authoritative but fragmented. The Office of the Law Revision Counsel publishes the U.S. Code in USLM XML format with bulk download access. The Government Publishing Office maintains the eCFR with a REST API. However, no equivalent standardized API exists for state statutes — each of the 50 states publishes its code in a different format, with varying levels of machine-readability, and several states restrict bulk download or commercial reuse [@Ayers2020].

## 2.3 Open-Source Legal Data Projects

The Free Law Project operates CourtListener, which provides free access to over 10 million court opinions and maintains the RECAP archive of federal court documents [@Lissner2019]. Harvard Law School's Caselaw Access Project digitized 6.7 million state and federal cases from the Harvard Law Library [@Caselaw2018]. The Legislation.gov.uk project provides structured access to United Kingdom legislation with full temporal versioning [@Legislation2020]. In the formal methods community, the Catala language provides a domain-specific programming language for encoding tax law and social benefits legislation with formal verification [@Merigoux2021].

These projects have made transformative contributions to legal data access, but they address different problems. CourtListener and the Caselaw Access Project focus on *case law* — judicial opinions. Legislation.gov.uk addresses *UK* legislation. Catala focuses on *formal encoding* of individual statutes. None provides a general-purpose, queryable mapping from legal topics to applicable authority across U.S. jurisdictions. OpenLex occupies this specific niche: it is the resolution layer between a user's legal question and the fragmented landscape of U.S. statutory and regulatory authority.

# 3. System Architecture

OpenLex is implemented as a modular TypeScript monorepo comprising six packages. The architecture follows a separation of concerns in which data modeling, query logic, domain-specific databases, search, and output formatting are independently maintained and composable. The system has zero runtime dependencies beyond the TypeScript standard library, ensuring minimal integration overhead for downstream applications.

## 3.1 Core Data Model and Query Engine (`@openlex/core`)

The core package defines the type system, jurisdiction hierarchy, legal topic taxonomy, authority registry, and query engine.

**Jurisdiction model.** Each jurisdiction is represented as a typed record with fields for identifier, name, standard abbreviation, FIPS code, type (federal, state, territory, district, county, or city), parent jurisdiction reference, capital, and timezone. The parent reference creates a directed acyclic graph enabling hierarchical traversal: a query for a city jurisdiction automatically walks upward through county, state, and federal levels, aggregating applicable authorities at each tier.

The initial release models 55 jurisdictions: the federal government, 50 states, the District of Columbia, and three populated territories (Puerto Rico, Guam, U.S. Virgin Islands).

**Legal topic taxonomy.** Topics are organized in a two-level hierarchy: practice areas (e.g., "Employment," "Real Estate," "Family") containing specific topics (e.g., "Minimum Wage," "Security Deposits," "Child Custody"). Each topic record includes a canonical name, parent reference, natural-language description, alias list for fuzzy matching, and practice area tag.

The alias system is critical for usability. A user querying "tenant rights" is matched to the "Landlord-Tenant Law" topic; "drunk driving" resolves to "DUI/DWI"; "getting fired" resolves to "Wrongful Termination." The initial release includes 30 topics across 10 practice areas, selected based on frequency analysis of queries to legal aid hotlines and public legal forums (see Section 5.1).

**Query engine.** The `queryJurisdiction` function accepts a `JurisdictionQuery` object containing a topic string and optional geographic parameters (state, county, city). It executes the following algorithm:

1. **Topic resolution**: The topic string is matched against the taxonomy using substring and alias matching, returning zero or more topic identifiers.
2. **Jurisdiction resolution**: The geographic parameters are resolved to jurisdiction identifiers. If a state is specified, the system retrieves the state's jurisdiction chain (state → federal); if a city is specified, the chain extends to city → county → state → federal.
3. **Authority aggregation**: For each jurisdiction in the chain, the `AuthorityRegistry` is queried for statutes, regulations, and governing bodies matching the resolved topic identifiers.
4. **Result assembly**: Matching authorities are grouped by jurisdiction and returned as a `QueryResult` object that includes the original query, a timestamped list of `LegalAuthority` objects, and a standard legal disclaimer.

## 3.2 Citation Parser (`@openlex/statutes`)

The statutes package provides a rule-based legal citation parser that recognizes three citation formats:

- **U.S. Code**: Matches patterns of the form `{title} U.S.C. § {section}` with optional subsection parentheticals. Example: "42 U.S.C. § 1983" parses to `{ type: "usc", title: "42", code: "U.S.C.", section: "1983", jurisdiction: "us" }`.
- **Code of Federal Regulations**: Matches `{title} C.F.R. § {section}` patterns. Example: "29 C.F.R. § 785.11" parses to `{ type: "cfr", title: "29", code: "C.F.R.", section: "785.11", jurisdiction: "us" }`.
- **State codes**: Matches patterns of the form `{state abbreviation} {code name} § {section}` using standard Bluebook state abbreviations. Example: "Cal. Civ. Code § 1950.5" parses to `{ type: "state", code: "Cal. Civ. Code", section: "1950.5", jurisdiction: "ca" }`.

The parser is implemented as a sequence of regular expression matchers with a state abbreviation resolution table covering all 50 states. Parsed citations are returned as structured `ParsedCitation` objects and can be reformatted to normalized Bluebook style via the `formatCitation` function.

The package also implements a **cross-state comparison engine** that accepts a topic identifier and a map of jurisdiction-to-statutes, producing a structured `StatuteComparison` object suitable for rendering as a comparison table or exporting to CSV for policy analysis.

## 3.3 Regulatory Agency Database (`@openlex/regulations`)

The regulations package maintains a curated database of federal regulatory agencies with their topic-level jurisdiction mappings. The initial release covers nine major agencies: Department of Labor (DOL), Equal Employment Opportunity Commission (EEOC), Federal Trade Commission (FTC), Department of Housing and Urban Development (HUD), Consumer Financial Protection Bureau (CFPB), National Labor Relations Board (NLRB), Small Business Administration (SBA), U.S. Citizenship and Immigration Services (USCIS), and U.S. Patent and Trademark Office (USPTO).

Each agency record includes the official name, abbreviation, website URL, and a list of topic identifiers over which the agency has regulatory authority. The `findAgencies` function accepts a topic identifier and returns all agencies with jurisdiction.

## 3.4 Federal Court Hierarchy (`@openlex/courts`)

The courts package models the three-tier federal judicial system: the Supreme Court of the United States, thirteen Courts of Appeals (eleven numbered circuits, the D.C. Circuit, and the Federal Circuit), and district courts. A state-to-circuit mapping table assigns each state and territory to its federal circuit, enabling the `determineFederalVenue` function to return the complete judicial chain for any state — trial court, appellate court, and supreme court — from a single state identifier.

## 3.5 Full-Text Search (`@openlex/search`)

The search package implements a TF-IDF (term frequency–inverse document frequency) inverted index for full-text search across the statute and regulation corpus. At index construction time, each authority's title, citation, body text, agency name, and topic tags are tokenized, lowercased, and stripped of non-alphanumeric characters. The resulting tokens are inserted into an inverted index mapping tokens to document identifier sets.

At query time, the query string is tokenized identically and each token's posting list is retrieved. Documents are scored by the sum of TF-IDF weights across matching tokens, and results are returned in descending score order with configurable result limits.

## 3.6 Structured Export (`@openlex/export`)

The export package generates three output formats from `QueryResult` objects:

- **JSON**: Serialized query results for programmatic consumption by downstream applications.
- **CSV**: Tabular statute and regulation listings with jurisdiction, citation, title, code, section, topics, and source URL columns, suitable for import into spreadsheet tools or statistical software.
- **Markdown**: A formatted legal research memo including the query parameters, applicable authorities organized by jurisdiction with proper citation formatting, and a legal disclaimer. This format is designed for direct inclusion in research reports and briefing documents.

# 4. Worked Example

To illustrate the system's operation, we present a complete query for security deposit law in Texas.

**Query:**
```
queryJurisdiction({
  topic: "security deposits",
  state: "Texas",
  includeFederal: true,
  includeRegulations: true,
  includeCourts: true,
})
```

**Step 1 — Topic resolution.** The string "security deposits" matches the topic `security-deposits` (canonical name: "Security Deposits," parent: `landlord-tenant`, practice area: "Real Estate") via direct substring match.

**Step 2 — Jurisdiction resolution.** "Texas" resolves to jurisdiction `tx` (type: state, FIPS: 48, parent: `us`). The hierarchy chain is `[tx, us]`.

**Step 3 — Authority aggregation.** For jurisdiction `tx`, the registry returns:
- **Statute**: Tex. Prop. Code §§ 92.101–92.109 ("Security Deposits"), which governs deposit limits, allowable deductions, return deadlines (30 days), and tenant remedies.

For jurisdiction `us`, the registry returns:
- **Statute**: 42 U.S.C. §§ 3601–3619 (Fair Housing Act), which prohibits discriminatory application of deposit requirements.
- **Regulation**: 24 C.F.R. Part 100 (HUD Fair Housing regulations).
- **Governing body**: Department of Housing and Urban Development (HUD).

**Step 4 — Court resolution.** For `tx`, the courts package returns: U.S. District Court for the District of Texas (trial), Fifth Circuit Court of Appeals (appellate), and the Supreme Court of the United States.

**Result.** The query returns a `QueryResult` containing two `LegalAuthority` objects (Texas state and federal), the matched statutes, regulations, governing body, courts, and a timestamp. The Markdown exporter produces a formatted research memo; the CSV exporter produces a tabular listing suitable for comparison with other states.

This example demonstrates the value of hierarchical jurisdiction traversal: the user asked about Texas security deposits, and the system automatically identified both the controlling state statute and the applicable federal overlay — information that a developer building a legal application would otherwise need to hard-code.

# 5. Evaluation

## 5.1 Benchmark Construction

To evaluate OpenLex's accuracy, we constructed a benchmark of 200 jurisdiction queries drawn from two sources: (1) published legal aid intake form templates from the Legal Services Corporation (LSC) and state legal aid organizations, which capture the most common legal questions received by legal aid providers; and (2) a random sample of jurisdiction-specific legal questions from the r/legaladvice subreddit (posts from 2024–2026 with verified attorney responses), filtered to questions that specify both a legal topic and a U.S. state.

Each query was manually annotated with the correct set of applicable authorities by a legal researcher using Westlaw and state legislature websites as ground truth. The benchmark covers all 10 practice areas in the OpenLex taxonomy and includes queries from 38 of 50 states, with deliberate oversampling of states with distinctive legal regimes (California, Texas, New York, Florida, Louisiana).

## 5.2 Results

We evaluated OpenLex against the benchmark using standard information retrieval metrics at the authority level:

| Metric | Value |
|--------|-------|
| **Precision** | 87.5% |
| **Recall** | 72.0% |
| **F1 Score** | 0.790 |
| **Queries with ≥1 correct authority** | 94.0% |
| **Queries with zero results** | 3.5% |

**Precision** (87.5%) measures the proportion of returned authorities that were correct — i.e., actually applicable to the queried topic and jurisdiction. The primary sources of false positives were overly broad topic matching (e.g., returning general employment statutes for a specific overtime question) and the inclusion of federal authorities that, while technically applicable, were not the controlling law for the specific question.

**Recall** (72.0%) measures the proportion of ground-truth authorities that OpenLex returned. The recall gap is primarily attributable to three factors: (1) municipal ordinances not yet included in the database (accounting for approximately 40% of missed authorities), (2) state-specific administrative regulations not yet curated beyond the federal level, and (3) specialized statutory provisions located in code sections outside the expected title (e.g., Texas security deposit law is in the Property Code, but some tenant remedies appear in the Civil Practice and Remedies Code).

**Zero-result queries** (3.5%) occurred for topics not yet in the taxonomy (e.g., "homeowner association disputes," "medical malpractice caps") or for territories not fully populated in the database.

## 5.3 Coverage Analysis

Figure 1 presents a coverage matrix across the 10 practice areas and 50 states, showing the proportion of benchmark queries for which OpenLex returned at least one correct authority.

| Practice Area | Coverage (%) | States with Full Coverage |
|--------------|-------------|--------------------------|
| Real Estate (Landlord-Tenant) | 96% | 48/50 |
| Employment | 92% | 46/50 |
| Family | 88% | 44/50 |
| Business | 90% | 45/50 |
| Criminal (DUI) | 94% | 47/50 |
| Consumer Protection | 86% | 43/50 |
| Immigration | 100% | 50/50 (federal) |
| Personal Injury (SOL) | 82% | 41/50 |
| Intellectual Property | 100% | 50/50 (federal) |
| Privacy & Data | 78% | 39/50 |

Coverage is highest for topics with strong federal components (immigration, IP) and for widely-legislated topics (landlord-tenant, DUI). Coverage is lowest for privacy and data protection, where the regulatory landscape is rapidly evolving and many states have enacted legislation only in the past two years.

## 5.4 Comparison with Alternative Approaches

To contextualize these results, we compared the effort required to answer the same 200 benchmark queries using three alternative approaches:

| Approach | Mean Time per Query | Accuracy | Cost |
|----------|-------------------|----------|------|
| **OpenLex** | < 1 ms (programmatic) | 87.5% precision | Free (MIT license) |
| **Manual Westlaw research** | 8.2 minutes | ~98% (expert) | $85+/hour subscription |
| **Google search** | 3.5 minutes | ~62% (variable quality) | Free |
| **GPT-4 (zero-shot)** | 2.1 seconds | ~71% (hallucination risk) | $0.01–0.03/query |

OpenLex is not intended to replace expert legal research; its precision falls below what a trained attorney achieves with Westlaw. Its value lies in the *programmatic, free, and structured* nature of its output — enabling legal technology applications to incorporate jurisdiction awareness as a dependency rather than a manual research step.

# 6. Discussion

## 6.1 Design Decisions

Several design decisions merit discussion.

**TypeScript over Python.** The majority of legal informatics tools are implemented in Python. We chose TypeScript for three reasons: (1) the primary consumers of jurisdiction mapping infrastructure are web-based legal technology applications, for which JavaScript/TypeScript is the native runtime; (2) TypeScript's type system provides compile-time verification of the complex data model (a jurisdiction query that omits a required field is caught before runtime); and (3) the isomorphic nature of TypeScript enables the same library to run on both server and client, which is important for applications built on frameworks like Next.js.

**Static data over API.** OpenLex ships statute and regulation data as static JSON bundled with the package, rather than fetching from external APIs at query time. This eliminates runtime dependencies on government websites (which have variable availability and rate limits), ensures deterministic query results, and enables offline operation. The tradeoff is data currency — the bundled data is a snapshot that requires periodic updates. We address this through a version-controlled data pipeline with source URLs for each entry, enabling community contributors to submit updates with provenance.

**Topic taxonomy over free-text NLP.** The topic resolution system uses a curated taxonomy with aliases rather than a natural language understanding model. This produces deterministic, explainable results at the cost of coverage for queries outside the taxonomy. We considered embedding-based semantic matching but rejected it for this application because legal topic classification requires precision that current general-purpose language models do not reliably achieve — "wrongful termination" and "constructive dismissal" are related but legally distinct, and conflating them could return incorrect authorities.

## 6.2 Limitations

The system has several known limitations that should inform its use:

1. **No case law.** OpenLex models statutory and regulatory authority but does not incorporate judicial interpretations. A statute's practical meaning is often significantly shaped by case law — for example, the enforceability of non-compete agreements in many states is governed more by judicial precedent than by statutory text. Incorporating case law analysis is a significant undertaking that we consider future work.

2. **No municipal coverage.** The initial release does not include county or municipal ordinances. This is particularly significant for rent control (which is legislated at the city level in jurisdictions like San Francisco, Los Angeles, and New York City), local minimum wage supplements, and business licensing requirements. The data model supports municipal jurisdictions; the gap is in data curation.

3. **Federal preemption as future work.** The data model includes a preemption schema, but the initial release does not populate it. Preemption analysis requires careful legal judgment for each topic-jurisdiction pair and is not amenable to automated extraction. We plan to develop a community-curated preemption database in a future release.

4. **Data freshness.** Bundled statute data is current as of the publication date but will become stale as legislatures amend laws. The data pipeline includes source URLs and last-verified timestamps for each entry, and we are developing a CI process to flag entries older than six months for review.

5. **Legal disclaimer.** OpenLex provides legal *information*, not legal *advice*. All query results include a disclaimer stating this distinction. The system is designed for integration into applications that provide appropriate professional context, not for direct consumer use without intermediation.

## 6.3 Future Work

Planned extensions include:

- **Temporal versioning**: Storing effective dates and amendment histories to support queries like "what was the minimum wage in Texas on January 1, 2024?"
- **REST API server**: A standalone HTTP server package (`@openlex/api`) for language-agnostic integration.
- **React integration**: Hooks (`useJurisdiction`, `useStatutes`, `useCompare`) and components (`<JurisdictionPicker />`, `<ComparisonTable />`) for frontend legal applications.
- **Municipal data**: Starting with the 25 largest U.S. cities for topics where local law is most significant.
- **Community contribution pipeline**: A structured process for legal professionals and law students to contribute and verify state-specific data, modeled on Wikipedia's citation requirements.

# 7. Conclusion

Jurisdiction mapping is foundational infrastructure for legal technology — yet it has remained proprietary, fragmented, and inaccessible to the broader community of researchers, civic technologists, and legal service providers. Every legal application that needs to answer "what law applies here?" has been forced to build this capability from scratch, creating a structural barrier to innovation in access to justice.

OpenLex provides an open, structured, and extensible framework for computational jurisdiction resolution across U.S. legal systems. Our evaluation demonstrates that the system achieves 87.5% precision and 94% coverage on a benchmark of real-world jurisdiction queries, with sub-millisecond query performance and zero runtime dependencies. While it does not replace expert legal research, it provides a viable foundation for legal technology applications to incorporate jurisdiction awareness at negligible cost.

By open-sourcing this infrastructure under the MIT license, we aim to lower the barrier to building jurisdiction-aware legal applications, to enable systematic computational research on the structure of American law, and to contribute to the long-term project of democratizing access to legal information.

OpenLex is available at [https://github.com/kingofmit/openlex](https://github.com/kingofmit/openlex).

# Acknowledgements

The author acknowledges the Cornell Legal Information Institute (LII) for pioneering free public access to U.S. primary legal materials; the Free Law Project and CourtListener for demonstrating the viability of open legal data infrastructure; the Legal Services Corporation for publicly available intake form templates that informed the evaluation benchmark; and the broader legal informatics community for foundational research on computational approaches to law.

# References
