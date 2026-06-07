import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { STATES, STATE_BY_SLUG, STATE_INTRO } from '@/lib/states';
import { CATEGORIES, PROCESS_STEPS, PHONE_NUMBER, COMPANY_NAME, BASE_URL } from '@/lib/constants';
import { SchemaMarkup } from '@/components/SchemaMarkup';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');
const Pin = ({ s = 'currentColor' }: { s?: string }) => <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke={s} strokeWidth="2" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.4" stroke={s} strokeWidth="2" /></svg>;
const Arrow = ({ w = 16 }: { w?: number }) => <svg viewBox="0 0 24 24" width={w} height={w} fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const Check = () => <svg viewBox="0 0 24 24" fill="none"><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /></svg>;
const Plus = () => <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>;
const PhoneSvg = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" fill="#fff" /></svg>;
const PROC_ICONS = [
    <svg key="0" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none"><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /></svg>,
];

export async function generateStaticParams() {
    return STATES.map((s) => ({ stateSlug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ stateSlug: string }>; }) {
    const { stateSlug } = await params;
    const state = STATE_BY_SLUG[stateSlug];
    if (!state) return { title: 'Location Not Found' };
    const title = `Home Services in ${state.name}`;
    const description = `Professional electrical, plumbing, HVAC, solar, roofing & remodeling services across ${state.name} — including ${state.majorCities.slice(0, 3).join(', ')}. Licensed, insured, 24/7.`;
    const url = `/locations/${state.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { type: 'website', title, description, url, images: [{ url: '/images/general-hero.jpg', alt: title }] },
        twitter: { card: 'summary_large_image', title, description, images: ['/images/general-hero.jpg'] },
    };
}

export default async function StatePage({ params }: { params: Promise<{ stateSlug: string }>; }) {
    const { stateSlug } = await params;
    const state = STATE_BY_SLUG[stateSlug];
    if (!state) notFound();

    const SVC_CODES = ['ELEC', 'PLMB', 'HVAC', 'SOLR', 'ROOF', 'GENL'];
    const faqs = [
        { question: `What home services do you offer in ${state.name}?`, answer: `We provide electrical, plumbing, HVAC, solar, roofing, and general contracting services across ${state.name}, including ${state.majorCities.slice(0, 4).join(', ')} and surrounding communities.` },
        { question: `How fast can you respond to an emergency in ${state.mainCity}?`, answer: `We offer 24/7 emergency service throughout ${state.name}, with same-day response available in most ${state.mainCity}-area locations.` },
        { question: `Are your technicians licensed and insured in ${state.name}?`, answer: `Yes — all work is performed by fully licensed, insured, and background-checked professionals who pull every required permit.` },
    ];

    // Inline Service schema with the correct state as areaServed
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Home Services',
        provider: { '@type': 'LocalBusiness', name: COMPANY_NAME, telephone: PHONE_NUMBER, priceRange: '$$' },
        areaServed: { '@type': 'State', name: state.name },
        description: `Electrical, plumbing, HVAC, solar, roofing and remodeling across ${state.name}.`,
        image: `${BASE_URL}/images/general-hero.jpg`,
        url: `${BASE_URL}/locations/${state.slug}`,
    };

    return (
        <>
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }, { name: 'Locations', url: '/locations' }, { name: state.name, url: `/locations/${state.slug}` }] }} />
            <SchemaMarkup type="FAQPage" data={{ faqs }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

            {/* breadcrumb */}
            <div className="bc"><div className="wrap"><Link href="/">Home</Link><span className="sep">/</span><Link href="/locations">Locations</Link><span className="sep">/</span><span className="cur">{state.name}</span></div></div>

            {/* hero */}
            <section className="phero">
                <img className="bgimg" src="/images/general-hero.jpg" alt="" role="presentation" />
                <div className="wrap">
                    <span className="kicker">Serving {state.name}</span>
                    <h1>Home Services in <span className="cu">{state.name}</span></h1>
                    <p className="sub">Licensed electrical, plumbing, HVAC, solar, roofing &amp; remodeling crews serving {state.mainCity} and communities across {state.name}. Upfront pricing, 24/7 emergency response.</p>
                    <a href={`tel:${PHONE_TEL}`} className="btn btn-copper"><PhoneSvg /> Call {PHONE_NUMBER}</a>
                    <div className="phero-feats">
                        <span><span className="d" /> Licensed &amp; Insured</span>
                        <span><span className="d" /> 24/7 Emergency</span>
                        <span><span className="d" /> Statewide Coverage</span>
                    </div>
                </div>
            </section>

            {/* intro */}
            <section className="block">
                <div className="wrap">
                    <p className="text-lg leading-relaxed mb-12 max-w-4xl" style={{ color: 'var(--muted)' }}>
                        {STATE_INTRO[state.code] || `${COMPANY_NAME} brings professional, multi-trade home services to homeowners across ${state.name}. From ${state.majorCities[0]} to ${state.majorCities[state.majorCities.length - 1]}, our licensed technicians handle everything from emergency repairs to complete system installations — with the same upfront pricing and satisfaction guarantee in every city we serve.`}
                    </p>

                    <div className="sec-head"><span className="kicker">What We Do</span><h2>Our Services in {state.name}</h2></div>
                    <div className="svc-grid">
                        {CATEGORIES.map((cat, i) => (
                            <Link href={`/locations/${state.slug}/${cat.slug}`} className="svc" key={cat.id}>
                                <div className="svc-img"><img src={cat.heroImage} alt={cat.heroImageAlt || cat.title} /><span className="svc-num">{String(i + 1).padStart(2, '0')} / {SVC_CODES[i]}</span></div>
                                <div className="svc-body"><h3>{cat.title}</h3><p>{cat.shortDescription}</p><span className="svc-link">Learn More <Arrow /></span></div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* cities served */}
            <section className="phero" style={{ padding: '80px 0' }}>
                <div className="wrap">
                    <div className="sec-head"><span className="kicker">Where We Work</span><h2 style={{ color: '#fff' }}>Cities We Serve in {state.name}</h2><p style={{ color: '#bcae9f' }}>Local crews across {state.name}. Don&apos;t see your city? Call us — we likely cover it.</p></div>
                    <div className="area-chips" style={{ marginTop: 24 }}>
                        {state.majorCities.map((c) => <span key={c} style={{ background: 'var(--char-2)', borderColor: 'var(--line-dark)', color: '#cabcae' }} className="">{c}, {state.code}</span>)}
                    </div>
                </div>
            </section>

            {/* process */}
            <section className="proc block">
                <div className="stripes stripe-top"></div>
                <div className="wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
                    <div className="sec-head center"><span className="kicker center">How It Works</span><h2>Our Service Process</h2></div>
                    <div className="proc-grid">
                        {PROCESS_STEPS.map((step, i) => (
                            <div className="step" key={step.title}><div className="n">{String(i + 1).padStart(2, '0')}</div><div className="ic">{PROC_ICONS[i]}</div><h3>{step.title}</h3><p>{step.description}</p></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="block band-paper2">
                <div className="wrap" style={{ maxWidth: 860 }}>
                    <div className="sec-head center" style={{ marginBottom: 30 }}><span className="kicker center">Questions</span><h2>{state.name} Service FAQ</h2></div>
                    {faqs.map((faq, i) => (
                        <details className="qa" key={i} open={i === 0}><summary>{faq.question}<span className="ic"><Plus /></span></summary><p>{faq.answer}</p></details>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta"><div className="stripes stripe-top"></div><div className="wrap">
                <h2>Need a Pro in <span className="cu">{state.name}?</span></h2>
                <p>Call now for fast, licensed service in {state.mainCity} and across {state.name}.</p>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" style={{ fontSize: 20, padding: '18px 34px' }}>Call {PHONE_NUMBER}</a>
                <div className="cta-feats"><span><Check /> Fast Response</span><span><Check /> Licensed &amp; Insured</span><span><Check /> Satisfaction Guaranteed</span></div>
            </div></section>
        </>
    );
}
