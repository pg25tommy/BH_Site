import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https: https://maps.googleapis.com https://maps.gstatic.com; style-src 'self' 'unsafe-inline' https: https://fonts.googleapis.com; img-src 'self' data: https: blob: https://maps.googleapis.com https://maps.gstatic.com https://*.googleapis.com https://*.gstatic.com; font-src 'self' data: https: https://fonts.gstatic.com; connect-src 'self' https: wss: ws: https://maps.googleapis.com; frame-src https://www.google.com https://maps.google.com; frame-ancestors 'none'; object-src 'none';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
