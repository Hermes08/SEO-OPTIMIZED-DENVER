
import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { COMPANY_NAME, PHONE_NUMBER } from "@/lib/constants";
import { MapPin, Clock } from "lucide-react";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : new URL('https://www.seo-optimized-denver.com');

export const metadata: Metadata = {
    metadataBase: baseUrl,
    title: {
        template: `%s | ${COMPANY_NAME}`,
        default: `${COMPANY_NAME} | Professional Home Services`,
    },
    description: `Top-rated services in Denver, Aurora, and Lakewood. Call ${PHONE_NUMBER} for 24/7 emergency service.`,
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
                {/* Skip to Main Content Link */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-orange-500 focus:text-white focus:font-bold focus:rounded-lg focus:shadow-xl transition-all"
                >
                    Skip to main content
                </a>

                {/* Top Bar - Injected here as it was part of Layout.tsx */}
                <div className="bg-gray-950 py-2 text-xs md:text-sm text-gray-400 border-b border-gray-800" role="region" aria-label="Contact Information">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <div className="flex gap-4">
                            <span className="flex items-center gap-1">
                                <MapPin size={12} className="text-orange-500" aria-hidden="true" />
                                <span>Serving {COMPANY_NAME} Region</span>
                            </span>
                            <span className="hidden md:flex items-center gap-1">
                                <Clock size={12} className="text-orange-500" aria-hidden="true" />
                                <span>24/7 Emergency Service</span>
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
                <GoogleAnalytics gaId="G-XXXXXXXXXX" />
            </body>
        </html>
    );
}
