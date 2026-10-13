import type { Metadata } from "next";

const BASE_URL = "https://www.rrsecurityguards.com";
const SITE_NAME = "Rapid Response Security Guards";

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
}): Metadata {
  const url = path ? `${BASE_URL}${path}` : BASE_URL;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
