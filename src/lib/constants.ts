
import { Category, Testimonial, BlogPost, ServiceArea } from './types';
import { Wrench, Zap, Droplet, Thermometer, Sun, Shield, Truck, Clock, Users, Award, Calendar } from 'lucide-react';

// --- CONFIGURATION (DENVER METRO SEO) ---
export const COMPANY_NAME = "Denver Metro Services";
export const PHONE_NUMBER = "555-0123-4567";
export const CITY = "Denver";
export const STATE = "CO";
export const REGION = "Denver Metro Area";

// --- GOOGLE BUSINESS INTEGRATION ---
export const GOOGLE_BUSINESS_URL = "https://search.google.com/local/writereview?placeid=PLACEHOLDER"; 
export const GOOGLE_RATING = 4.9;
export const GOOGLE_REVIEW_COUNT = 450;

export const GOOGLE_REVIEWS = [
  {
    id: 'g1',
    author: 'Robert Fox',
    avatar: 'https://picsum.photos/seed/g1/60/60',
    rating: 5,
    text: 'Technician was incredibly professional and fixed our issue within an hour. The pricing was exactly as quoted. Highly recommend for electrical services in Denver!',
    date: '2 weeks ago'
  },
  {
    id: 'g2',
    author: 'Kristin Watson',
    avatar: 'https://picsum.photos/seed/g2/60/60',
    rating: 5,
    text: 'I have used many service companies in Denver but these guys are the best plumbers. Clean, courteous, and very knowledgeable.',
    date: '1 month ago'
  },
  {
    id: 'g3',
    author: 'Cody Fisher',
    avatar: 'https://picsum.photos/seed/g3/60/60',
    rating: 4,
    text: 'Great experience overall. Scheduling was easy and they showed up on time. Good communication throughout the process.',
    date: '2 months ago'
  },
  {
    id: 'g4',
    author: 'Esther Howard',
    avatar: 'https://picsum.photos/seed/g4/60/60',
    rating: 5,
    text: 'Saved us during a holiday emergency! I cannot thank the team enough for coming out so late to fix our furnace.',
    date: '3 months ago'
  }
];

// --- CONTENT GENERATOR FOR SEO DENSITY ---
const LOREM_PARAGRAPH = `
  <p class="mb-6 text-gray-300 leading-relaxed">
    We are proud to serve the <strong>Denver Metro Area</strong>, offering top-tier services to residents in Denver, Aurora, Lakewood, and beyond.
    Our team understands the unique challenges of Colorado homes, from altitude-specific appliance adjustments to weather-proofing against our extreme temperature fluctuations.
    Whether you need emergency repairs or a full system upgrade, we bring years of local experience to every job.
  </p>
  <p class="mb-6 text-gray-300 leading-relaxed">
    Choosing a local provider means faster response times and technicians who know local building codes inside and out. 
    We cover all major counties including Denver, Adams, Arapahoe, Jefferson, Douglas, Broomfield, and Boulder.
    Trust us to deliver reliable, long-lasting solutions for your home or business.
  </p>
`;

const LOREM_SECTION = (topic: string) => `
  <h2 class="text-3xl font-bold text-white mt-12 mb-6">Comprehensive ${topic} Solutions in Denver</h2>
  ${LOREM_PARAGRAPH}
  
  <h3 class="text-2xl font-bold text-white mt-8 mb-4">Why Professional Service Matters</h3>
  <p class="mb-6 text-gray-300 leading-relaxed">
    Expertise is critical when dealing with complex systems in your home. Our licensed professionals ensure that every ${topic} job is performed safely and up to code.
    Don't risk DIY disasters or unlicensed contractors. We provide peace of mind with our satisfaction guarantee and warranty on parts and labor.
  </p>
  
  <ul class="list-disc pl-6 mb-8 space-y-3 text-gray-300">
    <li><strong>Local Expertise:</strong> Serving the entire Denver Front Range with specialized knowledge.</li>
    <li><strong>Quality Materials:</strong> We use only the highest rated components suitable for Colorado's climate.</li>
    <li><strong>Safety Compliance:</strong> Strictly adhering to Denver and Colorado state regulations.</li>
    <li><strong>Long-term Reliability:</strong> Solutions designed to last, adding value to your property.</li>
  </ul>

  <h3 class="text-2xl font-bold text-white mt-8 mb-4">Our Commitment to Denver Residents</h3>
  <p class="mb-6 text-gray-300 leading-relaxed">
    We are more than just a service provider; we are your neighbors. We are committed to maintaining the safety and comfort of homes across the Metro area.
    From historic bungalows in Wash Park to modern builds in Highlands Ranch, we tailor our approach to your specific property.
  </p>
`;

export const GENERATE_CONTENT = (title: string) => `
  <div class="generated-content">
    <p class="text-xl text-gray-300 mb-8 leading-relaxed font-light">
      Discover the industry standard for <strong>${title}</strong> in <strong>Denver, CO</strong>. We provide an extensive range of services 
      designed to meet the unique needs of our local community. From initial consultation to final inspection, our team allows you to 
      rest easy knowing your property is in capable hands.
    </p>
    ${LOREM_SECTION(title)}
    ${LOREM_SECTION(`${title} Maintenance`)}
    ${LOREM_SECTION(`${title} Installation`)}
    <h2 class="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions About ${title} in Denver</h2>
    <p class="mb-6 text-gray-300 leading-relaxed">Get answers to common questions about our services, pricing, and availability in the Denver Metro area.</p>
  </div>
`;

// Helper to generate generic FAQs for sub-services
const generateServiceFAQs = (serviceName: string) => [
  { question: `How much does ${serviceName} cost in Denver?`, answer: `The cost of ${serviceName} varies based on the scope of the project. We offer transparent, upfront pricing after a brief diagnostic.` },
  { question: `How long does ${serviceName} take?`, answer: `Most ${serviceName} jobs can be completed in a single day, though complex installations may take longer.` },
  { question: `Do you offer warranties on ${serviceName}?`, answer: `Yes, we provide industry-leading warranties on both parts and labor for all our ${serviceName} services.` },
  { question: `Are your technicians certified for ${serviceName}?`, answer: `Absolutely. All our technicians are fully licensed, insured, and undergo regular training for ${serviceName}.` }
];

// --- MOCK DATA FOR CATEGORIES ---

export const CATEGORIES: Category[] = [
  {
    id: 'electrical',
    title: 'Electrical Services',
    slug: 'electrical-services',
    shortDescription: 'Expert electricians serving Denver, Aurora, Lakewood, and surrounding areas. Licensed & Insured.',
    description: 'Premier electrical services in Denver. From panel upgrades and EV charger installations to emergency repairs, our licensed electricians ensure safety and compliance across the Metro area.',
    heroImage: 'https://picsum.photos/seed/electrical-hero/1920/1080',
    icon: Zap,
    benefits: [
      { title: 'Licensed Electricians', description: 'Fully certified professionals serving Denver County & beyond.' },
      { title: 'Safety First', description: 'Adherence to NEC and local Denver building codes.' },
      { title: 'Modern Solutions', description: 'Smart home, EV charging, and battery storage experts.' }
    ],
    faqs: [
      { question: 'Do you offer 24/7 emergency electrician services in Denver?', answer: 'Yes, we have emergency electricians available 24/7 for urgent issues in Denver, Aurora, and Lakewood.' },
      { question: 'How much does an electrical panel upgrade cost in Denver?', answer: 'Costs vary by panel size (e.g., 200 amp service). We offer free estimates for panel upgrades.' }
    ],
    subServices: [
      { 
        id: 'ev-chargers', 
        title: 'EV Charger Installation', 
        slug: 'ev-charger-installation', 
        description: 'Professional Tesla and EV charger installation. Serving Denver, Aurora, and the Front Range.',
        content: GENERATE_CONTENT('EV Charger Installation'),
        image: 'https://picsum.photos/seed/ev-charger/800/600',
        faqs: [
            { question: 'Do I need a panel upgrade for an EV charger in Denver?', answer: 'Often yes, especially in older Denver homes. We perform a load calculation to be sure.' },
            { question: 'Can you install Tesla chargers?', answer: 'Yes, we specialize in Tesla Wall Connector installations and all Level 2 chargers.' },
            { question: 'Are there rebates for EV chargers in Colorado?', answer: 'Yes, Xcel Energy and other local programs offer rebates. We can help you navigate them.' }
        ]
      },
      { 
        id: 'battery-storage', 
        title: 'Battery Storage Systems', 
        slug: 'battery-storage-systems', 
        description: 'Home battery backup solutions like Powerwall. Energy security for Denver homes.',
        content: GENERATE_CONTENT('Battery Storage Systems'),
        image: 'https://picsum.photos/seed/battery-storage/800/600',
        faqs: generateServiceFAQs('Battery Storage Systems')
      },
      { 
        id: 'panels', 
        title: 'Electrical Panel Upgrade', 
        slug: 'electrical-panel-upgrade', 
        description: '200 Amp service upgrades and panel replacements for modern power needs.',
        content: GENERATE_CONTENT('Electrical Panel Upgrades'),
        image: 'https://picsum.photos/seed/electrical-panel/800/600',
        faqs: generateServiceFAQs('Electrical Panel Upgrade')
      },
      { 
        id: 'generators', 
        title: 'Whole Home Generators', 
        slug: 'whole-home-generators', 
        description: 'Standby generator installation (Generac, etc.) for outage protection.',
        content: GENERATE_CONTENT('Whole Home Generators'),
        image: 'https://picsum.photos/seed/generator/800/600',
        faqs: generateServiceFAQs('Whole Home Generators')
      }
    ]
  },
  {
    id: 'plumbing',
    title: 'Plumbing Services',
    slug: 'plumbing-services',
    shortDescription: 'Top-rated plumbers in Denver, Aurora, and Lakewood. 24/7 Emergency Service.',
    description: 'Trusted Denver plumbers for over 20 years. We handle drain cleaning, water heaters, leak detection, and whole-home repiping. Fast, reliable service across the Metro area.',
    heroImage: 'https://picsum.photos/seed/plumbing-hero/1920/1080',
    icon: Droplet,
    benefits: [
      { title: 'Drain Cleaning', description: 'Fast clog removal and hydro-jetting services.' },
      { title: 'Water Heaters', description: 'Experts in tankless and traditional water heater repair.' },
      { title: 'Leak Detection', description: 'Advanced technology to find hidden leaks anywhere.' }
    ],
    faqs: [
      { question: 'Do you offer emergency plumbing in Denver?', answer: 'Yes, our 24/7 emergency plumbers serve the entire Denver Metro area.' },
      { question: 'How do I prevent frozen pipes in Colorado?', answer: 'Insulate exposed pipes and keep your thermostat consistent. We offer winterization services.' }
    ],
    subServices: [
      { 
        id: 'drain-cleaning', 
        title: 'Drain Cleaning Service', 
        slug: 'drain-cleaning-service', 
        description: 'Unclog drains fast. Hydro-jetting and sewer cleaning in Denver & Aurora.',
        content: GENERATE_CONTENT('Drain Cleaning Services'),
        image: 'https://picsum.photos/seed/drain-cleaning/800/600',
        faqs: generateServiceFAQs('Drain Cleaning')
      },
      { 
        id: 'water-heaters', 
        title: 'Water Heater Repair/Install', 
        slug: 'water-heater-repair-install', 
        description: 'Tankless and standard water heater installation and repair.',
        content: GENERATE_CONTENT('Water Heater Installation'),
        image: 'https://picsum.photos/seed/water-heater/800/600',
        faqs: generateServiceFAQs('Water Heaters')
      },
      { 
        id: 'leak-detection', 
        title: 'Leak Detection & Repair', 
        slug: 'leak-detection-repair', 
        description: ' accurate leak detection for slab leaks and pipe bursts.',
        content: GENERATE_CONTENT('Leak Detection Services'),
        image: 'https://picsum.photos/seed/leak-detection/800/600',
        faqs: generateServiceFAQs('Leak Detection')
      },
      { 
        id: 'piping', 
        title: 'Whole Home Repiping', 
        slug: 'whole-home-repiping', 
        description: 'Replace old galvanized pipes with copper or PEX. Denver pipe replacement experts.',
        content: GENERATE_CONTENT('Whole Home Repiping'),
        image: 'https://picsum.photos/seed/repiping/800/600',
        faqs: generateServiceFAQs('Whole Home Repiping')
      }
    ]
  },
  {
    id: 'hvac',
    title: 'HVAC Services',
    slug: 'hvac-services',
    shortDescription: 'Heating & Air Conditioning repair and installation in Denver. Furnaces & ACs.',
    description: 'Keep your home comfortable year-round with our Denver HVAC services. Specialists in AC repair, furnace installation, and indoor air quality for Colorado\'s climate.',
    heroImage: 'https://picsum.photos/seed/hvac-hero/1920/1080',
    icon: Thermometer,
    benefits: [
      { title: 'AC Repair', description: 'Fast reliable air conditioning repair for Denver summers.' },
      { title: 'Furnace Experts', description: 'High-efficiency heating installation for cold winters.' },
      { title: 'Seasonal Tune-ups', description: 'Prevent breakdowns with our maintenance plans.' }
    ],
    faqs: [
      { question: 'How much is AC repair in Denver?', answer: 'Service call fees vary, but we offer competitive pricing and free estimates on replacements.' },
      { question: 'When is the best time to replace my furnace in Colorado?', answer: 'Ideally in the fall before the winter rush. We offer off-season discounts.' }
    ],
    subServices: [
      { 
        id: 'ac-repair', 
        title: 'Air Conditioning Repair', 
        slug: 'air-conditioning-repair', 
        description: '24/7 AC repair in Denver. Fixes for all major brands.',
        content: GENERATE_CONTENT('Air Conditioning Repair'),
        image: 'https://picsum.photos/seed/ac-repair/800/600',
        faqs: generateServiceFAQs('AC Repair')
      },
      { 
        id: 'furnace', 
        title: 'Furnace Heating Installation', 
        slug: 'furnace-heating-installation', 
        description: 'Energy-saving furnace installation and replacement.',
        content: GENERATE_CONTENT('Furnace Heating Installation'),
        image: 'https://picsum.photos/seed/furnace/800/600',
        faqs: generateServiceFAQs('Furnace Installation')
      },
      { 
        id: 'air-quality', 
        title: 'Indoor Air Quality', 
        slug: 'indoor-air-quality', 
        description: 'Humidifiers and air purifiers for Denver\'s dry climate.',
        content: GENERATE_CONTENT('Indoor Air Quality Services'),
        image: 'https://picsum.photos/seed/air-quality/800/600',
        faqs: generateServiceFAQs('Indoor Air Quality')
      },
      { 
        id: 'smart-thermostats', 
        title: 'Smart Thermostat Installation', 
        slug: 'smart-thermostat-installation', 
        description: 'Nest and Ecobee installation for smart energy savings.',
        content: GENERATE_CONTENT('Smart Thermostat Installation'),
        image: 'https://picsum.photos/seed/thermostat/800/600',
        faqs: generateServiceFAQs('Smart Thermostats')
      }
    ]
  },
  {
    id: 'solar',
    title: 'Solar Energy Services',
    slug: 'solar-energy-services',
    shortDescription: 'Denver Solar Panel Installation & Repair. Harness Colorado sunshine.',
    description: 'Leading solar company in Denver. Maximize your energy savings with our custom solar panel installations and maintenance services.',
    heroImage: 'https://picsum.photos/seed/solar-hero/1920/1080',
    icon: Sun,
    benefits: [
      { title: '30% Tax Credit', description: 'Take advantage of Federal Solar Tax Credits.' },
      { title: 'Xcel Rewards', description: 'We help you navigate Xcel Energy Solar Rewards.' },
      { title: 'Energy Independence', description: 'Reduce specific reliance on the grid.' }
    ],
    faqs: [
      { question: 'Is solar worth it in Denver?', answer: 'Yes! Denver gets over 300 days of sunshine a year, making it one of the best places for solar.' },
      { question: 'How much do solar panels cost in Colorado?', answer: 'Systems vary, but incentives can cover a significant portion of the cost.' }
    ],
    subServices: [
      { 
        id: 'solar-install', 
        title: 'Solar Panel Installation', 
        slug: 'solar-panel-installation', 
        description: 'Residential solar installation for Denver homes.',
        content: GENERATE_CONTENT('Solar Panel Installation'),
        image: 'https://picsum.photos/seed/solar-install/800/600',
        faqs: generateServiceFAQs('Solar Panel Installation')
      },
      { 
        id: 'solar-repair', 
        title: 'Solar Repair & Maintenance', 
        slug: 'solar-repair-maintenance', 
        description: 'Maintenance, cleaning, and repair for existing solar arrays.',
        content: GENERATE_CONTENT('Solar Repair and Maintenance'),
        image: 'https://picsum.photos/seed/solar-repair/800/600',
        faqs: generateServiceFAQs('Solar Panel Repair')
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: `Denver, CO`,
    text: 'Absolutely the best service I have received. The technician arrived on time and fixed the issue in under an hour.',
    rating: 5,
    date: '2023-10-15',
    project: 'Heating Repair',
    image: 'https://picsum.photos/seed/t1/100/100'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: `Aurora, CO`,
    text: 'Very professional team. They explained everything clearly and the pricing was transparent. Highly recommended.',
    rating: 5,
    date: '2023-11-02',
    project: 'New Installation',
    image: 'https://picsum.photos/seed/t2/100/100'
  },
  {
    id: '3',
    name: 'Jessica Williams',
    location: `Lakewood, CO`,
    text: 'Saved us during a holiday weekend emergency. I cannot thank the team enough for their quick response.',
    rating: 5,
    date: '2023-12-24',
    project: 'Emergency Service',
    image: 'https://picsum.photos/seed/t3/100/100'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: 'denver',
    city: 'Denver County',
    state: 'CO',
    zipCodes: ['80202', '80203', '80204', '80205', '80206', '80207', '80209', '80210', '80211', '80212'],
    description: 'Serving the heart of the city including Capitol Hill, specialized LoDo, and Cherry Creek.'
  },
  {
    id: 'adams',
    city: 'Adams County',
    state: 'CO',
    zipCodes: ['80022', '80640', '80229', '80260', '80601', '80602'],
    description: 'Coverage for Brighton, Commerce City, and Thornton.'
  },
  {
    id: 'arapahoe',
    city: 'Arapahoe County',
    state: 'CO',
    zipCodes: ['80010', '80011', '80012', '80013', '80014', '80015', '80016', '80111', '80112'],
    description: 'Expert service in Aurora, Centennial, Littleton, and Englewood.'
  },
  {
    id: 'jefferson',
    city: 'Jefferson County',
    state: 'CO',
    zipCodes: ['80215', '80226', '80227', '80228', '80232', '80401', '80002', '80003', '80004', '80005'],
    description: 'Serving Lakewood, Arvada, Golden, and Wheat Ridge.'
  },
  {
    id: 'douglas',
    city: 'Douglas County',
    state: 'CO',
    zipCodes: ['80124', '80125', '80126', '80129', '80130', '80134', '80138'],
    description: 'South Metro coverage including Highlands Ranch, Castle Rock, and Parker.'
  },
  {
    id: 'broomfield',
    city: 'Broomfield County',
    state: 'CO',
    zipCodes: ['80020', '80021', '80023'],
    description: 'Serving the consolidated city and county of Broomfield.'
  },
  {
    id: 'boulder',
    city: 'Boulder County',
    state: 'CO',
    zipCodes: ['80301', '80302', '80303', '80304', '80305', '80027', '80026'],
    description: 'Northwest coverage in Boulder, Longmont, Lafayette, and Louisville.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 Signs Your Electrical Panel Needs an Upgrade in Denver',
    slug: '5-signs-electrical-panel-needs-upgrade',
    excerpt: 'Flickering lights in your Capitol Hill home? Tripped breakers? It might be time to replace your old panel.',
    content: GENERATE_CONTENT('Electrical Panel Safety'),
    category: 'Electrical Services',
    publishDate: '2023-10-01',
    author: { name: 'David Smith', role: 'Master Electrician', photo: 'https://picsum.photos/seed/a1/100/100' },
    image: 'https://picsum.photos/seed/b1/800/400'
  },
  {
    id: '2',
    title: 'The Truth About Tankless Water Heaters in Colorado',
    slug: 'truth-about-tankless-water-heaters',
    excerpt: 'Are they worth the investment for Denver winters? We break down the pros and cons.',
    content: GENERATE_CONTENT('Tankless Water Heaters'),
    category: 'Plumbing Solutions',
    publishDate: '2023-10-15',
    author: { name: 'John Doe', role: 'Plumbing Lead', photo: 'https://picsum.photos/seed/a2/100/100' },
    image: 'https://picsum.photos/seed/b2/800/400'
  },
  {
    id: '3',
    title: 'Preparing Your AC for Denver Summers',
    slug: 'preparing-ac-for-summer',
    excerpt: 'Simple maintenance tips to ensure your air conditioner runs efficiently when the 90-degree days hit.',
    content: GENERATE_CONTENT('AC Maintenance'),
    category: 'HVAC Services',
    publishDate: '2023-11-10',
    author: { name: 'Sarah Jones', role: 'HVAC Specialist', photo: 'https://picsum.photos/seed/a3/100/100' },
    image: 'https://picsum.photos/seed/b3/800/400'
  }
];

export const PROCESS_STEPS = [
  { title: 'Schedule', description: 'Contact us via phone or online form to book a convenient time.' },
  { title: 'Diagnose', description: 'Our certified expert arrives to inspect and identify the issue.' },
  { title: 'Quote', description: 'We provide a clear, upfront price before starting any work.' },
  { title: 'Resolve', description: 'We complete the job efficiently and clean up the workspace.' }
];

// --- FINANCING & ABOUT SPECIFIC DATA ---

export const FINANCING_PARTNERS = [
  { id: 1, name: 'Partner One', logo: 'https://picsum.photos/seed/fp1/200/80' },
  { id: 2, name: 'Partner Two', logo: 'https://picsum.photos/seed/fp2/200/80' },
  { id: 3, name: 'Partner Three', logo: 'https://picsum.photos/seed/fp3/200/80' },
];

export const FINANCING_PLANS = [
  { id: 1, name: 'Standard Plan', apr: 9.99, features: ['Low Monthly Payments', 'No Prepayment Penalty', 'Quick Approval'] },
  { id: 2, name: 'Same-as-Cash', apr: 0, features: ['0% Interest for 12 Months', 'No Monthly Payments', 'Subject to Credit Approval'] },
  { id: 3, name: 'Low Interest', apr: 5.99, features: ['Fixed Rate for 60 Months', 'Budget Friendly', 'Ideal for Large Projects'] },
];

export const FINANCING_ELIGIBILITY = {
  requirements: ['18 years or older', 'Valid government ID', 'Steady income source', 'Active checking account'],
  goodNews: ['All credit types considered', 'Bad credit options available', 'No prepayment penalties', 'Same-day approval possible']
};

export const FINANCING_FAQS = [
  { question: 'Does applying affect my credit score?', answer: 'Most of our partners use a soft pull for pre-qualification, which does not affect your score.' },
  { question: 'What documents do I need?', answer: 'Typically just a valid ID and proof of income.' },
  { question: 'Can I pay off my loan early?', answer: 'Yes, all our plans come with no prepayment penalties.' }
];

export const HISTORY_TEXT = `Founded in 2005, ${COMPANY_NAME} began with a single truck and a commitment to serving the Denver community. Over the past two decades, we've grown into one of the region's most trusted service providers, covering everything from Arvada to Aurora. We understand the unique needs of Colorado homes and believe in treating every customer's home with the same respect we'd treat our own.`;

export const VALUES = [
  { title: 'Integrity', description: 'We do what we say we will do, even when no one is watching.' },
  { title: 'Excellence', description: 'We never cut corners. Quality is our signature.' },
  { title: 'Community', description: 'We live here, we work here, and we support our local Denver neighbors.' },
  { title: 'Innovation', description: 'We stay ahead of the curve with the latest technology and training.' }
];

export const TEAM_MEMBERS = [
  { id: 1, name: 'John Smith', role: 'Founder & CEO', image: 'https://picsum.photos/seed/team1/300/300' },
  { id: 2, name: 'Jane Doe', role: 'Operations Manager', image: 'https://picsum.photos/seed/team2/300/300' },
  { id: 3, name: 'Mike Johnson', role: 'Lead Technician', image: 'https://picsum.photos/seed/team3/300/300' },
  { id: 4, name: 'Sarah Wilson', role: 'Service Coordinator', image: 'https://picsum.photos/seed/team4/300/300' }
];
