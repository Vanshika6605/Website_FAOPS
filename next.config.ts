import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "faopsperinatal.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;