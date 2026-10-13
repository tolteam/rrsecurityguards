import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Shield, PhoneCall, ArrowRight } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = buildPageMetadata({
  title: "Security Guard Services in Southern California | Rapid Response Security Guards",
  description: "Professional, licensed security guard services including armed, unarmed, mobile patrol, fire watch, and executive protection across California.",
  path: "/services",
});

export default function ServicesHubPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-dark text-surface section relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-bg.png')] bg-cover bg-center"></div>
        <div className="container relative z-10 pt-12 pb-16 md:pt-20 md:pb-24 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Professional Security Guard Services in Southern California
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Rapid Response Security Guards provides comprehensive, tailored security solutions for businesses, communities, and individuals across California.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section bg-surface">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">Our Security Services</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.slug} className="card-hover bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 flex flex-col">
                <div className="h-48 bg-dark relative overflow-hidden">
                  {/* Next/Image would be ideal, but standard img works too */}
                  <img src={service.image} alt={service.shortTitle} className="w-full h-full object-cover opacity-80" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">{service.shortTitle}</h3>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 text-sm line-clamp-3">
                    {service.heroTagline}
                  </p>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={`/services/${service.slug}`} className="btn btn-outline w-full text-center group">
                    Learn More 
                    <ArrowRight className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-white content-lazy">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
                Why Choose Rapid Response?
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                We are committed to providing elite security personnel and unmatched client service. Our proactive approach ensures your assets, property, and people are always protected.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-2">Licensed & Trained Guards</h4>
                    <p className="text-gray-600">All our guards are BSIS certified and undergo rigorous ongoing training in security protocols and customer service.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-2">24/7 Dispatch & Support</h4>
                    <p className="text-gray-600">Our operations center is staffed around the clock to respond to incidents and client requests immediately.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-2">Tailored Security Plans</h4>
                    <p className="text-gray-600">We don't believe in one-size-fits-all. Every client receives a customized security strategy designed for their specific needs.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0 mr-4">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-dark mb-2">Advanced Reporting</h4>
                    <p className="text-gray-600">Access daily activity reports, incident logs, and GPS tracking data through our digital client portal.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-full rounded-2xl overflow-hidden min-h-[500px]">
              <div className="absolute inset-0 bg-dark/20 z-10"></div>
              <img src="/images/services/armed-security.webp" alt="Security Guards" className="absolute inset-0 w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary text-white py-16 content-lazy">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Property?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation and custom security proposal. Our experts are standing by.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#hero" className="btn bg-dark text-white hover:bg-black border-none text-lg px-8 py-4">
              Get a Free Quote
            </Link>
            <a href="tel:19499928491" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 inline-flex items-center justify-center">
              <PhoneCall className="w-5 h-5 mr-2" />
              (949) 992-8491
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
