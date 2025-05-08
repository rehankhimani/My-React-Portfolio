import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://unsplash.com/"], // can be removed if not needed
  },
};

export default nextConfig;
