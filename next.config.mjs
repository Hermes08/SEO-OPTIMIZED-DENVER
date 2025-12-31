
/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export', // Optional: if static export is needed, but we want SSR
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'www.transparenttextures.com'
            }
        ],
    },
};

export default nextConfig;
