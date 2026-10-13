/**
 * data/locations.ts
 * ─────────────────────────────────────────────────────────────────────────────
 * All location data for Rapid Response Security Guards.
 * Covers counties and individual cities across California.
 */

export interface CityData {
  slug: string;
  cityName: string;
  county: string;
  countySlug: string;
  state: "CA";
  stateFullName: "California";
  population: string; // approximate
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroTagline: string;
  about: string; // 2-3 sentence city description for local SEO
  landmarks: string[]; // notable locations / neighborhoods
  nearbyAreas: string[]; // neighboring cities
}

export interface CountyData {
  slug: string;
  name: string;
  shortName: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  description: string;
  cities: string[]; // city slugs in this county
  image: string;
}

/* ─────────────────────────────────────────────────────────────────────────── */
/*  COUNTIES                                                                    */
/* ─────────────────────────────────────────────────────────────────────────── */

export const COUNTIES: CountyData[] = [
  {
    slug: "orange-county",
    name: "Orange County",
    shortName: "OC",
    h1: "Security Guard Services in Orange County, CA",
    metaTitle: "Security Guards Orange County | Rapid Response Security Guards",
    metaDescription:
      "Licensed and insured security guard services throughout Orange County, CA. Armed guards, unarmed guards, mobile patrol, fire watch, and event security. PPO #121228.",
    heroTagline:
      "Professional security guard services deployed throughout Orange County — from Irvine to Anaheim, we protect businesses, communities, and events.",
    description:
      "Rapid Response Security Guards serves all cities in Orange County with licensed, background-checked security officers. Whether you need ongoing guard coverage, event security, fire watch, or mobile patrol, our team is ready to deploy quickly across the region.",
    cities: [
      "irvine",
      "anaheim",
      "santa-ana",
      "costa-mesa",
      "huntington-beach",
      "newport-beach",
      "tustin",
      "orange",
      "fullerton",
      "garden-grove",
    ],
    image: `/images/areas/orange-county.webp`,
  },
  {
    slug: "los-angeles-county",
    name: "Los Angeles County",
    shortName: "LA",
    h1: "Security Guard Services in Los Angeles County, CA",
    metaTitle: "Security Guards Los Angeles County | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services throughout Los Angeles County. Armed guards, unarmed guards, mobile patrol, event security, and executive protection. Available 24/7.",
    heroTagline:
      "Serving businesses, communities, and events throughout Los Angeles County with professional, rapid-response security guard services.",
    description:
      "Rapid Response Security Guards provides comprehensive security solutions across Los Angeles County. From downtown Los Angeles to the South Bay, our teams are strategically positioned for rapid deployment to any location in the county.",
    cities: [
      "los-angeles",
      "long-beach",
      "glendale",
      "pasadena",
      "torrance",
      "inglewood",
      "santa-monica",
      "west-hollywood",
    ],
    image: `/images/areas/los-angeles-county.webp`,
  },
  {
    slug: "riverside-county",
    name: "Riverside County",
    shortName: "Riverside",
    h1: "Security Guard Services in Riverside County, CA",
    metaTitle: "Security Guards Riverside County | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services throughout Riverside County, CA. Armed guards, construction site security, fire watch, and mobile patrol in Riverside, Corona, Temecula, and more.",
    heroTagline:
      "Rapid Response Security Guards covers the full span of Riverside County — from the Inland Empire to the Coachella Valley.",
    description:
      "Our security teams serve Riverside County businesses, construction sites, events, and communities with the same level of professionalism and rapid response capability available throughout Southern California.",
    cities: ["riverside", "corona", "moreno-valley", "temecula", "murrieta"],
    image: `/images/areas/riverside-county.webp`,
  },
  {
    slug: "san-diego-county",
    name: "San Diego County",
    shortName: "San Diego",
    h1: "Security Guard Services in San Diego County, CA",
    metaTitle: "Security Guards San Diego | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in San Diego County. Armed guards, event security, construction site protection, and mobile patrol in San Diego, Chula Vista, Oceanside, and more.",
    heroTagline:
      "Protecting San Diego County businesses, construction projects, and events with professional, California-licensed security guard services.",
    description:
      "Rapid Response Security Guards extends its licensed security services throughout San Diego County, bringing the same rapid deployment capability and professional standards to Southern California's second-largest metro area.",
    cities: ["san-diego", "chula-vista", "oceanside", "escondido", "carlsbad"],
    image: `/images/areas/san-diego-county.webp`,
  },
  {
    slug: "san-bernardino-county",
    name: "San Bernardino County",
    shortName: "San Bernardino",
    h1: "Security Guard Services in San Bernardino County, CA",
    metaTitle: "Security Guards San Bernardino County | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services throughout San Bernardino County. Armed guards, warehouse security, construction site security, and mobile patrol in the Inland Empire.",
    heroTagline:
      "Serving the Inland Empire's warehouses, construction sites, businesses, and communities with rapid-response security guard solutions.",
    description:
      "San Bernardino County's booming logistics, manufacturing, and construction industries require professional security partners who understand the region's unique needs. Rapid Response Security Guards is ready to serve.",
    cities: ["san-bernardino", "ontario", "rancho-cucamonga", "fontana"],
    image: `/images/areas/san-bernardino-county.webp`,
  },
  {
    slug: "sacramento-county",
    name: "Sacramento County",
    shortName: "Sacramento",
    h1: "Security Guard Services in Sacramento County, CA",
    metaTitle: "Security Guards Sacramento | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Sacramento County, CA. Armed guards, event security, mobile patrol, and commercial security in Sacramento, Elk Grove, Folsom, and surrounding areas.",
    heroTagline:
      "Providing professional security guard services to the Sacramento region — protecting businesses, events, and communities in Northern California.",
    description:
      "Rapid Response Security Guards serves the Sacramento region with the same professional standards and rapid deployment capability that California businesses have come to rely on.",
    cities: ["sacramento", "elk-grove", "folsom"],
    image: `/images/areas/sacramento-county.webp`,
  },
  {
    slug: "san-francisco-bay-area",
    name: "San Francisco Bay Area",
    shortName: "Bay Area",
    h1: "Security Guard Services in the San Francisco Bay Area",
    metaTitle: "Security Guards San Francisco Bay Area | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services across the San Francisco Bay Area. Armed guards, tech campus security, event security, and mobile patrol in SF, Oakland, San Jose, and more.",
    heroTagline:
      "Serving the Bay Area's tech campuses, commercial properties, events, and communities with professional California-licensed security guard services.",
    description:
      "The San Francisco Bay Area's dynamic mix of technology campuses, commercial real estate, and high-profile events requires security partners with the professionalism and flexibility to match. Rapid Response Security Guards delivers.",
    cities: ["san-francisco", "oakland", "san-jose"],
    image: `/images/areas/san-francisco-bay.webp`,
  },
];

export const COUNTY_BY_SLUG = Object.fromEntries(
  COUNTIES.map((c) => [c.slug, c])
) as Record<string, CountyData>;

/* ─────────────────────────────────────────────────────────────────────────── */
/*  CITIES                                                                      */
/* ─────────────────────────────────────────────────────────────────────────── */

export const CITIES: CityData[] = [
  // ── Orange County ──
  {
    slug: "irvine",
    cityName: "Irvine",
    county: "Orange County",
    countySlug: "orange-county",
    state: "CA",
    stateFullName: "California",
    population: "310,000+",
    metaTitle: "Security Guards in Irvine, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Irvine, CA. Armed guards, unarmed guards, mobile patrol, fire watch, and event security. Same-day deployment available. PPO #121228.",
    h1: "Security Guard Services in Irvine, CA",
    heroTagline:
      "Professional, licensed security guard services serving Irvine businesses, communities, and events — with rapid deployment across Orange County.",
    about:
      "Irvine is one of California's fastest-growing cities and home to a major tech and business hub. With numerous corporate campuses, commercial developments, and residential communities, the demand for professional security services in Irvine is significant. Rapid Response Security Guards has deep experience serving the Irvine market.",
    landmarks: [
      "Irvine Business Complex",
      "Spectrum Center",
      "UC Irvine Campus",
      "Great Park",
      "Irvine Technology Center",
      "Woodbridge Village",
    ],
    nearbyAreas: ["Tustin", "Newport Beach", "Costa Mesa", "Lake Forest"],
  },
  {
    slug: "anaheim",
    cityName: "Anaheim",
    county: "Orange County",
    countySlug: "orange-county",
    state: "CA",
    stateFullName: "California",
    population: "350,000+",
    metaTitle: "Security Guards in Anaheim, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Anaheim, CA. Event security, hotel security, construction security, and armed guards. PPO #121228. Rapid deployment available.",
    h1: "Security Guard Services in Anaheim, CA",
    heroTagline:
      "From the Resort District to industrial Anaheim — professional security guard services for every sector of this dynamic Orange County city.",
    about:
      "Anaheim is Orange County's largest city and home to major entertainment venues, hotels, conventions, and industrial areas. The city's high foot traffic, large events, and commercial density create significant demand for professional security services.",
    landmarks: [
      "Disneyland Resort",
      "Honda Center",
      "Angel Stadium",
      "Anaheim Convention Center",
      "ARTIC Transit Center",
      "Platinum Triangle",
    ],
    nearbyAreas: ["Orange", "Fullerton", "Garden Grove", "Buena Park"],
  },
  {
    slug: "santa-ana",
    cityName: "Santa Ana",
    county: "Orange County",
    countySlug: "orange-county",
    state: "CA",
    stateFullName: "California",
    population: "315,000+",
    metaTitle: "Security Guards in Santa Ana, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Santa Ana, CA. Armed guards, retail security, commercial security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Santa Ana, CA",
    heroTagline:
      "Protecting Santa Ana's businesses, retail centers, and communities with professional, rapid-response security guard services.",
    about:
      "Santa Ana serves as the county seat of Orange County and is a major commercial and retail hub. The city's dense commercial districts, retail corridors, and diverse business community rely on professional security services for effective protection.",
    landmarks: [
      "Downtown Santa Ana",
      "South Coast Plaza",
      "Santa Ana Zoo",
      "Bowers Museum",
      "Discovery Cube Orange County",
    ],
    nearbyAreas: ["Irvine", "Anaheim", "Costa Mesa", "Garden Grove"],
  },
  {
    slug: "costa-mesa",
    cityName: "Costa Mesa",
    county: "Orange County",
    countySlug: "orange-county",
    state: "CA",
    stateFullName: "California",
    population: "115,000+",
    metaTitle: "Security Guards in Costa Mesa, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Costa Mesa, CA. Retail security, event security, residential security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Costa Mesa, CA",
    heroTagline:
      "Security guard services for Costa Mesa's retail centers, entertainment venues, and residential communities.",
    about:
      "Costa Mesa is known for its major retail destinations, arts scene, and proximity to the coast. With South Coast Plaza and numerous entertainment venues, professional security is essential for businesses and events throughout the city.",
    landmarks: [
      "South Coast Plaza",
      "Triangle Square",
      "Segerstrom Center for the Arts",
      "CAMP Marketplace",
      "OC Fairgrounds",
    ],
    nearbyAreas: ["Newport Beach", "Irvine", "Santa Ana", "Huntington Beach"],
  },
  {
    slug: "huntington-beach",
    cityName: "Huntington Beach",
    county: "Orange County",
    countySlug: "orange-county",
    state: "CA",
    stateFullName: "California",
    population: "200,000+",
    metaTitle: "Security Guards in Huntington Beach, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Huntington Beach, CA. Event security, beach event security, retail security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Huntington Beach, CA",
    heroTagline:
      "From Surf City's beachfront events to commercial districts — professional security for every corner of Huntington Beach.",
    about:
      "Huntington Beach, known as Surf City USA, draws millions of visitors annually with its beaches, events, and retail districts. The city's busy summer season and frequent large-scale events create substantial demand for professional security services.",
    landmarks: [
      "Huntington Beach Pier",
      "Pacific City",
      "Bella Terra",
      "Huntington Beach Sports Complex",
      "Downtown HB Main Street",
    ],
    nearbyAreas: ["Costa Mesa", "Fountain Valley", "Westminster", "Seal Beach"],
  },
  {
    slug: "newport-beach",
    cityName: "Newport Beach",
    county: "Orange County",
    countySlug: "orange-county",
    state: "CA",
    stateFullName: "California",
    population: "87,000+",
    metaTitle: "Security Guards in Newport Beach, CA | Rapid Response Security Guards",
    metaDescription:
      "Premium security guard services in Newport Beach, CA. Executive protection, residential estate security, yacht and marina security, and event security. PPO #121228.",
    h1: "Security Guard Services in Newport Beach, CA",
    heroTagline:
      "Discreet, premium security services for Newport Beach's luxury estates, marinas, corporate offices, and high-end events.",
    about:
      "Newport Beach is one of California's most affluent coastal communities, home to luxury residential estates, premium retail, and a thriving business community. Executive protection, residential security, and high-end event security are among the most requested services in this market.",
    landmarks: [
      "Fashion Island",
      "Balboa Peninsula",
      "Newport Harbor",
      "Fashion Island",
      "Crystal Cove",
      "Lido Marina Village",
    ],
    nearbyAreas: ["Costa Mesa", "Irvine", "Laguna Beach", "Corona del Mar"],
  },
  {
    slug: "tustin",
    cityName: "Tustin",
    county: "Orange County",
    countySlug: "orange-county",
    state: "CA",
    stateFullName: "California",
    population: "83,000+",
    metaTitle: "Security Guards in Tustin, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Tustin, CA. Commercial security, construction site security, fire watch, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Tustin, CA",
    heroTagline:
      "Security guard services for Tustin's growing commercial developments, legacy districts, and residential communities.",
    about:
      "Tustin is experiencing significant commercial and residential growth, with major developments at the former MCAS Tustin site creating substantial demand for construction and commercial security services.",
    landmarks: [
      "The District at Tustin Legacy",
      "MCAS Tustin Development",
      "Old Town Tustin",
      "Tustin Marketplace",
    ],
    nearbyAreas: ["Irvine", "Santa Ana", "Orange", "Anaheim"],
  },
  {
    slug: "orange",
    cityName: "Orange",
    county: "Orange County",
    countySlug: "orange-county",
    state: "CA",
    stateFullName: "California",
    population: "140,000+",
    metaTitle: "Security Guards in Orange, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Orange, CA — our home city. Armed guards, commercial security, event security, and mobile patrol. PPO #121228. Fast local response.",
    h1: "Security Guard Services in Orange, CA",
    heroTagline:
      "Headquartered right here in Orange — providing the fastest response times and deepest local knowledge for businesses and communities in the City of Orange.",
    about:
      "Orange is the headquarters city of Rapid Response Security Guards, giving our clients in Orange the fastest possible response times and the most direct access to our operations team. From the Old Towne district to Chapman University and surrounding commercial areas, we know this city.",
    landmarks: [
      "Old Towne Orange",
      "Chapman University",
      "The Village at Orange",
      "Children's Hospital of Orange County",
      "St. Joseph Hospital",
    ],
    nearbyAreas: ["Anaheim", "Tustin", "Santa Ana", "Villa Park"],
  },
  {
    slug: "fullerton",
    cityName: "Fullerton",
    county: "Orange County",
    countySlug: "orange-county",
    state: "CA",
    stateFullName: "California",
    population: "143,000+",
    metaTitle: "Security Guards in Fullerton, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Fullerton, CA. Commercial security, event security, campus security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Fullerton, CA",
    heroTagline:
      "Protecting Fullerton's businesses, university areas, entertainment venues, and residential communities.",
    about:
      "Fullerton is home to California State University Fullerton, a vibrant downtown entertainment district, and a mix of commercial and industrial areas. Our security teams serve the full spectrum of Fullerton's security needs.",
    landmarks: [
      "Cal State Fullerton",
      "Downtown Fullerton",
      "Fullerton Transportation Center",
      "Brea Dam Recreation Area",
    ],
    nearbyAreas: ["Anaheim", "Brea", "Placentia", "La Habra"],
  },
  {
    slug: "garden-grove",
    cityName: "Garden Grove",
    county: "Orange County",
    countySlug: "orange-county",
    state: "CA",
    stateFullName: "California",
    population: "175,000+",
    metaTitle: "Security Guards in Garden Grove, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Garden Grove, CA. Commercial security, retail security, mobile patrol, and event security. PPO #121228.",
    h1: "Security Guard Services in Garden Grove, CA",
    heroTagline:
      "Security guard services for Garden Grove's diverse commercial districts, retail centers, and community events.",
    about:
      "Garden Grove is a diverse Orange County city with a strong commercial corridor along Garden Grove Boulevard, the Little Saigon area, and numerous retail and industrial properties requiring professional security services.",
    landmarks: [
      "Little Saigon",
      "Crystal Cathedral",
      "Gem Theater",
      "Garden Grove Strawberry Festival",
    ],
    nearbyAreas: ["Anaheim", "Westminster", "Santa Ana", "Stanton"],
  },

  // ── Los Angeles County ──
  {
    slug: "los-angeles",
    cityName: "Los Angeles",
    county: "Los Angeles County",
    countySlug: "los-angeles-county",
    state: "CA",
    stateFullName: "California",
    population: "3,900,000+",
    metaTitle: "Security Guards in Los Angeles, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Los Angeles, CA. Armed guards, executive protection, event security, loss prevention, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Los Angeles, CA",
    heroTagline:
      "Comprehensive security guard services across Los Angeles — from downtown office towers to entertainment venues, residential estates, and everything in between.",
    about:
      "Los Angeles is a global city with an extraordinarily diverse security landscape spanning entertainment, corporate, residential, retail, and event sectors. Rapid Response Security Guards has the capacity and experience to serve clients across all LA neighborhoods and industries.",
    landmarks: [
      "Downtown LA / Financial District",
      "Hollywood",
      "Century City",
      "Beverly Hills Adjacent",
      "Koreatown",
      "Arts District",
      "El Segundo",
    ],
    nearbyAreas: ["Long Beach", "Glendale", "Pasadena", "Inglewood", "Santa Monica"],
  },
  {
    slug: "long-beach",
    cityName: "Long Beach",
    county: "Los Angeles County",
    countySlug: "los-angeles-county",
    state: "CA",
    stateFullName: "California",
    population: "466,000+",
    metaTitle: "Security Guards in Long Beach, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Long Beach, CA. Armed guards, port and warehouse security, event security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Long Beach, CA",
    heroTagline:
      "Protecting Long Beach's port facilities, commercial districts, events, and communities with professional security guard services.",
    about:
      "Long Beach is one of the busiest port cities in the US, with major logistics, commercial, and entertainment sectors all driving demand for professional security. Our teams are experienced in port-adjacent logistics security as well as commercial and event security.",
    landmarks: [
      "Port of Long Beach",
      "Downtown Long Beach",
      "Shoreline Village",
      "Long Beach Convention Center",
      "Aquarium of the Pacific",
    ],
    nearbyAreas: ["Compton", "Lakewood", "Signal Hill", "Carson"],
  },
  {
    slug: "glendale",
    cityName: "Glendale",
    county: "Los Angeles County",
    countySlug: "los-angeles-county",
    state: "CA",
    stateFullName: "California",
    population: "200,000+",
    metaTitle: "Security Guards in Glendale, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Glendale, CA. Commercial security, retail security, loss prevention, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Glendale, CA",
    heroTagline:
      "Security guard services for Glendale's commercial corridors, retail centers, and growing residential developments.",
    about:
      "Glendale is a major commercial hub in the San Gabriel Valley with significant retail, corporate, and entertainment industry presence. The city's dense commercial strips and high foot traffic make professional security a necessity for many businesses.",
    landmarks: [
      "Americana at Brand",
      "Glendale Galleria",
      "Downtown Glendale",
      "Montrose Shopping Park",
    ],
    nearbyAreas: ["Burbank", "Pasadena", "Los Angeles", "La Cañada Flintridge"],
  },
  {
    slug: "pasadena",
    cityName: "Pasadena",
    county: "Los Angeles County",
    countySlug: "los-angeles-county",
    state: "CA",
    stateFullName: "California",
    population: "141,000+",
    metaTitle: "Security Guards in Pasadena, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Pasadena, CA. Event security, corporate security, institutional security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Pasadena, CA",
    heroTagline:
      "Professional security guard services for Pasadena's corporate campuses, event venues, educational institutions, and cultural facilities.",
    about:
      "Pasadena is home to Caltech, JPL, the Rose Bowl, and a vibrant Old Pasadena district. The city's mix of institutional, corporate, and event environments creates diverse security needs that our teams are well-equipped to meet.",
    landmarks: [
      "Rose Bowl Stadium",
      "Old Pasadena",
      "Caltech Campus",
      "Huntington Library",
      "Pasadena Convention Center",
    ],
    nearbyAreas: ["Arcadia", "Glendale", "Monrovia", "Alhambra"],
  },
  {
    slug: "torrance",
    cityName: "Torrance",
    county: "Los Angeles County",
    countySlug: "los-angeles-county",
    state: "CA",
    stateFullName: "California",
    population: "148,000+",
    metaTitle: "Security Guards in Torrance, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Torrance, CA. Industrial security, corporate campus security, retail security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Torrance, CA",
    heroTagline:
      "Security guard services for Torrance's industrial parks, corporate campuses, and South Bay communities.",
    about:
      "Torrance is a major South Bay business hub with a significant industrial park, numerous corporate headquarters, and substantial retail presence. Our teams serve both the industrial and commercial sectors of this active city.",
    landmarks: [
      "Del Amo Fashion Center",
      "Torrance Industrial Area",
      "Madrona Marsh",
      "Wilson Park",
    ],
    nearbyAreas: ["Hawthorne", "Redondo Beach", "Carson", "Gardena"],
  },
  {
    slug: "inglewood",
    cityName: "Inglewood",
    county: "Los Angeles County",
    countySlug: "los-angeles-county",
    state: "CA",
    stateFullName: "California",
    population: "109,000+",
    metaTitle: "Security Guards in Inglewood, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Inglewood, CA. Event security, venue security, armed guards, and mobile patrol near SoFi Stadium and Kia Forum. PPO #121228.",
    h1: "Security Guard Services in Inglewood, CA",
    heroTagline:
      "Professional security for Inglewood's world-class entertainment venues, surrounding businesses, and growing communities.",
    about:
      "Inglewood has transformed into one of the most significant entertainment destinations in Southern California, home to SoFi Stadium, Kia Forum, and YouTube Theater. The city's event-heavy calendar creates ongoing demand for professional event and venue security services.",
    landmarks: [
      "SoFi Stadium",
      "Kia Forum",
      "YouTube Theater",
      "Hollywood Park",
      "Inglewood City Hall",
    ],
    nearbyAreas: ["Hawthorne", "Lennox", "Gardena", "El Segundo"],
  },
  {
    slug: "santa-monica",
    cityName: "Santa Monica",
    county: "Los Angeles County",
    countySlug: "los-angeles-county",
    state: "CA",
    stateFullName: "California",
    population: "93,000+",
    metaTitle: "Security Guards in Santa Monica, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Santa Monica, CA. Retail security, event security, beach and pier security, and executive protection. PPO #121228.",
    h1: "Security Guard Services in Santa Monica, CA",
    heroTagline:
      "Protecting Santa Monica's world-famous pier, retail districts, tech offices, and coastal communities.",
    about:
      "Santa Monica is a global destination known for the Third Street Promenade, Santa Monica Pier, and a thriving tech sector. The city's mix of high-foot-traffic tourism, retail, and corporate environments creates significant security demands.",
    landmarks: [
      "Santa Monica Pier",
      "Third Street Promenade",
      "Bergamot Station",
      "Santa Monica Place",
      "Montana Avenue",
    ],
    nearbyAreas: ["Venice", "West LA", "Malibu", "Culver City"],
  },
  {
    slug: "west-hollywood",
    cityName: "West Hollywood",
    county: "Los Angeles County",
    countySlug: "los-angeles-county",
    state: "CA",
    stateFullName: "California",
    population: "36,000+",
    metaTitle: "Security Guards in West Hollywood, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in West Hollywood, CA. Nightclub security, event security, venue security, and executive protection on the Sunset Strip. PPO #121228.",
    h1: "Security Guard Services in West Hollywood, CA",
    heroTagline:
      "Specialized security for West Hollywood's entertainment venues, nightclubs, events, and high-profile clientele.",
    about:
      "West Hollywood is the heart of LA's nightlife, entertainment, and hospitality scene. The city's dense concentration of venues, restaurants, and high-profile events requires specialized security expertise in crowd management, VIP protection, and nightlife environments.",
    landmarks: [
      "Sunset Strip",
      "The Roxy",
      "Whisky a Go Go",
      "Pacific Design Center",
      "Santa Monica Boulevard",
    ],
    nearbyAreas: ["Hollywood", "Beverly Hills", "Los Angeles", "Silver Lake"],
  },

  // ── Riverside County ──
  {
    slug: "riverside",
    cityName: "Riverside",
    county: "Riverside County",
    countySlug: "riverside-county",
    state: "CA",
    stateFullName: "California",
    population: "330,000+",
    metaTitle: "Security Guards in Riverside, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Riverside, CA. Armed guards, commercial security, construction site security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Riverside, CA",
    heroTagline:
      "Comprehensive security guard services for Riverside's commercial districts, educational campuses, and surrounding communities.",
    about:
      "Riverside is the county seat and largest city in Riverside County, home to UC Riverside, a growing downtown, and significant commercial and industrial areas. Rapid Response Security Guards serves the full spectrum of Riverside security needs.",
    landmarks: [
      "Downtown Riverside",
      "UC Riverside Campus",
      "Riverside Convention Center",
      "Mission Inn Hotel",
      "Galleria at Tyler",
    ],
    nearbyAreas: ["Corona", "Moreno Valley", "San Bernardino", "Redlands"],
  },
  {
    slug: "corona",
    cityName: "Corona",
    county: "Riverside County",
    countySlug: "riverside-county",
    state: "CA",
    stateFullName: "California",
    population: "170,000+",
    metaTitle: "Security Guards in Corona, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Corona, CA. Commercial security, warehouse security, construction site security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Corona, CA",
    heroTagline:
      "Security guard services for Corona's industrial parks, commercial centers, and growing communities.",
    about:
      "Corona is a rapidly growing Inland Empire city with major logistics, manufacturing, and commercial sectors. Its strategic position between Orange County and the rest of the Inland Empire makes it a key logistics hub requiring professional security services.",
    landmarks: [
      "Corona Crossings",
      "Dos Lagos",
      "Sierra Del Oro",
      "The Shops at Dos Lagos",
    ],
    nearbyAreas: ["Riverside", "Norco", "Ontario", "Rancho Cucamonga"],
  },
  {
    slug: "moreno-valley",
    cityName: "Moreno Valley",
    county: "Riverside County",
    countySlug: "riverside-county",
    state: "CA",
    stateFullName: "California",
    population: "220,000+",
    metaTitle: "Security Guards in Moreno Valley, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Moreno Valley, CA. Warehouse security, commercial security, construction security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Moreno Valley, CA",
    heroTagline:
      "Professional security guard services for Moreno Valley's warehouses, distribution centers, and commercial properties.",
    about:
      "Moreno Valley is one of the Inland Empire's fastest-growing logistics and distribution hubs, with major warehouse facilities attracting significant cargo. Our teams specialize in the security needs of this dynamic logistics market.",
    landmarks: [
      "World Logistics Center",
      "Moreno Valley Mall",
      "March Air Reserve Base Adjacent",
      "Sunnymead Ranch",
    ],
    nearbyAreas: ["Riverside", "Perris", "Hemet", "Beaumont"],
  },
  {
    slug: "temecula",
    cityName: "Temecula",
    county: "Riverside County",
    countySlug: "riverside-county",
    state: "CA",
    stateFullName: "California",
    population: "115,000+",
    metaTitle: "Security Guards in Temecula, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Temecula, CA. Winery security, event security, construction security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Temecula, CA",
    heroTagline:
      "Security services for Temecula's wine country events, commercial developments, and residential communities.",
    about:
      "Temecula is known for its wine country, growing commercial sector, and high-end residential communities. The city's frequent wine festival events, weddings, and private estate gatherings create substantial demand for professional event and residential security.",
    landmarks: [
      "Temecula Wine Country",
      "Old Town Temecula",
      "Promenade Temecula",
      "Pechanga Resort",
    ],
    nearbyAreas: ["Murrieta", "Lake Elsinore", "Fallbrook", "Winchester"],
  },
  {
    slug: "murrieta",
    cityName: "Murrieta",
    county: "Riverside County",
    countySlug: "riverside-county",
    state: "CA",
    stateFullName: "California",
    population: "120,000+",
    metaTitle: "Security Guards in Murrieta, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Murrieta, CA. Commercial security, construction security, HOA security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Murrieta, CA",
    heroTagline:
      "Professional security for Murrieta's growing commercial corridors, construction projects, and residential communities.",
    about:
      "Murrieta is one of the fastest-growing cities in Southern California, with significant residential development, a growing commercial district, and strong demand for construction site and HOA security services.",
    landmarks: [
      "Murrieta Town Square",
      "Promenade Murrieta",
      "Bear Creek Golf Club",
    ],
    nearbyAreas: ["Temecula", "Wildomar", "Menifee", "Lake Elsinore"],
  },

  // ── San Diego County ──
  {
    slug: "san-diego",
    cityName: "San Diego",
    county: "San Diego County",
    countySlug: "san-diego-county",
    state: "CA",
    stateFullName: "California",
    population: "1,430,000+",
    metaTitle: "Security Guards in San Diego, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in San Diego, CA. Armed guards, event security, construction security, executive protection, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in San Diego, CA",
    heroTagline:
      "Professional security guard services across America's Finest City — protecting businesses, events, and communities throughout San Diego.",
    about:
      "San Diego is California's second-largest city and a major hub for defense, biotech, tourism, and hospitality. Rapid Response Security Guards serves San Diego's diverse security landscape with the same professionalism and rapid deployment capability our clients across California rely on.",
    landmarks: [
      "Gaslamp Quarter",
      "Balboa Park",
      "San Diego Convention Center",
      "Little Italy",
      "Petco Park",
      "Seaport Village",
    ],
    nearbyAreas: ["Chula Vista", "El Cajon", "La Mesa", "National City"],
  },
  {
    slug: "chula-vista",
    cityName: "Chula Vista",
    county: "San Diego County",
    countySlug: "san-diego-county",
    state: "CA",
    stateFullName: "California",
    population: "280,000+",
    metaTitle: "Security Guards in Chula Vista, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Chula Vista, CA. Commercial security, construction security, event security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Chula Vista, CA",
    heroTagline:
      "Security guard services for Chula Vista's growing commercial areas, residential communities, and events.",
    about:
      "Chula Vista is San Diego County's second-largest city and one of the fastest-growing in Southern California. Significant residential development, commercial expansion, and the US Olympic Training Center create a diverse security market.",
    landmarks: [
      "Otay Ranch Town Center",
      "US Olympic Training Center",
      "Chula Vista Bayfront",
      "Third Avenue Village",
    ],
    nearbyAreas: ["San Diego", "National City", "Bonita", "Eastlake"],
  },
  {
    slug: "oceanside",
    cityName: "Oceanside",
    county: "San Diego County",
    countySlug: "san-diego-county",
    state: "CA",
    stateFullName: "California",
    population: "180,000+",
    metaTitle: "Security Guards in Oceanside, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Oceanside, CA. Commercial security, event security, construction security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Oceanside, CA",
    heroTagline:
      "Protecting Oceanside's coastal businesses, commercial districts, and communities with professional security guard services.",
    about:
      "Oceanside is North San Diego County's largest city, with a growing downtown, active pier district, and significant military community. The city's mix of tourism, retail, and residential neighborhoods creates diverse security needs.",
    landmarks: [
      "Oceanside Pier",
      "Downtown Oceanside",
      "Oceanside Civic Center",
      "Mission San Luis Rey",
    ],
    nearbyAreas: ["Carlsbad", "Vista", "Camp Pendleton", "San Clemente"],
  },
  {
    slug: "escondido",
    cityName: "Escondido",
    county: "San Diego County",
    countySlug: "san-diego-county",
    state: "CA",
    stateFullName: "California",
    population: "152,000+",
    metaTitle: "Security Guards in Escondido, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Escondido, CA. Commercial security, warehouse security, event security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Escondido, CA",
    heroTagline:
      "Security guard services for Escondido's commercial districts, industrial areas, and community events.",
    about:
      "Escondido is a major inland North County city with significant commercial and industrial activity, wine country proximity, and a growing downtown arts scene requiring professional security services.",
    landmarks: [
      "California Center for the Arts",
      "Kit Carson Park",
      "Westfield North County",
      "Stone Brewing World Bistro",
    ],
    nearbyAreas: ["San Marcos", "Vista", "San Diego", "Poway"],
  },
  {
    slug: "carlsbad",
    cityName: "Carlsbad",
    county: "San Diego County",
    countySlug: "san-diego-county",
    state: "CA",
    stateFullName: "California",
    population: "118,000+",
    metaTitle: "Security Guards in Carlsbad, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Carlsbad, CA. Corporate campus security, event security, resort security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Carlsbad, CA",
    heroTagline:
      "Professional security for Carlsbad's corporate campuses, resort properties, and coastal communities.",
    about:
      "Carlsbad is a premier coastal business and resort destination, home to major corporate campuses in the life sciences and technology sectors, world-class resorts, and Legoland. Our teams serve this upscale market with the professionalism it demands.",
    landmarks: [
      "Legoland California",
      "Carlsbad Village",
      "The Forum at Carlsbad",
      "Agua Hedionda Lagoon",
    ],
    nearbyAreas: ["Oceanside", "Vista", "San Marcos", "Encinitas"],
  },

  // ── San Bernardino County ──
  {
    slug: "san-bernardino",
    cityName: "San Bernardino",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county",
    state: "CA",
    stateFullName: "California",
    population: "222,000+",
    metaTitle: "Security Guards in San Bernardino, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in San Bernardino, CA. Armed guards, commercial security, construction security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in San Bernardino, CA",
    heroTagline:
      "Serving San Bernardino's commercial and industrial sectors with professional security guard services.",
    about:
      "San Bernardino is the county seat and a major Inland Empire hub for logistics, healthcare, and public services. The city's significant commercial and industrial footprint creates substantial demand for professional security services.",
    landmarks: [
      "National Orange Show Events Center",
      "CalState San Bernardino",
      "Carousel Mall Redevelopment",
      "Hospitality Lane Commercial District",
    ],
    nearbyAreas: ["Riverside", "Fontana", "Rialto", "Highland"],
  },
  {
    slug: "ontario",
    cityName: "Ontario",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county",
    state: "CA",
    stateFullName: "California",
    population: "185,000+",
    metaTitle: "Security Guards in Ontario, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Ontario, CA. Warehouse security, airport adjacent security, armed guards, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Ontario, CA",
    heroTagline:
      "Protecting Ontario's booming logistics hubs, warehouses, and commercial centers with professional security guard services.",
    about:
      "Ontario is the western gateway to the Inland Empire and one of the most significant logistics and distribution hubs in the western US. The city's massive warehouse footprint and Ontario International Airport proximity create high demand for professional security.",
    landmarks: [
      "Ontario International Airport",
      "Ontario Convention Center",
      "Citizens Business Bank Arena",
      "Ontario Mills",
    ],
    nearbyAreas: ["Rancho Cucamonga", "Upland", "Chino", "Corona"],
  },
  {
    slug: "rancho-cucamonga",
    cityName: "Rancho Cucamonga",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county",
    state: "CA",
    stateFullName: "California",
    population: "177,000+",
    metaTitle: "Security Guards in Rancho Cucamonga, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Rancho Cucamonga, CA. Commercial security, HOA security, construction security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Rancho Cucamonga, CA",
    heroTagline:
      "Security guard services for Rancho Cucamonga's premier commercial districts, master-planned communities, and construction projects.",
    about:
      "Rancho Cucamonga is one of the most affluent and fast-growing cities in the Inland Empire, with major commercial development, premium residential communities, and a growing corporate presence.",
    landmarks: [
      "Victoria Gardens",
      "Rancho Cucamonga Quakes Stadium",
      "Haven City Market",
      "Etiwanda Preserve",
    ],
    nearbyAreas: ["Ontario", "Upland", "Fontana", "Claremont"],
  },
  {
    slug: "fontana",
    cityName: "Fontana",
    county: "San Bernardino County",
    countySlug: "san-bernardino-county",
    state: "CA",
    stateFullName: "California",
    population: "215,000+",
    metaTitle: "Security Guards in Fontana, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Fontana, CA. Warehouse security, industrial security, construction security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Fontana, CA",
    heroTagline:
      "Professional security for Fontana's industrial zones, warehouses, and growing commercial developments.",
    about:
      "Fontana is a major Inland Empire industrial city with one of the highest concentrations of warehouse and logistics facilities in Southern California. Our security teams are experienced in the specific requirements of industrial security environments.",
    landmarks: [
      "Auto Club Speedway",
      "Steel Plaza",
      "Pacific Avenue Industrial Corridor",
    ],
    nearbyAreas: ["Rialto", "Rancho Cucamonga", "Ontario", "San Bernardino"],
  },

  // ── Sacramento County ──
  {
    slug: "sacramento",
    cityName: "Sacramento",
    county: "Sacramento County",
    countySlug: "sacramento-county",
    state: "CA",
    stateFullName: "California",
    population: "530,000+",
    metaTitle: "Security Guards in Sacramento, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Sacramento, CA. Armed guards, government facility security, event security, commercial security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Sacramento, CA",
    heroTagline:
      "Professional security guard services for California's capital city — protecting government facilities, commercial properties, events, and communities.",
    about:
      "Sacramento is California's capital and a rapidly growing city with major government, healthcare, entertainment, and commercial sectors. Rapid Response Security Guards extends its professional security services to the Sacramento region.",
    landmarks: [
      "California State Capitol",
      "Downtown Sacramento",
      "Golden 1 Center",
      "Old Sacramento",
      "Midtown Sacramento",
    ],
    nearbyAreas: ["Elk Grove", "Folsom", "Roseville", "Citrus Heights"],
  },
  {
    slug: "elk-grove",
    cityName: "Elk Grove",
    county: "Sacramento County",
    countySlug: "sacramento-county",
    state: "CA",
    stateFullName: "California",
    population: "180,000+",
    metaTitle: "Security Guards in Elk Grove, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Elk Grove, CA. Commercial security, HOA security, construction security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Elk Grove, CA",
    heroTagline:
      "Security guard services for Elk Grove's growing residential communities, commercial centers, and construction projects.",
    about:
      "Elk Grove is one of California's fastest-growing cities, with significant residential development, a growing commercial sector, and high demand for HOA and construction security services.",
    landmarks: [
      "Elk Grove Regional Park",
      "Old Town Elk Grove",
      "Laguna Town Center",
    ],
    nearbyAreas: ["Sacramento", "Galt", "Folsom", "Rancho Cordova"],
  },
  {
    slug: "folsom",
    cityName: "Folsom",
    county: "Sacramento County",
    countySlug: "sacramento-county",
    state: "CA",
    stateFullName: "California",
    population: "82,000+",
    metaTitle: "Security Guards in Folsom, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in Folsom, CA. Corporate campus security, commercial security, event security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Folsom, CA",
    heroTagline:
      "Professional security for Folsom's tech campuses, commercial developments, and premier residential communities.",
    about:
      "Folsom is a premier Sacramento suburb known for its technology sector, upscale residential communities, and historic district. The city's corporate campuses and growing commercial base create steady demand for professional security services.",
    landmarks: [
      "Historic Folsom",
      "Palladio at Broadstone",
      "Lake Natoma",
      "Intel Folsom Campus",
    ],
    nearbyAreas: ["El Dorado Hills", "Rancho Cordova", "Sacramento", "Granite Bay"],
  },

  // ── SF Bay Area ──
  {
    slug: "san-francisco",
    cityName: "San Francisco",
    county: "San Francisco Bay Area",
    countySlug: "san-francisco-bay-area",
    state: "CA",
    stateFullName: "California",
    population: "875,000+",
    metaTitle: "Security Guards in San Francisco, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in San Francisco, CA. Armed guards, loss prevention, tech campus security, event security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in San Francisco, CA",
    heroTagline:
      "Professional security guard services across San Francisco — protecting tech companies, retail, hospitality, and communities in the Bay Area's urban core.",
    about:
      "San Francisco is a global tech and financial hub with significant security needs across its commercial, retail, and hospitality sectors. The city's ongoing retail security challenges and high-profile corporate campuses create strong demand for professional security services.",
    landmarks: [
      "Financial District",
      "Union Square",
      "SOMA",
      "Fisherman's Wharf",
      "Mission District",
      "Embarcadero",
    ],
    nearbyAreas: ["Oakland", "Daly City", "South San Francisco", "Alameda"],
  },
  {
    slug: "oakland",
    cityName: "Oakland",
    county: "San Francisco Bay Area",
    countySlug: "san-francisco-bay-area",
    state: "CA",
    stateFullName: "California",
    population: "440,000+",
    metaTitle: "Security Guards in Oakland, CA | Rapid Response Security Guards",
    metaDescription:
      "Professional security guard services in Oakland, CA. Armed guards, warehouse security, commercial security, event security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in Oakland, CA",
    heroTagline:
      "Protecting Oakland's businesses, warehouses, communities, and events with professional, rapid-response security guard services.",
    about:
      "Oakland is a major Bay Area port city and commercial hub with significant warehousing, logistics, and commercial activity. The city's diverse commercial landscape and major port operations create high demand for professional security services.",
    landmarks: [
      "Port of Oakland",
      "Jack London Square",
      "Oakland Coliseum Complex",
      "Uptown Oakland",
      "Chinatown Oakland",
    ],
    nearbyAreas: ["Berkeley", "Alameda", "San Leandro", "Emeryville"],
  },
  {
    slug: "san-jose",
    cityName: "San Jose",
    county: "San Francisco Bay Area",
    countySlug: "san-francisco-bay-area",
    state: "CA",
    stateFullName: "California",
    population: "1,025,000+",
    metaTitle: "Security Guards in San Jose, CA | Rapid Response Security Guards",
    metaDescription:
      "Licensed security guard services in San Jose, CA. Tech campus security, armed guards, event security, warehouse security, and mobile patrol. PPO #121228.",
    h1: "Security Guard Services in San Jose, CA",
    heroTagline:
      "Professional security for Silicon Valley's tech campuses, commercial centers, and communities — serving San Jose and the South Bay.",
    about:
      "San Jose is the capital of Silicon Valley and one of California's largest cities. The city's concentration of tech company campuses, major venues, and commercial development creates ongoing demand for professional security services across multiple sectors.",
    landmarks: [
      "Downtown San Jose",
      "SAP Center",
      "PayPal Park",
      "Santana Row",
      "San Pedro Square Market",
    ],
    nearbyAreas: ["Santa Clara", "Sunnyvale", "Fremont", "Milpitas"],
  },
];

export const CITY_BY_SLUG = Object.fromEntries(
  CITIES.map((c) => [c.slug, c])
) as Record<string, CityData>;

/** Get all cities for a given county slug */
export function getCitiesForCounty(countySlug: string): CityData[] {
  const county = COUNTY_BY_SLUG[countySlug];
  if (!county) return [];
  return county.cities.map((slug) => CITY_BY_SLUG[slug]).filter(Boolean);
}
