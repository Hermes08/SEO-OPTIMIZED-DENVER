
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { BLOG_POSTS, CATEGORIES } from '@/lib/constants';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallButton';
import { TableOfContents } from '@/components/TableOfContents';
import { SchemaMarkup } from '@/components/SchemaMarkup';

// Generate Static Params for SSG
export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        postSlug: post.slug,
    }));
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ postSlug: string }>; }) {
    const resolvedParams = await params;
    const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.postSlug);

    if (!post) {
        return {
            title: 'Post Not Found',
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
        openGraph: {
            images: [post.image]
        }
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ postSlug: string }>; }) {
    const resolvedParams = await params;
    const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.postSlug);

    if (!post) {
        notFound();
    }

    const category = CATEGORIES.find(c => c.title === post.category); // Match by title since post.category stores title

    const breadcrumbItems = [
        { name: 'Blog', url: '/blog' },
        { name: post.title, url: '#' }
    ];

    const relatedPosts = BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2);

    return (
        <div className="min-h-screen bg-gray-50">
            <SchemaMarkup type="Article" data={{
                headline: post.title,
                image: post.image,
                author: post.author.name,
                datePublished: post.publishDate
            }} />

            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={breadcrumbItems} />
            </div>

            <article className="py-8">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            {/* Header */}
                            <header className="mb-12">
                                <div className="text-orange-600 font-bold text-sm uppercase tracking-wider mb-4 bg-orange-50 inline-block px-3 py-1 rounded-full">{post.category}</div>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight tacking-tight">{post.title}</h1>

                                <div className="flex items-center gap-4 text-gray-600 text-sm border-b border-gray-100 pb-8">
                                    <div className="flex items-center gap-2">
                                        <img src={post.author.photo} alt={post.author.name} className="w-10 h-10 rounded-full border border-gray-200" />
                                        <div>
                                            <span className="block text-gray-900 font-bold">{post.author.name}</span>
                                            <span className="text-xs text-gray-500">{post.author.role}</span>
                                        </div>
                                    </div>
                                    <span className="mx-2 text-gray-300">•</span>
                                    <time dateTime={post.publishDate}>{new Date(post.publishDate).toLocaleDateString()}</time>
                                    <span className="mx-2 text-gray-300">•</span>
                                    <span>5 min read</span>
                                </div>
                            </header>

                            <img src={post.image} alt={post.title} className="w-full h-[450px] object-cover rounded-2xl mb-12 shadow-xl border border-gray-100" />

                            <div
                                className="prose prose-lg prose-slate max-w-none mb-12 prose-headings:font-bold prose-headings:text-gray-900 prose-a:text-orange-600 prose-img:rounded-xl"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Mid-Article CTA */}
                            <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 mb-12">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Need Professional Help?</h3>
                                <p className="text-gray-600 mb-6">Don't risk DIY on complex systems. Our licensed pros are here to help.</p>
                                <CallButton />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-8" aria-label="Article Sidebar">
                            <div className="sticky top-24 space-y-8">
                                <TableOfContents />

                                <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                                    <h3 className="font-bold text-gray-900 mb-6 text-xl pb-4 border-b border-gray-100">Related Articles</h3>
                                    <div className="space-y-6">
                                        {relatedPosts.map(rp => (
                                            <Link href={`/blog/${rp.slug}`} key={rp.id} className="block group">
                                                <div className="h-32 overflow-hidden rounded-xl mb-3 relative">
                                                    <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                                </div>
                                                <h4 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors leading-snug">{rp.title}</h4>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
        </div>
    );
}
