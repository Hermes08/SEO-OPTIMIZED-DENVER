
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
                    <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
                        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Home</Link>
                        <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">About</Link>

                        {/* Dynamic Categories */}
                        {CATEGORIES.map((cat) => (
                            <div key={cat.id} className="relative group">
                                <Link
                                    href={`/${cat.slug}`}
                                    className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors flex items-center gap-1"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    {cat.title}
                                </Link>
                                {/* Simple Dropdown on hover */}
                                <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" role="menu">
                                    <div className="bg-white border border-gray-100 rounded-lg shadow-xl py-2">
                                        {cat.subServices.map(sub => (
                                            <Link
                                                key={sub.id}
                                                href={`/${cat.slug}/${sub.slug}`}
                                                className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-orange-600"
                                                role="menuitem"
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                        <div className="border-t border-gray-700 mt-2 pt-2">
                                            <Link
                                                href={`/${cat.slug}/blog`}
                                                className="block px-4 py-2 text-sm text-orange-600 hover:bg-gray-50 font-bold"
                                                role="menuitem"
                                            >
                                                {cat.title} Tips
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <Link href="/areas-we-serve" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Areas</Link>
                        <Link href="/financing" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Financing</Link>
                        <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors">Contact</Link>

                        <a
                            href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`}
                            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-transform hover:scale-105"
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

                        {CATEGORIES.map((cat) => (
                            <div key={cat.id}>
                                <button
                                    onClick={() => toggleDropdown(cat.id)}
                                    className="flex items-center justify-between w-full text-lg font-medium hover:text-orange-500"
                                    aria-expanded={activeDropdown === cat.id}
                                >
                                    {cat.title}
                                    <ChevronDown size={20} className={`transform transition-transform ${activeDropdown === cat.id ? 'rotate-180' : ''}`} aria-hidden="true" />
                                </button>
                                {activeDropdown === cat.id && (
                                    <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-700">
                                        <Link
                                            href={`/${cat.slug}`}
                                            className="block text-base text-gray-300 hover:text-white font-bold"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            All {cat.title}
                                        </Link>
                                        {cat.subServices.map(sub => (
                                            <Link
                                                key={sub.id}
                                                href={`/${cat.slug}/${sub.slug}`}
                                                className="block text-base text-gray-400 hover:text-white"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {sub.title}
                                            </Link>
                                        ))}
                                        <Link
                                            href={`/${cat.slug}/blog`}
                                            className="block text-base text-orange-500 font-bold mt-2"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {cat.title} Blog
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}

                        <Link href="/areas-we-serve" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Areas We Serve</Link>
                        <Link href="/financing" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Financing</Link>
                        <Link href="/contact" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                    </nav>
                </div>
            )}
        </header>
    );
};
