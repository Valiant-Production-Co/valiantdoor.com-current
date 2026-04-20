import './globals.css';

export const metadata = {
  title: 'Pleasanton Garage Door Repair | Valiant Garage Door',
  description: 'Same-day garage door repair, spring replacement, opener repair, and emergency service in Pleasanton, Dublin, San Ramon, Livermore, and Fremont.',
  keywords: 'garage door repair pleasanton ca, garage door service pleasanton, emergency garage door repair',
  // Note: Canonical should be set per-page, not globally in root layout
  openGraph: {
    title: 'Pleasanton Garage Door Repair | Valiant Garage Door',
    description: 'Same-day garage door repair, spring replacement, opener repair, and emergency service in Pleasanton, Dublin, San Ramon, Livermore, and Fremont.',
    type: 'website',
    url: 'https://www.valiantdoor.com/',
    images: [
      {
        url: 'https://www.valiantdoor.com/assets/Valiant%20HOME%20PAGE%20new%20Hero%20Background%20Final%20.png',
        width: 1200,
        height: 630,
        alt: 'Valiant Garage Door',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pleasanton Garage Door Repair | Valiant Garage Door',
    description: 'Same-day garage door repair, spring replacement, opener repair, and emergency service in Pleasanton, Dublin, San Ramon, Livermore, and Fremont.',
    image: 'https://www.valiantdoor.com/assets/Valiant%20HOME%20PAGE%20new%20Hero%20Background%20Final%20.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager - Use proper GTM bootstrap snippet */}
        {/* GTM container ID requires GTM.start event, not gtag config */}
        {/* TODO: Implement proper GTM integration with gtag.start */}
        {/* For now, analytics is disabled to prevent configuration errors */}
        {/* NOTE: Canonical links should be set per-page, not globally in root layout */}
        {/* Setting canonical here would make all pages appear as duplicates of homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Valiant Garage Door',
              url: 'https://www.valiantdoor.com/',
              telephone: '(925) 409-4974',
              email: 'vm@valiantdoor.com',
              description: 'Garage door repair, spring replacement, garage door opener repair, and emergency service in Pleasanton and the Tri-Valley.',
              logo: 'https://www.valiantdoor.com/assets/logo/valiant-logo-gold.png',
              areaServed: [
                'Pleasanton, CA',
                'Dublin, CA',
                'Livermore, CA',
                'Fremont, CA',
                'San Ramon, CA',
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
