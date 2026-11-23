import { useState } from 'react';
import { Globe, MessageCircle, Phone, Send, Share2 } from 'lucide-react';
import { BRAND_CONTACT, FOOTER_QUICK_LINKS, type LegalDocKey } from '../data/siteData';
import logoImage from '../assets/logo/Bitcoin Universe_ Digital Finance Logo.png';

interface FooterProps {
  onOpenLegal: (docKey: LegalDocKey) => void;
}

const SOCIAL_PLACEHOLDERS = [
  { id: 'x', label: 'X / Twitter (Official Link Pending)', icon: Share2 },
  { id: 'telegram', label: 'Telegram Community (Official Link Pending)', icon: Send },
  { id: 'discord', label: 'Community Forum (Official Link Pending)', icon: MessageCircle },
  { id: 'web', label: 'Global Portal (Official Link Pending)', icon: Globe },
];

const LEGAL_LINKS: { key: LegalDocKey; label: string }[] = [
  { key: 'privacy', label: 'Privacy Policy' },
  { key: 'terms', label: 'Terms & Conditions' },
  { key: 'risk', label: 'Risk Disclosure' },
  { key: 'disclaimer', label: 'Disclaimer' },
];

export function Footer({ onOpenLegal }: FooterProps) {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handleScrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#05070D] pt-16 pb-10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 pb-12 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo('#home');
              }}
              className="inline-flex items-center gap-3"
            >
              <img
                src={logoImage}
                alt="Bitcoin Universe"
                className="h-32 w-auto max-w-[520px] object-contain object-left"
              />
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A8B0C0]">
              Explore the Future of Digital Finance. Bringing together cryptocurrency trading
              knowledge, financial education, market insights, and global community participation.
            </p>

            {/* Social Media Icon Placeholders */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-medium text-[#A8B0C0]">
                Social Channels (Placeholder Links)
              </p>
              <div className="flex items-center gap-2.5">
                {SOCIAL_PLACEHOLDERS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSocialNotice(item.label)}
                      aria-label={item.label}
                      title={item.label}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-white/12 bg-white/[0.03] text-[#A8B0C0] transition-colors hover:border-[#E8B64D]/55 hover:text-[#E8B64D]"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
              {socialNotice && (
                <p className="mt-2.5 text-xs text-[#E8B64D]">
                  {socialNotice} — official social URLs will be linked once verified.
                </p>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold tracking-[0.12em] text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(link.href);
                    }}
                    className="text-sm text-[#A8B0C0] transition-colors hover:text-[#E8B64D]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold tracking-[0.12em] text-white">
              Legal &amp; Disclosures
            </h3>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((item) => (
                <li key={item.key}>
                  <button
                    type="button"
                    onClick={() => onOpenLegal(item.key)}
                    className="cursor-pointer text-sm text-[#A8B0C0] transition-colors hover:text-[#E8B64D]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold tracking-[0.12em] text-white">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm text-[#A8B0C0]">
              <a
                href={BRAND_CONTACT.phoneHref}
                className="inline-flex items-center gap-2 font-mono text-white transition-colors hover:text-[#E8B64D]"
              >
                <Phone className="h-4 w-4 text-[#E8B64D]" aria-hidden="true" />
                <span>{BRAND_CONTACT.phoneDisplay}</span>
              </a>
              <p className="text-xs leading-relaxed text-[#A8B0C0]">
                Supported Settlement Reference: USDT on BNB Smart Chain (BEP-20).
              </p>
            </div>
          </div>
        </div>

        {/* Mandatory Cryptocurrency Investment Risk Disclaimer */}
        <div className="border-t border-white/10 py-6">
          <p className="text-xs leading-[1.75] text-[#8E97A8]">
            <strong className="font-semibold text-[#C8D0DE]">
              Cryptocurrency Investment Risk Disclaimer:
            </strong>{' '}
            Digital assets and cryptocurrency participation carry significant financial risk,
            extreme price volatility, and the potential for complete loss of capital. All
            participation structures, daily percentages, direct/level distributions, company
            turnover royalty pools, vehicle recognition milestones, and international tour
            packages displayed on Bitcoin Universe represent proposed parameters only and are not
            guaranteed returns or regulated investment advice. Final eligibility rules,
            calculations, administrative fees, and terms remain subject to independent verification
            and formal legal approval. Participate only after conducting independent due diligence
            and consulting qualified financial and legal advisors.
          </p>
        </div>

        {/* Bottom Copyright Row */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-xs text-[#8E97A8] sm:flex-row">
          <p>{BRAND_CONTACT.copyright}</p>
          <p>Bitcoin Universe · Digital Finance Education &amp; Ecosystem Information</p>
        </div>
      </div>
    </footer>
  );
}
