/** @type {import('next').NextConfig} */
const nextConfig = {
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
