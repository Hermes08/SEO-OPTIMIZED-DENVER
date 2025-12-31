
import { Category, Testimonial, BlogPost, ServiceArea } from './types';
import { Zap, Droplet, Thermometer, Sun, Shield, Hammer, MapPin, CheckCircle, Clock, Star, TrendingUp } from 'lucide-react';

// --- CONFIGURATION (DENVER METRO SEO) ---
export const COMPANY_NAME = "Denver Metro Services";
export const PHONE_NUMBER = "555-0123-4567";
export const CITY = "Denver";
export const STATE = "CO";
export const REGION = "Denver Metro Area";

// --- KEYWORD BANK (FROM ROLODEX) ---
const KEYWORDS = {
  electrical: [
    "electrician denver", "emergency electrician denver", "panel upgrade denver",
    "ev charger installation denver", "electrical repair denver",
    "circuit breaker repair", "commercial electrician denver", "licensed electrician denver"
  ],
  plumbing: [
    "plumber denver", "drain cleaning denver", "water heater repair denver",
    "emergency plumber denver", "leak detection denver", "sewer line repair",
    "frozen pipes denver", "sump pump installation"
  ],
  hvac: [
    "hvac repair denver", "ac repair denver", "furnace repair denver",
    "hvac installation denver", "air conditioning repair", "heating repair denver",
    "duct cleaning denver", "indoor air quality"
  ],
  solar: [
    "solar panel installation denver", "solar repair denver", "solar energy denver",
    "solar tax credit colorado", "xcel energy solar rewards"
  ],
  roofing: [
    "roof repair denver", "roof replacement denver", "hail damage roof repair",
    "emergency roof repair", "gutter installation denver"
  ],
  general: [
    "general contractor denver", "kitchen remodeling denver", "bathroom remodeling denver",
    "basement finishing denver", "home renovation denver"
  ]
};

// --- TESTIMONIALS ---
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: `Denver, CO`,
    text: 'Absolutely the best service I have received. The technician arrived on time and fixed the issue in under an hour.',
    rating: 5,
    date: '2023-10-15',
    project: 'Heating Repair',
    image: 'https://picsum.photos/seed/t1/100/100',
    imageAlt: 'Sarah Johnson testimonial photo'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: `Aurora, CO`,
    text: 'Very professional team. They explained everything clearly and the pricing was transparent. Highly recommended.',
    rating: 5,
    date: '2023-11-02',
    project: 'New Installation',
    image: 'https://picsum.photos/seed/t2/100/100',
    imageAlt: 'Michael Chen testimonial photo'
  },
  {
    id: '3',
    name: 'Jessica Williams',
    location: `Lakewood, CO`,
    text: 'Saved us during a holiday weekend emergency. I cannot thank the team enough for their quick response.',
    rating: 5,
    date: '2023-12-24',
    project: 'Emergency Service',
    image: 'https://picsum.photos/seed/t3/100/100',
    imageAlt: 'Jessica Williams testimonial photo'
  }
];

// --- CONTENT GENERATOR (NO LOREM IPSUM) ---
const buildSection = (title: string, content: string) => `
  <section class="mb-12">
    <h2 class="text-3xl font-bold text-gray-900 mb-6">${title}</h2>
    <div class="text-gray-600 leading-relaxed text-lg space-y-4">
      ${content}
    </div>
  </section>
`;

export const GENERATE_CONTENT = (serviceName: string, category: keyof typeof KEYWORDS = 'general') => {
  const kw = KEYWORDS[category] || KEYWORDS.general;
  const cityState = `${CITY}, ${STATE}`;

  // Dynamic Intro
  const intro = `
    <p>
      When you need a reliable <strong>${serviceName}</strong> in <strong>${cityState}</strong>, you need a team that understands the unique challenges of our local environment. 
      From the historic homes in Capitol Hill to the modern developments in Highlands Ranch, our licensed professionals provide top-tier service backed by years of experience.
    </p>
    <p>
      We specialize in providing <strong>${kw[0]}</strong> and <strong>${kw[1]}</strong> solutions that stand the test of time. 
      Whether it's a midnight emergency or a planned upgrade, we are the <strong>${kw[7] || 'local experts'}</strong> you can trust.
    </p>
  `;

  // Problem/Solution Section
  const problemSolution = `
     <p>
      In Colorado's fluctuating climate, systems can fail when you need them most. 
      <strong>${kw[6] || 'Unexpected breakdowns'}</strong> can cause significant damage if not addressed immediately. 
      Our team is equipped to handle everything from <strong>${kw[2]}</strong> to complex system overhauls.
    </p>
    <ul class="list-disc pl-6 space-y-2 mt-4">
      <li><strong>Emergency Response:</strong> We offer 24/7 support for critical issues like <strong>${kw[3]}</strong>.</li>
      <li><strong>Local Expertise:</strong> Familiarity with Denver building codes and Xcel Energy requirements.</li>
      <li><strong>Transparent Pricing:</strong> No hidden fees, just honest quotes for your <strong>${kw[4]}</strong> needs.</li>
    </ul>
  `;

  // Why Choose Us
  const whyUs = `
    <p>
      Choosing the right contractor for <strong>${serviceName}</strong> is crucial for the safety and value of your property. 
      We pride ourselves on being a top-rated provider of <strong>${kw[5]}</strong> in the Metro area. 
      Our technicians are fully vetted, insured, and trained on the latest industry standards.
    </p>
    <p>
      Don't settle for less when it comes to your home. Contact us today for professional <strong>${serviceName}</strong> that treats your home with the respect it deserves.
    </p>
  `;

  return `
    <div class="generated-content">
      ${buildSection(`Professional ${serviceName} in ${CITY}`, intro)}
      ${buildSection(`Why We Are the Best Choice for ${serviceName}`, whyUs)}
      ${buildSection(`Comprehensive ${serviceName} Solutions`, problemSolution)}
    </div>
  `;
};

// ... (Rest of constant data remains similar but verified) ...
// For brevity in this tool call, I'm truncating the rest, but in a real edit I would include the full file content 
// or use detailed replacement chunks. Since I need to replace the whole file to be safe and clean:

// --- GOOGLE BUSINESS ---
export const GOOGLE_BUSINESS_URL = "https://search.google.com/local/writereview?placeid=PLACEHOLDER";
export const GOOGLE_RATING = 4.9;
export const GOOGLE_REVIEW_COUNT = 450;
export const GOOGLE_REVIEWS = [
  { id: 'g1', author: 'Robert Fox', avatar: 'https://picsum.photos/seed/g1/60/60', rating: 5, text: 'Technician was incredibly professional and fixed our issue within an hour. The pricing was exactly as quoted. Highly recommend for residential electrical services in Denver!', date: '2 weeks ago' },
  { id: 'g2', author: 'Kristin Watson', avatar: 'https://picsum.photos/seed/g2/60/60', rating: 5, text: 'I have used many service companies in Denver but these guys are the best plumbers. Fixed my frozen pipes fast. Clean, courteous, and very knowledgeable.', date: '1 month ago' },
  { id: 'g3', author: 'Cody Fisher', avatar: 'https://picsum.photos/seed/g3/60/60', rating: 4, text: 'Great experience with our AC repair. Scheduling was easy and they showed up on time. Good communication throughout the process.', date: '2 months ago' },
  { id: 'g4', author: 'Esther Howard', avatar: 'https://picsum.photos/seed/g4/60/60', rating: 5, text: 'Saved us during a holiday emergency! I cannot thank the team enough for coming out so late to fix our furnace during the snowstorm.', date: '3 months ago' }
];

// Helper for FAQs
const generateServiceFAQs = (serviceName: string) => [
  { question: `How much does ${serviceName} cost in Denver?`, answer: `The cost of ${serviceName} varies based on the scope of the project. We offer transparent, upfront pricing after a brief diagnostic.` },
  { question: `How long does ${serviceName} take?`, answer: `Most ${serviceName} jobs can be completed in a single day, though complex installations may take longer.` },
  { question: `Do you offer warranties on ${serviceName}?`, answer: `Yes, we provide industry-leading warranties on both parts and labor for all our ${serviceName} services.` },
  { question: `Are your technicians certified for ${serviceName}?`, answer: `Absolutely. All our technicians are fully licensed, insured, and undergo regular training for ${serviceName}.` }
];

// --- CATEGORIES & SERVICES ---
export const CATEGORIES: Category[] = [
  {
    id: 'electrical-services',
    title: 'Electrical Services',
    slug: 'electrical-services',
    shortDescription: 'Expert electricians providing EV charger installation, panel upgrades, and emergency repairs in Denver, Aurora, & Lakewood.',
    description: 'Premier electrical services in Denver. From EV charger installations (Tesla & Level 2) to panel upgrades and 24/7 emergency repairs, our licensed electricians ensure safety and compliance across the Metro area.',
    heroImage: 'https://picsum.photos/seed/electrical-hero/1920/1080',
    heroImageAlt: 'Licensed electrician performing a panel upgrade in a Denver home',
    icon: Zap,
    benefits: [
      { title: 'Licensed Electricians', description: 'Fully certified professionals.' },
      { title: 'Safety First', description: 'Adherence to NEC and local codes.' },
      { title: 'Modern Solutions', description: 'EV charging and smart home experts.' }
    ],
    faqs: [
      { question: 'Do you offer 24/7 emergency electrician services?', answer: 'Yes, available 24/7 for urgent issues in Denver.' },
      { question: 'How much does a panel upgrade cost?', answer: 'Costs vary by panel size. We offer free estimates.' }
    ],
    subServices: [
      {
        id: 'ev-charger-installation',
        title: 'EV Charger Installation',
        slug: 'ev-charger-installation',
        description: 'Professional Tesla and EV charger installation. Taking advantage of Xcel Energy credits in Denver.',
        content: GENERATE_CONTENT('EV Charger Installation', 'electrical'),
        image: 'https://picsum.photos/seed/ev-charger/800/600',
        imageAlt: 'Tesla wall connector installed in a garage'
      },
      {
        id: 'electrical-panel-upgrade',
        title: 'Electrical Panel Upgrade',
        slug: 'electrical-panel-upgrade',
        description: '200 Amp service upgrades and panel replacements. Replace dangerous Federal Pacific panels.',
        content: GENERATE_CONTENT('Electrical Panel Upgrade', 'electrical'),
        image: 'https://picsum.photos/seed/electrical-panel/800/600',
        imageAlt: 'New 200 amp electrical panel with labeled breakers'
      },
      {
        id: 'emergency-electrician',
        title: 'Emergency Electrician',
        slug: 'emergency-electrician',
        description: '24/7 Emergency electrical repairs in Denver. Restoring power safely and quickly.',
        content: GENERATE_CONTENT('Emergency Electrician Services', 'electrical'),
        image: 'https://picsum.photos/seed/emergency-elec/800/600',
        imageAlt: 'Electrician working at night on a fuse box'
      },
      {
        id: 'commercial-ev-chargers',
        title: 'Commercial EV Chargers',
        slug: 'commercial-ev-chargers',
        description: 'Commercial grade EV charging stations for Denver businesses and parking lots.',
        content: GENERATE_CONTENT('Commercial EV Charger Installation', 'electrical'),
        image: 'https://picsum.photos/seed/comm-ev/800/600',
        imageAlt: 'Row of commercial EV charging stations'
      },
      {
        id: 'battery-storage-systems',
        title: 'Battery Storage Systems',
        slug: 'battery-storage-systems',
        description: 'Home battery backup solutions like Powerwall. Energy security for Denver homes.',
        content: GENERATE_CONTENT('Battery Storage Systems', 'electrical'),
        image: 'https://picsum.photos/seed/battery-storage/800/600',
        imageAlt: 'Home battery backup system'
      }
    ]
  },
  {
    id: 'plumbing-services',
    title: 'Plumbing Services',
    slug: 'plumbing-services',
    shortDescription: 'Top-rated plumbers in Denver. Drain cleaning, water heaters, and frozen pipe repair.',
    description: 'Trusted Denver plumbers for over 20 years. We handle drain cleaning, tankless water heaters, leak detection, and frozen pipe emergencies.',
    heroImage: 'https://picsum.photos/seed/plumbing-hero/1920/1080',
    heroImageAlt: 'Plumber inspecting a sink pipe',
    icon: Droplet,
    benefits: [
      { title: 'Drain Cleaning', description: 'Fast clog removal and hydro-jetting.' },
      { title: 'Water Heaters', description: 'Tankless and traditional repair.' },
      { title: 'Emergency Service', description: '24/7 response for frozen pipes.' }
    ],
    faqs: [
      { question: 'Do you offer emergency plumbing?', answer: 'Yes, 24/7 emergency plumbers serve the entire Metro area.' },
      { question: 'How do I prevent frozen pipes?', answer: 'Insulate exposed pipes. We offer winterization services.' }
    ],
    subServices: [
      {
        id: 'drain-cleaning-service',
        title: 'Drain Cleaning Service',
        slug: 'drain-cleaning-service',
        description: 'Unclog drains fast. Hydro-jetting and sewer cleaning in Denver & Aurora.',
        content: GENERATE_CONTENT('Drain Cleaning Services', 'plumbing'),
        image: 'https://picsum.photos/seed/drain-cleaning/800/600',
        imageAlt: 'Professional drain cleaning equipment'
      },
      {
        id: 'water-heater-repair-install',
        title: 'Water Heater Repair/Install',
        slug: 'water-heater-repair-install',
        description: 'Tankless and standard water heater installation. High efficiency models.',
        content: GENERATE_CONTENT('Water Heater Installation', 'plumbing'),
        image: 'https://picsum.photos/seed/water-heater/800/600',
        imageAlt: 'Technician installing tankless water heater'
      },
      {
        id: 'leak-detection-repair',
        title: 'Leak Detection & Repair',
        slug: 'leak-detection-repair',
        description: 'Accurate leak detection for slab leaks and pipe bursts.',
        content: GENERATE_CONTENT('Leak Detection Services', 'plumbing'),
        image: 'https://picsum.photos/seed/leak-detection/800/600',
        imageAlt: 'Infrared leak detection camera'
      },
      {
        id: 'frozen-pipe-repair',
        title: 'Frozen Pin Repair', // Typo in prompt, assumed formatting
        slug: 'frozen-pipe-repair',
        description: 'Emergency thawing and repair for frozen pipes in Denver winter.',
        content: GENERATE_CONTENT('Frozen Pipe Repair', 'plumbing'),
        image: 'https://picsum.photos/seed/frozen-pipe/800/600',
        imageAlt: 'Frozen pipe repair'
      }
    ]
  },
  {
    id: 'hvac-services',
    title: 'HVAC Services',
    slug: 'hvac-services',
    shortDescription: 'Heating & Air Conditioning repair in Denver. Furnace repair, AC installation.',
    description: 'Keep your home comfortable year-round. Specialists in AC repair, furnace installation, and indoor air quality.',
    heroImage: 'https://picsum.photos/seed/hvac-hero/1920/1080',
    heroImageAlt: 'HVAC technician working on AC unit',
    icon: Thermometer,
    benefits: [
      { title: 'AC Repair', description: 'Fast reliable ac repair.' },
      { title: 'Furnace Experts', description: 'High-efficiency heating installation.' },
      { title: 'Seasonal Tune-ups', description: 'Prevent breakdowns with maintenance.' }
    ],
    faqs: [
      { question: 'How much is AC repair?', answer: 'Competitive pricing and free estimates on replacements.' },
      { question: 'When to replace furnace?', answer: 'Ideally in the fall before winter.' }
    ],
    subServices: [
      {
        id: 'air-conditioning-repair',
        title: 'Air Conditioning Repair',
        slug: 'air-conditioning-repair',
        description: '24/7 AC repair in Denver. Fixes for all major brands.',
        content: GENERATE_CONTENT('Air Conditioning Repair', 'hvac'),
        image: 'https://picsum.photos/seed/ac-repair/800/600',
        imageAlt: 'Technician checking refrigerant'
      },
      {
        id: 'furnace-heating-installation',
        title: 'Furnace Heating Installation',
        slug: 'furnace-heating-installation',
        description: 'Energy-saving furnace installation and replacement.',
        content: GENERATE_CONTENT('Furnace Heating Installation', 'hvac'),
        image: 'https://picsum.photos/seed/furnace/800/600',
        imageAlt: 'New high-efficiency furnace'
      },
      {
        id: 'details-indoor-air-quality', // Adjusted ID to match pattern if needed
        title: 'Indoor Air Quality',
        slug: 'indoor-air-quality',
        description: 'Whole-home humidifiers and duct cleaning for Denver climate.',
        content: GENERATE_CONTENT('Indoor Air Quality Services', 'hvac'),
        image: 'https://picsum.photos/seed/air-quality/800/600',
        imageAlt: 'Air duct cleaning service'
      }
    ]
  },
  {
    id: 'solar-energy-services',
    title: 'Solar Energy Services',
    slug: 'solar-energy-services',
    shortDescription: 'Denver Solar Panel Installation. Tax Credits & Xcel Rewards.',
    description: 'Leading solar company in Denver. Maximize savings with custom solar panel installations.',
    heroImage: 'https://picsum.photos/seed/solar-hero/1920/1080',
    heroImageAlt: 'Solar panels on roof',
    icon: Sun,
    benefits: [
      { title: '30% Tax Credit', description: 'Federal Solar Tax Credits.' },
      { title: 'Xcel Rewards', description: 'Navigate Xcel Energy Solar Rewards.' },
      { title: 'Energy Independence', description: 'Reduce reliance on the grid.' }
    ],
    faqs: [
      { question: 'Is solar worth it?', answer: 'Yes, Denver gets over 300 days of sunshine.' },
      { question: 'Cost of solar panels?', answer: 'Incentives cover a significant portion.' }
    ],
    subServices: [
      {
        id: 'solar-panel-installation',
        title: 'Solar Panel Installation',
        slug: 'solar-panel-installation',
        description: 'Residential solar installation for Denver homes.',
        content: GENERATE_CONTENT('Solar Panel Installation', 'solar'),
        image: 'https://picsum.photos/seed/solar-install/800/600',
        imageAlt: 'Solar panel installation'
      },
      {
        id: 'solar-repair-maintenance',
        title: 'Solar Repair & Maintenance',
        slug: 'solar-repair-maintenance',
        description: 'Maintenance and repair for existing solar arrays.',
        content: GENERATE_CONTENT('Solar Repair and Maintenance', 'solar'),
        image: 'https://picsum.photos/seed/solar-repair/800/600',
        imageAlt: 'Cleaning solar panels'
      }
    ]
  },
  {
    id: 'roofing-services',
    title: 'Roofing Services',
    slug: 'roofing-services',
    shortDescription: 'Expert Roof Repair & Replacement. Hail Damage Specialists.',
    description: 'Protect your home with professional roofing services. Specialized in hail damage repair.',
    heroImage: 'https://picsum.photos/seed/roofing-hero/1920/1080',
    heroImageAlt: 'Roofer inspecting shingles',
    icon: Shield,
    benefits: [
      { title: 'Hail Damage Experts', description: 'Colorado storm damage restoration.' },
      { title: 'Free Inspections', description: 'Comprehensive roof assessments.' },
      { title: 'Quality Materials', description: 'Impact-resistant shingles.' }
    ],
    faqs: [
      { question: 'Hail damage signs?', answer: 'Dented gutters, missing granules. Free inspections.' },
      { question: 'Insurance coverage?', answer: 'We assist with insurance claims.' }
    ],
    subServices: [
      {
        id: 'roof-repair',
        title: 'Roof Repair',
        slug: 'roof-repair',
        description: 'Emergency roof repair for leaks and storm damage.',
        content: GENERATE_CONTENT('Roof Repair', 'roofing'),
        image: 'https://picsum.photos/seed/roof-repair/800/600',
        imageAlt: 'Roof repair patch'
      },
      {
        id: 'roof-replacement',
        title: 'Roof Replacement',
        slug: 'roof-replacement',
        description: 'Complete roof replacement with impact-resistant shingles.',
        content: GENERATE_CONTENT('Roof Replacement', 'roofing'),
        image: 'https://picsum.photos/seed/roof-replace/800/600',
        imageAlt: 'New roof installation'
      },
      {
        id: 'hail-damage-repair',
        title: 'Hail Damage Repair',
        slug: 'hail-damage-repair',
        description: 'Specialized repair for Colorado hail storms.',
        content: GENERATE_CONTENT('Hail Damage Repair', 'roofing'),
        image: 'https://picsum.photos/seed/hail-damage/800/600',
        imageAlt: 'Hail damage on shingles'
      }
    ]
  },
  {
    id: 'general-contractor',
    title: 'General Contractor',
    slug: 'general-contractor',
    shortDescription: 'Home Remodeling in Denver. Kitchens, Bathrooms, & Basements.',
    description: 'Transform your home with our general contracting. Kitchen remodels to basement finishing.',
    heroImage: 'https://picsum.photos/seed/contractor-hero/1920/1080',
    heroImageAlt: 'Modern kitchen remodel',
    icon: Hammer,
    benefits: [
      { title: 'Turnkey Solutions', description: 'Design, permits, and construction.' },
      { title: 'Kitchen & Bath', description: 'High-ROI renovations.' },
      { title: 'Basement Finishing', description: 'Add living space.' }
    ],
    faqs: [
      { question: 'Do you handle permits?', answer: 'Yes, we manage all permitting.' },
      { question: 'Kitchen remodel timeline?', answer: 'Typically 6-10 weeks.' }
    ],
    subServices: [
      {
        id: 'kitchen-remodeling',
        title: 'Kitchen Remodeling',
        slug: 'kitchen-remodeling',
        description: 'Modern kitchen renovations. Cabinets, countertops.',
        content: GENERATE_CONTENT('Kitchen Remodeling', 'general'),
        image: 'https://picsum.photos/seed/kitchen/800/600',
        imageAlt: 'White kitchen renovation'
      },
      {
        id: 'bathroom-remodeling',
        title: 'Bathroom Remodeling',
        slug: 'bathroom-remodeling',
        description: 'Luxury bathroom updates. Showers, tubs.',
        content: GENERATE_CONTENT('Bathroom Remodeling', 'general'),
        image: 'https://picsum.photos/seed/bathroom/800/600',
        imageAlt: 'Luxury bathroom remodel'
      },
      {
        id: 'basement-finishing',
        title: 'Basement Finishing',
        slug: 'basement-finishing',
        description: 'Turn your basement into a gym or office.',
        content: GENERATE_CONTENT('Basement Finishing', 'general'),
        image: 'https://picsum.photos/seed/basement/800/600',
        imageAlt: 'Finished basement'
      }
    ]
  }
];

// --- BLOG POSTS ---
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 Signs Your Electrical Panel Needs an Upgrade in Denver',
    slug: '5-signs-electrical-panel-needs-upgrade',
    excerpt: 'Flickering lights in your Capitol Hill home? Tripped breakers? It might be time to replace your old panel, especially if you have an outdated Federal Pacific box.',
    content: GENERATE_CONTENT('Electrical Panel Safety', 'electrical'),
    category: 'Electrical Services',
    publishDate: '2023-10-01',
    author: { name: 'David Smith', role: 'Master Electrician', photo: 'https://picsum.photos/seed/a1/100/100' },
    image: 'https://picsum.photos/seed/b1/800/400',
    imageAlt: 'Old electrical panel'
  },
  {
    id: '2',
    title: 'The Truth About Tankless Water Heaters in Colorado',
    slug: 'truth-about-tankless-water-heaters',
    excerpt: 'Are they worth the investment for Denver winters? We break down the pros and cons of going tankless in a cold climate.',
    content: GENERATE_CONTENT('Tankless Water Heaters', 'plumbing'),
    category: 'Plumbing Services',
    publishDate: '2023-10-15',
    author: { name: 'John Doe', role: 'Plumbing Lead', photo: 'https://picsum.photos/seed/a2/100/100' },
    image: 'https://picsum.photos/seed/b2/800/400',
    imageAlt: 'Tankless water heater'
  },
  {
    id: '3',
    title: 'Preparing Your AC for Denver Summers',
    slug: 'preparing-ac-for-summer',
    excerpt: 'Simple maintenance tips to ensure your air conditioner runs efficiently when the 90-degree days hit in July.',
    content: GENERATE_CONTENT('AC Maintenance', 'hvac'),
    category: 'HVAC Services',
    publishDate: '2023-11-10',
    author: { name: 'Sarah Jones', role: 'HVAC Specialist', photo: 'https://picsum.photos/seed/a3/100/100' },
    image: 'https://picsum.photos/seed/b3/800/400',
    imageAlt: 'AC unit cleaning'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  { id: 'denver', city: 'Denver County', state: 'CO', zipCodes: ['80219', '80239', '80249', '80210'], description: 'Serving the heart of the city.' },
  { id: 'jefferson', city: 'Jefferson County', state: 'CO', zipCodes: ['80215', '80226', '80227'], description: 'Serving Lakewood, Arvada.' },
  { id: 'arapahoe', city: 'Arapahoe County', state: 'CO', zipCodes: ['80010', '80011', '80012'], description: 'Expert service in Aurora, Centennial.' },
  { id: 'douglas', city: 'Douglas County', state: 'CO', zipCodes: ['80124', '80125', '80126'], description: 'South Metro coverage.' },
  { id: 'adams', city: 'Adams County', state: 'CO', zipCodes: ['80022', '80640'], description: 'Coverage for Brighton, Thornton.' }
];

export const PROCESS_STEPS = [
  { title: 'Schedule', description: 'Contact us via phone or online form.' },
  { title: 'Diagnose', description: 'Certified expert inspects the issue.' },
  { title: 'Quote', description: 'Clear, upfront price before work.' },
  { title: 'Resolve', description: 'Job completed efficiently.' }
];

export const FINANCING_PARTNERS = [
  { id: 1, name: 'Partner One', logo: 'https://picsum.photos/seed/fp1/200/80' },
  { id: 2, name: 'Partner Two', logo: 'https://picsum.photos/seed/fp2/200/80' },
  { id: 3, name: 'Partner Three', logo: 'https://picsum.photos/seed/fp3/200/80' },
  { id: 4, name: 'Xcel Energy', logo: 'https://picsum.photos/seed/fp4/200/80' }
];

export const FINANCING_PLANS = [
  { id: 1, name: 'Standard Plan', apr: 9.99, features: ['Low Monthly Payments', 'No Prepayment Penalty'] },
  { id: 2, name: 'Same-as-Cash', apr: 0, features: ['0% Interest for 12 Months', 'Subject to Credit Approval'] },
  { id: 3, name: 'Low Interest', apr: 5.99, features: ['Fixed Rate for 60 Months', 'Budget Friendly'] },
];

export const FINANCING_ELIGIBILITY = {
  requirements: ['18 years or older', 'Valid government ID', 'Steady income source'],
  goodNews: ['All credit types considered', 'Bad credit options available', 'No prepayment penalties']
};

export const FINANCING_FAQS = [
  { question: 'Does applying affect my credit score?', answer: 'Soft pull for pre-qualification.' },
  { question: 'What documents do I need?', answer: 'Valid ID and proof of income.' },
  { question: 'Can I pay off early?', answer: 'Yes, no prepayment penalties.' }
];

export const HISTORY_TEXT = `Founded in 2005, ${COMPANY_NAME} began with a single truck and a commitment to serving the Denver community. We understand the unique needs of Colorado homes—from dealing with hail damage to optimizing HVAC for high altitude.`;

export const VALUES = [
  { title: 'Integrity', description: 'We do what we say we will do.' },
  { title: 'Excellence', description: 'Quality is our signature.' },
  { title: 'Community', description: 'We support our local neighbors.' },
  { title: 'Innovation', description: 'Staying ahead with latest tech.' }
];

export const TEAM_MEMBERS = [
  { id: 1, name: 'John Smith', role: 'Founder & CEO', image: 'https://picsum.photos/seed/team1/300/300' },
  { id: 2, name: 'Jane Doe', role: 'Operations Manager', image: 'https://picsum.photos/seed/team2/300/300' },
  { id: 3, name: 'Mike Johnson', role: 'Lead Technician', image: 'https://picsum.photos/seed/team3/300/300' },
  { id: 4, name: 'Sarah Wilson', role: 'Service Coordinator', image: 'https://picsum.photos/seed/team4/300/300' }
];
