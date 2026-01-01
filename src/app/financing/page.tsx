
import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallButton';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { FinancingCalculator } from '@/components/FinancingCalculator';
import { CheckCircle } from 'lucide-react';
import { FINANCING_PARTNERS, FINANCING_PLANS, FINANCING_ELIGIBILITY, FINANCING_FAQS, TESTIMONIALS } from '@/lib/constants';

export const metadata: Metadata = {
    title: "Financing Options",
    description: "Affordable payment plans for your home improvement projects. Apply online and get approved in minutes.",
};

export default function Financing() {
    return (
        <div className="min-h-screen bg-gray-50">
            <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }, { name: 'Financing', url: '/financing' }] }} />
            <SchemaMarkup type="FAQPage" data={{ faqs: FINANCING_FAQS }} />

            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={[{ name: 'Financing', url: '/financing' }]} />
            </div>

            {/* Hero */}
            <section className="py-20 bg-white" aria-labelledby="finance-hero">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h1 id="finance-hero" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Flexible Financing Options</h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">Make your project affordable with our easy payment plans. Apply online and get approved in minutes.</p>
                    <CallButton size="large" />
                </div>
            </section>

            {/* Partners */}
            <section className="py-12 bg-gray-50 border-y border-gray-200" aria-label="Financing Partners">
                <div className="container mx-auto px-4">
                    <p className="text-center text-gray-400 mb-8 uppercase tracking-widest text-sm font-bold">Trusted Financing Partners</p>
                    <div className="flex justify-center gap-12 flex-wrap items-center">
                        {FINANCING_PARTNERS.map(partner => (
                            <img
                                key={partner.id}
                                src={partner.logo}
                                alt={`${partner.name} financing partner`}
                                className="opacity-60 hover:opacity-100 transition-opacity h-12 object-contain filter grayscale hover:grayscale-0"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Financing Plans */}
            <section className="py-20" aria-labelledby="plans-heading">
                <div className="container mx-auto px-4">
                    <h2 id="plans-heading" className="text-3xl font-bold text-gray-900 mb-12 text-center">Choose Your Payment Plan</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {FINANCING_PLANS.map(plan => (
                            <div key={plan.id} className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-orange-500 transition-all duration-300 shadow-sm hover:shadow-xl relative group">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                                <div className="text-5xl font-bold text-orange-600 mb-6 tracking-tight">{plan.apr}% <span className="text-lg text-gray-400 font-normal">APR</span></div>
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3 text-gray-600">
                                            <CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6 border-t border-gray-100">
                                    <CallButton sticky={false} size="default" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Calculator Section */}
            <section className="py-20 bg-gray-50" aria-labelledby="calc-heading">
                <div className="container mx-auto px-4 max-w-2xl bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                    <h2 id="calc-heading" className="text-3xl font-bold text-gray-900 mb-8 text-center">Estimate Your Monthly Payment</h2>
                    {/* Client Component */}
                    <FinancingCalculator />
                </div>
            </section>

            {/* Eligibility */}
            <section className="py-20" aria-labelledby="eligibility-heading">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 id="eligibility-heading" className="text-3xl font-bold text-gray-900 mb-12 text-center">Am I Eligible?</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm">1</span> Requirements
                            </h3>
                            <ul className="space-y-4">
                                {FINANCING_ELIGIBILITY.requirements.map((req, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full" aria-hidden="true"></span>
                                        {req}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-sm">2</span> Good News
                            </h3>
                            <ul className="space-y-4">
                                {FINANCING_ELIGIBILITY.goodNews.map((news, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600">
                                        <CheckCircle size={20} className="text-green-500" aria-hidden="true" />
                                        {news}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-gray-50" aria-labelledby="fin-faq-heading">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 id="fin-faq-heading" className="text-3xl font-bold text-gray-900 mb-12 text-center">Financing FAQs</h2>
                    <div className="space-y-4">
                        {FINANCING_FAQS.map((faq, index) => (
                            <details key={index} className="bg-white rounded-xl p-6 group border border-gray-200 shadow-sm open:ring-2 open:ring-orange-100 transition-all">
                                <summary className="text-lg font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center focus:outline-none rounded">
                                    {faq.question}
                                    <span className="text-orange-500 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
                                </summary>
                                <p className="text-gray-600 mt-4 leading-relaxed">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white" aria-labelledby="fin-reviews-heading">
                <div className="container mx-auto px-4">
                    <h2 id="fin-reviews-heading" className="text-3xl font-bold text-gray-900 mb-12 text-center">Success Stories</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {TESTIMONIALS.slice(0, 3).map(t => (
                            <div key={t.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 relative">
                                <div className="text-orange-300 absolute top-4 left-4 text-6xl font-serif opacity-50">"</div>
                                <p className="text-gray-600 mb-6 italic relative z-10 pt-4 leading-relaxed">{t.text}</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-600">{t.name[0]}</div>
                                    <div>
                                        <p className="text-gray-900 font-bold">{t.name}</p>
                                        <p className="text-xs text-gray-500">Financed: {t.project}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-500" aria-labelledby="fin-cta-heading">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="fin-cta-heading" className="text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Call us to discuss financing options and get started today.</p>
                    <CallButton size="large" variant="white" sticky={false} />
                </div>
            </section>
        </div>
    );
}
