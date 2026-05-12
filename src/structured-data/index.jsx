import React from "react";

/**
 * JSON-LD Script Component
 * Renders a JSON-LD script tag for structured data
 */
export const JsonLdScript = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(data),
    }}
  />
);

/**
 * Home Page Structured Data
 * Includes: Organization, WebSite, Breadcrumb
 */
export const HomePageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={webSiteSchema} />
    <JsonLdScript data={localBusinessSchema} />
    <JsonLdScript data={softwareApplicationSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Home", "/")} />
  </>
);

/**
 * AI Page Structured Data
 * Includes: Organization, AI Service, Breadcrumb
 */
export const AIPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={aiServiceSchema} />
    <JsonLdScript data={getBreadcrumbSchema("AI Solutions", "/ai")} />
  </>
);

/**
 * Platform Page Structured Data
 * Includes: Organization, Platform Service, SoftwareApplication, Breadcrumb
 */
export const PlatformPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={platformServiceSchema} />
    <JsonLdScript data={softwareApplicationSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Platform", "/platform")} />
  </>
);

/**
 * Industries Page Structured Data
 * Includes: Organization, Industries Service, Breadcrumb
 */
export const IndustriesPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={industriesServiceSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Industries", "/industries")} />
  </>
);

/**
 * Contact Page Structured Data
 * Includes: Organization, ContactPage, Breadcrumb
 */
export const ContactPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={contactPageSchema} />
    <JsonLdScript data={faqPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Contact", "/contact")} />
  </>
);

// Import schemas from schemas.js
import {
  organizationSchema,
  localBusinessSchema,
  aiServiceSchema,
  platformServiceSchema,
  industriesServiceSchema,
  faqPageSchema,
  webSiteSchema,
  contactPageSchema,
  softwareApplicationSchema,
  getBreadcrumbSchema,
  getDeepBreadcrumbSchema,
} from "./schemas";

// Re-export schemas for direct use
export {
  organizationSchema,
  localBusinessSchema,
  aiServiceSchema,
  platformServiceSchema,
  industriesServiceSchema,
  faqPageSchema,
  webSiteSchema,
  contactPageSchema,
  softwareApplicationSchema,
  getBreadcrumbSchema,
  getDeepBreadcrumbSchema,
};
