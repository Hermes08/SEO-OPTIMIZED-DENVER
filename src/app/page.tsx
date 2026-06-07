import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { CATEGORIES, TESTIMONIALS, SERVICE_AREAS, PROCESS_STEPS, PHONE_NUMBER, CITY, STATE } from '@/lib/constants';

export const metadata: Metadata = {
    title: 'Home',
    description: `Professional services in ${CITY}, ${STATE}. Licensed, Insured, and Trusted experts available for 24/7 emergency service.`,
    alternates: { canonical: '/' },
};

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');

// inline icon helpers (Mile High stroke set)
const Star = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" /></svg>;
const Arrow = ({ w = 16 }: { w?: number }) => <svg viewBox="0 0 24 24" width={w} height={w} fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const Pin = ({ stroke = 'currentColor' }: { stroke?: string }) => <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke={stroke} strokeWidth="2" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.4" stroke={stroke} strokeWidth="2" /></svg>;
const Check = () => <svg viewBox="0 0 24 24" fill="none"><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /></svg>;
const Phone = () => <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" fill="currentColor" /></svg>;

const SVC_META = [
    { code: '01 / ELEC', rating: '4.9' },
    { code: '02 / PLMB', rating: '4.8' },
    { code: '03 / HVAC', rating: '4.9' },
    { code: '04 / SOLR', rating: '5.0' },
    { code: '05 / ROOF', rating: '4.8' },
    { code: '06 / GENL', rating: '4.9' },
];

const MARQUEE = ['Electrical', 'Plumbing', 'HVAC Repair', 'Solar Energy', 'Roofing', 'Remodeling', 'EV Chargers', 'Water Heaters', 'Furnace Install', 'Hail Damage', 'Panel Upgrades', '24/7 Emergency'];

const PROCESS_ICONS = [
    <svg key="0" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    <svg key="1" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" /><path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    <svg key="2" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M14 2v6h6M9 13h6M9 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>,
    <svg key="3" viewBox="0 0 24 24" fill="none"><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /></svg>,
];

const initials = (name: string) => name.trim().split(/\s+/).map((p) => p[0]).slice(0, 2).join('').toUpperCase();

export default function Home() {
    return (
        <>
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }] }} />
            <SchemaMarkup type="LocalBusiness" data={{ image: '/images/general-hero.jpg' }} />

            {/* 3 — Hero */}
            <section className="hero">
                <div className="wrap">
                    <div>
                        <span className="kicker">Denver&apos;s Multi-Trade Crew</span>
                        <h1>Professional<br />Services in<br /><span className="cu">Denver, CO</span></h1>
                        <p className="sub">Reliable, licensed, and insured experts ready to solve your problems today. We provide <b>top-tier solutions</b> for residential and commercial needs.</p>
                        <div className="hero-cta">
                            <a href={`tel:${PHONE_TEL}`} className="btn btn-copper">Call {PHONE_NUMBER}</a>
                            <a href="#services" className="btn btn-out">View Services</a>
                        </div>
                        <div className="hero-stats">
                            <div className="hs"><div className="hv">15+</div><div className="hl">Years</div></div>
                            <div className="hs"><div className="hv">2,400+</div><div className="hl">Homes</div></div>
                            <div className="hs"><div className="hv">4.9★</div><div className="hl">Rated</div></div>
                        </div>
                    </div>
                    <div className="hero-visual">
                        <div className="ph"><img src="/images/electrical-hero.jpg" alt="Licensed electrician performing a panel upgrade in a Denver home" width={720} height={560} fetchPriority="high" loading="eager" decoding="async" /></div>
                        <div className="tag-badge">
                            <svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" stroke="#fff" strokeWidth="2" strokeLinejoin="round" /><path d="m9 12 2 2 4-4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            Licensed &amp; Insured
                        </div>
                    </div>
                </div>
            </section>

            {/* 4 — Trades marquee */}
            <div className="marquee" aria-hidden="true">
                <div className="track">
                    {[...MARQUEE, ...MARQUEE].map((t, i) => <span className="it" key={i}>{t}</span>)}
                </div>
            </div>

            {/* 5 — Trust bar */}
            <div className="trust">
                <div className="wrap">
                    <div className="item"><span className="ic"><Star /></span><div><div className="t">4.9 / 5.0</div><div className="d">2,400+ Reviews</div></div></div>
                    <div className="item"><span className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><div><div className="t">Licensed</div><div className="d">&amp; Fully Insured</div></div></div>
                    <div className="item"><span className="ic"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span><div><div className="t">24/7</div><div className="d">Emergency Service</div></div></div>
                    <div className="item"><span className="ic"><svg viewBox="0 0 24 24" fill="none"><path d="M3 21V8l9-5 9 5v13M3 21h18M9 21v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg></span><div><div className="t">15+ Years</div><div className="d">On the Front Range</div></div></div>
                </div>
            </div>

            {/* 6 — Services grid */}
            <section className="block" id="services">
                <div className="wrap">
                    <div className="sec-head center">
                        <span className="kicker" style={{ justifyContent: 'center' }}>What We Do</span>
                        <h2 className="reveal">Our Core Services</h2>
                        <p>Comprehensive solutions tailored to your specific needs — from emergency repairs to complete system installations.</p>
                    </div>
                    <div className="svc-grid">
                        {CATEGORIES.map((cat, i) => (
                            <Link href={`/${cat.slug}`} className="svc" key={cat.id}>
                                <div className="svc-img">
                                    <img src={cat.heroImage} alt={cat.heroImageAlt || cat.title} width={420} height={184} loading="lazy" decoding="async" />
                                    <span className="svc-num">{SVC_META[i].code}</span>
                                    <span className="svc-rate"><Star />{SVC_META[i].rating}</span>
                                </div>
                                <div className="svc-body">
                                    <h3>{cat.title}</h3>
                                    <p>{cat.shortDescription}</p>
                                    <span className="svc-link">Learn More <Arrow /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7 — Why Us */}
            <section className="why" id="why">
                <div className="stripes stripe-top"></div>
                <div className="wrap">
                    <div className="why-photo">
                        <img src="/images/electrical-action.jpg" alt="Technician working on an electrical panel" width={620} height={545} loading="lazy" decoding="async" />
                        <div className="float"><b>2,400+</b><span>Homes Served</span></div>
                    </div>
                    <div>
                        <div className="sec-head">
                            <span className="kicker">The Difference</span>
                            <h2 className="reveal">Why Choose Denver Metro Services?</h2>
                        </div>
                        <div className="feats">
                            <div className="feat"><span className="fic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span><div><h3>Upfront Pricing</h3><p>No hidden fees or surprises. We provide clear, detailed quotes before any work begins.</p></div></div>
                            <div className="feat"><span className="fic"><svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg></span><div><h3>Expert Technicians</h3><p>Our team is fully licensed, background-checked, and regularly trained on the latest technology.</p></div></div>
                            <div className="feat"><span className="fic"><Check /></span><div><h3>Satisfaction Guaranteed</h3><p>We stand behind our work. If you&apos;re not happy, we&apos;ll make it right.</p></div></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 8 — Process */}
            <section className="block" id="process">
                <div className="wrap">
                    <div className="sec-head center">
                        <span className="kicker" style={{ justifyContent: 'center' }}>How It Works</span>
                        <h2 className="reveal">Simple, Transparent Process</h2>
                    </div>
                    <div className="proc-grid">
                        {PROCESS_STEPS.map((step, i) => (
                            <div className="step" key={step.title}>
                                <div className="n">{String(i + 1).padStart(2, '0')}</div>
                                <div className="ic">{PROCESS_ICONS[i]}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9 — Stat band */}
            <section className="statband">
                <div className="wrap">
                    <div className="stat"><div className="v">2,400+</div><div className="l">Homes Served</div></div>
                    <div className="stat"><div className="v">15 YRS</div><div className="l">In Business</div></div>
                    <div className="stat"><div className="v">24/7</div><div className="l">Emergency Service</div></div>
                    <div className="stat"><div className="v">4.9</div><div className="l">Average Rating</div></div>
                </div>
            </section>

            {/* 10 — Service areas */}
            <section className="areas block" id="areas">
                <div className="wrap">
                    <div>
                        <div className="sec-head">
                            <span className="kicker">Where We Work</span>
                            <h2 className="reveal">Serving Denver &amp; the Surrounding Metro</h2>
                        </div>
                        <p className="lead reveal d1">Five counties, one crew. Our technicians are locals who know Colorado homes — from Capitol Hill Victorians to South Metro new-builds. Don&apos;t see your zip? Call us to confirm coverage.</p>
                        <div className="county-grid">
                            {SERVICE_AREAS.map((area, i) => (
                                <div className={`county reveal d${(i % 2) + 1}`} key={area.id}>
                                    <h3><Pin /> {area.city}</h3>
                                    <div className="zips">{area.zipCodes.join(' · ')}</div>
                                    <div className="desc">{area.description}</div>
                                </div>
                            ))}
                            <Link href="/areas-we-serve" className="county reveal d2" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', borderColor: 'var(--copper)', background: 'var(--char-3)' }}>
                                <h3 style={{ color: "var(--copper)" }}>View all areas <Arrow /></h3>
                                <div className="desc">Full list of cities &amp; zip codes.</div>
                            </Link>
                        </div>
                    </div>
                    <div className="map-card reveal d2">
                        <span className="map-tag"><Pin stroke="#fff" /> Denver Metro Area</span>
                        <iframe loading="lazy" title="Denver Metro Services Area Map" src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Denver&t=&z=10&ie=UTF8&iwloc=B&output=embed"></iframe>
                    </div>
                </div>
            </section>

            {/* 11 — Promise / financing band */}
            <div className="promise">
                <div className="wrap">
                    <a href={`tel:${PHONE_TEL}`} className="pcard reveal d1">
                        <span className="pic"><Phone /></span>
                        <div><h3>24/7 Emergency</h3><p>Burst pipe, no heat, dead panel? We answer day or night.</p></div>
                        <span className="go">Call now <Arrow /></span>
                    </a>
                    <Link href="/financing" className="pcard reveal d2">
                        <span className="pic"><svg viewBox="0 0 24 24" fill="none"><rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" /><path d="M2 10h20" stroke="currentColor" strokeWidth="2" /><path d="M6 15h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg></span>
                        <div><h3>0% Financing Available</h3><p>Same-as-cash plans — all credit types considered.</p></div>
                        <span className="go">See plans <Arrow /></span>
                    </Link>
                </div>
            </div>

            {/* 12 — Reviews */}
            <section className="block" id="reviews">
                <div className="wrap">
                    <div className="sec-head center">
                        <span className="kicker" style={{ justifyContent: 'center' }}>Trusted by Neighbors</span>
                        <h2 className="reveal">What Denver Homeowners Say</h2>
                    </div>
                    <div className="rev-grid">
                        {TESTIMONIALS.map((t) => (
                            <div className="rev" key={t.id}>
                                <div className="stars">{Array.from({ length: t.rating }).map((_, i) => <Star key={i} />)}</div>
                                <p>&ldquo;{t.text}&rdquo;</p>
                                <div className="who">
                                    <span className="av">{initials(t.name)}</span>
                                    <div><b>{t.name}</b><span>{t.location} · {t.project}</span></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="rev-summary">
                        <span className="big">4.9</span>
                        <div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div>
                        <span className="meta">Based on 2,400+ verified reviews</span>
                        <span className="gbadge"><svg viewBox="0 0 24 24" width="18" height="18"><path fill="#4285F4" d="M22.5 12.2c0-.8-.1-1.5-.2-2.2H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.9 3.2-8.1Z" /><path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.7l-3.6-2.7c-1 .7-2.3 1-3.6 1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23Z" /><path fill="#FBBC05" d="M6 14.5a6.6 6.6 0 0 1 0-4.2V7.5H2.3a11 11 0 0 0 0 9.8L6 14.5Z" /><path fill="#EA4335" d="M12 5.9c1.6 0 3 .6 4.1 1.6l3.1-3.1A11 11 0 0 0 12 1 11 11 0 0 0 2.3 7.5L6 10.3c.9-2.5 3.2-4.4 6-4.4Z" /></svg> Google</span>
                    </div>
                </div>
            </section>

            {/* 13 — CTA */}
            <section className="cta">
                <div className="stripes stripe-top"></div>
                <div className="wrap">
                    <h2>Ready to <span className="cu">Get Started?</span></h2>
                    <p>Don&apos;t let small issues become big problems. Contact our team today for fast, reliable service.</p>
                    <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" style={{ fontSize: '20px', padding: '18px 34px' }}>Call {PHONE_NUMBER}</a>
                    <div className="cta-feats">
                        <span><Check /> Fast Response</span>
                        <span><Check /> Licensed &amp; Insured</span>
                        <span><Check /> Satisfaction Guaranteed</span>
                    </div>
                </div>
            </section>
        </>
    );
}
