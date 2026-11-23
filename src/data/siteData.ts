export interface NavLinkItem {
  label: string;
  href: string;
  id: string;
}

export interface WhyChooseItem {
  id: string;
  index: string;
  title: string;
  description: string;
  iconName: 'TrendingUp' | 'BookOpen' | 'BarChart3' | 'Globe' | 'Cpu' | 'Award';
  focusArea: string;
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  details: string[];
  image: string;
  alt: string;
}

export interface IncomePlanItem {
  id: string;
  code: string;
  name: string;
  dailyRate: number;
  dailyRateLabel: string;
  durationDays: number;
  proposedFocus: string;
  minimumPackage: string;
  notes: string;
}

export interface LevelTierItem {
  id: string;
  levelLabel: string;
  percentage: number;
  percentageLabel: string;
  tierGroup: string;
  proposedScope: string;
  verificationNote: string;
}

export interface RoyaltyTierItem {
  id: string;
  turnover: number;
  turnoverLabel: string;
  poolPercent: number;
  poolLabel: string;
  tierTitle: string;
  distributionNote: string;
}

export interface CarRewardItem {
  id: string;
  milestoneAmount: string;
  milestoneNumeric: number;
  vehicleName: string;
  category: string;
  image: string;
  alt: string;
  eligibilityNote: string;
}

export interface TourPackageItem {
  id: string;
  destination: string;
  regionLabel: string;
  proposedAmount: string;
  amountNumeric: number;
  eligibilityCondition: string;
  highlights: string;
  image: string;
  alt: string;
}

export interface TestimonialPlaceholder {
  id: string;
  memberName: string;
  memberRole: string;
  region: string;
  feedback: string;
  ratingStatus: string;
  ratingValue: number | null;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type LegalDocKey = 'privacy' | 'terms' | 'risk' | 'disclaimer';

export interface LegalDocument {
  key: LegalDocKey;
  title: string;
  updated: string;
  sections: { heading: string; body: string }[];
}

export const BRAND_CONTACT = {
  phoneDisplay: '+91 7700004847',
  phoneHref: 'tel:+917700004847',
  copyright: '© 2026 Bitcoin Universe. All Rights Reserved.',
};

export const IMAGES = {
  hero: '/src/assets/images/hero_bitcoin_universe_1795435685484.jpg',
  about: '/src/assets/images/about_blockchain_ecosystem_1795435690182.jpg',
  services: {
    trading: '/src/assets/images/service_crypto_trading_1795435689459.jpg',
    education: '/src/assets/images/service_trading_education_1795435689744.jpg',
    analysis: '/src/assets/images/service_market_analysis_1795435691032.jpg',
    community: '/src/assets/images/service_community_network_1795435687350.jpg',
    wallet: '/src/assets/images/service_digital_wallet_1795435691737.jpg',
    rewards: '/src/assets/images/service_rewards_recognition_1795435686333.jpg',
  },
  cars: {
    creta: '/src/assets/images/car_hyundai_creta_1795435702879.jpg',
    fortuner: '/src/assets/images/car_toyota_fortuner_1795435688186.jpg',
    rangeRover: '/src/assets/images/car_range_rover_1795435690315.jpg',
  },
  tours: {
    goa: '/src/assets/images/tour_goa_sunset_1795435692313.jpg',
    thailand: '/src/assets/images/tour_thailand_islands_1795435688044.jpg',
    russia: '/src/assets/images/tour_russia_moscow_1795435689319.jpg',
  },
  withdrawal: '/src/assets/images/withdrawal_blockchain_transfer_1795435686204.jpg',
} as const;

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About Us', href: '#about', id: 'about' },
  { label: 'Why Choose Us', href: '#why-choose-us', id: 'why-choose-us' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Income Plan', href: '#income-plan', id: 'income-plan' },
  { label: 'Rewards', href: '#rewards', id: 'rewards' },
  { label: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const FOOTER_QUICK_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About Us', href: '#about', id: 'about' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Income Plan', href: '#income-plan', id: 'income-plan' },
  { label: 'Rewards', href: '#rewards', id: 'rewards' },
  { label: 'FAQ', href: '#faq', id: 'faq' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    id: 'trading-ecosystem',
    index: '01',
    title: 'Trading Ecosystem',
    description:
      'Explore cryptocurrency markets and structured trading-related opportunities within a unified digital environment.',
    iconName: 'TrendingUp',
    focusArea: 'Market Participation',
  },
  {
    id: 'learning-education',
    index: '02',
    title: 'Learning & Education',
    description:
      'Understand cryptocurrency fundamentals, blockchain principles, risk awareness, and digital asset market concepts.',
    iconName: 'BookOpen',
    focusArea: 'Structured Curriculum',
  },
  {
    id: 'market-insights',
    index: '03',
    title: 'Market Insights',
    description:
      'Explore digital asset trends, macroeconomic developments, and educational market commentary curated for informed review.',
    iconName: 'BarChart3',
    focusArea: 'Analytical Perspective',
  },
  {
    id: 'global-community',
    index: '04',
    title: 'Global Community',
    description:
      'Connect with individuals across regions who share an active interest in blockchain technology and digital finance.',
    iconName: 'Globe',
    focusArea: 'Worldwide Network',
  },
  {
    id: 'digital-technology',
    index: '05',
    title: 'Digital Technology',
    description:
      'Discover modern blockchain infrastructure, on-chain network mechanics, and self-custody digital wallet technologies.',
    iconName: 'Cpu',
    focusArea: 'Web3 Infrastructure',
  },
  {
    id: 'rewards-recognition',
    index: '06',
    title: 'Rewards & Recognition',
    description:
      'Explore eligibility-based community recognition programs designed around transparent, documented milestone frameworks.',
    iconName: 'Award',
    focusArea: 'Milestone Programs',
  },
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 'crypto-trading',
    index: '01',
    title: 'Crypto Trading',
    subtitle: 'Market Structure & Execution Frameworks',
    summary:
      'Navigate major digital asset markets with structured awareness of order mechanics, liquidity conditions, and disciplined risk controls.',
    details: [
      'Spot and digital asset market workflow orientation',
      'Position sizing awareness and volatility management concepts',
      'Focus on transparency and user-driven decision making',
    ],
    image: IMAGES.services.trading,
    alt: 'Dark-luxury institutional cryptocurrency trading workspace displaying golden market trend charts',
  },
  {
    id: 'trading-education',
    index: '02',
    title: 'Trading Education',
    subtitle: 'Foundational & Intermediate Learning',
    summary:
      'Accessible educational modules covering blockchain history, market cycles, technical chart reading, and prudent risk discipline.',
    details: [
      'Step-by-step introduction to Bitcoin and smart contract networks',
      'Chart structure, volume dynamics, and market psychology basics',
      'Emphasis on independent research and risk awareness',
    ],
    image: IMAGES.services.education,
    alt: 'Executive dark study table featuring golden holographic financial charts above a matte tablet',
  },
  {
    id: 'market-analysis',
    index: '03',
    title: 'Market Analysis',
    subtitle: 'Macro Trends & Digital Asset Briefings',
    summary:
      'Structured commentary examining on-chain activity, liquidity flows, and broader cryptocurrency sector developments.',
    details: [
      'Informational overviews of major digital asset movements',
      'Contextual discussion of macroeconomic catalysts and sentiment',
      'Educational perspectives — never personalized financial advice',
    ],
    image: IMAGES.services.analysis,
    alt: '3D visualization of luminous golden financial market waveforms and dark crystal prisms',
  },
  {
    id: 'community-development',
    index: '04',
    title: 'Community Development',
    subtitle: 'Collaborative Global Participation',
    summary:
      'A globally connected community built for knowledge sharing, peer mentorship, and collaborative Web3 learning.',
    details: [
      'Regional and international discussion forums and workshops',
      'Structured onboarding guidance for new digital finance learners',
      'Transparent community guidelines and member conduct standards',
    ],
    image: IMAGES.services.community,
    alt: 'Dark obsidian Earth globe illuminated with glowing golden network arcs connecting global cities',
  },
  {
    id: 'digital-wallet-awareness',
    index: '05',
    title: 'Digital Wallet Awareness',
    subtitle: 'Self-Custody & On-Chain Security Hygiene',
    summary:
      'Practical guidance on wallet architecture, private key stewardship, BEP-20 network verification, and phishing prevention.',
    details: [
      'Understanding hot wallets, cold storage, and recovery phrases',
      'Verifying USDT BNB Smart Chain (BEP-20) addresses prior to transfer',
      'Best practices for safeguarding credentials and digital assets',
    ],
    image: IMAGES.services.wallet,
    alt: 'Matte-black hardware cryptocurrency wallet on dark basalt stone with glowing golden circuit shield',
  },
  {
    id: 'recognition-rewards',
    index: '06',
    title: 'Recognition & Rewards',
    subtitle: 'Eligibility-Based Milestone Frameworks',
    summary:
      'Proposed community recognition tiers, leadership milestones, and international travel programs subject to published verification rules.',
    details: [
      'Proposed milestone recognition tiers for qualifying community activity',
      'Subject to formal verification, compliance checks, and final terms',
      'Clear distinction between proposed program goals and guaranteed outcomes',
    ],
    image: IMAGES.services.rewards,
    alt: 'Sculpted brushed-gold geometric achievement monolith on an obsidian marble plinth',
  },
];

export const INCOME_PLANS: IncomePlanItem[] = [
  {
    id: 'plan-a',
    code: 'PLAN A',
    name: 'Proposed Tier A',
    dailyRate: 1.0,
    dailyRateLabel: '1.00%',
    durationDays: 100,
    proposedFocus: 'Proposed primary schedule parameter',
    minimumPackage: '$20',
    notes: 'Proposed parameter illustration only; subject to independent legal and operational verification.',
  },
  {
    id: 'plan-b',
    code: 'PLAN B',
    name: 'Proposed Tier B',
    dailyRate: 0.5,
    dailyRateLabel: '0.50%',
    durationDays: 100,
    proposedFocus: 'Proposed balanced schedule parameter',
    minimumPackage: '$20',
    notes: 'Proposed parameter illustration only; subject to independent legal and operational verification.',
  },
  {
    id: 'plan-c',
    code: 'PLAN C',
    name: 'Proposed Tier C',
    dailyRate: 0.25,
    dailyRateLabel: '0.25%',
    durationDays: 100,
    proposedFocus: 'Proposed conservative schedule parameter',
    minimumPackage: '$20',
    notes: 'Proposed parameter illustration only; subject to independent legal and operational verification.',
  },
];

export const DIRECT_INCOME_RATE = 5;

export const LEVEL_TIERS: LevelTierItem[] = [
  {
    id: 'lvl-1',
    levelLabel: 'Level 1',
    percentage: 20,
    percentageLabel: '20%',
    tierGroup: 'Foundation Tier',
    proposedScope: 'First-generation direct community tier in the proposed distribution model.',
    verificationNote: 'Calculation basis and active qualification rules require formal verification before launch.',
  },
  {
    id: 'lvl-2',
    levelLabel: 'Level 2',
    percentage: 10,
    percentageLabel: '10%',
    tierGroup: 'Foundation Tier',
    proposedScope: 'Second-generation community tier under the proposed multi-level outline.',
    verificationNote: 'Subject to final eligibility criteria and verified accounting basis.',
  },
  {
    id: 'lvl-3',
    levelLabel: 'Level 3',
    percentage: 5,
    percentageLabel: '5%',
    tierGroup: 'Growth Tier',
    proposedScope: 'Third-generation expansion tier within the proposed compensation schedule.',
    verificationNote: 'Qualification thresholds and payout mechanics are pending final legal approval.',
  },
  {
    id: 'lvl-4',
    levelLabel: 'Level 4',
    percentage: 3,
    percentageLabel: '3%',
    tierGroup: 'Growth Tier',
    proposedScope: 'Fourth-generation network participation level in the proposed hierarchy.',
    verificationNote: 'Proposed rate only; exact calculation basis must be confirmed in official terms.',
  },
  {
    id: 'lvl-5-6',
    levelLabel: 'Level 5–6',
    percentage: 2,
    percentageLabel: '2%',
    tierGroup: 'Mid-Network Tier',
    proposedScope: 'Covers fifth and sixth generations under the proposed distribution blueprint.',
    verificationNote: 'Subject to verified tier unlock conditions and compliance sign-off.',
  },
  {
    id: 'lvl-7-14',
    levelLabel: 'Level 7–14',
    percentage: 1,
    percentageLabel: '1%',
    tierGroup: 'Extended Network Tier',
    proposedScope: 'Broad community span covering generations seven through fourteen.',
    verificationNote: 'All 8 levels in this band are proposed parameters subject to final governance.',
  },
  {
    id: 'lvl-15-16',
    levelLabel: 'Level 15–16',
    percentage: 2,
    percentageLabel: '2%',
    tierGroup: 'Deep Network Tier',
    proposedScope: 'Proposed stepped-up recognition band across levels fifteen and sixteen.',
    verificationNote: 'Requires formal verification of deep-tier qualification rules.',
  },
  {
    id: 'lvl-17',
    levelLabel: 'Level 17',
    percentage: 3,
    percentageLabel: '3%',
    tierGroup: 'Leadership Depth Tier',
    proposedScope: 'Seventeenth-generation proposed community participation level.',
    verificationNote: 'Proposed parameter; calculation methodology must be published in final terms.',
  },
  {
    id: 'lvl-18-20',
    levelLabel: 'Level 18–20',
    percentage: 5,
    percentageLabel: '5%',
    tierGroup: 'Apex Depth Tier',
    proposedScope: 'Final three levels (18, 19, and 20) of the proposed 20-level structure.',
    verificationNote: 'Unverified proposed figure; subject to comprehensive legal and compliance approval.',
  },
];

export const ROYALTY_TIERS: RoyaltyTierItem[] = [
  {
    id: 'royalty-2500',
    turnover: 2500,
    turnoverLabel: '$2,500',
    poolPercent: 3,
    poolLabel: '3%',
    tierTitle: 'Emerald Pool Proposal',
    distributionNote: 'Proposed equal distribution across all verified participants qualifying for this turnover tier.',
  },
  {
    id: 'royalty-5000',
    turnover: 5000,
    turnoverLabel: '$5,000',
    poolPercent: 2,
    poolLabel: '2%',
    tierTitle: 'Sovereign Pool Proposal',
    distributionNote: 'Proposed equal share allocation subject to turnover audit and formal qualification rules.',
  },
  {
    id: 'royalty-11000',
    turnover: 11000,
    turnoverLabel: '$11,000',
    poolPercent: 1,
    poolLabel: '1%',
    tierTitle: 'Apex Pool Proposal',
    distributionNote: 'Proposed top-tier pool distributed equally among eligible qualifying members upon verification.',
  },
];

export const CAR_REWARDS: CarRewardItem[] = [
  {
    id: 'creta',
    milestoneAmount: '$500,000',
    milestoneNumeric: 500000,
    vehicleName: 'Hyundai Creta',
    category: 'Proposed Milestone Tier 01',
    image: IMAGES.cars.creta,
    alt: 'Obsidian-black Hyundai Creta compact SUV photographed in a dark luxury architectural showroom with golden light bars',
    eligibilityNote: 'Proposed team business recognition target subject to final eligibility and reward terms.',
  },
  {
    id: 'fortuner',
    milestoneAmount: '$1,000,000',
    milestoneNumeric: 1000000,
    vehicleName: 'Toyota Fortuner',
    category: 'Proposed Milestone Tier 02',
    image: IMAGES.cars.fortuner,
    alt: 'Pearl-black Toyota Fortuner full-size SUV showcased in a dark obsidian pavilion with warm golden lighting',
    eligibilityNote: 'Proposed team business recognition target subject to final eligibility and reward terms.',
  },
  {
    id: 'range-rover',
    milestoneAmount: '$2,000,000',
    milestoneNumeric: 2000000,
    vehicleName: 'Range Rover',
    category: 'Proposed Milestone Tier 03',
    image: IMAGES.cars.rangeRover,
    alt: 'Santorini black flagship Range Rover luxury SUV inside a dark architectural vault with golden ambient reflections',
    eligibilityNote: 'Proposed team business recognition target subject to final eligibility and reward terms.',
  },
];

export const TOUR_PACKAGES: TourPackageItem[] = [
  {
    id: 'goa',
    destination: 'Goa Package',
    regionLabel: 'Coastal India Retreat',
    proposedAmount: '$500',
    amountNumeric: 500,
    eligibilityCondition: 'Self-investment only',
    highlights: 'Proposed coastal hospitality getaway recognizing qualifying individual participation.',
    image: IMAGES.tours.goa,
    alt: 'Golden twilight view of a tranquil luxury coastal bay in Goa with palm silhouettes and warm reflections',
  },
  {
    id: 'thailand',
    destination: 'Thailand Package',
    regionLabel: 'Southeast Asia Island Experience',
    proposedAmount: '$2,100',
    amountNumeric: 2100,
    eligibilityCondition: 'Self-investment only',
    highlights: 'Proposed international retreat amidst iconic Andaman limestone coastlines and cultural landmarks.',
    image: IMAGES.tours.thailand,
    alt: 'Dramatic limestone cliffs in Thailand at dusk with a lantern-lit boat on calm dark emerald waters',
  },
  {
    id: 'russia',
    destination: 'Russia Package',
    regionLabel: 'Eurasian Architectural Journey',
    proposedAmount: '$11,000',
    amountNumeric: 11000,
    eligibilityCondition: 'Self-investment only',
    highlights: 'Proposed flagship international itinerary showcasing historic Moscow landmarks and premier hospitality.',
    image: IMAGES.tours.russia,
    alt: 'Illuminated Moscow skyline and Saint Basil Cathedral reflecting golden light across the Moskva River at night',
  },
];

export const WITHDRAWAL_SPECS = [
  { label: 'Currency', value: 'USDT (Tether)', emphasis: false },
  { label: 'Blockchain Network', value: 'BNB Smart Chain (BEP-20)', emphasis: true },
  { label: 'Minimum Withdrawal', value: '$10 USDT', emphasis: false },
  { label: 'Proposed Processing Window', value: 'Within 24 Hours', emphasis: false },
  { label: 'Proposed Administrative Charge', value: '10%', emphasis: false },
];

export const INITIAL_TESTIMONIAL_PLACEHOLDERS: TestimonialPlaceholder[] = [
  {
    id: 'placeholder-1',
    memberName: '[Community Member Name — Slot 01]',
    memberRole: 'Role / Location Placeholder',
    region: 'Region Placeholder',
    feedback:
      '[Verified community feedback placeholder. Genuine, attributed member experiences will be published here once collected and reviewed.]',
    ratingStatus: 'Star rating withheld until genuine verified review is submitted',
    ratingValue: null,
  },
  {
    id: 'placeholder-2',
    memberName: '[Community Member Name — Slot 02]',
    memberRole: 'Role / Location Placeholder',
    region: 'Region Placeholder',
    feedback:
      '[Editorial testimonial slot reserved for an authenticated educational participant sharing their experience with Bitcoin Universe resources.]',
    ratingStatus: 'Star rating withheld until genuine verified review is submitted',
    ratingValue: null,
  },
  {
    id: 'placeholder-3',
    memberName: '[Community Member Name — Slot 03]',
    memberRole: 'Role / Location Placeholder',
    region: 'Region Placeholder',
    feedback:
      '[Community perspective placeholder. No fabricated identities, synthetic endorsements, or unverified financial claims are displayed.]',
    ratingStatus: 'Star rating withheld until genuine verified review is submitted',
    ratingValue: null,
  },
  {
    id: 'placeholder-4',
    memberName: '[Community Member Name — Slot 04]',
    memberRole: 'Role / Location Placeholder',
    region: 'Region Placeholder',
    feedback:
      '[Reserved slot for a genuine global community participant describing their onboarding, learning journey, and platform clarity.]',
    ratingStatus: 'Star rating withheld until genuine verified review is submitted',
    ratingValue: null,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'What is Bitcoin Universe?',
    answer:
      'Bitcoin Universe is a cryptocurrency-focused digital platform designed to bring together trading knowledge, structured financial education, market insights, digital wallet awareness, and global community participation under a single ecosystem.',
  },
  {
    id: 'faq-2',
    question: 'How does the platform work?',
    answer:
      'Participants explore educational modules, digital asset market commentary, blockchain wallet guidance, and proposed community participation frameworks. All proposed plan tiers, level distributions, royalty pools, and milestone recognition structures presented on this website are informational outlines subject to final verification and formal legal approval.',
  },
  {
    id: 'faq-3',
    question: 'What is the minimum proposed participation amount?',
    answer:
      'The minimum proposed package displayed in the participation structure outline is $20. Final participation requirements, activation workflows, and contractual terms remain subject to official verification and published legal documentation.',
  },
  {
    id: 'faq-4',
    question: 'Which blockchain network is supported?',
    answer:
      'Digital asset withdrawal specifications reference USDT on the BNB Smart Chain (BEP-20) network. Always double-check that your receiving wallet explicitly supports BEP-20 USDT before submitting any transaction address.',
  },
  {
    id: 'faq-5',
    question: 'What is the minimum withdrawal amount?',
    answer:
      'The stated minimum withdrawal threshold is $10 in USDT (BEP-20), with a proposed processing window of within 24 hours, subject to network conditions and operational verification.',
  },
  {
    id: 'faq-6',
    question: 'What are the proposed administrative charges?',
    answer:
      'A proposed 10% administrative charge is listed for withdrawal processing. Exact fee schedules, applicable network gas considerations, and settlement terms must be verified in the final approved user agreement.',
  },
  {
    id: 'faq-7',
    question: 'Are cryptocurrency returns guaranteed?',
    answer:
      'No. Cryptocurrency markets are highly volatile and carry substantial risk of partial or total capital loss. None of the proposed percentages, daily parameters, royalty pools, or milestone rewards shown on this site constitute guaranteed returns, fixed profits, or investment advice.',
  },
  {
    id: 'faq-8',
    question: 'How can I contact customer support?',
    answer:
      'You can reach the Bitcoin Universe team directly by phone at +91 7700004847 or use the Contact section at the bottom of this page to prepare and direct your inquiry.',
  },
];

export const LEGAL_DOCUMENTS: Record<LegalDocKey, LegalDocument> = {
  privacy: {
    key: 'privacy',
    title: 'Privacy Policy',
    updated: 'Draft Disclosure · 2026',
    sections: [
      {
        heading: '1. Information Collection',
        body: 'Bitcoin Universe respects visitor privacy. Contact details entered into inquiry forms on this interface are validated locally in your browser. Until a verified backend endpoint is configured and deployed, form submissions are not transmitted to third-party servers.',
      },
      {
        heading: '2. Use of Communications',
        body: 'When you contact our support team via telephone (+91 7700004847) or approved channels, information provided is used solely to answer questions regarding platform education, participation disclosures, and support requests.',
      },
      {
        heading: '3. Wallet Security',
        body: 'Bitcoin Universe representatives will never ask for your private keys, wallet recovery seed phrases, or password credentials. Never disclose sensitive authentication material to anyone.',
      },
    ],
  },
  terms: {
    key: 'terms',
    title: 'Terms & Conditions',
    updated: 'Draft Disclosure · 2026',
    sections: [
      {
        heading: '1. Informational Scope',
        body: 'All participation plans (Plan A, Plan B, Plan C), direct and 20-level distribution percentages, company turnover royalty pools, vehicle recognition milestones, and international tour packages displayed on this website represent proposed program parameters only.',
      },
      {
        heading: '2. Verification & Legal Approval',
        body: 'Final eligibility rules, calculation bases, administrative charges, withdrawal windows, and reward fulfillment procedures require independent verification, regulatory compliance review, and formal legal approval prior to binding execution.',
      },
      {
        heading: '3. User Responsibility',
        body: 'Participants are solely responsible for confirming compliance with applicable laws and digital asset regulations in their local jurisdiction and for verifying receiving BNB Smart Chain (BEP-20) wallet addresses.',
      },
    ],
  },
  risk: {
    key: 'risk',
    title: 'Risk Disclosure',
    updated: 'Mandatory Notice · 2026',
    sections: [
      {
        heading: '1. Digital Asset Volatility',
        body: 'Cryptocurrencies and blockchain-based assets exhibit significant price volatility, liquidity shifts, and regulatory uncertainty. You should never allocate funds that you cannot afford to lose completely.',
      },
      {
        heading: '2. No Guaranteed Returns',
        body: 'Daily percentage structures, multi-level distributions, royalty pools, and milestone recognitions presented on this platform are proposed models—not guaranteed yields, bank deposits, or risk-free instruments.',
      },
      {
        heading: '3. On-Chain Irreversibility',
        body: 'Blockchain transactions executed on BNB Smart Chain (BEP-20) or any other network are irreversible. Sending USDT to an incompatible network or mistyped wallet address may result in permanent asset loss.',
      },
    ],
  },
  disclaimer: {
    key: 'disclaimer',
    title: 'General Disclaimer',
    updated: 'Regulatory Notice · 2026',
    sections: [
      {
        heading: '1. Not Financial or Legal Advice',
        body: 'Nothing published on Bitcoin Universe constitutes personalized investment advice, financial advisory services, tax guidance, or an offer/solicitation of regulated securities in any jurisdiction.',
      },
      {
        heading: '2. Unverified Proposed Parameters',
        body: 'All numeric schedules, percentage allocations, turnover thresholds, and recognition rewards are presented strictly as proposed ecosystem concepts pending formal audit, verification, and jurisdictional legal sign-off.',
      },
      {
        heading: '3. Independent Due Diligence',
        body: 'Always conduct independent research and consult qualified legal, tax, and financial professionals before participating in any cryptocurrency or digital asset program.',
      },
    ],
  },
};
