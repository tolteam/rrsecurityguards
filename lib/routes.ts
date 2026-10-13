/**
 * Central registry of all slugs used across the site.
 * Used to generate static params for dynamic routes and sitemap entries.
 */

export const SERVICE_SLUGS = [
  "armed-security",
  "unarmed-security",
  "mobile-patrol",
  "fire-watch",
  "construction-security",
  "event-security",
  "executive-protection",
  "residential-security",
  "loss-prevention",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export const INDUSTRY_SLUGS = [
  "construction",
  "retail",
  "healthcare",
  "hospitality-hotels",
  "residential-hoa",
  "warehouses-logistics",
  "office-buildings",
  "religious-institutions",
] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export const CITY_SLUGS = [
  // Orange County
  "irvine",
  "anaheim",
  "santa-ana",
  "costa-mesa",
  "huntington-beach",
  "newport-beach",
  "tustin",
  "orange",
  "fullerton",
  "garden-grove",
  // Los Angeles County
  "los-angeles",
  "long-beach",
  "glendale",
  "pasadena",
  "torrance",
  "inglewood",
  "santa-monica",
  "west-hollywood",
  // Riverside County
  "riverside",
  "corona",
  "moreno-valley",
  "temecula",
  "murrieta",
  // San Diego County
  "san-diego",
  "chula-vista",
  "oceanside",
  "escondido",
  "carlsbad",
  // San Bernardino County
  "san-bernardino",
  "ontario",
  "rancho-cucamonga",
  "fontana",
  // Sacramento County
  "sacramento",
  "elk-grove",
  "folsom",
  // SF Bay Area
  "san-francisco",
  "oakland",
  "san-jose",
] as const;

export type CitySlug = (typeof CITY_SLUGS)[number];
