export default function Home() {
  return (
    <>
  
    {/* Google Tag Manager (noscript) - DISABLED */}
    {/*
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P8L8VN7J"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    */}
    <header className="site-header">
      <div className="container nav">
        <a className="logo" href="/" aria-label="Valiant Garage Door home">
          <img className="logo-shield" src="/assets/Valiant%20Shield%20Final.png" alt="Valiant shield" loading="eager"  width="709" height="984" />
          <img className="logo-wordmark" src="/assets/logo/valiant-logo-gold.png" alt="Valiant Garage Door" loading="eager"  width="1421" height="430" />
        </a>
        <button className="nav-toggle" aria-expanded="false" aria-controls="site-nav">
          <span className="sr-only">Toggle navigation</span>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <nav id="site-nav" className="site-nav" aria-label="Primary">
          <div className="nav-social" aria-label="Social and profile links">
            <a className="nav-social-link nav-social-google" href="https://search.google.com/local/writereview?placeid=ChIJreu0MBcWcgMRQnyWHvhS94w" target="_blank" rel="noopener noreferrer" aria-label="Google Reviews">
              <img src="/assets/icons/google.svg" alt="Google" width="18" height="18" loading="lazy" decoding="async" />
            </a>
            <a className="nav-social-link nav-social-yelp" href="https://www.yelp.com/biz/valiant-garage-door-pleasanton" target="_blank" rel="noopener noreferrer" aria-label="Yelp">
              <img src="/assets/icons/yelp.svg" alt="Yelp" width="18" height="18" loading="lazy" decoding="async" />
            </a>
            <a className="nav-social-link nav-social-tiktok" href="https://www.tiktok.com/@valiantdoor" target="_blank" rel="noopener noreferrer" aria-label="TikTok profile">
              <img src="/assets/icons/tiktok.svg" alt="TikTok" width="18" height="18" loading="lazy" decoding="async" />
            </a>
            <a className="nav-social-link nav-social-clopay" href="https://quickdraw.clopay.com/" target="_blank" rel="noopener noreferrer" aria-label="Clopay Door Builder">
              <img src="/assets/icons/clopay.png" alt="Clopay" width="30" height="13" loading="lazy" decoding="async" />
            </a>
            <a className="nav-social-link nav-social-chi" href="https://doorvisions.chiohd.com/" target="_blank" rel="noopener noreferrer" aria-label="C.H.I. Build My Door" title="C.H.I. Build My Door">
              <span aria-hidden="true">C.H.I.</span>
            </a>
          </div>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
        </nav>
      </div>
    </header>

    <main id="top">
      <section className="hero hero-home" aria-label="Hero">
        <div className="container hero-minimal">
          <div className="hero-cta-panel" data-reveal>
            <div className="hero-door-lockup">
              <a className="hero-door-call" href="tel:9254094974" aria-label="Call now 925 409 4974">
                <span className="hero-door-call-label">Call Now</span>
                <span className="hero-door-call-number">(925) 409-4974</span>
              </a>
              <img className="hero-door-shield" src="/assets/Valiant%20Shield%20Final.png" alt="Valiant shield" width="563" height="751" loading="eager" decoding="async" fetchpriority="high" />
              <a className="btn hero-cta-btn hero-door-cta" href="/quote">Request Service</a>
            </div>
          </div>
        </div>
      </section>

      <section className="founder-preview founder-preview--hero-slot" aria-labelledby="founder-preview-title">
        <div className="container founder-preview-grid" data-reveal>
          <div className="founder-preview-copy">
            <p className="mission-eyebrow">Founder-led technical authority</p>
            <h2 id="founder-preview-title">Meet the Master Technician Behind Valiant</h2>
            <p>Valentino Ramirez leads Valiant Garage Door as the founder, owner, and master technician behind same-day garage door repair, spring replacement, opener repair, and emergency service throughout the Tri-Valley and East Bay.</p>
            <div className="founder-preview-highlights" aria-label="Founder strengths">
              <span>Same-day diagnostics</span>
              <span>Springs &amp; openers</span>
              <span>Custom projects</span>
            </div>
            <div className="founder-preview-actions">
              <a className="btn outline" href="/mastertech">View Founder Profile</a>
              <a className="btn outline" href="/quote">Request Service</a>
            </div>
          </div>
          <figure className="founder-preview-media">
            <img src="https://cdn.builder.io/api/v1/image/assets%2Fb2436361d20a48f2985dda1b54b0b953%2F13c52c6d5263457f8fdc6b91baa34c65" alt="Certified Residential Door Systems Technician credential for Valentino Ramirez" loading="lazy" decoding="async" width="2000" height="1285" />
          </figure>
        </div>
      </section>

      <section className="custom-video-section" aria-label="Featured custom garage door video">
        <div className="container custom-video-wrap" data-reveal>
          <h2 className="custom-video-title">Custom Fabricated, Dual Swing Carriage Automation</h2>
          <video className="custom-video-player" controls playsInline preload="metadata" poster="/assets/videos/0E99B72D-7F7A-44C7-AEA5-94B93B84A510-poster.jpg">
            <source src="/assets/videos/0E99B72D-7F7A-44C7-AEA5-94B93B84A510.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>

      <section className="reviews-section" aria-labelledby="home-reviews-title">
        <div className="container reviews-container" data-reveal>
          <h2 id="home-reviews-title">Trusted by Local Homeowners</h2>
          <p className="reviews-intro">Read recent verified customer reviews from Housecall Pro.</p>
          <div className="hcp-reviews-embed">
            {/*Start of Housecallpro Reviews Widget*/}
            <iframe
              src="https://client.housecallpro.com/reviews/widget/544de216-f35f-4c0b-835a-7950591bbd80?src=external-site"
              title="Housecall Pro customer reviews for Valiant Garage Door"
              loading="lazy"
            ></iframe>
            {/*End of Housecallpro Reviews Widget*/}
          </div>
        </div>
      </section>

      <section className="reviews-section" aria-labelledby="home-yelp-reviews-title">
        <div className="container reviews-container reviews-container-yelp" data-reveal>
          <h2 id="home-yelp-reviews-title">Customer Reviews</h2>
          <div className="yelp-spotlight">
            <a
              className="yelp-logo-link"
              href="https://www.yelp.com/biz/valiant-garage-door-pleasanton"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Yelp profile"
            >
              <img src="/assets/icons/yelp-burst-red.svg" alt="Yelp" width="56" height="56" loading="lazy" decoding="async" />
            </a>
            <p className="reviews-intro yelp-spotlight-copy">Tap below to view our live customer feedback.</p>
            <a className="btn outline yelp-spotlight-cta" href="https://www.yelp.com/biz/valiant-garage-door-pleasanton" target="_blank" rel="noopener noreferrer">
              Read Reviews
            </a>
          </div>
        </div>
      </section>


      <section className="home-seo-intro home-seo-intro--lower" aria-labelledby="home-seo-title">
        <div className="container home-seo-intro-card" data-reveal>
          <p className="home-seo-kicker">Garage door opener repair • spring replacement • same-day service</p>
          <h1 id="home-seo-title" className="home-seo-title">Garage Door Repair, Spring Replacement, and Opener Service in Pleasanton</h1>
          <p>Valiant Garage Door provides same-day garage door repair, spring replacement, opener repair, custom fabrication, and emergency service for homeowners and businesses in Pleasanton, Dublin, Livermore, San Ramon, Fremont, and nearby East Bay communities.</p>
          <p>Our team keeps service straightforward with clear communication, premium parts, and fast scheduling for residential and light-commercial garage door needs throughout Pleasanton, Dublin, Livermore, Fremont, and San Ramon.</p>
          <p>From noisy openers and broken springs to off-track doors and failing safety sensors, every project is approached with founder-led workmanship, careful testing, and long-term reliability in mind.</p>
          <div className="home-seo-actions">
            <a className="btn outline" href="/garage-door-opener-repair">Garage Door Opener Repair</a>
            <a className="btn outline" href="/quote">Request Service</a>
          </div>
          <p>Local repair pages: <a href="/garage-door-repair-pleasanton">Pleasanton</a>, <a href="/garage-door-repair-dublin-ca">Dublin</a>, <a href="/garage-door-repair-livermore">Livermore</a>, <a href="/garage-door-repair-fremont">Fremont</a>, and <a href="/garage-door-repair-san-ramon">San Ramon</a>.</p>
        </div>
      </section>

    </main>

    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-logos">
          <img className="footer-mark" src="/assets/logo/valiant-v-polished.png" alt="Valiant V" loading="lazy"  width="1024" height="1536" />
          <img className="footer-wordmark" src="/assets/logo/valiant-logo-gold.png" alt="Valiant Garage Door" loading="lazy"  width="1421" height="430" />
        </div>
        <nav className="footer-links" aria-label="Footer">
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/gallery">Gallery</a>
          <a href="/blog">Blog</a>
          <a href="/faq">FAQ</a>
          <a href="/mission">Mission</a>
          <a href="/service-areas">Service Areas</a>
          <a href="/quote">Request Appointment</a>
          <a href="/site-map">Site Map</a>
        </nav>
        <div className="footer-legal">
          <p>&copy; 2026 Valiant Garage Door. All Rights Reserved.</p>
          <p className="footer-service-area">Garage Door Service • Pleasanton, CA 94588</p>
        </div>
      </div>
    </footer>

    <script src="/js/main.min.js"></script>
  

    </>
  );
}
