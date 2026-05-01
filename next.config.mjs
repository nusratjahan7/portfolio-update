/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
 images: {
    domains: [
      "cdn.jsdelivr.net",
      "vectorlogo.zone",
      "assets.vercel.com",
      "cdn.simpleicons.org",
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
