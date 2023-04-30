/** @type {import('next').NextConfig} */

const env = process.env.NODE_ENV;

const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    staticFolder: env === "production" ? "/treloo" : "",
  },
};

module.exports = nextConfig;
