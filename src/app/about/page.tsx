import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { HISTORY_TEXT, VALUES, TEAM_MEMBERS, COMPANY_NAME, PHONE_NUMBER } from '@/lib/constants';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');
const Check = () => <svg viewBox="0 0 24 24" fill="none"><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /></svg>;
const Shield = () => <svg viewBox="0 0 24 24" fill="none"><path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const Clock = () => <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" /><path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const Tag = () => <svg viewBox="0 0 24 24" fill="none"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>;
const VAL_ICONS = [<Tag key="0" />, <Shield key="1" />, <Clock key="2" />, <Check key="3" />];
const initials = (n: string) => n.trim().split(/\s+/).map((p) => p[0]).slice(0, 2).join('').toUpperCase();

export const metadata: Metadata = {
    title: 'About Us',
    description: `Learn more about ${COMPANY_NAME}, our history, values, and the expert team serving the Denver Metro.`,
    alternates: { canonical: '/about' },
};

export default function About() {
    return (
        <>
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about' }] }} />

            <div className="bc"><div className="wrap"><Link href="/">Home</Link><span className="sep">/</span><span className="cur">About Us</span></div></div>

            {/* hero */}
            <section className="phero">
                <img className="bgimg" src="/images/general-hero.png" alt="" role="presentation" />
                <div className="wrap">
                    <span className="kicker">Our Story</span>
                    <h1>About <span className="cu">{COMPANY_NAME}</span></h1>
                    <p className="sub">We&apos;re a locally-owned, multi-trade home-services company built on one promise: honest work, done right, by people who live here too.</p>
                    <div className="phero-feats"><span><span className="d" /> Locally Owned</span><span><span className="d" /> Licensed &amp; Insured</span><span><span className="d" /> 24/7 Emergency</span></div>
                </div>
            </section>

            {/* story */}
            <section className="story block">
                <div className="wrap">
                    <div className="story-photo">
                        <img src="/images/electrical-action.png" alt={`A ${COMPANY_NAME} technician at work`} />
                        <div className="float"><b>2,400+</b><span>Homes Served</span></div>
                    </div>
                    <div>
                        <div className="sec-head"><span className="kicker">Who We Are</span><h2>Built in Denver, For Denver</h2></div>
                        <p>{HISTORY_TEXT}</p>
                        <p>We know Colorado homes because we live in them. From historic LoDo lofts with knob-and-tube wiring to South Metro new-builds, our technicians understand the altitude, the freeze-thaw cycle, and the codes that keep your family safe.</p>
                        <p>No hidden fees. No bait-and-switch. Just licensed, background-checked pros who show up on time and stand behind their work.</p>
                    </div>
                </div>
            </section>

            {/* values */}
            <section className="block band-paper2">
                <div className="wrap">
                    <div className="sec-head center"><span className="kicker center">What We Stand For</span><h2>Our Core Values</h2></div>
                    <div className="feat-grid" style={{ gridTemplateColumns: 'repeat(4,1fr)' }}>
                        {VALUES.map((v, i) => (
                            <div className="feat" key={v.title}>
                                <span className="fic">{VAL_ICONS[i % VAL_ICONS.length]}</span>
                                <h3>{v.title}</h3>
                                <p>{v.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* stats */}
            <section className="statband"><div className="wrap">
                <div className="stat"><div className="v">2,400+</div><div className="l">Homes Served</div></div>
                <div className="stat"><div className="v">15</div><div className="l">Years in Business</div></div>
                <div className="stat"><div className="v">{TEAM_MEMBERS.length * 9}</div><div className="l">Team Members</div></div>
                <div className="stat"><div className="v">4.9</div><div className="l">Average Rating</div></div>
            </div></section>

            {/* team */}
            <section className="block">
                <div className="wrap">
                    <div className="sec-head center"><span className="kicker center">The People</span><h2>Meet the Crew</h2></div>
                    <div className="team-grid">
                        {TEAM_MEMBERS.map((m) => (
                            <div className="tm" key={m.id}>
                                <div className="av">{initials(m.name)}</div>
                                <h3>{m.name}</h3>
                                <div className="role">{m.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="cta"><div className="stripes stripe-top"></div><div className="wrap">
                <h2>Work With a Team You Can <span className="cu">Trust</span></h2>
                <p>Licensed, local, and on call 24/7. Let&apos;s take care of your home.</p>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" style={{ fontSize: 20, padding: '18px 34px' }}>Call {PHONE_NUMBER}</a>
                <div className="cta-feats">
                    <span><Check /> Local &amp; Licensed</span>
                    <span><Check /> 24/7 Response</span>
                    <span><Check /> Satisfaction Guaranteed</span>
                </div>
            </div></section>
        </>
    );
}
