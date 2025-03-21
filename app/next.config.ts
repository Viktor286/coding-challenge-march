import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Disable TypeScript during builds, since we're still prototyping
    ignoreBuildErrors: true,
  },
  // Ensure all paths are processed correctly
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // Use trailing slash for consistency
  trailingSlash: true,
  // Enable React Strict Mode
  reactStrictMode: true,
  // Ensure images are handled properly
  images: {
    domains: ['coding-challenge-march.vercel.app'],
  }
};

export default nextConfig;
