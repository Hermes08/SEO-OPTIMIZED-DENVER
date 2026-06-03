'use client';

import React, { useState } from 'react';
import { PHONE_NUMBER } from '@/lib/constants';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');

const SERVICES = [
    { v: 'Electrical', icon: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z" fill="currentColor" /> },
    { v: 'Plumbing', icon: <path d="M12 2s6 6 6 11a6 6 0 0 1-12 0c0-5 6-11 6-11Z" fill="currentColor" /> },
    { v: 'HVAC', icon: <><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" /><path d="M12 2v4m0 12v4M4.9 4.9l2.8 2.8m8.6 8.6 2.8 2.8M2 12h4m12 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></> },
    { v: 'Solar', icon: <><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" /><path d="M12 2v3m0 14v3M4.2 4.2l2.1 2.1m11.4 11.4 2.1 2.1M2 12h3m14 0h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></> },
    { v: 'Roofing', icon: <path d="M3 11 12 4l9 7M5 10v10h14V10" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /> },
    { v: 'Remodel', icon: <path d="m14 6 4 4M3 21l3.5-.7L19 7.8a2 2 0 0 0 0-2.8l-.9-.9a2 2 0 0 0-2.8 0L2.7 16.8 3 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /> },
];

const FwdArrow = () => <svg viewBox="0 0 24 24" width="17" height="17" fill="none"><path d="M5 12h14m-6-6 6 6-6 6" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const BackArrow = () => <svg viewBox="0 0 24 24" fill="none"><path d="M19 12H5m6 6-6-6 6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>;

export const RequestServiceForm = () => {
    const [step, setStep] = useState(0);
    const [done, setDone] = useState(false);
    const [form, setForm] = useState({ service: 'Electrical', urgency: 'Soon — within a few days', first: '', last: '', phone: '', zip: '', details: '', when: 'ASAP', email: '' });
    const [errors, setErrors] = useState<Record<string, boolean>>({});

    const set = (k: string, v: string) => { setForm((f) => ({ ...f, [k]: v })); setErrors((e) => ({ ...e, [k]: false })); };

    const validate = (s: number) => {
        const required = s === 1 ? ['first', 'phone', 'zip'] : [];
        const next: Record<string, boolean> = {};
        required.forEach((k) => { if (!form[k as keyof typeof form].trim()) next[k] = true; });
        setErrors(next);
        return Object.keys(next).length === 0;
    };

    const next = () => { if (validate(step)) setStep((s) => Math.min(s + 1, 2)); };
    const back = () => setStep((s) => Math.max(s - 1, 0));
    const submit = (e: React.FormEvent) => { e.preventDefault(); if (validate(step)) setDone(true); };

    const psteps = ['Service', 'Details', 'Schedule'];

    return (
        <div className="form-card">
            <div className="stripes stripe"></div>

            {!done && (
                <>
                    <div className="form-head"><h2>Request Service</h2><p>Three quick steps. No obligation.</p></div>
                    <div className="prog">
                        {psteps.map((lbl, i) => (
                            <div className={`pstep ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`} key={lbl}>
                                <span className="dot">{i + 1}</span><span className="lbl">{lbl}</span>
                                {i < psteps.length - 1 && <span className="bar" />}
                            </div>
                        ))}
                    </div>

                    <form onSubmit={submit} noValidate>
                        {/* step 1 */}
                        <div className={`fstep ${step === 0 ? 'on' : ''}`}>
                            <div className="fld">
                                <label>What do you need help with? <span className="req">*</span></label>
                                <div className="svc-pick">
                                    {SERVICES.map((s) => (
                                        <label className="svc-opt" key={s.v}>
                                            <input type="radio" name="service" value={s.v} checked={form.service === s.v} onChange={() => set('service', s.v)} />
                                            <span className="box"><svg viewBox="0 0 24 24" fill="none">{s.icon}</svg><span>{s.v}</span></span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                            <div className="fld">
                                <label>How urgent is it?</label>
                                <select name="urgency" value={form.urgency} onChange={(e) => set('urgency', e.target.value)}>
                                    <option>Emergency — need help today</option>
                                    <option>Soon — within a few days</option>
                                    <option>Planning — just getting quotes</option>
                                </select>
                            </div>
                            <div className="fnav"><span></span><button type="button" className="btn btn-copper" onClick={next}>Continue <FwdArrow /></button></div>
                        </div>

                        {/* step 2 */}
                        <div className={`fstep ${step === 1 ? 'on' : ''}`}>
                            <div className="two">
                                <div className="fld"><label>First name <span className="req">*</span></label><input className={errors.first ? 'err' : ''} type="text" value={form.first} onChange={(e) => set('first', e.target.value)} placeholder="Sarah" /></div>
                                <div className="fld"><label>Last name</label><input type="text" value={form.last} onChange={(e) => set('last', e.target.value)} placeholder="Johnson" /></div>
                            </div>
                            <div className="two">
                                <div className="fld"><label>Phone <span className="req">*</span></label><input className={errors.phone ? 'err' : ''} type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} placeholder="(303) 555-0123" /></div>
                                <div className="fld"><label>Zip code <span className="req">*</span></label><input className={errors.zip ? 'err' : ''} type="text" value={form.zip} onChange={(e) => set('zip', e.target.value)} placeholder="80210" /></div>
                            </div>
                            <div className="fld"><label>Tell us about the job</label><textarea value={form.details} onChange={(e) => set('details', e.target.value)} placeholder="e.g. Need a Tesla charger installed in my garage…" /></div>
                            <div className="fnav"><button type="button" className="ghost" onClick={back}><BackArrow /> Back</button><button type="button" className="btn btn-copper" onClick={next}>Continue <FwdArrow /></button></div>
                        </div>

                        {/* step 3 */}
                        <div className={`fstep ${step === 2 ? 'on' : ''}`}>
                            <div className="fld">
                                <label>When works best for a callback?</label>
                                <div className="when">
                                    {[['ASAP', 'As soon as possible', "We'll call within the hour during business hours."], ['Morning', 'Morning', 'Between 7am and noon.'], ['Afternoon', 'Afternoon', 'Between noon and 8pm.']].map(([v, t, s]) => (
                                        <label key={v}><input type="radio" name="when" value={v} checked={form.when === v} onChange={() => set('when', v)} /><div><div className="t">{t}</div><div className="s">{s}</div></div></label>
                                    ))}
                                </div>
                            </div>
                            <div className="fld"><label>Email (optional)</label><input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} placeholder="sarah@email.com" /></div>
                            <div className="fnav"><button type="button" className="ghost" onClick={back}><BackArrow /> Back</button><button type="submit" className="btn btn-copper">Request My Service <svg viewBox="0 0 24 24" width="17" height="17" fill="none"><path d="m5 12 4 4 10-10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" /></svg></button></div>
                        </div>
                    </form>
                </>
            )}

            <div className={`done-box ${done ? 'on' : ''}`}>
                <div className="check"><svg viewBox="0 0 24 24" fill="none"><path d="m5 12 4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
                <h3>Request Received</h3>
                <p>Thanks! A Denver Metro specialist will reach out shortly. For emergencies, call <a href={`tel:${PHONE_TEL}`} style={{ color: 'var(--copper)', fontWeight: 700 }}>{PHONE_NUMBER}</a>.</p>
            </div>
        </div>
    );
};
