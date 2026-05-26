import type { NextConfig } from "next";

const S3_BUCKET = "rrs-security-guards.s3.us-east-1.amazonaws.com";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: S3_BUCKET,
      },
    ],
  },
  async rewrites() {
    return [
      {
        // Proxy /rrs-img/* → S3 so Next.js image optimizer sees same-origin assets
        source: "/rrs-img/:path*",
        destination: `https://${S3_BUCKET}/:path*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/services",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/licensed-security-guard-services-irvine-ca",
        destination: "/#services",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/about-security-company-irvine",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: true,
      },
      {
        source: "/contact-security-company",
        destination: "/#contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
