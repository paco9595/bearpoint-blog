import withMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        hostname: "media.dev.to",
      },
      { hostname: "res.cloudinary.com" },
      { hostname: "miro.medium.com" },
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

export default withMDX()(nextConfig);
