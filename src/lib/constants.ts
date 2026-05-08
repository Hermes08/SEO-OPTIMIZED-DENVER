import { Category, Testimonial, BlogPost, ServiceArea } from './types';
import { Zap, Droplet, Thermometer, Sun, Shield, Hammer } from 'lucide-react';

// --- CONFIGURATION ---
export const COMPANY_NAME = "Denver Metro Services";
export const PHONE_NUMBER = "303-555-0123";
export const CITY = "Denver";
export const STATE = "CO";
export const REGION = "Denver Metro Area";
export const ADDRESS = "123 Speer Blvd, Suite 100";
export const ZIP_CODE = "80204";
export const EMAIL_ADDRESS = "service@denvermetroservices.com";

// --- KEYWORD BANK ---
const KEYWORDS = {
  electrical: [
    "electrician denver", "emergency electrician denver", "panel upgrade denver",
    "ev charger installation denver", "electrical repair denver",
    "circuit breaker repair", "commercial electrician denver", "licensed electrician denver"
  ],
  ev_charger: [
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
    location: 'Denver, CO',
    text: 'Absolutely the best service I have received. The technician arrived on time and fixed the issue in under an hour.',
    rating: 5,
    date: '2023-10-15',
    project: 'Heating Repair',
    image: 'https://i.pravatar.cc/150?u=sarah',
    imageAlt: 'Sarah Johnson testimonial photo'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'Aurora, CO',
    text: 'Very professional team. They explained everything clearly and the pricing was transparent. Highly recommended.',
    rating: 5,
    date: '2023-11-02',
    project: 'New Installation',
    image: 'https://i.pravatar.cc/150?u=michael',
    imageAlt: 'Michael Chen testimonial photo'
  },
  {
    id: '3',
    name: 'Jessica Williams',
    location: 'Lakewood, CO',
    text: 'Saved us during a holiday weekend emergency. I cannot thank the team enough for their quick response.',
    rating: 5,
    date: '2023-12-24',
    project: 'Emergency Service',
    image: 'https://i.pravatar.cc/150?u=jessica',
    imageAlt: 'Jessica Williams testimonial photo'
  }
];

// --- CONTENT GENERATOR (SEO OPTIMIZED ~2000 words) ---
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
      For homeowners in <strong>${cityState}</strong>, maintaining a safe and functional property is a year-round commitment.
      Whether you own a historic Victorian in <strong>Capitol Hill</strong> or a modern build in <strong>Stapleton</strong>, your home requires specialized care to withstand Colorado's unique climate.
      We are the premier provider of <strong>${serviceName}</strong>, offering a level of expertise and dedication that separates us from the competition.
    </p>
    <p>
      Our team excels in <strong>${kw[0]}</strong> and <strong>${kw[1]}</strong> solutions. We understand that in the <strong>${REGION}</strong>, ignoring a small issue can lead to catastrophic damage—especially with our freeze-thaw cycles and expansive clay soils.
      Trust us to be your partner in home maintenance, delivering the <strong>${kw[7] || 'licensed services'}</strong> you deserve.
    </p>
  `;

  const deepDive = `
    <p>
      <strong>${serviceName}</strong> is not just about a quick fix; it's about ensuring the longevity and efficiency of your home's critical systems.
      Our approach involves a comprehensive assessment of your current setup, identifying not just the symptoms but the root cause of any failure.
    </p>
    <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Advanced Diagnostics</h3>
    <p>
      We utilize state-of-the-art diagnostic tools—from thermal imaging cameras to endoscopic scopes—to see what others miss.
      This is particularly vital for <strong>${kw[2]}</strong>, where hidden defects can cause thousands of dollars in damage if left undetected.
      Our technicians are trained to spot the early warning signs of <strong>${kw[6] || 'system failure'}</strong>, saving you money and stress in the long run.
    </p>
    <h3 class="text-2xl font-bold text-gray-800 mt-8 mb-4">Customized Solutions</h3>
    <p>
      Every home in <strong>${CITY}</strong> is different. We don't believe in cookie-cutter solutions.
      Whether you need a simple repair or a full system replacement involving <strong>${kw[5] || 'complex installations'}</strong>, we tailor our plan to your specific needs and budget.
    </p>
  `;

  const localChallenges = `
    <p>Operating in the <strong>Denver Metro Area</strong> presents unique challenges that national chains often overlook. Our technicians are locals who understand:</p>
    <ul class="list-disc pl-6 space-y-4 mt-6">
      <li>
        <strong>Altitude Complications:</strong> At 5,280 feet, gas appliances and HVAC systems require specific calibration for proper combustion and efficiency.
        Improper setup can lead to dangerous carbon monoxide buildup or wasted energy.
      </li>
      <li>
        <strong>The Freeze-Thaw Cycle:</strong> Colorado winters are notorious for rapid temperature drops. This puts immense stress on pipes, roofing materials, and concrete.
        We specialize in <strong>${kw[4] || 'winterization'}</strong> techniques that protect your home from bursting pipes and ice dams.
      </li>
      <li>
        <strong>Historic Home Wiring/Plumbing:</strong> Many of Denver's beautiful old homes still have knob-and-tube wiring or galvanized pipes.
        We are experts in bringing these vintage properties up to modern code safely, often handling delicate <strong>${kw[3]}</strong> projects.
      </li>
    </ul>
  `;

  const process = `
    <p>Transparency is the cornerstone of our business. When you hire us for <strong>${serviceName}</strong>, our process is clear:</p>
    <div class="space-y-6 mt-6">
      <div class="flex items-start gap-4">
        <div class="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">1</div>
        <div>
           <strong class="text-gray-900 block mb-1">Schedule & Dispatch</strong>
           <p>Call or book online. You'll receive a confirmation and a tracking link when your technician is en route.</p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">2</div>
        <div>
           <strong class="text-gray-900 block mb-1">Thorough Evaluation</strong>
           <p>We inspect the issue, explain the problem in plain English, and provide multiple options for repair or replacement.</p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">3</div>
        <div>
           <strong class="text-gray-900 block mb-1">Upfront Pricing</strong>
           <p>The price we quote is the price you pay. No bait-and-switch tactics. We value your trust.</p>
        </div>
      </div>
      <div class="flex items-start gap-4">
        <div class="bg-orange-100 text-orange-600 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">4</div>
        <div>
           <strong class="text-gray-900 block mb-1">Expert Execution</strong>
           <p>Our work is backed by our obsession with quality. We use premium materials and follow all manufacturer best practices.</p>
        </div>
      </div>
    </div>
  `;

  const diyRisks = `
    <p>
      In an era of endless online tutorials, it's tempting to tackle <strong>${serviceName}</strong> yourself.
      However, the risks often outweigh the potential savings.
    </p>
    <p>
      <strong>Safety First:</strong> Dealing with electrical currents, gas lines, or pressurized sewage is dangerous.
      Each year, thousands of homeowners visit the ER due to DIY accidents.
      Don't become a statistic while trying to fix your <strong>${kw[0]}</strong>.
    </p>
    <p>
      <strong>Permits & Resale Value:</strong> Unpermitted work is a red flag for future buyers and can stall the sale of your home.
      We handle all necessary permitting with the <strong>City and County of Denver</strong> to ensure your updates add real, transferable value to your property.
    </p>
  `;

  const investment = `
    <p>
      We understand that investing in <strong>${serviceName}</strong> is a significant decision.
      Our pricing reflects the quality of licensed labor, insurance coverage, and warranty protection we provide.
    </p>
    <p>
      While you might find a "handyman" willing to do it cheaper, the cost of fixing poor workmanship often exceeds the original price.
      We offer competitive rates for <strong>${kw[7] || 'top-rated service'}</strong> and flexible financing plans to help you manage your budget without compromising on safety or quality.
    </p>
  `;

  const neighborhoods = `
    <p>We are truly a local company. Our trucks are a common sight in neighborhoods across the Metro area:</p>
    <ul class="grid md:grid-cols-2 gap-4 mt-6">
      <li class="border-l-4 border-orange-500 pl-4 bg-gray-50 p-2 rounded"><strong>LoDo & RiNo:</strong> Serving urban lofts and businesses.</li>
      <li class="border-l-4 border-orange-500 pl-4 bg-gray-50 p-2 rounded"><strong>Cherry Creek:</strong> Premium service for luxury properties.</li>
      <li class="border-l-4 border-orange-500 pl-4 bg-gray-50 p-2 rounded"><strong>Highlands Ranch:</strong> Modern system specialists.</li>
      <li class="border-l-4 border-orange-500 pl-4 bg-gray-50 p-2 rounded"><strong>Lakewood & Golden:</strong> Foothills property experts.</li>
      <li class="border-l-4 border-orange-500 pl-4 bg-gray-50 p-2 rounded"><strong>Aurora:</strong> Comprehensive residential coverage.</li>
    </ul>
    <p class="mt-4">No matter where you are in the <strong>${REGION}</strong>, reliable help is just a phone call away.</p>
  `;

  const conclusion = `
    <p>
      Your home is your sanctuary. Ensure it remains comfortable, safe, and efficient with professional <strong>${serviceName}</strong>.
      With our ironclad satisfaction guarantee and hundreds of 5-star reviews from neighbors in <strong>${CITY}</strong>, you can choose us with confidence.
    </p>
    <p class="text-xl font-bold text-gray-900 mt-6">
      Don't wait for a small problem to become a disaster. Contact us today for the best <strong>${serviceName}</strong> in Denver.
    </p>
  `;

  return `
    <div class="generated-content space-y-12">
      ${buildSection(`Premier ${serviceName} in ${CITY}, ${STATE}`, intro)}
      ${buildSection(`The Science of ${serviceName}: Going Deeper`, deepDive)}
      ${buildSection(`Why ${CITY} Homes Are Different`, localChallenges)}
      ${buildSection(`Our 4-Step Professional Process`, process)}
      ${buildSection(`The Hidden Dangers of DIY ${serviceName}`, diyRisks)}
      ${buildSection(`Investing in Your Home's Value`, investment)}
      ${buildSection(`Proudly Serving Your Neighborhood`, neighborhoods)}
      ${buildSection(`Ready to Get Started?`, conclusion)}
    </div>
  `;
};

// Specialized EV Charger content generator
const GENERATE_EV_CONTENT = (serviceName: string, category: keyof typeof KEYWORDS = 'ev_charger') => {
  const kw = KEYWORDS[category] || KEYWORDS.ev_charger;
  const cityState = `${CITY}, ${STATE}`;

  const intro = `
    <p>
      As electric vehicles become the standard on Denver's roads, having a reliable home or commercial charging solution is a necessity.
      ${COMPANY_NAME} provides professional <strong>${serviceName}</strong> in <strong>${cityState}</strong>, serving homeowners and businesses
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
    <p>EV charger wiring involves serious electrical risks and legal requirements that make DIY dangerous and costly.</p>
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
      Denver's transition to electric vehicles is accelerating. ${COMPANY_NAME} is the trusted name for <strong>${serviceName}</strong> across Colorado,
      with fully licensed electricians who handle permitting, inspections, and Xcel Energy rebate applications on your behalf.
    </p>
    <p>Don't settle for a general handyman who "thinks" they can install an EV charger. Work with specialists who do this every day.</p>
    <p class="text-xl font-bold text-gray-900 mt-6">
      Call <strong>${PHONE_NUMBER}</strong> today for a free estimate — same-week appointments available across Denver.
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

// --- GOOGLE BUSINESS ---
export const GOOGLE_BUSINESS_URL = "https://search.google.com/local/writereview?placeid=ChIJzxcfI6qAa4cR4bB9TCnVcSs";
export const GOOGLE_RATING = 4.9;
export const GOOGLE_REVIEW_COUNT = 450;
export const GOOGLE_REVIEWS = [
  { id: 'g1', author: 'Robert Fox', avatar: 'https://i.pravatar.cc/150?u=robert', rating: 5, text: 'Technician was incredibly professional and fixed our issue within an hour. The pricing was exactly as quoted. Highly recommend for residential electrical services in Denver!', date: '2 weeks ago' },
  { id: 'g2', author: 'Kristin Watson', avatar: 'https://i.pravatar.cc/150?u=kristin', rating: 5, text: 'I have used many service companies in Denver but these guys are the best. Fixed my EV charger wiring fast. Clean, courteous, and very knowledgeable.', date: '1 month ago' },
  { id: 'g3', author: 'Cody Fisher', avatar: 'https://i.pravatar.cc/150?u=cody', rating: 4, text: 'Great experience with our AC repair. Scheduling was easy and they showed up on time. Good communication throughout the process.', date: '2 months ago' },
  { id: 'g4', author: 'Esther Howard', avatar: 'https://i.pravatar.cc/150?u=esther', rating: 5, text: 'Saved us during a holiday emergency! I cannot thank the team enough for coming out so late to fix our furnace during the snowstorm.', date: '3 months ago' }
];

// --- CATEGORIES ---
export const CATEGORIES: Category[] = [
  {
    id: 'electrical-services',
    title: 'Electrical Services',
    slug: 'electrical-services',
    shortDescription: 'Expert electricians providing EV charger installation, panel upgrades, and emergency repairs in Denver, Aurora, & Lakewood.',
    description: 'Premier electrical services in Denver. From EV charger installations (Tesla Wall Connector & Level 2) to 200A panel upgrades and 24/7 emergency repairs, our licensed electricians ensure safety and compliance across the Metro area.',
    heroImage: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
    heroImageAlt: 'Licensed electrician performing an EV charger installation in a Denver home garage',
    icon: Zap,
    benefits: [
      { title: 'Tesla & EV Certified', description: 'Factory-spec Wall Connector installs.' },
      { title: 'Permit Included', description: 'We handle all Denver city permitting.' },
      { title: 'Xcel Rebates Filed', description: 'Up to $500 back from Xcel Energy.' }
    ],
    faqs: [
      { question: 'How much does EV charger installation cost in Denver?', answer: 'Most residential Level 2 installations range from $750 to $2,500 depending on panel location, conduit length, and whether a panel upgrade is needed. We provide free written estimates.' },
      { question: 'Do you offer 24/7 emergency electrician services?', answer: 'Yes, available 24/7 for urgent electrical issues anywhere in the Denver Metro area.' },
      { question: 'Do I need a permit for an EV charger?', answer: 'Yes. Denver City & County requires an electrical permit for all 240V EV charger circuits. We handle all permitting and city inspections as part of our service.' }
    ],
    subServices: [
      {
        id: 'ev-charger-installation',
        title: 'EV Charger Installation',
        slug: 'ev-charger-installation',
        description: 'Professional Tesla Wall Connector and Level 2 EV charger installation in Denver. Permit-included, Xcel Energy rebates filed. All makes: Tesla, Rivian, Ford, Chevy, Hyundai.',
        content: GENERATE_EV_CONTENT('EV Charger Installation', 'ev_charger'),
        image: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
        imageAlt: 'Tesla wall connector installed in a Denver residential garage'
      },
      {
        id: 'electrical-panel-upgrade',
        title: 'Electrical Panel Upgrade',
        slug: 'electrical-panel-upgrade',
        description: '200A service upgrades and panel replacements for Denver homes — often needed before EV charger installation. Replace dangerous Federal Pacific panels.',
        content: GENERATE_CONTENT('Electrical Panel Upgrade', 'electrical'),
        image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
        imageAlt: 'New 200 amp electrical panel with labeled breakers'
      },
      {
        id: 'emergency-electrician',
        title: 'Emergency Electrician',
        slug: 'emergency-electrician',
        description: '24/7 Emergency electrical repairs in Denver. Restoring power safely and quickly for homes and businesses.',
        content: GENERATE_CONTENT('Emergency Electrician Services', 'electrical'),
        image: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
        imageAlt: 'Electrician working at night on a fuse box'
      },
      {
        id: 'commercial-ev-chargers',
        title: 'Commercial EV Chargers',
        slug: 'commercial-ev-chargers',
        description: 'Scalable EV charging infrastructure for Denver businesses, multi-family buildings, offices, and retail parking. Load-managed and network-ready.',
        content: GENERATE_EV_CONTENT('Commercial EV Charger Installation', 'ev_commercial'),
        image: 'https://i.ibb.co/B5GyyySv/Scalable-commercial-EV-charging-infrastructure-in-Lo-Do-for-multi-unit-buildings.png',
        imageAlt: 'Row of commercial EV charging stations in a Denver parking lot'
      },
      {
        id: 'battery-storage-systems',
        title: 'Battery Storage Systems',
        slug: 'battery-storage-systems',
        description: 'Home battery backup solutions (Tesla Powerwall, Enphase IQ) paired with your EV charger for energy independence and outage protection.',
        content: GENERATE_CONTENT('Battery Storage Systems', 'electrical'),
        image: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
        imageAlt: 'Tesla Powerwall home battery backup system'
      }
    ]
  },
  {
    id: 'plumbing-services',
    title: 'Plumbing Services',
    slug: 'plumbing-services',
    shortDescription: 'Top-rated plumbers in Denver. Drain cleaning, water heaters, and frozen pipe repair.',
    description: 'Trusted Denver plumbers for over 20 years. We handle drain cleaning, tankless water heaters, leak detection, and frozen pipe emergencies.',
    heroImage: '/images/plumbing-hero.png',
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
        image: '/images/plumbing-action.png',
        imageAlt: 'Professional drain cleaning equipment'
      },
      {
        id: 'water-heater-repair-install',
        title: 'Water Heater Repair/Install',
        slug: 'water-heater-repair-install',
        description: 'Tankless and standard water heater installation. High efficiency models.',
        content: GENERATE_CONTENT('Water Heater Installation', 'plumbing'),
        image: '/images/plumbing-hero.png',
        imageAlt: 'Technician installing tankless water heater'
      },
      {
        id: 'leak-detection-repair',
        title: 'Leak Detection & Repair',
        slug: 'leak-detection-repair',
        description: 'Accurate leak detection for slab leaks and pipe bursts.',
        content: GENERATE_CONTENT('Leak Detection Services', 'plumbing'),
        image: '/images/plumbing-action.png',
        imageAlt: 'Infrared leak detection camera'
      },
      {
        id: 'frozen-pipe-repair',
        title: 'Frozen Pipe Repair',
        slug: 'frozen-pipe-repair',
        description: 'Emergency thawing and repair for frozen pipes in Denver winter.',
        content: GENERATE_CONTENT('Frozen Pipe Repair', 'plumbing'),
        image: '/images/plumbing-hero.png',
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
    heroImage: '/images/hvac-hero.png',
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
        image: '/images/hvac-action.png',
        imageAlt: 'Technician checking refrigerant'
      },
      {
        id: 'furnace-heating-installation',
        title: 'Furnace Heating Installation',
        slug: 'furnace-heating-installation',
        description: 'Energy-saving furnace installation and replacement.',
        content: GENERATE_CONTENT('Furnace Heating Installation', 'hvac'),
        image: '/images/hvac-hero.png',
        imageAlt: 'New high-efficiency furnace'
      },
      {
        id: 'details-indoor-air-quality',
        title: 'Indoor Air Quality',
        slug: 'indoor-air-quality',
        description: 'Whole-home humidifiers and duct cleaning for Denver climate.',
        content: GENERATE_CONTENT('Indoor Air Quality Services', 'hvac'),
        image: '/images/hvac-action.png',
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
    heroImage: '/images/solar-hero.png',
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
        image: '/images/solar-hero.png',
        imageAlt: 'Solar panel installation'
      },
      {
        id: 'solar-repair-maintenance',
        title: 'Solar Repair & Maintenance',
        slug: 'solar-repair-maintenance',
        description: 'Maintenance and repair for existing solar arrays.',
        content: GENERATE_CONTENT('Solar Repair and Maintenance', 'solar'),
        image: '/images/solar-action.png',
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
    heroImage: '/images/roofing-hero.png',
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
        image: '/images/roofing-action.png',
        imageAlt: 'Roof repair patch'
      },
      {
        id: 'roof-replacement',
        title: 'Roof Replacement',
        slug: 'roof-replacement',
        description: 'Complete roof replacement with impact-resistant shingles.',
        content: GENERATE_CONTENT('Roof Replacement', 'roofing'),
        image: '/images/roofing-hero.png',
        imageAlt: 'New roof installation'
      },
      {
        id: 'hail-damage-repair',
        title: 'Hail Damage Repair',
        slug: 'hail-damage-repair',
        description: 'Specialized repair for Colorado hail storms.',
        content: GENERATE_CONTENT('Hail Damage Repair', 'roofing'),
        image: '/images/roofing-action.png',
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
    heroImage: '/images/general-hero.png',
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
        image: '/images/general-hero.png',
        imageAlt: 'White kitchen renovation'
      },
      {
        id: 'bathroom-remodeling',
        title: 'Bathroom Remodeling',
        slug: 'bathroom-remodeling',
        description: 'Luxury bathroom updates. Showers, tubs.',
        content: GENERATE_CONTENT('Bathroom Remodeling', 'general'),
        image: '/images/general-action.png',
        imageAlt: 'Luxury bathroom remodel'
      },
      {
        id: 'basement-finishing',
        title: 'Basement Finishing',
        slug: 'basement-finishing',
        description: 'Turn your basement into a gym or office.',
        content: GENERATE_CONTENT('Basement Finishing', 'general'),
        image: '/images/general-hero.png',
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
    author: { name: 'David Smith', role: 'Master Electrician', photo: 'https://i.pravatar.cc/150?u=david' },
    image: '/images/electrical-action.png',
    imageAlt: 'Old electrical panel'
  },
  {
    id: '2',
    title: 'Cost to Install a Tesla Wall Connector in Denver (2025 Guide)',
    slug: 'cost-to-install-tesla-charger-denver',
    excerpt: 'Detailed breakdown of permit fees, hardware costs, and labor for installing a Tesla Wall Connector in Denver — including Xcel Energy rebates.',
    content: GENERATE_EV_CONTENT('Tesla Wall Connector Installation', 'ev_charger'),
    category: 'Electrical Services',
    publishDate: '2025-05-15',
    author: { name: 'Jake Martinez', role: 'EV Installation Specialist', photo: 'https://i.pravatar.cc/150?u=jake_ev' },
    image: 'https://i.ibb.co/jZfBH7YK/Hero-Section.jpg',
    imageAlt: 'Cost to install Tesla charger Denver — hardware permit labor breakdown 2025'
  },
  {
    id: '3',
    title: 'The Truth About Tankless Water Heaters in Colorado',
    slug: 'truth-about-tankless-water-heaters',
    excerpt: 'Are they worth the investment for Denver winters? We break down the pros and cons of going tankless in a cold climate.',
    content: GENERATE_CONTENT('Tankless Water Heaters', 'plumbing'),
    category: 'Plumbing Services',
    publishDate: '2023-10-15',
    author: { name: 'John Doe', role: 'Plumbing Lead', photo: 'https://i.pravatar.cc/150?u=john' },
    image: '/images/plumbing-action.png',
    imageAlt: 'Tankless water heater'
  },
  {
    id: '4',
    title: 'Preparing Your AC for Denver Summers',
    slug: 'preparing-ac-for-summer',
    excerpt: 'Simple maintenance tips to ensure your air conditioner runs efficiently when the 90-degree days hit in July.',
    content: GENERATE_CONTENT('AC Maintenance', 'hvac'),
    category: 'HVAC Services',
    publishDate: '2023-11-10',
    author: { name: 'Sarah Jones', role: 'HVAC Specialist', photo: 'https://i.pravatar.cc/150?u=sarahj' },
    image: '/images/hvac-action.png',
    imageAlt: 'AC unit cleaning'
  },
  {
    id: '5',
    title: 'How to Spot Hail Damage on Your Roof',
    slug: 'how-to-spot-hail-damage',
    excerpt: 'After the storm clears, check for these subtle signs of damage. Hidden bruises on shingles can lead to leaks if ignored.',
    content: GENERATE_CONTENT('Identifying Hail Damage', 'roofing'),
    category: 'Roofing Services',
    publishDate: '2024-01-15',
    author: { name: 'Mike Roofer', role: 'Roofing Inspector', photo: 'https://i.pravatar.cc/150?u=mike' },
    image: '/images/roofing-hero.png',
    imageAlt: 'Inspect roof shingles'
  },
  {
    id: '6',
    title: 'The Ultimate Kitchen Remodel Checklist',
    slug: 'kitchen-remodel-checklist',
    excerpt: 'Planning a renovation? Don\'t start without this checklist. We guide you through budgeting, design, and permitting in Denver.',
    content: GENERATE_CONTENT('Kitchen Remodel Guide', 'general'),
    category: 'General Contractor',
    publishDate: '2024-02-01',
    author: { name: 'Lisa Design', role: 'Interior Planner', photo: 'https://i.pravatar.cc/150?u=lisa' },
    image: '/images/general-hero.png',
    imageAlt: 'Modern kitchen design'
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
  { id: 1, name: 'Partner One', logo: 'https://placehold.co/200x80/orange/white?text=Partner+1' },
  { id: 2, name: 'Partner Two', logo: 'https://placehold.co/200x80/orange/white?text=Partner+2' },
  { id: 3, name: 'Partner Three', logo: 'https://placehold.co/200x80/orange/white?text=Partner+3' },
  { id: 4, name: 'Xcel Energy', logo: 'https://placehold.co/200x80/orange/white?text=Xcel+Energy' }
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

export const HISTORY_TEXT = `Founded in 2005, ${COMPANY_NAME} began with a single truck and a commitment to serving the Denver community. We understand the unique needs of Colorado homes—from dealing with hail damage to optimizing HVAC for high altitude. Today we\'re proud to be Denver\'s go-to multi-service team, including Colorado\'s most trusted EV charger installation service.`;

export const VALUES = [
  { title: 'Integrity', description: 'We do what we say we will do.' },
  { title: 'Excellence', description: 'Quality is our signature.' },
  { title: 'Community', description: 'We support our local neighbors.' },
  { title: 'Innovation', description: 'Staying ahead with latest tech.' }
];

export const TEAM_MEMBERS = [
  { id: 1, name: 'John Smith', role: 'Founder & CEO', image: 'https://i.pravatar.cc/300?u=ceo' },
  { id: 2, name: 'Jane Doe', role: 'Operations Manager', image: 'https://i.pravatar.cc/300?u=ops' },
  { id: 3, name: 'Mike Johnson', role: 'Lead Technician', image: 'https://i.pravatar.cc/300?u=tech' },
  { id: 4, name: 'Sarah Wilson', role: 'Service Coordinator', image: 'https://i.pravatar.cc/300?u=coord' }
];
