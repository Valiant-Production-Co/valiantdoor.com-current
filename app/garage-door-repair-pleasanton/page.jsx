'use client';

export default function PleasantonPage() {
  const localSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': 'https://www.valiantdoor.com/#business-pleasanton',
        name: 'Valiant Garage Door - Pleasanton',
        description: 'Professional garage door repair and service in Pleasanton, CA',
        url: 'https://www.valiantdoor.com/garage-door-repair-pleasanton',
        telephone: '(925) 409-4974',
        email: 'vm@valiantdoor.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Pleasanton',
          addressRegion: 'CA',
          postalCode: '94588',
          addressCountry: 'US',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Pleasanton, CA',
          },
          {
            '@type': 'City',
            name: 'Dublin, CA',
          },
          {
            '@type': 'City',
            name: 'San Ramon, CA',
          },
          {
            '@type': 'City',
            name: 'Livermore, CA',
          },
          {
            '@type': 'City',
            name: 'Fremont, CA',
          },
        ],
        knowsAbout: [
          'garage door repair',
          'spring replacement',
          'opener repair',
          'emergency service',
          'custom fabrication',
        ],
        priceRange: '$$',
        founder: {
          '@type': 'Person',
          name: 'Valentino Ramirez',
          jobTitle: 'Founder, Master Technician',
          url: 'https://www.valiantdoor.com/mastertech',
        },
      },
      {
        '@type': 'WebPage',
        '@id': 'https://www.valiantdoor.com/garage-door-repair-pleasanton/#webpage',
        name: 'Garage Door Repair in Pleasanton, CA | Valiant Garage Door',
        description: 'Professional garage door repair, spring replacement, opener service, and 24/7 emergency repairs in Pleasanton 94588.',
        isPartOf: {
          '@id': 'https://www.valiantdoor.com/#website',
        },
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />

      <header className="location-header">
        <div className="container">
          <h1>Garage Door Repair in Pleasanton, CA</h1>
          <p className="subtitle">Same-day repair, spring replacement, and emergency service in Pleasanton 94588</p>
        </div>
      </header>

      <section className="location-content">
        <div className="container">
          <div className="intro-section">
            <h2>Pleasanton Garage Door Repair & Service</h2>
            <p>
              Valiant Garage Door provides professional garage door repair, spring replacement, opener service, and 24/7
              emergency repairs for homeowners and businesses in Pleasanton, CA 94588. Our founder-led team offers same-day
              diagnostics and reliable solutions with transparent pricing and quality workmanship.
            </p>
          </div>

          <div className="services-section">
            <h2>Our Pleasanton Garage Door Services</h2>
            <div className="services-list">
              <article className="service-item">
                <h3>Garage Door Repair</h3>
                <p>Off-track doors, broken springs, failed sensors, and other garage door issues fixed quickly and reliably.</p>
              </article>

              <article className="service-item">
                <h3>Spring Replacement</h3>
                <p>Safe, professional replacement of broken garage door springs with premium parts and lasting reliability.</p>
              </article>

              <article className="service-item">
                <h3>Opener Repair & Installation</h3>
                <p>Repair of noisy or non-functional openers, plus installation of new systems for smooth operation.</p>
              </article>

              <article className="service-item">
                <h3>Emergency Service</h3>
                <p>24/7 emergency garage door repair available for locked-out situations and urgent garage access needs.</p>
              </article>

              <article className="service-item">
                <h3>Custom Fabrication</h3>
                <p>Custom-designed and built garage doors with unique styles and automation solutions for Pleasanton homes.</p>
              </article>

              <article className="service-item">
                <h3>Preventive Maintenance</h3>
                <p>Regular maintenance keeps garage doors operating smoothly and helps prevent costly repairs down the road.</p>
              </article>
            </div>
          </div>

          <div className="why-choose-section">
            <h2>Why Choose Valiant Garage Door in Pleasanton?</h2>
            <ul className="benefits-list">
              <li>Founder-led technical authority with master technician expertise</li>
              <li>Same-day service available for most repairs</li>
              <li>Clear, honest communication and transparent pricing</li>
              <li>Premium parts with long-term reliability focus</li>
              <li>Residential and light-commercial expertise</li>
              <li>Serving Pleasanton and the entire Tri-Valley area</li>
            </ul>
          </div>

          <div className="areas-served">
            <h2>Pleasanton Garage Door Service Area</h2>
            <p>
              Based in Pleasanton, we regularly serve homeowners and businesses throughout the Tri-Valley and East Bay,
              including Dublin, San Ramon, Livermore, Fremont, and surrounding communities.
            </p>
            <a href="/service-areas" className="see-more-link">
              View complete service areas →
            </a>
          </div>

          <section className="location-cta">
            <h2>Schedule Your Pleasanton Garage Door Service</h2>
            <p>Get same-day repair estimates and emergency service in Pleasanton, CA.</p>
            <div className="cta-buttons">
              <a href="/quote" className="btn btn-primary">
                Request Service Estimate
              </a>
              <a href="tel:9254094974" className="btn btn-secondary">
                Call: (925) 409-4974
              </a>
            </div>
          </section>
        </div>
      </section>

    </main>
  );
}
