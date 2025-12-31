
import React from 'react';
import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallButton';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { SERVICE_AREAS, REGION, TESTIMONIALS } from '@/lib/constants';
import { MapPin } from 'lucide-react';

export const metadata: Metadata = {
    title: "Areas We Serve",
    description: `Offering professional services throughout ${REGION} and surrounding communities. Check our service map.`,
};

export default function AreasWeServe() {
    return (
        <div className="min-h-screen bg-gray-900">
            <SchemaMarkup type="Service" data={{
                serviceType: "Home Services",
                areas: SERVICE_AREAS.map(a => ({ "@type": "City", name: a.city }))
            }} />

            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={[{ name: 'Areas We Serve', url: '/areas-we-serve' }]} />
            </div>

            {/* Hero */}
            <section className="py-12" aria-labelledby="area-hero-heading">
                <div className="container mx-auto px-4">
                    <h1 id="area-hero-heading" className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
                        Services Throughout {REGION}
                    </h1>

                    {/* Large Map Placeholder */}
                    <div className="w-full h-[500px] bg-gray-800 rounded-xl overflow-hidden relative flex items-center justify-center border border-gray-700 mb-16">
                        <img src="https://picsum.photos/seed/map-area/1600/900?blur=2" alt="" role="presentation" className="absolute inset-0 w-full h-full object-cover opacity-40" />
                        <div className="relative z-10 bg-gray-900/90 p-8 rounded-xl backdrop-blur text-center max-w-md">
                            <MapPin size={64} className="text-orange-500 mx-auto mb-4" aria-hidden="true" />
                            <h3 className="text-2xl font-bold text-white mb-2">Interactive Service Map</h3>
                            <p className="text-gray-400">We cover a 50-mile radius around our headquarters.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="py-16 bg-gray-800" aria-labelledby="cities-heading">
                <div className="container mx-auto px-4">
                    <h2 id="cities-heading" className="text-3xl font-bold text-white mb-12 text-center">Cities We Serve</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {SERVICE_AREAS.map(area => (
                            <div key={area.id} className="bg-gray-900 p-6 rounded-lg hover:bg-gray-750 transition border border-transparent hover:border-orange-500 group">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-500">{area.city}</h3>
                                <p className="text-gray-400 mb-6">{area.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-bold text-white text-sm mb-2">Zip Codes:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {area.zipCodes.map(zip => (
                                            <span key={zip} className="bg-gray-800 px-2 py-1 rounded text-xs text-gray-300 border border-gray-700">
                                                {zip}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Local Testimonials */}
            <section className="py-16" aria-labelledby="reviews-heading">
                <div className="container mx-auto px-4">
                    <h2 id="reviews-heading" className="text-3xl font-bold text-white mb-12 text-center">What Neighbors Are Saying</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {TESTIMONIALS.map(t => (
                            <div key={t.id} className="bg-gray-800 p-6 rounded-lg">
                                <div className="flex items-center justify-between mb-4">
                                    <h4 className="text-white font-bold">{t.location} Review</h4>
                                    <div className="flex text-yellow-500 text-sm" aria-label="5 out of 5 stars">★★★★★</div>
                                </div>
                                <p className="text-gray-300 italic mb-4">"{t.text}"</p>
                                <p className="text-orange-500 font-bold text-sm">- {t.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gray-800" aria-labelledby="find-city-heading">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="find-city-heading" className="text-3xl font-bold text-white mb-8">Find Service in Your Area</h2>

                    <div className="max-w-md mx-auto mb-8">
                        {/* This select is decorative in this static version, logic could be added with client component if needed */}
                        <div className="relative">
                            <select
                                className="w-full px-4 py-3 rounded bg-gray-700 text-white border border-gray-600 focus:border-orange-500 outline-none appearance-none"
                                aria-label="Select your city"
                            >
                                <option>Select your city...</option>
                                {SERVICE_AREAS.map(area => (
                                    <option key={area.id}>{area.city}</option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <CallButton size="large" />
                </div>
            </section>
        </div>
    );
}
