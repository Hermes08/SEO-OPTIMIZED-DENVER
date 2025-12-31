import React from 'react';
import { COMPANY_NAME, PHONE_NUMBER, CITY, STATE } from '../constants';

interface SchemaProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'Article' | 'BreadcrumbList' | 'FAQPage' | 'Review';
  data: any;
}

export const SchemaMarkup: React.FC<SchemaProps> = ({ type, data }) => {
  let schema = {};

  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": COMPANY_NAME,
    "url": window.location.origin,
    "logo": `${window.location.origin}/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE_NUMBER,
      "contactType": "customer service"
    }
  };

  switch (type) {
    case 'Organization':
      schema = baseOrganization;
      break;
    case 'LocalBusiness':
      schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": COMPANY_NAME,
        "image": data.image,
        "telephone": PHONE_NUMBER,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": CITY,
          "addressRegion": STATE,
          "addressCountry": "US"
        },
        "priceRange": "$$"
      };
      break;
    case 'BreadcrumbList':
      schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": data.items.map((item: any, index: number) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": `${window.location.origin}${item.url}`
        }))
      };
      break;
      // Add other cases as needed
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