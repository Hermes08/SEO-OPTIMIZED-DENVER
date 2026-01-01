
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, CATEGORIES } from '@/lib/constants';

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const toggleDropdown = (id: string) => {
        if (activeDropdown === id) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(id);
        }
    };

    return (
        <header className="sticky top-0 z-40 glass-panel border-b border-gray-100" role="banner">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-gray-900 tracking-tight" aria-label={`${COMPANY_NAME} Home`}>
                        {COMPANY_NAME}<span className="text-orange-500">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-5" aria-label="Main Navigation">
                        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Home</Link>
                        <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">About</Link>


                        {/* Services Mega Menu */}
                        <div className="relative group">
                            <button
                                className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1 py-4"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Services
                                <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-200" />
                            </button>

                            {/* Mega Menu Dropdown */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 -mt-2 z-50">
                                <div className="bg-white border border-gray-100 rounded-xl shadow-2xl p-6 grid grid-cols-3 gap-8 mt-2">
                                    {CATEGORIES.map((cat) => (
                                        <div key={cat.id} className="space-y-3">
                                            <Link
                                                href={`/${cat.slug}`}
                                                className="flex items-center gap-2 font-bold text-gray-900 hover:text-orange-600 transition-colors"
                                            >
                                                <cat.icon size={20} className="text-orange-500" />
                                                {cat.title}
                                            </Link>
                                            <ul className="space-y-2">
                                                {cat.subServices.slice(0, 4).map(sub => (
                                                    <li key={sub.id}>
                                                        <Link
                                                            href={`/${cat.slug}/${sub.slug}`}
                                                            className="text-sm text-gray-500 hover:text-orange-600 block transition-colors"
                                                        >
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li className="pt-2 border-t border-gray-50 flex flex-col gap-1">
                                                    <Link
                                                        href={`/${cat.slug}/blog`}
                                                        className="text-xs font-bold text-orange-600 hover:text-orange-700 uppercase tracking-wide flex items-center gap-1"
                                                    >
                                                        Read {cat.title} Tips &rarr;
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Blog</Link>
                        <Link href="/areas-we-serve" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Areas</Link>
                        <Link href="/financing" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Financing</Link>
                        <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Contact</Link>

                        <a
                            href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-transform hover:scale-105 ml-2"
                            aria-label="Call Now"
                        >
                            <Phone size={16} aria-hidden="true" />
                            <span>Call Now</span>
                        </a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-gray-900 hover:text-orange-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-full shadow-xl max-h-[80vh] overflow-y-auto">
                    <nav className="flex flex-col p-4 space-y-4" aria-label="Mobile Navigation">
                        <Link href="/" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        <Link href="/about" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About Us</Link>

                        {/* Mobile Services Accordion */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('services-mobile')}
                                className="flex items-center justify-between w-full text-lg font-medium hover:text-orange-500"
                                aria-expanded={activeDropdown === 'services-mobile'}
                            >
                                Services
                                <ChevronDown size={20} className={`transform transition-transform ${activeDropdown === 'services-mobile' ? 'rotate-180' : ''}`} aria-hidden="true" />
                            </button>

                            {activeDropdown === 'services-mobile' && (
                                <div className="pl-4 mt-2 space-y-4 border-l-2 border-gray-100 ml-2">
                                    {CATEGORIES.map((cat) => (
                                        <div key={cat.id}>
                                            <Link
                                                href={`/${cat.slug}`}
                                                className="font-bold text-gray-800 block mb-2"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {cat.title}
                                            </Link>
                                            <ul className="space-y-2 pl-2">
                                                {cat.subServices.map(sub => (
                                                    <li key={sub.id}>
                                                        <Link
                                                            href={`/${cat.slug}/${sub.slug}`}
                                                            className="text-sm text-gray-500 hover:text-orange-600 block"
                                                            onClick={() => setIsMenuOpen(false)}
                                                        >
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

                        <Link href="/blog" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Blog</Link>
                        <Link href="/areas-we-serve" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Areas We Serve</Link>
                        <Link href="/financing" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Financing</Link>
                        <Link href="/contact" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};
