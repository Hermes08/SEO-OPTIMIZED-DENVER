import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { BLOG_POSTS, CATEGORIES, PHONE_NUMBER } from '@/lib/constants';
import { SchemaMarkup } from '@/components/SchemaMarkup';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');
const Arrow = ({ w = 16 }: { w?: number }) => <svg viewBox="0 0 24 24" width={w} height={w} fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const fmtDate = (d: string) => new Date(d + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
const cat = (c: string) => c.replace(/ Services?$/, '').toUpperCase();

export const metadata: Metadata = {
    title: 'Tips & Resources | Blog',
    description: 'Expert advice, maintenance guides, and industry news for homeowners.',
    alternates: { canonical: '/blog' },
};

export default function BlogIndex() {
    const [featured, ...rest] = BLOG_POSTS;

    return (
        <>
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }] }} />

            <div className="bc"><div className="wrap"><Link href="/">Home</Link><span className="sep">/</span><span className="cur">Blog</span></div></div>

            {/* hero */}
            <section className="phero" style={{ padding: '52px 0' }}>
                <div className="wrap">
                    <span className="kicker">Tips &amp; Resources</span>
                    <h1>The Denver Home <span className="cu">Journal</span></h1>
                    <p className="sub">Practical advice for Colorado homeowners — straight from our licensed techs. Electrical, plumbing, HVAC, solar, roofing and more.</p>
                </div>
            </section>

            {/* featured + grid */}
            <section className="block">
                <div className="wrap">
                    <div className="sec-head"><span className="kicker">Featured</span><h2>Editor&apos;s Pick</h2></div>
                    <Link href={`/blog/${featured.slug}`} className="feature">
                        <div className="img"><img src={featured.image} alt={featured.imageAlt || ''} /><span className="cat">{cat(featured.category)}</span></div>
                        <div className="body">
                            <div className="ftag">{featured.category}</div>
                            <h3>{featured.title}</h3>
                            <p>{featured.excerpt}</p>
                            <div className="fmeta"><span>{fmtDate(featured.publishDate)}</span><span>·</span><span>6 min read</span></div>
                            <span className="read">Read Article <Arrow /></span>
                        </div>
                    </Link>

                    <div className="filters">
                        <Link href="/blog" className="on">All</Link>
                        {CATEGORIES.map((c) => <Link href={`/${c.slug}/blog`} key={c.id}>{cat(c.title)}</Link>)}
                    </div>

                    <div className="svc-grid" style={{ marginTop: 22 }}>
                        {rest.map((post) => (
                            <Link href={`/blog/${post.slug}`} className="svc" key={post.id}>
                                <div className="svc-img"><img src={post.image} alt="" role="presentation" loading="lazy" decoding="async" /><span className="svc-num">{cat(post.category)}</span></div>
                                <div className="svc-body">
                                    <div className="post-meta"><span>{fmtDate(post.publishDate)}</span><span>·</span><span>5 min</span></div>
                                    <h3 style={{ fontSize: 21 }}>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <span className="svc-link">Read More <Arrow /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta"><div className="stripes stripe-top"></div><div className="wrap">
                <h2>Have a Project in <span className="cu">Mind?</span></h2>
                <p>Skip the research — talk to a licensed Denver pro today.</p>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" style={{ fontSize: 20, padding: '18px 34px' }}>Call {PHONE_NUMBER}</a>
            </div></section>
        </>
    );
}
