import Link from "next/link";
import { notFound } from "next/navigation";
import { CITY_BY_SLUG } from "@/data/locations";
import { SERVICE_BY_SLUG } from "@/data/services";
import { CITY_SLUGS, SERVICE_SLUGS } from "@/lib/routes";
import { buildPageMetadata } from "@/lib/seo";
import HeroWithForm from "@/components/HeroWithForm";

interface PageProps {
  params: Promise<{
    city: string;
    service: string;
  }>;
}

export function generateStaticParams() {
  return CITY_SLUGS.flatMap((city) => 
    SERVICE_SLUGS.map((service) => ({ city, service }))
  );
}

export async function generateMetadata({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = CITY_BY_SLUG[citySlug];
  const service = SERVICE_BY_SLUG[serviceSlug];
  
  if (!city || !service) return {};
  
  return buildPageMetadata({
    title: `${service.title} in ${city.cityName}, CA | Rapid Response Security Guards`,
    description: `Professional ${service.title.toLowerCase()} in ${city.cityName}, CA. Fast deployment, licensed professionals, and tailored security solutions for ${city.cityName} businesses and communities.`,
    path: `/locations/${citySlug}/${serviceSlug}`,
  });
}

export default async function CityServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = CITY_BY_SLUG[citySlug];
  const service = SERVICE_BY_SLUG[serviceSlug];
  
  if (!city || !service) {
    notFound();
  }

  return (
    <main>
      <HeroWithForm
        title={`${service.title} in ${city.cityName}, CA`}
        subtitle={`${service.heroTagline} Available throughout ${city.cityName} and ${city.county}.`}
        badge={`${city.cityName} · ${service.shortTitle}`}
        bullets={[
          `Licensed & Insured — PPO #121228`,
          `Serving ${city.cityName} & surrounding areas`,
          "Available 24/7 — rapid deployment",
        ]}
      />

      {/* About Combo Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark font-poppins mb-6">
              Expert {service.shortTitle} for {city.cityName}
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {city.about}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              We combine our deep local knowledge of the {city.cityName} area with the specialized expertise required for top-tier {service.title.toLowerCase()}.
            </p>
          </div>
        </div>
      </section>

      {/* Service Features Grid */}
      <section className="section bg-surface content-lazy">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark font-poppins mb-4">
              What Our {service.shortTitle} Service Includes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {service.features.map((feature, idx) => (
              <div key={idx} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-start gap-4">
                <div className="bg-primary/10 text-primary p-2 rounded-full shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-800 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white content-lazy">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark font-poppins mb-4">
              Why Choose Us in {city.cityName}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.whyPoints.slice(0, 4).map((point, idx) => (
              <div key={idx} className="card-hover p-6 border border-gray-100 rounded-xl bg-surface">
                <h3 className="text-xl font-bold text-dark mb-3 font-poppins">{point.heading}</h3>
                <p className="text-gray-600">{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-surface content-lazy">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark font-poppins mb-4">
              Common Questions About {service.shortTitle} in {city.cityName}
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark mb-3">Is your {service.shortTitle.toLowerCase()} available 24/7 in {city.cityName}?</h3>
              <p className="text-gray-600">
                Yes, our {service.shortTitle.toLowerCase()} services are available 24/7 across {city.cityName} and the surrounding {city.county} area. We can accommodate any schedule.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark mb-3">Are your security guards assigned to {city.cityName} fully licensed?</h3>
              <p className="text-gray-600">
                Absolutely. Every security guard we deploy in {city.cityName} is fully licensed by the California Bureau of Security and Investigative Services (BSIS) and undergoes rigorous background checks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark mb-3">Do you cover areas outside {city.cityName}?</h3>
              <p className="text-gray-600">
                Yes! While we provide dedicated services to {city.cityName}, we also cover nearby communities including {city.nearbyAreas.join(", ")}, as well as the broader {city.county} region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white text-center content-lazy">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            {service.ctaHeading}
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            {service.ctaSubtitle} Serving {city.cityName} and the greater {city.county} area.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="#hero" className="btn bg-white text-primary hover:bg-gray-100">
              Request {service.shortTitle}
            </Link>
            <a href="tel:9499928491" className="btn btn-dark">
              Call (949) 992-8491
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
