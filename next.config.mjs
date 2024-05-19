/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL:
      process.env.API_BASE_URL ||
      "https://skillsprint-backend-0v8m.onrender.com",
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  },
};

export default nextConfig;
