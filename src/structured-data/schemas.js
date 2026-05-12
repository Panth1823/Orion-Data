// ============================================
// JSON-LD SCHEMA TEMPLATES for ORION DATA
// Replace placeholder values with actual data
// ============================================

const BASE_URL = "https://www.orion-data.com";
const COMPANY_NAME = "Orion Data";
const LOGO_URL = `${BASE_URL}/Frame.svg`;

// ============================================
// 1. ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  alternateName: "Orion Data Platform",
  url: BASE_URL,
  logo: LOGO_URL,
  description:
    "Orion Data delivers intelligent data solutions and AI-powered analytics platforms for enterprises seeking to transform their data into actionable insights.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    addressLocality: "City",
    addressRegion: "State",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "contact@orion-data.com",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/orion-data",
    "https://twitter.com/oriondata",
    "https://github.com/orion-data",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Data Analytics",
    "Machine Learning",
    "Enterprise Data Platforms",
    "Cloud Data Solutions",
  ],
};

// ============================================
// 2. LOCAL BUSINESS SCHEMA
// ============================================
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  description:
    "Enterprise AI and data analytics platform provider helping organizations unlock the power of their data.",
  url: BASE_URL,
  email: "contact@orion-data.com",
  image: `${BASE_URL}/og-image.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "City",
    addressRegion: "State",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$$",
};

// ============================================
// 3. SERVICE SCHEMA - AI Solutions
// ============================================
export const aiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Solutions",
  provider: {
    "@type": "Organization",
    name: COMPANY_NAME,
  },
  description:
    "Advanced AI and machine learning solutions for enterprise data transformation and intelligent automation.",
  url: `${BASE_URL}/ai`,
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Machine Learning Models",
          description: "Custom ML model development and deployment",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Predictive Analytics",
          description: "Data-driven forecasting and trend analysis",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Natural Language Processing",
          description: "Text analysis and language understanding solutions",
        },
      },
    ],
  },
  serviceType: "Artificial Intelligence",
};

// ============================================
// 4. SERVICE SCHEMA - Platform
// ============================================
export const platformServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data Platform",
  provider: {
    "@type": "Organization",
    name: COMPANY_NAME,
  },
  description:
    "Unified data platform for ingestion, processing, and analytics with real-time capabilities.",
  url: `${BASE_URL}/platform`,
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Platform Features",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Stack",
          description: "Comprehensive data infrastructure and tooling",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Fabric",
          description: "Unified data architecture across systems",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Platform Benefits",
          description: "Scalable, secure, and performant data solutions",
        },
      },
    ],
  },
  serviceType: "Data Platform",
};

// ============================================
// 5. SERVICE SCHEMA - Industries
// ============================================
export const industriesServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Industry Solutions",
  provider: {
    "@type": "Organization",
    name: COMPANY_NAME,
  },
  description:
    "Tailored data and AI solutions for specific industry verticals and use cases.",
  url: `${BASE_URL}/industries`,
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Industry Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Transformation",
          description: "End-to-end digital transformation services",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Industry Serving",
          description: "Solutions for finance, healthcare, retail, and more",
        },
      },
    ],
  },
  serviceType: "Industry Solutions",
};

// ============================================
// 6. FAQ PAGE SCHEMA
// ============================================
export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Orion Data provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Orion Data provides enterprise AI solutions, data platform services, and industry-specific analytics. Our offerings include machine learning models, predictive analytics, data infrastructure, and digital transformation consulting.",
      },
    },
    {
      "@type": "Question",
      name: "How does the Orion Data Platform work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our platform provides a unified data fabric that connects disparate data sources, processes data in real-time, and delivers AI-powered insights through an intuitive interface. It scales automatically to handle enterprise workloads.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does Orion Data serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve multiple industries including finance, healthcare, retail, manufacturing, and technology. Our solutions are tailored to meet the specific compliance and operational requirements of each sector.",
      },
    },
    {
      "@type": "Question",
      name: "How can I get started with Orion Data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact us through our website to schedule a consultation. Our team will assess your data needs and recommend a customized solution that fits your business requirements and budget.",
      },
    },
  ],
};

// ============================================
// 7. WEBSITE SCHEMA
// ============================================
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_NAME,
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
  publisher: {
    "@type": "Organization",
    name: COMPANY_NAME,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
  },
};

// ============================================
// 8. CONTACT PAGE SCHEMA
// ============================================
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${COMPANY_NAME}`,
  description:
    "Get in touch with Orion Data for enterprise AI and data analytics solutions.",
  url: `${BASE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: COMPANY_NAME,
    email: "contact@orion-data.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "City",
      addressRegion: "State",
      addressCountry: "US",
    },
  },
};

// ============================================
// 9. BREADCRUMB SCHEMA
// ============================================
export const getBreadcrumbSchema = (pageName, pageUrl) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: `${BASE_URL}${pageUrl}`,
    },
  ],
});

// Multi-level breadcrumb for deeper pages
export const getDeepBreadcrumbSchema = (crumbs) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: `${BASE_URL}${crumb.url}`,
  })),
});

// ============================================
// 10. SOFTWARE APPLICATION SCHEMA
// ============================================
export const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Orion Data Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "150",
  },
  description:
    "Enterprise-grade data platform with AI-powered analytics and real-time processing capabilities.",
  featureList: [
    "Real-time data processing",
    "AI-powered analytics",
    "Data visualization",
    "Predictive modeling",
    "API integration",
    "Cloud-native architecture",
  ],
};

// ============================================
// Default Export - All Schemas
// ============================================
export default {
  organization: organizationSchema,
  localBusiness: localBusinessSchema,
  aiService: aiServiceSchema,
  platformService: platformServiceSchema,
  industriesService: industriesServiceSchema,
  faqPage: faqPageSchema,
  webSite: webSiteSchema,
  contactPage: contactPageSchema,
  getBreadcrumb: getBreadcrumbSchema,
  getDeepBreadcrumb: getDeepBreadcrumbSchema,
  softwareApplication: softwareApplicationSchema,
};
