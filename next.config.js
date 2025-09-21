/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // 캐시 문제 해결을 위한 설정
  experimental: {
    // 서버 컴포넌트와 클라이언트 컴포넌트 간의 hydration 문제 해결
    optimizePackageImports: ['@tanstack/react-query'],
  },
  // 개발 모드에서 캐시 비활성화
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
}

module.exports = nextConfig
