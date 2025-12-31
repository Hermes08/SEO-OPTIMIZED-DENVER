
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
        <div className="min-h-screen bg-gray-50">
            <SchemaMarkup type="Service" data={{
                serviceType: category.title,
                image: category.heroImage,
                description: category.description
            }} />

            {/* 1. Hero Section */}
            <section className="relative bg-white py-20 overflow-hidden" aria-labelledby="category-hero">
                <div className="absolute inset-0 opacity-10" aria-hidden="true">
                    {/* Using img for simplicity as per previous analysis, next/image would need domain config */}
                    <img src={category.heroImage} alt={`${category.title} Hero`} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    {/* Breadcrumbs - Simplified for Next.js */}
                    <nav className="text-gray-500 text-sm mb-6" aria-label="Breadcrumb">
                        <ol className="flex items-center gap-2">
                            <li><Link href="/" className="hover:text-orange-600">Home</Link></li>
                            <li>/</li>
                            <li className="text-gray-900 font-bold" aria-current="page">{category.title}</li>
                        </ol>
                    </nav>

                    <h1 id="category-hero" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                        {category.title} in <span className="text-orange-600">{CITY}, {STATE}</span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
                        Professional {category.title.toLowerCase()} solutions for residential and commercial needs in {CITY}.
                    </p>

                    <CallButton size="large" />

                    <div className="mt-8 flex gap-6 text-sm text-gray-600 font-medium">
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Licensed & Insured</span>
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Same-Day Service</span>
                        <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-500"></div> Satisfaction Guaranteed</span>
                    </div>
                </div>
            </section>

            {/* 2. Intro + Value Proposition */}
            <section className="py-20 bg-white" aria-labelledby="intro-heading">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mb-12">
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {category.description} We are committed to providing top-notch service to the {CITY} community.
                            Our team of experts uses the latest technology to ensure your job is done right the first time.
                        </p>
                    </div>

                    <h2 id="intro-heading" className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our {category.title}?</h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        {category.benefits.map((benefit, index) => (
                            <div key={index} className="glass-card p-8 rounded-xl border-l-4 border-orange-500">
                                <category.icon className="text-orange-600 mb-4" size={40} aria-hidden="true" />
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Sub-services Grid */}
            <section className="py-20 bg-gray-50" aria-labelledby="services-heading">
                <div className="container mx-auto px-4">
                    <h2 id="services-heading" className="text-3xl font-bold text-gray-900 mb-12">{category.title} We Offer</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {category.subServices.map(service => (
                            <Link href={`/${category.slug}/${service.slug}`} key={service.id} className="block h-full group">
                                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                    <div className="h-56 mb-6 overflow-hidden rounded-xl relative">
                                        <img
                                            src={service.image}
                                            alt={`${service.title} in ${CITY}`}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 mb-6 text-sm line-clamp-3 leading-relaxed flex-grow">{service.description}</p>
                                    <span className="text-orange-600 text-sm font-bold flex items-center gap-2 group-hover:gap-3 transition-all">Learn More &rarr;</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Local SEO Section */}
            <section className="py-20 bg-white" aria-labelledby="local-seo-heading">
                <div className="container mx-auto px-4">
                    <h2 id="local-seo-heading" className="text-3xl font-bold text-gray-900 mb-8">Serving {CITY} & Surrounding Areas</h2>

                    <div className="mb-12 rounded-2xl overflow-hidden h-96 bg-gray-100 relative flex items-center justify-center border border-gray-200">
                        {/* Mock Map */}
                        <img src="https://picsum.photos/seed/map-service/1200/400?blur=4" alt="" role="presentation" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale" />
                        <div className="z-10 text-center p-8 bg-white/90 rounded-2xl backdrop-blur shadow-xl border border-white/50">
                            <MapPin className="text-orange-600 mx-auto mb-4" size={48} aria-hidden="true" />
                            <p className="text-gray-900 font-bold text-xl">Service Area Map Placeholder</p>
                            <p className="text-gray-500 text-sm mt-2">Interactive map available on Areas page</p>
                        </div>
                    </div>

                    <div className="max-w-3xl mb-8">
                        <p className="text-gray-600 text-lg mb-4">
                            We proudly serve {CITY} and surrounding communities with professional {category.title.toLowerCase()}.
                            Our expert team is available throughout {STATE}.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                        {SERVICE_AREAS.map(area => (
                            <div key={area.id} className="bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-orange-200 transition-colors">
                                <h3 className="font-bold text-gray-900 mb-2">{area.city}</h3>
                                <ul className="text-xs text-gray-500 space-y-1">
                                    {area.zipCodes.map(zip => <li key={zip}>{zip}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <Link href="/areas-we-serve" className="text-orange-600 hover:underline font-bold inline-flex items-center gap-1">View All Service Areas &rarr;</Link>
                </div>
            </section>

            {/* 5. Process */}
            <section className="py-20 bg-gray-900 text-white" aria-labelledby="process-heading">
                <div className="container mx-auto px-4">
                    <h2 id="process-heading" className="text-3xl font-bold text-white mb-16 text-center">Our Service Process</h2>
                    <div className="grid md:grid-cols-4 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gray-700 -z-10"></div>

                        {PROCESS_STEPS.map((step, index) => (
                            <div key={index} className="text-center relative">
                                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-lg ring-4 ring-gray-900">
                                    {index + 1}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Blog Preview */}
            <section className="py-20 bg-gray-50" aria-labelledby="blog-heading">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center mb-12">
                        <h2 id="blog-heading" className="text-3xl font-bold text-gray-900">Tips & Resources</h2>
                        <Link href="/blog" className="text-orange-600 hover:underline font-bold">View All Articles &rarr;</Link>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {BLOG_POSTS.slice(0, 3).map(post => (
                            <Link href={`/blog/${post.slug}`} key={post.id} className="block group">
                                <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                    <img src={post.image} alt="" role="presentation" className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="text-orange-600 text-xs font-bold uppercase tracking-wider mb-2">{post.category}</div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">{post.title}</h3>
                                        <p className="text-gray-500 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">{post.excerpt}</p>
                                        <span className="text-orange-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">Read More &rarr;</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. FAQ Section */}
            <section className="py-20 bg-white" aria-labelledby="faq-heading">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 id="faq-heading" className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {category.faqs.map((faq, index) => (
                            <details key={index} className="bg-white rounded-xl border border-gray-200 p-6 group open:ring-2 open:ring-orange-100 transition-all shadow-sm">
                                <summary className="text-lg font-bold text-gray-900 cursor-pointer list-none flex justify-between items-center outline-none">
                                    {faq.question}
                                    <span className="text-gray-400 group-open:text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="text-gray-600 mt-4 leading-relaxed pl-4 border-l-2 border-orange-200">{faq.answer}</p>
                            </details>
                        ))}
                    </div>
                    <SchemaMarkup type="FAQPage" data={{ faqs: category.faqs }} />
                </div>
            </section>

            {/* SEO Heavy Content Section */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div
                        className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-strong:text-gray-900 prose-li:text-gray-600"
                        dangerouslySetInnerHTML={{ __html: GENERATE_CONTENT(category.title) }}
                    />
                </div>
            </section>

            {/* Google Reviews */}
            <GoogleReviews />

            {/* 9. Final CTA */}
            <section className="py-24 bg-gradient-to-r from-orange-600 to-orange-500" aria-labelledby="cta-heading">
                <div className="container mx-auto px-4 text-center">
                    <h2 id="cta-heading" className="text-4xl font-bold text-white mb-6">Ready for Professional {category.title}?</h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Contact us today for expert service in {CITY}.</p>
                    <CallButton size="large" variant="white" />
                    <div className="mt-10 flex justify-center gap-8 text-white/90 text-sm font-medium">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Fast Response</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Licensed & Insured</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-white"></div> Satisfaction Guaranteed</span>
                    </div>
                </div>
            </section>
        </div>
    );
}
