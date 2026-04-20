'use client';

export const metadata = {
  title: 'Request a Quote | Valiant Garage Door',
  description: 'Get a free garage door repair quote from Valiant. Call now or book instantly with our calendar system. Same-day service available.',
  alternates: {
    canonical: 'https://www.valiantdoor.com/quote',
  },
};

export default function QuotePage() {
  const quoteSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Valiant Garage Door',
    url: 'https://www.valiantdoor.com',
    telephone: '(925) 409-4974',
    email: 'vm@valiantdoor.com',
    description: 'Request a free garage door repair quote',
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quoteSchema) }}
      />

      <header className="quote-header">
        <div className="quote-container">
          <h1>Get Your Free Garage Door Repair Quote</h1>
          <p className="quote-subtitle">
            Same-day estimates available in Pleasanton, Dublin, Livermore, Fremont, and San Ramon
          </p>
        </div>
      </header>

      <section className="quote-section">
        <div className="quote-container">
          <div className="quote-content">
            {/* Main CTA Section */}
            <div className="quote-cta-block">
              <h2>Choose Your Preferred Contact Method</h2>
              <p className="cta-intro">Get in touch with our team to schedule your free estimate</p>

              <div className="cta-options">
                {/* Phone CTA - Bold and Prominent */}
                <div className="cta-option phone-cta">
                  <div className="cta-icon">📞</div>
                  <div className="cta-content">
                    <h3>Call Now for Immediate Service</h3>
                    <p>Speak directly with our team</p>
                    <a href="tel:9254094974" className="cta-button phone-button">
                      <span className="button-text">Call (925) 409-4974</span>
                      <span className="button-subtext">Available Now</span>
                    </a>
                  </div>
                </div>

                {/* Book Instantly CTA - Bold and Prominent */}
                <div className="cta-option booking-cta">
                  <div className="cta-icon">📅</div>
                  <div className="cta-content">
                    <h3>Book Instantly Online</h3>
                    <p>Choose your time and date</p>
                    <a
                      href="https://book.housecallpro.com/book/Valiant-garage-door/ae8e4a137c8c49b4b264073541533a7a?v2=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button booking-button"
                    >
                      <span className="button-text">Book Instantly</span>
                      <span className="button-subtext">Calendar View</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Info Section */}
            <div className="quote-info-block">
              <h2>Why Choose Valiant?</h2>
              <ul className="benefits-list">
                <li>✓ Same-day service available</li>
                <li>✓ Free estimates - no obligation</li>
                <li>✓ Licensed, insured, and certified master technician</li>
                <li>✓ Transparent pricing, no hidden fees</li>
                <li>✓ Residential and commercial expertise</li>
                <li>✓ 24/7 emergency service available</li>
              </ul>
            </div>

            {/* Service Areas */}
            <div className="quote-areas-block">
              <h2>We Serve These Areas</h2>
              <div className="areas-grid">
                <span className="area-badge">Pleasanton</span>
                <span className="area-badge">Dublin</span>
                <span className="area-badge">San Ramon</span>
                <span className="area-badge">Livermore</span>
                <span className="area-badge">Fremont</span>
                <span className="area-badge">East Bay</span>
              </div>
              <p className="areas-note">And surrounding communities. Call to confirm service in your area.</p>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .quote-header {
          padding: 60px 20px;
          background: linear-gradient(135deg, #0b0b0c 0%, #111214 100%);
          border-bottom: 2px solid #c7a34b;
          text-align: center;
        }

        .quote-header h1 {
          font-size: 2.5rem;
          color: #f5f2ec;
          margin: 0 0 15px 0;
        }

        .quote-subtitle {
          font-size: 1.1rem;
          color: #e0c783;
          margin: 0;
        }

        .quote-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .quote-section {
          padding: 60px 20px;
          background: #f5f2ec;
          min-height: 600px;
        }

        .quote-content {
          max-width: 900px;
          margin: 0 auto;
        }

        /* CTA Block Styling */
        .quote-cta-block {
          background: white;
          padding: 40px;
          border-radius: 12px;
          margin-bottom: 50px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .quote-cta-block h2 {
          font-size: 2rem;
          color: #0b0b0c;
          margin: 0 0 10px 0;
          text-align: center;
        }

        .cta-intro {
          text-align: center;
          color: #666;
          font-size: 1.1rem;
          margin: 0 0 40px 0;
        }

        .cta-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 30px;
        }

        .cta-option {
          padding: 30px;
          border-radius: 8px;
          border: 2px solid #c7a34b;
          background: #fafbfc;
          transition: all 0.3s;
        }

        .cta-option:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(199, 163, 75, 0.2);
          border-color: #e0c783;
        }

        .cta-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          text-align: center;
        }

        .cta-option h3 {
          font-size: 1.5rem;
          color: #0b0b0c;
          margin: 0 0 10px 0;
          text-align: center;
        }

        .cta-option p {
          color: #666;
          text-align: center;
          margin: 0 0 20px 0;
        }

        /* Button Styling */
        .cta-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.2rem;
          transition: all 0.3s;
          cursor: pointer;
          border: none;
        }

        .phone-button {
          background: #7a0b10;
          color: white;
        }

        .phone-button:hover {
          background: #0b0b0c;
          transform: scale(1.05);
        }

        .booking-button {
          background: #c7a34b;
          color: white;
        }

        .booking-button:hover {
          background: #e0c783;
          transform: scale(1.05);
        }

        .button-text {
          display: block;
          font-size: 1.3rem;
          margin-bottom: 5px;
        }

        .button-subtext {
          display: block;
          font-size: 0.85rem;
          opacity: 0.9;
          font-weight: 500;
        }

        /* Info Block */
        .quote-info-block {
          background: white;
          padding: 40px;
          border-radius: 12px;
          margin-bottom: 40px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .quote-info-block h2 {
          font-size: 1.8rem;
          color: #0b0b0c;
          margin: 0 0 25px 0;
        }

        .benefits-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .benefits-list li {
          padding: 12px 0;
          color: #333;
          font-size: 1.05rem;
          line-height: 1.6;
          border-bottom: 1px solid #eee;
        }

        .benefits-list li:last-child {
          border-bottom: none;
        }

        /* Areas Block */
        .quote-areas-block {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
        }

        .quote-areas-block h2 {
          font-size: 1.8rem;
          color: #0b0b0c;
          margin: 0 0 25px 0;
        }

        .areas-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 20px;
        }

        .area-badge {
          background: #c7a34b;
          color: white;
          padding: 10px 16px;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.95rem;
        }

        .areas-note {
          color: #666;
          font-size: 0.95rem;
          margin: 0;
          font-style: italic;
        }

        @media (max-width: 768px) {
          .quote-header h1 {
            font-size: 1.8rem;
          }

          .cta-options {
            grid-template-columns: 1fr;
          }

          .quote-cta-block,
          .quote-info-block,
          .quote-areas-block {
            padding: 25px;
          }

          .cta-option h3 {
            font-size: 1.3rem;
          }

          .button-text {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </main>
  );
}
