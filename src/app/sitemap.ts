import { MetadataRoute } from 'next';
import { CATEGORIES, BLOG_POSTS, SERVICE_AREAS } from '@/lib/constants';

// Validate environment variable or default to production domain
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.denverevchargers.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();

    // 1. Static Routes
    const staticRoutes = [
        '',
        '/about',
        '/contact',
        '/financing',
        '/areas-we-serve',
        '/blog',
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Category Pages (e.g., /home-ev-charging)
    const categoryRoutes = CATEGORIES.map((category) => ({
        url: `${BASE_URL}/${category.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 3. Service Detail Pages (e.g., /home-ev-charging/tesla-wall-connector)
    const serviceRoutes = CATEGORIES.flatMap((category) =>
        category.subServices.map((service) => ({
            url: `${BASE_URL}/${category.slug}/${service.slug}`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }))
    );

    // 4. Blog Posts (e.g., /blog/cost-to-install-tesla-charger-denver)
    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.publishDate),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 5. Category Blog Pages (e.g., /home-ev-charging/blog)
    const categoryBlogRoutes = CATEGORIES.map((category) => ({
        url: `${BASE_URL}/${category.slug}/blog`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [
        ...staticRoutes,
        ...categoryRoutes,
        ...serviceRoutes,
        ...categoryBlogRoutes,
        ...blogRoutes,
    ];
}
