import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES, BLOG_POSTS, PHONE_NUMBER } from '@/lib/constants';
import { SchemaMarkup } from '@/components/SchemaMarkup';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');
const Arrow = () => <svg viewBox="0 0 24 24" width={16} height={16} fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const fmtDate = (d: string) => new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const catCode = (c: string) => c.replace(/ Services?$/, '').toUpperCase();

interface Props { params: Promise<{ categorySlug: string }>; }

export async function generateStaticParams() {
    return CATEGORIES.map((cat) => ({ categorySlug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { categorySlug } = await params;
    const category = CATEGORIES.find((c) => c.slug === categorySlug);
    if (!category) return { title: 'Category Not Found' };
    // NOTE: layout template appends " | Denver Metro Services" — do NOT hardcode it here.
    return {
        title: `${category.title} Blog & Tips`,
        description: `Expert advice, tips, and guides about ${category.title.toLowerCase()} for Denver homeowners.`,
        alternates: { canonical: `/${category.slug}/blog` },
    };
}

export default async function CategoryBlogPage({ params }: Props) {
    const { categorySlug } = await params;
    const category = CATEGORIES.find((c) => c.slug === categorySlug);
    if (!category) notFound();

    const filteredPosts = BLOG_POSTS.filter((post) => post.category === category.title);

    return (
        <>
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }, { name: category.title, url: `/${category.slug}` }, { name: 'Blog', url: `/${category.slug}/blog` }] }} />

            <div className="bc"><div className="wrap">
                <Link href="/">Home</Link><span className="sep">/</span>
                <Link href={`/${category.slug}`}>{category.title}</Link><span className="sep">/</span>
                <span className="cur">Blog</span>
            </div></div>

            {/* hero */}
            <section className="phero" style={{ padding: '52px 0' }}>
                <div className="wrap">
                    <span className="kicker">Tips &amp; Resources</span>
                    <h1>{category.title} <span className="cu">Tips &amp; Guides</span></h1>
                    <p className="sub">Expert advice and local insights for your {category.title.toLowerCase()} needs across the Denver Metro.</p>
                </div>
            </section>

            {/* posts */}
            <section className="block">
                <div className="wrap">
                    {filteredPosts.length > 0 ? (
                        <div className="svc-grid">
                            {filteredPosts.map((post) => (
                                <Link href={`/blog/${post.slug}`} className="svc" key={post.id}>
                                    <div className="svc-img"><img src={post.image} alt={post.imageAlt || ''} loading="lazy" decoding="async" /><span className="svc-num">{catCode(post.category)}</span></div>
                                    <div className="svc-body">
                                        <div className="post-meta"><span>{fmtDate(post.publishDate)}</span><span>·</span><span>{post.author.name}</span></div>
                                        <h2 style={{ fontFamily: 'var(--font-saira)', fontWeight: 800, textTransform: 'uppercase', fontSize: 21, color: 'var(--char)', lineHeight: 0.96, marginBottom: 9 }}>{post.title}</h2>
                                        <p>{post.excerpt}</p>
                                        <span className="svc-link">Read Article <Arrow /></span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '60px 0' }}>
                            <div className="sec-head center"><span className="kicker center">Coming Soon</span><h2>More {category.title} Guides on the Way</h2><p>We&apos;re publishing new {category.title.toLowerCase()} articles regularly. In the meantime, browse all our resources.</p></div>
                            <Link href="/blog" className="btn btn-copper" style={{ marginTop: 24 }}>View All Articles <Arrow /></Link>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className="cta"><div className="stripes stripe-top"></div><div className="wrap">
                <h2>Need {category.title} <span className="cu">Today?</span></h2>
                <p>Skip the research — talk to a licensed Denver pro now.</p>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" style={{ fontSize: 20, padding: '18px 34px' }}>Call {PHONE_NUMBER}</a>
            </div></section>
        </>
    );
}
