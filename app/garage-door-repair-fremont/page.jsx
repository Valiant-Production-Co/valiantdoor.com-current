'use client';

export default function FremontPage() {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Valiant Garage Door - Fremont',
    description: 'Professional garage door repair and service in Fremont, CA',
    url: 'https://www.valiantdoor.com/garage-door-repair-fremont',
    telephone: '(925) 409-4974',
    email: 'vm@valiantdoor.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Fremont',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: ['Fremont, CA', 'Pleasanton, CA', 'Dublin, CA', 'Livermore, CA', 'San Ramon, CA'],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <header className="location-header">
        <div className="container">
          <h1>Garage Door Repair in Fremont, CA</h1>
          <p className="subtitle">Repair and service for Fremont homeowners and businesses</p>
        </div>
      </header>
      <section className="location-content">
        <div className="container">
          <h2>Fremont Garage Door Repair & Service</h2>
          <p>
            Valiant Garage Door extends professional garage door service to Fremont residents. We provide same-day
            repair, spring replacement, opener service, and emergency repairs for Fremont and surrounding East Bay areas.
          </p>
          <div className="services-grid">
            <div className="service-item">
              <h3>Garage Door Repair</h3>
              <p>Fast, reliable repair of all garage door problems.</p>
            </div>
            <div className="service-item">
              <h3>Spring Replacement</h3>
              <p>Professional spring replacement and repair.</p>
            </div>
            <div className="service-item">
              <h3>Opener Service</h3>
              <p>Repair and installation services available.</p>
            </div>
            <div className="service-item">
              <h3>Emergency Service</h3>
              <p>24/7 emergency repairs for Fremont.</p>
            </div>
          </div>
          <div className="cta-section">
            <h2>Schedule Fremont Garage Door Service</h2>
            <a href="/quote" className="btn btn-primary">Request Service</a>
            <a href="tel:9254094974" className="btn btn-secondary">Call: (925) 409-4974</a>
          </div>
        </div>
      </section>
    </main>
  );
}
