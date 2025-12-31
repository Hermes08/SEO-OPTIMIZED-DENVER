
import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallButton';
import { PHONE_NUMBER, CITY, STATE } from '@/lib/constants';
import { Phone, Mail, MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with our team for 24/7 emergency service or a free quote.",
};

export default function Contact() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={[{ name: 'Contact Us', url: '/contact' }]} />
            </div>

            <section className="py-12" aria-labelledby="contact-heading">
                <div className="container mx-auto px-4 text-center mb-16">
                    <h1 id="contact-heading" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Get in Touch</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Have an emergency or need a quote? We are available 24/7 to assist you.
                    </p>
                </div>

                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
                                            <Phone size={24} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1 font-medium">Phone</p>
                                            <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors">{PHONE_NUMBER}</a>
                                            <p className="text-xs text-green-600 mt-1 font-bold flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> Available 24/7</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
                                            <Mail size={24} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1 font-medium">Email</p>
                                            <a href="mailto:service@company.com" className="text-lg text-gray-900 hover:text-orange-600 transition-colors">service@company.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-orange-50 p-3 rounded-xl text-orange-600">
                                            <MapPin size={24} aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-gray-500 mb-1 font-medium">Headquarters</p>
                                            <p className="text-gray-900 text-lg">123 Service Road, Suite 100<br />{CITY}, {STATE} 00000</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
                                <div className="space-y-3 text-gray-600">
                                    <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="font-medium">Monday - Friday</span>
                                        <span>7:00 AM - 8:00 PM</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-100 pb-2">
                                        <span className="font-medium">Saturday</span>
                                        <span>8:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex justify-between text-orange-600 font-bold">
                                        <span>Sunday</span>
                                        <span>Emergency Only</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Simple CTA Box */}
                        <div className="bg-gradient-to-br from-orange-600 to-orange-500 p-10 rounded-2xl text-white flex flex-col justify-center text-center shadow-2xl relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/5 pattern-dots" aria-hidden="true"></div>
                            <div className="relative z-10">
                                <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
                                <p className="text-lg mb-8 text-orange-50">
                                    For the fastest response, please give us a call. Our dispatchers are ready to send a technician to your location.
                                </p>
                                <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md mb-8 border border-white/20">
                                    <p className="text-sm uppercase tracking-widest mb-2 font-bold text-orange-100">Current Response Time</p>
                                    <p className="text-4xl font-bold text-white">~ 45 Mins</p>
                                </div>
                                <CallButton size="large" variant="white" sticky={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
