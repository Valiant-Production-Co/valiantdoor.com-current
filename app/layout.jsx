import './globals.css';

export const metadata = {
  title: 'Pleasanton Garage Door Repair | Valiant Garage Door',
  description: 'Same-day garage door repair, spring replacement, opener repair, and emergency service in Pleasanton, Dublin, San Ramon, Livermore, and Fremont.',
  keywords: 'garage door repair pleasanton ca, garage door service pleasanton, emergency garage door repair',
  canonical: 'https://www.valiantdoor.com/',
  openGraph: {
    title: 'Pleasanton Garage Door Repair | Valiant Garage Door',
    description: 'Same-day garage door repair, spring replacement, opener repair, and emergency service in Pleasanton, Dublin, San Ramon, Livermore, and Fremont.',
    type: 'website',
    url: 'https://www.valiantdoor.com/',
    image: 'https://www.valiantdoor.com/assets/Valiant%20HOME%20PAGE%20new%20Hero%20Background%20Final%20.png',
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
        {/* Google Analytics GTM - Disabled in development to avoid fetch errors */}
        {/* Re-enable in production by uncommenting below */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=GTM-P8L8VN7J"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GTM-P8L8VN7J');
            `,
          }}
        />
        */}
        <link rel="canonical" href="https://www.valiantdoor.com/" />
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
