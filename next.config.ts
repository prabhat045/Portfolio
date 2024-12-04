import type { NextConfig } from "next";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Portfolio",
};

export default nextConfig;
