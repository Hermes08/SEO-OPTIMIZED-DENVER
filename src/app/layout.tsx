import type { Metadata } from "next";
import { Saira_Condensed, Archivo, JetBrains_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GeoBanner } from "@/components/GeoBanner";
import { LiveActivity } from "@/components/LiveActivity";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { COMPANY_NAME, PHONE_NUMBER, BASE_URL } from "@/lib/constants";
import "./globals.css";

// Mile High type system
const saira = Saira_Condensed({ subsets: ["latin"], weight: ["500", "600", "700", "800", "900"], variable: "--font-saira", display: "swap" });
const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-archivo", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-mono", display: "swap" });

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const defaultTitle = `${COMPANY_NAME} | Professional Home Services`;
const defaultDescription = `Top-rated home services in Denver, Aurora, and Lakewood — electrical, plumbing, HVAC, solar, roofing & remodeling. Call ${PHONE_NUMBER} for 24/7 emergency service.`;

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        template: `%s | ${COMPANY_NAME}`,
        default: defaultTitle,
    },
    description: defaultDescription,
    openGraph: {
        type: 'website',
        siteName: COMPANY_NAME,
        title: defaultTitle,
        description: defaultDescription,
        url: BASE_URL,
        images: [{ url: '/images/general-hero.jpg', width: 1200, height: 630, alt: COMPANY_NAME }],
    },
    twitter: {
        card: 'summary_large_image',
        title: defaultTitle,
        description: defaultDescription,
        images: ['/images/general-hero.jpg'],
    },
    robots: { index: true, follow: true },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${saira.variable} ${archivo.variable} ${mono.variable}`}>
            <body className="antialiased flex flex-col min-h-screen">
                <SchemaMarkup type="Organization" data={{}} />
                {/* Skip to Main Content Link */}
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-[var(--copper)] focus:text-white focus:font-bold focus:rounded focus:shadow-xl transition-all"
                >
                    Skip to main content
                </a>

                <Header />

                {/* Geolocation greeting (client-side IP detection; honest framing) */}
                <GeoBanner />

                {/* Main Content */}
                <main id="main-content" className="flex-grow">
                    {children}
                </main>

                <Footer />

                {/* Sticky call button + live social-proof notifications + scroll/count-up observers */}
                <LiveActivity />

                {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
            </body>
        </html>
    );
}
