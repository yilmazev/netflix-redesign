/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
}
  
module.exports = {
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js']
}