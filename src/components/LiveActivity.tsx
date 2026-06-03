'use client';

import React, { useEffect, useRef } from 'react';
import { PHONE_NUMBER } from '@/lib/constants';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');

/**
 * Mile High site chrome:
 *  - sticky "Call" button (reveals after the hero)
 *  - live social-proof notification feed + gamified "jobs today" counter
 *  - site-wide count-up ([data-count]) and scroll-reveal (.reveal) observers
 * All animations respect prefers-reduced-motion. Base state is always visible.
 */
export const LiveActivity = () => {
    const stackRef = useRef<HTMLDivElement>(null);
    const stickyRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const cleanups: Array<() => void> = [];

        /* ---- count-up stats ---- */
        const animateCount = (el: HTMLElement) => {
            const target = parseFloat(el.dataset.count || '0');
            const decimals = parseInt(el.dataset.decimals || '0');
            const suffix = el.dataset.suffix || '';
            const dur = 1600;
            const start = performance.now();
            const tick = (now: number) => {
                const p = Math.min((now - start) / dur, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                const val = target * eased;
                el.textContent = (decimals ? val.toFixed(decimals) : Math.round(val).toLocaleString()) + suffix;
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };
        const cio = new IntersectionObserver((es) => {
            es.forEach((e) => { if (e.isIntersecting) { animateCount(e.target as HTMLElement); cio.unobserve(e.target); } });
        }, { threshold: 0.4 });
        document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => cio.observe(el));
        const countFallback = setTimeout(() => {
            document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => { if (el.textContent === '0') animateCount(el); });
        }, 1200);
        cleanups.push(() => { cio.disconnect(); clearTimeout(countFallback); });

        /* ---- scroll reveal ---- */
        const rio = new IntersectionObserver((es) => {
            es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); rio.unobserve(e.target); } });
        }, { threshold: 0.18 });
        document.querySelectorAll('.reveal').forEach((el) => rio.observe(el));
        const revealFallback = setTimeout(() => {
            document.querySelectorAll('.reveal:not(.in)').forEach((el) => el.classList.add('in'));
        }, 2200);
        cleanups.push(() => { rio.disconnect(); clearTimeout(revealFallback); });

        /* ---- sticky call after hero ---- */
        const sc = stickyRef.current;
        const onScroll = () => { if (!sc) return; if (window.scrollY > 640) sc.classList.add('show'); else sc.classList.remove('show'); };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        cleanups.push(() => window.removeEventListener('scroll', onScroll));

        /* ---- live social-proof notifications ---- */
        const stack = stackRef.current;
        if (stack) {
            const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            const ICON: Record<string, string> = {
                electrical: '<path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" fill="currentColor"/>',
                plumbing: '<path d="M12 2s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11Z" fill="currentColor"/>',
                hvac: '<circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2"/><path d="M12 2v4m0 12v4M4.9 4.9l2.8 2.8m8.6 8.6 2.8 2.8M2 12h4m12 0h4M4.9 19.1l2.8-2.8m8.6-8.6 2.8-2.8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
                solar: '<circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M12 2v3m0 14v3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M2 12h3m14 0h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
                roofing: '<path d="M3 11 12 4l9 7M5 10v10h14V10" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
                general: '<path d="m14 6 4 4M3 21l3.5-.7L19 7.8a2 2 0 0 0 0-2.8l-.9-.9a2 2 0 0 0-2.8 0L2.7 16.8 3 21Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>',
            };
            const NAMES = ['Sarah J.', 'Michael C.', 'Jessica W.', 'David R.', 'Emily T.', 'Carlos M.', 'Linda H.', 'James P.', 'Ana G.', 'Robert K.', 'Nicole B.', 'Tyler S.', 'Maria L.', 'Kevin O.', 'Rachel D.'];
            const CITIES = ['Denver', 'Aurora', 'Lakewood', 'Centennial', 'Arvada', 'Thornton', 'Brighton', 'Highlands Ranch', 'Littleton', 'Westminster'];
            const EVENTS = [
                { t: 'electrical', booked: 'requested an <b>electrical panel upgrade</b>', done: 'had a <b>200A panel upgrade</b> completed' },
                { t: 'electrical', booked: 'booked an <b>EV charger installation</b>', done: 'got a <b>Level 2 EV charger</b> installed' },
                { t: 'plumbing', booked: 'called about a <b>burst pipe repair</b>', done: 'had a <b>water heater replaced</b>' },
                { t: 'plumbing', booked: 'scheduled <b>drain cleaning</b>', done: 'got a <b>frozen pipe</b> thawed &amp; repaired' },
                { t: 'hvac', booked: 'requested <b>emergency furnace repair</b>', done: 'had a new <b>AC system installed</b>' },
                { t: 'hvac', booked: 'booked a <b>furnace tune-up</b>', done: 'got their <b>furnace repaired</b> same-day' },
                { t: 'solar', booked: 'requested a <b>solar quote</b>', done: 'went live with <b>rooftop solar</b>' },
                { t: 'roofing', booked: 'asked for a <b>hail damage inspection</b>', done: 'had their <b>roof replaced</b> after hail' },
                { t: 'roofing', booked: 'scheduled a <b>roof repair</b>', done: 'got a <b>leaky roof</b> sealed' },
                { t: 'general', booked: 'requested a <b>kitchen remodel</b> quote', done: 'finished a <b>bathroom remodel</b>' },
                { t: 'general', booked: 'booked a <b>basement finishing</b> consult', done: 'completed a <b>full kitchen remodel</b>' },
            ];
            const AGO = ['Just now', '2 min ago', '4 min ago', '7 min ago', '11 min ago', '18 min ago', '24 min ago', 'this morning', 'an hour ago', 'yesterday'];
            const pick = <T,>(a: T[]): T => a[Math.floor(Math.random() * a.length)];

            let jobsToday = 18 + Math.floor(Math.random() * 9);
            const live = document.createElement('div');
            live.className = 'lp-live';
            live.setAttribute('role', 'status');
            live.innerHTML = '<span class="pulse"></span><span class="txt">Live · <b>' + jobsToday + '</b> jobs booked today</span><span class="chev"><svg viewBox="0 0 24 24" fill="none"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
            stack.appendChild(live);
            const liveB = live.querySelector('b')!;

            let paused = false;
            let timer: ReturnType<typeof setTimeout> | null = null;

            live.addEventListener('click', () => {
                paused = !paused;
                live.classList.toggle('paused', paused);
                live.querySelector('.txt')!.innerHTML = paused ? 'Paused · tap to resume' : 'Live · <b>' + jobsToday + '</b> jobs booked today';
                if (!paused) schedule(1500);
            });

            const dismiss = (el: HTMLElement) => {
                if (!el || el.classList.contains('out')) return;
                if (reduce) { el.remove(); return; }
                el.classList.add('out');
                setTimeout(() => el.remove(), 380);
            };

            const build = () => {
                const ev = pick(EVENTS);
                const isDone = Math.random() > 0.5;
                const name = pick(NAMES), city = pick(CITIES), ago = isDone ? pick(AGO) : 'Just now';
                const el = document.createElement('div');
                el.className = 'lp';
                const dur = 6;
                el.style.setProperty('--lp-dur', dur + 's');
                el.innerHTML =
                    '<span class="ic"><svg viewBox="0 0 24 24" fill="none">' + ICON[ev.t] + '</svg>' +
                    (isDone ? '<span class="badge"><svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' : '') +
                    '</span>' +
                    '<div class="body">' +
                    '<div class="who">' + name + '</div>' +
                    '<div class="act">' + (isDone ? ev.done : ev.booked) + '</div>' +
                    '<div class="meta">' +
                    '<span class="loc"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><circle cx="12" cy="10" r="2.4" stroke="currentColor" stroke-width="2"/></svg>' + city + ', CO</span>' +
                    '<span>· ' + ago + '</span>' +
                    (isDone ? '<span class="vf"><svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4 10-10" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>Verified</span>' : '') +
                    '</div>' +
                    '</div>' +
                    '<button class="x" aria-label="Dismiss"><svg viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg></button>';

                stack.insertBefore(el, live.nextSibling);
                const toasts = stack.querySelectorAll('.lp');
                if (toasts.length > 2) dismiss(toasts[0] as HTMLElement);

                if (!isDone) { jobsToday++; if (!paused) liveB.textContent = String(jobsToday); }

                let life = setTimeout(() => dismiss(el), dur * 1000);
                el.querySelector('.x')!.addEventListener('click', () => { clearTimeout(life); dismiss(el); });
                el.addEventListener('mouseenter', () => { clearTimeout(life); el.style.animationPlayState = 'paused'; el.style.setProperty('--lp-dur', '9999s'); });
                el.addEventListener('mouseleave', () => { life = setTimeout(() => dismiss(el), 2500); });
            };

            const schedule = (delay: number) => {
                if (timer) clearTimeout(timer);
                timer = setTimeout(() => {
                    if (!paused && !document.hidden) build();
                    schedule(6500 + Math.random() * 4000);
                }, delay);
            };
            schedule(3200);

            cleanups.push(() => {
                if (timer) clearTimeout(timer);
                stack.querySelectorAll('.lp, .lp-live').forEach((n) => n.remove());
            });
        }

        return () => cleanups.forEach((fn) => fn());
    }, []);

    return (
        <>
            <div className="lp-stack" id="lpStack" ref={stackRef} aria-live="polite" aria-label="Recent service activity" />
            <a href={`tel:${PHONE_TEL}`} className="stickycall" id="stickycall" ref={stickyRef} aria-label={`Call ${PHONE_NUMBER}`}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" fill="#fff" /></svg>
                Call {PHONE_NUMBER}
            </a>
        </>
    );
};
