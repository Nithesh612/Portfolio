/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/assets/images/:path*",
        destination: "/assets/:path*",
      },
    ];
  },
};

export default nextConfig;
