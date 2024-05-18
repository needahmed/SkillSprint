/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_BASE_URL:
      process.env.API_BASE_URL ||
      "https://skillsprint-backend-0v8m.onrender.com",
  },
};

export default nextConfig;
