
import React from 'react';
import { Star } from 'lucide-react';
import { GOOGLE_BUSINESS_URL, GOOGLE_RATING, GOOGLE_REVIEW_COUNT, GOOGLE_REVIEWS } from '../constants';

export const GoogleReviews = () => {
  return (
    <section className="py-20 bg-gray-900 border-t border-b border-gray-800" aria-label="Customer Reviews">
      <div className="container mx-auto px-4">
        {/* Header with Google Logo vibe */}
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div className="flex items-center gap-3 mb-3 bg-white/5 px-6 py-2 rounded-full border border-gray-700/50">
             <span className="text-2xl font-bold text-white tracking-tight">Google</span>
             <span className="px-2 py-0.5 bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-wide rounded border border-green-500/20">Verified Business</span>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="text-5xl font-bold text-white" aria-label={`Average rating ${GOOGLE_RATING} out of 5`}>{GOOGLE_RATING}</span>
            <div className="flex flex-col items-start">
                <div className="flex text-yellow-400 mb-1" aria-hidden="true">
                   {[...Array(5)].map((_,i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-gray-400 text-sm">Based on {GOOGLE_REVIEW_COUNT}+ reviews</p>
            </div>
          </div>
          
          <div className="mt-6">
            <a 
                href={GOOGLE_BUSINESS_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block border border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-full transition-all text-sm font-medium hover:bg-gray-800"
            >
                See all reviews on Google
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {GOOGLE_REVIEWS.map((review) => (
            <div key={review.id} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-gray-500 transition-colors shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <img src={review.avatar} alt={`Avatar of ${review.author}`} className="w-10 h-10 rounded-full border border-gray-600" />
                <div className="flex-1">
                  <p className="text-white font-bold text-sm">{review.author}</p>
                  <p className="text-gray-500 text-xs">{review.date}</p>
                </div>
                {/* Simple G Icon SVG - Decorative */}
                <svg className="w-5 h-5 opacity-70" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.38 0 9.25-4.04 9.25-9.09 0-.48-.15-1.81-.15-1.81z"/>
                </svg>
              </div>
              <div className="flex text-yellow-400 mb-3" aria-label={`Rated ${review.rating} out of 5 stars`}>
                 {[...Array(review.rating)].map((_,i) => <Star key={i} size={14} fill="currentColor" aria-hidden="true" />)}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">"{review.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
             <a 
                href={GOOGLE_BUSINESS_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-sm font-medium hover:underline"
            >
                Write a review
            </a>
        </div>
      </div>
    </section>
  );
};
