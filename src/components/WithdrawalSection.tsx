import { motion, useReducedMotion } from 'motion/react';
import { AlertTriangle, CheckCircle2, ShieldAlert } from 'lucide-react';
import { IMAGES, WITHDRAWAL_SPECS } from '../data/siteData';
import { SmartImage } from './SmartImage';

export function WithdrawalSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="withdrawal"
      className="relative border-t border-white/8 bg-[#070A12] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12">
          {/* Left: Financial Specification Card */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-6"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#E8B64D]" />
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-[#E8B64D]">
                  SETTLEMENT SPECIFICATIONS
                </span>
              </div>

              <h2 className="font-display text-[clamp(2rem,3.3vw,2.9rem)] leading-[1.12] font-bold tracking-tight text-white">
                Digital Asset{' '}
                <span className="gold-gradient-text">Withdrawal Information</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#A8B0C0] sm:text-base">
                Review the proposed on-chain settlement parameters for USDT withdrawals on the BNB
                Smart Chain (BEP-20) network.
              </p>

              {/* Structured Financial Information Card */}
              <div className="glass-surface mt-8 overflow-hidden rounded-2xl border border-white/10">
                <dl className="divide-y divide-white/10">
                  {WITHDRAWAL_SPECS.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex flex-col justify-between gap-1 px-6 py-4.5 sm:flex-row sm:items-center"
                    >
                      <dt className="text-sm text-[#A8B0C0]">{spec.label}</dt>
                      <dd
                        className={`font-mono text-sm font-semibold tabular-nums sm:text-base ${
                          spec.emphasis ? 'text-[#E8B64D]' : 'text-white'
                        }`}
                      >
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Mandatory Address & Network Verification Warning */}
            <div
              role="alert"
              className="mt-6 rounded-2xl border border-[#F7931A]/40 bg-[#F7931A]/[0.07] p-6"
            >
              <div className="flex items-start gap-3.5">
                <AlertTriangle
                  className="mt-0.5 h-5 w-5 shrink-0 text-[#F7931A]"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-display text-sm font-semibold text-white">
                    Verify Receiving Wallet Address &amp; BEP-20 Network Before Sending
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-[#C8D0DE]">
                    Blockchain transfers are final and irreversible. Before submitting any
                    withdrawal request, carefully confirm that your destination address is exact
                    and explicitly supports{' '}
                    <strong className="font-semibold text-white">
                      USDT on BNB Smart Chain (BEP-20)
                    </strong>
                    . Sending funds to an unsupported chain (such as ERC-20 or TRC-20) or an
                    incorrect address can result in permanent loss of digital assets.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Blockchain Transaction Visual */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:col-span-6"
          >
            <div className="relative flex flex-1 flex-col overflow-hidden rounded-2xl border border-[#E8B64D]/25 bg-[#101725]">
              <div className="relative min-h-[300px] flex-1 overflow-hidden">
                <SmartImage
                  src={IMAGES.withdrawal}
                  alt="Dark-luxury 3D visualization of a golden hexagonal blockchain settlement channel transferring USDT tokens"
                  fallbackTitle="BEP-20 Settlement Channel"
                  className="h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#101725] via-[#070A12]/25 to-transparent"
                />
              </div>

              <div className="border-t border-white/10 p-6 sm:p-8">
                <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#E8B64D]">
                  <ShieldAlert className="h-4 w-4" aria-hidden="true" />
                  <span>ON-CHAIN SAFETY CHECKLIST</span>
                </div>
                <ul className="mt-4 space-y-3 text-sm text-[#D6DCE8]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#E8B64D]"
                      aria-hidden="true"
                    />
                    <span>Confirm network selection is set strictly to BNB Smart Chain (BEP-20).</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#E8B64D]"
                      aria-hidden="true"
                    />
                    <span>Cross-check the first six and final six characters of your receiving address.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#E8B64D]"
                      aria-hidden="true"
                    />
                    <span>Review the proposed 10% administrative charge and $10 minimum threshold prior to confirmation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
