import { getBuilderPage, getAllBuilderPages } from '@/lib/builder';
import BuilderContent from '@/components/BuilderContent';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const pages = await getAllBuilderPages();
  
  return pages
    .filter((page) => page.data?.url)
    .map((page) => {
      const slug = page.data.url.split('/').filter(Boolean);
      return {
        slug: slug.length > 0 ? slug : ['index'],
      };
    });
}

export async function generateMetadata({ params }) {
  const path = '/' + (params.slug ? params.slug.join('/') : '');
  const page = await getBuilderPage(path);

  if (!page) {
    return {
      title: 'Page not found',
    };
  }

  return {
    title: page.data?.title || 'Valiant Garage Door',
    description: page.data?.description || 'Professional garage door service',
  };
}

export default async function DynamicPage({ params }) {
  const path = '/' + (params.slug ? params.slug.join('/') : '');
  const page = await getBuilderPage(path);

  if (!page) {
    notFound();
  }

  return (
    <main>
      <BuilderContent content={page.data} />
    </main>
  );
}
