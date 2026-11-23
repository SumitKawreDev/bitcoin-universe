import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { BRAND_CONTACT, FAQ_ITEMS } from '../data/siteData';

export function FaqSection() {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section
      id="faq"
      className="relative border-t border-white/8 bg-[#070A12] py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Intro Column */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#E8B64D]" />
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-[#E8B64D]">
                  FREQUENTLY ASKED QUESTIONS
                </span>
              </div>

              <h2 className="font-display text-[clamp(2rem,3.3vw,2.9rem)] leading-[1.12] font-bold tracking-tight text-white">
                Clarity on Every <span className="gold-gradient-text">Platform Detail</span>
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-[#A8B0C0] sm:text-base">
                Straightforward answers covering ecosystem structure, supported BEP-20 network
                specifications, risk disclosures, and support channels.
              </p>

              <div className="glass-surface mt-8 rounded-2xl border border-white/10 p-6">
                <div className="flex items-center gap-2.5 text-[#E8B64D]">
                  <HelpCircle className="h-5 w-5" aria-hidden="true" />
                  <span className="font-display text-sm font-semibold text-white">
                    Need Further Clarification?
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#A8B0C0]">
                  Speak directly with our support desk at{' '}
                  <a
                    href={BRAND_CONTACT.phoneHref}
                    className="font-mono font-medium text-[#E8B64D] hover:underline"
                  >
                    {BRAND_CONTACT.phoneDisplay}
                  </a>{' '}
                  or jump to the contact section below.
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex min-h-[40px] items-center justify-center rounded-lg border border-[#E8B64D]/40 px-4 py-2 text-xs font-semibold text-[#E8B64D] transition-colors hover:bg-[#E8B64D]/10"
                >
                  Go to Contact Section
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Accordion List */}
          <div className="space-y-3.5 lg:col-span-8">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openId === item.id;
              return (
                <motion.div
                  key={item.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  className={`glass-surface overflow-hidden rounded-xl border transition-colors duration-200 ${
                    isOpen ? 'border-[#E8B64D]/55' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${item.id}`}
                      className="flex min-h-[64px] w-full cursor-pointer items-center justify-between gap-4 px-6 py-4.5 text-left"
                    >
                      <span className="flex items-baseline gap-3.5">
                        <span className="font-mono text-xs text-[#E8B64D] tabular-nums">
                          0{idx + 1}.
                        </span>
                        <span className="font-display text-base font-semibold text-white sm:text-lg">
                          {item.question}
                        </span>
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 shrink-0 text-[#A8B0C0] transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#E8B64D]' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${item.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/10 px-6 py-5 pl-14 text-sm leading-[1.75] text-[#C8D0DE]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
