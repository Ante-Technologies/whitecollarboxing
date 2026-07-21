import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    contentDispositionType: "inline",
    unoptimized: true,
  },
};

export default nextConfig;
