
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { CATEGORIES, CITY, STATE, SERVICE_AREAS, PROCESS_STEPS, BLOG_POSTS, GENERATE_CONTENT } from '../constants';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CallButton } from '../components/CallButton';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { SEO } from '../components/SEO';
import { GoogleReviews } from '../components/GoogleReviews';
import { MapPin } from 'lucide-react';

export const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = CATEGORIES.find(c => c.slug === categorySlug);

  if (!category) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <SEO 
        title={`${category.title} in ${CITY}`} 
        description={`Professional ${category.title} services in ${CITY}, ${STATE}. ${category.shortDescription} Call today for a quote!`}
      />
      <SchemaMarkup type="Service" data={{ 
          serviceType: category.title,
          image: category.heroImage,
          description: category.description 
      }} />

      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img src={category.heroImage} alt={`${category.title} Hero`} className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
            <Breadcrumbs items={[{ name: category.title, url: `/${category.slug}` }]} />
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mb-12">
                <p className="text-lg text-gray-300">
                    {category.description} We are committed to providing top-notch service to the {CITY} community.
                    Our team of experts uses the latest technology to ensure your job is done right the first time.
                </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-8">Why Choose Our {category.title}?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
                {category.benefits.map((benefit, index) => (
                    <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                        <category.icon className="text-orange-500 mb-4" size={40} />
                        <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                        <p className="text-gray-400">{benefit.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 3. Sub-services Grid */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12">{category.title} We Offer</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {category.subServices.map(service => (
                    <Link to={`/${category.slug}/${service.slug}`} key={service.id}>
                        <div className="bg-gray-900 p-6 rounded-lg hover:bg-gray-750 transition group h-full border border-transparent hover:border-orange-500">
                            <div className="h-48 mb-4 overflow-hidden rounded">
                                <img 
                                    src={service.image} 
                                    alt={`${service.title} in ${CITY}`} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500">{service.title}</h3>
                            <p className="text-gray-400 mb-4 text-sm line-clamp-2">{service.description}</p>
                            <span className="text-orange-500 hover:underline text-sm font-bold">Learn More →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* 4. Local SEO Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-8">Serving {CITY} & Surrounding Areas</h2>
            
            <div className="mb-12 rounded-lg overflow-hidden h-96 bg-gray-800 relative flex items-center justify-center">
                 {/* Mock Map */}
                 <img src="https://picsum.photos/seed/map-service/1200/400?blur=4" alt="Map Background" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                 <div className="z-10 text-center">
                    <MapPin className="text-orange-500 mx-auto mb-2" size={48} />
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
            
            <Link to="/areas-we-serve" className="text-orange-500 hover:underline">View All Service Areas →</Link>
        </div>
      </section>

      {/* 5. Process */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Service Process</h2>
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
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-3xl font-bold text-white">Tips & Resources</h2>
                <Link to="/blog" className="text-orange-500 hover:underline">View All Articles →</Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {BLOG_POSTS.slice(0, 3).map(post => (
                    <Link to={`/blog`} key={post.id} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition border border-gray-700">
                        <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                            <span className="text-orange-500 text-sm">Read More →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {category.faqs.map((faq, index) => (
                    <details key={index} className="bg-gray-900 rounded-lg p-6 group">
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

      {/* Google Reviews - Moved to bottom */}
      <GoogleReviews />

      {/* 9. Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready for Professional {category.title}?</h2>
            <p className="text-xl text-white/90 mb-8">Contact us today for expert service in {CITY}.</p>
            <CallButton size="large" variant="white" />
            <div className="mt-8 flex justify-center gap-6 text-white/90 text-sm font-medium">
                <span>✓ Fast Response</span>
                <span>✓ Licensed & Insured</span>
                <span>✓ Satisfaction Guaranteed</span>
            </div>
        </div>
      </section>
    </div>
  );
};
