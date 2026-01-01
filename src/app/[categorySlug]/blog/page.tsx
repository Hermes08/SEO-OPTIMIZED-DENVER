import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES, BLOG_POSTS } from '@/lib/constants';
import { ChevronRight, Calendar, User } from 'lucide-react';

interface Props {
    params: Promise<{
        categorySlug: string;
    }>;
}

export async function generateStaticParams() {
    return CATEGORIES.map((cat) => ({
        categorySlug: cat.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { categorySlug } = await params;
    const category = CATEGORIES.find((c) => c.slug === categorySlug);

    if (!category) {
        return { title: 'Category Not Found' };
    }

    return {
        title: `${category.title} Blog & Tips | Denver Metro Services`,
        description: `Expert advice, tips, and guides about ${category.title.toLowerCase()} for Denver homeowners.`,
    };
}

export default async function CategoryBlogPage({ params }: Props) {
    const { categorySlug } = await params;
    const category = CATEGORIES.find((c) => c.slug === categorySlug);

    if (!category) {
        notFound();
    }

    const filteredPosts = BLOG_POSTS.filter((post) => post.category === category.title);

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero Section */}
            <section className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{category.title} Tips & Guides</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Expert advice and local insights for your {category.title.toLowerCase()} needs in Denver.
                    </p>
                </div>
            </section>

            {/* Breadcrumbs */}
            <div className="bg-white border-b border-gray-200">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
                        <ChevronRight size={16} />
                        <Link href={`/${category.slug}`} className="hover:text-orange-600 transition-colors">{category.title}</Link>
                        <ChevronRight size={16} />
                        <span className="text-gray-900 font-medium">Blog</span>
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    {filteredPosts.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post) => (
                                <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full group">
                                    <div className="h-56 bg-gray-200 relative overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.imageAlt}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                            {post.category}
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {new Date(post.publishDate).toLocaleDateString()}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <User size={14} />
                                                {post.author.name}
                                            </span>
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                                            <Link href={`/blog/${post.slug}`}>
                                                {post.title}
                                            </Link>
                                        </h2>
                                        <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                                            {post.excerpt}
                                        </p>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center gap-2 text-orange-600 font-bold hover:gap-3 transition-all"
                                        >
                                            Read Article <ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
                            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-4xl">📝</span>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">No Articles Yet</h3>
                            <p className="text-gray-600 max-w-md mx-auto mb-8">
                                We haven't published any articles for {category.title} yet. Check back soon for expert tips and guides!
                            </p>
                            <Link
                                href="/blog"
                                className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-orange-600 transition-colors"
                            >
                                View All Articles
                            </Link>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
