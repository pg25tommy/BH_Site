import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Burger Heaven | Best Local Burgers in New Westminster, BC | Canadian Restaurant",
  description: "Experience authentic Canadian burgers at Burger Heaven - a locally owned New Westminster restaurant serving premium, locally-sourced burgers since 1985. Support local, taste the difference. Famous Mile High Challenge.",
  keywords: "local burgers New Westminster, Canadian restaurant BC, buy local food, locally owned restaurant, New Westminster burgers, BC burger joint, Canadian beef burgers, local business New Westminster, support local restaurants, authentic Canadian food, best burgers BC, family owned restaurant, local ingredients, buy Canadian, New West dining, Lower Mainland burgers, mile high burger challenge, specialty burgers BC",
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: "Burger Heaven | Best Local Burgers in New Westminster, BC",
    description: "Locally owned Canadian restaurant serving premium burgers in New Westminster since 1985. Support local, taste authentic Canadian food.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Burger Heaven",
    "description": "Locally owned Canadian restaurant serving premium, authentic burgers in New Westminster since 1985. Supporting local communities with quality Canadian ingredients.",
    "image": "https://burgerheavennw.ca/images/atmosphere/Outside_Hero.jpg",
    "servesCuisine": "Canadian, American, Burgers",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "77 10th St",
      "addressLocality": "New Westminster",
      "addressRegion": "BC",
      "postalCode": "V3M 3X4",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 49.2047,
      "longitude": -122.9128
    },
    "telephone": "+1-604-522-8339",
    "email": "burgerheaven@shaw.ca",
    "url": "https://burgerheavennw.ca",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "11:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "11:00",
        "closes": "22:00"
      }
    ],
    "sameAs": [
      "https://www.instagram.com/burgerheavennewwest/",
      "https://www.tiktok.com/@burgerheavennewwe"
    ],
    "foundingDate": "1985",
    "founder": {
      "@type": "Person",
      "name": "Bill Mural"
    },
    "keywords": "local burgers, Canadian restaurant, New Westminster burgers, locally owned, buy local, Canadian beef, family restaurant, burger restaurant BC, support local business"
  };

  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          strategy="beforeInteractive"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
