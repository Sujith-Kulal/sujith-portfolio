import type { NextConfig } from "next";

const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath =
  envBasePath ?? (process.env.NODE_ENV === "production" ? "/sujith-portfolio" : "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
