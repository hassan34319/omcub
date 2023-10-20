module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["files.cdn.printful.com", "cdn.sanity.io", "gelato-api-live.s3.eu-west-1.amazonaws.com"],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
