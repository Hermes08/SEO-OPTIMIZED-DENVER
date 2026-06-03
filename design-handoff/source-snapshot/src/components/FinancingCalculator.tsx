
'use client';

import React, { useState } from 'react';

export const FinancingCalculator = () => {
    const [amount, setAmount] = useState<number>(5000);
    const [months, setMonths] = useState<number>(24);

    // Simple mock calculation: 10% APR assumption
    const calculatePayment = () => {
        const rate = 0.10 / 12;
        const payment = (amount * rate) / (1 - Math.pow(1 + rate, -months));
        return payment.toFixed(2);
    };

    return (
        <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
            <div className="space-y-6">
                <div>
                    <label htmlFor="project-amount" className="block text-white font-bold mb-2">Project Amount: ${amount.toLocaleString()}</label>
                    <input
                        id="project-amount"
                        type="range"
                        min="500"
                        max="20000"
                        step="100"
                        value={amount}
                        onChange={(e) => setAmount(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        aria-label="Project Amount Slider"
                    />
                </div>
                <div>
                    <label htmlFor="payment-term" className="block text-white font-bold mb-2">Payment Term: {months} Months</label>
                    <select
                        id="payment-term"
                        value={months}
                        onChange={(e) => setMonths(Number(e.target.value))}
                        className="w-full bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-orange-500 outline-none"
                    >
                        <option value="12">12 Months</option>
                        <option value="24">24 Months</option>
                        <option value="36">36 Months</option>
                        <option value="48">48 Months</option>
                        <option value="60">60 Months</option>
                    </select>
                </div>
                <div className="bg-orange-500/20 p-6 rounded-lg text-center border border-orange-500/30" aria-live="polite">
                    <p className="text-orange-200 mb-2">Estimated Monthly Payment</p>
                    <p className="text-4xl font-bold text-orange-400">${calculatePayment()}/mo</p>
                </div>
                <p className="text-sm text-gray-500 text-center">*Estimate only. Actual rates may vary based on credit approval.</p>
            </div>
        </div>
    );
};
