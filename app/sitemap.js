import { getAllBuilderPages } from '@/lib/builder';

export default async function sitemap() {
  const baseUrl = 'https://www.valiantdoor.com';
  const pages = await getAllBuilderPages();

  const routes = pages
    .filter((page) => page.data?.url)
    .map((page) => ({
      url: `${baseUrl}${page.data.url}`,
      lastModified: new Date(page.lastUpdatedAt || new Date()),
      changeFrequency: 'weekly',
      priority: page.data.url === '/' ? 1 : 0.8,
    }));

  return routes;
}
