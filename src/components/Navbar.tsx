import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/siteData';
import logoImage from '../assets/logo/Bitcoin Universe_ Digital Finance Logo.png';

interface NavbarProps {
  onOpenAuth: (mode: 'login' | 'join') => void;
}

export function Navbar({ onOpenAuth }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((item) => item.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.05 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const id = href.replace('#', '');
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-white/10 bg-[#070A12]/88 shadow-[0_12px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-28 max-w-[1400px] items-center justify-between gap-6 px-5 sm:px-8">
        {/* Brand Zone */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex shrink-0 items-center gap-3 whitespace-nowrap"
          aria-label="Bitcoin Universe Home"
        >
          <img
            src={logoImage}
            alt="Bitcoin Universe"
            className="h-32 w-auto max-w-[520px] object-contain object-left"
          />
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary Navigation" className="hidden items-center gap-5 xl:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`group relative py-2 text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors duration-200 ${
                  isActive ? 'text-[#E8B64D]' : 'text-[#A8B0C0] hover:text-white'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 bottom-0 h-[1.5px] origin-left bg-gradient-to-r from-[#E8B64D] to-[#F7931A] transition-transform duration-200 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <button
            type="button"
            onClick={() => onOpenAuth('login')}
            className="min-h-[40px] cursor-pointer rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white whitespace-nowrap shrink-0 transition-all duration-200 hover:border-[#E8B64D]/50 hover:bg-white/[0.06]"
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => onOpenAuth('join')}
            className="gold-button-sheen min-h-[40px] cursor-pointer rounded-lg bg-gradient-to-r from-[#E8B64D] to-[#F7931A] px-5 py-2 text-sm font-semibold text-[#070A12] whitespace-nowrap shrink-0 shadow-[0_0_24px_rgba(232,182,77,0.25)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Join Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-white/[0.04] text-white transition-colors hover:border-[#E8B64D]/50 xl:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-white/10 bg-[#070A12]/96 backdrop-blur-2xl xl:hidden"
          >
            <nav
              aria-label="Mobile Navigation"
              className="mx-auto flex max-w-5xl flex-col gap-1 px-5 py-5"
            >
              <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                {NAV_LINKS.map((link) => {
                  const isActive = activeId === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`flex min-h-[44px] items-center justify-between rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-[#E8B64D]/12 text-[#E8B64D]'
                          : 'text-[#A8B0C0] hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenAuth('login');
                  }}
                  className="min-h-[44px] cursor-pointer rounded-lg border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#E8B64D]/50"
                >
                  Login
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    onOpenAuth('join');
                  }}
                  className="min-h-[44px] cursor-pointer rounded-lg bg-gradient-to-r from-[#E8B64D] to-[#F7931A] px-4 py-2.5 text-sm font-semibold text-[#070A12]"
                >
                  Join Now
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
