'use client';

import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { PHONE_NUMBER } from '@/lib/constants';
import { trackContact } from '@/lib/analytics';

interface CallButtonProps {
  size?: 'default' | 'large';
  variant?: 'primary' | 'white';
  sticky?: boolean;
  onlySticky?: boolean;
}

export const CallButton: React.FC<CallButtonProps> = ({
  size = 'default',
  variant = 'primary',
  sticky = true,
  onlySticky = false
}) => {
  const telLink = `tel:${PHONE_NUMBER.replace(/\D/g, '')}`;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (sticky) {
      const handleScroll = () => {
        setIsVisible(window.scrollY > 300);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [sticky]);

  const baseClasses = "inline-flex items-center justify-center gap-2 font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg";

  // Reverted to original sizes
  const sizeClasses = {
    default: "px-6 py-3 text-base",
    large: "px-8 py-4 text-xl"
  };

  const variantClasses = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white",
    white: "bg-white hover:bg-gray-100 text-orange-700"
  };

  const handleCall = () => {
    trackContact('phone', sticky ? 'sticky_bar' : 'hero'); // Defaulting to hero/inline, can be refined
  };

  const StickyButton = () => (
    <div className="fixed bottom-0 left-0 right-0 z-[999] p-4 md:p-0 md:bottom-8 md:right-8 md:left-auto pointer-events-none">
      <a
        href={telLink}
        onClick={() => trackContact('phone', 'sticky_bar')}
        className="pointer-events-auto w-full md:w-auto bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white px-8 py-5 md:py-4 rounded-2xl md:rounded-full shadow-[0_20px_50px_rgba(234,88,12,0.4)] flex items-center justify-center gap-3 font-black text-xl md:text-lg transition-all hover:scale-[1.02] active:scale-95 border-2 border-white/30 backdrop-blur-md group"
        aria-label={`Call us now at ${PHONE_NUMBER}`}
      >
        <Phone size={28} className="group-hover:rotate-12 transition-transform animate-pulse" aria-hidden="true" />
        <span className="tracking-tight uppercase">Call Now: {PHONE_NUMBER}</span>
      </a>
    </div>
  );

  return (
    <>
      {!onlySticky && (
        <a
          href={telLink}
          onClick={() => trackContact('phone', size === 'large' ? 'hero' : 'inline')}
          className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
          aria-label={`Call us now at ${PHONE_NUMBER}`}
        >
          <Phone size={size === 'large' ? 24 : 20} aria-hidden="true" />
          <span>Call Now: {PHONE_NUMBER}</span>
        </a>
      )}

      {sticky && isVisible && <StickyButton />}
    </>
  );
};