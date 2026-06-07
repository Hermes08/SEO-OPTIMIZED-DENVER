import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, CATEGORIES, SERVICE_AREAS, SOCIAL_LINKS } from '@/lib/constants';
import { BrandLockup } from './Header';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');

// Prefer real profiles; fall back to platform homepages (real pages, not fabricated profiles).
const socialFor = (platform: string, fallback: string) =>
    SOCIAL_LINKS.find((s) => s.platform === platform)?.url || fallback;

export const Footer = () => {
    return (
        <footer role="contentinfo">
            <div className="wrap">
                <div className="foot-grid">
                    {/* Brand */}
                    <div className="foot-brand">
                        <BrandLockup />
                        <p>Professional services providing reliable, high-quality solutions for residential and commercial clients across the Denver Metro. Licensed &amp; Insured.</p>
                        <div className="socials">
                            <a href={socialFor('facebook', 'https://facebook.com')} target="_blank" rel="noopener noreferrer" aria-label={`${COMPANY_NAME} on Facebook`}><Facebook size={18} aria-hidden="true" /></a>
                            <a href={socialFor('instagram', 'https://instagram.com')} target="_blank" rel="noopener noreferrer" aria-label={`${COMPANY_NAME} on Instagram`}><Instagram size={18} aria-hidden="true" /></a>
                            <a href={socialFor('linkedin', 'https://linkedin.com')} target="_blank" rel="noopener noreferrer" aria-label={`${COMPANY_NAME} on LinkedIn`}><Linkedin size={18} aria-hidden="true" /></a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/financing">Financing</Link></li>
                            <li><Link href="/locations">Locations (All 50 States)</Link></li>
                            <li><Link href="/areas-we-serve">Service Areas</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3>Services</h3>
                        <ul>
                            {CATEGORIES.map((cat) => (
                                <li key={cat.id}><Link href={`/${cat.slug}`}>{cat.title}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3>Contact Info</h3>
                        <ul>
                            <li><a href={`tel:${PHONE_TEL}`}>{PHONE_NUMBER}</a></li>
                            <li><span>Serving Denver Metro &amp; surrounding areas</span></li>
                            <li><span>Mon–Fri: 7am – 8pm</span></li>
                            <li><span>Sat–Sun: Emergency Only</span></li>
                        </ul>
                    </div>
                </div>

                {/* Comprehensive SEO link map (all sub-services + service areas) */}
                <div className="foot-seo">
                    <div>
                        <h3>All Services Provided</h3>
                        <div className="foot-seo-grid">
                            {CATEGORIES.map((cat) => (
                                <div key={cat.id}>
                                    <strong>{cat.title}</strong>
                                    <ul>
                                        {cat.subServices.map((sub) => (
                                            <li key={sub.id}><Link href={`/${cat.slug}/${sub.slug}`}>{sub.title}</Link></li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3>Service Areas &amp; Zip Codes</h3>
                        <div className="foot-seo-grid">
                            {SERVICE_AREAS.map((area) => (
                                <div key={area.id}>
                                    <strong>{area.city}, {area.state}</strong>
                                    <p className="foot-zips">{area.zipCodes.join(' · ')}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="foot-bottom">
                    <span>© {new Date().getFullYear()} {COMPANY_NAME} — All Rights Reserved</span>
                    <span>Licensed &amp; Insured · Denver, CO</span>
                </div>
            </div>
        </footer>
    );
};
