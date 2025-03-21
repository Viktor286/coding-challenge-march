import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Disable TypeScript during builds, since we're still prototyping
    ignoreBuildErrors: true,
  },
  // Force output to be in the standard .next directory
  distDir: '.next',
  // Handle routes with trailingSlash to ensure consistency
  trailingSlash: true
};

export default nextConfig;
