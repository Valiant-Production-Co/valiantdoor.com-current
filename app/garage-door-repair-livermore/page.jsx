'use client';

export default function LivermorePage() {
  const localSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Valiant Garage Door - Livermore',
    description: 'Professional garage door repair and service in Livermore, CA',
    url: 'https://www.valiantdoor.com/garage-door-repair-livermore',
    telephone: '(925) 409-4974',
    email: 'vm@valiantdoor.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Livermore',
      addressRegion: 'CA',
      addressCountry: 'US',
    },
    areaServed: ['Livermore, CA', 'Pleasanton, CA', 'Dublin, CA', 'Fremont, CA', 'San Ramon, CA'],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <header className="location-header">
        <div className="container">
          <h1>Garage Door Repair in Livermore, CA</h1>
          <p className="subtitle">Professional service for Livermore and East Bay residents</p>
        </div>
      </header>
      <section className="location-content">
        <div className="container">
          <h2>Livermore Garage Door Repair & Service</h2>
          <p>
            Valiant Garage Door provides comprehensive garage door repair and service throughout Livermore. From
            emergency repairs to regular maintenance, our founder-led team delivers same-day solutions for residential
            and commercial garage door needs.
          </p>
          <div className="services-grid">
            <div className="service-item">
              <h3>Garage Door Repair</h3>
              <p>Expert repair for all garage door issues.</p>
            </div>
            <div className="service-item">
              <h3>Spring Replacement</h3>
              <p>Safe professional spring service.</p>
            </div>
            <div className="service-item">
              <h3>Opener Service</h3>
              <p>Complete opener repair and installation.</p>
            </div>
            <div className="service-item">
              <h3>Emergency Service</h3>
              <p>24/7 emergency repairs available.</p>
            </div>
          </div>
          <div className="cta-section">
            <h2>Schedule Livermore Garage Door Service</h2>
            <a href="/quote" className="btn btn-primary">Request Service</a>
            <a href="tel:9254094974" className="btn btn-secondary">Call: (925) 409-4974</a>
          </div>
        </div>
      </section>
    </main>
  );
}
