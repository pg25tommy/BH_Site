import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
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
  title: "Burger Heaven | Best Burgers in New Westminster, BC",
  description: "Experience the ultimate burger heaven with our signature burgers, including the famous Mile High Challenge. Located in New Westminster, BC.",
  keywords: "burgers, restaurant, New Westminster, BC, Canadian food, mile high burger, specialty burgers",
  openGraph: {
    title: "Burger Heaven | Best Burgers in New Westminster, BC",
    description: "Experience the ultimate burger heaven with our signature burgers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
