import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AlertCircle, CheckCircle2, Info, Lock, Phone, UserPlus, X } from 'lucide-react';
import {
  BRAND_CONTACT,
  LEGAL_DOCUMENTS,
  type LegalDocKey,
  type ServiceItem,
} from '../data/siteData';
import { SmartImage } from './SmartImage';

interface AuthModalProps {
  mode: 'login' | 'join' | null;
  onClose: () => void;
  onSwitchMode: (mode: 'login' | 'join') => void;
}

export function AuthModal({ mode, onClose, onSwitchMode }: AuthModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submittedNotice, setSubmittedNotice] = useState(false);

  useEffect(() => {
    setError(null);
    setSubmittedNotice(false);
  }, [mode]);

  useEffect(() => {
    if (!mode) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mode, onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (mode === 'join' && name.trim().length < 2) {
      setError('Please enter your full name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.trim().length < 6) {
      setError('Please enter a password of at least 6 characters.');
      return;
    }
    setError(null);
    setSubmittedNotice(true);
  };

  return (
    <AnimatePresence>
      {mode && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="auth-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#04060C]/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="glass-surface relative z-10 w-full max-w-md overflow-hidden rounded-2xl border border-[#E8B64D]/35 p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                {mode === 'login' ? (
                  <Lock className="h-5 w-5 text-[#E8B64D]" aria-hidden="true" />
                ) : (
                  <UserPlus className="h-5 w-5 text-[#E8B64D]" aria-hidden="true" />
                )}
                <h2 id="auth-modal-title" className="font-display text-xl font-bold text-white">
                  {mode === 'login' ? 'Member Portal Login' : 'Join Bitcoin Universe'}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/12 text-[#A8B0C0] hover:border-[#E8B64D]/50 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Mode Switcher */}
            <div className="mt-5 grid grid-cols-2 gap-1.5 rounded-lg border border-white/10 bg-[#070A12]/80 p-1">
              <button
                type="button"
                onClick={() => onSwitchMode('login')}
                className={`min-h-[38px] cursor-pointer rounded-md text-xs font-semibold transition-colors ${
                  mode === 'login'
                    ? 'bg-gradient-to-r from-[#E8B64D] to-[#F7931A] text-[#070A12]'
                    : 'text-[#A8B0C0] hover:text-white'
                }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => onSwitchMode('join')}
                className={`min-h-[38px] cursor-pointer rounded-md text-xs font-semibold transition-colors ${
                  mode === 'join'
                    ? 'bg-gradient-to-r from-[#E8B64D] to-[#F7931A] text-[#070A12]'
                    : 'text-[#A8B0C0] hover:text-white'
                }`}
              >
                Join Now
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              {mode === 'join' && (
                <div>
                  <label htmlFor="auth-name" className="mb-1.5 block text-xs text-[#D6DCE8]">
                    Full Name
                  </label>
                  <input
                    id="auth-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="min-h-[44px] w-full rounded-xl border border-white/12 bg-[#070A12] px-3.5 text-sm text-white placeholder-[#687285] focus:border-[#E8B64D] focus:outline-none"
                  />
                </div>
              )}

              <div>
                <label htmlFor="auth-email" className="mb-1.5 block text-xs text-[#D6DCE8]">
                  Email Address
                </label>
                <input
                  id="auth-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="min-h-[44px] w-full rounded-xl border border-white/12 bg-[#070A12] px-3.5 text-sm text-white placeholder-[#687285] focus:border-[#E8B64D] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="auth-password" className="mb-1.5 block text-xs text-[#D6DCE8]">
                  Password
                </label>
                <input
                  id="auth-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="min-h-[44px] w-full rounded-xl border border-white/12 bg-[#070A12] px-3.5 text-sm text-white placeholder-[#687285] focus:border-[#E8B64D] focus:outline-none"
                />
              </div>

              {error && (
                <p className="flex items-center gap-2 text-xs text-[#F7931A]">
                  <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{error}</span>
                </p>
              )}

              <button
                type="submit"
                className="gold-button-sheen min-h-[46px] w-full cursor-pointer rounded-xl bg-gradient-to-r from-[#E8B64D] to-[#F7931A] px-5 text-sm font-semibold text-[#070A12]"
              >
                {mode === 'login' ? 'Sign In to Portal' : 'Continue Onboarding'}
              </button>
            </form>

            {submittedNotice && (
              <div className="mt-5 rounded-xl border border-[#E8B64D]/40 bg-[#E8B64D]/[0.08] p-4 text-xs leading-relaxed text-[#D6DCE8]">
                <div className="flex items-start gap-2.5">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#E8B64D]" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-white">
                      Member Portal Authentication Pending Backend Setup
                    </p>
                    <p className="mt-1">
                      Account registration and login require an active backend authentication
                      service. For onboarding guidance, contact our desk at{' '}
                      <a
                        href={BRAND_CONTACT.phoneHref}
                        className="font-mono text-[#E8B64D] hover:underline"
                      >
                        {BRAND_CONTACT.phoneDisplay}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface LegalModalProps {
  docKey: LegalDocKey | null;
  onClose: () => void;
}

export function LegalModal({ docKey, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!docKey) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [docKey, onClose]);

  const doc = docKey ? LEGAL_DOCUMENTS[docKey] : null;

  return (
    <AnimatePresence>
      {doc && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#04060C]/82 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="glass-surface relative z-10 max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#E8B64D]/35 p-6 shadow-2xl sm:p-8"
          >
            <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-5">
              <div>
                <p className="font-mono text-xs text-[#E8B64D]">{doc.updated}</p>
                <h2 id="legal-modal-title" className="mt-1 font-display text-2xl font-bold text-white">
                  {doc.title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close legal disclosure"
                className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-white/12 text-[#A8B0C0] hover:border-[#E8B64D]/50 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-6 space-y-6">
              {doc.sections.map((section) => (
                <div key={section.heading}>
                  <h3 className="font-display text-base font-semibold text-white">
                    {section.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-[1.75] text-[#C8D0DE]">{section.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-end border-t border-white/10 pt-5">
              <button
                type="button"
                onClick={onClose}
                className="min-h-[42px] cursor-pointer rounded-lg border border-[#E8B64D]/45 bg-[#E8B64D]/12 px-5 py-2 text-xs font-semibold text-[#E8B64D] hover:bg-[#E8B64D]/20"
              >
                Acknowledge &amp; Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export function ServiceDetailModal({ service, onClose }: ServiceDetailModalProps) {
  useEffect(() => {
    if (!service) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#04060C]/82 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="glass-surface relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#E8B64D]/35 shadow-2xl"
          >
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#070A12]">
              <SmartImage
                src={service.image}
                alt={service.alt}
                fallbackTitle={service.title}
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#0D1321] via-[#070A12]/35 to-transparent"
              />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close service overview"
                className="absolute top-4 right-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/20 bg-[#070A12]/75 text-white backdrop-blur-md hover:border-[#E8B64D]"
              >
                <X className="h-4 w-4" />
              </button>
              <div className="absolute bottom-5 left-6">
                <p className="font-mono text-xs text-[#E8B64D]">
                  MODULE {service.index} · {service.subtitle}
                </p>
                <h2
                  id="service-modal-title"
                  className="mt-1 font-display text-2xl font-bold text-white sm:text-3xl"
                >
                  {service.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-sm leading-[1.75] text-[#C8D0DE] sm:text-base">
                {service.summary}
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="mb-3 text-xs font-semibold tracking-[0.16em] text-[#E8B64D]">
                  KEY FOCUS AREAS
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2.5 text-sm text-[#E5EBF5]">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#E8B64D]"
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
                <a
                  href={BRAND_CONTACT.phoneHref}
                  className="inline-flex min-h-[42px] items-center gap-2 text-xs font-medium text-[#E8B64D] hover:underline"
                >
                  <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>Questions? Call {BRAND_CONTACT.phoneDisplay}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="min-h-[42px] cursor-pointer rounded-lg bg-gradient-to-r from-[#E8B64D] to-[#F7931A] px-5 py-2 text-xs font-semibold text-[#070A12]"
                >
                  Connect With Our Team
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
