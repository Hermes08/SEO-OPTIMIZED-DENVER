
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_NAME } from '../constants';

interface SEOProps {
  title: string;
  description: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description }) => {
  const location = useLocation();

  useEffect(() => {
    // Update Title
    document.title = `${title} | ${COMPANY_NAME}`;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, location]);

  return null;
};
