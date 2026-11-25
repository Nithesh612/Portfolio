import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(__dirname, ".."),
  },
  reactCompiler: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/assets/images/:path*",
        destination: "/assets/:path*",
      },
      {
        source: "/Projects",
        destination: "/Project",
      },
      {
        source: "/Projects/:slug*",
        destination: "/Project/:slug*",
      },
    ];
  },
};

export default nextConfig;
