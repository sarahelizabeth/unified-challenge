/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gravatar.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'ufd-dev-asset-uploads.s3.amazonaws.com',
        port: '',
      },
    ],
  },
};

export default nextConfig;
