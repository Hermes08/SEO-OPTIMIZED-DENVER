'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { PHONE_NUMBER, CATEGORIES } from '@/lib/constants';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');

const BrandMark = ({ size = 46 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 64 64" aria-hidden="true">
        <path d="M0 0 H64 V44 L44 64 H0 Z" fill="#211a15" />
        <circle cx="48" cy="15" r="5.5" fill="#e8a13c" />
        <path d="M3 52 L21 23 L32 39 L45 19 L61 52 Z" fill="#d9531e" />
        <path d="M21 23 L26.5 31.8 L21 33 L15.5 31.8 Z" fill="#f2ece2" />
        <path d="M45 19 L50 27 L45 28 L40 27 Z" fill="#f2ece2" />
        <rect x="3" y="52" width="58" height="3" fill="#b8420f" />
    </svg>
);

export const BrandLockup = () => (
    <Link href="/" className="lock" aria-label="Denver Metro Services dot com — home">
        <BrandMark />
        <span className="words">
            <span className="l1">Denver Metro</span>
            <span className="l2">Services<span className="dc">.com</span></span>
        </span>
    </Link>
);

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (id: string) => setActiveDropdown(activeDropdown === id ? null : id);

    return (
        <>
            {/* Top bar */}
            <div className="topbar" role="region" aria-label="Contact Information">
                <div className="wrap">
                    <div className="l">
                        <span>◇ Serving the Denver Metro Area</span>
                        <span className="hidden md:inline-flex">◇ 24/7 Emergency Service</span>
                    </div>
                    <a href={`tel:${PHONE_TEL}`} aria-label={`Call us at ${PHONE_NUMBER}`}>CALL {PHONE_NUMBER}</a>
                </div>
            </div>

            {/* Nav */}
            <header className="nav" role="banner">
                <div className="wrap">
                    <BrandLockup />

                    {/* Desktop menu */}
                    <nav className="menu" aria-label="Main Navigation">
                        <Link href="/">Home</Link>
                        <Link href="/about">About</Link>

                        {/* Services mega-menu */}
                        <div
                            className="relative"
                            onMouseEnter={() => setActiveDropdown('services-desktop')}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <button
                                className="inline-flex items-center gap-1 py-6 uppercase"
                                style={{ font: 'inherit', color: 'inherit', background: 'none', border: 0, cursor: 'pointer', letterSpacing: '.03em' }}
                                aria-haspopup="true"
                                aria-expanded={activeDropdown === 'services-desktop'}
                            >
                                Services
                                <ChevronDown size={16} className={`transition-transform ${activeDropdown === 'services-desktop' ? 'rotate-180' : ''}`} aria-hidden="true" />
                            </button>

                            <div className={`absolute left-1/2 -translate-x-1/2 top-full w-[820px] z-50 transition-all duration-200 ${activeDropdown === 'services-desktop' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-1'}`}>
                                <div className="mt-1 grid grid-cols-3 gap-7 p-6 bg-[var(--char-2)] border border-[var(--line-dark)] rounded shadow-2xl">
                                    {CATEGORIES.map((cat) => (
                                        <div key={cat.id} className="space-y-3">
                                            <Link href={`/${cat.slug}`} className="flex items-center gap-2 text-white hover:text-[var(--copper)] transition-colors" style={{ fontFamily: 'var(--font-saira)', fontWeight: 800, textTransform: 'uppercase', fontSize: '17px' }}>
                                                <cat.icon size={18} className="text-[var(--copper)]" aria-hidden="true" />
                                                {cat.title}
                                            </Link>
                                            <ul className="space-y-2">
                                                {cat.subServices.slice(0, 4).map((sub) => (
                                                    <li key={sub.id}>
                                                        <Link href={`/${cat.slug}/${sub.slug}`} className="text-sm text-[#a99a8a] hover:text-[var(--copper)] block transition-colors">
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li className="pt-2 border-t border-[var(--line-dark)]">
                                                    <Link href={`/${cat.slug}/blog`} className="text-[11px] font-bold text-[var(--copper)] uppercase tracking-wider inline-flex items-center gap-1">
                                                        {cat.title} Tips &rarr;
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link href="/blog">Blog</Link>
                        <Link href="/areas-we-serve">Areas</Link>
                        <Link href="/financing">Financing</Link>
                        <Link href="/contact">Contact</Link>
                    </nav>

                    <div className="nav-cta">
                        <a href={`tel:${PHONE_TEL}`} className="btn btn-copper" aria-label={`Call us now at ${PHONE_NUMBER}`}>
                            <Phone size={16} aria-hidden="true" /> {PHONE_NUMBER}
                        </a>
                        <button
                            className="lg:hidden text-[var(--paper)]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={isMenuOpen}
                            style={{ background: 'none', border: 0 }}
                        >
                            {isMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
                        </button>
                    </div>
                </div>

                {/* Mobile nav */}
                {isMenuOpen && (
                    <div className="lg:hidden bg-[var(--char-2)] border-t border-[var(--line-dark)] absolute w-full left-0 top-full shadow-2xl max-h-[80vh] overflow-y-auto z-50">
                        <nav className="flex flex-col p-5 gap-4 text-[var(--paper)]" aria-label="Mobile Navigation" style={{ fontFamily: 'var(--font-saira)', textTransform: 'uppercase', fontWeight: 600 }}>
                            <Link href="/" className="hover:text-[var(--copper)]" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link href="/about" className="hover:text-[var(--copper)]" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                            <div>
                                <button
                                    onClick={() => toggleDropdown('services-mobile')}
                                    className="flex items-center justify-between w-full hover:text-[var(--copper)] uppercase"
                                    aria-expanded={activeDropdown === 'services-mobile'}
                                    style={{ font: 'inherit', color: 'inherit', background: 'none', border: 0, cursor: 'pointer' }}
                                >
                                    Services
                                    <ChevronDown size={20} className={`transition-transform ${activeDropdown === 'services-mobile' ? 'rotate-180' : ''}`} aria-hidden="true" />
                                </button>
                                {activeDropdown === 'services-mobile' && (
                                    <div className="pl-4 mt-3 space-y-4 border-l-2 border-[var(--line-dark)] ml-1">
                                        {CATEGORIES.map((cat) => (
                                            <div key={cat.id}>
                                                <Link href={`/${cat.slug}`} className="text-white block mb-2" onClick={() => setIsMenuOpen(false)}>{cat.title}</Link>
                                                <ul className="space-y-2 pl-2" style={{ fontFamily: 'var(--font-archivo)', textTransform: 'none', fontWeight: 400 }}>
                                                    {cat.subServices.map((sub) => (
                                                        <li key={sub.id}>
                                                            <Link href={`/${cat.slug}/${sub.slug}`} className="text-sm text-[#a99a8a] hover:text-[var(--copper)] block" onClick={() => setIsMenuOpen(false)}>
                                                                {sub.title}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <Link href="/blog" className="hover:text-[var(--copper)]" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                            <Link href="/areas-we-serve" className="hover:text-[var(--copper)]" onClick={() => setIsMenuOpen(false)}>Areas We Serve</Link>
                            <Link href="/financing" className="hover:text-[var(--copper)]" onClick={() => setIsMenuOpen(false)}>Financing</Link>
                            <Link href="/contact" className="hover:text-[var(--copper)]" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </nav>
                    </div>
                )}
            </header>
        </>
    );
};
