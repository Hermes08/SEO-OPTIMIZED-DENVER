/** @type {import('next').NextConfig} */
const nextConfig = {
    // Static export for GitHub Pages preview
    output: 'export',

    // basePath set via env var — local dev runs at /, GH Pages uses /SEO-OPTIMIZED-DENVER
    basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

    // Required for GitHub Pages: serves /page/ instead of /page
    trailingSlash: true,

    images: {
        // next/image optimization not available in static export
        unoptimized: true,
        remotePatterns: [
            { protocol: 'https', hostname: 'picsum.photos' },
            { protocol: 'https', hostname: 'www.transparenttextures.com' },
            { protocol: 'https', hostname: 'i.ibb.co' },
            { protocol: 'https', hostname: 'i.pravatar.cc' },
            { protocol: 'https', hostname: 'placehold.co' },
        ],
    },
};

export default nextConfig;
