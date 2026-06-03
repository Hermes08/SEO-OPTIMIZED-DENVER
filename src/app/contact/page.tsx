import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { RequestServiceForm } from '@/components/RequestServiceForm';
import { PHONE_NUMBER, EMAIL_ADDRESS, REGION } from '@/lib/constants';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');
const PhoneSvg = () => <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" fill="currentColor" /></svg>;
const Mail = () => <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" /><path d="m3 7 9 6 9-6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /></svg>;
const Pin = () => <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="2" /></svg>;

export const metadata: Metadata = {
    title: 'Contact Us',
    description: 'Get in touch with our team for 24/7 emergency service or a free quote.',
    alternates: { canonical: '/contact' },
};

export default function Contact() {
    return (
        <>
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }] }} />

            <div className="bc"><div className="wrap"><Link href="/">Home</Link><span className="sep">/</span><span className="cur">Contact</span></div></div>

            {/* hero */}
            <section className="phero" style={{ padding: '52px 0' }}>
                <div className="wrap">
                    <span className="kicker">Get In Touch</span>
                    <h1>Request <span className="cu">Service</span></h1>
                    <p className="sub">Need a quote or emergency help? Call us or send a request — a licensed Denver Metro specialist will reach out fast.</p>
                </div>
            </section>

            {/* contact grid */}
            <section className="block">
                <div className="wrap">
                    <div className="ct-grid">
                        {/* info rail */}
                        <div>
                            <a className="info-card" href={`tel:${PHONE_TEL}`}>
                                <span className="ic"><PhoneSvg /></span>
                                <div><h4>Call Us</h4><p>24/7 emergency line</p><p><a href={`tel:${PHONE_TEL}`}>{PHONE_NUMBER}</a></p></div>
                            </a>
                            <a className="info-card" href={`mailto:${EMAIL_ADDRESS}`}>
                                <span className="ic"><Mail /></span>
                                <div><h4>Email</h4><p>We reply within one business day</p><p><a href={`mailto:${EMAIL_ADDRESS}`}>{EMAIL_ADDRESS}</a></p></div>
                            </a>
                            <div className="info-card">
                                <span className="ic"><Pin /></span>
                                <div><h4>Service Area</h4><p>Serving {REGION} &amp; surrounding communities</p></div>
                            </div>
                            <div className="hours">
                                <h4>Business Hours</h4>
                                <div className="row"><span>Mon – Fri</span><b>7am – 8pm</b></div>
                                <div className="row"><span>Saturday</span><b>8am – 5pm</b></div>
                                <div className="row"><span>Sunday</span><b className="em">Emergency Only</b></div>
                            </div>
                        </div>

                        {/* form */}
                        <RequestServiceForm />
                    </div>
                </div>
            </section>
        </>
    );
}
