export default function sitemap() {
  const baseUrl = 'https://www.valiantdoor.com';
  const pages = [
    { url: '/', priority: 1, changeFrequency: 'weekly' },
    { url: '/services', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/garage-door-repair', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/garage-door-spring-replacement', priority: 0.9, changeFrequency: 'monthly' },
    { url: '/garage-door-repair-pleasanton', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/garage-door-repair-dublin-ca', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/garage-door-repair-fremont', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/garage-door-repair-livermore', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/garage-door-repair-san-ramon', priority: 0.8, changeFrequency: 'monthly' },
    { url: '/gallery', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/quote', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/faq', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/mission', priority: 0.7, changeFrequency: 'yearly' },
    { url: '/mastertech', priority: 0.8, changeFrequency: 'yearly' },
    { url: '/service-areas', priority: 0.7, changeFrequency: 'monthly' },
    { url: '/emergency-garage-door-repair', priority: 0.9, changeFrequency: 'monthly' },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date().toISOString(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
