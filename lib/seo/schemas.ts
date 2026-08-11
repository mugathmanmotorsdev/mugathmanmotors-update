/**
 * SEO Structured Data Schema Generators
 * Reusable utilities for generating Schema.org JSON-LD markup
 */

export interface OrganizationSchemaData {
  name: string;
  url: string;
  logo: string;
  description: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    postalCode?: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
  sameAs?: string[];
  areaServed?: string | string[];
  priceRange?: string;
  knowsAbout?: string[];
  foundingDate?: string;
}

export interface LocalBusinessSchemaData {
  name: string;
  url: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
    postalCode?: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHoursSpecification: Array<{
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  priceRange: string;
  currenciesAccepted: string;
  paymentAccepted: string;
  areaServed: string;
  image?: string;
  description?: string;
}

export interface WebSiteSchemaData {
  name: string;
  url: string;
  potentialAction?: {
    target: {
      urlTemplate: string;
    };
    "query-input": string;
  };
}

export interface ServiceSchemaData {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  areaServed: string | string[];
  category: string;
  brand?: string[];
  offers?: {
    availability: string;
    priceRange: string;
    currency: string;
  };
  image?: string;
  url?: string;
}

export interface ItemListSchemaData {
  itemListElement: Array<{
    position: number;
    name: string;
    url?: string;
    description?: string;
  }>;
}

export interface BreadcrumbItem {
  position: number;
  name: string;
  url: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Generate Organization Schema
 * Place on homepage only - describes the company entity
 */
export function organizationSchema(data: OrganizationSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    telephone: data.telephone,
    email: data.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      addressCountry: data.address.addressCountry,
      ...(data.address.postalCode && { postalCode: data.address.postalCode }),
    },
    ...(data.geo && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: data.geo.latitude,
        longitude: data.geo.longitude,
      },
    }),
    ...(data.sameAs && { sameAs: data.sameAs }),
    ...(data.areaServed && { areaServed: data.areaServed }),
    ...(data.priceRange && { priceRange: data.priceRange }),
    ...(data.knowsAbout && { knowsAbout: data.knowsAbout }),
    ...(data.foundingDate && { foundingDate: data.foundingDate }),
  };
}

/**
 * Generate LocalBusiness Schema
 * Place in layout.tsx (global) - describes physical location
 */
export function localBusinessSchema(data: LocalBusinessSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: data.name,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      addressCountry: data.address.addressCountry,
      ...(data.address.postalCode && { postalCode: data.address.postalCode }),
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: data.geo.latitude,
      longitude: data.geo.longitude,
    },
    openingHoursSpecification: data.openingHoursSpecification.map((spec) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: Array.isArray(spec.dayOfWeek) ? spec.dayOfWeek : [spec.dayOfWeek],
      opens: spec.opens,
      closes: spec.closes,
    })),
    priceRange: data.priceRange,
    currenciesAccepted: data.currenciesAccepted,
    paymentAccepted: data.paymentAccepted,
    areaServed: data.areaServed,
    ...(data.image && { image: data.image }),
    ...(data.description && { description: data.description }),
  };
}

/**
 * Generate WebSite Schema
 * Place in layout.tsx (global) - describes the website
 */
export function webSiteSchema(data: WebSiteSchemaData) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: data.name,
    url: data.url,
  };

  if (data.potentialAction) {
    schema.potentialAction = {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: data.potentialAction.target.urlTemplate,
      },
      "query-input": data.potentialAction["query-input"],
    };
  }

  return schema;
}

/**
 * Generate Service Schema
 * Place on product/service pages - describes a service offering
 */
export function serviceSchema(data: ServiceSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.name,
    description: data.description,
    provider: {
      "@type": "Organization",
      name: data.provider.name,
      url: data.provider.url,
    },
    areaServed: data.areaServed,
    category: data.category,
    ...(data.brand && { brand: data.brand }),
    ...(data.offers && {
      offers: {
        "@type": "Offer",
        availability: data.offers.availability,
        priceRange: data.offers.priceRange,
        priceCurrency: data.offers.currency,
      },
    }),
    ...(data.image && { image: data.image }),
    ...(data.url && { url: data.url }),
  };
}

/**
 * Generate ItemList Schema
 * Use with Service schema for collections of brands/services
 */
export function itemListSchema(data: ItemListSchemaData) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: data.itemListElement.map((item, index) => ({
      "@type": "ListItem",
      position: item.position ?? index + 1,
      name: item.name,
      ...(item.url && { url: item.url }),
      ...(item.description && { description: item.description }),
    })),
  };
}

/**
 * Generate BreadcrumbList Schema
 * Place on all pages for breadcrumb rich results
 */
export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate FAQPage Schema
 * Place on FAQ/Contact/About pages
 */
export function faqSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Mugathman Motors specific schema data constants
 */
export const MUGATHMAN_ORG_DATA: OrganizationSchemaData = {
  name: "Mugathman Motors",
  url: "https://mugathmanmotors.com",
  logo: "https://mugathmanmotors.com/logo.png",
  description:
    "Leading Nigerian dealer in heavy-duty trucks, tractors, trailers, and genuine spare parts. Serving transportation, construction, agriculture, and energy sectors across Nigeria since 2019.",
  telephone: "+234-814-889-6797",
  email: "info@mugathmanmotors.com",
  address: {
    streetAddress: "Danladi Nasidi Housing Estate, Marri Kumbotso LGA",
    addressLocality: "Kano",
    addressRegion: "Kano",
    addressCountry: "NG",
    postalCode: "700103",
  },
  geo: {
    latitude: 12.0022,
    longitude: 8.592,
  },
  sameAs: [
    "https://www.tiktok.com/@mugathman_motors",
    "https://youtube.com/@mugathmanmotors",
    "https://web.facebook.com/profile.php?id=61583124653834",
  ],
  areaServed: "NG",
  priceRange: "$$$",
  knowsAbout: [
    "Commercial vehicles",
    "Heavy-duty trucks",
    "Fleet solutions",
    "Industrial transport",
    "Logistics equipment",
    "Agricultural machinery",
    "LPG transportation",
    "Construction equipment",
  ],
  foundingDate: "2019",
};

export const MUGATHMAN_LOCAL_BUSINESS_DATA: LocalBusinessSchemaData = {
  name: "Mugathman Motors",
  url: "https://mugathmanmotors.com",
  telephone: "+234-814-889-6797",
  email: "info@mugathmanmotors.com",
  address: {
    streetAddress: "Danladi Nasidi Housing Estate, Marri Kumbotso LGA",
    addressLocality: "Kano",
    addressRegion: "Kano",
    addressCountry: "NG",
    postalCode: "700103",
  },
  geo: {
    latitude: 12.0022,
    longitude: 8.592,
  },
  openingHoursSpecification: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$$",
  currenciesAccepted: "NGN",
  paymentAccepted: "Cash, Bank Transfer, POS",
  areaServed: "NG",
  image: "https://mugathmanmotors.com/hero.png",
  description:
    "Trusted Nigerian dealer in heavy-duty trucks, tractors, trailers, and genuine spare parts. Serving logistics, construction, agriculture, and energy sectors.",
};

export const MUGATHMAN_WEBSITE_DATA: WebSiteSchemaData = {
  name: "Mugathman Motors",
  url: "https://mugathmanmotors.com",
  // potentialAction can be added when search is implemented:
  // potentialAction: {
  //   target: { urlTemplate: "https://mugathmanmotors.com/search?q={search_term_string}" },
  //   "query-input": "required name=search_term_string",
  // },
};

// Product-specific service data
export const PRODUCT_SERVICES = {
  "dump-trucks": {
    name: "Dump Truck Sales & Procurement",
    description:
      "Heavy-duty dump trucks for construction, mining, and aggregate transport. Featuring Sinotruk, Shacman, and FAW brands with nationwide delivery across Nigeria.",
    category: "Commercial Vehicle Sales",
    brand: ["Sinotruk", "Shacman", "FAW"],
    url: "https://mugathmanmotors.com/dump-trucks",
    image: "https://mugathmanmotors.com/dump-truck.jpeg",
  },
  "tractor-heads": {
    name: "Tractor Head / Prime Mover Sales",
    description:
      "Powerful tractor heads for long-haul freight, container transport, and heavy logistics. Sinotruk, Shacman, and FAW prime movers proven across Africa's toughest routes.",
    category: "Commercial Vehicle Sales",
    brand: ["Sinotruk", "Shacman", "FAW"],
    url: "https://mugathmanmotors.com/tractor-heads",
    image: "https://mugathmanmotors.com/tractor-head.png",
  },
  "lpg-tank-trailers": {
    name: "LPG Tank Trailer Sales",
    description:
      "Specialized LPG tank trailers for safe, efficient energy transport. Built to international safety standards for oil & gas, industrial gas, and bulk energy logistics.",
    category: "Industrial Transport Equipment",
    brand: ["Custom Built"],
    url: "https://mugathmanmotors.com/lpg-tank-trailers",
    image: "https://mugathmanmotors.com/lpg-tank.png",
  },
  tractors: {
    name: "Farm Tractor Sales",
    description:
      "Versatile farm tractors for cultivation, planting, harvesting, and material handling. Built for African farming conditions with genuine parts support.",
    category: "Agricultural Machinery",
    brand: ["Massey Ferguson", "New Holland", "Ford"],
    url: "https://mugathmanmotors.com/tractors",
    image: "https://mugathmanmotors.com/tractor-2.png",
  },
  cars: {
    name: "Passenger Vehicle Sales",
    description:
      "Curated selection of sedans, SUVs, and light commercial vehicles. Toyota, Honda, Lexus for corporate fleets, government agencies, and personal use.",
    category: "Passenger Vehicle Sales",
    brand: ["Toyota", "Honda", "Lexus"],
    url: "https://mugathmanmotors.com/cars",
    image: "https://mugathmanmotors.com/car.jpg",
  },
};