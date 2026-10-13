import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, Shield } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { SERVICE_BY_SLUG } from "@/data/services";
import { SERVICE_SLUGS } from "@/lib/routes";
import HeroWithForm from "@/components/HeroWithForm";
import { ARMED_VS_UNARMED_ARTICLE } from "@/data/articles";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];
  
  if (!service) {
    return buildPageMetadata({
      title: "Service Not Found",
      description: "The requested service could not be found.",
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICE_BY_SLUG[slug];

  if (!service) {
    notFound();
  }

  return (
    <main>
      <HeroWithForm
        title={service.h1}
        subtitle={service.heroTagline}
        badge={service.title}
      />

      {/* Features Grid */}
      <section className="section bg-white border-b border-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <div key={idx} className="flex items-start p-6 bg-surface rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <CheckCircle className="w-8 h-8 text-primary mr-4 shrink-0" />
                <span className="text-lg font-medium text-dark pt-1">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section bg-surface content-lazy">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">{service.whyTitle}</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {service.whyPoints.map((point, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4 shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark">{point.heading}</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {point.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-sm bg-dark text-white content-lazy">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Industries We Serve with {service.shortTitle}</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {service.industries.map((industry, idx) => (
              <span key={idx} className="px-6 py-3 bg-white/10 rounded-full text-lg font-medium border border-white/20">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white content-lazy">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">Common questions about our {service.title.toLowerCase()} services.</p>
          </div>
          
          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <details key={idx} className="group bg-surface rounded-xl border border-gray-200 overflow-hidden" id={`faq-${idx}`}>
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-xl text-dark hover:text-primary transition-colors">
                  <span className="pr-8">{faq.q}</span>
                  <span className="transition group-open:rotate-180">
                    <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                  </span>
                </summary>
                <div className="text-gray-600 px-6 pb-6 text-lg leading-relaxed border-t border-gray-100 pt-4 mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {(slug === "armed-security" || slug === "unarmed-security") && (
        <section className="section-sm bg-white border-t border-gray-100">
          <div className="container max-w-4xl">
            <h2 className="text-2xl font-bold mb-3 text-dark">Related Guide</h2>
            <p className="text-gray-600 text-lg">
              Deciding between armed and unarmed coverage? Read{" "}
              <Link href={ARMED_VS_UNARMED_ARTICLE.path} className="text-primary underline font-medium">
                Armed vs. Unarmed Security Guards in Orange County
              </Link>.
            </p>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="section bg-primary text-white text-center content-lazy">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">{service.ctaHeading}</h2>
          <p className="text-xl md:text-2xl mb-10 opacity-90">{service.ctaSubtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="#hero" className="btn bg-dark text-white hover:bg-black border-none text-xl px-10 py-5 rounded-full">
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
