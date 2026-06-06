import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { STATES } from '@/lib/states';
import { PHONE_NUMBER, COMPANY_NAME } from '@/lib/constants';
import { SchemaMarkup } from '@/components/SchemaMarkup';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');
const Arrow = () => <svg viewBox="0 0 24 24" width={15} height={15} fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export const metadata: Metadata = {
    title: 'Service Areas — All 50 States',
    description: `${COMPANY_NAME} provides electrical, plumbing, HVAC, solar, roofing & remodeling services nationwide. Find professional home services in your state.`,
    alternates: { canonical: '/locations' },
};

export default function LocationsIndex() {
    return (
        <>
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }, { name: 'Locations', url: '/locations' }] }} />

            <div className="bc"><div className="wrap"><Link href="/">Home</Link><span className="sep">/</span><span className="cur">Locations</span></div></div>

            <section className="phero" style={{ padding: '52px 0' }}>
                <div className="wrap">
                    <span className="kicker">Nationwide</span>
                    <h1>Home Services in <span className="cu">All 50 States</span></h1>
                    <p className="sub">Licensed electrical, plumbing, HVAC, solar, roofing &amp; remodeling crews from coast to coast. Find your state below.</p>
                </div>
            </section>

            <section className="block">
                <div className="wrap">
                    <div className="sec-head center"><span className="kicker center">Choose Your State</span><h2>Where We Work</h2></div>
                    <div className="loc-grid">
                        {STATES.map((s) => (
                            <Link href={`/locations/${s.slug}`} key={s.code} className="loc-card">
                                <span className="loc-code">{s.code}</span>
                                <span className="loc-name">{s.name}</span>
                                <span className="loc-city">{s.mainCity}</span>
                                <span className="loc-go"><Arrow /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="cta"><div className="stripes stripe-top"></div><div className="wrap">
                <h2>Don&apos;t See Your <span className="cu">City?</span></h2>
                <p>Call us — we likely cover it. Coast-to-coast, licensed and insured.</p>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" style={{ fontSize: 20, padding: '18px 34px' }}>Call {PHONE_NUMBER}</a>
            </div></section>
        </>
    );
}
