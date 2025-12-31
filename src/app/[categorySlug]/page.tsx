
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { CATEGORIES, CITY, STATE, SERVICE_AREAS, PROCESS_STEPS, BLOG_POSTS, GENERATE_CONTENT } from '@/lib/constants';
import { CallButton } from '@/components/CallButton';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { GoogleReviews } from '@/components/GoogleReviews';
import { MapPin } from 'lucide-react';

// Generate Static Params for SSG
export async function generateStaticParams() {
    return CATEGORIES.map((category) => ({
        categorySlug: category.slug,
    }));
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ categorySlug: string }>; }) {
    const resolvedParams = await params;
    const category = CATEGORIES.find((c) => c.slug === resolvedParams.categorySlug);

    if (!category) {
        return {
            title: 'Category Not Found',
        };
    }

    return {
        title: `${category.title} in ${CITY}`,
        description: `Professional ${category.title} services in ${CITY}, ${STATE}. ${category.shortDescription} Call today for a quote!`,
    };
}

export default async function CategoryPage({ params }: { params: Promise<{ categorySlug: string }>; }) {
    const resolvedParams = await params;
    const category = CATEGORIES.find((c) => c.slug === resolvedParams.categorySlug);

    if (!category) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-900">
            <SchemaMarkup type="Service" data={{
                serviceType: category.title,
                image: category.heroImage,
                description: category.description
            }} />

            {/* 1. Hero Section */}
            <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 overflow-hidden" aria-labelledby="category-hero">
                <div className="absolute inset-0 opacity-20" aria-hidden="true">
                    {/* Using img for simplicity as per previous analysis, next/image would need domain config */}
                    <img src={category.heroImage} alt={`${category.title} Hero`} className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    {/* Breadcrumbs - Simplified for Next.js */}
                    <nav className="text-gray-400 text-sm mb-6" aria-label="Breadcrumb">
                        <ol className="flex items-center gap-2">
                            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                            <li>/</li>
                            <li className="text-white font-bold" aria-current="page">{category.title}</li>
                        </ol>
                    </nav>

                    <h1 id="category-hero" className="text-4xl md:text-5xl font-bold text-white mb-4">
                        {category.title} in <span className="text-orange-500">{CITY}, {STATE}</span>
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                        Professional {category.title.toLowerCase()} solutions for residential and commercial needs in {CITY}.
                    </p>

                    <CallButton size="large" />

                    <div className="mt-8 flex gap-4 text-sm text-gray-400">
                        <span>✓ Licensed & Insured</span>
                        <span>✓ Same-Day Service</span>
                        <span>✓ Satisfaction Guaranteed</span>
                    </div>
                </div>
            </section>

            {/* 2. Intro + Value Proposition */}
            <section className="py-16 bg-gray-900" aria-labelledby="intro-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mb-12">
                        <p className="text-lg text-gray-300">
                            {category.description} We are committed to providing top-notch service to the {CITY} community.
                            Our team of experts uses the latest technology to ensure your job is done right the first time.
                        </p>
                    </div>

                    <h2 id="intro-heading" className="text-3xl font-bold text-white mb-8">Why Choose Our {category.title}?</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {category.benefits.map((benefit, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                                <category.icon className="text-orange-500 mb-4" size={40} aria-hidden="true" />
                                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                                <p className="text-gray-400">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Sub-services Grid */}
            <section className="py-16 bg-gray-800" aria-labelledby="services-heading">
                <div className="container mx-auto px-4">
                    <h2 id="services-heading" className="text-3xl font-bold text-white mb-12">{category.title} We Offer</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {category.subServices.map(service => (
                            <Link href={`/${category.slug}/${service.slug}`} key={service.id} className="block h-full">
                                <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-750 transition group h-full border border-transparent hover:border-orange-500">
                                    <div className="h-48 mb-4 overflow-hidden rounded relative">
                                        <img
                                            src={service.image}
                                            alt={`${service.title} in ${CITY}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500">{service.title}</h3>
                                    <p className="text-gray-400 mb-4 text-sm line-clamp-2">{service.description}</p>
                                    <span className="text-orange-500 text-sm font-bold flex items-center gap-1">Learn More &rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Local SEO Section */}
            <section className="py-16 bg-gray-900" aria-labelledby="local-seo-heading">
                <div className="container mx-auto px-4">
                    <h2 id="local-seo-heading" className="text-3xl font-bold text-white mb-8">Serving {CITY} & Surrounding Areas</h2>

                    <div className="mb-12 rounded-lg overflow-hidden h-96 bg-gray-800 relative flex items-center justify-center">
                        {/* Mock Map */}
                        <img src="https://picsum.photos/seed/map-service/1200/400?blur=4" alt="" role="presentation" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                        <div className="z-10 text-center p-6 bg-gray-900/80 rounded-xl backdrop-blur">
                            <MapPin className="text-orange-500 mx-auto mb-2" size={48} aria-hidden="true" />
                            <p className="text-white font-bold text-xl">Service Area Map Placeholder</p>
                        </div>
                    </div>

                    <div className="max-w-3xl mb-8">
                        <p className="text-gray-300 text-lg mb-4">
                            We proudly serve {CITY} and surrounding communities with professional {category.title.toLowerCase()}.
                            Our expert team is available throughout {STATE}.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        {SERVICE_AREAS.map(area => (
                            <div key={area.id} className="bg-gray-800 p-4 rounded border border-gray-700">
                                <h3 className="font-bold text-white mb-2">{area.city}</h3>
                                <ul className="text-sm text-gray-400 space-y-1">
                                    {area.zipCodes.map(zip => <li key={zip}>{zip}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <Link href="/areas-we-serve" className="text-orange-500 hover:underline font-bold">View All Service Areas &rarr;</Link>
                </div>
            </section>

            {/* 5. Process */}
            <section className="py-16 bg-gray-800" aria-labelledby="process-heading">
                <div className="container mx-auto px-4">
                    <h2 id="process-heading" className="text-3xl font-bold text-white mb-12 text-center">Our Service Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {PROCESS_STEPS.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400 text-sm">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Blog Preview */}
            <section className="py-16 bg-gray-900" aria-labelledby="blog-heading">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <h2 id="blog-heading" className="text-3xl font-bold text-white">Tips & Resources</h2>
                        <Link href="/blog" className="text-orange-500 hover:underline">View All Articles &rarr;</Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {BLOG_POSTS.slice(0, 3).map(post => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
                                <div className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition duration-300 border border-gray-700 h-full">
                                    <img src={post.image} alt="" role="presentation" className="w-full h-48 object-cover" />
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">{post.title}</h3>
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                                        <span className="text-orange-500 text-sm font-bold">Read More &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section className="py-16 bg-gray-800" aria-labelledby="faq-heading">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 id="faq-heading" className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {category.faqs.map((faq, index) => (
                            <details key={index} className="bg-gray-900 rounded-lg p-6 group open:bg-gray-900 transition-colors">
                                <summary className="text-lg font-bold text-white cursor-pointer list-none flex justify-between items-center">
                                    {faq.question}
                                    <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-gray-400 mt-4">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                    <SchemaMarkup type="FAQPage" data={{ faqs: category.faqs }} />
                </div>
            </section>

            {/* SEO Heavy Content Section */}
            <section className="py-20 bg-gray-900 border-t border-gray-800">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div
                        className="prose prose-invert prose-lg max-w-none text-gray-300"
                        dangerouslySetInnerHTML={{ __html: GENERATE_CONTENT(category.title) }}
                    />
                </div>
            </section>

            {/* Google Reviews */}
            <GoogleReviews />

            {/* 9. Final CTA */}
            <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500" aria-labelledby="cta-heading">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="cta-heading" className="text-4xl font-bold text-white mb-4">Ready for Professional {category.title}?</h2>
                    <p className="text-xl text-white/90 mb-8">Contact us today for expert service in {CITY}.</p>
                    <CallButton size="large" variant="white" />
                    <div className="mt-8 flex justify-center gap-6 text-white/90 text-sm font-medium">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Fast Response</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Licensed & Insured</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Satisfaction Guaranteed</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
