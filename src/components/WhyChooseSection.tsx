import { useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Award, BarChart3, BookOpen, Cpu, Globe, TrendingUp } from 'lucide-react';
import { WHY_CHOOSE_ITEMS, type WhyChooseItem } from '../data/siteData';

const ICON_MAP = {
  TrendingUp,
  BookOpen,
  BarChart3,
  Globe,
  Cpu,
  Award,
};

interface TiltCardProps {
  item: WhyChooseItem;
  index: number;
}

function TiltCard({ item, index }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50, hovered: false });

  const Icon = ICON_MAP[item.iconName];

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateY = (x - 0.5) * 9;
    const rotateX = (0.5 - y) * 9;
    setTilt({
      rotateX,
      rotateY,
      glowX: x * 100,
      glowY: y * 100,
      hovered: true,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0, glowX: 50, glowY: 50, hovered: false });
  };

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      style={{ perspective: 900 }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: prefersReducedMotion
            ? undefined
            : `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: tilt.hovered
            ? 'transform 120ms ease-out, border-color 220ms ease'
            : 'transform 380ms cubic-bezier(0.16, 1, 0.3, 1), border-color 220ms ease',
        }}
        className="glass-surface group relative h-full overflow-hidden rounded-2xl border border-white/10 p-7 hover:border-[#E8B64D]/50"
      >
        {/* Dynamic pointer-tracked gold radial glow */}
        <div
          aria-hidden="true"
          style={{
            opacity: tilt.hovered ? 1 : 0,
            background: `radial-gradient(280px circle at ${tilt.glowX}% ${tilt.glowY}%, rgba(232,182,77,0.16), transparent 65%)`,
          }}
          className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        />

        {/* Animated top hairline highlight */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[1.5px] origin-left scale-x-0 bg-gradient-to-r from-[#E8B64D] via-[#F7931A] to-transparent transition-transform duration-300 group-hover:scale-x-100"
        />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E8B64D]/30 bg-gradient-to-br from-[#E8B64D]/15 to-[#F7931A]/5 text-[#E8B64D] transition-colors duration-200 group-hover:border-[#E8B64D]/70 group-hover:text-[#F6D88C]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <span className="font-mono text-xs text-[#A8B0C0] tabular-nums">
              {item.index} · {item.focusArea}
            </span>
          </div>

          <h3 className="font-display text-xl font-semibold text-white transition-colors duration-200 group-hover:text-[#F6D88C]">
            {item.title}
          </h3>

          <p className="mt-3 text-sm leading-[1.7] text-[#A8B0C0]">{item.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function WhyChooseSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="why-choose-us"
      className="relative border-t border-white/8 bg-[#0A0F1B] py-24 lg:py-32"
    >
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
                PLATFORM ADVANTAGES
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] font-bold tracking-tight text-white">
              Why <span className="gold-gradient-text">Bitcoin Universe?</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-[#A8B0C0] sm:text-base">
            Six foundational pillars uniting cryptocurrency awareness, technical infrastructure,
            and structured global community participation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <TiltCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
