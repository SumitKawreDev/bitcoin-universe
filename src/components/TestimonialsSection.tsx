import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Edit3,
  Pause,
  Play,
  Quote,
  RotateCcw,
  Star,
  User,
} from 'lucide-react';
import {
  INITIAL_TESTIMONIAL_PLACEHOLDERS,
  type TestimonialPlaceholder,
} from '../data/siteData';

export function TestimonialsSection() {
  const [slides, setSlides] = useState<TestimonialPlaceholder[]>(
    INITIAL_TESTIMONIAL_PLACEHOLDERS
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [editing, setEditing] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (isPaused || editing || prefersReducedMotion) return;
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 6200);
    return () => window.clearInterval(interval);
  }, [isPaused, editing, prefersReducedMotion, slides.length]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[activeIndex];

  const updateCurrentSlide = (patch: Partial<TestimonialPlaceholder>) => {
    setSlides((prev) =>
      prev.map((item, idx) => (idx === activeIndex ? { ...item, ...patch } : item))
    );
  };

  const resetPlaceholders = () => {
    setSlides(INITIAL_TESTIMONIAL_PLACEHOLDERS);
    setEditing(false);
  };

  return (
    <section
      id="testimonials"
      className="relative border-t border-white/8 bg-[#0A0F1B] py-24 lg:py-32"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        {/* Heading & Controls */}
        <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#E8B64D]" />
              <span className="font-display text-xs font-semibold tracking-[0.2em] text-[#E8B64D]">
                VERIFIED FEEDBACK FRAMEWORK
              </span>
            </div>
            <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] font-bold tracking-tight text-white">
              Community <span className="gold-gradient-text">Experiences</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#A8B0C0]">
              Transparent placeholder cards reserved for verified community submissions. No
              fabricated reviews, fictional identities, or unverified income claims are shown.
            </p>
          </div>

          {/* Slider Controls */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => setEditing((prev) => !prev)}
              className={`inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium whitespace-nowrap transition-colors ${
                editing
                  ? 'border-[#E8B64D] bg-[#E8B64D]/15 text-[#E8B64D]'
                  : 'border-white/15 bg-white/[0.03] text-[#C8D0DE] hover:border-[#E8B64D]/45 hover:text-white'
              }`}
            >
              <Edit3 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{editing ? 'Done Editing Slot' : 'Edit Placeholder Slot'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? 'Resume automatic slider' : 'Pause automatic slider'}
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-[#C8D0DE] transition-colors hover:border-[#E8B64D]/50 hover:text-white"
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>

            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous community slot"
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-white transition-colors hover:border-[#E8B64D]/60 hover:bg-[#E8B64D]/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next community slot"
              className="flex h-[42px] w-[42px] cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/[0.03] text-white transition-colors hover:border-[#E8B64D]/60 hover:bg-[#E8B64D]/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Featured Active Testimonial Card */}
        <div className="glass-surface relative overflow-hidden rounded-2xl border border-white/10 p-7 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={prefersReducedMotion ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, x: -18 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center"
            >
              {/* Profile Placeholder Column */}
              <div className="flex flex-col items-start gap-4 border-b border-white/10 pb-6 lg:col-span-4 lg:border-r lg:border-b-0 lg:pr-8 lg:pb-0">
                <div className="flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#E8B64D]/35 bg-[#070A12] text-[#E8B64D]/80"
                  >
                    <User className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-[#E8B64D] tabular-nums">
                      SLOT 0{activeIndex + 1} / 0{slides.length}
                    </p>
                    {editing ? (
                      <input
                        type="text"
                        value={currentSlide.memberName}
                        onChange={(e) => updateCurrentSlide({ memberName: e.target.value })}
                        aria-label="Editable member name placeholder"
                        className="mt-1 w-full rounded-md border border-[#E8B64D]/45 bg-[#070A12] px-2.5 py-1.5 text-sm font-semibold text-white"
                      />
                    ) : (
                      <h3 className="mt-1 font-display text-lg font-semibold text-white">
                        {currentSlide.memberName}
                      </h3>
                    )}
                    {editing ? (
                      <input
                        type="text"
                        value={currentSlide.memberRole}
                        onChange={(e) => updateCurrentSlide({ memberRole: e.target.value })}
                        aria-label="Editable member role placeholder"
                        className="mt-1.5 w-full rounded-md border border-white/15 bg-[#070A12] px-2.5 py-1 text-xs text-[#C8D0DE]"
                      />
                    ) : (
                      <p className="text-xs text-[#A8B0C0]">{currentSlide.memberRole}</p>
                    )}
                  </div>
                </div>

                {/* Star Rating Area — Only populated when genuine rating is entered */}
                <div className="w-full border-t border-white/10 pt-4">
                  {currentSlide.ratingValue !== null ? (
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: 5 }).map((_, starIdx) => (
                        <Star
                          key={starIdx}
                          className={`h-4 w-4 ${
                            starIdx < (currentSlide.ratingValue ?? 0)
                              ? 'fill-[#E8B64D] text-[#E8B64D]'
                              : 'text-white/20'
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                      <span className="ml-2 font-mono text-xs text-[#E8B64D] tabular-nums">
                        {currentSlide.ratingValue}.0 / 5.0
                      </span>
                    </div>
                  ) : (
                    <p className="text-xs leading-relaxed text-[#A8B0C0]">
                      {currentSlide.ratingStatus}
                    </p>
                  )}

                  {editing && (
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[11px] text-[#A8B0C0]">Genuine rating:</span>
                      {[null, 1, 2, 3, 4, 5].map((val) => (
                        <button
                          key={String(val)}
                          type="button"
                          onClick={() => updateCurrentSlide({ ratingValue: val })}
                          className={`min-h-[28px] min-w-[28px] cursor-pointer rounded border px-1.5 font-mono text-xs ${
                            currentSlide.ratingValue === val
                              ? 'border-[#E8B64D] bg-[#E8B64D]/20 text-[#E8B64D]'
                              : 'border-white/15 text-[#A8B0C0] hover:text-white'
                          }`}
                        >
                          {val === null ? 'None' : val}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Feedback Text Placeholder Column */}
              <div className="lg:col-span-8">
                <Quote className="mb-4 h-7 w-7 text-[#E8B64D]/60" aria-hidden="true" />
                {editing ? (
                  <div className="space-y-3">
                    <textarea
                      rows={4}
                      value={currentSlide.feedback}
                      onChange={(e) => updateCurrentSlide({ feedback: e.target.value })}
                      aria-label="Editable feedback text placeholder"
                      className="w-full rounded-xl border border-[#E8B64D]/45 bg-[#070A12] p-4 text-sm leading-relaxed text-white"
                    />
                    <div className="flex justify-end">
                      <button
                        type="button"
                        onClick={resetPlaceholders}
                        className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-[#A8B0C0] hover:text-[#E8B64D]"
                      >
                        <RotateCcw className="h-3.5 w-3.5" />
                        <span>Reset Default Placeholders</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <blockquote className="font-display text-xl leading-[1.6] font-medium text-[#E5EBF5] sm:text-2xl">
                    {currentSlide.feedback}
                  </blockquote>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Thumbnail Slot Selector Strip */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {slides.map((slide, idx) => {
            const active = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`cursor-pointer rounded-xl border px-4 py-3 text-left transition-colors ${
                  active
                    ? 'border-[#E8B64D]/60 bg-[#101725] text-white'
                    : 'border-white/8 bg-[#070A12]/50 text-[#A8B0C0] hover:border-white/20 hover:text-white'
                }`}
              >
                <span className="block font-mono text-[11px] text-[#E8B64D] tabular-nums">
                  0{idx + 1}
                </span>
                <span className="mt-0.5 block truncate text-xs font-medium">
                  {slide.memberName}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
