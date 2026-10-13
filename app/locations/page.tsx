import Link from "next/link";
import { COUNTIES, CITIES } from "@/data/locations";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Security Guard Services by Location | California | Rapid Response Security Guards",
  description: "Rapid Response Security Guards provides professional, licensed security guard services across California. Find your local service area today.",
});

export default function LocationsHubPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-dark text-surface section pt-32 pb-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white font-poppins">
            Security Guard Services Across California
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Providing professional, rapid-response security guard services statewide. From Orange County to the San Francisco Bay Area, our licensed teams are ready to deploy.
          </p>
        </div>
      </section>

      {/* County Cards Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COUNTIES.map((county) => (
              <div key={county.slug} className="card-hover bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img src={county.image} alt={county.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-dark font-poppins mb-3">
                    {county.name}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {county.description}
                  </p>
                  <div className="mb-4">
                    <span className="inline-block bg-primary/10 text-primary font-medium px-3 py-1 rounded-full text-sm">
                      {county.cities.length} Cities Covered
                    </span>
                  </div>
                  <Link href={`/locations/${county.slug}`} className="btn btn-outline text-center mt-auto">
                    View Area
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Callout */}
      <section className="section-sm bg-white content-lazy border-t border-gray-100">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-dark font-poppins mb-6">
            Comprehensive California Coverage
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
            With regional hubs across the state, we cover all 7 major regions listed above. We offer rapid deployment of both armed and unarmed guards, as well as specialized security services customized for your local market.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-primary text-white text-center content-lazy">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
            Need Security Services in Your Area?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            Contact us today for a free consultation and customized security plan tailored to your location.
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
