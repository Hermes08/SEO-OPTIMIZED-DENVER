
import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, CATEGORIES, SERVICE_AREAS } from '@/lib/constants';

export const Footer = () => {
    return (
        <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800" role="contentinfo">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-4">{COMPANY_NAME}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">
                            Professional services providing reliable, high-quality solutions for residential and commercial clients. Licensed & Insured.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Links */}
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-gray-400 group" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-gray-400 group" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all text-gray-400 group" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                        <li><Link href="/about" className="hover:text-orange-500">About Us</Link></li>
                        <li><Link href="/financing" className="hover:text-orange-500">Financing</Link></li>
                        <li><Link href="/areas-we-serve" className="hover:text-orange-500">Service Areas</Link></li>
                        <li><Link href="/contact" className="hover:text-orange-500">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Services</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        {CATEGORIES.map(cat => (
                            <li key={cat.id}>
                                <Link href={`/${cat.slug}`} className="hover:text-orange-500">{cat.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-4">Contact Info</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li className="flex gap-3">
                            <Phone size={18} className="text-orange-500 shrink-0" aria-hidden="true" />
                            <span>{PHONE_NUMBER}</span>
                        </li>
                        <li className="flex gap-3">
                            <MapPin size={18} className="text-orange-500 shrink-0" aria-hidden="true" />
                            <span>Serving {COMPANY_NAME} Region and surrounding areas.</span>
                        </li>
                        <li className="flex gap-3">
                            <Clock size={18} className="text-orange-500 shrink-0" aria-hidden="true" />
                            <span>Mon-Fri: 7am - 8pm<br />Sat-Sun: Emergency Only</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* COMPREHENSIVE SEO LINKS */}
            <div className="border-t border-gray-900 mt-12 pt-12">
                <div className="grid md:grid-cols-2 gap-8">

                    {/* ALL SERVICES REMINDER */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">All Services Provided</h4>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-xs text-gray-500">
                            {CATEGORIES.map(cat => (
                                <div key={cat.id}>
                                    <strong className="text-orange-500 block mb-2 uppercase text-xs tracking-wide">{cat.title}</strong>
                                    <ul className="space-y-1">
                                        {cat.subServices.map(sub => (
                                            <li key={sub.id}>
                                                <Link href={`/${cat.slug}/${sub.slug}`} className="hover:text-white transition-colors">
                                                    {sub.title}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ALL AREAS REMINDER */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Service Areas & Zip Codes</h4>
                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                            {SERVICE_AREAS.map(area => (
                                <div key={area.id}>
                                    <strong className="text-white block mb-1">{area.city}, {area.state}</strong>
                                    <p className="leading-relaxed">
                                        {area.zipCodes.join(', ')}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            <div className="border-t border-gray-900 pt-8 mt-12 text-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
            </div>
        </footer>
    );
};
