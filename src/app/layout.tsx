import type { Metadata } from "next";
import { Suspense } from 'react';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CallButton } from "@/components/CallButton";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { COMPANY_NAME, PHONE_NUMBER } from "@/lib/constants";
import { MapPin, Clock } from "lucide-react";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : new URL('https://hermes08.github.io/SEO-OPTIMIZED-DENVER');

export const metadata: Metadata = {
    metadataBase: baseUrl,
    title: {
        template: `%s | ${COMPANY_NAME}`,
        default: `${COMPANY_NAME} | Professional Services in Denver, CO`,
    },
    description: `Top-rated home services in Denver — electrical, EV charger installation, plumbing, HVAC, solar, roofing, and general contracting. Licensed & insured. Call ${PHONE_NUMBER}.`,
    alternates: {
        canonical: './',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased flex flex-col min-h-screen bg-gray-900 text-gray-100">
                <SchemaMarkup type="Organization" data={{}} />
                {/* Skip to Main Content Link */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-orange-500 focus:text-white focus:font-bold focus:rounded-lg focus:shadow-xl transition-all"
                >
                    Skip to main content
                </a>

                {/* Top Bar */}
                <div className="bg-gray-950 py-2 text-xs md:text-sm text-gray-400 border-b border-gray-800" role="region" aria-label="Contact Information">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <div className="flex gap-4">
                            <span className="flex items-center gap-1">
                                <MapPin size={12} className="text-orange-500" aria-hidden="true" />
                                <span>Serving Denver Metro Area</span>
                            </span>
                            <span className="hidden md:flex items-center gap-1">
                                <Clock size={12} className="text-orange-500" aria-hidden="true" />
                                <span>Mon–Sat 7am–8pm · Emergency 24/7</span>
                            </span>
                        </div>
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="font-bold text-orange-500 hover:text-white transition-colors"
                            aria-label={`Call us at ${PHONE_NUMBER}`}
                        >
                            {PHONE_NUMBER}
                        </a>
                    </div>
                </div>

                <Header />

                {/* Main Content */}
                <main id="main-content" className="flex-grow">
                    {children}
                </main>

                <Footer />
                <CallButton sticky={true} onlySticky={true} />
                <Suspense fallback={null}>
                    <GoogleAnalytics gaId="G-XXXXXXXXXX" />
                </Suspense>
            </body>
        </html>
    );
}
