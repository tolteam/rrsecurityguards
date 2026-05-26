import Image from "next/image";
import Link from "next/link";
import HeroForm from "@/components/HeroForm";


/* ─── Data ─── */
const services = [
  {
    title: "Armed Security",
    image: `/images/services/armed-security.webp`,
    features: [
      "24/7 Armed Protection",
      "Advanced Training Certified",
      "Rapid Response Teams",
      "High-Risk Facility Specialists",
    ],
  },
  {
    title: "Unarmed Security Guard",
    image: `/images/services/unarmed-security.webp`,
    features: [
      "Professional Appearance",
      "Access Control",
      "Customer Service Focused",
      "Incident Reporting",
    ],
  },
  {
    title: "Mobile Patrol Security",
    image: `/images/services/mobile-patrol.webp`,
    features: [
      "Multi-Location Coverage",
      "GPS Tracking",
      "Detailed Reports",
      "Random Patrol Patterns",
    ],
  },
  {
    title: "Fire Watch Services",
    image: `/images/services/fire-watch.webp`,
    features: [
      "OSHA Compliance",
      "Hot Work Monitoring",
      "Construction Site Specialists",
      "Emergency Response",
    ],
  },
  {
    title: "Construction Site Security",
    image: `/images/services/construction-security.webp`,
    features: [
      "Equipment Protection",
      "Access Control",
      "Perimeter Security",
      "Theft Prevention",
    ],
  },
  {
    title: "Event Security",
    image: `/images/services/event-security.webp`,
    features: [
      "Crowd Management",
      "Entry Control",
      "VIP Protection",
      "Emergency Coordination",
    ],
  },
  {
    title: "Executive Protection",
    image: `/images/services/executive-protection.webp`,
    features: [
      "VIP & Personal Protection",
      "Discreet, Low Profile Coverage",
      "Secure Transportation & Escorts",
      "Threat Detection & Rapid Response",
    ],
  },
];

const additionalServices = [
  {
    title: "Residential Security",
    image: `/images/services/residential-security.webp`,
    features: [
      "Gated Communities & HOAs",
      "Apartment Complexes",
      "Private Properties & Estates",
      "Neighborhood Patrol Services",
    ],
  },
  {
    title: "Commercial Security",
    image: `/images/services/commercial-security.webp`,
    features: [
      "Construction Sites",
      "Office Buildings",
      "Retail & Shopping Centers",
      "Warehouses & Industrial Facilities",
      "Hotels & Hospitality",
      "Fire Watch Properties",
    ],
  },
  {
    title: "Event Security",
    image: `/images/services/event-security-2.webp`,
    features: [
      "Private Events & Parties",
      "Corporate Events",
      "Concerts & Large Gatherings",
      "VIP & High Profile Events",
    ],
  },
];

const serviceAreas = [
  {
    name: "Orange County",
    image: `/images/areas/orange-county.webp`,
    description:
      "We provide professional security guard services throughout Orange County, including Irvine, Anaheim, Santa Ana, Costa Mesa, Huntington Beach, Newport Beach, Tustin, Orange, Fullerton, and Garden Grove.",
  },
  {
    name: "Riverside County",
    image: `/images/areas/riverside-county.webp`,
    description:
      "Security coverage is available throughout Riverside County, including Riverside, Corona, Moreno Valley, Temecula, Murrieta, Palm Desert, and Indio.",
  },
  {
    name: "San Diego County",
    image: `/images/areas/san-diego-county.webp`,
    description:
      "We serve clients across San Diego County, including San Diego, Chula Vista, Oceanside, Escondido, Carlsbad, El Cajon, and La Mesa.",
  },
  {
    name: "San Bernardino County",
    image: `/images/areas/san-bernardino-county.webp`,
    description:
      "Rapid Response Security Guards provides security services throughout San Bernardino County, including San Bernardino, Ontario, Rancho Cucamonga, Fontana, Victorville, Rialto, and Chino.",
  },
  {
    name: "Los Angeles County",
    image: `/images/areas/los-angeles-county.webp`,
    description:
      "Rapid Response Security Guards delivers security services across Los Angeles County, including Los Angeles, Long Beach, Glendale, Pasadena, Torrance, Inglewood, Santa Monica, and West Hollywood.",
  },
  {
    name: "Sacramento County",
    image: `/images/areas/sacramento-county.webp`,
    description:
      "We also provide security services in Sacramento County, including Sacramento, Elk Grove, Folsom, Rancho Cordova, Citrus Heights, and Galt.",
  },
  {
    name: "San Francisco Bay Area",
    image: `/images/areas/san-francisco-bay.webp`,
    description:
      "We provide professional security guard services throughout the San Francisco Bay Area, including San Francisco, Oakland, San Jose, Fremont, Hayward, Berkeley, Palo Alto, and Mountain View.",
  },
];

const faqs = [
  {
    q: "How quickly can you provide security services near me?",
    a: "In many cases, we can deploy security guards within 24 hours or sooner depending on your location. If you are searching for security services near you for urgent situations like fire watch or last minute coverage, our team prioritizes fast response and rapid deployment.",
  },
  {
    q: "Are your security guards licensed and trained?",
    a: "Yes, all of our guards are licensed in California and trained to provide professional security services near you. We focus on reliability, awareness, and strong communication to ensure your property stays protected.",
  },
  {
    q: "What types of properties do you provide security for?",
    a: "We provide security services near you for residential communities, apartment complexes, commercial properties, retail locations, construction sites, warehouses, and private events.",
  },
  {
    q: "Do you offer short term and long term security services near me?",
    a: "Yes, we offer flexible options based on your needs. Whether you need one day event security or ongoing protection, we provide security services near you that fit your schedule and budget.",
  },
  {
    q: "What areas do you serve?",
    a: "If you are looking for security services near you, we serve Orange County, Los Angeles County, Riverside County, San Diego County, San Bernardino County, and Sacramento County, including cities like Irvine, Anaheim, Los Angeles, Riverside, San Diego, and Sacramento.",
  },
  {
    q: "How much do security services near me cost?",
    a: "Pricing depends on your location, type of service, hours needed, and level of risk. We provide custom quotes to ensure you get the right level of protection at a competitive rate.",
  },
  {
    q: "Can you handle last minute security requests near me?",
    a: "Yes, we specialize in fast response for urgent situations. If you need security services near you quickly, we can deploy guards for fire watch, events, or temporary coverage.",
  },
];

const whyChooseUs = [
  "Licensed and trained security guards in California",
  "Fast deployment across Orange and Orange County",
  "Professional appearance and strong communication",
  "Custom security plans for every property type",
  "Affordable pricing with no hidden fees",
  "24/7 availability for ongoing and emergency coverage",
];

/* ─── Check icon ─── */
const CheckIcon = () => (
  <svg
    className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
    viewBox="0 0 512 512"
    fill="currentColor"
  >
    <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════ */}
      <section id="hero" className="relative bg-[var(--color-dark)] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero.webp"
            alt="Security guards protecting property in Orange, California"
            fill
            priority
            quality={70}
            sizes="100vw"
            className="object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-dark)] via-[var(--color-dark)]/80 to-transparent" />
        </div>

        <div className="container relative z-10 py-20 md:py-28 lg:py-36">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left – Copy */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-[50px] font-semibold text-white leading-[1.1] tracking-[-3.5px]">
                Fast, Reliable Security Guard Services in Orange, CA
              </h1>
              <p className="mt-5 text-base text-gray-300 font-light leading-relaxed">
                Licensed and insured security guard services in Orange and
                Orange County. We provide reliable protection for construction
                sites, businesses, events, and residential communities with fast
                response and professional guards.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="tel:19499928491" className="btn btn-primary">
                  Call: (949) 992-8491
                </a>
                <a href="#contact" className="btn btn-outline-white">
                  Get a Free Quote
                </a>
              </div>
              <p className="mt-4 text-sm text-gray-400">
                No contracts required. Fast Response
              </p>
              <ul className="mt-5 space-y-2">
                {[
                  "Licensed, Insured, PPO #121228",
                  "Available 24/7",
                  "Fast deployment across Southern California",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg
                      className="w-5 h-5 text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                    >
                      <path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" />
                    </svg>
                    <span className="text-sm text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right – Contact Form */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h2 className="text-xl font-semibold text-white mb-5">
                Request a Free Security Quote
              </h2>
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES SECTION (row 1 – 3 + 3 + 1 grid)
      ═══════════════════════════════════════════ */}
      <section id="services" className="section bg-white">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
              Our Security Guard Services in Orange, CA
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-muted)] font-light">
              Reliable, licensed security solutions tailored to your property,
              business, or event.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="card-hover bg-white rounded-xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-[340px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                    {service.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                      >
                        <span className="text-[var(--color-primary)] mt-0.5">
                          •
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#contact"
                    className="btn btn-primary w-full mt-5 text-sm"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ADDITIONAL SERVICES (Residential / Commercial / Events)
      ═══════════════════════════════════════════ */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
              Serving Orange and Orange County
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-muted)] font-light">
              We proudly provide security guard services in Orange and
              throughout Orange County, including Anaheim, Santa Ana, Huntington
              Beach, Costa Mesa, and surrounding areas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service) => (
              <div
                key={service.title}
                className="card-hover bg-white rounded-xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-[340px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-[var(--color-text)] mb-3">
                    {service.title}
                  </h4>
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
                      >
                        <span className="text-[var(--color-primary)] mt-0.5">
                          •
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-base text-[var(--color-text-muted)] mb-4">
              Not sure what you need? We&apos;ll recommend the right security
              plan based on your property or event.
            </p>
            <a href="#contact" className="btn btn-primary">
              Get a Free Quote Today
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CTA BANNER + ABOUT
      ═══════════════════════════════════════════ */}
      <section id="about" className="relative bg-[var(--color-dark)] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src={`/images/irvine-spectrum.webp`}
            alt="Irvine Spectrum"
            fill
            className="object-cover"
          />
        </div>
        <div className="container relative z-10 section">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="relative rounded-xl overflow-hidden h-[320px] lg:h-[400px]">
              <Image
                src={`/images/irvine-spectrum.webp`}
                alt="Aerial view of Irvine, California"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Trusted Security Guard Company in Orange, CA
              </h3>
              <p className="text-base text-gray-300 font-light leading-relaxed">
                Rapid Response Security Guards is a professional security guard company based in
                Orange, California, providing reliable and affordable security
                services throughout Orange County. We help businesses, property
                managers, and event organizers protect what matters most with
                trained security personnel and fast response times.
              </p>
              <p className="mt-4 text-base text-gray-300 font-light leading-relaxed">
                Whether you need ongoing protection or urgent coverage, our team
                is ready to deploy licensed security guards in Orange and
                surrounding cities.
              </p>
              <a href="#contact" className="btn btn-primary mt-6 inline-block">
                Get Your Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          TRUSTED BY — GOOGLE REVIEWS
      ═══════════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-4">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
              Trusted by Homeowners, Businesses, and Property Managers Across
              Orange County
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-muted)] font-light">
              Real feedback from clients who rely on Rapid Response Security Guards for reliable,
              professional security services.
            </p>
            <p className="mt-2 text-base text-[var(--color-text-muted)] font-light">
              From residential communities to commercial properties and private
              events, our clients trust Rapid Response Security Guards to keep their spaces safe and
              secure.{" "}
              <a
                href="https://maps.app.goo.gl/oyxzHJ5vKNPbRFUY9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] underline"
              >
                View our Google Reviews.
              </a>
            </p>
          </div>

          {/* Google Reviews Summary */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-[var(--color-text)]">
              EXCELLENT
            </span>
            <span className="text-sm text-[var(--color-text-muted)]">
              Based on <strong>6 reviews</strong>
            </span>
            <svg className="w-[70px] h-5" viewBox="0 0 272 92" fill="none">
              <path d="M115.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18C71.25 34.32 81.24 25 93.5 25s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S80.99 39.2 80.99 47.18c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#EA4335"/>
              <path d="M163.75 47.18c0 12.77-9.99 22.18-22.25 22.18s-22.25-9.41-22.25-22.18c0-12.85 9.99-22.18 22.25-22.18s22.25 9.32 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44s-12.51 5.46-12.51 13.44c0 7.9 5.79 13.44 12.51 13.44s12.51-5.55 12.51-13.44z" fill="#FBBC05"/>
              <path d="M209.75 26.34v39.82c0 16.38-9.66 23.07-21.08 23.07-10.75 0-17.22-7.19-19.66-13.07l8.48-3.53c1.51 3.61 5.21 7.87 11.17 7.87 7.31 0 11.84-4.51 11.84-13v-3.19h-.34c-2.18 2.69-6.38 5.04-11.68 5.04-11.09 0-21.25-9.66-21.25-22.09 0-12.52 10.16-22.26 21.25-22.26 5.29 0 9.49 2.35 11.68 4.96h.34v-3.61h9.25zm-8.56 20.92c0-7.81-5.21-13.52-11.84-13.52-6.72 0-12.35 5.71-12.35 13.52 0 7.73 5.63 13.36 12.35 13.36 6.63 0 11.84-5.63 11.84-13.36z" fill="#4285F4"/>
              <path d="M225 3v65h-9.5V3h9.5z" fill="#34A853"/>
              <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.83-18.48 9.83-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.51 0 17.14 9.16 18.98 14.11l1.01 2.52-29.65 12.28c2.27 4.45 5.8 6.72 10.75 6.72 4.96 0 8.4-2.44 10.92-6.14zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.96 0-11.84 4.37-11.59 12.93z" fill="#EA4335"/>
              <path d="M35.29 41.19V32H67c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.66-24.02 9.66C16.32 69.35.36 53.89.36 34.91.36 15.93 16.32.47 35.3.47c10.5 0 17.98 4.12 23.6 9.49l-6.64 6.64c-4.03-3.78-9.49-6.72-16.97-6.72-13.86 0-24.7 11.17-24.7 25.03 0 13.86 10.84 25.03 24.7 25.03 8.99 0 14.11-3.61 17.39-6.89 2.66-2.66 4.41-6.46 5.1-11.65l-22.49-.21z" fill="#4285F4"/>
            </svg>
          </div>

          {/* Review Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                name: "Ayoub Hilala",
                text: "We've been using this security company to watch over our tech store, and the service has been excellent. Their team is professional, reliable, and always quick to respond whenever we need assistance. It gives us real peace of mind knowing that our store and inventory are being monitored by people who actually care about doing their job well.",
              },
              {
                name: "chris4up",
                text: "I used them for my mom retirement celebration and they are very professional and I will be using them again in the future and we all felt safe. I highly recommend them to anyone needing security services!",
              },
              {
                name: "Samander Qadeir",
                text: "First and for most WOW best security company I've ever hired all gaurds came on time no issue on contacting them they calmed down a situation that happend so easily and professionally. If you need security I highly recommend their services.",
              },
              {
                name: "Brandon Abulebdeh",
                text: "Professional people of highest integrity, at very reasonable cost. Courteous staff: always on time, definitely recommend rapid response security for protection.",
              },
            ].map((review) => (
              <div
                key={review.name}
                className="bg-[var(--color-surface)] rounded-xl p-5 border border-gray-100 card-hover"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-sm font-semibold text-[var(--color-primary)]">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--color-text)]">
                      {review.name}
                    </p>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg
                          key={i}
                          className="w-3.5 h-3.5 text-yellow-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] font-light leading-relaxed line-clamp-5">
                  {review.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-[var(--color-text-muted)] font-light max-w-2xl mx-auto">
            Rapid Response Security Guards is trusted by homeowners, property managers, and
            businesses across Orange County for reliable and professional
            security services. Clients consistently highlight our fast response,
            strong communication, and dependable coverage for both residential
            and commercial needs.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY CHOOSE US
      ═══════════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)] text-center mb-4">
              Why Choose Rapid Response Security Guards for Security in Orange
            </h2>
            <p className="text-center text-[var(--color-text-muted)] text-base mb-8">
              As a trusted Orange County security company, Rapid Response Security Guards focuses on
              reliability, professionalism, and fast response. Licensed through
              the{" "}
              <a
                href="https://www.bsis.ca.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] underline"
              >
                California Bureau of Security and Investigative Services
              </a>
              .
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {whyChooseUs.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-sm text-[var(--color-text)]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICE AREAS
      ═══════════════════════════════════════════ */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
              Our Service Areas Across Southern California
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-muted)] font-light">
              Professional security services available throughout major
              California counties.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className="card-hover bg-white rounded-xl overflow-hidden border border-gray-100"
              >
                <div className="relative h-48">
                  <Image
                    src={area.image}
                    alt={area.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-lg font-semibold text-white">
                    {area.name}
                  </h3>
                </div>
                <div className="p-4">
                  <p className="text-sm text-[var(--color-text-muted)] font-light leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          MAP — SERVICE COVERAGE
      ═══════════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
              Security Guard Services Across Orange County and Surrounding Areas
            </h2>
            <p className="mt-3 text-base text-[var(--color-text-muted)] font-light">
              Rapid Response Security Guards provides professional security guard services across
              Irvine, Orange County, and surrounding areas, including Los
              Angeles County, Riverside County, San Diego County, San Bernardino
              County, and Sacramento County. Whether you need mobile patrol,
              fire watch, event security, or on-site guards, our team delivers
              fast, reliable coverage across Southern California.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=2050%20W%20Chapman%20Ave%20Ste%20277%2C%20Orange%2C%20CA%2092868&t=m&z=9&output=embed&iwloc=near"
              title="2050 W Chapman Ave Ste 277, Orange, CA 92868"
              aria-label="2050 W Chapman Ave Ste 277, Orange, CA 92868"
              loading="lazy"
              className="w-full h-[400px] border-0"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════ */}
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text)]">
                Frequently Asked Questions About Our Security Services
              </h2>
              <p className="mt-3 text-base text-[var(--color-text-muted)] font-light">
                Everything you need to know before hiring a security guard in
                Orange and across Southern California.
              </p>
            </div>

            <div className="divide-y divide-gray-100">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <span className="text-base font-medium text-[var(--color-text)] pr-4">
                      {faq.q}
                    </span>
                    <span className="text-[var(--color-primary)] text-xl flex-shrink-0 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-[var(--color-text-muted)] font-light leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>

            <div className="mt-10 text-center">
              <h4 className="text-lg font-semibold text-[var(--color-text)] mb-2">
                Still have questions?
              </h4>
              <p className="text-sm text-[var(--color-text-muted)] mb-4">
                Our team is ready to help you find the right security solution.
              </p>
              <a href="#contact" className="btn btn-primary">
                Get a Free Quote Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════════ */}
      <section id="contact" className="section bg-[var(--color-dark)]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                Get in Touch
              </h2>
              <p className="text-base text-gray-300 font-light leading-relaxed mb-8">
                Ready to secure your property? Contact Rapid Response Security
                Guards today for a free, no-obligation quote. Our team is
                available 24/7 to discuss your security needs.
              </p>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Phone</p>
                    <a href="tel:19499928491" className="text-base text-gray-300 hover:text-[var(--color-primary)] transition-colors">
                      (949) 992-8491
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Email</p>
                    <a href="mailto:info@rrsecurityguards.com" className="text-base text-gray-300 hover:text-[var(--color-primary)] transition-colors">
                      info@rrsecurityguards.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-primary)]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Address</p>
                    <p className="text-base text-gray-300">
                      2050 W Chapman Ave Ste 277<br />Orange, CA 92868
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white mb-5">
                Request a Free Security Quote
              </h3>
              <HeroForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
