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

Legal technology applications routinely confront the same foundational challenge: determining which laws apply in a given jurisdiction for a given legal matter. The United States, with its overlapping federal, state, and local legal systems, presents a combinatorial complexity that every legal application must independently resolve — typically through expensive, proprietary implementations that remain inaccessible to researchers, civic technologists, and smaller legal service providers. This paper introduces OpenLex, an open-source jurisdiction mapping engine that provides a structured, queryable model of U.S. legal authority. Given a legal topic and geographic location, OpenLex returns the applicable statutes, regulations, governing bodies, and courts — with support for federal preemption analysis, cross-state comparison, and legal citation parsing. We describe the system's architecture, data model, and intended applications, and argue that open jurisdiction infrastructure is a necessary precondition for democratizing access to legal information at scale.

# 1. Introduction

The American legal system is structurally fragmented. A single legal question — "What are my rights regarding my security deposit?" — may implicate federal fair housing law, state landlord-tenant statutes, state administrative regulations, municipal rent control ordinances, and local housing court procedures. The applicable authorities vary not only by state but often by county and city. This jurisdictional complexity is well-understood by legal professionals but poorly served by existing computational tools [@Surden2014; @Katz2020].

Legal technology companies have invested heavily in jurisdiction-aware systems, but these implementations are proprietary and vertically integrated. A company building a legal chatbot must construct its own jurisdiction mapping layer. A researcher studying state-level policy variation must manually compile statutory databases. A legal aid organization building intake tools must hard-code jurisdictional logic for each state it serves. The result is massive duplication of effort and a structural barrier to entry for smaller actors in the legal technology ecosystem [@McGinnis2018; @Remus2017].

OpenLex addresses this gap by providing shared, open infrastructure for jurisdiction mapping. It is designed as a modular TypeScript framework that any legal technology application can incorporate — whether a consumer-facing legal guidance tool, an attorney practice management platform, a policy research database, or a legal education resource.

# 2. Background and Related Work

## 2.1 The Jurisdiction Problem in Legal Technology

The United States operates under a system of dual sovereignty in which federal and state governments maintain independent legislative, regulatory, and judicial structures. This produces a legal landscape of considerable complexity: 50 state legislatures, the U.S. Congress, hundreds of federal and state agencies, and thousands of courts at every level — each generating authoritative legal texts that may interact through doctrines of preemption, concurrent jurisdiction, and cooperative federalism [@Chemerinsky2019].

For computational systems, the jurisdiction problem manifests in several dimensions. First, the *identification* problem: given a legal topic, which legislative bodies have addressed it? Second, the *resolution* problem: where multiple authorities exist, which controls? Third, the *currency* problem: legal authority changes continuously through legislation, regulation, and judicial interpretation. Fourth, the *granularity* problem: some legal questions are answered at the state level, others at the county or municipal level.

## 2.2 Existing Approaches

Commercial legal research platforms such as Westlaw and LexisNexis provide comprehensive access to primary legal materials but are designed for professional legal researchers, not for integration into software applications [@Mart2013]. Their APIs, where available, are expensive and restrictively licensed.

Government-operated repositories including the U.S. Code (via USLM XML), the Code of Federal Regulations (via the eCFR API), and state legislative websites provide authoritative source materials but lack standardized formats, cross-jurisdictional indexing, or topic-based querying [@Ayers2020].

Academic projects in legal informatics have explored computational approaches to legal text analysis, including statutory network analysis [@Bommarito2010], legal citation networks [@Fowler2007], and machine-readable legislation [@Palmirani2011]. However, these projects typically focus on analytical methods rather than providing reusable infrastructure for jurisdiction resolution.

OpenLex is distinguished by its focus on *operational* jurisdiction mapping — providing a queryable data model that returns structured answers to the question "what law applies here?" rather than a corpus for analytical research.

# 3. System Architecture

OpenLex is implemented as a modular TypeScript monorepo comprising six packages, each addressing a distinct layer of the jurisdiction mapping problem.

## 3.1 Core Data Model (`@openlex/core`)

The core package defines the type system and query engine. The fundamental entities are:

- **Jurisdiction**: A political entity with legislative authority (federal, state, territory, district, county, or city), identified by standard FIPS codes and organized in a parent-child hierarchy.
- **Legal Topic**: A node in a hierarchical taxonomy of legal subjects, organized by practice area with aliases for natural-language matching.
- **Statute**: A legislative provision with full citation, jurisdiction binding, topic tags, effective date, and source URL.
- **Regulation**: An administrative rule with its promulgating agency, citation, and topic associations.
- **Governing Body**: A court, agency, commission, or board with jurisdiction over specific topics.
- **Legal Authority**: The composite result of a jurisdiction query — the set of statutes, regulations, governing bodies, and courts that answer "what law applies?"

The `AuthorityRegistry` maintains an in-memory index of all registered authorities, queryable by jurisdiction and topic. The `queryJurisdiction` function accepts a topic string and state identifier, resolves both to their structured representations, walks the jurisdiction hierarchy (city → county → state → federal), and aggregates matching authorities at each level.

## 3.2 Statute Database (`@openlex/statutes`)

The statutes package provides a legal citation parser capable of recognizing U.S. Code citations (e.g., "42 U.S.C. § 1983"), Code of Federal Regulations citations (e.g., "29 C.F.R. § 785.11"), and state code citations in standard Bluebook format (e.g., "Cal. Civ. Code § 1950.5"). Parsed citations are decomposed into structured objects with title, code, section, subsection, and jurisdiction fields.

The package also implements a cross-state comparison engine that, given a legal topic, produces a structured matrix of how each state addresses the issue — enabling systematic policy analysis across jurisdictions.

## 3.3 Regulatory Mapping (`@openlex/regulations`)

The regulations package maintains a database of federal regulatory agencies and their topic-level jurisdiction. The initial release covers nine major agencies (DOL, EEOC, FTC, HUD, CFPB, NLRB, SBA, USCIS, USPTO) with plans to extend coverage to state-level regulatory bodies.

## 3.4 Court System (`@openlex/courts`)

The courts package models the federal judicial hierarchy — the Supreme Court, thirteen Circuit Courts of Appeals, and district courts — with a state-to-circuit mapping table that enables automatic venue determination. Given a state, the system returns the applicable trial court, appellate court, and the federal circuit assignment.

## 3.5 Search (`@openlex/search`)

The search package implements a TF-IDF inverted index for full-text search across statutes and regulations. Documents are tokenized and indexed at ingestion time, enabling sub-millisecond queries across the full corpus. Search results are ranked by term frequency–inverse document frequency and return both the matching authority and its metadata.

## 3.6 Export (`@openlex/export`)

The export package generates structured outputs from query results in three formats: JSON (for programmatic consumption), CSV (for spreadsheet analysis), and Markdown (formatted as a legal research memo with proper citation formatting and a standard disclaimer).

# 4. Data Model and Taxonomy

## 4.1 Jurisdiction Model

OpenLex models 55 jurisdictions in its initial release: the federal government, 50 states, the District of Columbia, and three territories (Puerto Rico, Guam, U.S. Virgin Islands). Each jurisdiction record includes a standard FIPS code, timezone, capital, and parent jurisdiction reference, enabling hierarchical traversal.

The hierarchical model is extensible to county and municipal jurisdictions, which is necessary for topics where local law diverges from state law — notably rent control, minimum wage supplements, and zoning.

## 4.2 Legal Topic Taxonomy

The topic taxonomy comprises 30 topics across 10 practice areas in the initial release: Real Estate (landlord-tenant, security deposits, eviction, habitability, rent control), Employment (minimum wage, overtime, wrongful termination, discrimination, non-compete agreements), Family (divorce, child custody, child support, adoption), Business (formation, contracts, consumer protection), Criminal (DUI/DWI, expungement), Immigration, Personal Injury (statute of limitations), Intellectual Property, and Privacy & Data Protection.

Each topic includes natural-language aliases to support fuzzy matching from user queries. For example, querying "tenant rights" resolves to the "landlord-tenant" topic; "drunk driving" resolves to "DUI/DWI."

## 4.3 Federal Preemption

The preemption model tracks four categories of federal-state interaction: *express preemption* (Congress explicitly displaces state law), *field preemption* (federal regulation is so pervasive as to occupy the field), *conflict preemption* (state law directly conflicts with federal law), and *deference* (federal law establishes a floor but permits states to exceed it). This is critical for topics like employment law, where the Fair Labor Standards Act sets a federal minimum wage but states may set higher minimums.

# 5. Intended Applications

OpenLex is designed to serve as shared infrastructure for four categories of users:

**Legal technology developers** can integrate OpenLex as a dependency rather than building jurisdiction logic from scratch. A legal chatbot can call `queryJurisdiction({ topic: "eviction", state: "NY" })` and receive structured authority data without maintaining its own 50-state database.

**Legal researchers and policy analysts** can use the cross-state comparison engine to study policy variation systematically. The structured export formats (JSON, CSV) facilitate integration with statistical analysis tools.

**Legal aid organizations** can build jurisdiction-aware intake and triage tools on top of OpenLex, reducing the engineering burden of serving clients across multiple states.

**Legal educators** can use OpenLex to teach comparative law and legal research methods with real, structured data rather than hypotheticals.

# 6. Limitations and Future Work

The current release has several known limitations. First, the statute database requires ongoing curation as legislatures amend existing laws and enact new ones; a community contribution model with data freshness tracking is planned. Second, municipal and county ordinances are not yet included but are architecturally supported. Third, case law — judicial interpretations that modify the practical effect of statutes — is not modeled in the initial release. Fourth, the system provides legal *information*, not legal *advice*, and includes appropriate disclaimers in all outputs.

Planned extensions include: temporal versioning of statute data to support historical queries; a REST API server for language-agnostic integration; React hooks and components for legal application frontends; and a community-maintained data contribution pipeline with source verification.

# 7. Conclusion

Jurisdiction mapping is foundational infrastructure for legal technology — yet it remains proprietary, fragmented, and inaccessible to the broader community of researchers, civic technologists, and small-scale legal service providers. OpenLex provides an open, structured, and extensible framework for resolving the "what law applies here?" question across U.S. jurisdictions. By open-sourcing this infrastructure, we aim to lower the barrier to building jurisdiction-aware legal applications and to enable systematic computational research on the structure of American law.

OpenLex is available under the MIT license at [https://github.com/kingofmit/openlex](https://github.com/kingofmit/openlex).

# Acknowledgements

The author acknowledges the Cornell Legal Information Institute (LII) for their work in making primary legal materials publicly accessible, and the broader legal informatics community for foundational research on computational approaches to law.

# References
