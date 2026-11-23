import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { Compass, Eye, ShieldCheck, Target } from 'lucide-react';
import { IMAGES } from '../data/siteData';
import { SmartImage } from './SmartImage';

const ABOUT_PILLARS = [
  'Structured cryptocurrency trading knowledge and risk-first orientation',
  'Accessible financial education focused on blockchain fundamentals',
  'Timely digital asset market perspectives for independent evaluation',
  'Global community collaboration anchored in transparent disclosures',
];

export function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [-18, 18]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden border-t border-white/8 bg-[#070A12] py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#E8B64D]/6 blur-[120px]"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Visual Column with Glowing Gold Orbital Graphic & Parallax */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex flex-col justify-center lg:col-span-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-[#E8B64D]/25 bg-[#101725] lg:h-full lg:min-h-[540px]">
              {/* Parallax Blockchain Ecosystem Artwork */}
              <motion.div
                style={prefersReducedMotion ? undefined : { y: imageY }}
                className="h-full w-full scale-105"
              >
                <SmartImage
                  src={IMAGES.about}
                  alt="Interconnected golden 3D blockchain ledger cubes and translucent glass network pathways"
                  fallbackTitle="Bitcoin Universe Blockchain Ecosystem"
                  className="h-[380px] w-full object-cover sm:h-[460px] lg:h-full"
                />
              </motion.div>

              {/* Soft Gradient Framing */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#070A12]/85 via-transparent to-[#070A12]/25"
              />

              {/* Glowing Gold Circular Graphic Overlay */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-6 right-6 flex h-28 w-28 items-center justify-center sm:h-32 sm:w-32"
              >
                <svg viewBox="0 0 120 120" className="animate-slow-orbit h-full w-full">
                  <defs>
                    <linearGradient id="aboutOrbitalGold" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#F6D88C" />
                      <stop offset="100%" stopColor="#F7931A" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="60"
                    cy="60"
                    r="54"
                    fill="none"
                    stroke="url(#aboutOrbitalGold)"
                    strokeWidth="1.2"
                    strokeDasharray="5 5"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="38"
                    fill="rgba(7,10,18,0.65)"
                    stroke="url(#aboutOrbitalGold)"
                    strokeOpacity="0.65"
                    strokeWidth="1"
                  />
                  <circle cx="60" cy="6" r="3" fill="#E8B64D" />
                </svg>
                <Compass className="absolute h-6 w-6 text-[#E8B64D]" />
              </div>

              {/* Quiet Editorial Caption Strip */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <p className="font-mono text-xs tracking-wider text-[#E8B64D]">
                  BLOCKCHAIN · EDUCATION · GLOBAL NETWORK
                </p>
                <p className="mt-1.5 max-w-md text-sm leading-relaxed text-white/90">
                  Built to bridge cryptocurrency knowledge, analytical clarity, and structured
                  community participation.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Narrative Column */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#E8B64D]" />
              <span className="font-display text-xs font-semibold tracking-[0.2em] text-[#E8B64D]">
                ABOUT BITCOIN UNIVERSE
              </span>
            </div>

            <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] font-bold tracking-tight text-white">
              A New Universe of{' '}
              <span className="gold-gradient-text">Digital Possibilities</span>
            </h2>

            <p className="mt-6 text-base leading-[1.75] text-[#C8D0DE]">
              Bitcoin Universe is a cryptocurrency-focused digital platform designed to bring
              together trading knowledge, financial education, market insights, and community
              participation.
            </p>

            {/* Vision & Mission Two-Column Panel */}
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="glass-surface rounded-xl border border-white/10 p-6 transition-colors duration-200 hover:border-[#E8B64D]/35">
                <div className="mb-3 flex items-center gap-2.5 text-[#E8B64D]">
                  <Eye className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-base font-semibold text-white">Our Vision</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#A8B0C0]">
                  To create a globally connected digital financial ecosystem where trading,
                  learning, and guidance work together.
                </p>
              </div>

              <div className="glass-surface rounded-xl border border-white/10 p-6 transition-colors duration-200 hover:border-[#E8B64D]/35">
                <div className="mb-3 flex items-center gap-2.5 text-[#F7931A]">
                  <Target className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <h3 className="font-display text-base font-semibold text-white">Our Mission</h3>
                </div>
                <p className="text-sm leading-relaxed text-[#A8B0C0]">
                  To make cryptocurrency education and digital financial knowledge more accessible
                  through technology, innovation, and community engagement.
                </p>
              </div>
            </div>

            {/* Key Ecosystem Highlights */}
            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-[#A8B0C0]">
                ECOSYSTEM FOUNDATIONS
              </p>
              <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {ABOUT_PILLARS.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-[#D6DCE8]">
                    <ShieldCheck
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#E8B64D]"
                      aria-hidden="true"
                    />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
