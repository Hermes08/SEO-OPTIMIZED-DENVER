
import { Category, Testimonial, BlogPost, ServiceArea } from './types';
import { Wrench, Zap, Droplet, Thermometer, Sun, Shield, Truck, Clock, Users, Award, Calendar } from 'lucide-react';

// --- CONFIGURATION (GENERIC TEMPLATE) ---
export const COMPANY_NAME = "[Brand Name]";
export const PHONE_NUMBER = "555-0123-4567";
export const CITY = "[City]";
export const STATE = "[State]";
export const REGION = "[Region]";

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
    text: 'Technician was incredibly professional and fixed our issue within an hour. The pricing was exactly as quoted. Highly recommend!',
    date: '2 weeks ago'
  },
  {
    id: 'g2',
    author: 'Kristin Watson',
    avatar: 'https://picsum.photos/seed/g2/60/60',
    rating: 5,
    text: 'I have used many service companies in [City] but these guys are the best. Clean, courteous, and very knowledgeable.',
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
    text: 'Saved us during a holiday emergency! I cannot thank the team enough for coming out so late.',
    date: '3 months ago'
  }
];

// --- CONTENT GENERATOR FOR SEO DENSITY (2000+ Words Simulation) ---
const LOREM_PARAGRAPH = `
  <p class="mb-6 text-gray-300 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
  </p>
  <p class="mb-6 text-gray-300 leading-relaxed">
    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
    voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia 
    non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
    exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit 
    qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
  </p>
`;

const LOREM_SECTION = (topic: string) => `
  <h2 class="text-3xl font-bold text-white mt-12 mb-6">Comprehensive ${topic} Solutions</h2>
  ${LOREM_PARAGRAPH}
  ${LOREM_PARAGRAPH}
  
  <h3 class="text-2xl font-bold text-white mt-8 mb-4">Why Professional Service Matters</h3>
  <p class="mb-6 text-gray-300 leading-relaxed">
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores 
    et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id 
    est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi 
    optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
  </p>
  
  <ul class="list-disc pl-6 mb-8 space-y-3 text-gray-300">
    <li><strong>Expert Diagnosis:</strong> Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</li>
    <li><strong>Quality Materials:</strong> Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</li>
    <li><strong>Safety Compliance:</strong> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
    <li><strong>Long-term Reliability:</strong> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
  </ul>

  ${LOREM_PARAGRAPH}

  <h3 class="text-2xl font-bold text-white mt-8 mb-4">Our Commitment to [City] Residents</h3>
  ${LOREM_PARAGRAPH}
  
  <h4 class="text-xl font-bold text-white mt-6 mb-3">Understanding the Process</h4>
  <p class="mb-6 text-gray-300 leading-relaxed">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
`;

export const GENERATE_CONTENT = (title: string) => `
  <div class="generated-content">
    <p class="text-xl text-gray-300 mb-8 leading-relaxed font-light">
      Discover the industry standard for <strong>${title}</strong> in <strong>[City]</strong>. We provide an extensive range of services 
      designed to meet the unique needs of our local community. From initial consultation to final inspection, our team allows you to 
      rest easy knowing your property is in capable hands.
    </p>
    ${LOREM_SECTION(title)}
    ${LOREM_SECTION(`${title} Maintenance`)}
    ${LOREM_SECTION(`${title} Installation`)}
    <h2 class="text-3xl font-bold text-white mt-12 mb-6">Frequently Asked Questions About ${title}</h2>
    ${LOREM_PARAGRAPH}
    ${LOREM_PARAGRAPH}
  </div>
`;

// Helper to generate generic FAQs for sub-services
const generateServiceFAQs = (serviceName: string) => [
  { question: `How much does ${serviceName} cost?`, answer: `The cost of ${serviceName} varies based on the scope of the project. We offer transparent, upfront pricing after a brief diagnostic.` },
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
    shortDescription: 'Complete electrical solutions for residential and commercial properties.',
    description: 'We provide comprehensive electrical services, ensuring safety and efficiency for your home or business. From panel upgrades to lighting installations, our licensed electricians handle it all.',
    heroImage: 'https://picsum.photos/seed/electrical-hero/1920/1080',
    icon: Zap,
    benefits: [
      { title: 'Licensed Electricians', description: 'Fully certified and insured professionals.' },
      { title: 'Safety First', description: 'Strict adherence to all local and national electrical codes.' },
      { title: 'Modern Solutions', description: 'Latest technology in smart home and energy efficiency.' }
    ],
    faqs: [
      { question: 'Do you offer 24/7 emergency electrical service?', answer: 'Yes, we have technicians on standby around the clock for urgent electrical issues.' },
      { question: 'How often should I have my electrical panel inspected?', answer: 'We recommend a professional inspection every 3-5 years, or if you notice flickering lights or tripped breakers.' }
    ],
    subServices: [
      { 
        id: 'ev-chargers', 
        title: 'EV Chargers', 
        slug: 'ev-charger-installation', 
        description: 'Level 2 EV charger installation for Tesla and all major electric vehicle brands.',
        content: GENERATE_CONTENT('EV Charger Installation'),
        image: 'https://picsum.photos/seed/ev-charger/800/600',
        faqs: [
            { question: 'Do I need a panel upgrade for an EV charger?', answer: 'It depends on your current available amperage. We perform a load calculation to determine if your existing panel can handle the Level 2 charger.' },
            { question: 'How long does it take to charge a car with a Level 2 charger?', answer: 'Level 2 chargers typically charge an EV in 4-8 hours, compared to 24+ hours with a standard wall outlet.' },
            { question: 'Can you install Tesla Wall Connectors?', answer: 'Yes, we are experienced in installing Tesla Wall Connectors as well as universal J1772 chargers.' }
        ]
      },
      { 
        id: 'battery-storage', 
        title: 'Battery Storage Systems', 
        slug: 'battery-storage-systems', 
        description: 'Home battery backup solutions to keep your power on during outages.',
        content: GENERATE_CONTENT('Battery Storage Systems'),
        image: 'https://picsum.photos/seed/battery-storage/800/600',
        faqs: generateServiceFAQs('Battery Storage Systems')
      },
      { 
        id: 'commercial-ev', 
        title: 'Commercial EV Installation', 
        slug: 'commercial-ev-chargers', 
        description: 'Scalable charging stations for businesses, fleets, and parking complexes.',
        content: GENERATE_CONTENT('Commercial EV Charging'),
        image: 'https://picsum.photos/seed/commercial-ev/800/600',
        faqs: generateServiceFAQs('Commercial EV Installation')
      },
      { 
        id: 'panels', 
        title: 'Electrical Panels', 
        slug: 'electrical-panel-upgrade', 
        description: 'Service panel upgrades and replacements to handle modern power demands.',
        content: GENERATE_CONTENT('Electrical Panel Upgrades'),
        image: 'https://picsum.photos/seed/electrical-panel/800/600',
        faqs: generateServiceFAQs('Electrical Panel Upgrades')
      },
      { 
        id: 'generators', 
        title: 'Generators', 
        slug: 'whole-home-generators', 
        description: 'Whole-home standby generator installation and maintenance.',
        content: GENERATE_CONTENT('Whole Home Generators'),
        image: 'https://picsum.photos/seed/generator/800/600',
        faqs: generateServiceFAQs('Generators')
      },
      { 
        id: 'pool-elec', 
        title: 'Pool Electrical', 
        slug: 'pool-hot-tub-wiring', 
        description: 'Safe wiring for pools, hot tubs, and spa systems.',
        content: GENERATE_CONTENT('Pool and Hot Tub Wiring'),
        image: 'https://picsum.photos/seed/pool-wiring/800/600',
        faqs: generateServiceFAQs('Pool Electrical')
      }
    ]
  },
  {
    id: 'plumbing',
    title: 'Plumbing Solutions',
    slug: 'plumbing-services',
    shortDescription: 'Expert plumbing repair, installation, and maintenance.',
    description: 'From leaky faucets to main line replacements, our expert plumbers deliver fast, reliable service to keep your water flowing smoothly.',
    heroImage: 'https://picsum.photos/seed/plumbing-hero/1920/1080',
    icon: Droplet,
    benefits: [
      { title: 'Leak Detection', description: 'Advanced technology to find hidden leaks quickly.' },
      { title: 'Upfront Pricing', description: 'Know the cost before we start any work.' },
      { title: 'Clean & Tidy', description: 'We respect your home and clean up after every job.' }
    ],
    faqs: [
      { question: 'Why is my water pressure low?', answer: 'Low pressure can be caused by sediment buildup, leaks, or municipal supply issues. We can diagnose the root cause.' },
      { question: 'How long does a water heater last?', answer: 'Traditional tank heaters last 8-12 years, while tankless models can last 20+ years with proper maintenance.' }
    ],
    subServices: [
      { 
        id: 'drain-cleaning', 
        title: 'Drain Cleaning', 
        slug: 'drain-cleaning-service', 
        description: 'Professional clog removal and hydro-jetting services.',
        content: GENERATE_CONTENT('Drain Cleaning Services'),
        image: 'https://picsum.photos/seed/drain-cleaning/800/600',
        faqs: generateServiceFAQs('Drain Cleaning')
      },
      { 
        id: 'water-heaters', 
        title: 'Water Heaters', 
        slug: 'water-heater-repair-install', 
        description: 'Repair and installation of tank and tankless water heating systems.',
        content: GENERATE_CONTENT('Water Heater Installation'),
        image: 'https://picsum.photos/seed/water-heater/800/600',
        faqs: generateServiceFAQs('Water Heaters')
      },
      { 
        id: 'leak-detection', 
        title: 'Leak Detection', 
        slug: 'leak-detection-repair', 
        description: 'Non-invasive leak detection for slab leaks and hidden pipes.',
        content: GENERATE_CONTENT('Leak Detection Services'),
        image: 'https://picsum.photos/seed/leak-detection/800/600',
        faqs: generateServiceFAQs('Leak Detection')
      },
      { 
        id: 'piping', 
        title: 'Repiping Services', 
        slug: 'whole-home-repiping', 
        description: 'Replacing old galvanized or polybutylene pipes with modern PEX or copper.',
        content: GENERATE_CONTENT('Whole Home Repiping'),
        image: 'https://picsum.photos/seed/repiping/800/600',
        faqs: generateServiceFAQs('Repiping Services')
      }
    ]
  },
  {
    id: 'hvac',
    title: 'Heating & Air',
    slug: 'hvac-services',
    shortDescription: 'Keeping your home comfortable all year round.',
    description: 'Our HVAC specialists ensure your indoor climate is perfect. We service all makes and models of furnaces, air conditioners, and heat pumps.',
    heroImage: 'https://picsum.photos/seed/hvac-hero/1920/1080',
    icon: Thermometer,
    benefits: [
      { title: 'Energy Efficiency', description: 'Systems designed to lower your utility bills.' },
      { title: 'Certified Techs', description: 'NATE-certified technicians for superior service.' },
      { title: 'Seasonal Tune-ups', description: 'Maintenance plans to extend system life.' }
    ],
    faqs: [
      { question: 'How often should I change my air filter?', answer: 'We recommend checking every month and changing at least every 3 months.' },
      { question: 'Is a heat pump right for my home?', answer: 'Heat pumps are highly efficient for both heating and cooling in many climates. We can perform an assessment.' }
    ],
    subServices: [
      { 
        id: 'ac-repair', 
        title: 'AC Repair', 
        slug: 'air-conditioning-repair', 
        description: 'Fast diagnosis and repair for air conditioning systems.',
        content: GENERATE_CONTENT('Air Conditioning Repair'),
        image: 'https://picsum.photos/seed/ac-repair/800/600',
        faqs: generateServiceFAQs('AC Repair')
      },
      { 
        id: 'furnace', 
        title: 'Furnace Installation', 
        slug: 'furnace-heating-installation', 
        description: 'High-efficiency furnace installation for reliable winter warmth.',
        content: GENERATE_CONTENT('Furnace Heating Installation'),
        image: 'https://picsum.photos/seed/furnace/800/600',
        faqs: generateServiceFAQs('Furnace Installation')
      },
      { 
        id: 'air-quality', 
        title: 'Indoor Air Quality', 
        slug: 'indoor-air-quality', 
        description: 'Filtration and purification systems for healthier home air.',
        content: GENERATE_CONTENT('Indoor Air Quality Services'),
        image: 'https://picsum.photos/seed/air-quality/800/600',
        faqs: generateServiceFAQs('Indoor Air Quality')
      },
      { 
        id: 'smart-thermostats', 
        title: 'Smart Thermostats', 
        slug: 'smart-thermostat-installation', 
        description: 'Wi-Fi enabled thermostats for ultimate climate control.',
        content: GENERATE_CONTENT('Smart Thermostat Installation'),
        image: 'https://picsum.photos/seed/thermostat/800/600',
        faqs: generateServiceFAQs('Smart Thermostats')
      }
    ]
  },
  {
    id: 'solar',
    title: 'Solar Services',
    slug: 'solar-energy-services',
    shortDescription: 'Sustainable energy solutions for a brighter future.',
    description: 'Harness the power of the sun with our custom solar solutions. We handle everything from panel installation to system monitoring.',
    heroImage: 'https://picsum.photos/seed/solar-hero/1920/1080',
    icon: Sun,
    benefits: [
      { title: 'Tax Incentives', description: 'We help you navigate federal and local rebates.' },
      { title: 'Energy Independence', description: 'Reduce reliance on the grid and rising rates.' },
      { title: 'Long-term Savings', description: 'Significant reduction in monthly electricity costs.' }
    ],
    faqs: [
      { question: 'Do solar panels work on cloudy days?', answer: 'Yes, they still generate power from diffuse sunlight, though slightly less than on sunny days.' },
      { question: 'How long does installation take?', answer: 'Most residential installations are completed within 1-3 days after permitting.' }
    ],
    subServices: [
      { 
        id: 'solar-install', 
        title: 'Panel Installation', 
        slug: 'solar-panel-installation', 
        description: 'Custom rooftop and ground-mount solar arrays.',
        content: GENERATE_CONTENT('Solar Panel Installation'),
        image: 'https://picsum.photos/seed/solar-install/800/600',
        faqs: generateServiceFAQs('Solar Panel Installation')
      },
      { 
        id: 'solar-repair', 
        title: 'Solar Panel Repair', 
        slug: 'solar-repair-maintenance', 
        description: 'Troubleshooting and repair for existing solar systems.',
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
    location: `${CITY}, ${STATE}`,
    text: 'Absolutely the best service I have received. The technician arrived on time and fixed the issue in under an hour.',
    rating: 5,
    date: '2023-10-15',
    project: 'Heating Repair',
    image: 'https://picsum.photos/seed/t1/100/100'
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: `${CITY}, ${STATE}`,
    text: 'Very professional team. They explained everything clearly and the pricing was transparent. Highly recommended.',
    rating: 5,
    date: '2023-11-02',
    project: 'New Installation',
    image: 'https://picsum.photos/seed/t2/100/100'
  },
  {
    id: '3',
    name: 'Jessica Williams',
    location: `${CITY}, ${STATE}`,
    text: 'Saved us during a holiday weekend emergency. I cannot thank the team enough for their quick response.',
    rating: 5,
    date: '2023-12-24',
    project: 'Emergency Service',
    image: 'https://picsum.photos/seed/t3/100/100'
  }
];

export const SERVICE_AREAS: ServiceArea[] = [
  {
    id: '1',
    city: 'City Central',
    state: STATE,
    zipCodes: ['10001', '10002', '10003', '10004', '10005'],
    description: 'Providing full service coverage to downtown and surrounding metropolitan districts.'
  },
  {
    id: '2',
    city: 'North Hills',
    state: STATE,
    zipCodes: ['10010', '10011', '10012', '10013'],
    description: 'Expert technicians stationed in North Hills for rapid response times.'
  },
  {
    id: '3',
    city: 'Westside',
    state: STATE,
    zipCodes: ['10020', '10021', '10022'],
    description: 'Serving the Westside community with eco-friendly and efficient solutions.'
  },
  {
    id: '4',
    city: 'South Valley',
    state: STATE,
    zipCodes: ['10030', '10031', '10032'],
    description: 'Dedicated residential services for the South Valley area.'
  },
  {
    id: '5',
    city: 'East Lake',
    state: STATE,
    zipCodes: ['10040', '10041', '10042', '10043'],
    description: 'Premier service provider for the East Lake region.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '5 Signs Your Electrical Panel Needs an Upgrade',
    slug: '5-signs-electrical-panel-needs-upgrade',
    excerpt: 'Flickering lights? Tripped breakers? It might be time to replace your old panel before it becomes a hazard.',
    content: GENERATE_CONTENT('Electrical Panel Safety'),
    category: 'Electrical Services',
    publishDate: '2023-10-01',
    author: { name: 'David Smith', role: 'Master Electrician', photo: 'https://picsum.photos/seed/a1/100/100' },
    image: 'https://picsum.photos/seed/b1/800/400'
  },
  {
    id: '2',
    title: 'The Truth About Tankless Water Heaters',
    slug: 'truth-about-tankless-water-heaters',
    excerpt: 'Are they worth the investment? We break down the pros and cons of switching to tankless.',
    content: GENERATE_CONTENT('Tankless Water Heaters'),
    category: 'Plumbing Solutions',
    publishDate: '2023-10-15',
    author: { name: 'John Doe', role: 'Plumbing Lead', photo: 'https://picsum.photos/seed/a2/100/100' },
    image: 'https://picsum.photos/seed/b2/800/400'
  },
  {
    id: '3',
    title: 'Preparing Your AC for Summer',
    slug: 'preparing-ac-for-summer',
    excerpt: 'Simple maintenance tips to ensure your air conditioner runs efficiently when the heat hits.',
    content: GENERATE_CONTENT('AC Maintenance'),
    category: 'Heating & Air',
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

export const HISTORY_TEXT = `Founded in 2005, ${COMPANY_NAME} began with a single truck and a commitment to doing things the right way. Over the past two decades, we've grown into one of the region's most trusted service providers, but our core values haven't changed. We believe in treating every customer's home with the same respect we'd treat our own.`;

export const VALUES = [
  { title: 'Integrity', description: 'We do what we say we will do, even when no one is watching.' },
  { title: 'Excellence', description: 'We never cut corners. Quality is our signature.' },
  { title: 'Community', description: 'We live here, we work here, and we support our local neighbors.' },
  { title: 'Innovation', description: 'We stay ahead of the curve with the latest technology and training.' }
];

export const TEAM_MEMBERS = [
  { id: 1, name: 'John Smith', role: 'Founder & CEO', image: 'https://picsum.photos/seed/team1/300/300' },
  { id: 2, name: 'Jane Doe', role: 'Operations Manager', image: 'https://picsum.photos/seed/team2/300/300' },
  { id: 3, name: 'Mike Johnson', role: 'Lead Technician', image: 'https://picsum.photos/seed/team3/300/300' },
  { id: 4, name: 'Sarah Wilson', role: 'Service Coordinator', image: 'https://picsum.photos/seed/team4/300/300' }
];
