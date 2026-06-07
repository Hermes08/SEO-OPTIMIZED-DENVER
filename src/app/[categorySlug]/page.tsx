import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES, CITY, STATE, SERVICE_AREAS, PROCESS_STEPS, BLOG_POSTS, GENERATE_CONTENT, PHONE_NUMBER } from '@/lib/constants';
import { CONTENT_OVERRIDES } from '@/content/overrides';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { GoogleReviews } from '@/components/GoogleReviews';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');

const Pin = ({ s = 'currentColor' }: { s?: string }) => <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke={s} strokeWidth="2" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.4" stroke={s} strokeWidth="2" /></svg>;
const Arrow = ({ w = 16 }: { w?: number }) => <svg viewBox="0 0 24 24" width={w} height={w} fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const Plus = () => <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>;
const Check = () => <svg viewBox="0 0 24 24" fill="none"><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /></svg>;
const PhoneSvg = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" fill="#fff" /></svg>;
const PROC_ICONS = [
    <svg key="0" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none"><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /></svg>,
];

export async function generateStaticParams() {
    return CATEGORIES.map((category) => ({ categorySlug: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string }>; }) {
    const resolvedParams = await params;
    const category = CATEGORIES.find((c) => c.slug === resolvedParams.categorySlug);
    if (!category) return { title: 'Category Not Found' };

    const title = `${category.title} in ${CITY}`;
    const description = `Professional ${category.title} services in ${CITY}, ${STATE}. ${category.shortDescription} Call today for a quote!`;
    const url = `/${category.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { type: 'website', title, description, url, images: [{ url: category.heroImage, alt: category.heroImageAlt || category.title }] },
        twitter: { card: 'summary_large_image', title, description, images: [category.heroImage] },
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }>; }) {
    const resolvedParams = await params;
    const category = CATEGORIES.find((c) => c.slug === resolvedParams.categorySlug);
    if (!category) notFound();

    const code = category.slug.replace(/-services?$/, '').slice(0, 4).toUpperCase();

    return (
        <>
            <SchemaMarkup type="Service" data={{ serviceType: category.title, image: category.heroImage, description: category.description }} />

            {/* breadcrumb */}
            <div className="bc"><div className="wrap"><Link href="/">Home</Link><span className="sep">/</span><span className="cur">{category.title}</span></div></div>

            {/* hero */}
            <section className="phero">
                <img className="bgimg" src={category.heroImage} alt="" role="presentation" />
                <div className="wrap">
                    <span className="kicker">Denver Metro Services</span>
                    <h1>{category.title} in <span className="cu">{CITY}, {STATE}</span></h1>
                    <p className="sub">{category.description}</p>
                    <a href={`tel:${PHONE_TEL}`} className="btn btn-copper"><PhoneSvg /> Call {PHONE_NUMBER}</a>
                    <div className="phero-feats">
                        <span><span className="d" /> Licensed &amp; Insured</span>
                        <span><span className="d" /> Same-Day Service</span>
                        <span><span className="d" /> Satisfaction Guaranteed</span>
                    </div>
                </div>
            </section>

            {/* intro + benefits */}
            <section className="block">
                <div className="wrap">
                    <p className="text-lg leading-relaxed mb-12 max-w-4xl" style={{ color: 'var(--muted)' }}>
                        {category.description} We are committed to providing top-notch service to the {CITY} community, using the latest technology to ensure your job is done right the first time.
                    </p>
                    <div className="sec-head"><span className="kicker">The Difference</span><h2>Why Choose Our {category.title}?</h2></div>
                    <div className="feat-grid">
                        {category.benefits.map((benefit, i) => (
                            <div className="feat" key={i}>
                                <span className="fic"><category.icon size={25} aria-hidden="true" /></span>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* sub-services */}
            <section className="block band-paper2">
                <div className="wrap">
                    <div className="sec-head"><span className="kicker">What We Offer</span><h2>{category.title} We Offer</h2></div>
                    <div className="svc-grid">
                        {category.subServices.map((service, i) => (
                            <Link href={`/${category.slug}/${service.slug}`} className="svc" key={service.id}>
                                <div className="svc-img">
                                    <img src={service.image} alt={service.imageAlt || `${service.title} in ${CITY}`} loading="lazy" decoding="async" />
                                    <span className="svc-num">{String(i + 1).padStart(2, '0')} / {code}</span>
                                </div>
                                <div className="svc-body">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <span className="svc-link">Learn More <Arrow /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* local SEO + map + counties */}
            <section className="phero" style={{ padding: '80px 0' }}>
                <div className="wrap">
                    <div className="sec-head"><span className="kicker">Where We Work</span><h2 style={{ color: '#fff' }}>Serving {CITY} &amp; Surrounding Areas</h2><p style={{ color: '#bcae9f' }}>We proudly serve {CITY} and surrounding communities with professional {category.title.toLowerCase()} throughout {STATE}.</p></div>
                    <div className="map-card" style={{ marginTop: 30, height: 360 }}>
                        <span className="map-tag"><Pin s="#fff" /> Denver Metro Area</span>
                        <iframe loading="lazy" title={`${category.title} service area in ${CITY}`} src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Denver&t=&z=10&ie=UTF8&iwloc=B&output=embed"></iframe>
                    </div>
                    <div className="county-grid">
                        {SERVICE_AREAS.map((area) => (
                            <div className="county" key={area.id}>
                                <h3><Pin /> {area.city}</h3>
                                <div className="zips">{area.zipCodes.join(' · ')}</div>
                            </div>
                        ))}
                    </div>
                    <Link href="/areas-we-serve" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 24, fontFamily: 'var(--font-saira)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.03em', color: 'var(--copper)' }}>View All Service Areas <Arrow /></Link>
                </div>
            </section>

            {/* process */}
            <section className="proc block">
                <div className="stripes stripe-top"></div>
                <div className="wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
                    <div className="sec-head center"><span className="kicker center">How It Works</span><h2>Our Service Process</h2></div>
                    <div className="proc-grid">
                        {PROCESS_STEPS.map((step, i) => (
                            <div className="step" key={step.title}>
                                <div className="n">{String(i + 1).padStart(2, '0')}</div>
                                <div className="ic">{PROC_ICONS[i]}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* blog preview */}
            <section className="block">
                <div className="wrap">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 14 }}>
                        <div className="sec-head"><span className="kicker">Tips &amp; Resources</span><h2>From the Blog</h2></div>
                        <Link href="/blog" style={{ fontFamily: 'var(--font-saira)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.03em', color: 'var(--copper)', display: 'inline-flex', alignItems: 'center', gap: 7 }}>View All Articles <Arrow /></Link>
                    </div>
                    <div className="svc-grid">
                        {BLOG_POSTS.slice(0, 3).map((post) => (
                            <Link href={`/blog/${post.slug}`} className="svc" key={post.id}>
                                <div className="svc-img"><img src={post.image} alt="" role="presentation" loading="lazy" decoding="async" /><span className="svc-num">{post.category.replace(/ Services?$/, '').toUpperCase()}</span></div>
                                <div className="svc-body"><h3 style={{ fontSize: 21 }}>{post.title}</h3><p>{post.excerpt}</p><span className="svc-link">Read More <Arrow /></span></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="block band-paper2">
                <div className="wrap" style={{ maxWidth: 860 }}>
                    <div className="sec-head center" style={{ marginBottom: 30 }}><span className="kicker center">Questions</span><h2>Frequently Asked Questions</h2></div>
                    {category.faqs.map((faq, i) => (
                        <details className="qa" key={i} open={i === 0}>
                            <summary>{faq.question}<span className="ic"><Plus /></span></summary>
                            <p>{faq.answer}</p>
                        </details>
                    ))}
                    <SchemaMarkup type="FAQPage" data={{ faqs: category.faqs }} />
                </div>
            </section>

            {/* SEO heavy content */}
            <section className="block">
                <div className="wrap" style={{ maxWidth: 860 }}>
                    <div className="generated-content prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: CONTENT_OVERRIDES[category.slug] || GENERATE_CONTENT(category.title) }} />
                </div>
            </section>

            <GoogleReviews />

            {/* CTA */}
            <section className="cta"><div className="stripes stripe-top"></div><div className="wrap">
                <h2>Ready for Professional <span className="cu">{category.title}?</span></h2>
                <p>Contact us today for expert service in {CITY}.</p>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" style={{ fontSize: 20, padding: '18px 34px' }}>Call {PHONE_NUMBER}</a>
                <div className="cta-feats">
                    <span><Check /> Fast Response</span>
                    <span><Check /> Licensed &amp; Insured</span>
                    <span><Check /> Satisfaction Guaranteed</span>
                </div>
            </div></section>
        </>
    );
}
