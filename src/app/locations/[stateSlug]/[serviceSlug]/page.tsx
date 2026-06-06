import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STATES, STATE_BY_SLUG } from '@/lib/states';
import { CATEGORIES, PROCESS_STEPS, PHONE_NUMBER, COMPANY_NAME, BASE_URL } from '@/lib/constants';
import { SchemaMarkup } from '@/components/SchemaMarkup';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');
const Arrow = ({ w = 16 }: { w?: number }) => <svg viewBox="0 0 24 24" width={w} height={w} fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const Check = () => <svg viewBox="0 0 24 24" fill="none"><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /></svg>;
const Plus = () => <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>;
const PhoneSvg = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" fill="#fff" /></svg>;

export async function generateStaticParams() {
    return STATES.flatMap((s) => CATEGORIES.map((c) => ({ stateSlug: s.slug, serviceSlug: c.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ stateSlug: string; serviceSlug: string }>; }) {
    const { stateSlug, serviceSlug } = await params;
    const state = STATE_BY_SLUG[stateSlug];
    const category = CATEGORIES.find((c) => c.slug === serviceSlug);
    if (!state || !category) return { title: 'Not Found' };
    const title = `${category.title} in ${state.name}`;
    const description = `Professional ${category.title.toLowerCase()} across ${state.name} — ${state.majorCities.slice(0, 3).join(', ')} & beyond. ${category.shortDescription} Licensed, insured, 24/7.`;
    const url = `/locations/${state.slug}/${category.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { type: 'website', title, description, url, images: [{ url: category.heroImage, alt: title }] },
        twitter: { card: 'summary_large_image', title, description, images: [category.heroImage] },
    };
}

export default async function StateServicePage({ params }: { params: Promise<{ stateSlug: string; serviceSlug: string }>; }) {
    const { stateSlug, serviceSlug } = await params;
    const state = STATE_BY_SLUG[stateSlug];
    const category = CATEGORIES.find((c) => c.slug === serviceSlug);
    if (!state || !category) notFound();

    const faqs = [
        { question: `How much does ${category.title.toLowerCase()} cost in ${state.name}?`, answer: `Costs vary by scope. We provide transparent, upfront pricing after a brief diagnostic for ${category.title.toLowerCase()} anywhere in ${state.name}, including ${state.majorCities.slice(0, 3).join(', ')}.` },
        ...category.faqs,
    ];
    const serviceSchema = {
        '@context': 'https://schema.org', '@type': 'Service', serviceType: category.title,
        provider: { '@type': 'LocalBusiness', name: COMPANY_NAME, telephone: PHONE_NUMBER, priceRange: '$$' },
        areaServed: { '@type': 'State', name: state.name },
        description: `${category.title} across ${state.name}.`,
        image: `${BASE_URL}${category.heroImage}`, url: `${BASE_URL}/locations/${state.slug}/${category.slug}`,
    };

    return (
        <>
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }, { name: 'Locations', url: '/locations' }, { name: state.name, url: `/locations/${state.slug}` }, { name: category.title, url: `/locations/${state.slug}/${category.slug}` }] }} />
            <SchemaMarkup type="FAQPage" data={{ faqs }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            <div className="bc"><div className="wrap"><Link href="/">Home</Link><span className="sep">/</span><Link href="/locations">Locations</Link><span className="sep">/</span><Link href={`/locations/${state.slug}`}>{state.name}</Link><span className="sep">/</span><span className="cur">{category.title}</span></div></div>

            {/* hero */}
            <section className="phero">
                <img className="bgimg" src={category.heroImage} alt="" role="presentation" />
                <div className="wrap">
                    <span className="kicker">{state.name} · {category.title}</span>
                    <h1>{category.title} in <span className="cu">{state.name}</span></h1>
                    <p className="sub">{category.description} Serving {state.mainCity} and communities across {state.name}.</p>
                    <a href={`tel:${PHONE_TEL}`} className="btn btn-copper"><PhoneSvg /> Call {PHONE_NUMBER}</a>
                    <div className="phero-feats"><span><span className="d" /> Licensed &amp; Insured</span><span><span className="d" /> 24/7 Emergency</span><span><span className="d" /> Statewide</span></div>
                </div>
            </section>

            {/* sub-services */}
            <section className="block">
                <div className="wrap">
                    <p className="text-lg leading-relaxed mb-12 max-w-4xl" style={{ color: 'var(--muted)' }}>
                        {COMPANY_NAME} delivers professional {category.title.toLowerCase()} to homeowners throughout {state.name}. Our licensed technicians serve {state.majorCities.join(', ')} with the same upfront pricing and satisfaction guarantee in every city.
                    </p>
                    <div className="sec-head"><span className="kicker">What We Offer</span><h2>{category.title} We Offer in {state.name}</h2></div>
                    <div className="svc-grid">
                        {category.subServices.map((sub, i) => (
                            <Link href={`/${category.slug}/${sub.slug}`} className="svc" key={sub.id}>
                                <div className="svc-img"><img src={sub.image} alt={sub.imageAlt || sub.title} /><span className="svc-num">{String(i + 1).padStart(2, '0')}</span></div>
                                <div className="svc-body"><h3>{sub.title}</h3><p>{sub.description}</p><span className="svc-link">Learn More <Arrow /></span></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* benefits */}
            <section className="block band-paper2">
                <div className="wrap">
                    <div className="sec-head"><span className="kicker">The Difference</span><h2>Why {state.name} Chooses Us</h2></div>
                    <div className="feat-grid">
                        {category.benefits.map((b, i) => (
                            <div className="feat" key={i}><span className="fic"><category.icon size={25} aria-hidden="true" /></span><h3>{b.title}</h3><p>{b.description}</p></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* cities */}
            <section className="phero" style={{ padding: '80px 0' }}>
                <div className="wrap">
                    <div className="sec-head"><span className="kicker">Where We Work</span><h2 style={{ color: '#fff' }}>{category.title} Across {state.name}</h2></div>
                    <div className="area-chips" style={{ marginTop: 24 }}>
                        {state.majorCities.map((c) => <span key={c} style={{ background: 'var(--char-2)', borderColor: 'var(--line-dark)', color: '#cabcae' }}>{c}, {state.code}</span>)}
                    </div>
                    <Link href={`/locations/${state.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 7, marginTop: 24, fontFamily: 'var(--font-saira)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '.03em', color: 'var(--copper)' }}>All services in {state.name} <Arrow /></Link>
                </div>
            </section>

            {/* FAQ */}
            <section className="block band-paper2">
                <div className="wrap" style={{ maxWidth: 860 }}>
                    <div className="sec-head center" style={{ marginBottom: 30 }}><span className="kicker center">Questions</span><h2>{category.title} FAQ — {state.name}</h2></div>
                    {faqs.map((faq, i) => (
                        <details className="qa" key={i} open={i === 0}><summary>{faq.question}<span className="ic"><Plus /></span></summary><p>{faq.answer}</p></details>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta"><div className="stripes stripe-top"></div><div className="wrap">
                <h2>Need {category.title} in <span className="cu">{state.name}?</span></h2>
                <p>Call now for fast, licensed service in {state.mainCity} and across {state.name}.</p>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" style={{ fontSize: 20, padding: '18px 34px' }}>Call {PHONE_NUMBER}</a>
                <div className="cta-feats"><span><Check /> Fast Response</span><span><Check /> Licensed &amp; Insured</span><span><Check /> Satisfaction Guaranteed</span></div>
            </div></section>
        </>
    );
}
