import nextPwa from "next-pwa";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "api.grupofera.app.br",
      },
      {
        protocol: "https",
        hostname: "storage.cloud.google.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/" ,
        destination: "https://d2h8ge3gfrwdyi.cloudfront.net/",
        permanent: true,
      },
      {
        source: "/tab" ,
        destination: "https://d2h8ge3gfrwdyi.cloudfront.net/",
        permanent: true,
      },
    ];
  },
};

const withPWA = nextPwa({
  dest: "public",
  register: true,
});

const config = withPWA({
  ...nextConfig,
});

export default config;
