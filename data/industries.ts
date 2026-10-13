/**
 * data/industries.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * All industry/vertical page data for Rapid Response Security Guards.
 */

import type { IndustrySlug } from "@/lib/routes";

export interface IndustryData {
  slug: IndustrySlug;
  title: string;
  shortTitle: string; // Used in nav dropdowns / hub cards
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  image: string;
  icon: string; // emoji icon for hub cards
  challenges: { heading: string; body: string }[];
  solutions: { service: string; description: string }[];
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaSubtitle: string;
}

export const INDUSTRIES: IndustryData[] = [
  {
    slug: "construction",
    title: "Construction Site Security",
    shortTitle: "Construction",
    h1: "Security Guard Services for Construction Sites in Southern California",
    metaTitle: "Construction Site Security Services | Rapid Response Security Guards",
    metaDescription:
      "Protect your construction site from theft, vandalism, and unauthorized access. Licensed construction security guards and fire watch services across California.",
    heroTagline:
      "Specialized security for general contractors, developers, and project owners — protecting equipment, materials, and crews at every phase of construction.",
    image: `/images/services/construction-security.webp`,
    icon: "🏗️",
    challenges: [
      {
        heading: "Equipment & Material Theft",
        body: "Construction sites lose millions annually to theft of tools, copper wire, and materials. A visible security presence dramatically reduces this risk.",
      },
      {
        heading: "After-Hours Vulnerability",
        body: "Sites are most at risk overnight and on weekends. Our guards provide continuous coverage when no workers are on-site.",
      },
      {
        heading: "Trespasser Liability",
        body: "Unauthorized persons on active construction sites create serious injury liability. Controlled access points prevent unauthorized entry.",
      },
      {
        heading: "Fire & Safety Compliance",
        body: "Hot work operations and impaired fire systems require certified fire watch guards to maintain OSHA compliance.",
      },
    ],
    solutions: [
      {
        service: "Construction Site Security Guards",
        description:
          "On-site armed or unarmed guards controlling access and patrolling the perimeter 24/7.",
      },
      {
        service: "Fire Watch Services",
        description:
          "OSHA-compliant fire watch monitoring for hot work, sprinkler outages, and fire alarm impairments.",
      },
      {
        service: "Mobile Patrol",
        description:
          "GPS-tracked patrol vehicles making regular stops at your site for cost-effective overnight coverage.",
      },
    ],
    faqs: [
      {
        q: "How quickly can you deploy to a construction site?",
        a: "We can typically have guards on-site within 24 hours, and fire watch officers even faster. Call us to discuss your timeline.",
      },
      {
        q: "Do you provide security for small residential builds?",
        a: "Yes. We work with projects of all sizes, from single-home builds to large-scale commercial developments.",
      },
    ],
    ctaHeading: "Protect Your Construction Project",
    ctaSubtitle:
      "Get a custom security plan for your construction site — we serve projects throughout California.",
  },
  {
    slug: "retail",
    title: "Retail Security",
    shortTitle: "Retail",
    h1: "Retail Security Guard Services in Southern California",
    metaTitle: "Retail Security Services | Rapid Response Security Guards",
    metaDescription:
      "Loss prevention and retail security guards for stores, shopping centers, and malls across California. Reduce shrink and deter shoplifting with professional security.",
    heroTagline:
      "Protecting your merchandise, employees, and customers — with loss prevention specialists and uniformed security tailored to the retail environment.",
    image: `/images/services/commercial-security.webp`,
    icon: "🛍️",
    challenges: [
      {
        heading: "Shoplifting & Organized Retail Crime",
        body: "Retail theft costs US businesses over $100 billion annually. Visible LP officers are the most effective deterrent available.",
      },
      {
        heading: "Employee Safety",
        body: "Retail employees face elevated risk of confrontation and robbery. A security presence protects staff and deters aggressive behavior.",
      },
      {
        heading: "Inventory Shrink",
        body: "Internal and external theft erodes your margins. Our loss prevention officers are trained to detect and document theft from all sources.",
      },
      {
        heading: "Customer Experience",
        body: "Security should deter criminals without alienating legitimate customers. Our officers are trained to maintain a professional, welcoming presence.",
      },
    ],
    solutions: [
      {
        service: "Loss Prevention Officers",
        description:
          "Uniformed and plainclothes LP specialists trained in retail theft detection and lawful apprehension.",
      },
      {
        service: "Uniformed Security Guards",
        description:
          "Visible security presence at entry points, high-value display areas, and parking lots.",
      },
      {
        service: "Mobile Patrol",
        description:
          "After-hours patrol coverage for store exteriors, parking lots, and loading docks.",
      },
    ],
    faqs: [
      {
        q: "Do you offer plainclothes loss prevention officers?",
        a: "Yes. Plainclothes LP officers are highly effective at catching organized retail crime and internal theft that uniformed guards cannot easily detect.",
      },
      {
        q: "Can you provide security for pop-up events and seasonal retail?",
        a: "Absolutely. We offer flexible short-term security coverage for temporary retail locations, seasonal stores, and pop-up events.",
      },
    ],
    ctaHeading: "Reduce Shrink & Protect Your Store",
    ctaSubtitle:
      "Get a customized retail security plan for your store or shopping center.",
  },
  {
    slug: "healthcare",
    title: "Healthcare Security",
    shortTitle: "Healthcare",
    h1: "Healthcare Security Guard Services in Southern California",
    metaTitle: "Healthcare Security Services | Rapid Response Security Guards",
    metaDescription:
      "Specialized security guard services for hospitals, clinics, medical offices, and healthcare facilities across California. Patient safety, access control, and workplace violence prevention.",
    heroTagline:
      "Protecting patients, staff, and sensitive medical environments with professionally trained healthcare security officers.",
    image: `/images/services/unarmed-security.webp`,
    icon: "🏥",
    challenges: [
      {
        heading: "Workplace Violence Prevention",
        body: "Healthcare workers face among the highest rates of workplace violence of any profession. Trained security officers provide deterrence and rapid response.",
      },
      {
        heading: "Access Control",
        body: "Controlling who enters patient areas, pharmacies, and sensitive zones is critical for patient safety and regulatory compliance.",
      },
      {
        heading: "Sensitive Environment",
        body: "Healthcare security requires officers trained to de-escalate and respond to distressed individuals — patients, families, and visitors — with empathy and professionalism.",
      },
      {
        heading: "24/7 Coverage",
        body: "Medical facilities operate around the clock and require consistent security coverage at all hours.",
      },
    ],
    solutions: [
      {
        service: "Unarmed Healthcare Security Guards",
        description:
          "De-escalation trained officers providing access control and patient safety monitoring.",
      },
      {
        service: "Armed Security (if required)",
        description:
          "Armed officers for emergency departments, pharmacies, and high-risk areas where an elevated deterrent is warranted.",
      },
      {
        service: "Mobile Patrol",
        description:
          "Exterior and parking lot patrol for healthcare campuses.",
      },
    ],
    faqs: [
      {
        q: "Are your healthcare security guards trained in de-escalation?",
        a: "Yes. All our guards receive de-escalation training, and those assigned to healthcare environments receive additional training on working with distressed patients and families.",
      },
      {
        q: "Can you provide security for outpatient clinics and medical offices?",
        a: "Yes. We serve all types of healthcare facilities — from large hospitals to small private practices.",
      },
    ],
    ctaHeading: "Protect Your Healthcare Facility",
    ctaSubtitle:
      "Get a healthcare security assessment and custom plan for your facility.",
  },
  {
    slug: "hospitality-hotels",
    title: "Hotel & Hospitality Security",
    shortTitle: "Hotels & Hospitality",
    h1: "Hotel & Hospitality Security Services in Southern California",
    metaTitle: "Hotel Security Services | Rapid Response Security Guards",
    metaDescription:
      "Professional hotel and hospitality security guards for hotels, resorts, event venues, and restaurants across California. Guest safety, loss prevention, and access control.",
    heroTagline:
      "Ensuring your guests feel safe and welcome — with security that's professional, discreet, and aligned with your brand.",
    image: `/images/services/event-security.webp`,
    icon: "🏨",
    challenges: [
      {
        heading: "Guest Safety & Comfort",
        body: "Guests expect to feel safe without feeling like they're in a fortress. Hospitality security requires officers with exceptional customer service skills.",
      },
      {
        heading: "Trespassing & Unauthorized Access",
        body: "Hotels and venues attract non-guests seeking access to amenities, parking, or guests. Professional security maintains order without creating confrontations.",
      },
      {
        heading: "Event & Conference Security",
        body: "Hotels hosting conferences, weddings, and large events require dedicated security teams for crowd management and access control.",
      },
      {
        heading: "Parking & Property Security",
        body: "Hotel parking areas and exterior spaces are common targets for vehicle break-ins and theft.",
      },
    ],
    solutions: [
      {
        service: "Lobby & Property Security",
        description:
          "Uniformed officers providing visible security presence throughout your property.",
      },
      {
        service: "Event Security",
        description:
          "Dedicated security teams for hotel-hosted events, conferences, and banquets.",
      },
      {
        service: "Mobile Patrol",
        description:
          "Parking lot patrol and exterior property monitoring throughout the night.",
      },
    ],
    faqs: [
      {
        q: "Do your hospitality security guards have customer service training?",
        a: "Yes. Officers assigned to hotel and hospitality environments are specifically selected and trained for their customer service skills alongside their security capabilities.",
      },
      {
        q: "Can you provide security for hotel-hosted events?",
        a: "Absolutely. We offer dedicated event security teams for weddings, conferences, galas, and any large gathering at your property.",
      },
    ],
    ctaHeading: "Secure Your Hotel or Venue",
    ctaSubtitle:
      "Talk to our team about a security plan that protects your guests and your brand.",
  },
  {
    slug: "residential-hoa",
    title: "HOA & Residential Community Security",
    shortTitle: "Residential & HOA",
    h1: "HOA & Residential Community Security in Southern California",
    metaTitle: "HOA & Residential Community Security | Rapid Response Security Guards",
    metaDescription:
      "Professional security guards for HOAs, gated communities, apartment complexes, and residential neighborhoods across California. Access control, patrol, and community safety.",
    heroTagline:
      "Making your community a safer, more welcoming place to live — with security solutions built for HOAs, gated communities, and apartment complexes.",
    image: `/images/services/residential-security.webp`,
    icon: "🏘️",
    challenges: [
      {
        heading: "Access Control",
        body: "Gated communities and controlled-access buildings need consistent, professional enforcement of entry rules to protect residents.",
      },
      {
        heading: "After-Hours Activity",
        body: "Noise complaints, trespassing, and property crime often occur in the evening. Regular patrols deter and quickly address these issues.",
      },
      {
        heading: "Community Rules Enforcement",
        body: "HOA rules around parking, guests, and common areas require a visible authority presence to be consistently upheld.",
      },
      {
        heading: "Resident Peace of Mind",
        body: "Residents pay a premium to live in managed communities — professional security is a key part of what they're paying for.",
      },
    ],
    solutions: [
      {
        service: "Gate Access Control",
        description:
          "Officers managing vehicle and pedestrian entry at community gates.",
      },
      {
        service: "Community Patrol",
        description:
          "Regular patrol of streets, parking areas, and common spaces throughout your community.",
      },
      {
        service: "Mobile Patrol",
        description:
          "Cost-effective drive-through patrol for communities that don't require a full-time on-site guard.",
      },
    ],
    faqs: [
      {
        q: "Do you work directly with HOA boards?",
        a: "Yes. We work with HOA boards, management companies, and property managers to align security services with your community's specific rules and priorities.",
      },
      {
        q: "Can a security guard enforce HOA parking rules?",
        a: "Guards can monitor and document parking violations for HOA management action. They can contact towing services if authorized by the HOA.",
      },
    ],
    ctaHeading: "Secure Your Community",
    ctaSubtitle:
      "Get a community security assessment and custom plan for your HOA or residential complex.",
  },
  {
    slug: "warehouses-logistics",
    title: "Warehouse & Logistics Security",
    shortTitle: "Warehouses & Logistics",
    h1: "Warehouse & Logistics Security Services in Southern California",
    metaTitle: "Warehouse Security Services | Rapid Response Security Guards",
    metaDescription:
      "Armed and unarmed security guards for warehouses, distribution centers, and logistics facilities across California. Access control, inventory protection, and 24/7 coverage.",
    heroTagline:
      "Protecting your inventory, equipment, and operations with security solutions designed for the unique demands of warehousing and logistics.",
    image: `/images/services/commercial-security.webp`,
    icon: "🏭",
    challenges: [
      {
        heading: "High-Value Inventory",
        body: "Warehouses store millions in goods that are attractive targets for organized cargo theft and internal shrink.",
      },
      {
        heading: "Large Perimeters",
        body: "Distribution centers and industrial facilities have large footprints that require mobile patrol or multiple guard posts.",
      },
      {
        heading: "Employee Access Management",
        body: "Controlling who can access which areas of a facility is essential for both security and compliance.",
      },
      {
        heading: "Overnight & Weekend Coverage",
        body: "Warehouses are most vulnerable when staffing is reduced. Continuous security coverage fills this gap.",
      },
    ],
    solutions: [
      {
        service: "Access Control Officers",
        description:
          "Guards managing entry points, verifying credentials, and logging all authorized personnel and vehicle movements.",
      },
      {
        service: "Armed Security",
        description:
          "Armed officers for high-value inventory facilities, cash-handling areas, and elevated-risk environments.",
      },
      {
        service: "Mobile Patrol",
        description:
          "GPS-tracked vehicle patrol covering large facility perimeters on a regular schedule.",
      },
    ],
    faqs: [
      {
        q: "Do you provide security for 3PL and fulfillment centers?",
        a: "Yes. We serve third-party logistics providers, fulfillment centers, and cold storage facilities throughout California.",
      },
      {
        q: "Can guards monitor loading docks and truck entry?",
        a: "Absolutely. Dock monitoring and truck driver credentialing is a common deployment for our warehouse security teams.",
      },
    ],
    ctaHeading: "Protect Your Warehouse & Operations",
    ctaSubtitle:
      "Get a custom security plan for your warehouse, distribution center, or logistics facility.",
  },
  {
    slug: "office-buildings",
    title: "Office Building Security",
    shortTitle: "Office Buildings",
    h1: "Office Building Security Services in Southern California",
    metaTitle: "Office Building Security | Rapid Response Security Guards",
    metaDescription:
      "Professional security guards for office buildings, corporate campuses, and commercial properties across California. Access control, lobby security, and after-hours patrol.",
    heroTagline:
      "Creating safe, secure work environments for employees, tenants, and visitors with professional commercial building security.",
    image: `/images/services/unarmed-security.webp`,
    icon: "🏢",
    challenges: [
      {
        heading: "Lobby & Visitor Management",
        body: "Office buildings receive hundreds of visitors daily. Professional access control ensures only authorized individuals enter tenant spaces.",
      },
      {
        heading: "After-Hours Security",
        body: "Buildings are vulnerable after business hours when cleaning crews, contractors, and others have access.",
      },
      {
        heading: "Parking Structure Safety",
        body: "Covered parking structures are common sites for vehicle break-ins, vandalism, and personal safety incidents.",
      },
      {
        heading: "Multi-Tenant Coordination",
        body: "Multi-tenant buildings require security that serves all occupants professionally and enforces building-wide access policies.",
      },
    ],
    solutions: [
      {
        service: "Lobby Security & Concierge",
        description:
          "Professional officers managing building entry, visitor registration, and tenant communications.",
      },
      {
        service: "After-Hours Security",
        description:
          "On-site officers monitoring building access and conducting interior patrols during non-business hours.",
      },
      {
        service: "Parking Patrol",
        description:
          "Mobile or on-foot patrol of parking structures and surface lots.",
      },
    ],
    faqs: [
      {
        q: "Do you work with commercial property managers and REITs?",
        a: "Yes. We partner with property management companies and commercial real estate owners to provide consistent security across their portfolios.",
      },
      {
        q: "Can your guards manage visitor badge systems?",
        a: "Yes. Our officers can operate electronic visitor management systems, issue temporary badges, and maintain visitor logs.",
      },
    ],
    ctaHeading: "Secure Your Building or Campus",
    ctaSubtitle:
      "Get a custom security plan for your office building or commercial property.",
  },
  {
    slug: "religious-institutions",
    title: "Religious Institution Security",
    shortTitle: "Religious Institutions",
    h1: "Security Guard Services for Religious Institutions in Southern California",
    metaTitle: "Church & Religious Institution Security | Rapid Response Security Guards",
    metaDescription:
      "Welcoming, professional security for churches, mosques, synagogues, temples, and other houses of worship across California. Congregation safety and property protection.",
    heroTagline:
      "Protecting your congregation and property with security that respects the sacred nature of your space — professional, discreet, and community-focused.",
    image: `/images/services/event-security.webp`,
    icon: "⛪",
    challenges: [
      {
        heading: "Congregation Safety",
        body: "Houses of worship are increasingly targeted by hate crimes and violent incidents. A professional security presence provides deterrence and rapid response capability.",
      },
      {
        heading: "Large Gatherings",
        body: "Services, holidays, and special events can draw large crowds that require crowd management and entry monitoring.",
      },
      {
        heading: "Property Protection",
        body: "Religious properties face risks of vandalism, theft, and trespassing — especially during non-service hours.",
      },
      {
        heading: "Sensitivity & Inclusivity",
        body: "Security at a house of worship must be welcoming and non-intimidating. Our officers are specifically trained for this environment.",
      },
    ],
    solutions: [
      {
        service: "Congregation & Service Security",
        description:
          "Officers providing a visible, welcoming security presence during services and events.",
      },
      {
        service: "Parking Lot & Perimeter Patrol",
        description:
          "Monitoring the exterior of your property before, during, and after services.",
      },
      {
        service: "After-Hours Mobile Patrol",
        description:
          "Regular drive-by patrol of your property during non-service hours to deter vandalism and break-ins.",
      },
    ],
    faqs: [
      {
        q: "Are your officers trained to work in a house of worship environment?",
        a: "Yes. Officers assigned to religious institutions receive specific guidance on respecting the environment, welcoming all congregants, and maintaining a presence that feels protective without being intimidating.",
      },
      {
        q: "Can you provide security for special religious events?",
        a: "Absolutely. We provide temporary security for high-attendance services, holiday observances, and special community events.",
      },
      {
        q: "Do you offer armed security for houses of worship?",
        a: "Yes. We offer armed security for religious institutions that have determined a higher level of protection is necessary, including plainclothes armed officers who can blend into the congregation.",
      },
    ],
    ctaHeading: "Protect Your Congregation",
    ctaSubtitle:
      "Talk to our team about a respectful, professional security plan for your house of worship.",
  },
];

/** Quick lookup by slug */
export const INDUSTRY_BY_SLUG = Object.fromEntries(
  INDUSTRIES.map((i) => [i.slug, i])
) as Record<string, IndustryData>;
