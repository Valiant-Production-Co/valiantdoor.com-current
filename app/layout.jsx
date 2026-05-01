import './globals.css';

import Script from 'next/script';

const heroImage = 'https://www.valiantdoor.com/assets/Valiant%20HOME%20PAGE%20new%20Hero%20Background%20Final%20.png';
const gtmContainerId = 'GTM-P8L8VN7J';

export const metadata = {
  title: 'Pleasanton Garage Door Repair | Valiant Garage Door',
  description: 'Same-day garage door repair, spring replacement, opener repair, and emergency service in Pleasanton, Dublin, San Ramon, Livermore, and Fremont.',
  keywords: 'garage door repair pleasanton ca, garage door service pleasanton, emergency garage door repair',
  openGraph: {
    title: 'Pleasanton Garage Door Repair | Valiant Garage Door',
    description: 'Same-day garage door repair, spring replacement, opener repair, and emergency service in Pleasanton, Dublin, San Ramon, Livermore, and Fremont.',
    type: 'website',
    url: 'https://www.valiantdoor.com/',
    images: [
      {
        url: heroImage,
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
    images: [heroImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){
                w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
                var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;
                j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmContainerId}');
            `,
          }}
        />
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
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmContainerId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
