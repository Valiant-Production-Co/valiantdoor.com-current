/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/services/emergency',
        destination: '/emergency-garage-door-repair',
        permanent: true,
      },
      {
        source: '/services/installations',
        destination: '/garage-door-installation',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
