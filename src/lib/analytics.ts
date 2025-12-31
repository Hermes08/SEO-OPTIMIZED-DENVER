import { sendGAEvent } from '@next/third-parties/google';

type ContactMethod = 'phone' | 'email';
type ContactLocation = 'header' | 'hero' | 'sticky_bar' | 'footer' | 'inline' | 'cta_section';

export const trackContact = (method: ContactMethod, location: ContactLocation, value?: string) => {
    // Fire the GA4 event
    sendGAEvent('event', 'contact_method_selected', {
        method: method,
        location: location,
        value: value || 'unknown' // e.g., the phone number dialed
    });

    // Optional: Console log for local dev debugging (only in development)
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics] Tracked contact: ${method} from ${location}`);
    }
};
