import React from 'react';
import {
  COMPANY_NAME, PHONE_NUMBER, CITY, STATE, ZIP_CODE, ADDRESS, SERVICE_AREAS,
  HAS_PHYSICAL_ADDRESS, HAS_VERIFIED_REVIEWS, GEO_COORDS, SOCIAL_LINKS,
  GOOGLE_RATING, GOOGLE_REVIEW_COUNT, BASE_URL,
} from '@/lib/constants';

const FALLBACK_IMAGE = '/images/general-hero.webp';

interface SchemaProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'Article' | 'BreadcrumbList' | 'FAQPage' | 'Review';
  data: any;
}

export const SchemaMarkup: React.FC<SchemaProps> = ({ type, data }) => {
  const baseUrl = BASE_URL;
  // Schema.org image fields must be absolute URLs; absolutize relative paths and fall back when missing.
  const abs = (img?: string) =>
    !img ? `${baseUrl}${FALLBACK_IMAGE}` : img.startsWith('http') ? img : `${baseUrl}${img}`;

  let schema: any = {};

  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": COMPANY_NAME,
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "url": `${baseUrl}/logo.svg`,
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
    // Only real, verified profiles — empty array omitted to avoid linking to non-existent pages.
    ...(SOCIAL_LINKS.length > 0 ? { "sameAs": SOCIAL_LINKS.map(s => s.url) } : {})
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
        "image": abs(data.image),
        "telephone": PHONE_NUMBER,
        "url": baseUrl,
        // Address + geo only emitted for a real, verified physical location (see HAS_PHYSICAL_ADDRESS).
        // A service-area business with no storefront must NOT publish a fabricated address.
        ...(HAS_PHYSICAL_ADDRESS ? {
          "address": {
            "@type": "PostalAddress",
            "streetAddress": ADDRESS,
            "addressLocality": CITY,
            "addressRegion": STATE,
            "postalCode": ZIP_CODE,
            "addressCountry": "US"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": GEO_COORDS.latitude,
            "longitude": GEO_COORDS.longitude
          }
        } : {}),
        // AggregateRating only when reviews are real and verifiable (see HAS_VERIFIED_REVIEWS).
        ...(HAS_VERIFIED_REVIEWS ? {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": GOOGLE_RATING,
            "reviewCount": GOOGLE_REVIEW_COUNT
          }
        } : {}),
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
          "image": abs(data.image),
          "telephone": PHONE_NUMBER,
          "priceRange": "$$"
        },
        "areaServed": {
          "@type": "State",
          "name": "Colorado"
        },
        "description": data.description,
        "image": abs(data.image),
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
        "image": abs(data.image),
        "author": {
          "@type": "Person",
          "name": data.author || data.authorName || "Expert"
        },
        "publisher": {
          "@type": "Organization",
          "name": COMPANY_NAME,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.svg`
          }
        },
        "datePublished": data.datePublished,
        "dateModified": data.dateModified || data.datePublished,
        "description": data.description || (data.headline || data.title)
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
