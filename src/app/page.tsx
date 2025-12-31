
import React from 'react';
import Link from 'next/link';
import { CheckCircle, MapPin } from 'lucide-react';
import { CallButton } from '@/components/CallButton';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { GoogleReviews } from '@/components/GoogleReviews';
import { CATEGORIES, COMPANY_NAME, CITY, STATE, GENERATE_CONTENT } from '@/lib/constants';
import { ThreeHeroWrapper } from '@/components/ThreeHeroWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Home",
    description: `Professional services in ${CITY}, ${STATE}. Licensed, Insured, and Trusted experts available for 24/7 emergency service.`,
};

export default function Home() {
    return (
        <>
            <SchemaMarkup type="LocalBusiness" data={{ image: 'https://picsum.photos/seed/home-schema/1200/600' }} />

            {/* Hero Section */}
            <section className="relative bg-white py-20 lg:py-32 overflow-hidden" aria-labelledby="hero-heading">
                <div className="absolute inset-0 z-0">
                    <ThreeHeroWrapper />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80 pointer-events-none" aria-hidden="true" />

                <div className="container mx-auto px-4 relative z-10 glass-panel rounded-2xl p-8 md:p-12 border border-white/40 shadow-2xl max-w-5xl mx-auto backdrop-blur-xl">
                    <div className="max-w-3xl">
                        <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
                            Professional Services in <span className="text-orange-600">{CITY}, {STATE}</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-2xl font-light leading-relaxed">
                            Reliable, licensed, and insured experts ready to solve your problems today.
                            <br />We provide <span className="font-semibold text-gray-900">top-tier solutions</span> for residential and commercial needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <CallButton size="large" />
                            <a href="#services" className="px-8 py-4 rounded-full border border-gray-300 hover:border-orange-500 hover:text-orange-600 font-bold text-center transition-all bg-white/50 backdrop-blur hover:bg-white text-gray-700 shadow-lg hover:shadow-xl">
                                View Services
                            </a>
                        </div>
                        <div className="flex gap-6 text-sm text-gray-600 font-medium">
                            <span className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full text-green-700 border border-green-100"><CheckCircle size={16} aria-hidden="true" /> Licensed & Insured</span>
                            <span className="flex items-center gap-2 bg-green-50 px-3 py-1 rounded-full text-green-700 border border-green-100"><CheckCircle size={16} aria-hidden="true" /> 5-Star Rated</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories / Services Grid */}
            <section id="services" className="py-20 bg-gray-50" aria-labelledby="services-heading">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 id="services-heading" className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">Our Core Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">Comprehensive solutions tailored to your specific needs. From emergency repairs to complete system installations.</p>
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
                                        <p className="text-gray-600">No hidden fees or surprises. We provide clear, detailed quotes before any work begins.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                        <CheckCircle className="text-orange-600" size={24} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Technicians</h3>
                                        <p className="text-gray-600">Our team is fully licensed, background-checked, and regularly trained on the latest technology.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                        <CheckCircle className="text-orange-600" size={24} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">Satisfaction Guaranteed</h3>
                                        <p className="text-gray-600">We stand behind our work. If you're not happy, we'll make it right.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-orange-500/20 rounded-xl blur-xl" aria-hidden="true"></div>
                            <img src="https://picsum.photos/seed/tech-working/600/500" alt="Technician working on a panel" className="relative rounded-xl shadow-2xl w-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Local SEO / Service Area */}
            <section className="py-20 bg-gray-50" aria-labelledby="local-area-heading">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="local-area-heading" className="text-3xl font-bold text-gray-900 mb-8">Serving {CITY} & Surrounding Areas</h2>
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
                                title="Service Area Map"
                                className="absolute inset-0 w-full h-full"
                                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Denver+(Denver%20Metro%20Services)&t=&z=11&ie=UTF8&iwloc=B&output=embed"
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
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Our Services in {CITY}</h2>
                    <div
                        className="prose prose-lg max-w-none text-gray-600"
                        dangerouslySetInnerHTML={{ __html: GENERATE_CONTENT('Home Services') }}
                    />
                </div>
            </section>

            {/* Google Reviews */}
            <GoogleReviews />

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-500" aria-labelledby="cta-heading">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="cta-heading" className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Don't let small issues become big problems. Contact our team today for fast, reliable service.</p>
                    <CallButton size="large" variant="white" sticky={false} />
                    <div className="mt-8 flex justify-center gap-6 text-white/80 text-sm font-medium">
                        <span className="flex items-center gap-1"><CheckCircle size={14} aria-hidden="true" /> Fast Response</span>
                        <span className="flex items-center gap-1"><CheckCircle size={14} aria-hidden="true" /> Licensed & Insured</span>
                        <span className="flex items-center gap-1"><CheckCircle size={14} aria-hidden="true" /> Satisfaction Guaranteed</span>
                    </div>
                </div>
            </section>
        </>
    );
}
