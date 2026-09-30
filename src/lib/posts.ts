import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = {
  kind: 'essay' | 'note';
  id: string;
  href: string;
  title: string;
  summary?: string;
  date: Date;
  tags: string[];
  minutes: number;
};

const live = <T extends { data: { draft: boolean } }>(e: T) => !(import.meta.env.PROD && e.data.draft);

export function readingMinutes(body = ''): number {
  const words = body.replace(/```[\s\S]*?```/g, '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

export async function getEssays(): Promise<CollectionEntry<'writing'>[]> {
  return (await getCollection('writing', live)).sort((a, b) => +b.data.date - +a.data.date);
}

export async function getNotes(): Promise<CollectionEntry<'notes'>[]> {
  return (await getCollection('notes', live)).sort((a, b) => +b.data.date - +a.data.date);
}

export async function getStream(kinds: Post['kind'][] = ['essay', 'note']): Promise<Post[]> {
  const out: Post[] = [];
  if (kinds.includes('essay')) {
    for (const e of await getEssays()) {
      out.push({ kind: 'essay', id: e.id, href: `/writing/${e.id}/`, title: e.data.title, summary: e.data.summary, date: e.data.date, tags: e.data.tags, minutes: readingMinutes(e.body) });
    }
  }
  if (kinds.includes('note')) {
    for (const n of await getNotes()) {
      out.push({ kind: 'note', id: n.id, href: `/notes/${n.id}/`, title: n.data.title, date: n.data.date, tags: n.data.tags, minutes: readingMinutes(n.body) });
    }
  }
  return out.sort((a, b) => +b.date - +a.date);
}

export const fmtDate = (d: Date, opts: Intl.DateTimeFormatOptions = { month: 'short', day: '2-digit' }) =>
  d.toLocaleDateString('en-US', { timeZone: 'UTC', ...opts });

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
