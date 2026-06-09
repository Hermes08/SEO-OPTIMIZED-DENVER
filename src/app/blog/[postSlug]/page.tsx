import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, PHONE_NUMBER } from '@/lib/constants';
import { SchemaMarkup } from '@/components/SchemaMarkup';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');
const Arrow = () => <svg viewBox="0 0 24 24" width={16} height={16} fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const fmtDate = (d: string) => new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const catCode = (c: string) => c.replace(/ Services?$/, '').toUpperCase();
const initials = (n: string) => n.trim().split(/\s+/).map((p) => p[0]).slice(0, 2).join('').toUpperCase();

export async function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({ postSlug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ postSlug: string }>; }) {
    const resolvedParams = await params;
    const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.postSlug);
    if (!post) return { title: 'Post Not Found' };
    const url = `/blog/${post.slug}`;
    return {
        title: post.title,
        description: post.excerpt,
        alternates: { canonical: url },
        openGraph: { type: 'article', title: post.title, description: post.excerpt, url, images: [{ url: post.image, alt: post.imageAlt || post.title }] },
        twitter: { card: 'summary_large_image', title: post.title, description: post.excerpt, images: [post.image] },
    };
}

export default async function BlogPostPage({ params }: { params: Promise<{ postSlug: string }>; }) {
    const resolvedParams = await params;
    const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.postSlug);
    if (!post) notFound();

    const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3);
    const tags = [catCode(post.category), 'Denver', 'Tips'];

    return (
        <>
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }, { name: post.title, url: `/blog/${post.slug}` }] }} />
            <SchemaMarkup type="Article" data={{ headline: post.title, image: post.image, author: post.author.name, datePublished: post.publishDate }} />

            <div className="bc"><div className="wrap"><Link href="/">Home</Link><span className="sep">/</span><Link href="/blog">Blog</Link><span className="sep">/</span><span className="cur">{post.title}</span></div></div>

            {/* post hero */}
            <section className="post-hero">
                <div className="img"><img src={post.image} alt={post.imageAlt || post.title} fetchPriority="high" decoding="async" /></div>
                <div className="wrap">
                    <span className="cat">{post.category} · Guide</span>
                    <h1>{post.title}</h1>
                    <div className="meta">
                        <span className="av">{initials(post.author.name)}</span>
                        <span className="who"><b>{post.author.name}</b></span>
                        <span>·</span><time dateTime={post.publishDate}>{fmtDate(post.publishDate)}</time><span>·</span><span>5 min read</span>
                    </div>
                </div>
            </section>

            {/* post body */}
            <article className="post-body">
                <div className="post-wrap">
                    <p className="lead">{post.excerpt}</p>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                    <div className="author">
                        <span className="av">{initials(post.author.name)}</span>
                        <div>
                            <h4>{post.author.name}</h4>
                            <div className="role">{post.author.role}</div>
                            <p>Part of the {post.category.replace(/ Services?$/, '')} team at Denver Metro Services, serving homeowners across the Front Range.</p>
                        </div>
                    </div>

                    <div className="post-foot">
                        <div className="tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
                        <div className="share">
                            <a href={`tel:${PHONE_TEL}`} aria-label="Call us"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg></a>
                        </div>
                    </div>
                </div>
            </article>

            {/* related */}
            <section className="block band-paper2">
                <div className="wrap">
                    <div className="sec-head"><span className="kicker">Keep Reading</span><h2>Related Articles</h2></div>
                    <div className="svc-grid">
                        {related.map((rp) => (
                            <Link href={`/blog/${rp.slug}`} className="svc" key={rp.id}>
                                <div className="svc-img"><img src={rp.image} alt="" role="presentation" loading="lazy" decoding="async" /><span className="svc-num">{catCode(rp.category)}</span></div>
                                <div className="svc-body"><h3 style={{ fontSize: 21 }}>{rp.title}</h3><p>{rp.excerpt}</p><span className="svc-link">Read More <Arrow /></span></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta"><div className="stripes stripe-top"></div><div className="wrap">
                <h2>Have a Project? <span className="cu">Get an Estimate.</span></h2>
                <p>Talk to a licensed local crew today.</p>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" style={{ fontSize: 20, padding: '18px 34px' }}>Call {PHONE_NUMBER}</a>
            </div></section>
        </>
    );
}
