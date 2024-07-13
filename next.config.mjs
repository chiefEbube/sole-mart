import { createProxyMiddleware } from 'http-proxy-middleware';

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',  // Match any /api/** requests
        destination: 'https://api.timbu.cloud/:path*',  // Proxy to Timbu API
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.timbu.cloud',
      },
    ], // Allow images from api.timbu.cloud
  },
};

export default nextConfig;
