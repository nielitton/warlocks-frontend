import * as dotenv from "dotenv";
import type { NextConfig } from "next";

dotenv.config()

const nextConfig: NextConfig = {
  reactStrictMode: false
};

export default nextConfig;
