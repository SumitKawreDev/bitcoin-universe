import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICE_ITEMS, type ServiceItem } from '../data/siteData';
import { SmartImage } from './SmartImage';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="services"
      className="relative border-t border-white/8 bg-[#070A12] py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 h-80 w-80 -translate-y-1/2 rounded-full bg-[#F7931A]/6 blur-[140px]"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
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
                CORE SERVICES
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] font-bold tracking-tight text-white">
              Our <span className="gold-gradient-text">Digital Ecosystem</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#A8B0C0] sm:text-base">
            Select any module below to examine how Bitcoin Universe organizes educational
            resources, market insights, wallet security awareness, and community recognition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICE_ITEMS.map((service, idx) => (
            <motion.article
              key={service.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101725] transition-colors duration-300 hover:border-[#E8B64D]/50"
            >
              {/* Image Container with Smooth Zoom & Measured Scrim */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0B101C]">
                <SmartImage
                  src={service.image}
                  alt={service.alt}
                  fallbackTitle={service.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101725] via-[#070A12]/45 to-transparent"
                />
                <div className="absolute top-5 left-5 font-mono text-xs tracking-wider text-[#F6D88C]/95 tabular-nums">
                  {service.index} / 06
                </div>
              </div>

              {/* Gold Accent Line */}
              <div className="px-6">
                <div className="h-[1px] w-full bg-gradient-to-r from-[#E8B64D]/70 via-[#F7931A]/30 to-transparent transition-all duration-300 group-hover:from-[#E8B64D]" />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-6 pt-5">
                <p className="text-xs font-medium text-[#E8B64D]">{service.subtitle}</p>
                <h3 className="mt-1.5 font-display text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-[1.68] text-[#A8B0C0]">
                  {service.summary}
                </p>

                <div className="mt-6 border-t border-white/8 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectService(service)}
                    className="group/btn inline-flex min-h-[40px] cursor-pointer items-center gap-2 text-sm font-medium text-white transition-colors hover:text-[#E8B64D]"
                  >
                    <span>Explore Module Details</span>
                    <ArrowUpRight className="h-4 w-4 text-[#E8B64D] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
