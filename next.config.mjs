/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static one-pager, no backend. Exports to ./out for any static host.
  output: 'export',
  images: {
    // Required for `output: 'export'`. next/image still emits responsive
    // sizes + lazy loading; the source files just are not resized at build.
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
