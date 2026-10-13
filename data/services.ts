/**
 * data/services.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * All service page data for Rapid Response Security Guards.
 * Each entry drives its dedicated service page, the services hub,
 * and the Header navigation dropdown.
 */

import type { ServiceSlug } from "@/lib/routes";

export interface ServiceData {
  slug: ServiceSlug;
  title: string;
  shortTitle: string; // Used in nav dropdowns / hub cards
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  image: string; // S3/Vercel blob path
  features: string[];
  whyTitle: string;
  whyPoints: { heading: string; body: string }[];
  industries: string[]; // Industries this service applies to
  faqs: { q: string; a: string }[];
  ctaHeading: string;
  ctaSubtitle: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "armed-security",
    title: "Armed Security Guards",
    shortTitle: "Armed Security",
    h1: "Armed Security Guard Services in Southern California",
    metaTitle: "Armed Security Guards | Rapid Response Security Guards",
    metaDescription:
      "Licensed armed security guards available 24/7 across California. Our armed officers provide deterrence, access control, and rapid response for high-risk environments.",
    heroTagline:
      "Professional armed security officers trained to protect your property, personnel, and assets — 24 hours a day, 7 days a week.",
    image: `/images/services/armed-security.webp`,
    features: [
      "24/7 Armed Protection",
      "Advanced Training Certified",
      "Rapid Response Teams",
      "High-Risk Facility Specialists",
      "Uniformed & Plainclothes Options",
      "PPO Licensed — PPO #121228",
    ],
    whyTitle: "Why Choose Armed Security Guards?",
    whyPoints: [
      {
        heading: "Maximum Deterrence",
        body: "A visible armed presence significantly reduces the likelihood of theft, vandalism, and criminal activity on your property.",
      },
      {
        heading: "Rapid Response",
        body: "Our armed officers are trained to respond quickly and decisively to threats, protecting your team and assets in critical situations.",
      },
      {
        heading: "Fully Licensed & Insured",
        body: "All armed guards hold valid California Bureau of Security and Investigative Services (BSIS) firearms permits and undergo rigorous background checks.",
      },
      {
        heading: "Customized Deployments",
        body: "Whether you need a single armed post or a full armed detail, we tailor coverage to your facility's specific threat level.",
      },
    ],
    industries: [
      "Banks & Financial Institutions",
      "Jewelry Stores & High-Value Retail",
      "Healthcare Facilities",
      "Government Buildings",
      "Warehouses & Distribution Centers",
      "Construction Sites",
    ],
    faqs: [
      {
        q: "What credentials do your armed security guards have?",
        a: "All armed guards hold a valid California BSIS Guard Card and an active Firearms Permit (BSIS). They undergo regular firearms qualification, de-escalation training, and a thorough background check before deployment.",
      },
      {
        q: "Can you deploy armed guards on short notice?",
        a: "Yes. In most California locations, we can have armed officers on-site within 24 hours. Contact us to discuss your timeline.",
      },
      {
        q: "Do armed guards wear uniforms?",
        a: "We offer both uniformed and plainclothes armed deployments depending on your security needs and the image you want to project.",
      },
      {
        q: "What types of businesses need armed security?",
        a: "Armed security is recommended for high-value inventory sites, banks, dispensaries, jewelry stores, government facilities, hospitals, and any environment with an elevated security risk.",
      },
    ],
    ctaHeading: "Ready for Armed Security Coverage?",
    ctaSubtitle:
      "Get a free quote for licensed armed security guard services in Southern California.",
  },
  {
    slug: "unarmed-security",
    title: "Unarmed Security Guards",
    shortTitle: "Unarmed Security",
    h1: "Unarmed Security Guard Services in Southern California",
    metaTitle: "Unarmed Security Guards | Rapid Response Security Guards",
    metaDescription:
      "Professional unarmed security guards for businesses, apartment complexes, events, and more across California. Licensed, trained, and customer-service focused.",
    heroTagline:
      "Highly trained unarmed security officers delivering a professional, approachable security presence for your property and people.",
    image: `/images/services/unarmed-security.webp`,
    features: [
      "Professional Appearance & Demeanor",
      "Access Control & Visitor Management",
      "Customer Service Focused",
      "Detailed Incident Reporting",
      "Patrol & Surveillance",
      "Flexible Scheduling",
    ],
    whyTitle: "Why Choose Unarmed Security Guards?",
    whyPoints: [
      {
        heading: "Professional & Approachable",
        body: "Our unarmed officers project authority and professionalism while remaining approachable to tenants, customers, and guests.",
      },
      {
        heading: "Cost-Effective Protection",
        body: "Unarmed security provides a highly effective deterrent and response capability at a lower cost than armed deployments — ideal for most commercial environments.",
      },
      {
        heading: "Trained in De-escalation",
        body: "Officers are trained in conflict resolution and de-escalation techniques to handle incidents calmly and effectively.",
      },
      {
        heading: "Detailed Reporting",
        body: "Every shift includes professional incident reports, keeping you fully informed about activity on your property.",
      },
    ],
    industries: [
      "Retail & Shopping Centers",
      "Office Buildings",
      "Apartment Complexes & HOAs",
      "Hotels & Hospitality",
      "Schools & Universities",
      "Corporate Campuses",
    ],
    faqs: [
      {
        q: "What is the difference between armed and unarmed security?",
        a: "Armed guards carry a firearm and are suited for high-risk environments. Unarmed guards provide a strong deterrent and professional presence without a firearm, and are ideal for most commercial, residential, and event settings.",
      },
      {
        q: "Are your unarmed guards licensed?",
        a: "Yes. All unarmed guards hold a valid California BSIS Guard Card and receive ongoing training in access control, emergency procedures, and customer service.",
      },
      {
        q: "Can I request specific uniform styles?",
        a: "Yes. We offer standard security uniforms, business casual attire, and custom uniforms to match your brand or facility requirements.",
      },
    ],
    ctaHeading: "Get Unarmed Security Coverage Today",
    ctaSubtitle:
      "Request a free quote for professional unarmed security guards in Southern California.",
  },
  {
    slug: "mobile-patrol",
    title: "Mobile Patrol Security",
    shortTitle: "Mobile Patrol",
    h1: "Mobile Patrol Security Services in Southern California",
    metaTitle: "Mobile Patrol Security | Rapid Response Security Guards",
    metaDescription:
      "GPS-tracked mobile patrol security across California. Cost-effective multi-location coverage with detailed patrol reports for businesses, communities, and construction sites.",
    heroTagline:
      "GPS-tracked mobile patrol units covering your property around the clock — providing a visible, unpredictable deterrent that stationary guards cannot.",
    image: `/images/services/mobile-patrol.webp`,
    features: [
      "GPS-Tracked Patrol Vehicles",
      "Multi-Location Coverage",
      "Random Patrol Patterns",
      "Detailed Digital Reports",
      "Drive-By & On-Site Patrol Options",
      "24/7 Availability",
    ],
    whyTitle: "Why Mobile Patrol?",
    whyPoints: [
      {
        heading: "Cost-Effective Multi-Site Coverage",
        body: "One mobile unit can cover multiple properties at a fraction of the cost of stationary guards at each location.",
      },
      {
        heading: "Unpredictable Deterrence",
        body: "Random patrol patterns make it impossible for criminals to predict when a security officer will be present — dramatically reducing risk.",
      },
      {
        heading: "GPS-Verified Patrols",
        body: "Every patrol is GPS-tracked and time-stamped. You receive digital reports confirming guard activity at your property.",
      },
      {
        heading: "Rapid Incident Response",
        body: "Mobile units can respond immediately to alarms or reports of suspicious activity across all your covered locations.",
      },
    ],
    industries: [
      "Commercial Properties",
      "HOAs & Residential Communities",
      "Construction Sites",
      "Parking Lots & Structures",
      "Industrial Facilities",
      "Retail Centers",
    ],
    faqs: [
      {
        q: "How does mobile patrol differ from a stationary guard?",
        a: "Mobile patrol officers drive marked security vehicles and make regular stops at your property throughout the night or day. This provides broad coverage across a larger area, making it ideal for properties that don't require a full-time on-site guard.",
      },
      {
        q: "Can mobile patrol cover multiple properties?",
        a: "Yes. That's one of mobile patrol's greatest advantages. A single unit can service several properties in close proximity on a rotating schedule.",
      },
      {
        q: "Do you provide patrol reports?",
        a: "Absolutely. After each patrol, you receive a detailed digital report including timestamps, GPS data, observations, and any incidents noted.",
      },
    ],
    ctaHeading: "Start Mobile Patrol Coverage Today",
    ctaSubtitle:
      "Flexible, GPS-verified mobile patrol services for single or multiple locations across California.",
  },
  {
    slug: "fire-watch",
    title: "Fire Watch Services",
    shortTitle: "Fire Watch",
    h1: "Fire Watch Security Services in Southern California",
    metaTitle: "Fire Watch Services | Rapid Response Security Guards",
    metaDescription:
      "OSHA-compliant fire watch services available 24/7 across California. Our trained fire watch guards monitor for fire hazards during sprinkler outages, hot work, and construction.",
    heroTagline:
      "24/7 fire watch coverage keeping your property compliant and your people safe — rapidly deployed whenever your fire suppression system is offline.",
    image: `/images/services/fire-watch.webp`,
    features: [
      "OSHA & NFPA Compliance",
      "Hot Work Monitoring",
      "Construction Site Specialists",
      "Emergency Response Ready",
      "Rapid Deployment — Often Same Day",
      "Detailed Watch Logs & Reports",
    ],
    whyTitle: "When Is Fire Watch Required?",
    whyPoints: [
      {
        heading: "Sprinkler System Outages",
        body: "When your fire suppression system is impaired for any reason — maintenance, repairs, or damage — fire watch is typically required by local codes and OSHA regulations.",
      },
      {
        heading: "Hot Work Operations",
        body: "Welding, cutting, grinding, and other hot work activities require fire watch monitoring to catch sparks and smoldering materials before they ignite.",
      },
      {
        heading: "Construction Sites",
        body: "Active construction projects often require continuous fire watch to comply with building department requirements and insurance policies.",
      },
      {
        heading: "Alarm System Failures",
        body: "If your fire alarm is compromised, fire watch provides a human presence to continuously monitor for signs of fire and alert occupants.",
      },
    ],
    industries: [
      "Construction Sites",
      "Commercial Buildings",
      "Industrial & Manufacturing",
      "Hospitals & Healthcare",
      "Hotels & Multi-Family Residential",
      "Warehouses",
    ],
    faqs: [
      {
        q: "How fast can you deploy a fire watch guard?",
        a: "In most cases, we can have a fire watch guard on-site within a few hours of your call. We understand fire watch situations are often urgent — rapid deployment is our priority.",
      },
      {
        q: "What does a fire watch guard actually do?",
        a: "Fire watch guards continuously patrol the affected area, looking for signs of fire, smoke, or hazardous conditions. They maintain a written log of all patrols and are trained to sound alarms and coordinate evacuation if needed.",
      },
      {
        q: "How long does fire watch last?",
        a: "Fire watch continues until your fire suppression or alarm system is fully restored and certified by the appropriate authority. This could be hours, days, or longer depending on the repair timeline.",
      },
    ],
    ctaHeading: "Need Fire Watch Coverage Now?",
    ctaSubtitle:
      "We offer rapid deployment fire watch services 24/7 across California. Call us for immediate assistance.",
  },
  {
    slug: "construction-security",
    title: "Construction Site Security",
    shortTitle: "Construction Security",
    h1: "Construction Site Security Services in Southern California",
    metaTitle: "Construction Site Security | Rapid Response Security Guards",
    metaDescription:
      "Protect your construction site from theft, vandalism, and unauthorized access. Licensed construction site security guards available 24/7 across California.",
    heroTagline:
      "Protecting your equipment, materials, and crew around the clock — deterring theft and vandalism before they cost you downtime.",
    image: `/images/services/construction-security.webp`,
    features: [
      "Equipment & Material Protection",
      "Perimeter Security & Access Control",
      "Theft & Vandalism Prevention",
      "After-Hours & Weekend Coverage",
      "Fire Watch Integration",
      "Detailed Incident Reporting",
    ],
    whyTitle: "Why Construction Sites Need Dedicated Security",
    whyPoints: [
      {
        heading: "Protect Expensive Equipment",
        body: "Construction sites hold tens of thousands of dollars in tools, equipment, and materials. A security presence prevents opportunistic theft that can cause costly project delays.",
      },
      {
        heading: "After-Hours Vulnerability",
        body: "The highest-risk period for construction sites is overnight and on weekends when no workers are present. Our guards fill that gap.",
      },
      {
        heading: "Liability & Safety",
        body: "Unauthorized persons on a construction site create serious liability exposure. Security guards control access and keep trespassers out.",
      },
      {
        heading: "Insurance Compliance",
        body: "Many construction insurance policies require on-site security for coverage to remain valid. We can provide documentation of guard activity for your insurer.",
      },
    ],
    industries: [
      "General Contractors",
      "Real Estate Developers",
      "Infrastructure Projects",
      "Commercial Construction",
      "Residential Development",
      "Demolition Sites",
    ],
    faqs: [
      {
        q: "Do you provide security for small residential construction projects?",
        a: "Yes. We scale our services to fit projects of all sizes, from small residential builds to large commercial developments.",
      },
      {
        q: "Can you combine construction security with fire watch?",
        a: "Absolutely. We frequently provide combined construction security and fire watch coverage, which can be more cost-effective than two separate contracts.",
      },
      {
        q: "What hours do construction site guards work?",
        a: "We offer flexible scheduling — overnight only, weekend only, or 24/7 continuous coverage — based on your project's needs.",
      },
    ],
    ctaHeading: "Protect Your Construction Site",
    ctaSubtitle:
      "Get a custom security plan for your project — we serve construction sites throughout California.",
  },
  {
    slug: "event-security",
    title: "Event Security Services",
    shortTitle: "Event Security",
    h1: "Event Security Services in Southern California",
    metaTitle: "Event Security Services | Rapid Response Security Guards",
    metaDescription:
      "Professional event security guards for concerts, corporate events, private parties, and festivals across California. Crowd management, entry control, and VIP protection.",
    heroTagline:
      "From intimate private parties to large-scale concerts — our event security team ensures every guest feels safe while your event runs without incident.",
    image: `/images/services/event-security.webp`,
    features: [
      "Crowd Management",
      "Entry Control & ID Verification",
      "VIP & Guest Protection",
      "Emergency Coordination",
      "Licensed Uniformed Guards",
      "Flexible Team Sizing",
    ],
    whyTitle: "What Our Event Security Teams Handle",
    whyPoints: [
      {
        heading: "Entry Control",
        body: "Trained officers manage guest flow, verify credentials, and prevent unauthorized entry — keeping your event safe from the moment doors open.",
      },
      {
        heading: "Crowd Management",
        body: "Our guards are trained in crowd dynamics and de-escalation, ready to prevent and respond to disturbances before they escalate.",
      },
      {
        heading: "VIP Protection",
        body: "Discreet close protection for speakers, performers, executives, or other high-profile guests attending your event.",
      },
      {
        heading: "Emergency Coordination",
        body: "In the event of a medical emergency, evacuation, or security incident, our team coordinates directly with first responders to ensure a rapid, organized response.",
      },
    ],
    industries: [
      "Concerts & Music Festivals",
      "Corporate Events & Conferences",
      "Private Parties & Celebrations",
      "Sporting Events",
      "Religious Gatherings",
      "Nightclubs & Venues",
    ],
    faqs: [
      {
        q: "How many security guards do I need for my event?",
        a: "The number depends on your expected attendance, venue size, alcohol service, and risk factors. We assess your event and recommend the appropriate team size and deployment plan.",
      },
      {
        q: "Do you provide event security on short notice?",
        a: "We do our best to accommodate last-minute requests. Contact us as early as possible for the best availability, especially for larger events.",
      },
      {
        q: "Can you provide armed event security?",
        a: "Yes. For high-profile events or high-risk environments, we can provide armed event security guards in addition to unarmed officers.",
      },
    ],
    ctaHeading: "Secure Your Next Event",
    ctaSubtitle:
      "Tell us about your event and we'll build a security plan that fits your venue, guest count, and budget.",
  },
  {
    slug: "executive-protection",
    title: "Executive Protection",
    shortTitle: "Executive Protection",
    h1: "Executive Protection Services in Southern California",
    metaTitle: "Executive Protection | Rapid Response Security Guards",
    metaDescription:
      "Discreet executive protection and personal security for VIPs, executives, and high-profile individuals across California. Secure transportation, threat assessment, and close protection.",
    heroTagline:
      "Discreet, professional close protection for executives, VIPs, and high-profile individuals — ensuring your safety without disrupting your day.",
    image: `/images/services/executive-protection.webp`,
    features: [
      "Close Protection Officers (CPO)",
      "Discreet, Low-Profile Coverage",
      "Secure Transportation & Escorts",
      "Threat Detection & Risk Assessment",
      "Advance Route Planning",
      "24/7 Protection Available",
    ],
    whyTitle: "Our Executive Protection Approach",
    whyPoints: [
      {
        heading: "Threat Assessment",
        body: "Before deployment, our team conducts a thorough threat and vulnerability assessment to understand your risk profile and design an appropriate protection plan.",
      },
      {
        heading: "Trained CPOs",
        body: "Our close protection officers have backgrounds in law enforcement, military, and private security — bringing real-world experience to every assignment.",
      },
      {
        heading: "Discreet Presence",
        body: "We understand that visibility matters. Our CPOs operate at whatever profile suits your needs — from low-visibility business attire to formal security details.",
      },
      {
        heading: "Secure Transportation",
        body: "We coordinate and escort your travel, assessing routes in advance and adapting in real time to changing conditions.",
      },
    ],
    industries: [
      "Corporate Executives & C-Suite",
      "Entertainment & Media Personalities",
      "Political Figures & Dignitaries",
      "High-Net-Worth Individuals",
      "Tech & Startup Leadership",
      "International Business Travelers",
    ],
    faqs: [
      {
        q: "What qualifications do your executive protection officers have?",
        a: "Our CPOs hold California BSIS Guard Cards, many hold firearms permits, and have backgrounds in law enforcement, military special operations, or professional protection services.",
      },
      {
        q: "Is executive protection only for celebrities?",
        a: "Not at all. Executive protection is for anyone who faces elevated personal risk — including corporate executives, tech leaders, public figures, family members of high-profile individuals, and international travelers.",
      },
      {
        q: "Do you offer short-term executive protection?",
        a: "Yes. We provide protection for specific events, trips, or periods of elevated risk as well as ongoing long-term assignments.",
      },
    ],
    ctaHeading: "Protect What Matters Most",
    ctaSubtitle:
      "Discuss your executive protection needs with our team. All consultations are confidential.",
  },
  {
    slug: "residential-security",
    title: "Residential Security",
    shortTitle: "Residential Security",
    h1: "Residential Security Services in Southern California",
    metaTitle: "Residential Security Guards | Rapid Response Security Guards",
    metaDescription:
      "Professional residential security guards for gated communities, HOAs, apartment complexes, and private estates across California. Access control, patrol, and concierge security.",
    heroTagline:
      "Keeping your community, complex, or estate safe with professional residential security guards who understand the unique needs of home environments.",
    image: `/images/services/residential-security.webp`,
    features: [
      "Gated Communities & HOAs",
      "Apartment & Condo Complexes",
      "Private Estates & Properties",
      "Neighborhood Patrol Services",
      "Access Control & Guest Management",
      "Concierge-Style Security",
    ],
    whyTitle: "Residential Security Solutions",
    whyPoints: [
      {
        heading: "HOA & Gated Communities",
        body: "Our guards enforce community rules, manage gate access, and patrol common areas — acting as the face of your community's security program.",
      },
      {
        heading: "Apartment & Multi-Family",
        body: "We provide lobby security, parking lot patrol, and incident response for apartment complexes and condominium buildings.",
      },
      {
        heading: "Private Estate Protection",
        body: "For high-value private residences, we offer discreet on-site security and perimeter monitoring tailored to estate environments.",
      },
      {
        heading: "Neighborhood Patrol",
        body: "Mobile patrol units cover residential neighborhoods, providing a visible deterrent and rapid response for entire communities.",
      },
    ],
    industries: [
      "Gated Communities",
      "HOAs & Planned Developments",
      "Apartment & Condo Complexes",
      "Private Estates & Luxury Homes",
      "Mixed-Use Residential Developments",
      "Senior Living Communities",
    ],
    faqs: [
      {
        q: "Do you work with HOA management companies?",
        a: "Yes. We frequently partner with HOA management companies and property managers to provide seamless security services for communities they manage.",
      },
      {
        q: "Can residential security guards enforce HOA rules?",
        a: "Our guards can monitor for rule violations (parking, guest access, noise, etc.) and document incidents for HOA management, though they do not have the authority to issue fines.",
      },
      {
        q: "What is concierge security?",
        a: "Concierge security combines traditional security functions with front-desk guest services — greeting residents and visitors, managing deliveries, and providing a professional building presence.",
      },
    ],
    ctaHeading: "Secure Your Community or Property",
    ctaSubtitle:
      "Get a custom residential security plan for your community, complex, or estate.",
  },
  {
    slug: "loss-prevention",
    title: "Loss Prevention Security",
    shortTitle: "Loss Prevention",
    h1: "Loss Prevention Security Services in Southern California",
    metaTitle: "Loss Prevention Security | Rapid Response Security Guards",
    metaDescription:
      "Expert loss prevention officers for retail stores, shopping centers, and warehouses across California. Reduce shrink, deter shoplifting, and protect your bottom line.",
    heroTagline:
      "Specialized loss prevention officers who reduce retail shrink, deter shoplifting, and protect your inventory without disrupting the customer experience.",
    image: `/images/services/commercial-security.webp`,
    features: [
      "Uniformed & Plainclothes Officers",
      "Shoplifting Deterrence & Apprehension",
      "Inventory Shrink Reduction",
      "CCTV Monitoring Support",
      "Employee Theft Detection",
      "Incident Documentation & Reporting",
    ],
    whyTitle: "How Loss Prevention Protects Your Business",
    whyPoints: [
      {
        heading: "Visible Deterrence",
        body: "Uniformed LP officers at entry points and on the floor significantly reduce opportunistic shoplifting before it happens.",
      },
      {
        heading: "Undercover Operations",
        body: "Plainclothes LP officers blend into your store environment to detect and document organized retail crime and employee theft.",
      },
      {
        heading: "Lawful Apprehension",
        body: "Our LP officers are trained in the legal requirements for detaining and documenting shoplifting incidents — minimizing your liability exposure.",
      },
      {
        heading: "Shrink Analysis",
        body: "We work with your team to identify high-shrink areas and times, deploying resources strategically to have maximum impact.",
      },
    ],
    industries: [
      "Retail Stores",
      "Shopping Centers & Malls",
      "Grocery & Pharmacy Chains",
      "Warehouses & Distribution",
      "Liquor Stores",
      "Electronics & High-Value Retail",
    ],
    faqs: [
      {
        q: "What is the difference between a loss prevention officer and a regular security guard?",
        a: "Loss prevention officers are specifically trained in retail theft detection, shoplifter apprehension, and shrink reduction techniques — going beyond general security duties.",
      },
      {
        q: "Can LP officers make citizen's arrests?",
        a: "Yes. In California, LP officers may detain shoplifters under merchant privilege statutes when specific conditions are met. Our officers are trained on these legal requirements.",
      },
      {
        q: "Do you provide plainclothes loss prevention officers?",
        a: "Yes. Plainclothes officers are highly effective at catching organized retail crime that uniformed presence alone may not deter.",
      },
    ],
    ctaHeading: "Reduce Shrink & Protect Your Bottom Line",
    ctaSubtitle:
      "Talk to our team about a customized loss prevention strategy for your retail environment.",
  },
];

/** Quick lookup by slug */
export const SERVICE_BY_SLUG = Object.fromEntries(
  SERVICES.map((s) => [s.slug, s])
) as Record<string, ServiceData>;
