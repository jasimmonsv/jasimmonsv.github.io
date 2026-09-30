import rss from '@astrojs/rss';
import { SITE } from '../site.config';
import { getEssays } from '../lib/posts';

// Essays only.
export async function GET(context) {
  const essays = await getEssays();
  return rss({
    title: `${SITE.name}: essays`,
    description: SITE.description,
    site: context.site,
    items: essays.map((e) => ({
      title: e.data.title,
      description: e.data.summary,
      pubDate: e.data.date,
      link: `/writing/${e.id}/`,
      categories: e.data.tags,
    })),
  });
}
