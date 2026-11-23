import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { AlertCircle, Users } from 'lucide-react';
import { ROYALTY_TIERS } from '../data/siteData';
import { AnimatedCounter } from './AnimatedCounter';

const NETWORK_NODES = [
  { id: 'n1', x: 74, y: 58, label: 'Qualifier A' },
  { id: 'n2', x: 286, y: 58, label: 'Qualifier B' },
  { id: 'n3', x: 52, y: 174, label: 'Qualifier C' },
  { id: 'n4', x: 308, y: 174, label: 'Qualifier D' },
  { id: 'n5', x: 112, y: 266, label: 'Qualifier E' },
  { id: 'n6', x: 248, y: 266, label: 'Qualifier F' },
];

export function RoyaltySection() {
  const [activeTierId, setActiveTierId] = useState<string>(ROYALTY_TIERS[0].id);
  const prefersReducedMotion = useReducedMotion();

  const activeTier =
    ROYALTY_TIERS.find((tier) => tier.id === activeTierId) ?? ROYALTY_TIERS[0];

  return (
    <section
      id="royalty"
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
                PROPOSED ROYALTY POOL STRUCTURE
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] font-bold tracking-tight text-white">
              Grow Together.{' '}
              <span className="gold-gradient-text">Achieve Together.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#A8B0C0] sm:text-base">
            Proposed company turnover royalty pools structured around equal distribution among
            eligible qualifying participants upon formal verification.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left: Three Turnover Pool Cards */}
          <div className="flex flex-col gap-5 lg:col-span-7">
            {ROYALTY_TIERS.map((tier, idx) => {
              const isSelected = tier.id === activeTierId;
              return (
                <motion.button
                  key={tier.id}
                  type="button"
                  onClick={() => setActiveTierId(tier.id)}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`glass-surface group relative w-full cursor-pointer overflow-hidden rounded-2xl border p-6 text-left transition-all duration-200 sm:p-7 ${
                    isSelected
                      ? 'border-[#E8B64D]/65 shadow-[0_0_32px_rgba(232,182,77,0.12)]'
                      : 'border-white/10 hover:border-[#E8B64D]/35'
                  }`}
                >
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <p className="font-mono text-xs tracking-[0.16em] text-[#A8B0C0]">
                        PROPOSED COMPANY TURNOVER TIER
                      </p>
                      <div className="mt-1.5 flex items-baseline gap-3">
                        <AnimatedCounter
                          value={tier.turnover}
                          prefix="$"
                          className="text-3xl font-bold text-white sm:text-4xl"
                        />
                        <span className="font-display text-sm font-medium text-[#A8B0C0]">
                          Company Turnover
                        </span>
                      </div>
                      <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-[#A8B0C0]">
                        {tier.distributionNote}
                      </p>
                    </div>

                    <div className="flex shrink-0 flex-row items-baseline justify-between gap-3 border-t border-white/10 pt-4 sm:flex-col sm:items-end sm:border-t-0 sm:border-l sm:pt-0 sm:pl-6">
                      <span className="text-xs font-medium text-[#A8B0C0]">
                        Proposed Royalty Pool
                      </span>
                      <span className="gold-gradient-text font-mono text-4xl font-bold tabular-nums">
                        {tier.poolLabel}
                      </span>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Animated Equal-Distribution Network Visualization */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="glass-surface flex flex-col justify-between rounded-2xl border border-white/10 p-6 sm:p-8 lg:col-span-5"
          >
            <div>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-mono text-xs tracking-[0.16em] text-[#E8B64D]">
                    EQUAL DISTRIBUTION MODEL
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-white">
                    {activeTier.turnoverLabel} · {activeTier.poolLabel} Proposed Pool
                  </h3>
                </div>
                <Users className="h-5 w-5 text-[#E8B64D]" aria-hidden="true" />
              </div>

              <p className="mt-2 text-xs leading-relaxed text-[#A8B0C0]">
                Visual representation of how a proposed pool share is divided equally among
                qualifying participants once eligibility criteria are verified.
              </p>
            </div>

            {/* Animated SVG Network Distribution Diagram */}
            <div className="my-6 flex items-center justify-center">
              <svg
                viewBox="0 0 360 310"
                className="h-auto w-full max-w-[360px]"
                role="img"
                aria-label="Network illustration showing equal pool distribution from a central royalty pool node to six eligible qualifying participant nodes"
              >
                <defs>
                  <linearGradient id="royaltyLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#E8B64D" />
                    <stop offset="100%" stopColor="#F7931A" />
                  </linearGradient>
                  <radialGradient id="royaltyCoreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#E8B64D" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#E8B64D" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ambient Core Glow */}
                <circle cx="180" cy="155" r="88" fill="url(#royaltyCoreGlow)" />

                {/* Outer Orbital Guide */}
                <circle
                  cx="180"
                  cy="155"
                  r="116"
                  fill="none"
                  stroke="rgba(232,182,77,0.16)"
                  strokeDasharray="4 6"
                  strokeWidth="1"
                />

                {/* Connection Spokes & Animated Signal Pulses */}
                {NETWORK_NODES.map((node, idx) => (
                  <g key={node.id}>
                    <line
                      x1="180"
                      y1="155"
                      x2={node.x}
                      y2={node.y}
                      stroke="url(#royaltyLineGrad)"
                      strokeOpacity="0.45"
                      strokeWidth="1.4"
                    />
                    {!prefersReducedMotion && (
                      <motion.circle
                        r="3"
                        fill="#F6D88C"
                        initial={{ cx: 180, cy: 155, opacity: 0 }}
                        animate={{
                          cx: [180, node.x],
                          cy: [155, node.y],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2.2,
                          repeat: Infinity,
                          delay: idx * 0.34,
                          ease: 'easeInOut',
                        }}
                      />
                    )}
                    {/* Participant Node */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r="18"
                      fill="#0B111E"
                      stroke="#E8B64D"
                      strokeOpacity="0.65"
                      strokeWidth="1.2"
                    />
                    <text
                      x={node.x}
                      y={node.y + 4}
                      textAnchor="middle"
                      fill="#E8B64D"
                      fontSize="9"
                      fontFamily="JetBrains Mono, monospace"
                    >
                      1/N
                    </text>
                  </g>
                ))}

                {/* Central Pool Hub */}
                <circle
                  cx="180"
                  cy="155"
                  r="42"
                  fill="#070A12"
                  stroke="url(#royaltyLineGrad)"
                  strokeWidth="2.2"
                />
                <text
                  x="180"
                  y="151"
                  textAnchor="middle"
                  fill="#FFFFFF"
                  fontSize="16"
                  fontWeight="700"
                  fontFamily="JetBrains Mono, monospace"
                >
                  {activeTier.poolLabel}
                </text>
                <text
                  x="180"
                  y="168"
                  textAnchor="middle"
                  fill="#A8B0C0"
                  fontSize="9"
                  fontFamily="Plus Jakarta Sans, sans-serif"
                >
                  PROPOSED POOL
                </text>
              </svg>
            </div>

            {/* Unverified Pool Disclaimer */}
            <div className="rounded-xl border border-white/10 bg-[#070A12]/60 p-4">
              <div className="flex items-start gap-2.5 text-xs leading-relaxed text-[#A8B0C0]">
                <AlertCircle
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#F7931A]"
                  aria-hidden="true"
                />
                <span>
                  All turnover thresholds ($2,500 / $5,000 / $11,000) and pool percentages (3% / 2%
                  / 1%) are proposed, unverified parameters subject to formal auditing and final
                  eligibility terms.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
