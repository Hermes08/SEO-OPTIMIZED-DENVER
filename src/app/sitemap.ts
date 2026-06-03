import { MetadataRoute } from 'next';
import { CATEGORIES, BLOG_POSTS, BASE_URL } from '@/lib/constants';

// Required for output: 'export' (static export / GitHub Pages)
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const currentDate = new Date();

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

    const categoryRoutes = CATEGORIES.map((category) => ({
        url: `${BASE_URL}/${category.slug}`,
        lastModified: currentDate,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    const serviceRoutes = CATEGORIES.flatMap((category) =>
        category.subServices.map((service) => ({
            url: `${BASE_URL}/${category.slug}/${service.slug}`,
            lastModified: currentDate,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        }))
    );

    const blogRoutes = BLOG_POSTS.map((post) => ({
        url: `${BASE_URL}/blog/${post.slug}`,
        lastModified: new Date(post.publishDate),
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

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
