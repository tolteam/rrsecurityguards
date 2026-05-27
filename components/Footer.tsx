import Link from "next/link";
import Image from "next/image";

const serviceAreas = [
  "Orange County",
  "Riverside County",
  "San Diego County",
  "San Bernardino County",
  "Los Angeles County",
  "Sacramento County",
];

const popularCities1 = ["Irvine", "Anaheim", "Santa Ana", "Costa Mesa"];
const popularCities2 = ["Newport Beach", "Tustin", "Riverside"];

const quickLinks = [
  { href: "#hero", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
  { href: "sms:19499928491", label: "Text Us" },
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
                  <li key={area}>
                    <Link
                      href="#contact"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {area}
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
                  <li key={city}>
                    <Link
                      href="#contact"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {city}
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
                  <li key={city}>
                    <Link
                      href="#contact"
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {city}
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
