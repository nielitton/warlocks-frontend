import * as dotenv from "dotenv";
import type { NextConfig } from "next";

dotenv.config()

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/auth',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
