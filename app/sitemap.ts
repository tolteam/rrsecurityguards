import type { MetadataRoute } from 'next';
import { SERVICES } from '@/data/services';
import { INDUSTRIES } from '@/data/industries';
import { COUNTIES, CITIES } from '@/data/locations';
import { SERVICE_SLUGS } from '@/lib/routes';
import { ARMED_VS_UNARMED_ARTICLE } from '@/data/articles';

const BASE_URL = 'https://www.rrsecurityguards.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Static Core Pages ──
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];

  // ── Services Hub ──
  const servicesHub: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // ── Individual Service Pages ──
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  // ── Guides (silo children of /services) ──
  const guidePages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}${ARMED_VS_UNARMED_ARTICLE.path}`,
      lastModified: new Date(ARMED_VS_UNARMED_ARTICLE.datePublished),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // ── Industries Hub ──
  const industriesHub: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/industries`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  // ── Individual Industry Pages ──
  const industryPages: MetadataRoute.Sitemap = INDUSTRIES.map((industry) => ({
    url: `${BASE_URL}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ── Locations Hub ──
  const locationsHub: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/locations`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  // ── County Pages ──
  const countyPages: MetadataRoute.Sitemap = COUNTIES.map((county) => ({
    url: `${BASE_URL}/locations/${county.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ── City Pages ──
  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/locations/${city.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // ── City × Service Combo Pages ──
  const comboPages: MetadataRoute.Sitemap = CITIES.flatMap((city) =>
    SERVICE_SLUGS.map((serviceSlug) => ({
      url: `${BASE_URL}/locations/${city.slug}/${serviceSlug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  return [
    ...staticPages,
    ...servicesHub,
    ...servicePages,
    ...guidePages,
    ...industriesHub,
    ...industryPages,
    ...locationsHub,
    ...countyPages,
    ...cityPages,
    ...comboPages,
  ];
}
