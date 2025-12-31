
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
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <section className="py-12 bg-white border-b border-gray-100" aria-labelledby="blog-hero">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h1 id="blog-hero" className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">{title}</h1>
                    <p className="text-gray-600 text-xl leading-relaxed">
                        Expert advice, maintenance guides, and industry news for homeowners.
                    </p>
                </div>
            </section>

            <section className="py-16" aria-labelledby="posts-heading">
                <div className="container mx-auto px-4">
                    <h2 id="posts-heading" className="sr-only">Blog Posts</h2>
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
                            {posts.map(post => (
                                <Link
                                    href={`/blog/${post.slug}`}
                                    key={post.id}
                                    className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group focus:outline-none focus:ring-2 focus:ring-orange-500 block h-full flex flex-col"
                                    aria-label={`Read article: ${post.title}`}
                                >
                                    <div className="h-48 overflow-hidden relative">
                                        <img src={post.image} alt="" role="presentation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md uppercase tracking-wide">{post.category}</div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors leading-snug">{post.title}</h2>
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                                        <span className="text-orange-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read Article &rarr;</span>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-8" aria-label="Blog Sidebar">
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg sticky top-24">
                                <h3 className="font-bold text-gray-900 mb-6 text-xl border-b border-gray-100 pb-4" id="search-heading">Search Articles</h3>
                                <div className="relative mb-8">
                                    <label htmlFor="search-blog" className="sr-only">Search</label>
                                    <input
                                        id="search-blog"
                                        type="text"
                                        placeholder="Search topics..."
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                    />
                                </div>

                                <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">Need Professional Help?</h3>
                                    <p className="mb-6 text-gray-600 leading-relaxed">Our licensed experts are ready to assist you with any home challenge.</p>
                                    <CallButton />
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    );
}
