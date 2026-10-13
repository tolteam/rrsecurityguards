import { Metadata } from "next";
import Link from "next/link";
import { buildPageMetadata } from "@/lib/seo";
import { ARMED_VS_UNARMED_ARTICLE as ARTICLE } from "@/data/articles";
import HeroWithForm from "@/components/HeroWithForm";

const BASE_URL = "https://www.rrsecurityguards.com";

export const metadata: Metadata = {
  ...buildPageMetadata({
    title: ARTICLE.title,
    description: ARTICLE.metaDescription,
    path: ARTICLE.path,
    keywords: [ARTICLE.focusKeyword, ...ARTICLE.tags],
  }),
  openGraph: {
    type: "article",
    locale: "en_US",
    url: `${BASE_URL}${ARTICLE.path}`,
    siteName: "Rapid Response Security Guards",
    title: ARTICLE.title,
    description: ARTICLE.metaDescription,
    publishedTime: ARTICLE.datePublished,
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ARTICLE.title,
    description: ARTICLE.metaDescription,
    datePublished: ARTICLE.datePublished,
    dateModified: ARTICLE.datePublished,
    mainEntityOfPage: `${BASE_URL}${ARTICLE.path}`,
    author: { "@type": "Organization", name: "Rapid Response Security Guards" },
    publisher: {
      "@type": "Organization",
      name: "Rapid Response Security Guards",
      url: BASE_URL,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
      { "@type": "ListItem", position: 3, name: ARTICLE.title, item: `${BASE_URL}${ARTICLE.path}` },
    ],
  },
];

const BODY_CLASSES = [
  "text-gray-700 text-lg leading-relaxed break-words",
  "[&_h2]:text-3xl [&_h2]:font-bold [&_h2]:text-dark [&_h2]:mt-12 [&_h2]:mb-4",
  "[&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-dark [&_h3]:mt-8 [&_h3]:mb-2",
  "[&_p]:mb-5",
  "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2",
  "[&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2",
  "[&_a]:text-primary [&_a]:underline [&_a]:font-medium",
  "[&_strong]:text-dark",
].join(" ");

export default function ArmedVsUnarmedArticlePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroWithForm
        title={ARTICLE.title}
        subtitle={ARTICLE.metaDescription}
        badge="Security Guide"
      />

      <section className="section bg-white">
        <div className="container max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-primary">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-dark">Armed vs. Unarmed Security Guards</span>
          </nav>
          <article
            className={BODY_CLASSES}
            dangerouslySetInnerHTML={{ __html: ARTICLE.contentHtml }}
          />
        </div>
      </section>

      <section className="section bg-primary text-white text-center">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Level of Protection You Need?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Tell us about your property and we will recommend the right coverage.
          </p>
          <Link
            href="#hero"
            className="btn bg-dark text-white hover:bg-black border-none text-xl px-10 py-5 rounded-full"
          >
            Request a Free Quote
          </Link>
        </div>
      </section>
    </main>
  );
}
