import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  AlertCircle,
  Check,
  Copy,
  Info,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { BRAND_CONTACT } from '../data/siteData';

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const INITIAL_VALUES: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  message: '',
};

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submissionState, setSubmissionState] = useState<'idle' | 'validated-no-backend'>('idle');
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedInquiry, setCopiedInquiry] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const validate = (draft: FormValues): FormErrors => {
    const nextErrors: FormErrors = {};
    if (draft.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(draft.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    const digitsOnly = draft.phone.replace(/[^\d+]/g, '');
    if (digitsOnly.length < 7 || digitsOnly.length > 16) {
      nextErrors.phone = 'Please enter a valid phone number including country code if applicable.';
    }
    if (draft.message.trim().length < 10) {
      nextErrors.message = 'Please enter a message of at least 10 characters.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setSubmissionState('idle');
      return;
    }
    // Honest feedback: do not simulate successful delivery when no backend endpoint is configured
    setSubmissionState('validated-no-backend');
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(BRAND_CONTACT.phoneDisplay);
      setCopiedPhone(true);
      window.setTimeout(() => setCopiedPhone(false), 2200);
    } catch {
      setCopiedPhone(false);
    }
  };

  const handleCopyFormattedInquiry = async () => {
    const text = [
      'Bitcoin Universe Inquiry',
      `Name: ${values.fullName.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Message: ${values.message.trim()}`,
    ].join('\n');

    try {
      await navigator.clipboard.writeText(text);
      setCopiedInquiry(true);
      window.setTimeout(() => setCopiedInquiry(false), 2500);
    } catch {
      setCopiedInquiry(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-white/8 bg-[#0A0F1B] py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-[#E8B64D]/6 blur-[140px]"
      />

      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Direct Connect Info */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-5"
          >
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="h-[1px] w-8 bg-[#E8B64D]" />
                <span className="font-display text-xs font-semibold tracking-[0.2em] text-[#E8B64D]">
                  DIRECT SUPPORT DESK
                </span>
              </div>

              <h2 className="font-display text-[clamp(2rem,3.4vw,3rem)] leading-[1.12] font-bold tracking-tight text-white">
                Let&apos;s Connect With{' '}
                <span className="gold-gradient-text">Our Universe</span>
              </h2>

              <p className="mt-5 text-sm leading-[1.75] text-[#C8D0DE] sm:text-base">
                Have questions about Bitcoin Universe? Connect with our team to learn more about
                the platform and its services.
              </p>

              {/* Direct Contact Phone Card */}
              <div className="glass-surface mt-8 rounded-2xl border border-[#E8B64D]/35 p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.16em] text-[#E8B64D]">
                      DIRECT CONTACT NUMBER
                    </p>
                    <a
                      href={BRAND_CONTACT.phoneHref}
                      className="mt-2 block font-mono text-2xl font-bold text-white transition-colors hover:text-[#E8B64D] sm:text-3xl"
                    >
                      {BRAND_CONTACT.phoneDisplay}
                    </a>
                    <p className="mt-2 text-xs text-[#A8B0C0]">
                      Reach our team directly for educational resources, platform walkthroughs, and
                      official documentation inquiries.
                    </p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#E8B64D]/35 bg-[#E8B64D]/12 text-[#E8B64D]">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-white/10 pt-5">
                  <a
                    href={BRAND_CONTACT.phoneHref}
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#E8B64D] to-[#F7931A] px-4 py-2 text-xs font-semibold text-[#070A12] whitespace-nowrap transition-transform hover:-translate-y-0.5"
                  >
                    <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Call Support Desk</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="inline-flex min-h-[42px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2 text-xs font-medium text-white whitespace-nowrap transition-colors hover:border-[#E8B64D]/50"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#E8B64D]" aria-hidden="true" />
                        <span>Number Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 text-[#E8B64D]" aria-hidden="true" />
                        <span>Copy Number</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-white/10 bg-[#070A12]/65 p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#E8B64D]"
                  aria-hidden="true"
                />
                <p className="text-xs leading-relaxed text-[#A8B0C0]">
                  Security Reminder: Official Bitcoin Universe support will never request your
                  private keys, wallet seed phrase, or remote access to your digital wallet.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Validated Contact Form */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-70px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="glass-surface rounded-2xl border border-white/10 p-6 sm:p-9">
              <div className="mb-7 flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-[#E8B64D]" aria-hidden="true" />
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-[#A8B0C0]">
                    All fields are validated before submission.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label
                      htmlFor="contact-full-name"
                      className="mb-2 block text-xs font-medium text-[#D6DCE8]"
                    >
                      Full Name <span className="text-[#F7931A]">*</span>
                    </label>
                    <input
                      id="contact-full-name"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      value={values.fullName}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, fullName: e.target.value }));
                        if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                        if (submissionState !== 'idle') setSubmissionState('idle');
                      }}
                      placeholder="Enter your full name"
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'err-fullName' : undefined}
                      className={`min-h-[46px] w-full rounded-xl border bg-[#070A12]/80 px-4 py-3 text-sm text-white placeholder-[#687285] transition-colors focus:border-[#E8B64D] focus:outline-none ${
                        errors.fullName ? 'border-[#F7931A]' : 'border-white/12'
                      }`}
                    />
                    {errors.fullName && (
                      <p
                        id="err-fullName"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#F7931A]"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.fullName}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-xs font-medium text-[#D6DCE8]"
                    >
                      Email Address <span className="text-[#F7931A]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => {
                        setValues((prev) => ({ ...prev, email: e.target.value }));
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                        if (submissionState !== 'idle') setSubmissionState('idle');
                      }}
                      placeholder="name@example.com"
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      className={`min-h-[46px] w-full rounded-xl border bg-[#070A12]/80 px-4 py-3 text-sm text-white placeholder-[#687285] transition-colors focus:border-[#E8B64D] focus:outline-none ${
                        errors.email ? 'border-[#F7931A]' : 'border-white/12'
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="err-email"
                        className="mt-1.5 flex items-center gap-1.5 text-xs text-[#F7931A]"
                      >
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="mb-2 block text-xs font-medium text-[#D6DCE8]"
                  >
                    Phone Number <span className="text-[#F7931A]">*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={values.phone}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, phone: e.target.value }));
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      if (submissionState !== 'idle') setSubmissionState('idle');
                    }}
                    placeholder="+91 00000 00000"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? 'err-phone' : undefined}
                    className={`min-h-[46px] w-full rounded-xl border bg-[#070A12]/80 px-4 py-3 text-sm text-white placeholder-[#687285] transition-colors focus:border-[#E8B64D] focus:outline-none ${
                      errors.phone ? 'border-[#F7931A]' : 'border-white/12'
                    }`}
                  />
                  {errors.phone && (
                    <p
                      id="err-phone"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-[#F7931A]"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-xs font-medium text-[#D6DCE8]"
                  >
                    Message <span className="text-[#F7931A]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={(e) => {
                      setValues((prev) => ({ ...prev, message: e.target.value }));
                      if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      if (submissionState !== 'idle') setSubmissionState('idle');
                    }}
                    placeholder="Share your questions regarding platform education, proposed participation terms, or support..."
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'err-message' : undefined}
                    className={`w-full rounded-xl border bg-[#070A12]/80 px-4 py-3 text-sm text-white placeholder-[#687285] transition-colors focus:border-[#E8B64D] focus:outline-none ${
                      errors.message ? 'border-[#F7931A]' : 'border-white/12'
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="err-message"
                      className="mt-1.5 flex items-center gap-1.5 text-xs text-[#F7931A]"
                    >
                      <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    type="submit"
                    className="gold-button-sheen inline-flex min-h-[50px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#E8B64D] to-[#F7931A] px-6 py-3 text-sm font-semibold text-[#070A12] shadow-[0_0_28px_rgba(232,182,77,0.24)] transition-transform duration-200 hover:-translate-y-0.5 sm:w-auto"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    <span>Validate &amp; Submit Inquiry</span>
                  </button>
                </div>

                {/* Honest Backend-Status Feedback (Never Simulates Delivery) */}
                {submissionState === 'validated-no-backend' && (
                  <div
                    role="status"
                    className="rounded-xl border border-[#E8B64D]/45 bg-[#E8B64D]/[0.08] p-5"
                  >
                    <div className="flex items-start gap-3">
                      <Info
                        className="mt-0.5 h-5 w-5 shrink-0 text-[#E8B64D]"
                        aria-hidden="true"
                      />
                      <div className="space-y-3">
                        <p className="text-sm font-semibold text-white">
                          Inquiry Validated — Live Messaging Backend Not Configured
                        </p>
                        <p className="text-xs leading-relaxed text-[#D6DCE8]">
                          Your details passed all validation checks, however this web deployment
                          does not currently have a configured mail or CRM delivery backend. Your
                          message has <strong className="text-white">not</strong> been transmitted
                          automatically. To reach our team right away, call{' '}
                          <a
                            href={BRAND_CONTACT.phoneHref}
                            className="font-mono font-semibold text-[#E8B64D] hover:underline"
                          >
                            {BRAND_CONTACT.phoneDisplay}
                          </a>{' '}
                          or copy your formatted inquiry below.
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          <button
                            type="button"
                            onClick={handleCopyFormattedInquiry}
                            className="inline-flex min-h-[38px] cursor-pointer items-center gap-2 rounded-lg border border-[#E8B64D]/50 bg-[#070A12]/70 px-3.5 py-2 text-xs font-medium text-[#E8B64D] transition-colors hover:bg-[#E8B64D]/15"
                          >
                            {copiedInquiry ? (
                              <>
                                <Check className="h-3.5 w-3.5" aria-hidden="true" />
                                <span>Inquiry Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                                <span>Copy Formatted Inquiry</span>
                              </>
                            )}
                          </button>
                          <a
                            href={BRAND_CONTACT.phoneHref}
                            className="inline-flex min-h-[38px] items-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white transition-colors hover:border-[#E8B64D]/50"
                          >
                            <Phone className="h-3.5 w-3.5 text-[#E8B64D]" aria-hidden="true" />
                            <span>Call {BRAND_CONTACT.phoneDisplay}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
