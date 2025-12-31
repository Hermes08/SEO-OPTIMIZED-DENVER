
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, CATEGORIES, SERVICE_AREAS } from '../constants';

export const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    if (activeDropdown === id) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(id);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      {/* Skip to Main Content Link for Keyboard/Screen Reader Users */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-orange-500 focus:text-white focus:font-bold focus:rounded-lg focus:shadow-xl transition-all"
      >
        Skip to main content
      </a>

      {/* Top Bar */}
      <div className="bg-gray-950 py-2 text-xs md:text-sm text-gray-400 border-b border-gray-800" role="region" aria-label="Contact Information">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <MapPin size={12} className="text-orange-500" aria-hidden="true"/> 
              <span>Serving {COMPANY_NAME} Region</span>
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Clock size={12} className="text-orange-500" aria-hidden="true"/> 
              <span>24/7 Emergency Service</span>
            </span>
          </div>
          <a 
            href={`tel:${PHONE_NUMBER}`} 
            className="font-bold text-orange-500 hover:text-white transition-colors"
            aria-label={`Call us at ${PHONE_NUMBER}`}
          >
            {PHONE_NUMBER}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800" role="banner">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white tracking-tight" aria-label={`${COMPANY_NAME} Home`}>
              {COMPANY_NAME}<span className="text-orange-500">.</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              <Link to="/" className="text-sm font-medium hover:text-orange-500 transition-colors">Home</Link>
              <Link to="/about" className="text-sm font-medium hover:text-orange-500 transition-colors">About</Link>
              
              {/* Dynamic Categories */}
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="relative group">
                  <Link 
                    to={`/${cat.slug}`}
                    className="text-sm font-medium hover:text-orange-500 transition-colors flex items-center gap-1"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {cat.title}
                  </Link>
                  {/* Simple Dropdown on hover */}
                  <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200" role="menu">
                    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl py-2">
                        {cat.subServices.map(sub => (
                            <Link 
                                key={sub.id} 
                                to={`/${cat.slug}/${sub.slug}`}
                                className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                                role="menuitem"
                            >
                                {sub.title}
                            </Link>
                        ))}
                        <div className="border-t border-gray-700 mt-2 pt-2">
                             <Link 
                                to={`/${cat.slug}/blog`}
                                className="block px-4 py-2 text-sm text-orange-500 hover:bg-gray-700 font-bold"
                                role="menuitem"
                            >
                                {cat.title} Tips
                            </Link>
                        </div>
                    </div>
                  </div>
                </div>
              ))}

              <Link to="/areas-we-serve" className="text-sm font-medium hover:text-orange-500 transition-colors">Areas</Link>
              <Link to="/financing" className="text-sm font-medium hover:text-orange-500 transition-colors">Financing</Link>
              <Link to="/contact" className="text-sm font-medium hover:text-orange-500 transition-colors">Contact</Link>
              
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\D/g, '')}`} 
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-bold flex items-center gap-2 transition-transform hover:scale-105"
                aria-label="Call Now"
              >
                <Phone size={16} aria-hidden="true" />
                <span>Call Now</span>
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-800 border-t border-gray-700 absolute w-full left-0 top-full shadow-xl max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col p-4 space-y-4" aria-label="Mobile Navigation">
              <Link to="/" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>About Us</Link>
              
              {CATEGORIES.map((cat) => (
                <div key={cat.id}>
                    <button 
                        onClick={() => toggleDropdown(cat.id)}
                        className="flex items-center justify-between w-full text-lg font-medium hover:text-orange-500"
                        aria-expanded={activeDropdown === cat.id}
                    >
                        {cat.title}
                        <ChevronDown size={20} className={`transform transition-transform ${activeDropdown === cat.id ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                    {activeDropdown === cat.id && (
                        <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-700">
                            <Link 
                                to={`/${cat.slug}`}
                                className="block text-base text-gray-300 hover:text-white font-bold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                All {cat.title}
                            </Link>
                            {cat.subServices.map(sub => (
                                <Link 
                                    key={sub.id}
                                    to={`/${cat.slug}/${sub.slug}`}
                                    className="block text-base text-gray-400 hover:text-white"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {sub.title}
                                </Link>
                            ))}
                             <Link 
                                to={`/${cat.slug}/blog`}
                                className="block text-base text-orange-500 font-bold mt-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {cat.title} Blog
                            </Link>
                        </div>
                    )}
                </div>
              ))}

              <Link to="/areas-we-serve" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Areas We Serve</Link>
              <Link to="/financing" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Financing</Link>
              <Link to="/contact" className="block text-lg font-medium hover:text-orange-500" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content with ID for Skip Link */}
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 pt-16 pb-8 border-t border-gray-800" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">{COMPANY_NAME}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Professional services providing reliable, high-quality solutions for residential and commercial clients. Licensed & Insured.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders with ARIA labels */}
                <button className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer" aria-label="Facebook">FB</button>
                <button className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer" aria-label="Instagram">IG</button>
                <button className="w-8 h-8 bg-gray-800 rounded flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer" aria-label="LinkedIn">LI</button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/" className="hover:text-orange-500">Home</Link></li>
                <li><Link to="/about" className="hover:text-orange-500">About Us</Link></li>
                <li><Link to="/financing" className="hover:text-orange-500">Financing</Link></li>
                <li><Link to="/areas-we-serve" className="hover:text-orange-500">Service Areas</Link></li>
                <li><Link to="/contact" className="hover:text-orange-500">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {CATEGORIES.map(cat => (
                    <li key={cat.id}>
                        <Link to={`/${cat.slug}`} className="hover:text-orange-500">{cat.title}</Link>
                    </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex gap-3">
                  <Phone size={18} className="text-orange-500 shrink-0" aria-hidden="true" />
                  <span>{PHONE_NUMBER}</span>
                </li>
                <li className="flex gap-3">
                  <MapPin size={18} className="text-orange-500 shrink-0" aria-hidden="true" />
                  <span>Serving {COMPANY_NAME} Region and surrounding areas.</span>
                </li>
                <li className="flex gap-3">
                  <Clock size={18} className="text-orange-500 shrink-0" aria-hidden="true" />
                  <span>Mon-Fri: 7am - 8pm<br/>Sat-Sun: Emergency Only</span>
                </li>
              </ul>
            </div>
          </div>

          {/* COMPREHENSIVE SEO LINKS */}
          <div className="border-t border-gray-900 mt-12 pt-12">
            <div className="grid md:grid-cols-2 gap-8">
                
                {/* ALL SERVICES REMINDER */}
                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">All Services Provided</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-6 text-xs text-gray-500">
                        {CATEGORIES.map(cat => (
                            <div key={cat.id}>
                                <strong className="text-orange-500 block mb-2 uppercase text-xs tracking-wide">{cat.title}</strong>
                                <ul className="space-y-1">
                                    {cat.subServices.map(sub => (
                                        <li key={sub.id}>
                                            <Link to={`/${cat.slug}/${sub.slug}`} className="hover:text-white transition-colors">
                                                {sub.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ALL AREAS REMINDER */}
                <div>
                    <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Service Areas & Zip Codes</h4>
                    <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                        {SERVICE_AREAS.map(area => (
                            <div key={area.id}>
                                <strong className="text-white block mb-1">{area.city}, {area.state}</strong>
                                <p className="leading-relaxed">
                                    {area.zipCodes.join(', ')}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
          </div>

          <div className="border-t border-gray-900 pt-8 mt-12 text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
