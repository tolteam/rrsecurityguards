import { INDUSTRIES } from "@/data/industries";
import { buildPageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = buildPageMetadata({
  title: "Security Services by Industry | Rapid Response Security Guards",
  description:
    "Specialized security guard services tailored to the unique needs of construction, retail, healthcare, hospitality, residential communities, and more across California.",
});

export default function IndustriesHubPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[var(--color-dark)] text-white pt-32 pb-20 section">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Security Guard Services for Every Industry
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Different environments require different security approaches. We provide highly trained, specialized security personnel equipped to handle the unique challenges of your specific industry.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="card-hover bg-white rounded-lg p-8 shadow-sm border border-gray-100 flex flex-col h-full"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h2 className="text-2xl font-bold mb-3">{industry.shortTitle}</h2>
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                  {industry.heroTagline}
                </p>
                <span className="text-[var(--color-primary)] font-semibold flex items-center group-hover:underline mt-auto">
                  Learn more
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Industry Value Props */}
      <section className="section bg-white content-lazy">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Rapid Response Standard
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              No matter what industry you operate in, our commitment to excellence remains the same.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[var(--color-surface)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">
                Fully licensed by BSIS and heavily insured to protect your business from liability.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[var(--color-surface)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2">Highly Trained</h3>
              <p className="text-gray-600 text-sm">
                Guards trained in de-escalation, emergency response, and industry-specific protocols.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[var(--color-surface)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2">Rapid Deployment</h3>
              <p className="text-gray-600 text-sm">
                Able to deploy officers to most locations within hours for urgent security needs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[var(--color-surface)] text-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Dispatch</h3>
              <p className="text-gray-600 text-sm">
                Round-the-clock supervision and communication with our dedicated dispatch center.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="section-sm bg-[var(--color-primary)] text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold mb-2">Ready to secure your business?</h2>
              <p className="text-white/90">
                Call (949) 992-8491 or get a free custom quote today.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link href="#hero" className="btn btn-dark">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
