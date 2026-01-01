import React from 'react';
import { COMPANY_NAME, PHONE_NUMBER, CITY, STATE, SERVICE_AREAS } from '@/lib/constants';

interface SchemaProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'Article' | 'BreadcrumbList' | 'FAQPage' | 'Review';
  data: any;
}

export const SchemaMarkup: React.FC<SchemaProps> = ({ type, data }) => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.denvermetroservices.com';

  let schema: any = {};

  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": COMPANY_NAME,
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.png`,
      "width": "600",
      "height": "120"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE_NUMBER,
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://facebook.com/denvermetroservices",
      "https://instagram.com/denvermetroservices",
      "https://linkedin.com/company/denvermetroservices"
    ]
  };

  switch (type) {
    case 'Organization':
      schema = baseOrganization;
      break;
    case 'LocalBusiness':
      schema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": `${baseUrl}/#localbusiness`,
        "name": COMPANY_NAME,
        "image": data.image || `${baseUrl}/images/hero-fallback.jpg`,
        "telephone": PHONE_NUMBER,
        "url": baseUrl,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Service Road, Suite 100",
          "addressLocality": CITY,
          "addressRegion": STATE,
          "postalCode": "80202",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 39.7392,
          "longitude": -104.9903
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "07:00",
            "closes": "20:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "08:00",
            "closes": "17:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "00:00",
            "closes": "23:59",
            "description": "Emergency Only"
          }
        ],
        "areaServed": SERVICE_AREAS.map(area => ({
          "@type": "City",
          "name": area.city,
          "sameAs": `https://en.wikipedia.org/wiki/${area.city.replace(' ', '_')},_Colorado`
        })),
        "priceRange": "$$"
      };
      break;
    case 'BreadcrumbList':
      schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.items?.map((item: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url ? (item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`) : baseUrl
        })) || []
      };
      break;
    case 'Service':
      schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": data.serviceType || data.name,
        "provider": {
          "@type": "LocalBusiness",
          "name": COMPANY_NAME,
          "image": data.image || `${baseUrl}/images/hero-fallback.jpg`,
          "telephone": PHONE_NUMBER,
          "priceRange": "$$"
        },
        "areaServed": {
          "@type": "State",
          "name": "Colorado"
        },
        "description": data.description,
        "image": data.image || `${baseUrl}/images/hero-fallback.jpg`,
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Call for free estimate"
        }
      };
      break;
    case 'FAQPage':
      schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.faqs?.map((faq: any) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        })) || []
      };
      break;
    case 'Article':
      schema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": data.headline || data.title,
        "image": data.image,
        "author": {
          "@type": "Person",
          "name": data.author || data.authorName || "Expert"
        },
        "publisher": {
          "@type": "Organization",
          "name": COMPANY_NAME,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`
          }
        },
        "datePublished": data.datePublished,
        "dateModified": data.dateModified || data.datePublished,
        "description": data.description || headline
      };
      break;
    default:
      schema = {};
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};