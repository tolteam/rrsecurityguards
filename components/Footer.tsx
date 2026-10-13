import Link from "next/link";
import Image from "next/image";

const serviceAreas = [
  { label: "Orange County", href: "/locations/orange-county" },
  { label: "Riverside County", href: "/locations/riverside-county" },
  { label: "San Diego County", href: "/locations/san-diego-county" },
  { label: "San Bernardino County", href: "/locations/san-bernardino-county" },
  { label: "Los Angeles County", href: "/locations/los-angeles-county" },
  { label: "Sacramento County", href: "/locations/sacramento-county" },
];

const popularCities1 = [
  { label: "Irvine", href: "/locations/irvine" },
  { label: "Anaheim", href: "/locations/anaheim" },
  { label: "Santa Ana", href: "/locations/santa-ana" },
  { label: "Costa Mesa", href: "/locations/costa-mesa" },
];
const popularCities2 = [
  { label: "Newport Beach", href: "/locations/newport-beach" },
  { label: "Tustin", href: "/locations/tustin" },
  { label: "Riverside", href: "/locations/riverside" },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "tel:19499928491", label: "Call (949) 992-8491" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-gray-300">
      {/* ── Main Footer ── */}
      <div className="section-sm">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-10">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-3 lg:col-span-1">
              <Link href="/">
                <Image
                  src="/logo-white.png"
                  alt="Rapid Response Security Guards"
                  width={150}
                  height={65}
                  className="h-14 w-auto object-contain"
                />
              </Link>

              <div className="mt-5 space-y-1">
                <p className="text-xs font-semibold text-white/80">Address:</p>
                <p className="text-sm text-gray-400 leading-relaxed">
                  2050 W Chapman Ave Ste 277
                  <br />
                  Orange, CA 92868
                </p>
              </div>

              <div className="mt-4 space-y-1">
                <a
                  href="tel:19499928491"
                  className="text-xs font-semibold text-white/80 hover:text-[var(--color-primary)] transition-colors"
                >
                  Contact:
                </a>
                <p className="text-sm text-gray-400">(949) 992-8491</p>
              </div>

              <p className="mt-4 text-xs text-gray-400">
                PPO #121228 | Licensed &amp; Insured
              </p>

              <p className="mt-2">
                <a
                  href="https://project1r.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
                >
                  Powered by Project1r Studios
                </a>
              </p>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                Service Areas
              </h4>
              <ul className="space-y-2.5">
                {serviceAreas.map((area) => (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {area.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Cities 1 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                Popular Cities
              </h4>
              <ul className="space-y-2.5">
                {popularCities1.map((city) => (
                  <li key={city.href}>
                    <Link
                      href={city.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {city.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Cities 2 */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                More Cities
              </h4>
              <ul className="space-y-2.5">
                {popularCities2.map((city) => (
                  <li key={city.href}>
                    <Link
                      href={city.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {city.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/5 bg-[#0a0c0c]">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3 py-4">
          <p className="text-xs text-gray-400 text-center md:text-left">
            © {new Date().getFullYear()} Rapid Response Security Guards. All
            rights reserved. Lead Generation by Top Organic Leads.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacy-policy"
              className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-xs text-gray-400 hover:text-gray-200 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
