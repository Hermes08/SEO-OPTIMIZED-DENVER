import React from 'react';
import Link from 'next/link';
import { CheckCircle, Zap } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { GoogleReviews } from '@/components/GoogleReviews';
import { CATEGORIES, COMPANY_NAME, CITY, STATE, GENERATE_CONTENT } from '@/lib/constants';
import { ThreeHeroWrapper } from '@/components/ThreeHeroWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Home",
    description: `Expert EV charger installation in ${CITY}, ${STATE}. Licensed electricians specializing in Tesla Wall Connector, Level 2 home chargers, and commercial EV charging stations. Xcel Energy rebates filed for you.`,
};

export default function Home() {
    return (
        <>
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }] }} />
            <SchemaMarkup type="LocalBusiness" data={{ image: 'https://picsum.photos/seed/ev-charger-home/1200/600' }} />

            {/* Hero Section */}
            <section className="relative bg-white py-20 lg:py-32 overflow-hidden" aria-labelledby="hero-heading">
                <div className="absolute inset-0 z-0">
                    <ThreeHeroWrapper />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 pointer-events-none" aria-hidden="true" />

                <div className="container mx-auto px-4 relative z-10 glass-panel rounded-2xl p-8 md:p-12 border border-white/40 shadow-2xl max-w-5xl mx-auto backdrop-blur-xl">
                    <div className="max-w-3xl">
                        <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                            Expert EV Charger Installation in <span className="text-orange-600">{CITY}, {STATE}</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl font-light leading-relaxed">
                            Licensed electricians specializing in Tesla Wall Connector, Level 2 home chargers, and commercial EV stations.
                            <br />We handle <span className="font-semibold text-gray-900">permits, inspections & Xcel rebates</span> so you don't have to.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <CallButton size="large" />
                            <a href="#services" className="px-8 py-4 rounded-full border border-gray-300 hover:border-orange-500 hover:text-orange-600 font-bold text-center transition-all bg-white/50 backdrop-blur hover:bg-white text-gray-700 shadow-lg hover:shadow-xl">
                                View Services
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 font-medium">
                            <span className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full text-green-700 border border-green-100"><CheckCircle size={16} aria-hidden="true" /> Licensed & Insured</span>
                            <span className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full text-green-700 border border-green-100"><CheckCircle size={16} aria-hidden="true" /> 5-Star Rated</span>
                            <span className="flex items-center gap-2 bg-orange-50 px-3 py-1 rounded-full text-orange-700 border border-orange-100"><Zap size={16} aria-hidden="true" /> 500+ EV Installs</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories / Services Grid */}
            <section id="services" className="py-20 bg-gray-50" aria-labelledby="services-heading">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 id="services-heading" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Our EV Charging Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">From single-family home charger installs to large-scale commercial fleet charging — we have Denver covered.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {CATEGORIES.map((cat) => (
                            <Link
                                href={`/${cat.slug}`}
                                key={cat.id}
                                className="group glass-card rounded-2xl overflow-hidden hover:border-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                aria-label={`View ${cat.title} services`}
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img src={cat.heroImage} alt={cat.heroImageAlt || ""} role="presentation" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-lg text-orange-600 shadow-lg">
                                        <cat.icon size={24} aria-hidden="true" />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{cat.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{cat.shortDescription}</p>
                                    <span className="text-orange-600 text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform" aria-hidden="true">Learn More &rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-20 bg-white" aria-labelledby="why-us-heading">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 id="why-us-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose {COMPANY_NAME}?</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                        <CheckCircle className="text-orange-600" size={24} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Upfront Pricing</h3>
                                        <p className="text-gray-600">No hidden fees or surprises. We provide clear, detailed quotes before any work begins — including permit and inspection costs.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                        <CheckCircle className="text-orange-600" size={24} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Tesla Certified Installers</h3>
                                        <p className="text-gray-600">Our electricians are certified for Tesla Wall Connector and trained on all major EVSE brands — ChargePoint, Enel X, Grizzl-E, and more.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                        <CheckCircle className="text-orange-600" size={24} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Rebates Filed For You</h3>
                                        <p className="text-gray-600">We handle the Xcel Energy $500 rebate paperwork and guide you through the federal 30% tax credit (up to $1,000) — maximizing your savings automatically.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-orange-500/20 rounded-xl blur-xl" aria-hidden="true"></div>
                            <img src="https://picsum.photos/seed/ev-electrician/600/500" alt="EV charger installation technician working on electrical panel" className="relative rounded-xl shadow-2xl w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Local SEO / Service Area */}
            <section className="py-20 bg-gray-50" aria-labelledby="local-area-heading">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="local-area-heading" className="text-3xl font-bold text-gray-900 mb-8">EV Charger Installation Across {CITY} & Surrounding Areas</h2>
                    <div className="glass-panel p-2 rounded-xl max-w-4xl mx-auto mb-12 shadow-xl">
                        {/* Google Map Embed */}
                        <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center relative overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                title="EV Charger Installation Service Area Map"
                                className="absolute inset-0 w-full h-full"
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Denver+(Denver%20EV%20Chargers)&t=&z=11&ie=UTF8&iwloc=B&output=embed"
                            >
                            </iframe>
                        </div>
                    </div>
                    <Link href="/areas-we-serve" className="text-orange-500 hover:text-white font-bold underline decoration-orange-500 underline-offset-4 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1">
                        View All Service Areas
                    </Link>
                </div>
            </section>

            {/* Heavy Content SEO Section */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About EV Charger Installation in {CITY}</h2>
                    <div
                        className="prose prose-lg max-w-none text-gray-600"
                        dangerouslySetInnerHTML={{ __html: GENERATE_CONTENT('EV Home Charging') }}
                    />
                </div>
            </section>

            {/* Google Reviews */}
            <GoogleReviews />

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-500" aria-labelledby="cta-heading">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Charge Up?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Get a free EV charger installation quote today. We'll handle permits, inspections, and file your Xcel Energy rebate automatically.</p>
                    <CallButton size="large" variant="white" sticky={false} />
                    <div className="mt-8 flex justify-center gap-6 text-white/80 text-sm font-medium flex-wrap">
                        <span className="flex items-center gap-1"><CheckCircle size={14} aria-hidden="true" /> Same-Day Quotes</span>
                        <span className="flex items-center gap-1"><CheckCircle size={14} aria-hidden="true" /> Licensed & Insured</span>
                        <span className="flex items-center gap-1"><CheckCircle size={14} aria-hidden="true" /> Rebates Filed For You</span>
                    </div>
                </div>
            </section>
        </>
    );
}
