import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { PaymentCalculator } from '@/components/PaymentCalculator';
import { FINANCING_PLANS, FINANCING_ELIGIBILITY, FINANCING_FAQS, FINANCING_PARTNERS, PHONE_NUMBER } from '@/lib/constants';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');
const Check = () => <svg viewBox="0 0 24 24" fill="none"><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /></svg>;
const Plus = () => <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>;

export const metadata: Metadata = {
    title: 'Financing Options',
    description: 'Affordable payment plans for your home improvement projects. Apply online and get approved in minutes.',
    alternates: { canonical: '/financing' },
};

export default function Financing() {
    const featuredIdx = FINANCING_PLANS.findIndex((p) => p.apr === 0);

    return (
        <>
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }, { name: 'Financing', url: '/financing' }] }} />

            <div className="bc"><div className="wrap"><Link href="/">Home</Link><span className="sep">/</span><span className="cur">Financing</span></div></div>

            {/* hero */}
            <section className="phero" style={{ padding: '52px 0' }}>
                <div className="wrap">
                    <span className="kicker">Flexible Payments</span>
                    <h1>Financing That <span className="cu">Fits Your Budget</span></h1>
                    <p className="sub">Don&apos;t let an unexpected repair wait. Spread the cost with same-as-cash and low-rate plans — all credit types considered.</p>
                </div>
            </section>

            {/* calculator */}
            <section className="block">
                <div className="wrap">
                    <div className="sec-head"><span className="kicker">Estimate</span><h2>Payment Calculator</h2></div>
                    <PaymentCalculator />
                </div>
            </section>

            {/* plans */}
            <section className="block band-paper2">
                <div className="wrap">
                    <div className="sec-head center"><span className="kicker center">Choose a Plan</span><h2>Plans for Every Project</h2></div>
                    <div className="plan-grid">
                        {FINANCING_PLANS.map((plan, i) => (
                            <div className={`plan ${i === featuredIdx ? 'feat' : ''}`} key={plan.id}>
                                {i === featuredIdx && <span className="ptag">Most Popular</span>}
                                <h3>{plan.name}</h3>
                                <div className="rate">{plan.apr === 0 ? '0' : plan.apr}<small>% APR</small></div>
                                <div className="term">Subject to approved credit</div>
                                <ul>
                                    {plan.features.map((f) => <li key={f}><Check /> {f}</li>)}
                                </ul>
                                <a href={`tel:${PHONE_TEL}`} className="btn btn-copper">Apply Now</a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* eligibility */}
            <section className="block">
                <div className="wrap">
                    <div className="feat-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <div className="feat">
                            <h3>What You&apos;ll Need</h3>
                            <ul style={{ listStyle: 'none', marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {FINANCING_ELIGIBILITY.requirements.map((r) => <li key={r} style={{ display: 'flex', gap: 10, color: 'var(--muted)', fontSize: 14 }}><span style={{ color: 'var(--copper)', width: 18, flexShrink: 0 }}><Check /></span> {r}</li>)}
                            </ul>
                        </div>
                        <div className="feat">
                            <h3>Good News</h3>
                            <ul style={{ listStyle: 'none', marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
                                {FINANCING_ELIGIBILITY.goodNews.map((g) => <li key={g} style={{ display: 'flex', gap: 10, color: 'var(--muted)', fontSize: 14 }}><span style={{ color: 'var(--copper)', width: 18, flexShrink: 0 }}><Check /></span> {g}</li>)}
                            </ul>
                        </div>
                    </div>

                    {/* partners */}
                    <div className="sec-head center" style={{ marginTop: 56 }}><span className="kicker center">Trusted Lenders</span><h2>Our Financing Partners</h2></div>
                    <div className="partners">
                        {FINANCING_PARTNERS.map((p) => <img key={p.id} src={p.logo} alt={p.name} />)}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="block band-paper2">
                <div className="wrap" style={{ maxWidth: 860 }}>
                    <div className="sec-head center" style={{ marginBottom: 30 }}><span className="kicker center">Questions</span><h2>Financing FAQ</h2></div>
                    {FINANCING_FAQS.map((faq, i) => (
                        <details className="qa" key={i} open={i === 0}>
                            <summary>{faq.question}<span className="ic"><Plus /></span></summary>
                            <p>{faq.answer}</p>
                        </details>
                    ))}
                    <SchemaMarkup type="FAQPage" data={{ faqs: FINANCING_FAQS }} />
                </div>
            </section>

            {/* CTA */}
            <section className="cta"><div className="stripes stripe-top"></div><div className="wrap">
                <h2>Ready to <span className="cu">Get Started?</span></h2>
                <p>Apply in minutes with a soft credit check that won&apos;t affect your score.</p>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" style={{ fontSize: 20, padding: '18px 34px' }}>Call {PHONE_NUMBER}</a>
            </div></section>
        </>
    );
}
