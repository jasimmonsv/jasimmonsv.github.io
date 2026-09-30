import rss from '@astrojs/rss';
import { SITE } from '../../site.config';
import { getNotes } from '../../lib/posts';

export async function GET(context) {
  const notes = await getNotes();
  return rss({
    title: `${SITE.name}: notes`,
    description: 'Field notes: radio builds, homelab, books.',
    site: context.site,
    items: notes.map((n) => ({ title: n.data.title, pubDate: n.data.date, link: `/notes/${n.id}/`, categories: n.data.tags })),
  });
}
