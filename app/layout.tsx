import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import StikyWhatsAppButton from "@/components/StikyWhatsappButton";
import MetaPixel from "@/components/analytics/MetaPixel";
import PageViewTracker from "@/components/analytics/PageViewTracker";
import SourceTracker from "@/components/analytics/SourceTracker";
import { webSiteSchema, localBusinessSchema, MUGATHMAN_WEBSITE_DATA, MUGATHMAN_LOCAL_BUSINESS_DATA } from "@/lib/seo/schemas";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Mugathman Motors",
  description: "Mugathman motors offered a wide range of vehicles including trucks, cars, farm tractors and quality spare parts to meet all your logistics and transportation needs.",
  openGraph: {
    title: "Mugathman Motors - Home",
    description: "Mugathman motors offered a wide range of vehicles including trucks, cars, farm tractors and quality spare parts to meet all your logistics and transportation needs.",
    url: "https://mugathmanmotors.com/",
    siteName: "Mugathman Motors",
    images: [
      {
        url: "/hero.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
    icons: {
      icon: "/favicon.ico"
    }
  }
};


export default function RootLayout({ children }) {
  return(
    <html lang="en" className="scroll-smooth">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MetaPixel />
        <PageViewTracker />
        <SourceTracker />
        {/* Global Structured Data */}
        <JsonLd data={webSiteSchema(MUGATHMAN_WEBSITE_DATA)} />
        <JsonLd data={localBusinessSchema(MUGATHMAN_LOCAL_BUSINESS_DATA)} />
        <Header />
        <StikyWhatsAppButton />
        {children}
      </body>
    </html>
  );
}
