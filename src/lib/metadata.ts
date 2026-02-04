/**
 * Shared metadata configuration for SEO
 */

export const siteConfig = {
  name: 'Burger Heaven',
  description: 'Premium burgers, signature creations, and the famous Mile High Challenge in New Westminster, BC. Order online via Skip the Dishes.',
  url: 'https://burgerheaven.ca', // Update with your actual domain
  ogImage: '/images/og-image.jpg',
  phone: '604.522.8339',
  email: 'tommy@knocktwice.ca',
  address: {
    street: '77 10th St',
    city: 'New Westminster',
    province: 'BC',
    postalCode: 'V3M 3X4',
    country: 'Canada',
  },
  hours: {
    weekday: '11:00 AM - 9:00 PM',
    weekend: '11:00 AM - 10:00 PM',
  },
  social: {
    instagram: 'https://instagram.com/burgerheavennewwest',
    facebook: 'https://facebook.com/burgerheaven',
  },
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'burgers',
    'burger restaurant',
    'New Westminster',
    'BC burgers',
    'Mile High Challenge',
    'premium burgers',
    'burger heaven',
    'best burgers new westminster',
    'skip the dishes',
    'online ordering',
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/**
 * Generate structured data for local business
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    '@id': siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 49.2066,
      longitude: -122.9109,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '11:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Friday', 'Saturday'],
        opens: '11:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '11:00',
        closes: '21:00',
      },
    ],
    servesCuisine: ['American', 'Burgers', 'Fast Food'],
    acceptsReservations: 'False',
    menu: `${siteConfig.url}/menu`,
  };
}
