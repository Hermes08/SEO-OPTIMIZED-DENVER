
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
        <div className="min-h-screen bg-gray-900">
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
                <div className="container mx-auto px-4 max-w-4xl">
                    {/* Header */}
                    <header className="mb-12">
                        <div className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-4">{post.category}</div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{post.title}</h1>

                        <div className="flex items-center gap-4 text-gray-400 text-sm border-b border-gray-800 pb-8">
                            <div className="flex items-center gap-2">
                                <img src={post.author.photo} alt={post.author.name} className="w-10 h-10 rounded-full" />
                                <div>
                                    <span className="block text-white font-medium">{post.author.name}</span>
                                    <span className="text-xs">{post.author.role}</span>
                                </div>
                            </div>
                            <span className="mx-2">•</span>
                            <time dateTime={post.publishDate}>{new Date(post.publishDate).toLocaleDateString()}</time>
                            <span className="mx-2">•</span>
                            <span>5 min read</span>
                        </div>
                    </header>

                    <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-xl mb-12" />

                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Content */}
                        <div className="lg:col-span-2">
                            <div
                                className="prose prose-invert prose-lg max-w-none mb-12"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            {/* Mid-Article CTA */}
                            <div className="bg-gray-800 p-8 rounded-xl border-l-4 border-orange-500 mb-12">
                                <h3 className="text-2xl font-bold text-white mb-2">Need Professional Help?</h3>
                                <p className="text-gray-300 mb-6">Don't risk DIY on complex systems. Our licensed pros are here to help.</p>
                                <CallButton />
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-8" aria-label="Article Sidebar">
                            <TableOfContents />

                            <div className="bg-gray-800 p-6 rounded-xl">
                                <h3 className="font-bold text-white mb-6">Related Articles</h3>
                                <div className="space-y-6">
                                    {relatedPosts.map(rp => (
                                        <Link href={`/blog/${rp.slug}`} key={rp.id} className="block group">
                                            <div className="h-32 overflow-hidden rounded-lg mb-3">
                                                <img src={rp.image} alt={rp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                            </div>
                                            <h4 className="font-bold text-white group-hover:text-orange-500 transition-colors">{rp.title}</h4>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
        </div>
    );
}
