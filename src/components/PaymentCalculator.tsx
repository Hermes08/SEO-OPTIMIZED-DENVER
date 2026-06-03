'use client';

import React, { useState } from 'react';
import { PHONE_NUMBER } from '@/lib/constants';

const PHONE_TEL = PHONE_NUMBER.replace(/\D/g, '');
const TERMS = [12, 24, 36, 60];

/** Standard amortization: m = P*r/(1-(1+r)^-n); r=0 falls back to P/n. */
function monthly(P: number, aprPct: number, n: number): number {
    const r = aprPct / 100 / 12;
    return r === 0 ? P / n : (P * r) / (1 - Math.pow(1 + r, -n));
}

export const PaymentCalculator = () => {
    const [amount, setAmount] = useState(8000);
    const [apr, setApr] = useState(9.9);
    const [term, setTerm] = useState(36);

    const m = Math.round(monthly(amount, apr, term));

    return (
        <div className="calc-grid">
            <div className="calc-l">
                <h3>Your Project</h3>
                <p className="hint">A ballpark estimate — no credit check, no commitment.</p>

                <div className="crow">
                    <div className="top"><label htmlFor="amt">Project Amount</label><span className="val">${amount.toLocaleString()}</span></div>
                    <input id="amt" type="range" min={1000} max={40000} step={500} value={amount} onChange={(e) => setAmount(+e.target.value)} />
                </div>

                <div className="crow">
                    <div className="top"><label>Term Length</label><span className="val">{term} mo</span></div>
                    <div className="terms">
                        {TERMS.map((t) => (
                            <button type="button" key={t} className={term === t ? 'on' : ''} onClick={() => setTerm(t)}>{t} mo</button>
                        ))}
                    </div>
                </div>

                <div className="crow">
                    <div className="top"><label htmlFor="apr">Estimated APR</label><span className="val">{apr.toFixed(1)}%</span></div>
                    <input id="apr" type="range" min={0} max={20} step={0.9} value={apr} onChange={(e) => setApr(+e.target.value)} />
                </div>
            </div>

            <div className="calc-r">
                <div className="k">Estimated Monthly Payment</div>
                <div className="big"><small>$</small>{m.toLocaleString()}</div>
                <div className="per">per month · {term} months</div>
                <div className="terms-note">Estimate only · Subject to approved credit<br />0% APR same-as-cash plans available</div>
                <a href={`tel:${PHONE_TEL}`} className="btn btn-copper">Apply Now</a>
            </div>
        </div>
    );
};
