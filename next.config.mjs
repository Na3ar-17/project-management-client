/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'i.pinimg.com',
      't3.ftcdn.net',
      'localhost',
    ],
  },
}

export default nextConfig
