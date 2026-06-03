import { MetadataRoute } from 'next';
import { BASE_URL } from '@/lib/constants';

// Required for output: 'export' (static export / GitHub Pages)
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/api/', '/admin/'],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
        host: BASE_URL,
    };
}
