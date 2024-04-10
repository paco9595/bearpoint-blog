/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "media.dev.to",
      },
      { hostname: "res.cloudinary.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/page/1',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
