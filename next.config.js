/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  // Убираем output: 'export' чтобы API роуты работали
  trailingSlash: true,
  distDir: 'dist',
}

export default nextConfig 