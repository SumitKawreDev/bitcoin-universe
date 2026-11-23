import { useState } from 'react';
import { motion, MotionConfig, useScroll, useSpring } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IncomePlanSection } from './components/IncomePlanSection';
import { LevelIncomeSection } from './components/LevelIncomeSection';
import { AuthModal, LegalModal, ServiceDetailModal } from './components/Modals';
import { Navbar } from './components/Navbar';
import { RewardsSection } from './components/RewardsSection';
import { RoyaltySection } from './components/RoyaltySection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ToursSection } from './components/ToursSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { WithdrawalSection } from './components/WithdrawalSection';
import type { LegalDocKey, ServiceItem } from './data/siteData';

export default function App() {
  const [authModalMode, setAuthModalMode] = useState<'login' | 'join' | null>(null);
  const [legalDocKey, setLegalDocKey] = useState<LegalDocKey | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const { scrollYProgress } = useScroll();
  const progressScaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#070A12] text-white">
        {/* Subtle Gold Reading Progress Hairline */}
        <motion.div
          aria-hidden="true"
          style={{ scaleX: progressScaleX }}
          className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[#E8B64D] via-[#F7931A] to-[#F6D88C]"
        />

        <Navbar onOpenAuth={setAuthModalMode} />

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-full overflow-x-hidden"
        >
          <HeroSection />
          <AboutSection />
          <WhyChooseSection />
          <ServicesSection onSelectService={setSelectedService} />
          <IncomePlanSection />
          <LevelIncomeSection />
          <RoyaltySection />
          <RewardsSection />
          <ToursSection />
          <WithdrawalSection />
          <TestimonialsSection />
          <FaqSection />
          <ContactSection />
        </motion.main>

        <Footer onOpenLegal={setLegalDocKey} />

        <AuthModal
          mode={authModalMode}
          onClose={() => setAuthModalMode(null)}
          onSwitchMode={setAuthModalMode}
        />

        <LegalModal docKey={legalDocKey} onClose={() => setLegalDocKey(null)} />

        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      </div>
    </MotionConfig>
  );
}
