
import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CallButton } from '../components/CallButton';
import { PHONE_NUMBER, CITY, STATE, COMPANY_NAME } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-4 py-8">
         <Breadcrumbs items={[{ name: 'Contact Us', url: '/contact' }]} />
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4 text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Have an emergency or need a quote? We are available 24/7 to assist you.
            </p>
        </div>

        <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                        <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-500/20 p-3 rounded-lg text-orange-500">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Phone</p>
                                    <a href={`tel:${PHONE_NUMBER}`} className="text-xl font-bold text-white hover:text-orange-500">{PHONE_NUMBER}</a>
                                    <p className="text-xs text-green-500 mt-1">Available 24/7</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-orange-500/20 p-3 rounded-lg text-orange-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Email</p>
                                    <a href="mailto:info@example.com" className="text-lg text-white hover:text-orange-500">service@company.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-orange-500/20 p-3 rounded-lg text-orange-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400 mb-1">Headquarters</p>
                                    <p className="text-white text-lg">123 Service Road, Suite 100<br/>{CITY}, {STATE} 00000</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                        <h3 className="text-xl font-bold text-white mb-4">Business Hours</h3>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                <span>Monday - Friday</span>
                                <span>7:00 AM - 8:00 PM</span>
                            </div>
                            <div className="flex justify-between border-b border-gray-700 pb-2">
                                <span>Saturday</span>
                                <span>8:00 AM - 5:00 PM</span>
                            </div>
                            <div className="flex justify-between text-orange-500 font-bold">
                                <span>Sunday</span>
                                <span>Emergency Only</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simple CTA Box (No Form per instructions, mostly Call driven) */}
                <div className="bg-gradient-to-br from-orange-600 to-orange-500 p-10 rounded-xl text-white flex flex-col justify-center text-center">
                    <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
                    <p className="text-lg mb-8 text-orange-100">
                        For the fastest response, please give us a call. Our dispatchers are ready to send a technician to your location.
                    </p>
                    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm mb-8">
                        <p className="text-sm uppercase tracking-widest mb-2 font-bold">Current Response Time</p>
                        <p className="text-4xl font-bold">~ 45 Mins</p>
                    </div>
                    <CallButton size="large" variant="white" sticky={false} />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};
