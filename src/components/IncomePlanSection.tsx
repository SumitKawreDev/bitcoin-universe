import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { AlertTriangle, Calendar, Layers, ShieldAlert } from 'lucide-react';
import { INCOME_PLANS } from '../data/siteData';
import { AnimatedCounter } from './AnimatedCounter';

export function IncomePlanSection() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>('plan-a');
  const prefersReducedMotion = useReducedMotion();

  const selectedPlan =
    INCOME_PLANS.find((plan) => plan.id === selectedPlanId) ?? INCOME_PLANS[0];

  return (
    <section
      id="income-plan"
      className="relative border-t border-white/8 bg-[#0A0F1B] py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-[520px] -translate-x-1/2 rounded-full bg-[#E8B64D]/6 blur-[140px]"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-70px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#E8B64D]" />
              <span className="font-display text-xs font-semibold tracking-[0.2em] text-[#E8B64D]">
                PROPOSED PARTICIPATION OUTLINE
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] font-bold tracking-tight text-white">
              Explore the Proposed{' '}
              <span className="gold-gradient-text">Participation Structure</span>
            </h2>
          </div>

          {/* Minimum Proposed Package Readout */}
          <div className="glass-surface flex items-center gap-5 rounded-xl border border-[#E8B64D]/30 px-6 py-4">
            <div>
              <p className="text-xs font-medium text-[#A8B0C0]">Minimum Proposed Package</p>
              <p className="mt-0.5 font-mono text-3xl font-semibold text-[#E8B64D] tabular-nums">
                <AnimatedCounter value={20} prefix="$" />
              </p>
            </div>
            <div className="h-10 w-[1px] bg-white/10" aria-hidden="true" />
            <div className="text-xs leading-relaxed text-[#A8B0C0]">
              <p className="font-medium text-white">Draft Specification</p>
              <p>Subject to legal approval</p>
            </div>
          </div>
        </motion.div>

        {/* Financial Dashboard Surface */}
        <div className="glass-surface overflow-hidden rounded-2xl border border-white/10">
          {/* Interactive Plan Selector Strip */}
          <div className="flex flex-col justify-between gap-4 border-b border-white/10 px-6 py-5 sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-3">
              <Layers className="h-5 w-5 text-[#E8B64D]" aria-hidden="true" />
              <div>
                <h3 className="font-display text-base font-semibold text-white">
                  Proposed Plan Categories Comparison
                </h3>
                <p className="text-xs text-[#A8B0C0]">
                  Illustrative parameters only · No guaranteed returns or simulated profits
                </p>
              </div>
            </div>

            <div
              role="tablist"
              aria-label="Compare proposed plans"
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-[#070A12]/80 p-1"
            >
              {INCOME_PLANS.map((plan) => {
                const active = plan.id === selectedPlanId;
                return (
                  <button
                    key={plan.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setSelectedPlanId(plan.id)}
                    className={`min-h-[36px] cursor-pointer rounded-md px-3.5 py-1.5 font-mono text-xs font-medium whitespace-nowrap transition-colors ${
                      active
                        ? 'bg-gradient-to-r from-[#E8B64D] to-[#F7931A] text-[#070A12]'
                        : 'text-[#A8B0C0] hover:text-white'
                    }`}
                  >
                    {plan.code}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Three Plan Cards */}
          <div className="grid grid-cols-1 divide-y divide-white/10 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {INCOME_PLANS.map((plan, idx) => {
              const isSelected = plan.id === selectedPlanId;
              return (
                <motion.div
                  key={plan.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={`relative cursor-pointer p-7 transition-colors duration-200 sm:p-8 ${
                    isSelected
                      ? 'bg-gradient-to-b from-[#E8B64D]/[0.09] via-[#101725]/60 to-transparent'
                      : 'hover:bg-white/[0.02]'
                  }`}
                >
                  {isSelected && (
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#E8B64D] to-[#F7931A]"
                    />
                  )}

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-[0.18em] text-[#E8B64D]">
                      {plan.code}
                    </span>
                    <span className="text-xs text-[#A8B0C0]">Proposed Parameter</span>
                  </div>

                  {/* Animated Rate Metric */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <AnimatedCounter
                      value={plan.dailyRate}
                      decimals={plan.dailyRate === 1 ? 0 : 2}
                      suffix="%"
                      className="text-5xl font-bold tracking-tight text-white"
                    />
                    <span className="font-display text-base font-medium text-[#E8B64D]">
                      Daily
                    </span>
                  </div>

                  {/* Proposed Duration */}
                  <div className="mt-4 flex items-center gap-2 text-sm text-[#C8D0DE]">
                    <Calendar className="h-4 w-4 text-[#F7931A]" aria-hidden="true" />
                    <span className="font-mono tabular-nums">
                      <AnimatedCounter value={plan.durationDays} /> Days Proposed Schedule
                    </span>
                  </div>

                  {/* Parameter Breakdown */}
                  <dl className="mt-7 space-y-3 border-t border-white/10 pt-5 text-sm">
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-[#A8B0C0]">Minimum Proposed Entry</dt>
                      <dd className="font-mono font-medium text-white tabular-nums">
                        {plan.minimumPackage}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-[#A8B0C0]">Proposed Daily Rate</dt>
                      <dd className="font-mono font-medium text-[#E8B64D] tabular-nums">
                        {plan.dailyRateLabel}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-[#A8B0C0]">Proposed Term</dt>
                      <dd className="font-mono font-medium text-white tabular-nums">
                        {plan.durationDays} Days
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <dt className="text-[#A8B0C0]">Return Guarantee</dt>
                      <dd className="font-medium text-[#C8D0DE]">None (Unverified Draft)</dd>
                    </div>
                  </dl>
                </motion.div>
              );
            })}
          </div>

          {/* Focused Summary Footer Bar */}
          <div className="border-t border-white/10 bg-[#070A12]/65 px-6 py-5 sm:px-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
              <div className="text-sm text-[#C8D0DE]">
                <span className="font-semibold text-[#E8B64D]">{selectedPlan.code} Selected:</span>{' '}
                {selectedPlan.dailyRateLabel} proposed daily parameter over{' '}
                <span className="font-mono tabular-nums">{selectedPlan.durationDays}</span> days
                (minimum proposed package <span className="font-mono tabular-nums">$20</span>).{' '}
                {selectedPlan.notes}
              </div>
              <a
                href="#contact"
                className="inline-flex min-h-[40px] shrink-0 items-center justify-center rounded-lg border border-[#E8B64D]/40 px-4 py-2 text-xs font-semibold text-[#E8B64D] whitespace-nowrap transition-colors hover:bg-[#E8B64D]/10"
              >
                Request Official Terms
              </a>
            </div>
          </div>
        </div>

        {/* Prominent Risk & Legal Verification Disclaimer */}
        <div
          role="note"
          aria-label="Important Risk and Verification Disclaimer"
          className="mt-8 rounded-2xl border border-[#F7931A]/35 bg-[#F7931A]/[0.06] p-6 sm:p-7"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#F7931A]/40 bg-[#F7931A]/15 text-[#F7931A]">
              <AlertTriangle className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <ShieldAlert className="h-4 w-4 text-[#E8B64D]" aria-hidden="true" />
                <span>Important Disclosure — Proposed Parameters Only (No Guaranteed Returns)</span>
              </div>
              <p className="text-sm leading-relaxed text-[#C8D0DE]">
                All plan categories (Plan A, Plan B, Plan C), minimum entry amounts, daily
                percentages, and 100-day schedules displayed above are{' '}
                <strong className="font-semibold text-white">proposed plan parameters only</strong>{' '}
                and do not represent guaranteed returns, fixed yields, or projected profits.
                Cryptocurrency participation involves substantial market volatility and risk of
                loss. Final program terms, calculation rules, and eligibility require independent
                verification and formal legal approval prior to participation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
