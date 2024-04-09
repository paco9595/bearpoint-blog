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
};

export default nextConfig;
