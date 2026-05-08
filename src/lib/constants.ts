import { Category, Testimonial, BlogPost, ServiceArea } from './types';
import { Zap, Building2, Shield, Sun } from 'lucide-react';

// --- CONFIGURATION (DENVER EV CHARGERS) ---
export const COMPANY_NAME = "Denver EV Chargers";
export const PHONE_NUMBER = "(303) 555-0199";
export const CITY = "Denver";
export const STATE = "CO";
export const REGION = "Denver Metro Area";
export const ADDRESS = "123 Broadway";
export const ZIP_CODE = "80203";
export const EMAIL_ADDRESS = "info@denverevchargers.com";

// --- KEYWORD BANK (EV CHARGER FOCUSED) ---
const KEYWORDS = {
  ev_home: [
    "EV charger installation Denver",
    "Tesla charger installation",
    "electric car charger for home",
    "Level 2 charger installation Denver",
    "ev charging installation near me",
    "Tesla wall connector installation",
    "home EV charging station",
    "licensed EV charger installer Denver"
  ],
  ev_commercial: [
    "commercial EV charging Denver",
    "workplace EV charger installation",
    "multi-family EV charging stations",
    "fleet charging solutions Denver",
    "commercial Level 2 charger",
    "EV charging for businesses Denver",
    "parking lot EV charger installation",
    "networked EV charging stations"
  ],
  electrical: [
    "panel upgrade Denver",
    "electrical panel upgrade for EV",
    "240V outlet installation Denver",
    "NEMA 14-50 installation Denver",
    "dedicated EV circuit installation",
    "emergency electrician Denver",
    "licensed electrician Denver",
    "200 amp service upgrade Denver"
  ],
  ev_incentives: [
    "Xcel Energy EV rebates",
    "Colorado EV charger tax credit",
    "federal EV charger tax credit",
    "EV charging incentives Colorado 2025",
    "Xcel Energy rebate EV charger",
    "solar EV integration Denver",
    "Powerwall installation Denver",
    "battery storage EV home Denver"
  ],
  general: [
    "EV charger installer Denver",
    "electric vehicle charging Denver",
    "ev charger installation cost Denver",
    "best EV charger installer Denver",
    "ev charger installation near me",
    "Denver electric car charger",
    "ev charging station installation",
    "certified EV charger electrician Denver"
  ]
};

// --- TESTIMONIALS ---
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'Cherry Creek, Denver',
    text: 'The team at Denver EV Chargers made installing my Tesla Wall Connector seamless. They handled the permit with the city and the finish is perfect. My Model Y charges overnight with no issues.',
    rating: 5,
    date: '2025-01-15',
    project: 'Tesla Wall Connector — Tesla Model Y',
    image: 'https://i.pravatar.cc/150?u=sarah_jenkins',
    imageAlt: 'Sarah Jenkins testimonial photo'
  },
  {
    id: '2',
    name: 'Mike Olson',
    location: 'LoDo, Denver',
    text: 'Needed a charger in my tight garage in LoDo. They recommended a hardwired solution that saves space. Best EV charger installation in Denver. My Rivian is fully charged every morning.',
    rating: 5,
    date: '2025-02-03',
    project: 'Level 2 Hardwired Install — Rivian R1T',
    image: 'https://i.pravatar.cc/150?u=mike_olson',
    imageAlt: 'Mike Olson testimonial photo'
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    location: 'Washington Park, Denver',
    text: 'Professional, on time, and the price was exactly what they quoted. They handled all city permits and helped me apply for the Xcel Energy rebate. Highly recommend.',
    rating: 5,
    date: '2025-02-28',
    project: 'Level 2 Charger — Ford Mustang Mach-E',
    image: 'https://i.pravatar.cc/150?u=elena_rodriguez',
    imageAlt: 'Elena Rodriguez testimonial photo'
  }
];

// --- CONTENT GENERATOR (EV SEO OPTIMIZED) ---
const buildSection = (title: string, content: string) => {
  const id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  return `
    <section class="mb-16" id="${id}">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">${title}</h2>
      <div class="text-gray-600 leading-relaxed text-lg space-y-6">
        ${content}
      </div>
    </section>
  `;
};

export const GENERATE_CONTENT = (serviceName: string, category: keyof typeof KEYWORDS = 'general') => {
  const kw = KEYWORDS[category] || KEYWORDS.general;
  const cityState = `${CITY}, ${STATE}`;

  const intro = `
    <p>
      As electric vehicles become the standard on Denver's roads, having a reliable home or commercial charging solution is a necessity.
      Denver EV Chargers is the premier provider of <strong>${serviceName}</strong> in <strong>${cityState}</strong>, serving homeowners and businesses
      across Capitol Hill, Cherry Creek, RiNo, LoDo, Washington Park, and the Highlands.
    </p>
    <p>
      Our licensed electricians specialize in <strong>${kw[0]}</strong> and <strong>${kw[1]}</strong>, delivering installations that are
      safe, code-compliant, and built to last. Whether you drive a Tesla, Rivian, Ford Lightning, or Hyundai Ioniq,
      we engineer the right charging solution for your home's electrical system.
    </p>
  `;

  const deepDive = `
    <p>
      A proper <strong>${serviceName}</strong> goes far beyond running wire to an outlet. It requires a licensed electrician to perform
      a load calculation, assess your panel capacity, select the correct wire gauge for continuous 40-60A loads,
      and ensure the installation meets the 2025 National Electrical Code (NEC).
    </p>
    <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Load Calculations & Panel Assessment</h3>
    <p>
      Before any wire is run, we assess your home's electrical service. Many older Denver homes in Capitol Hill and the Highlands
      have 100A panels that require an upgrade to support a <strong>${kw[2]}</strong> safely alongside the home's other loads.
      We identify these needs upfront so there are no surprises.
    </p>
    <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Right-Sized Solutions</h3>
    <p>
      The right charger depends on your vehicle's onboard charger limit and your daily driving habits.
      We match your <strong>${kw[6] || 'home EV charging station'}</strong> to your vehicle and commute so you get
      maximum charge speed without over-engineering the system.
    </p>
  `;

  const localChallenges = `
    <p>Installing EV chargers in <strong>Denver</strong> presents unique considerations our local team understands deeply:</p>
    <ul class="list-disc pl-6 space-y-4 mt-6">
      <li>
        <strong>Historic Homes with Limited Electrical Capacity:</strong> Many Denver neighborhoods feature Victorian and craftsman homes
        with aging 60-100A service. Our electricians specialize in panel upgrades that make room for a dedicated
        <strong>${kw[3] || 'EV charging circuit'}</strong> without disrupting your home's character.
      </li>
      <li>
        <strong>HOA & Condo Coordination:</strong> LoDo lofts and Cherry Creek condos often require HOA approval for EV charger
        installations. We provide full documentation packages that HOAs need to expedite approvals.
      </li>
      <li>
        <strong>Cold Weather & Battery Range:</strong> Colorado winters affect EV range by up to 40%. A Level 2 charger running
        at 40A ensures your battery tops up overnight even after cold-weather preconditioning.
      </li>
      <li>
        <strong>Denver City & County Permitting:</strong> All EV charger circuits require an electrical permit from Denver's
        Community Planning and Development office. We handle every aspect, including inspections.
      </li>
    </ul>
  `;

  const process = `
    <p>Our <strong>${serviceName}</strong> process is transparent, efficient, and designed to minimize disruption:</p>
    <div class="space-y-6 mt-6">
      <div class="flex items-start gap-4">
        <div class="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
        <div>
           <strong class="text-gray-900 block mb-1">Free On-Site Estimate</strong>
           <p>We visit your property, assess your panel, measure conduit runs, and provide a detailed written quote — no obligation.</p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
        <div>
           <strong class="text-gray-900 block mb-1">Permit Filing</strong>
           <p>We submit all paperwork to Denver City & County, typically obtaining approvals within 2-3 business days.</p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
        <div>
           <strong class="text-gray-900 block mb-1">Professional Installation</strong>
           <p>Our licensed electricians complete your <strong>${serviceName}</strong> — typically in 3-6 hours for standard residential installs.</p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">4</div>
        <div>
           <strong class="text-gray-900 block mb-1">Testing & Rebate Filing</strong>
           <p>We test the circuit at full load, verify charger-to-vehicle communication, and submit your Xcel Energy rebate application.</p>
        </div>
      </div>
    </div>
  `;

  const diyRisks = `
    <p>
      EV charger wiring involves serious electrical risks and legal requirements that make DIY dangerous and costly.
    </p>
    <p>
      <strong>Safety Hazards:</strong> Running a 240V, 40-50A circuit without proper training can result in arc flash, house fires, or electrocution.
      EV chargers draw power continuously for hours — any wiring defect can cause an overheating failure overnight.
    </p>
    <p>
      <strong>Void Warranties & Insurance:</strong> Unpermitted EV charger installations can void your homeowner's insurance and your vehicle's battery warranty.
      Tesla, Rivian, and other manufacturers require installations to meet their exact specifications.
    </p>
    <p>
      <strong>Resale Complications:</strong> Unpermitted electrical work is a red flag in home inspections and can delay or kill the sale of your Denver property.
      Our installations are fully permitted and transferable, adding real value to your home.
    </p>
  `;

  const investment = `
    <p>
      The cost of <strong>${serviceName}</strong> in Denver typically ranges from <strong>$750 to $2,500</strong> depending on panel
      distance, panel capacity, and conduit routing. This investment is offset by significant incentives:
    </p>
    <ul class="list-disc pl-6 space-y-3 mt-4 mb-6">
      <li><strong>Federal Tax Credit:</strong> Claim 30% of hardware + installation costs, up to $1,000, via the Alternative Fuel Vehicle Refueling Property Credit.</li>
      <li><strong>Xcel Energy Rebates:</strong> Qualified residential installations can receive up to $500 from Xcel Energy's wiring rebate program.</li>
      <li><strong>Colorado EV Incentives:</strong> Colorado offers additional state rebates for EV infrastructure — we help you identify every incentive you qualify for.</li>
    </ul>
    <p>Our transparent pricing means the quote you receive is the price you pay. We also help you complete rebate applications to capture every available savings.</p>
  `;

  const neighborhoods = `
    <p>Our trucks serve the entire Denver Metro area, with expertise in each neighborhood's unique electrical characteristics:</p>
    <ul class="grid md:grid-cols-2 gap-4 mt-6">
      <li class="border-l-4 border-orange-500 pl-4 bg-gray-50 p-2 rounded"><strong>Capitol Hill & Cheesman Park:</strong> Historic home panel upgrade specialists.</li>
      <li class="border-l-4 border-orange-500 pl-4 bg-gray-50 p-2 rounded"><strong>Cherry Creek & Glendale:</strong> Premium EV installations for luxury properties.</li>
      <li class="border-l-4 border-orange-500 pl-4 bg-gray-50 p-2 rounded"><strong>RiNo & Five Points:</strong> Loft and mixed-use EV charging experts.</li>
      <li class="border-l-4 border-orange-500 pl-4 bg-gray-50 p-2 rounded"><strong>LoDo & Union Station:</strong> Urban condo and HOA coordination specialists.</li>
      <li class="border-l-4 border-orange-500 pl-4 bg-gray-50 p-2 rounded"><strong>Washington Park & Highlands:</strong> Residential Level 2 charger pros.</li>
      <li class="border-l-4 border-orange-500 pl-4 bg-gray-50 p-2 rounded"><strong>Aurora & Lakewood:</strong> Suburban and commercial EV coverage.</li>
    </ul>
    <p class="mt-4">No matter where you are in the <strong>${REGION}</strong>, our licensed electricians can provide a same-week estimate.</p>
  `;

  const conclusion = `
    <p>
      Denver's transition to electric vehicles is accelerating. With over 500 successful installations across the Metro area,
      Denver EV Chargers is the most trusted name for <strong>${serviceName}</strong> in Colorado.
    </p>
    <p>Don't settle for a general electrician who "thinks" they can install an EV charger. Work with specialists who do this every day.</p>
    <p class="text-xl font-bold text-gray-900 mt-6">
      Call <strong>(303) 555-0199</strong> today for a free estimate — same-week appointments available across Denver.
    </p>
  `;

  return `
    <div class="generated-content space-y-12">
      ${buildSection(`Professional ${serviceName} in ${CITY}, ${STATE}`, intro)}
      ${buildSection(`What's Involved in ${serviceName}`, deepDive)}
      ${buildSection(`Denver-Specific Considerations`, localChallenges)}
      ${buildSection(`Our 4-Step Installation Process`, process)}
      ${buildSection(`Why DIY ${serviceName} Is Risky`, diyRisks)}
      ${buildSection(`Cost, Rebates & Incentives`, investment)}
      ${buildSection(`Serving Your Neighborhood`, neighborhoods)}
      ${buildSection(`Ready to Charge Up?`, conclusion)}
    </div>
  `;
};

// --- GOOGLE REVIEWS ---
export const GOOGLE_BUSINESS_URL = "https://search.google.com/local/writereview?placeid=ChIJzxcfI6qAa4cR4bB9TCnVcSs";
export const GOOGLE_RATING = 4.9;
export const GOOGLE_REVIEW_COUNT = 312;
export const GOOGLE_REVIEWS = [
  { id: 'g1', author: 'Thomas Reed', avatar: 'https://i.pravatar.cc/150?u=thomas_reed', rating: 5, text: 'Incredible service. They installed my Tesla Wall Connector in Capitol Hill in under 4 hours, handled all the permits, and configured the WiFi. My Model 3 is fully charged every morning.', date: '1 week ago' },
  { id: 'g2', author: 'Amanda Flores', avatar: 'https://i.pravatar.cc/150?u=amanda_flores', rating: 5, text: 'They were the only company who knew about the Xcel Energy rebate and helped me apply for it. Saved $500 on my Level 2 charger installation in Cherry Creek. Highly recommend.', date: '3 weeks ago' },
  { id: 'g3', author: 'Derek Simmons', avatar: 'https://i.pravatar.cc/150?u=derek_simmons', rating: 5, text: 'Had my Rivian R1T charger installed in my RiNo loft. The conduit run through exposed brick looked great. Permit was pulled and city inspection passed first try.', date: '1 month ago' },
  { id: 'g4', author: 'Priya Nair', avatar: 'https://i.pravatar.cc/150?u=priya_nair', rating: 5, text: 'My old Washington Park home needed a panel upgrade to accommodate the EV charger — they explained everything clearly and finished in one day. Fast, professional, and affordable.', date: '2 months ago' }
];

// --- CATEGORIES ---
export const CATEGORIES: Category[] = [
  {
    id: 'home-ev-charging',
    title: 'Home EV Charging',
    slug: 'home-ev-charging',
    shortDescription: 'Tesla Wall Connector, Level 2 charger installation, and NEMA 14-50 outlets for Denver homeowners. Licensed, permitted, and guaranteed.',
    description: 'Professional home EV charger installation across Denver. From Tesla Wall Connectors to universal Level 2 chargers for Rivian, Ford Lightning, and Hyundai Ioniq. All installations are permitted and code-compliant.',
    heroImage: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
    heroImageAlt: 'Tesla Model 3 plugged into a professionally installed Wall Connector in a Denver residential garage',
    icon: Zap,
    benefits: [
      { title: 'Tesla Certified', description: 'Factory-spec Wall Connector installs.' },
      { title: 'Permit Included', description: 'We handle all city permitting.' },
      { title: 'Any EV Brand', description: 'Universal J1772 Level 2 charging.' }
    ],
    faqs: [
      { question: 'How much does a home EV charger installation cost in Denver?', answer: 'Most residential Level 2 installations range from $750 to $2,500 depending on panel location, conduit length, and whether a panel upgrade is needed. We provide free written estimates.' },
      { question: 'Do I need a permit to install a home EV charger in Denver?', answer: 'Yes. Denver City & County requires an electrical permit for all 240V EV charger circuits. We handle all permitting and city inspections as part of our service.' }
    ],
    subServices: [
      {
        id: 'tesla-wall-connector',
        title: 'Tesla Wall Connector',
        slug: 'tesla-wall-connector',
        description: 'Factory-spec Tesla Wall Connector installation for Model 3, Y, S, X, and Cybertruck. Up to 44 miles of range per hour. Fully permitted.',
        content: GENERATE_CONTENT('Tesla Wall Connector Installation', 'ev_home'),
        image: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
        imageAlt: 'Tesla Wall Connector installed in Denver residential garage'
      },
      {
        id: 'level-2-home-charger',
        title: 'Level 2 Home Charger',
        slug: 'level-2-home-charger',
        description: 'Universal J1772 Level 2 charger installation for Rivian, Ford Lightning, Hyundai Ioniq, Chevrolet Bolt, and all non-Tesla EVs.',
        content: GENERATE_CONTENT('Level 2 Home Charger Installation', 'ev_home'),
        image: 'https://i.ibb.co/V0GxZzvr/Seamless-Level-2-charger-integration-in-Washington-Park-We-specialize-in-preserving-Denver-039-s-archit.png',
        imageAlt: 'Level 2 EV charger installed in Washington Park Denver home'
      },
      {
        id: 'nema-14-50-outlet',
        title: 'NEMA 14-50 Outlet Install',
        slug: 'nema-14-50-outlet',
        description: 'Dedicated NEMA 14-50 outlet installation — compatible with virtually all portable EVSE adapters. Flexible, future-proof charging.',
        content: GENERATE_CONTENT('NEMA 14-50 Outlet Installation', 'ev_home'),
        image: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
        imageAlt: 'NEMA 14-50 outlet installed in Denver garage for EV charging'
      },
      {
        id: 'panel-upgrade-ev',
        title: 'Panel Upgrade for EV',
        slug: 'panel-upgrade-ev',
        description: '200A panel upgrades for historic Denver homes that need more capacity to support EV charging alongside existing loads.',
        content: GENERATE_CONTENT('Electrical Panel Upgrade for EV Charging', 'electrical'),
        image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
        imageAlt: 'Electrical panel upgrade Denver for EV charger installation'
      },
      {
        id: 'garage-ev-wiring',
        title: 'Garage EV Wiring',
        slug: 'garage-ev-wiring',
        description: 'Complete garage electrical wiring for EV charging — from sub-panel installation to conduit runs for detached garages.',
        content: GENERATE_CONTENT('Garage EV Wiring Services', 'ev_home'),
        image: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
        imageAlt: 'Garage EV wiring installation Denver detached garage'
      }
    ]
  },
  {
    id: 'commercial-ev-charging',
    title: 'Commercial EV Charging',
    slug: 'commercial-ev-charging',
    shortDescription: 'Scalable EV charging infrastructure for Denver businesses, multi-family buildings, offices, and retail parking. Load-managed and network-ready.',
    description: 'End-to-end commercial EV charging installation for Denver businesses and property managers. From HOA-approved multi-family systems to networked fleet chargers, we design and install scalable solutions.',
    heroImage: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
    heroImageAlt: 'Commercial EV charging stations installed in a LoDo Denver parking structure',
    icon: Building2,
    benefits: [
      { title: 'Scalable Design', description: 'Systems that grow with EV demand.' },
      { title: 'Load Management', description: 'Smart systems prevent overloads.' },
      { title: 'Networked Options', description: 'Access control and billing ready.' }
    ],
    faqs: [
      { question: 'How much does commercial EV charger installation cost?', answer: 'Commercial pricing varies by number of stations, service capacity, and trenching. We provide detailed site assessments and proposals at no cost.' },
      { question: 'Can you install EV chargers in a condo or apartment building?', answer: 'Yes. We specialize in multi-family EV charging with load management and individual billing. We also provide full HOA documentation packages.' }
    ],
    subServices: [
      {
        id: 'multi-family-ev-charging',
        title: 'Multi-Family EV Charging',
        slug: 'multi-family-ev-charging',
        description: 'HOA-approved EV charging systems for condos and apartments in Denver — with individual billing and access control.',
        content: GENERATE_CONTENT('Multi-Family EV Charging Installation', 'ev_commercial'),
        image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
        imageAlt: 'Multi-family EV charging stations Denver condo building'
      },
      {
        id: 'workplace-charging-stations',
        title: 'Workplace EV Charging',
        slug: 'workplace-charging-stations',
        description: 'Employee EV charging benefits — Level 2 chargers for office parking lots and corporate campuses across Denver.',
        content: GENERATE_CONTENT('Workplace EV Charging Installation', 'ev_commercial'),
        image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
        imageAlt: 'Workplace EV charging stations Denver Tech Center'
      },
      {
        id: 'fleet-charging',
        title: 'Fleet Charging Solutions',
        slug: 'fleet-charging',
        description: 'High-throughput charging depot design for EV delivery fleets, rideshare vehicles, and municipal fleets in Denver.',
        content: GENERATE_CONTENT('Fleet EV Charging Solutions', 'ev_commercial'),
        image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
        imageAlt: 'EV fleet charging depot Denver'
      },
      {
        id: 'retail-parking-ev',
        title: 'Retail Parking Chargers',
        slug: 'retail-parking-ev',
        description: 'EV charging as a customer amenity — attract EV drivers to your retail location with networked Level 2 stations.',
        content: GENERATE_CONTENT('Retail Parking EV Charger Installation', 'ev_commercial'),
        image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
        imageAlt: 'Retail parking EV charger Denver shopping center'
      }
    ]
  },
  {
    id: 'electrical-services',
    title: 'Electrical Services',
    slug: 'electrical-services',
    shortDescription: 'Panel upgrades, dedicated EV circuits, emergency electricians, and battery backup for Denver homes and businesses.',
    description: 'Full-service electrical solutions from Denver\'s EV charging specialists. Panel upgrades, dedicated circuits, battery storage, and emergency electrical work — all from licensed electricians.',
    heroImage: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
    heroImageAlt: 'Licensed electrician performing a panel upgrade in a Denver home',
    icon: Shield,
    benefits: [
      { title: 'Licensed Electricians', description: 'Fully certified and insured.' },
      { title: '24/7 Emergency', description: 'Urgent electrical repairs anytime.' },
      { title: 'NEC 2025 Compliant', description: 'All work meets current code.' }
    ],
    faqs: [
      { question: 'Do I need a panel upgrade for an EV charger?', answer: 'Many Denver homes with 100A or older panels need an upgrade to support a 40-50A EV charger circuit. We assess this during our free estimate.' },
      { question: 'Do you offer emergency electrical service in Denver?', answer: 'Yes, we provide 24/7 emergency electrician service across the Denver Metro area.' }
    ],
    subServices: [
      {
        id: 'electrical-panel-upgrade',
        title: 'Electrical Panel Upgrade',
        slug: 'electrical-panel-upgrade',
        description: '200A panel upgrades for Denver homes — often required to support EV charging. We also replace unsafe Federal Pacific and Zinsco panels.',
        content: GENERATE_CONTENT('Electrical Panel Upgrade', 'electrical'),
        image: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
        imageAlt: 'New 200 amp electrical panel Denver'
      },
      {
        id: 'emergency-electrician',
        title: 'Emergency Electrician',
        slug: 'emergency-electrician',
        description: '24/7 emergency electrical repairs in Denver. Fast response for power outages, tripped breakers, and EV charger issues.',
        content: GENERATE_CONTENT('Emergency Electrician Services', 'electrical'),
        image: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
        imageAlt: 'Emergency electrician Denver night repair'
      },
      {
        id: 'dedicated-ev-circuit',
        title: 'Dedicated EV Circuit',
        slug: 'dedicated-ev-circuit',
        description: 'Install a dedicated 240V, 50A circuit for your EV charger — the backbone of any safe, reliable home charging installation.',
        content: GENERATE_CONTENT('Dedicated EV Charging Circuit Installation', 'electrical'),
        image: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
        imageAlt: 'Dedicated 240V EV circuit installation Denver garage'
      },
      {
        id: 'battery-storage',
        title: 'Battery Storage Systems',
        slug: 'battery-storage',
        description: 'Home battery backup systems (Tesla Powerwall, Enphase IQ) paired with your EV charger for energy independence during outages.',
        content: GENERATE_CONTENT('Home Battery Storage Systems', 'electrical'),
        image: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
        imageAlt: 'Tesla Powerwall home battery storage Denver'
      }
    ]
  },
  {
    id: 'ev-incentives-solar',
    title: 'EV Incentives & Solar',
    slug: 'ev-incentives-solar',
    shortDescription: 'Maximize savings with Xcel Energy rebates, federal tax credits, and solar-powered EV charging integration in Denver.',
    description: 'Make your EV charging investment work harder. We guide Denver homeowners through every available rebate, tax credit, and solar incentive to minimize out-of-pocket costs.',
    heroImage: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
    heroImageAlt: 'Solar panels powering EV charging at a Denver home',
    icon: Sun,
    benefits: [
      { title: 'Xcel Rebates', description: 'Up to $500 from Xcel Energy.' },
      { title: '30% Federal Credit', description: 'IRS tax credit on hardware + install.' },
      { title: 'Solar Integration', description: 'Charge your EV with solar power.' }
    ],
    faqs: [
      { question: 'What is the federal tax credit for EV charger installation?', answer: 'The Alternative Fuel Vehicle Refueling Property Credit lets you claim 30% of hardware + installation costs, up to $1,000, through 2032.' },
      { question: 'Does Xcel Energy offer EV charger rebates in Denver?', answer: 'Yes. Xcel Energy\'s residential wiring rebate provides up to $500 for qualifying EV charger circuit installations. We help you apply as part of our service.' }
    ],
    subServices: [
      {
        id: 'xcel-energy-rebates',
        title: 'Xcel Energy EV Rebates',
        slug: 'xcel-energy-rebates',
        description: 'Navigate and apply for Xcel Energy\'s residential and commercial EV charger rebate programs — we handle the paperwork.',
        content: GENERATE_CONTENT('Xcel Energy EV Charger Rebates', 'ev_incentives'),
        image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
        imageAlt: 'Xcel Energy EV rebate application Denver'
      },
      {
        id: 'federal-tax-credits',
        title: 'Federal Tax Credits',
        slug: 'federal-tax-credits',
        description: 'Claim 30% of your EV charger installation cost (up to $1,000) with the Alternative Fuel Vehicle Refueling Property Credit.',
        content: GENERATE_CONTENT('Federal EV Charger Tax Credits', 'ev_incentives'),
        image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
        imageAlt: 'Federal tax credit EV charger installation 2025'
      },
      {
        id: 'solar-ev-integration',
        title: 'Solar + EV Integration',
        slug: 'solar-ev-integration',
        description: 'Pair your EV charger with a rooftop solar system — charge your car with free solar energy and eliminate your fuel bill entirely.',
        content: GENERATE_CONTENT('Solar and EV Charger Integration', 'ev_incentives'),
        image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
        imageAlt: 'Solar panels and EV charger integration Denver home'
      },
      {
        id: 'colorado-ev-incentives',
        title: 'Colorado EV Incentives',
        slug: 'colorado-ev-incentives',
        description: 'A complete guide to Colorado state incentives for EV charging infrastructure — from CDOT grants to utility programs.',
        content: GENERATE_CONTENT('Colorado EV Charging Incentives Guide', 'ev_incentives'),
        image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
        imageAlt: 'Colorado EV charging incentives 2025 guide'
      }
    ]
  }
];

// --- BLOG POSTS ---
export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Cost to Install a Tesla Charger in Denver (2025 Guide)',
    slug: 'cost-to-install-tesla-charger-denver',
    excerpt: 'Detailed breakdown of permit fees, hardware costs, and labor for installing a Tesla Wall Connector in Denver — including historic home considerations and Xcel Energy rebates.',
    content: `
      <p class="mb-6">
        As electric vehicle adoption surges in Colorado — specifically in neighborhoods like <strong>Capitol Hill</strong> and <strong>Cherry Creek</strong> — reliable home charging is a necessity. At Denver EV Chargers, we get asked every day: "How much does it cost to install a Tesla charger in Denver?"
      </p>
      <h2 class="text-2xl font-bold mt-8 mb-4">The Short Answer</h2>
      <p class="mb-6">Most Tesla Wall Connector installations in Denver range from <strong>$800 to $2,500</strong>. The wide range reflects real differences in your home's electrical situation — not arbitrary pricing.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">Cost Breakdown</h2>
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li><strong>Tesla Wall Connector hardware:</strong> $475 (Gen 3, from Tesla)</li>
        <li><strong>Electrician labor (3-6 hours):</strong> $250–$600</li>
        <li><strong>Materials (wire, conduit, breaker):</strong> $100–$300</li>
        <li><strong>Denver electrical permit:</strong> $75–$150</li>
        <li><strong>Panel upgrade (if needed):</strong> $1,500–$3,500 additional</li>
      </ul>
      <h2 class="text-2xl font-bold mt-8 mb-4">How to Reduce Your Cost</h2>
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li><strong>Federal Tax Credit:</strong> 30% of hardware + installation, up to $1,000.</li>
        <li><strong>Xcel Energy Wiring Rebate:</strong> Up to $500 for qualifying residential installations.</li>
        <li><strong>Colorado State Credits:</strong> Additional credits may apply.</li>
      </ul>
      <p class="mb-6">With these incentives, a $1,200 installation could net out to under $500. We help every customer identify and apply for every rebate they qualify for.</p>
    `,
    category: 'Home EV Charging',
    publishDate: '2025-05-15',
    author: { name: 'Jake Martinez', role: 'Lead EV Electrician', photo: 'https://i.pravatar.cc/150?u=jake_ev' },
    image: 'https://i.ibb.co/tpF60CGL/Generated-Image-December-05-2025-9-45-PM.jpg',
    imageAlt: 'Cost to install Tesla charger Denver — hardware permit labor breakdown 2025'
  },
  {
    id: '2',
    title: 'Level 1 vs Level 2 Charging: What Denver Drivers Need to Know',
    slug: 'level-1-vs-level-2-charging-denver',
    excerpt: 'Why a standard 120V outlet is not enough for most Denver EV drivers — and how a Level 2 charger changes your daily charging routine.',
    content: `
      <p class="mb-6">For many new EV owners in Denver, the first question is: "Can't I just plug into a regular outlet?"</p>
      <p class="mb-6">A standard 120V outlet (Level 1) delivers only about 3-5 miles of range per hour. For a daily commute from The Highlands to the Denver Tech Center, you need 8-12 hours just to recover what you used.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">The Level 2 Advantage</h2>
      <p class="mb-6">Level 2 chargers operate on 240V circuits and can deliver 25-45 miles of range per hour. You arrive home at 10% and wake up to 100% every morning.</p>
      <h3 class="text-xl font-bold mt-6 mb-3">Charge Speed Comparison</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Level 1 (120V, 12A):</strong> ~1.4 kW — 3-5 miles per hour</li>
        <li><strong>Level 2 (240V, 32A):</strong> ~7.7 kW — 20-25 miles per hour</li>
        <li><strong>Level 2 (240V, 48A):</strong> ~11.5 kW — 30-45 miles per hour (Tesla Wall Connector)</li>
      </ul>
      <h2 class="text-2xl font-bold mt-8 mb-4">Denver-Specific Note</h2>
      <p class="mb-6">Colorado winters reduce EV range by up to 40% due to cold-weather battery preconditioning. A Level 2 charger at 40A ensures you're still fully charged in the morning — a Level 1 charger often can't keep up.</p>
    `,
    category: 'Home EV Charging',
    publishDate: '2025-05-10',
    author: { name: 'Amanda Cruz', role: 'EV Installation Specialist', photo: 'https://i.pravatar.cc/150?u=amanda_ev' },
    image: 'https://i.ibb.co/V0GxZzvr/Seamless-Level-2-charger-integration-in-Washington-Park-We-specialize-in-preserving-Denver-039-s-archit.png',
    imageAlt: 'Level 1 vs Level 2 EV charging comparison Denver drivers guide'
  },
  {
    id: '3',
    title: 'Top 5 EV Charging Installation Incentives in Colorado (2025)',
    slug: 'colorado-ev-charger-incentives-2025',
    excerpt: 'Save money on your home EV charger installation with Xcel Energy rebates, federal tax credits, and Colorado state programs available in 2025.',
    content: `
      <p class="mb-6">Colorado is one of the most EV-friendly states in the country. Between federal credits, Xcel Energy rebates, and Colorado-specific programs, you could recover a significant portion of your installation cost.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">1. Federal Alternative Fuel Vehicle Refueling Property Credit</h2>
      <p class="mb-6">Claim <strong>30% of hardware + installation costs</strong>, up to <strong>$1,000</strong>, on your federal tax return. Available through 2032 via IRS Form 8911.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">2. Xcel Energy Residential EV Wiring Rebate</h2>
      <p class="mb-6">Qualified installations receive <strong>up to $500</strong> from Xcel Energy. We submit the rebate application on your behalf as part of our service.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">3. Xcel Energy EV Accelerate At Home</h2>
      <p class="mb-6">A lease-style program where Xcel provides a Level 2 charger at a reduced monthly rate with near-zero upfront cost.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">4. Colorado CDOT Clean Fleet Grants</h2>
      <p class="mb-6">For businesses and fleets, CDOT offers significant funding for commercial EV charging infrastructure.</p>
      <h2 class="text-2xl font-bold mt-8 mb-4">5. Colorado HOA Rights (HB 21-1167)</h2>
      <p class="mb-6">Colorado law protects your right to install an EV charger in a condo or HOA-governed property. HOAs cannot outright prohibit EV charger installation.</p>
    `,
    category: 'EV Incentives & Solar',
    publishDate: '2025-05-02',
    author: { name: 'Maria Santos', role: 'EV Incentive Specialist', photo: 'https://i.pravatar.cc/150?u=maria_ev' },
    image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
    imageAlt: 'Colorado EV charging installation incentives 2025 Xcel Energy rebates federal tax credits'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  { id: 'denver', city: 'Denver County', state: 'CO', zipCodes: ['80203', '80205', '80206', '80210', '80211', '80218'], description: 'Capitol Hill, Cherry Creek, RiNo, Highland, Washington Park.' },
  { id: 'jefferson', city: 'Jefferson County', state: 'CO', zipCodes: ['80215', '80226', '80227', '80401'], description: 'Serving Lakewood, Arvada, Golden.' },
  { id: 'arapahoe', city: 'Arapahoe County', state: 'CO', zipCodes: ['80010', '80011', '80012', '80014'], description: 'EV charger installation in Aurora, Centennial, Englewood.' },
  { id: 'douglas', city: 'Douglas County', state: 'CO', zipCodes: ['80124', '80125', '80126', '80134'], description: 'South Metro — Highlands Ranch, Parker, Castle Rock.' },
  { id: 'adams', city: 'Adams County', state: 'CO', zipCodes: ['80022', '80023', '80640'], description: 'EV charger installation in Westminster, Thornton, Brighton.' }
];

export const PROCESS_STEPS = [
  { title: 'Free Estimate', description: 'On-site assessment and written quote.' },
  { title: 'Permit Filing', description: 'We handle all city permits and HOA docs.' },
  { title: 'Installation', description: 'Completed by licensed electricians.' },
  { title: 'Testing & Rebate', description: 'Full system test + rebate application.' }
];

export const FINANCING_PARTNERS = [
  { id: 1, name: 'GreenSky', logo: 'https://placehold.co/200x80/orange/white?text=GreenSky' },
  { id: 2, name: 'Mosaic', logo: 'https://placehold.co/200x80/orange/white?text=Mosaic' },
  { id: 3, name: 'Synchrony', logo: 'https://placehold.co/200x80/orange/white?text=Synchrony' },
  { id: 4, name: 'Xcel Energy', logo: 'https://placehold.co/200x80/orange/white?text=Xcel+Energy' }
];

export const FINANCING_PLANS = [
  { id: 1, name: 'Standard Plan', apr: 9.99, features: ['Low Monthly Payments', 'No Prepayment Penalty', 'Min. $500 project'] },
  { id: 2, name: 'Same-as-Cash', apr: 0, features: ['0% Interest for 18 Months', 'Subject to Credit Approval', 'Ideal for full installs'] },
  { id: 3, name: 'Low Interest', apr: 5.99, features: ['Fixed Rate for 60 Months', 'Budget Friendly', 'Great for panel upgrades'] },
];

export const FINANCING_ELIGIBILITY = {
  requirements: ['18 years or older', 'Valid government ID', 'Steady income source'],
  goodNews: ['All credit types considered', 'Soft credit pull for pre-qualification', 'No prepayment penalties']
};

export const FINANCING_FAQS = [
  { question: 'Does applying affect my credit score?', answer: 'Pre-qualification uses a soft pull that does not affect your score.' },
  { question: 'What can I finance?', answer: 'Any EV charger installation, panel upgrade, or solar project we perform.' },
  { question: 'Can I pay off early?', answer: 'Yes, no prepayment penalties on any of our financing plans.' }
];

export const HISTORY_TEXT = `Founded in 2018, Denver EV Chargers began with a single mission: make professional EV charger installation accessible to every Denver homeowner. As Colorado's EV adoption accelerated, we grew from a two-person team to a full crew of licensed electricians serving the entire Metro area. Today, with over 500 installations completed, we are Denver's most trusted name in residential and commercial EV charging infrastructure.`;

export const VALUES = [
  { title: 'Safety First', description: 'Every installation meets NEC 2025 and Denver building codes.' },
  { title: 'Transparency', description: 'Our quotes are detailed and final — no hidden fees.' },
  { title: 'Local Expertise', description: 'We know Denver homes, Denver permits, and Denver utilities.' },
  { title: 'Full Service', description: 'From permits to rebate applications — we handle everything.' }
];

export const TEAM_MEMBERS = [
  { id: 1, name: 'Carlos Reyes', role: 'Master Electrician & Founder', image: 'https://i.pravatar.cc/300?u=carlos_ev' },
  { id: 2, name: 'Jake Martinez', role: 'Lead EV Installation Specialist', image: 'https://i.pravatar.cc/300?u=jake_ev' },
  { id: 3, name: 'Amanda Cruz', role: 'Commercial EV Project Manager', image: 'https://i.pravatar.cc/300?u=amanda_ev' },
  { id: 4, name: 'Maria Santos', role: 'Incentives & Customer Success', image: 'https://i.pravatar.cc/300?u=maria_ev' }
];
