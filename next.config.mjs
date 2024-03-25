/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'strapi-cms-3mz0.onrender.com',
      },
    ],
  },
}

export default nextConfig
