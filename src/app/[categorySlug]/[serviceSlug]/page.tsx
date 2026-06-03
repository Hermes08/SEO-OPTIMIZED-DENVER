import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CATEGORIES, CITY, STATE, SERVICE_AREAS, PHONE_NUMBER, TESTIMONIALS } from '@/lib/constants';
import { SchemaMarkup } from '@/components/SchemaMarkup';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');

const Star = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.9 21l1.2-6.8-5-4.9 6.9-1L12 2Z" /></svg>;
const Check = () => <svg viewBox="0 0 24 24" fill="none"><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /></svg>;
const Clock = () => <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const Plus = () => <svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" /></svg>;
const Bolt = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" /></svg>;
const PhoneSvg = ({ w = 17 }: { w?: number }) => <svg viewBox="0 0 24 24" width={w} height={w} fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" fill="#fff" /></svg>;
const initials = (n: string) => n.trim().split(/\s+/).map((p) => p[0]).slice(0, 2).join('').toUpperCase();

export async function generateStaticParams() {
    return CATEGORIES.flatMap((category) => category.subServices.map((service) => ({ categorySlug: category.slug, serviceSlug: service.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string; serviceSlug: string }>; }) {
    const resolvedParams = await params;
    const category = CATEGORIES.find((c) => c.slug === resolvedParams.categorySlug);
    const service = category?.subServices.find((s) => s.slug === resolvedParams.serviceSlug);
    if (!category || !service) return { title: 'Service Not Found' };

    const title = `${service.title} in ${CITY}`;
    const description = `Expert ${service.title} services in ${CITY}, ${STATE}. ${service.description} Licensed & Insured.`;
    const url = `/${category.slug}/${service.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { type: 'website', title, description, url, images: [{ url: service.image, alt: service.imageAlt || service.title }] },
        twitter: { card: 'summary_large_image', title, description, images: [service.image] },
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ categorySlug: string; serviceSlug: string }>; }) {
    const resolvedParams = await params;
    const category = CATEGORIES.find((c) => c.slug === resolvedParams.categorySlug);
    const service = category?.subServices.find((s) => s.slug === resolvedParams.serviceSlug);
    if (!category || !service) notFound();

    const others = category.subServices.filter((s) => s.id !== service.id);
    const reviews = TESTIMONIALS.slice(0, 2);

    return (
        <div className="svc-page">
            <SchemaMarkup type="Service" data={{ serviceType: service.title, image: service.image, description: service.description }} />
            {service.faqs && <SchemaMarkup type="FAQPage" data={{ faqs: service.faqs }} />}

            {/* breadcrumb */}
            <div className="bc"><div className="wrap">
                <Link href="/">Home</Link><span className="sep">/</span>
                <Link href={`/${category.slug}`}>{category.title}</Link><span className="sep">/</span>
                <span className="cur">{service.title}</span>
            </div></div>

            {/* hero */}
            <section className="hero">
                <div className="wrap">
                    <div>
                        <span className="kicker">{category.title}</span>
                        <h1>{service.title} in <span className="cu">{CITY}, {STATE}</span></h1>
                        <p className="sub">{service.description}</p>
                        <div className="hero-cta">
                            <a href={`tel:${PHONE_TEL}`} className="btn btn-copper"><PhoneSvg /> Call {PHONE_NUMBER}</a>
                            <span className="ph">Mon–Fri 7am–8pm<small>24/7 Emergency</small></span>
                        </div>
                        <div className="hero-chips">
                            <span className="chip"><Check /> Licensed &amp; Insured</span>
                            <span className="chip"><Clock /> Same-Day Quotes</span>
                            <span className="chip"><Star /> 4.9 / 5.0 Rated</span>
                        </div>
                    </div>
                    <div className="hero-photo">
                        <img src={service.image} alt={service.imageAlt || `${service.title} in ${CITY}, ${STATE}`} />
                        <span className="rate"><Star /> 4.9</span>
                    </div>
                </div>
            </section>

            {/* article */}
            <article className="article">
                <div className="wrap">
                    <div className="ms-grid">
                        {/* main */}
                        <div className="main">
                            <p className="lead">{service.description}</p>
                            <div className="ms-body generated-content" dangerouslySetInnerHTML={{ __html: service.content || '' }} />

                            {/* per-service reviews */}
                            <section className="psr">
                                <div className="stripes stripe"></div>
                                <div className="inner">
                                    <div className="top">
                                        <span className="big">4.9</span>
                                        <div>
                                            <div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}</div>
                                            <div className="meta" style={{ marginTop: 5 }}><b>{service.title}</b> · verified reviews</div>
                                        </div>
                                        <span className="tag">{category.title} · Verified</span>
                                    </div>
                                    <div className="grid">
                                        {reviews.map((r) => (
                                            <div className="pscard" key={r.id}>
                                                <div className="stars">{Array.from({ length: r.rating }).map((_, i) => <Star key={i} />)}</div>
                                                <p>&ldquo;{r.text}&rdquo;</p>
                                                <div className="who"><span className="av">{initials(r.name)}</span><div><b>{r.name}</b><span>{r.location} · {r.project}</span></div></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>

                            {/* FAQ */}
                            {service.faqs && (
                                <section className="faq" aria-labelledby="faq-service-heading">
                                    <h2 id="faq-service-heading">Frequently Asked Questions</h2>
                                    {service.faqs.map((faq, i) => (
                                        <details className="qa" key={i} open={i === 0}>
                                            <summary>{faq.question}<span className="ic"><Plus /></span></summary>
                                            <p>{faq.answer}</p>
                                        </details>
                                    ))}
                                </section>
                            )}

                            {/* service areas */}
                            <section className="areas-blk" aria-labelledby="areas-service-heading">
                                <h4 id="areas-service-heading">We Proudly Serve the Following Areas</h4>
                                <p>Our technicians are available for {service.title.toLowerCase()} in all the following locations. If you don&apos;t see your city listed, please call us to confirm coverage.</p>
                                <div className="area-chips">
                                    {SERVICE_AREAS.map((area) => (
                                        <Link key={area.id} href="/areas-we-serve">{area.city} ({area.zipCodes[0]})</Link>
                                    ))}
                                </div>
                            </section>

                            {/* final CTA */}
                            <div className="cta">
                                <div className="stripes stripe"></div>
                                <div className="inner">
                                    <h3>Need {service.title} Today?</h3>
                                    <p>Don&apos;t wait. Schedule your service with our expert team now.</p>
                                    <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" style={{ fontSize: 19, padding: '16px 30px' }}><PhoneSvg w={18} /> Call {PHONE_NUMBER}</a>
                                </div>
                            </div>
                        </div>

                        {/* sidebar */}
                        <aside aria-label="Related services">
                            <div className="sticky">
                                <div className="side-card">
                                    <div className="hd"><Bolt /> Other {category.title}</div>
                                    <div className="side-list">
                                        {others.map((s) => (
                                            <Link href={`/${category.slug}/${s.slug}`} key={s.id}><span>{s.title}</span><span className="ar">→</span></Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="side-call">
                                    <div className="k">Speak with a specialist</div>
                                    <div className="num">{PHONE_NUMBER}</div>
                                    <p>Available 24/7 for emergencies</p>
                                    <a href={`tel:${PHONE_TEL}`} className="btn btn-copper">Call Now</a>
                                </div>

                                <div className="promo">
                                    <div className="pk">Financing</div>
                                    <h4>0% APR Plans Available</h4>
                                    <p>Spread the cost of your project. Same-as-cash plans, all credit types considered.</p>
                                    <Link href="/financing">See plans →</Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>
        </div>
    );
}
