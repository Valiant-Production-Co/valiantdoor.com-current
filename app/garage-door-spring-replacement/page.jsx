'use client';

export default function SpringReplacementPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Garage Door Spring Replacement',
    description: 'Professional garage door spring replacement service',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Valiant Garage Door',
      url: 'https://www.valiantdoor.com',
      telephone: '(925) 409-4974',
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="page-header">
        <div className="container">
          <h1>Garage Door Spring Replacement</h1>
          <p className="subtitle">Professional spring service with same-day installation</p>
        </div>
      </header>

      <section className="page-content">
        <div className="container">
          <article className="content-article">
            <h2>Expert Garage Door Spring Replacement</h2>
            <p>
              Broken garage door springs are one of the most common garage door problems. These high-tension springs
              support the entire weight of your door and require expert handling. Valiant Garage Door provides safe,
              professional spring replacement with premium parts designed for long-term reliability.
            </p>

            <h3>Why Spring Replacement Is Critical</h3>
            <p>
              Garage door springs are under extreme tension and can be dangerous to handle. Attempting DIY replacement
              risks serious injury. Our certified technicians have the proper tools and expertise to safely replace springs
              while ensuring your door operates smoothly and safely.
            </p>

            <h3>Types of Springs We Replace</h3>
            <ul className="list-items">
              <li><strong>Torsion Springs:</strong> The most common type, these wind around a metal shaft above the door.</li>
              <li><strong>Extension Springs:</strong> These stretch and contract as the door moves along the sides.</li>
              <li><strong>Combination Systems:</strong> Some doors use multiple springs for balanced support.</li>
            </ul>

            <h3>Signs You Need Spring Replacement</h3>
            <ul className="list-items">
              <li>Door won't open or closes too quickly</li>
              <li>Door feels heavy when manually lifting</li>
              <li>Loud banging or snapping sounds</li>
              <li>Visible broken coils or separated springs</li>
              <li>Door tilts to one side</li>
            </ul>

            <h3>Our Spring Replacement Process</h3>
            <ol className="process-list">
              <li>Safety inspection and problem diagnosis</li>
              <li>Proper spring type and tension assessment</li>
              <li>Safe removal of old springs with proper equipment</li>
              <li>Installation of premium replacement springs</li>
              <li>Comprehensive testing for smooth, safe operation</li>
            </ol>

            <h3>Why Choose Valiant for Spring Replacement?</h3>
            <ul className="benefits-list">
              <li>Same-day replacement service available</li>
              <li>Premium springs with long-term durability</li>
              <li>Expert safety practices</li>
              <li>Founder-led technical authority</li>
              <li>Fair, transparent pricing</li>
            </ul>
          </article>

          <aside className="cta-sidebar">
            <div className="cta-card">
              <h3>Need Spring Replacement?</h3>
              <p>Get professional spring replacement today.</p>
              <a href="/quote" className="btn btn-primary">Schedule Service</a>
              <p className="divider">or call now</p>
              <a href="tel:9254094974" className="btn btn-phone">(925) 409-4974</a>
            </div>
          </aside>
        </div>
      </section>

    </main>
  );
}
