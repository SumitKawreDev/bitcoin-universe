import { motion, useReducedMotion } from 'motion/react';
import { Award, ShieldAlert } from 'lucide-react';
import { CAR_REWARDS } from '../data/siteData';
import { AnimatedCounter } from './AnimatedCounter';
import { SmartImage } from './SmartImage';

export function RewardsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="rewards"
      className="relative border-t border-white/8 bg-[#070A12] py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-1/2 h-80 w-[620px] -translate-x-1/2 rounded-full bg-[#E8B64D]/6 blur-[150px]"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Section Heading */}
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
                REWARDS &amp; RECOGNITION
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] font-bold tracking-tight text-white">
              Your Milestones.{' '}
              <span className="gold-gradient-text">Your Recognition.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#A8B0C0] sm:text-base">
            Proposed automotive recognition milestones honoring significant community volume tiers,
            subject to formal eligibility verification and final reward terms.
          </p>
        </motion.div>

        {/* Three Large Prestige Automotive Cards */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
          {CAR_REWARDS.map((reward, idx) => (
            <motion.article
              key={reward.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101725] transition-all duration-300 hover:-translate-y-1 hover:border-[#E8B64D]/55 hover:shadow-[0_24px_60px_rgba(0,0,0,0.55)]"
            >
              {/* Automotive Showroom Photography */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#070A12]">
                <SmartImage
                  src={reward.image}
                  alt={reward.alt}
                  fallbackTitle={reward.vehicleName}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-107"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101725] via-[#070A12]/35 to-transparent"
                />

                {/* Clean Editorial Achievement Marker */}
                <div className="absolute top-5 left-5 flex items-center gap-2 text-xs font-medium text-[#F6D88C]">
                  <Award className="h-4 w-4 text-[#E8B64D]" aria-hidden="true" />
                  <span>{reward.category}</span>
                </div>
              </div>

              {/* Gold Hairline Separator */}
              <div className="px-7">
                <div className="h-[1px] w-full bg-gradient-to-r from-[#E8B64D]/75 via-[#F7931A]/30 to-transparent" />
              </div>

              {/* Milestone Details */}
              <div className="flex flex-1 flex-col justify-between p-7 pt-6">
                <div>
                  <p className="font-mono text-xs tracking-[0.16em] text-[#A8B0C0]">
                    PROPOSED TEAM BUSINESS MILESTONE
                  </p>
                  <p className="gold-gradient-text mt-1.5 font-mono text-3xl font-bold tracking-tight sm:text-4xl">
                    <AnimatedCounter value={reward.milestoneNumeric} prefix="$" />
                  </p>

                  <h3 className="mt-4 font-display text-2xl font-bold tracking-tight text-white">
                    {reward.vehicleName}
                  </h3>
                </div>

                <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-relaxed text-[#A8B0C0]">
                  {reward.eligibilityNote}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Eligibility Clarification Bar */}
        <div className="mt-8 flex items-start gap-3 rounded-xl border border-white/10 bg-[#101725]/60 px-6 py-4 text-xs leading-relaxed text-[#A8B0C0]">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-[#E8B64D]" aria-hidden="true" />
          <p>
            All automotive recognition tiers ($500,000 Hyundai Creta, $1,000,000 Toyota Fortuner,
            and $2,000,000 Range Rover) are proposed community milestones subject to final
            published qualification rules, verification audits, regional availability, and legal
            reward terms.
          </p>
        </div>
      </div>
    </section>
  );
}
