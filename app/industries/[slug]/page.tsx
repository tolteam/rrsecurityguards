import { INDUSTRY_BY_SLUG } from "@/data/industries";
import { INDUSTRY_SLUGS } from "@/lib/routes";
import { buildPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import HeroWithForm from "@/components/HeroWithForm";

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRY_BY_SLUG[slug];
  if (!industry) return {};
  
  return buildPageMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = INDUSTRY_BY_SLUG[slug];

  if (!industry) {
    notFound();
  }

  return (
    <main>
      <HeroWithForm
        title={industry.h1}
        subtitle={industry.heroTagline}
        badge={`${industry.icon} ${industry.shortTitle} Security`}
      />

      {/* Challenges Section */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Common Security Challenges in {industry.shortTitle}
            </h2>
            <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {industry.challenges.map((challenge, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 card-hover">
                <div className="w-12 h-12 bg-red-50 text-[var(--color-primary)] rounded-full flex items-center justify-center mb-4 text-xl font-bold">
                  !
                </div>
                <h3 className="text-xl font-bold mb-3">{challenge.heading}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our {industry.shortTitle} Security Solutions
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We provide comprehensive security tailored specifically to the needs and vulnerabilities of {industry.shortTitle.toLowerCase()} environments.
              </p>
              
              <ul className="space-y-6">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs">
                        ✓
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-bold text-gray-900">{solution.service}</h4>
                      <p className="mt-1 text-gray-600">{solution.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <div className="rounded-xl overflow-hidden shadow-lg relative aspect-square md:aspect-video lg:aspect-square bg-gray-100">
                <img 
                  src={industry.image} 
                  alt={`${industry.shortTitle} Security Solutions`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {industry.faqs && industry.faqs.length > 0 && (
        <section className="section bg-[var(--color-surface)] content-lazy">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6">
              {industry.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold mb-2 flex items-start">
                    <span className="text-[var(--color-primary)] mr-3 font-black">Q.</span>
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 flex items-start">
                    <span className="text-gray-400 mr-3 font-bold">A.</span>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="section-sm bg-[var(--color-dark)] text-white text-center">
        <div className="container max-w-3xl">
          <div className="text-5xl mb-6">{industry.icon}</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {industry.ctaHeading}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            {industry.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#hero" className="btn btn-primary">
              Get a Free Quote
            </Link>
            <a href="tel:9499928491" className="btn btn-outline">
              Call (949) 992-8491
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
