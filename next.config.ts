import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
  },
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    resolveAlias: {
      'next/dist/build/polyfills/polyfill-module': './lib/empty-polyfill.js',
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      const path = require("path");
      config.resolve.alias = {
        ...config.resolve.alias,
        "next/dist/build/polyfills/polyfill-module": path.resolve(__dirname, "lib/empty-polyfill.js"),
      };
    }
    return config;
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
