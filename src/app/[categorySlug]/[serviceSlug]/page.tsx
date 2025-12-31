
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CATEGORIES, CITY, STATE, SERVICE_AREAS } from '@/lib/constants';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { CallButton } from '@/components/CallButton';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { GoogleReviews } from '@/components/GoogleReviews';
import { MapPin } from 'lucide-react';

// Generate Static Params for SSG
export async function generateStaticParams() {
    return CATEGORIES.flatMap((category) =>
        category.subServices.map((service) => ({
            categorySlug: category.slug,
            serviceSlug: service.slug,
        }))
    );
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string; serviceSlug: string }>; }) {
    const resolvedParams = await params;
    const category = CATEGORIES.find((c) => c.slug === resolvedParams.categorySlug);
    const service = category?.subServices.find((s) => s.slug === resolvedParams.serviceSlug);

    if (!category || !service) {
        return {
            title: 'Service Not Found',
        };
    }

    return {
        title: `${service.title} in ${CITY}`,
        description: `Expert ${service.title} services in ${CITY}, ${STATE}. ${service.description} Licensed & Insured.`,
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ categorySlug: string; serviceSlug: string }>; }) {
    const resolvedParams = await params;
    const category = CATEGORIES.find((c) => c.slug === resolvedParams.categorySlug);
    const service = category?.subServices.find((s) => s.slug === resolvedParams.serviceSlug);

    if (!category || !service) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <SchemaMarkup type="Service" data={{
                serviceType: service.title,
                image: service.image,
                description: service.description
            }} />

            {service.faqs && <SchemaMarkup type="FAQPage" data={{ faqs: service.faqs }} />}

            <div className="container mx-auto px-4 py-8">
                <Breadcrumbs items={[
                    { name: category.title, url: `/${category.slug}` },
                    { name: service.title, url: `/${category.slug}/${service.slug}` }
                ]} />
            </div>

            <article className="container mx-auto px-4 pb-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <header>
                            <h1 className="text-4xl font-bold text-white mb-6">{service.title} in {CITY}, {STATE}</h1>
                        </header>

                        {/* Optimized image usage in next step, using img for now */}
                        <img src={service.image} alt={`${service.title} illustration`} className="w-full h-[400px] object-cover rounded-xl mb-12 shadow-2xl" />

                        <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                            <p className="text-xl leading-relaxed mb-8 border-l-4 border-orange-500 pl-6 italic">
                                {service.description}
                            </p>

                            {/* Render Generated Heavy Content */}
                            <div dangerouslySetInnerHTML={{ __html: service.content || '' }} />
                        </div>

                        {/* FAQ Section */}
                        {service.faqs && (
                            <section className="mt-16 mb-12" aria-labelledby="faq-service-heading">
                                <h2 id="faq-service-heading" className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {service.faqs.map((faq, index) => (
                                        <details key={index} className="bg-gray-800 rounded-lg p-6 group border border-gray-700">
                                            <summary className="text-lg font-bold text-white cursor-pointer list-none flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded">
                                                {faq.question}
                                                <span className="text-orange-500 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
                                            </summary>
                                            <p className="text-gray-400 mt-4">{faq.answer}</p>
                                        </details>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Service Areas Reminder */}
                        <section className="mt-16 pt-12 border-t border-gray-800" aria-labelledby="areas-service-heading">
                            <h4 id="areas-service-heading" className="text-xl font-bold text-white mb-6">We Proudly Serve the Following Areas</h4>
                            <p className="text-gray-400 mb-6">
                                Our technicians are available for {service.title.toLowerCase()} in all the following locations.
                                If you don't see your city listed, please call us to confirm coverage.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {SERVICE_AREAS.map(area => (
                                    <Link
                                        key={area.id}
                                        href="/areas-we-serve"
                                        className="bg-gray-800 hover:bg-orange-500 hover:text-white px-3 py-1 rounded text-sm text-gray-400 transition-colors"
                                    >
                                        {area.city} ({area.zipCodes[0]})
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* Google Reviews */}
                        <div className="mt-16">
                            <GoogleReviews />
                        </div>

                        {/* Final CTA */}
                        <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center my-12 shadow-lg">
                            <h3 className="text-2xl font-bold text-white mb-4">Need {service.title} Today?</h3>
                            <p className="text-gray-400 mb-6">Don't wait. Schedule your service with our expert team now.</p>
                            <CallButton size="large" />
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-8" aria-label="Related Services Side Bar">
                        <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 sticky top-24 shadow-lg">
                            <h3 className="text-xl font-bold text-white mb-6 border-b border-gray-700 pb-2">Other {category.title}</h3>
                            <ul className="space-y-3">
                                {category.subServices.filter(s => s.id !== service.id).map(s => (
                                    <li key={s.id}>
                                        <Link
                                            href={`/${category.slug}/${s.slug}`}
                                            className="text-gray-400 hover:text-orange-500 transition-colors flex items-center justify-between group"
                                        >
                                            <span className="group-hover:translate-x-1 transition-transform">{s.title}</span>
                                            <span className="text-gray-600 group-hover:text-orange-500" aria-hidden="true">→</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8 pt-6 border-t border-gray-700">
                                <h4 className="font-bold text-white mb-2">Have Questions?</h4>
                                <p className="text-sm text-gray-400 mb-4">Speak with a specialist now.</p>
                                <CallButton size="default" />
                            </div>
                        </div>
                    </aside>
                </div>
            </article>
        </div>
    );
}
