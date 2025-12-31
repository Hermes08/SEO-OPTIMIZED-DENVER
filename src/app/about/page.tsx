
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
        <div className="min-h-screen bg-gray-900">
            <SchemaMarkup type="Organization" data={{}} />

            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={[{ name: 'About Us', url: '/about' }]} />
            </div>

            {/* Hero */}
            <section className="relative py-20 overflow-hidden" aria-labelledby="about-hero">
                <div className="absolute inset-0 bg-gray-800" aria-hidden="true">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h1 id="about-hero" className="text-4xl md:text-6xl font-bold text-white mb-6">About {COMPANY_NAME}</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Dedicated to excellence, safety, and community.
                    </p>
                </div>
            </section>

            {/* History */}
            <section className="py-16" aria-labelledby="history-heading">
                <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src="https://picsum.photos/seed/history/600/400" alt="Our Team History" className="rounded-xl shadow-2xl border border-gray-700" />
                    </div>
                    <div>
                        <h2 id="history-heading" className="text-3xl font-bold text-white mb-6">Our History</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            {HISTORY_TEXT}
                        </p>
                        <div className="flex gap-4">
                            <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                                <span className="block text-3xl font-bold text-orange-500">15+</span>
                                <span className="text-sm text-gray-400">Years in Business</span>
                            </div>
                            <div className="text-center p-4 bg-gray-800 rounded-lg border border-gray-700">
                                <span className="block text-3xl font-bold text-orange-500">5k+</span>
                                <span className="text-sm text-gray-400">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className="py-16 bg-gray-800" aria-labelledby="mission-heading">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 id="mission-heading" className="text-3xl font-bold text-white mb-4">Our Mission & Values</h2>
                        <p className="text-gray-400">The core principles that guide our work every single day.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {VALUES.map((val, index) => (
                            <div key={index} className="bg-gray-900 p-6 rounded-lg border-t-4 border-orange-500">
                                <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
                                <p className="text-gray-400 text-sm">{val.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-16" aria-labelledby="team-heading">
                <div className="container mx-auto px-4">
                    <h2 id="team-heading" className="text-3xl font-bold text-white mb-12 text-center">Meet The Experts</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {TEAM_MEMBERS.map(member => (
                            <div key={member.id} className="text-center group">
                                <div className="relative mb-4 inline-block">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-48 h-48 rounded-full object-cover border-4 border-gray-800 group-hover:border-orange-500 transition-colors"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                                <p className="text-orange-500 text-sm">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications / Trust Badges */}
            <section className="py-16 bg-gray-800 border-t border-gray-700" aria-labelledby="cert-heading">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="cert-heading" className="text-2xl font-bold text-white mb-8">Licensed & Certified</h2>
                    <div className="flex justify-center gap-8 flex-wrap text-gray-400">
                        <div className="flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-full">
                            <Shield size={20} className="text-orange-500" aria-hidden="true" /> Fully Insured
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-full">
                            <Award size={20} className="text-orange-500" aria-hidden="true" /> State Licensed
                        </div>
                        <div className="flex items-center gap-2 px-6 py-3 bg-gray-900 rounded-full">
                            <Users size={20} className="text-orange-500" aria-hidden="true" /> Background Checked
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-center" aria-labelledby="cta-heading">
                <div className="container mx-auto px-4">
                    <h2 id="cta-heading" className="text-4xl font-bold text-white mb-6">Experience the Difference</h2>
                    <CallButton size="large" variant="white" sticky={false} />
                </div>
            </section>
        </div>
    );
}
