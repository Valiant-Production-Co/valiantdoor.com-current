import { getBuilderPage } from '@/lib/builder';
import BuilderContent from '@/components/BuilderContent';

export default async function Home() {
  const builderPage = await getBuilderPage('/');

  return (
    <main>
      {builderPage ? (
        <BuilderContent content={builderPage.data} />
      ) : (
        <div className="fallback-content">
          <section className="hero">
            <h1>Pleasanton Garage Door Repair</h1>
            <p>Same-day garage door repair & emergency service</p>
            <a href="tel:9254094974" className="btn">Call Now: (925) 409-4974</a>
          </section>
        </div>
      )}
    </main>
  );
}
