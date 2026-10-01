import rss from '@astrojs/rss';
import { SITE } from '../../site.config';
import { getThoughts } from '../../lib/posts';

export async function GET(context) {
  const thoughts = await getThoughts();
  return rss({
    title: `${SITE.name}: thoughts`,
    description: 'Shorter pieces: radio builds, homelab, books and things learned along the way.',
    site: context.site,
    items: thoughts.map((n) => ({ title: n.data.title, pubDate: n.data.date, link: `/thoughts/${n.id}/`, categories: n.data.tags })),
  });
}
