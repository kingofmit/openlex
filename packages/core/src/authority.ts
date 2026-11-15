import { Statute, Regulation, GoverningBody, Court } from "./types";

/** In-memory authority registry */
export class AuthorityRegistry {
  private statutes = new Map<string, Statute[]>();
  private regulations = new Map<string, Regulation[]>();
  private bodies = new Map<string, GoverningBody[]>();
  private courts = new Map<string, Court[]>();

  registerStatute(statute: Statute): void {
    const key = `${statute.jurisdictionId}`;
    const list = this.statutes.get(key) ?? [];
    list.push(statute);
    this.statutes.set(key, list);
  }

  registerRegulation(regulation: Regulation): void {
    const key = `${regulation.jurisdictionId}`;
    const list = this.regulations.get(key) ?? [];
    list.push(regulation);
    this.regulations.set(key, list);
  }

  registerBody(body: GoverningBody): void {
    const key = `${body.jurisdictionId}`;
    const list = this.bodies.get(key) ?? [];
    list.push(body);
    this.bodies.set(key, list);
  }

  registerCourt(court: Court): void {
    const key = `${court.jurisdictionId}`;
    const list = this.courts.get(key) ?? [];
    list.push(court);
    this.courts.set(key, list);
  }

  findStatutes(jurisdictionId: string, topicId?: string): Statute[] {
    const all = this.statutes.get(jurisdictionId) ?? [];
    return topicId ? all.filter((s) => s.topics.includes(topicId)) : all;
  }

  findRegulations(jurisdictionId: string, topicId?: string): Regulation[] {
    const all = this.regulations.get(jurisdictionId) ?? [];
    return topicId ? all.filter((r) => r.topics.includes(topicId)) : all;
  }

  findBodies(jurisdictionId: string, topicId?: string): GoverningBody[] {
    const all = this.bodies.get(jurisdictionId) ?? [];
    return topicId ? all.filter((b) => b.topics.includes(topicId)) : all;
  }

  findCourts(jurisdictionId: string): Court[] {
    return this.courts.get(jurisdictionId) ?? [];
  }
}
