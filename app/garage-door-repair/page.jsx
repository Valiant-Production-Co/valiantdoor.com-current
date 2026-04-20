'use client';

export default function GarageDoorRepairPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Garage Door Repair',
    description: 'Professional garage door repair with same-day service available',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Valiant Garage Door',
      url: 'https://www.valiantdoor.com',
      telephone: '(925) 409-4974',
    },
    areaServed: ['Pleasanton, CA', 'Dublin, CA', 'Livermore, CA', 'Fremont, CA', 'San Ramon, CA'],
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.valiantdoor.com/quote',
        actionPlatform: ['DesktopWebPlatform', 'MobileWebPlatform'],
      },
      result: {
        '@type': 'Reservation',
        name: 'Garage Door Repair Appointment',
      },
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="page-header">
        <div className="container">
          <h1>Professional Garage Door Repair</h1>
          <p className="subtitle">Same-day service for all garage door problems</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <article className="content-article">
            <h2>Fast, Reliable Garage Door Repair</h2>
            <p>
              Garage door problems happen unexpectedly, but with Valiant Garage Door, you get fast, professional repairs
              the same day. Our founder-led team diagnoses issues quickly and implements lasting solutions with premium parts
              and careful workmanship.
            </p>

            <h3>Common Garage Door Problems We Fix</h3>
            <ul className="problem-list">
              <li>Broken springs and cables</li>
              <li>Off-track doors</li>
              <li>Failed safety sensors</li>
              <li>Noisy or broken openers</li>
              <li>Bent or dented panels</li>
              <li>Failed roller bearings</li>
              <li>Misaligned tracks</li>
              <li>Weather stripping and seals</li>
            </ul>

            <h3>Why Choose Valiant for Garage Door Repair?</h3>
            <ul className="benefits-list">
              <li>Same-day diagnostics and repairs available</li>
              <li>Founder-led technical expertise</li>
              <li>Clear communication and transparent pricing</li>
              <li>Premium parts with reliability focus</li>
              <li>Careful testing and quality assurance</li>
              <li>Serving Tri-Valley and East Bay</li>
            </ul>

            <h3>Our Repair Process</h3>
            <ol className="process-list">
              <li>
                <strong>Diagnosis:</strong> We inspect your garage door, identify issues, and explain what needs repair.
              </li>
              <li>
                <strong>Estimate:</strong> Clear pricing and parts information before any work begins.
              </li>
              <li>
                <strong>Repair:</strong> Professional installation with attention to detail and safety.
              </li>
              <li>
                <strong>Testing:</strong> Full operational testing to ensure reliability and safety.
              </li>
            </ol>

            <h3>Service Areas</h3>
            <p>
              We serve Pleasanton, Dublin, Livermore, Fremont, San Ramon, and surrounding Tri-Valley and East Bay
              communities. <a href="/service-areas">View complete service areas</a>.
            </p>
          </article>

          <aside className="cta-sidebar">
            <div className="cta-card">
              <h3>Schedule Repairs Today</h3>
              <p>Get fast, same-day garage door repair in your area.</p>
              <a href="/quote" className="btn btn-primary">Request Service Estimate</a>
              <p className="or">or</p>
              <a href="tel:9254094974" className="btn btn-phone">Call: (925) 409-4974</a>
            </div>
          </aside>
        </div>
      </section>

    </main>
  );
}
