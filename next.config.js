/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['uploadthing.com','utfs.io', 'lh3.googleusercontent.com','avatars.githubusercontent.com'],
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig
