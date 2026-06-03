'use client';

import React, { useEffect, useState } from 'react';
import { STATE_MAIN_CITY, SERVED_METRO_CITIES } from '@/lib/usStateCities';

const DEFAULT_MSG = 'Proudly serving the Denver, CO metro — your local multi-trade crew.';

/**
 * Geolocation greeting banner. Static export has no server runtime, so we detect
 * the visitor's US state client-side via a free IP-geo API and greet them with
 * that state's MAIN CITY. Honest framing: we name the city but never claim to
 * service it — Denver Metro Services serves the Denver, CO metro. SEO-critical
 * H1/title/schema stay "Denver" (swapping them client-side has no SEO value).
 */
export const GeoBanner = () => {
    const [msg, setMsg] = useState(DEFAULT_MSG);
    const [closed, setClosed] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (sessionStorage.getItem('geobar_closed') === '1') { setClosed(true); return; }

        const apply = (state?: string, city?: string, country?: string) => {
            if (country && country !== 'US') return; // keep default for non-US
            if (!state) return;
            const st = state.toUpperCase();
            if (st === 'CO') {
                const local = city && SERVED_METRO_CITIES.includes(city) ? city : 'the Denver Metro';
                setMsg(`Proudly serving ${local} — your local multi-trade crew.`);
                return;
            }
            const main = STATE_MAIN_CITY[st];
            if (main) {
                // Names the visitor's state main city (greeting/personalization) without claiming service.
                setMsg(`Hello from ${main.city}, ${st}! · Denver Metro Services is Colorado's Front Range home-services crew.`);
            }
        };

        let done = false;
        const fromIpwho = async () => {
            const r = await fetch('https://ipwho.is/?fields=success,city,region_code,country_code');
            const d = await r.json();
            if (d && d.success) { apply(d.region_code, d.city, d.country_code); done = true; }
        };
        const fromIpapi = async () => {
            const r = await fetch('https://ipapi.co/json/');
            const d = await r.json();
            if (d && d.region_code) apply(d.region_code, d.city, d.country_code || d.country);
        };

        fromIpwho().catch(() => { }).then(() => { if (!done) return fromIpapi().catch(() => { }); });
    }, []);

    if (closed) return null;

    return (
        <div className="geobar" role="region" aria-label="Location greeting">
            <span className="geobar-in">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="2" /></svg>
                <span>{msg}</span>
            </span>
            <button className="geobar-x" aria-label="Dismiss" onClick={() => { setClosed(true); try { sessionStorage.setItem('geobar_closed', '1'); } catch { } }}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" /></svg>
            </button>
        </div>
    );
};
