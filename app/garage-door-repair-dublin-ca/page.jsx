export const metadata = {
  title: 'Garage Door Repair in Dublin, CA | Valiant Garage Door',
  description: 'Garage door repair, spring replacement, and emergency service in Dublin, CA. Same-day service available in the Tri-Valley.',
  canonical: 'https://www.valiantdoor.com/garage-door-repair-dublin-ca',
};

export default function DublinPage() {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Valiant Garage Door - Dublin',
    description: 'Professional garage door repair and service in Dublin, CA',
    url: 'https://www.valiantdoor.com/garage-door-repair-dublin-ca',
    telephone: '(925) 409-4974',
    email: 'vm@valiantdoor.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Dublin',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: ['Dublin, CA', 'Pleasanton, CA', 'San Ramon, CA', 'Livermore, CA', 'Fremont, CA'],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <header className="location-header">
        <div className="container">
          <h1>Garage Door Repair in Dublin, CA</h1>
          <p className="subtitle">Professional repair, spring replacement, and emergency service in Dublin</p>
        </div>
      </header>
      <section className="location-content">
        <div className="container">
          <h2>Dublin Garage Door Repair & Service</h2>
          <p>
            Valiant Garage Door provides professional garage door repair, spring replacement, opener service, and 24/7
            emergency repairs for homeowners and businesses in Dublin, CA. Our founder-led team serves Dublin and all
            surrounding Tri-Valley communities with same-day diagnostics and quality solutions.
          </p>
          <div className="services-grid">
            <div className="service-item">
              <h3>Garage Door Repair</h3>
              <p>Fast repair of broken springs, off-track doors, and failed components.</p>
            </div>
            <div className="service-item">
              <h3>Spring Replacement</h3>
              <p>Safe, professional replacement of garage door springs.</p>
            </div>
            <div className="service-item">
              <h3>Opener Service</h3>
              <p>Repair and installation of garage door openers.</p>
            </div>
            <div className="service-item">
              <h3>Emergency Service</h3>
              <p>24/7 emergency garage door repair available.</p>
            </div>
          </div>
          <div className="cta-section">
            <h2>Schedule Dublin Garage Door Service</h2>
            <a href="/quote" className="btn btn-primary">Request Service</a>
            <a href="tel:9254094974" className="btn btn-secondary">Call: (925) 409-4974</a>
          </div>
        </div>
      </section>
    </main>
  );
}
