/** Simple inverted index for full-text search */
export class InvertedIndex {
  private index = new Map<string, Set<string>>();
  private documents = new Map<string, { text: string; metadata: Record<string, unknown> }>();

  add(id: string, text: string, metadata: Record<string, unknown> = {}): void {
    this.documents.set(id, { text, metadata });
    const tokens = this.tokenize(text);
    for (const token of tokens) {
      if (!this.index.has(token)) this.index.set(token, new Set());
      this.index.get(token)!.add(id);
    }
  }

  search(query: string, limit = 20): Array<{ id: string; score: number; metadata: Record<string, unknown> }> {
    const queryTokens = this.tokenize(query);
    const scores = new Map<string, number>();

    for (const token of queryTokens) {
      const docIds = this.index.get(token);
      if (!docIds) continue;
      const idf = Math.log(this.documents.size / docIds.size);
      for (const docId of docIds) {
        scores.set(docId, (scores.get(docId) ?? 0) + idf);
      }
    }

    return Array.from(scores.entries())
      .map(([id, score]) => ({ id, score, metadata: this.documents.get(id)?.metadata ?? {} }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  private tokenize(text: string): string[] {
    return text
      .toLowerCase()
      .replace(/[^\w\s§.]/g, " ")
      .split(/\s+/)
      .filter((t) => t.length > 1);
  }

  get size(): number { return this.documents.size; }
}
