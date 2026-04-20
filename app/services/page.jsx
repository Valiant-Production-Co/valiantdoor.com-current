'use client';

export default function ServicesPage() {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Valiant Garage Door',
    url: 'https://www.valiantdoor.com',
    telephone: '(925) 409-4974',
    email: 'vm@valiantdoor.com',
    description: 'Professional garage door repair and service',
    areaServed: [
      'Pleasanton, CA',
      'Dublin, CA',
      'Livermore, CA',
      'Fremont, CA',
      'San Ramon, CA',
    ],
    knowsAbout: [
      'garage door repair',
      'garage door spring replacement',
      'garage door opener repair',
      'custom garage door fabrication',
      'emergency garage door service',
      'garage door maintenance',
    ],
    hasOfferingCategory: [
      {
        '@type': 'Service',
        name: 'Garage Door Repair',
        description: 'Professional garage door repair for residential and commercial properties',
        url: 'https://www.valiantdoor.com/garage-door-repair',
      },
      {
        '@type': 'Service',
        name: 'Spring Replacement',
        description: 'Garage door spring replacement and repair service',
        url: 'https://www.valiantdoor.com/garage-door-spring-replacement',
      },
      {
        '@type': 'Service',
        name: 'Opener Repair',
        description: 'Garage door opener repair and installation',
        url: 'https://www.valiantdoor.com/garage-door-opener-repair',
      },
      {
        '@type': 'Service',
        name: 'Emergency Service',
        description: '24/7 emergency garage door repair',
        url: 'https://www.valiantdoor.com/emergency-garage-door-repair',
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <header className="services-header">
        <div className="container">
          <h1>Garage Door Services & Repair</h1>
          <p className="subtitle">Professional garage door solutions for Tri-Valley homeowners and businesses</p>
        </div>
      </header>

      <section className="services-overview">
        <div className="container">
          <div className="intro-content">
            <p>
              Valiant Garage Door specializes in comprehensive garage door services including same-day repair,
              spring replacement, opener service, emergency repairs, and custom fabrication. Our founder-led team serves
              Pleasanton, Dublin, Livermore, Fremont, San Ramon, and nearby East Bay communities.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <h2>Garage Door Repair</h2>
              <p>
                From off-track doors to broken springs and failed sensors, our technicians diagnose and repair
                all garage door issues with same-day service available.
              </p>
              <a href="/garage-door-repair" className="service-link">
                Learn more about repair services →
              </a>
            </article>

            <article className="service-card">
              <h2>Spring Replacement</h2>
              <p>
                Broken torsion springs are one of the most common garage door issues. We provide safe, professional
                replacement with premium springs designed for lasting reliability.
              </p>
              <a href="/garage-door-spring-replacement" className="service-link">
                Spring replacement details →
              </a>
            </article>

            <article className="service-card">
              <h2>Opener Repair & Installation</h2>
              <p>
                Noisy, slow, or non-functional openers require immediate attention. We repair and install quality
                garage door openers for smooth, reliable operation.
              </p>
              <a href="/garage-door-opener-repair" className="service-link">
                Opener service information →
              </a>
            </article>

            <article className="service-card">
              <h2>Emergency Service</h2>
              <p>
                Garage door emergencies happen at inconvenient times. Our 24/7 emergency service ensures you're never
                without access to your garage when you need it most.
              </p>
              <a href="/emergency-garage-door-repair" className="service-link">
                Emergency repair service →
              </a>
            </article>

            <article className="service-card">
              <h2>Custom Fabrication</h2>
              <p>
                Looking for a unique garage door? We design and fabricate custom doors with custom automation
                for distinctive residential and commercial applications.
              </p>
              <a href="/quote" className="service-link">
                Request custom fabrication quote →
              </a>
            </article>

            <article className="service-card">
              <h2>Commercial Solutions</h2>
              <p>
                Heavy-duty commercial garage doors require specialized expertise. We service and install commercial
                doors with professional-grade hardware and automation.
              </p>
              <a href="/services/commercial" className="service-link">
                Commercial services →
              </a>
            </article>
          </div>

          <section className="services-cta">
            <h2>Ready to Schedule Your Service?</h2>
            <p>Contact Valiant Garage Door for a free estimate or emergency service today.</p>
            <div className="cta-buttons">
              <a href="/quote" className="btn btn-primary">
                Request Service
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
