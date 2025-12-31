
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { BLOG_POSTS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallButton';

export const metadata: Metadata = {
    title: "Tips & Resources | Blog",
    description: "Expert advice, maintenance guides, and industry news for homeowners.",
};

export default function BlogIndex() {
    const posts = BLOG_POSTS;
    const title = "Our Blog";
    const breadcrumbItems = [{ name: 'Blog', url: '/blog' }];

    return (
        <div className="min-h-screen bg-gray-900">
            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <section className="py-12 bg-gray-800" aria-labelledby="blog-hero">
                <div className="container mx-auto px-4">
                    <h1 id="blog-hero" className="text-4xl font-bold text-white mb-4">{title}</h1>
                    <p className="text-gray-400 text-lg max-w-3xl">
                        Expert advice, maintenance guides, and industry news for homeowners.
                    </p>
                </div>
            </section>

            <section className="py-16" aria-labelledby="posts-heading">
                <div className="container mx-auto px-4">
                    <h2 id="posts-heading" className="sr-only">Blog Posts</h2>
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                            {posts.map(post => (
                                <Link
                                    href={`/blog/${post.slug}`}
                                    key={post.id}
                                    className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition duration-300 border border-gray-700 group focus:outline-none focus:ring-2 focus:ring-orange-500 block h-full"
                                    aria-label={`Read article: ${post.title}`}
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img src={post.image} alt="" role="presentation" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="p-6">
                                        <div className="text-orange-500 text-xs font-bold uppercase tracking-wider mb-2">{post.category}</div>
                                        <h2 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors">{post.title}</h2>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                                        <span className="text-white text-sm font-medium flex items-center gap-1">Read Article &rarr;</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-8" aria-label="Blog Sidebar">
                            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                                <h3 className="font-bold text-white mb-4" id="search-heading">Search Articles</h3>
                                <div className="relative">
                                    <label htmlFor="search-blog" className="sr-only">Search</label>
                                    <input
                                        id="search-blog"
                                        type="text"
                                        placeholder="Search..."
                                        className="w-full bg-gray-900 border border-gray-600 rounded px-4 py-2 text-white focus:border-orange-500 outline-none"
                                    />
                                </div>
                            </div>

                            <div className="bg-gradient-to-br from-orange-600 to-orange-500 p-6 rounded-xl text-white">
                                <h3 className="font-bold text-xl mb-2">Need Help?</h3>
                                <p className="mb-6 text-orange-100">Our experts are ready to assist you 24/7.</p>
                                <CallButton variant="white" sticky={false} />
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
