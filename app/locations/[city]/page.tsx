import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CITY_BY_SLUG, CITIES, COUNTY_BY_SLUG, COUNTIES, getCitiesForCounty } from "@/data/locations";
import { SERVICES } from "@/data/services";
import { CITY_SLUGS } from "@/lib/routes";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import HeroWithForm from "@/components/HeroWithForm";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export function generateStaticParams() {
  const citySlugs = CITY_SLUGS.map((slug) => ({ city: slug }));
  const countySlugs = COUNTIES.map((c) => ({ city: c.slug }));
  return [...citySlugs, ...countySlugs];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const cityData = CITY_BY_SLUG[city];
  if (cityData) {
    return buildPageMetadata({
      title: cityData.metaTitle,
      description: cityData.metaDescription,
      path: `/locations/${city}`,
    });
  }
  const countyData = COUNTY_BY_SLUG[city];
  if (countyData) {
    return buildPageMetadata({
      title: countyData.metaTitle,
      description: countyData.metaDescription,
      path: `/locations/${city}`,
    });
  }
  return {};
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = CITY_BY_SLUG[citySlug];
  const county = !city ? COUNTY_BY_SLUG[citySlug] : null;

  if (!city && !county) {
    notFound();
  }

  // If this is a county page, render a county overview
  if (county) {
    const countyCities = getCitiesForCounty(citySlug);
    return (
      <main>
        <HeroWithForm
          title={county.h1}
          subtitle={county.heroTagline}
          badge={county.name}
          bullets={[
            "Licensed & Insured — PPO #121228",
            `Serving all of ${county.name}`,
            "Available 24/7 — rapid deployment",
          ]}
        />
        <section className="section bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[var(--color-dark)] mb-4">Cities We Serve in {county.name}</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">{county.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countyCities.map((c) => (
                <Link key={c.slug} href={`/locations/${c.slug}`} className="card-hover bg-[var(--color-surface)] p-6 rounded-xl border border-gray-100 group">
                  <h3 className="text-xl font-bold text-[var(--color-dark)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">{c.cityName}</h3>
                  <p className="text-gray-600 text-sm">{c.heroTagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="section bg-[var(--color-primary)] text-white text-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-4">Get Security Coverage in {county.name}</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">{county.description}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#hero" className="btn bg-white text-[var(--color-primary)] hover:bg-gray-100">Get a Free Quote</a>
              <a href="tel:19499928491" className="btn btn-dark">Call (949) 992-8491</a>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      <HeroWithForm
        title={city.h1}
        subtitle={city.heroTagline}
        badge={`${city.cityName}, ${city.state}`}
        bullets={[
          "Licensed & Insured — PPO #121228",
          `Serving ${city.cityName} & ${city.county}`,
          "Available 24/7 — rapid deployment",
        ]}
      />

      {/* About City & Landmarks */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-dark font-poppins mb-6">
              About {city.cityName} Security
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {city.about}
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {city.landmarks.map((landmark) => (
                <span key={landmark} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                  {landmark}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Available Grid */}
      <section className="section bg-surface content-lazy">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark font-poppins mb-4">
              Services Available in {city.cityName}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of professional security services tailored to meet the needs of businesses and residents in {city.cityName}.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <Link 
                key={service.slug} 
                href={`/locations/${city.slug}/${service.slug}`}
                className="card-hover bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col group"
              >
                <div className="h-40 mb-4 overflow-hidden rounded-lg bg-gray-100 relative">
                  <Image src={service.image} alt={service.title} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-300" quality={100} />
                </div>
                <h3 className="text-xl font-bold text-dark font-poppins mb-2 group-hover:text-primary transition-colors">
                  {service.shortTitle}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                  {service.heroTagline}
                </p>
                <span className="text-primary font-medium text-sm mt-auto inline-flex items-center">
                  Learn More 
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="section-sm bg-white content-lazy border-y border-gray-100">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-dark font-poppins mb-6">
            Service Areas Nearby
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {city.nearbyAreas.map((areaName) => {
              // Try to find if this area is also a city we cover to link to it
              const targetCity = CITIES.find(c => c.cityName === areaName);
              if (targetCity) {
                return (
                  <Link 
                    key={areaName} 
                    href={`/locations/${targetCity.slug}`}
                    className="bg-primary/5 text-primary hover:bg-primary hover:text-white px-5 py-2 rounded-full text-sm font-medium transition-colors"
                  >
                    {areaName}
                  </Link>
                );
              }
              // Fallback for areas we don't have direct pages for
              return (
                <span key={areaName} className="bg-gray-100 text-gray-600 px-5 py-2 rounded-full text-sm font-medium">
                  {areaName}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-surface content-lazy">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark font-poppins mb-4">
              Frequently Asked Questions in {city.cityName}
            </h2>
          </div>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark mb-3">How fast can you deploy in {city.cityName}?</h3>
              <p className="text-gray-600">
                Because we have local operations covering {city.county}, we can typically deploy security guards to {city.cityName} locations within 24 hours. In emergency situations, such as fire watch or immediate threats, we can often dispatch personnel even faster.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-dark mb-3">What services do you offer in {city.cityName}?</h3>
              <p className="text-gray-600">
                We offer our full range of professional security services in {city.cityName}. This includes armed and unarmed security guards, mobile patrol, fire watch, construction site security, and event security. All our guards are fully licensed and insured in California.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white text-center content-lazy">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Secure Your {city.cityName} Property Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Contact Rapid Response Security Guards for a free consultation and personalized quote for your security needs in {city.cityName}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link href="#hero" className="btn bg-white text-primary hover:bg-gray-100">
              Get a Free Quote
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
