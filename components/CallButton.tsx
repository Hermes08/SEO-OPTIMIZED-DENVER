
import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { PHONE_NUMBER } from '../constants';

interface CallButtonProps {
  size?: 'default' | 'large';
  variant?: 'primary' | 'white';
  sticky?: boolean;
}

export const CallButton: React.FC<CallButtonProps> = ({ 
  size = 'default', 
  variant = 'primary', 
  sticky = true 
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
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    white: "bg-white hover:bg-gray-100 text-orange-600"
  };

  const StickyButton = () => (
    <a
      href={telLink}
      className="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white px-6 py-4 rounded-full shadow-2xl flex items-center gap-2 font-bold animate-pulse hover:animate-none transition-all"
      aria-label={`Call us now at ${PHONE_NUMBER}`}
    >
      <Phone size={24} aria-hidden="true" />
      <span className="hidden md:inline">Call Now</span>
    </a>
  );

  return (
    <>
      <a 
        href={telLink} 
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
        aria-label={`Call us now at ${PHONE_NUMBER}`}
      >
        <Phone size={size === 'large' ? 24 : 20} aria-hidden="true" />
        <span>Call Now: {PHONE_NUMBER}</span>
      </a>

      {sticky && isVisible && <StickyButton />}
    </>
  );
};