import { useState } from 'react';
import { Shield } from 'lucide-react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  priority?: boolean;
}

export function SmartImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Bitcoin Universe Visual',
  priority = false,
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#101725] via-[#0B101C] to-[#070A12] p-6 text-center ${className}`}
      >
        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full border border-[#E8B64D]/30 bg-[#E8B64D]/10 text-[#E8B64D]">
          <Shield className="h-5 w-5" aria-hidden="true" />
        </div>
        <span className="font-display text-sm font-semibold text-white/90">{fallbackTitle}</span>
        <span className="mt-1 text-xs text-[#A8B0C0]">Bitcoin Universe Visual Asset</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
