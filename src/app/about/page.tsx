
import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallButton';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { HISTORY_TEXT, VALUES, TEAM_MEMBERS, COMPANY_NAME } from '@/lib/constants';
import { Award, Shield, Users } from 'lucide-react';

export const metadata: Metadata = {
    title: "About Us",
    description: `Learn more about ${COMPANY_NAME}, our history, values, and the expert team serving your community since 2005.`,
};

export default function About() {
    return (
        <div className="min-h-screen bg-gray-50">
            <SchemaMarkup type="Organization" data={{}} />

            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />
            </div>

            {/* Hero */}
            <section className="relative py-20 overflow-hidden bg-white" aria-labelledby="about-hero">
                <div className="absolute inset-0 opacity-5" aria-hidden="true">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 id="about-hero" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">About {COMPANY_NAME}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Dedicated to excellence, safety, and community since 2005.
                    </p>
                </div>
            </section>

            {/* History */}
            <section className="py-20 bg-white" aria-labelledby="history-heading">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-orange-500/20 rounded-xl blur-xl" aria-hidden="true"></div>
                        <img src="/images/team-hero.png" alt="Our Team History" className="relative rounded-2xl shadow-2xl border border-white/50" />
                    </div>
                    <div>
                        <h2 id="history-heading" className="text-3xl font-bold text-gray-900 mb-6">Our History</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {HISTORY_TEXT}
                        </p>
                        <div className="flex gap-4">
                            <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                                <span className="block text-4xl font-bold text-orange-600 mb-1">15+</span>
                                <span className="text-sm text-gray-500 font-medium">Years in Business</span>
                            </div>
                            <div className="text-center p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
                                <span className="block text-4xl font-bold text-orange-600 mb-1">5k+</span>
                                <span className="text-sm text-gray-500 font-medium">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-20 bg-gray-50" aria-labelledby="mission-heading">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 id="mission-heading" className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">The core principles that guide our work every single day.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {VALUES.map((val, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl border-t-4 border-orange-500 shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 bg-white" aria-labelledby="team-heading">
                <div className="container mx-auto px-4">
                    <h2 id="team-heading" className="text-3xl font-bold text-gray-900 mb-16 text-center">Meet The Experts</h2>
                    <div className="grid md:grid-cols-4 gap-12">
                        {TEAM_MEMBERS.map(member => (
                            <div key={member.id} className="text-center group">
                                <div className="relative mb-6 inline-block">
                                    <div className="absolute inset-0 bg-orange-500 rounded-full blur opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-48 h-48 rounded-full object-cover border-4 border-gray-100 group-hover:border-orange-500 transition-colors relative z-10 shadow-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                                <p className="text-orange-600 text-sm font-medium uppercase tracking-wide">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications / Trust Badges */}
            <section className="py-16 bg-gray-50 border-t border-gray-100" aria-labelledby="cert-heading">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="cert-heading" className="text-2xl font-bold text-gray-900 mb-8">Licensed & Certified</h2>
                    <div className="flex justify-center gap-6 flex-wrap">
                        <div className="flex items-center gap-2 px-8 py-4 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 font-medium">
                            <Shield size={20} className="text-orange-600" aria-hidden="true" /> Fully Insured
                        </div>
                        <div className="flex items-center gap-2 px-8 py-4 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 font-medium">
                            <Award size={20} className="text-orange-600" aria-hidden="true" /> State Licensed
                        </div>
                        <div className="flex items-center gap-2 px-8 py-4 bg-white rounded-full shadow-sm border border-gray-100 text-gray-700 font-medium">
                            <Users size={20} className="text-orange-600" aria-hidden="true" /> Background Checked
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-500 text-center" aria-labelledby="cta-heading">
                <div className="container mx-auto px-4">
                    <h2 id="cta-heading" className="text-4xl font-bold text-white mb-6">Experience the Difference</h2>
                    <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto">Join thousands of satisfied neighbors who trust us with their homes.</p>
                    <CallButton size="large" variant="white" sticky={false} />
                </div>
            </section>
        </div>
    );
}
