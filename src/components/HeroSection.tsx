import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Compass } from 'lucide-react';
import { IMAGES } from '../data/siteData';
import { ParticleCanvas } from './ParticleCanvas';
import { SmartImage } from './SmartImage';

const HEADLINE_START = ['Explore', 'the', 'Future', 'of'];
const HEADLINE_HIGHLIGHT = ['Digital', 'Finance'];

const HERO_PILLARS = [
  { label: 'Trading', href: '#services', detail: 'Structured Market Exposure' },
  { label: 'Learning', href: '#about', detail: 'Blockchain & Risk Education' },
  { label: 'Community', href: '#royalty', detail: 'Global Member Participation' },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.12]);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[96vh] w-full max-w-full items-center overflow-hidden bg-[#070A12] pt-24 pb-16 lg:min-h-screen lg:pt-28 lg:pb-20"
    >
      {/* Full-bleed Cinematic Background Visual with Subtle Parallax */}
      <motion.div
        style={prefersReducedMotion ? undefined : { y: bgY, scale: bgScale }}
        className="pointer-events-none absolute inset-0"
      >
        <SmartImage
          src={IMAGES.hero}
          alt="Giant brushed-gold Bitcoin coin orbiting a dark futuristic digital planet connected by golden blockchain constellations in deep space"
          fallbackTitle="Bitcoin Universe Cosmic Visual"
          priority
          className="h-full w-full object-cover object-center opacity-70"
        />
      </motion.div>

      {/* Measured Atmospheric Scrims for Crisp Text Legibility */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#070A12]/96 via-[#070A12]/78 to-[#070A12]/42"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#070A12]/70 via-transparent to-[#070A12]"
      />

      {/* Ambient Floating Gold Particles & Constellation Links */}
      <ParticleCanvas />

      {/* Subtle Warm Radial Halo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 right-[8%] h-[420px] w-[420px] rounded-full bg-[#F7931A]/10 blur-[130px]"
      />

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto grid w-full min-w-0 max-w-[1400px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* Left Content Column */}
        <div className="lg:col-span-7">
          {/* Clean Unboxed Kicker (Zero-Pill Discipline) */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-[1px] w-10 bg-gradient-to-r from-[#E8B64D] to-[#F7931A]" />
            <span className="font-display text-xs font-semibold tracking-[0.22em] text-[#E8B64D] sm:text-sm">
              WELCOME TO BITCOIN UNIVERSE
            </span>
          </motion.div>

          {/* Word-by-Word Animated Display Headline */}
          <h1 className="max-w-2xl font-display text-[clamp(2.5rem,5.2vw,4.35rem)] leading-[1.06] font-bold tracking-[-0.025em] text-white">
            {HEADLINE_START.map((word, idx) => (
              <motion.span
                key={`${word}-${idx}`}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.08 + idx * 0.075,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mr-[0.24em] inline-block"
              >
                {word}
              </motion.span>
            ))}
            <span className="inline-block">
              {HEADLINE_HIGHLIGHT.map((word, idx) => (
                <motion.span
                  key={`${word}-${idx}`}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.08 + (HEADLINE_START.length + idx) * 0.085,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="gold-gradient-text mr-[0.24em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Description */}
          <motion.p
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base leading-[1.7] text-[#C8D0DE] sm:text-lg"
          >
            Discover a digital ecosystem combining cryptocurrency trading, financial education,
            market insights, and global community participation.
          </motion.p>

          {/* Primary & Secondary CTA Row */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button
              type="button"
              onClick={() => scrollToSection('#about')}
              className="gold-button-sheen group inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#E8B64D] to-[#F7931A] px-7 py-3.5 text-sm font-semibold text-[#070A12] whitespace-nowrap shadow-[0_0_32px_rgba(232,182,77,0.32)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_42px_rgba(247,147,26,0.45)] sm:text-base"
            >
              <span>Explore Our Universe</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('#services')}
              className="inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2.5 rounded-xl border border-white/18 bg-[#101725]/70 px-7 py-3.5 text-sm font-medium text-white whitespace-nowrap backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E8B64D]/60 hover:bg-[#101725]/90 sm:text-base"
            >
              <Compass className="h-4 w-4 text-[#E8B64D]" />
              <span>Discover Our Platform</span>
            </button>
          </motion.div>

          {/* Three Feature Highlights Below Buttons */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 grid max-w-xl grid-cols-1 gap-5 border-t border-white/12 pt-7 sm:grid-cols-3 sm:gap-6"
          >
            {HERO_PILLARS.map((pillar, idx) => (
              <button
                key={pillar.label}
                type="button"
                onClick={() => scrollToSection(pillar.href)}
                className="group cursor-pointer text-left transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#E8B64D]/80 tabular-nums">
                    0{idx + 1}
                  </span>
                  <span className="font-display text-base font-semibold text-white transition-colors group-hover:text-[#E8B64D]">
                    {pillar.label}
                  </span>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-[#A8B0C0]">{pillar.detail}</p>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Right Floating Orbital Bitcoin Visual Composition */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden items-center justify-center lg:col-span-5 lg:flex"
        >
          <motion.div
            animate={prefersReducedMotion ? undefined : { y: [-8, 8, -8] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative flex h-[430px] w-[430px] items-center justify-center"
          >
            {/* Outer Golden Energy Ring */}
            <svg
              viewBox="0 0 420 420"
              className="animate-slow-orbit absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="heroRingOuter" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E8B64D" stopOpacity="0.65" />
                  <stop offset="50%" stopColor="#F7931A" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#E8B64D" stopOpacity="0.55" />
                </linearGradient>
              </defs>
              <circle
                cx="210"
                cy="210"
                r="196"
                fill="none"
                stroke="url(#heroRingOuter)"
                strokeWidth="1"
                strokeDasharray="6 8"
              />
              <circle cx="210" cy="14" r="4" fill="#E8B64D" />
              <circle cx="406" cy="210" r="3" fill="#F7931A" />
              <circle cx="210" cy="406" r="3.5" fill="#E8B64D" />
            </svg>

            {/* Inner Counter-Rotating Orbital Ring */}
            <svg
              viewBox="0 0 340 340"
              className="animate-slow-orbit-reverse absolute h-[330px] w-[330px]"
              aria-hidden="true"
            >
              <circle
                cx="170"
                cy="170"
                r="156"
                fill="none"
                stroke="rgba(232,182,77,0.28)"
                strokeWidth="1"
              />
              <circle cx="170" cy="14" r="3" fill="#F7931A" />
              <circle cx="31" cy="240" r="2.5" fill="#E8B64D" />
            </svg>

            {/* Central Glass Portal Frame with Slow-Rotating Bitcoin Emblem */}
            <div className="relative flex h-[250px] w-[250px] items-center justify-center rounded-full border border-[#E8B64D]/35 bg-[#070A12]/55 shadow-[0_0_80px_rgba(247,147,26,0.2)] backdrop-blur-md">
              <motion.svg
                viewBox="0 0 180 180"
                animate={prefersReducedMotion ? undefined : { rotateY: [0, 360] }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
                className="h-40 w-40 drop-shadow-[0_0_24px_rgba(232,182,77,0.45)]"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="coinFace" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FCE4A6" />
                    <stop offset="48%" stopColor="#E8B64D" />
                    <stop offset="100%" stopColor="#D6750B" />
                  </linearGradient>
                  <linearGradient id="coinInner" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#181F30" />
                    <stop offset="100%" stopColor="#090D17" />
                  </linearGradient>
                </defs>
                <circle
                  cx="90"
                  cy="90"
                  r="82"
                  fill="url(#coinInner)"
                  stroke="url(#coinFace)"
                  strokeWidth="4"
                />
                <circle
                  cx="90"
                  cy="90"
                  r="69"
                  fill="none"
                  stroke="url(#coinFace)"
                  strokeOpacity="0.45"
                  strokeWidth="1.2"
                  strokeDasharray="4 4"
                />
                <path
                  d="M78 44v10h-9v8h9v56h-9v8h9v10h8v-10h9v10h8v-10.4c14.6-1.4 23.4-9.2 23.4-21.3 0-9.9-6.2-16.4-16.5-18.3 8.1-2.5 13.1-8.5 13.1-16.8 0-11-8.4-17.6-21.2-18.7V44h-8v10h-9V44h-8zm8 18.2h12.6c7.6 0 12.6 3.4 12.6 9.8 0 6.7-5.2 10.3-13.2 10.3H86V62.2zm0 28.4h14.4c8.7 0 14.4 3.8 14.4 10.9 0 7.4-5.9 11.3-14.9 11.3H86V90.6z"
                  fill="url(#coinFace)"
                />
              </motion.svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
