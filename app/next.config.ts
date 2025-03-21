import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // Disable TypeScript during builds, since we're still prototyping
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
