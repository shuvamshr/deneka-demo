/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/inquiry/all",
        permanent: true,
      },
      {
        source: "/inquiry",
        destination: "/inquiry/all",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
