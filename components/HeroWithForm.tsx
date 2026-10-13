"use client";

import dynamic from "next/dynamic";

const HeroForm = dynamic(() => import("@/components/HeroForm"), {
  ssr: true,
  loading: () => <div className="h-[300px] animate-pulse bg-white/5 rounded-lg" />,
});

interface HeroWithFormProps {
  /** Main h1 headline */
  title: string;
  /** Subtitle paragraph */
  subtitle: string;
  /** Optional pill/badge above the h1 (e.g. emoji + label) */
  badge?: string;
  /** Trust bullets shown under the phone CTA — defaults to 3 standard ones */
  bullets?: string[];
}

const DEFAULT_BULLETS = [
  "Licensed & Insured — PPO #121228",
  "Available 24/7",
  "Fast deployment across Southern California",
];

export default function HeroWithForm({
  title,
  subtitle,
  badge,
  bullets = DEFAULT_BULLETS,
}: HeroWithFormProps) {
  return (
    <section
      id="hero"
      className="relative bg-[var(--color-dark)] overflow-hidden pt-24 pb-16 md:pt-32 md:pb-20"
    >
      {/* subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-dark)] via-[var(--color-dark)]/95 to-[var(--color-primary)]/10 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* ── Left: Copy ── */}
          <div className="max-w-xl">
            {badge && (
              <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full mb-5 border border-white/20">
                <span className="font-semibold text-sm tracking-wide uppercase text-white/90">
                  {badge}
                </span>
              </div>
            )}

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {title}
            </h1>

            <p className="mt-4 text-base text-gray-300 font-light leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href="tel:19499928491" className="btn btn-primary">
                Call: (949) 992-8491
              </a>
            </div>

            <ul className="mt-5 space-y-2">
              {bullets.map((item) => (
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

          {/* ── Right: Form card ── */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
            <h2 className="text-xl font-semibold text-white mb-5">
              Request a Free Security Quote
            </h2>
            <HeroForm />
          </div>
        </div>
      </div>
    </section>
  );
}
