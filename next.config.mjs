import withPWAInit from "@ducanh2912/next-pwa";

/** @type {import('next').NextConfig} */

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: "cdn.htmlgames.com",
      },
      { hostname: "www.htmlgames.com" },
    ],
  },
});
