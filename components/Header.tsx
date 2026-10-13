"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

/* ── Inline SVG Icons ── */
const MenuIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
const ChevronDownIcon = ({ size = 14, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
const ChevronRightIcon = ({ size = 16, className }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6" />
  </svg>
);

/* ── Nav Data ── */
const serviceLinks = [
  { href: "/services/armed-security", label: "Armed Security" },
  { href: "/services/unarmed-security", label: "Unarmed Security" },
  { href: "/services/mobile-patrol", label: "Mobile Patrol" },
  { href: "/services/fire-watch", label: "Fire Watch" },
  { href: "/services/construction-security", label: "Construction Security" },
  { href: "/services/event-security", label: "Event Security" },
  { href: "/services/executive-protection", label: "Executive Protection" },
  { href: "/services/residential-security", label: "Residential Security" },
  { href: "/services/loss-prevention", label: "Loss Prevention" },
];

const industryLinks = [
  { href: "/industries/construction", label: "Construction" },
  { href: "/industries/retail", label: "Retail" },
  { href: "/industries/healthcare", label: "Healthcare" },
  { href: "/industries/hospitality-hotels", label: "Hotels & Hospitality" },
  { href: "/industries/residential-hoa", label: "Residential & HOA" },
  { href: "/industries/warehouses-logistics", label: "Warehouses & Logistics" },
  { href: "/industries/office-buildings", label: "Office Buildings" },
  { href: "/industries/religious-institutions", label: "Religious Institutions" },
];

const locationLinks = [
  { href: "/locations/orange-county", label: "Orange County" },
  { href: "/locations/los-angeles-county", label: "Los Angeles County" },
  { href: "/locations/riverside-county", label: "Riverside County" },
  { href: "/locations/san-diego-county", label: "San Diego County" },
  { href: "/locations/san-bernardino-county", label: "San Bernardino County" },
  { href: "/locations/sacramento-county", label: "Sacramento County" },
  { href: "/locations/san-francisco-bay-area", label: "SF Bay Area" },
];

interface DropdownMenuProps {
  id: string;
  label: string;
  href: string; // The hub page link
  items: { href: string; label: string }[];
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

function DropdownMenu({ id, label, href, items, isOpen, onToggle, onClose }: DropdownMenuProps) {
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <li ref={ref} className="relative" id={`nav-${id}`}>
      <button
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`dropdown-${id}`}
        onClick={onToggle}
        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] tracking-wide hover:text-[var(--color-primary)] transition-colors"
      >
        {label}
        <ChevronDownIcon
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          id={`dropdown-${id}`}
          role="menu"
          className="absolute top-full left-1/2 -translate-x-1/2 mt-1 bg-white border border-gray-100 rounded-xl shadow-xl py-2 min-w-[220px] z-50 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          {/* View All link */}
          <Link
            href={href}
            onClick={onClose}
            className="flex items-center px-4 py-2.5 text-xs font-bold uppercase tracking-widest text-[var(--color-primary)] hover:bg-gray-50 transition-colors border-b border-gray-100 mb-1"
            role="menuitem"
          >
            View All {label}
          </Link>
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              role="menuitem"
              className="flex items-center px-4 py-2.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] hover:bg-gray-50 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const toggleDropdown = (id: string) =>
    setOpenDropdown((prev) => (prev === id ? null : id));
  const closeDropdown = () => setOpenDropdown(null);

  const toggleMobileSection = (id: string) =>
    setMobileExpanded((prev) => (prev === id ? null : id));

  const navDropdowns = [
    { id: "services", label: "Services", href: "/services", items: serviceLinks },
    { id: "industries", label: "Industries", href: "/industries", items: industryLinks },
    { id: "locations", label: "Locations", href: "/locations", items: locationLinks },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      {/* ── Main Navigation ── */}
      <nav className="bg-white">
        <div className="container flex items-center justify-between gap-6 h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Rapid Response Security Guards"
              width={140}
              height={60}
              loading="eager"
              className="h-14 md:h-[70px] w-auto object-contain"
            />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-0 flex-1 justify-center">
            <li>
              <Link
                href="/"
                className="px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] tracking-wide hover:text-[var(--color-primary)] transition-colors"
              >
                Home
              </Link>
            </li>
            {navDropdowns.map((d) => (
              <DropdownMenu
                key={d.id}
                id={d.id}
                label={d.label}
                href={d.href}
                items={d.items}
                isOpen={openDropdown === d.id}
                onToggle={() => toggleDropdown(d.id)}
                onClose={closeDropdown}
              />
            ))}
            <li>
              <Link
                href="/about"
                className="px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] tracking-wide hover:text-[var(--color-primary)] transition-colors"
              >
                About
              </Link>
            </li>
          </ul>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:19499928491"
              className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors"
            >
              (949) 992-8491
            </a>
            <Link
              href="#hero"
              className="btn btn-primary text-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[var(--color-text-muted)]"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <MenuIcon size={24} />
            )}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 top-20 bg-black/40 z-40 lg:hidden"
            onClick={() => setMobileOpen(false)}
          />
          {/* Drawer */}
          <div className="fixed top-20 left-0 right-0 bg-white z-50 lg:hidden border-t border-gray-100 shadow-xl animate-in slide-in-from-top-2 max-h-[80vh] overflow-y-auto">
            <div className="container py-4">
              <ul className="flex flex-col">
                {/* Home */}
                <li>
                  <Link
                    href="/"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-4 text-base font-medium text-[var(--color-text)] border-b border-gray-100 hover:text-[var(--color-primary)] transition-colors"
                  >
                    Home
                    <ChevronRightIcon size={16} className="text-gray-300" />
                  </Link>
                </li>

                {/* Expandable Sections */}
                {navDropdowns.map((d) => (
                  <li key={d.id}>
                    <button
                      onClick={() => toggleMobileSection(d.id)}
                      className="w-full flex items-center justify-between py-4 text-base font-medium text-[var(--color-text)] border-b border-gray-100 hover:text-[var(--color-primary)] transition-colors"
                      aria-expanded={mobileExpanded === d.id}
                    >
                      {d.label}
                      <ChevronDownIcon
                        size={16}
                        className={`text-gray-400 transition-transform duration-200 ${
                          mobileExpanded === d.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {mobileExpanded === d.id && (
                      <ul className="bg-gray-50 border-b border-gray-100 py-2">
                        <li>
                          <Link
                            href={d.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-4 py-2.5 text-sm font-bold text-[var(--color-primary)]"
                          >
                            View All {d.label}
                          </Link>
                        </li>
                        {d.items.map((item) => (
                          <li key={item.href}>
                            <Link
                              href={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2.5 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)]"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                {/* About */}
                <li>
                  <Link
                    href="/about"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-4 text-base font-medium text-[var(--color-text)] border-b border-gray-100 hover:text-[var(--color-primary)] transition-colors"
                  >
                    About
                    <ChevronRightIcon size={16} className="text-gray-300" />
                  </Link>
                </li>
              </ul>

              <Link
                href="#hero"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary w-full mt-5 text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:19499928491"
                className="btn btn-outline w-full mt-3 text-center"
              >
                📞 (949) 992-8491
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
