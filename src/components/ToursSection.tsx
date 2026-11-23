import { motion, useReducedMotion } from 'motion/react';
import { Compass, MapPin, ShieldCheck } from 'lucide-react';
import { TOUR_PACKAGES } from '../data/siteData';
import { AnimatedCounter } from './AnimatedCounter';
import { SmartImage } from './SmartImage';

export function ToursSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="tours"
      className="relative border-t border-white/8 bg-[#0A0F1B] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Heading */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#E8B64D]" />
              <span className="font-display text-xs font-semibold tracking-[0.2em] text-[#E8B64D]">
                INTERNATIONAL TOUR PACKAGES
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] font-bold tracking-tight text-white">
              Explore the World with{' '}
              <span className="gold-gradient-text">Bitcoin Universe</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 text-sm text-[#C8D0DE]">
            <Compass className="h-4 w-4 shrink-0 text-[#E8B64D]" aria-hidden="true" />
            <span>
              Proposed Eligibility Condition:{' '}
              <strong className="font-semibold text-white">Self-investment only</strong>
            </span>
          </div>
        </motion.div>

        {/* Three Full-Bleed Destination Cards */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {TOUR_PACKAGES.map((pkg, idx) => (
            <motion.article
              key={pkg.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex min-h-[450px] flex-col justify-end overflow-hidden rounded-2xl border border-white/12 bg-[#070A12] transition-colors duration-300 hover:border-[#E8B64D]/55"
            >
              {/* Full-Bleed Destination Photograph */}
              <div className="absolute inset-0 overflow-hidden">
                <SmartImage
                  src={pkg.image}
                  alt={pkg.alt}
                  fallbackTitle={pkg.destination}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Measured Scrim for WCAG AA Contrast */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#070A12]/96 via-[#070A12]/58 to-[#070A12]/15 transition-opacity duration-300 group-hover:via-[#070A12]/50"
                />
              </div>

              {/* Top Editorial Location Index */}
              <div className="relative z-10 mb-auto flex items-center justify-between p-6">
                <div className="flex items-center gap-2 text-xs font-medium text-[#F6D88C]">
                  <MapPin className="h-3.5 w-3.5 text-[#E8B64D]" aria-hidden="true" />
                  <span>{pkg.regionLabel}</span>
                </div>
                <span className="font-mono text-xs text-white/80 tabular-nums">
                  0{idx + 1} / 03
                </span>
              </div>

              {/* Bottom Destination Information */}
              <div className="relative z-10 p-7">
                <div className="mb-4 h-[1px] w-16 bg-gradient-to-r from-[#E8B64D] to-[#F7931A] transition-all duration-300 group-hover:w-28" />

                <h3 className="font-display text-3xl font-bold tracking-tight text-white">
                  {pkg.destination}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-[#C8D0DE]">{pkg.highlights}</p>

                <div className="mt-6 flex items-end justify-between border-t border-white/15 pt-5">
                  <div>
                    <p className="text-xs text-[#A8B0C0]">Proposed Self-Investment</p>
                    <p className="gold-gradient-text mt-0.5 font-mono text-3xl font-bold">
                      <AnimatedCounter value={pkg.amountNumeric} prefix="$" />
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] tracking-wide text-[#A8B0C0]">Proposed Condition</p>
                    <p className="mt-0.5 flex items-center justify-end gap-1.5 text-xs font-medium text-white">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#E8B64D]" aria-hidden="true" />
                      <span>{pkg.eligibilityCondition}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-[#A8B0C0]">
          Notice: Destination packages (Goa $500, Thailand $2,100, Russia $11,000) reflect proposed
          self-investment recognition thresholds only. Final travel itineraries, eligibility dates,
          visa responsibilities, and fulfillment rules require official approval and published
          terms.
        </p>
      </div>
    </section>
  );
}
