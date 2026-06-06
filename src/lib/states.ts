// All US states (+ DC) for programmatic location landing pages.
// slug = URL segment, code = 2-letter, mainCity = largest city, majorCities = served metros.
export interface StateInfo {
    slug: string;
    code: string;
    name: string;
    mainCity: string;
    majorCities: string[];
    /** Unique, locally-specific intro written by the Producer. Rendered in place of the
     *  generic templated intro when present — this is how state pages get de-thinned. */
    intro?: string;
}

// Unique Producer-written intros, keyed by state code. Add entries to enrich more states.
export const STATE_INTRO: Record<string, string> = {
    CO: "Colorado homes face challenges few other states do: 5,280-foot altitude that changes how furnaces combust and ACs perform, a brutal freeze-thaw cycle that cracks pipes and concrete, and some of the worst hail in the country battering Front Range roofs every summer. Our crews were built here — we know the knob-and-tube wiring hiding in Capitol Hill Victorians, the expansive clay soils that shift foundations in Aurora, and exactly how to size a furnace for a Denver winter. From the foothills of Golden to the plains of Brighton, we bring licensed, code-compliant work to every Colorado home.",
    TX: "Everything's bigger in Texas — including the demands on your home's systems. Triple-digit summers push AC units to their limit from Houston's gulf humidity to the dry heat of El Paso, while sudden cold snaps (remember Winter Storm Uri?) expose underbuilt plumbing and electrical. Our Texas crews handle it all: high-capacity HVAC built for relentless cooling loads, freeze-resilient pipe protection, panel upgrades for sprawling new-builds in Austin and Dallas, and storm-ready roofing across Tornado Alley.",
    CA: "California's range of climates — coastal fog in San Francisco, desert heat in the Inland Empire, wildfire-prone foothills — means no two homes have the same needs. We deliver Title 24-compliant electrical, high-efficiency HVAC, and one of the strongest solar markets in the nation (stacking federal credits with California incentives), plus seismic-aware plumbing and roofing from Los Angeles to Sacramento.",
    FL: "Florida living is hard on a home: relentless humidity, salt air along both coasts, and a hurricane season that tests every roof and panel from Jacksonville to Miami. Our Florida crews specialize in moisture-resilient HVAC and indoor air quality, hurricane-rated roofing and repairs, surge-protected electrical, and the kind of fast emergency response you need when a storm rolls through.",
    NY: "From pre-war walk-ups in New York City to lake-effect snow country in Buffalo, New York homes span a century of building styles and a punishing range of weather. We modernize aging electrical and knob-and-tube wiring, install heating systems that hold up to Northeast winters, and handle plumbing, roofing and remodeling across the Empire State — permits and co-op boards included.",
    AZ: "Arizona's extreme heat is unforgiving on home systems — AC isn't a luxury here, it's survival, and a failed unit in a Phoenix July is an emergency. Our Arizona crews build for it: high-capacity cooling, sun-hardened roofing, electrical sized for heavy AC and EV loads, and rooftop solar that turns 300+ days of sunshine into real savings from Tucson to Scottsdale.",
};


export const STATES: StateInfo[] = [
    { slug: 'alabama', code: 'AL', name: 'Alabama', mainCity: 'Birmingham', majorCities: ['Birmingham', 'Montgomery', 'Huntsville', 'Mobile', 'Tuscaloosa'] },
    { slug: 'alaska', code: 'AK', name: 'Alaska', mainCity: 'Anchorage', majorCities: ['Anchorage', 'Fairbanks', 'Juneau', 'Wasilla', 'Sitka'] },
    { slug: 'arizona', code: 'AZ', name: 'Arizona', mainCity: 'Phoenix', majorCities: ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale', 'Glendale'] },
    { slug: 'arkansas', code: 'AR', name: 'Arkansas', mainCity: 'Little Rock', majorCities: ['Little Rock', 'Fayetteville', 'Fort Smith', 'Springdale', 'Jonesboro'] },
    { slug: 'california', code: 'CA', name: 'California', mainCity: 'Los Angeles', majorCities: ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Sacramento', 'Fresno'] },
    { slug: 'colorado', code: 'CO', name: 'Colorado', mainCity: 'Denver', majorCities: ['Denver', 'Aurora', 'Colorado Springs', 'Lakewood', 'Fort Collins', 'Boulder'] },
    { slug: 'connecticut', code: 'CT', name: 'Connecticut', mainCity: 'Bridgeport', majorCities: ['Bridgeport', 'New Haven', 'Hartford', 'Stamford', 'Waterbury'] },
    { slug: 'delaware', code: 'DE', name: 'Delaware', mainCity: 'Wilmington', majorCities: ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Bear'] },
    { slug: 'district-of-columbia', code: 'DC', name: 'District of Columbia', mainCity: 'Washington', majorCities: ['Washington'] },
    { slug: 'florida', code: 'FL', name: 'Florida', mainCity: 'Jacksonville', majorCities: ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St. Petersburg', 'Fort Lauderdale'] },
    { slug: 'georgia', code: 'GA', name: 'Georgia', mainCity: 'Atlanta', majorCities: ['Atlanta', 'Augusta', 'Savannah', 'Columbus', 'Athens', 'Macon'] },
    { slug: 'hawaii', code: 'HI', name: 'Hawaii', mainCity: 'Honolulu', majorCities: ['Honolulu', 'Hilo', 'Kailua', 'Kapolei', 'Pearl City'] },
    { slug: 'idaho', code: 'ID', name: 'Idaho', mainCity: 'Boise', majorCities: ['Boise', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello'] },
    { slug: 'illinois', code: 'IL', name: 'Illinois', mainCity: 'Chicago', majorCities: ['Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Springfield'] },
    { slug: 'indiana', code: 'IN', name: 'Indiana', mainCity: 'Indianapolis', majorCities: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel'] },
    { slug: 'iowa', code: 'IA', name: 'Iowa', mainCity: 'Des Moines', majorCities: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City'] },
    { slug: 'kansas', code: 'KS', name: 'Kansas', mainCity: 'Wichita', majorCities: ['Wichita', 'Overland Park', 'Kansas City', 'Topeka', 'Olathe'] },
    { slug: 'kentucky', code: 'KY', name: 'Kentucky', mainCity: 'Louisville', majorCities: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington'] },
    { slug: 'louisiana', code: 'LA', name: 'Louisiana', mainCity: 'New Orleans', majorCities: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette', 'Lake Charles'] },
    { slug: 'maine', code: 'ME', name: 'Maine', mainCity: 'Portland', majorCities: ['Portland', 'Lewiston', 'Bangor', 'Auburn', 'Biddeford'] },
    { slug: 'maryland', code: 'MD', name: 'Maryland', mainCity: 'Baltimore', majorCities: ['Baltimore', 'Columbia', 'Germantown', 'Silver Spring', 'Frederick'] },
    { slug: 'massachusetts', code: 'MA', name: 'Massachusetts', mainCity: 'Boston', majorCities: ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell'] },
    { slug: 'michigan', code: 'MI', name: 'Michigan', mainCity: 'Detroit', majorCities: ['Detroit', 'Grand Rapids', 'Warren', 'Sterling Heights', 'Ann Arbor', 'Lansing'] },
    { slug: 'minnesota', code: 'MN', name: 'Minnesota', mainCity: 'Minneapolis', majorCities: ['Minneapolis', 'St. Paul', 'Rochester', 'Duluth', 'Bloomington'] },
    { slug: 'mississippi', code: 'MS', name: 'Mississippi', mainCity: 'Jackson', majorCities: ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi'] },
    { slug: 'missouri', code: 'MO', name: 'Missouri', mainCity: 'Kansas City', majorCities: ['Kansas City', 'St. Louis', 'Springfield', 'Columbia', 'Independence'] },
    { slug: 'montana', code: 'MT', name: 'Montana', mainCity: 'Billings', majorCities: ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Helena'] },
    { slug: 'nebraska', code: 'NE', name: 'Nebraska', mainCity: 'Omaha', majorCities: ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney'] },
    { slug: 'nevada', code: 'NV', name: 'Nevada', mainCity: 'Las Vegas', majorCities: ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Sparks'] },
    { slug: 'new-hampshire', code: 'NH', name: 'New Hampshire', mainCity: 'Manchester', majorCities: ['Manchester', 'Nashua', 'Concord', 'Dover', 'Rochester'] },
    { slug: 'new-jersey', code: 'NJ', name: 'New Jersey', mainCity: 'Newark', majorCities: ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Trenton', 'Edison'] },
    { slug: 'new-mexico', code: 'NM', name: 'New Mexico', mainCity: 'Albuquerque', majorCities: ['Albuquerque', 'Las Cruces', 'Rio Rancho', 'Santa Fe', 'Roswell'] },
    { slug: 'new-york', code: 'NY', name: 'New York', mainCity: 'New York City', majorCities: ['New York City', 'Buffalo', 'Rochester', 'Yonkers', 'Syracuse', 'Albany'] },
    { slug: 'north-carolina', code: 'NC', name: 'North Carolina', mainCity: 'Charlotte', majorCities: ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem'] },
    { slug: 'north-dakota', code: 'ND', name: 'North Dakota', mainCity: 'Fargo', majorCities: ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo'] },
    { slug: 'ohio', code: 'OH', name: 'Ohio', mainCity: 'Columbus', majorCities: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton'] },
    { slug: 'oklahoma', code: 'OK', name: 'Oklahoma', mainCity: 'Oklahoma City', majorCities: ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Edmond'] },
    { slug: 'oregon', code: 'OR', name: 'Oregon', mainCity: 'Portland', majorCities: ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro', 'Bend'] },
    { slug: 'pennsylvania', code: 'PA', name: 'Pennsylvania', mainCity: 'Philadelphia', majorCities: ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading'] },
    { slug: 'rhode-island', code: 'RI', name: 'Rhode Island', mainCity: 'Providence', majorCities: ['Providence', 'Warwick', 'Cranston', 'Pawtucket', 'Newport'] },
    { slug: 'south-carolina', code: 'SC', name: 'South Carolina', mainCity: 'Charleston', majorCities: ['Charleston', 'Columbia', 'Greenville', 'Mount Pleasant', 'Rock Hill'] },
    { slug: 'south-dakota', code: 'SD', name: 'South Dakota', mainCity: 'Sioux Falls', majorCities: ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown'] },
    { slug: 'tennessee', code: 'TN', name: 'Tennessee', mainCity: 'Nashville', majorCities: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville'] },
    { slug: 'texas', code: 'TX', name: 'Texas', mainCity: 'Houston', majorCities: ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso'] },
    { slug: 'utah', code: 'UT', name: 'Utah', mainCity: 'Salt Lake City', majorCities: ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem'] },
    { slug: 'vermont', code: 'VT', name: 'Vermont', mainCity: 'Burlington', majorCities: ['Burlington', 'Essex', 'South Burlington', 'Colchester', 'Rutland'] },
    { slug: 'virginia', code: 'VA', name: 'Virginia', mainCity: 'Virginia Beach', majorCities: ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Richmond', 'Arlington'] },
    { slug: 'washington', code: 'WA', name: 'Washington', mainCity: 'Seattle', majorCities: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Everett'] },
    { slug: 'west-virginia', code: 'WV', name: 'West Virginia', mainCity: 'Charleston', majorCities: ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg', 'Wheeling'] },
    { slug: 'wisconsin', code: 'WI', name: 'Wisconsin', mainCity: 'Milwaukee', majorCities: ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton'] },
    { slug: 'wyoming', code: 'WY', name: 'Wyoming', mainCity: 'Cheyenne', majorCities: ['Cheyenne', 'Casper', 'Laramie', 'Gillette', 'Rock Springs'] },
];

export const STATE_BY_CODE: Record<string, StateInfo> = Object.fromEntries(STATES.map((s) => [s.code, s]));
export const STATE_BY_SLUG: Record<string, StateInfo> = Object.fromEntries(STATES.map((s) => [s.slug, s]));
