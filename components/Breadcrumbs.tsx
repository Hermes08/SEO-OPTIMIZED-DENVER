import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { BreadcrumbItem } from '../types';
import { SchemaMarkup } from './SchemaMarkup';

export const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <>
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-400 mb-8 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-white flex items-center gap-1 focus:outline-none focus:text-orange-500">
          <Home size={14} aria-hidden="true" /> 
          <span>Home</span>
        </Link>
        {items.map((item, index) => (
          <span key={index} className="flex items-center">
            <ChevronRight size={14} className="mx-1 text-gray-600" aria-hidden="true" />
            {index === items.length - 1 ? (
              <span className="text-orange-500 font-medium" aria-current="page">{item.name}</span>
            ) : (
              <Link to={item.url} className="hover:text-white transition-colors focus:outline-none focus:text-orange-500">
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
      <SchemaMarkup type="BreadcrumbList" data={{ items: [{ name: 'Home', url: '/' }, ...items] }} />
    </>
  );
};