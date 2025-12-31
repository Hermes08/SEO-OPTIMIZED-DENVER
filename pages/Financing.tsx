
import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CallButton } from '../components/CallButton';
import { SchemaMarkup } from '../components/SchemaMarkup';
import { SEO } from '../components/SEO';
import { CheckCircle } from 'lucide-react';
import { FINANCING_PARTNERS, FINANCING_PLANS, FINANCING_ELIGIBILITY, FINANCING_FAQS, TESTIMONIALS } from '../constants';

export const Financing = () => {
  const [amount, setAmount] = useState<number>(5000);
  const [months, setMonths] = useState<number>(24);

  // Simple mock calculation: 10% APR assumption
  const calculatePayment = () => {
    const rate = 0.10 / 12;
    const payment = (amount * rate) / (1 - Math.pow(1 + rate, -months));
    return payment.toFixed(2);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <SEO 
        title="Financing Options" 
        description="Affordable payment plans for your home improvement projects. Apply online and get approved in minutes with our trusted partners."
      />
      <SchemaMarkup type="FAQPage" data={{ faqs: FINANCING_FAQS }} />
      
      <div className="container mx-auto px-4 py-8">
         <Breadcrumbs items={[{ name: 'Financing', url: '/financing' }]} />
      </div>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Flexible Financing Options</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Make your project affordable with our easy payment plans. Apply online and get approved in minutes.</p>
            <CallButton size="large" />
        </div>
      </section>

      {/* Partners */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
            <p className="text-center text-gray-400 mb-8 uppercase tracking-widest text-sm font-bold">Trusted Financing Partners</p>
            <div className="flex justify-center gap-12 flex-wrap items-center">
                {FINANCING_PARTNERS.map(partner => (
                    <img 
                        key={partner.id} 
                        src={partner.logo} 
                        alt={`${partner.name} financing partner`} 
                        className="opacity-60 hover:opacity-100 transition-opacity h-12 object-contain filter grayscale hover:grayscale-0" 
                    />
                ))}
            </div>
        </div>
      </section>

      {/* Financing Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Payment Plan</h2>
            <div className="grid md:grid-cols-3 gap-8">
                {FINANCING_PLANS.map(plan => (
                    <div key={plan.id} className="bg-gray-800 p-8 rounded-xl border-2 border-transparent hover:border-orange-500 transition-all duration-300">
                        <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                        <div className="text-4xl font-bold text-orange-500 mb-6">{plan.apr}% APR</div>
                        <ul className="space-y-3 mb-8">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-start gap-2 text-gray-300">
                                    <CheckCircle size={18} className="text-green-500 shrink-0 mt-1" aria-hidden="true" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <CallButton sticky={false} />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Estimate Your Monthly Payment</h2>
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
                        <p className="text-4xl font-bold text-orange-500">${calculatePayment()}/mo</p>
                    </div>
                    <p className="text-sm text-gray-500 text-center">*Estimate only. Actual rates may vary based on credit approval.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Am I Eligible?</h2>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-800 p-8 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6">Requirements</h3>
                    <ul className="space-y-4">
                        {FINANCING_ELIGIBILITY.requirements.map((req, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <span className="w-2 h-2 bg-orange-500 rounded-full" aria-hidden="true"></span>
                                {req}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gray-800 p-8 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-6">Good News</h3>
                    <ul className="space-y-4">
                        {FINANCING_ELIGIBILITY.goodNews.map((news, i) => (
                            <li key={i} className="flex items-center gap-3 text-gray-300">
                                <CheckCircle size={20} className="text-green-500" aria-hidden="true" />
                                {news}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold text-white mb-12">Financing FAQs</h2>
            <div className="space-y-4">
                {FINANCING_FAQS.map((faq, index) => (
                    <details key={index} className="bg-gray-900 rounded-lg p-6 group">
                        <summary className="text-lg font-bold text-white cursor-pointer list-none flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded">
                            {faq.question}
                            <span className="text-orange-500 group-open:rotate-180 transition-transform" aria-hidden="true">▼</span>
                        </summary>
                        <p className="text-gray-400 mt-4">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Success Stories</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {TESTIMONIALS.map(t => (
                    <div key={t.id} className="bg-gray-800 p-6 rounded-lg">
                        <p className="text-gray-300 mb-4 italic">"{t.text}"</p>
                        <p className="text-white font-bold">{t.name}</p>
                        <p className="text-sm text-gray-400">Financed: {t.project}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-500">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-white/90 mb-8">Call us to discuss financing options and get started today.</p>
            <CallButton size="large" variant="white" sticky={false} />
        </div>
      </section>
    </div>
  );
};