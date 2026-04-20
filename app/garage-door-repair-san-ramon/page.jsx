export const metadata = {
  title: 'Garage Door Repair in San Ramon, CA | Valiant Garage Door',
  description: 'Garage door repair, spring replacement, and emergency service in San Ramon, CA. Professional same-day service.',
  canonical: 'https://www.valiantdoor.com/garage-door-repair-san-ramon',
};

export default function SanRamonPage() {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Valiant Garage Door - San Ramon',
    description: 'Professional garage door repair and service in San Ramon, CA',
    url: 'https://www.valiantdoor.com/garage-door-repair-san-ramon',
    telephone: '(925) 409-4974',
    email: 'vm@valiantdoor.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Ramon',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: ['San Ramon, CA', 'Dublin, CA', 'Pleasanton, CA', 'Livermore, CA', 'Fremont, CA'],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <header className="location-header">
        <div className="container">
          <h1>Garage Door Repair in San Ramon, CA</h1>
          <p className="subtitle">Trusted garage door service for San Ramon homeowners</p>
        </div>
      </header>
      <section className="location-content">
        <div className="container">
          <h2>San Ramon Garage Door Repair & Service</h2>
          <p>
            Valiant Garage Door is your trusted partner for garage door repair and service in San Ramon. We provide
            same-day service, professional repairs, and emergency support for residential and commercial properties
            throughout San Ramon and the Tri-Valley.
          </p>
          <div className="services-grid">
            <div className="service-item">
              <h3>Garage Door Repair</h3>
              <p>Trusted repair solutions for San Ramon residents.</p>
            </div>
            <div className="service-item">
              <h3>Spring Replacement</h3>
              <p>Professional and safe spring replacement.</p>
            </div>
            <div className="service-item">
              <h3>Opener Service</h3>
              <p>Complete opener repair and installation services.</p>
            </div>
            <div className="service-item">
              <h3>Emergency Service</h3>
              <p>24/7 emergency garage door repairs.</p>
            </div>
          </div>
          <div className="cta-section">
            <h2>Schedule San Ramon Garage Door Service</h2>
            <a href="/quote" className="btn btn-primary">Request Service</a>
            <a href="tel:9254094974" className="btn btn-secondary">Call: (925) 409-4974</a>
          </div>
        </div>
      </section>
    </main>
  );
}
