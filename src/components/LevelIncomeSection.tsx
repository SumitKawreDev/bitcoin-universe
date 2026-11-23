import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown, GitBranch, Info, ShieldCheck } from 'lucide-react';
import { DIRECT_INCOME_RATE, LEVEL_TIERS } from '../data/siteData';
import { AnimatedCounter } from './AnimatedCounter';

export function LevelIncomeSection() {
  const [expandedId, setExpandedId] = useState<string>('lvl-1');
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const toggleTier = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="level-income"
      className="relative border-t border-white/8 bg-[#070A12] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-12">
          {/* Left Summary & Direct Income Anchor */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#E8B64D]" />
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-[#E8B64D]">
                  NETWORK STRUCTURE PROPOSAL
                </span>
              </div>

              <h2 className="font-display text-[clamp(2rem,3.3vw,2.9rem)] leading-[1.12] font-bold tracking-tight text-white">
                Direct &amp; 20-Level{' '}
                <span className="gold-gradient-text">Distribution Hierarchy</span>
              </h2>

              <p className="mt-5 text-sm leading-[1.75] text-[#A8B0C0] sm:text-base">
                Explore the proposed community distribution hierarchy spanning direct referrals and
                twenty structured levels. Select any node in the interactive hierarchy to inspect
                its proposed tier scope and verification requirement.
              </p>

              {/* Direct Income Card */}
              <div className="glass-surface mt-8 overflow-hidden rounded-2xl border border-[#E8B64D]/35 p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-[#E8B64D]">
                      PROPOSED DIRECT INCOME
                    </p>
                    <p className="mt-2 font-mono text-5xl font-bold text-white tabular-nums">
                      <AnimatedCounter value={DIRECT_INCOME_RATE} suffix="%" />
                    </p>
                    <p className="mt-2 text-sm text-[#A8B0C0]">
                      Proposed direct referral parameter at the root of the community hierarchy.
                    </p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E8B64D]/35 bg-[#E8B64D]/12 text-[#E8B64D]">
                    <GitBranch className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                {/* Visual Root-to-Branch Connector */}
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-[#A8B0C0]">
                  <span>Hierarchy Depth: 20 Proposed Levels</span>
                  <span className="font-mono text-[#E8B64D] tabular-nums">9 Tier Bands</span>
                </div>
              </div>

              {/* Mandatory Verification Clarification */}
              <div className="mt-6 rounded-xl border border-white/10 bg-[#101725]/70 p-5">
                <div className="flex items-start gap-3">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#E8B64D]" aria-hidden="true" />
                  <p className="text-xs leading-relaxed text-[#A8B0C0]">
                    <strong className="font-semibold text-white">Verification Required:</strong>{' '}
                    All direct and level percentages listed here are proposed compensation
                    parameters. Exact qualification criteria, active leg conditions, and calculation
                    basis must be formally verified and legally approved prior to activation.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Interactive Vertical Hierarchy Tree */}
          <div className="lg:col-span-7">
            <div className="relative pl-7 sm:pl-10">
              {/* Vertical Animated Gold Spine */}
              <div
                aria-hidden="true"
                className="absolute top-3 bottom-3 left-2.5 w-[2px] bg-gradient-to-b from-[#E8B64D] via-[#F7931A]/60 to-[#E8B64D]/25 sm:left-3.5"
              />

              <div className="space-y-3.5">
                {LEVEL_TIERS.map((tier, idx) => {
                  const isExpanded = expandedId === tier.id;
                  const isHovered = hoveredId === tier.id;
                  const barWidth = Math.max(12, (tier.percentage / 20) * 100);

                  return (
                    <motion.div
                      key={tier.id}
                      initial={prefersReducedMotion ? false : { opacity: 0, x: 18 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                      onMouseEnter={() => setHoveredId(tier.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className="relative"
                    >
                      {/* Horizontal Connector Stem */}
                      <span
                        aria-hidden="true"
                        className={`absolute top-7 -left-4 h-[1.5px] w-4 transition-colors duration-200 sm:-left-6 sm:w-6 ${
                          isExpanded || isHovered ? 'bg-[#E8B64D]' : 'bg-white/15'
                        }`}
                      />

                      {/* Gold Node Indicator on Spine */}
                      <span
                        aria-hidden="true"
                        className={`absolute top-[22px] -left-[23px] flex h-3.5 w-3.5 items-center justify-center rounded-full border transition-all duration-200 sm:-left-[31px] ${
                          isExpanded || isHovered
                            ? 'scale-115 border-[#F6D88C] bg-[#E8B64D] shadow-[0_0_12px_rgba(232,182,77,0.75)]'
                            : 'border-[#E8B64D]/60 bg-[#070A12]'
                        }`}
                      />

                      {/* Tier Card */}
                      <div
                        className={`glass-surface overflow-hidden rounded-xl border transition-colors duration-200 ${
                          isExpanded
                            ? 'border-[#E8B64D]/55 bg-[#101725]/95'
                            : 'border-white/10 hover:border-[#E8B64D]/35'
                        }`}
                      >
                        <button
                          type="button"
                          onClick={() => toggleTier(tier.id)}
                          aria-expanded={isExpanded}
                          className="flex min-h-[60px] w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                        >
                          <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-5">
                            <span className="font-display text-base font-semibold text-white whitespace-nowrap">
                              {tier.levelLabel}
                            </span>

                            {/* Proportional Distribution Visual Bar */}
                            <div className="hidden h-1.5 flex-1 overflow-hidden rounded-full bg-white/8 sm:block">
                              <motion.div
                                initial={prefersReducedMotion ? false : { scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: idx * 0.05 }}
                                style={{ width: `${barWidth}%`, transformOrigin: 'left' }}
                                className="h-full rounded-full bg-gradient-to-r from-[#E8B64D] to-[#F7931A]"
                              />
                            </div>

                            <span className="text-xs text-[#A8B0C0] sm:hidden">
                              {tier.tierGroup}
                            </span>
                          </div>

                          <div className="flex shrink-0 items-center gap-4">
                            <span className="hidden text-xs text-[#A8B0C0] md:inline">
                              {tier.tierGroup}
                            </span>
                            <span className="font-mono text-lg font-semibold text-[#E8B64D] tabular-nums">
                              {tier.percentageLabel}
                            </span>
                            <ChevronDown
                              className={`h-4 w-4 text-[#A8B0C0] transition-transform duration-200 ${
                                isExpanded ? 'rotate-180 text-[#E8B64D]' : ''
                              }`}
                              aria-hidden="true"
                            />
                          </div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-white/10 bg-[#070A12]/45 px-5 py-4 text-sm sm:px-6">
                                <p className="leading-relaxed text-[#D6DCE8]">
                                  {tier.proposedScope}
                                </p>
                                <div className="mt-3 flex items-start gap-2 text-xs text-[#A8B0C0]">
                                  <ShieldCheck
                                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#E8B64D]"
                                    aria-hidden="true"
                                  />
                                  <span>{tier.verificationNote}</span>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
