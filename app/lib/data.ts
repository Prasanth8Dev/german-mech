export const SERVICES = [
  { id: 1, name: "Air & Cabin Filter", icon: "💨", desc: "Replace clogged filters for optimal air quality and engine performance." },
  { id: 2, name: "Air Conditioning", icon: "❄️", desc: "Full AC diagnostics, regas and repair for all German vehicles." },
  { id: 3, name: "Engine Diagnostics", icon: "🔍", desc: "Advanced OBD-II and factory-level electronic fault code scanning." },
  { id: 4, name: "Battery Service", icon: "⚡", desc: "Testing, replacement and charging system analysis for 12V & 48V systems." },
  { id: 5, name: "Brake Repair", icon: "🛑", desc: "Pads, discs, callipers and ABS system service with genuine parts." },
  { id: 6, name: "Electrical Repairs", icon: "🔌", desc: "Complete wiring, sensor, module and control unit diagnostics and repair." },
  { id: 7, name: "Oil Change", icon: "🛢️", desc: "Manufacturer-approved synthetic oils with OEM-grade filter replacement." },
  { id: 8, name: "Steering & Suspension", icon: "⚙️", desc: "Full alignment, shock absorbers, control arms and power steering service." },
  { id: 9, name: "Transmission Service", icon: "🔧", desc: "Automatic and manual gearbox service, fluid changes and rebuilds." },
  { id: 10, name: "General Maintenance", icon: "📋", desc: "Complete service schedules tailored to manufacturer recommendations." },
];

export const BRANDS = [
  { name: "BMW", short: "BMW", tagline: "Bavarian Motor Works", desc: "Full-spectrum BMW service from 1 Series to M Sport, including electric and hybrid models.", tags: ["Engine", "Electrical", "M Sport", "iDrive"] },
  { name: "Mercedes-Benz", short: "MB", tagline: "The Best or Nothing", desc: "Expert care for the entire Mercedes-Benz lineup, C-Class through S-Class and AMG variants.", tags: ["AMG", "S-Class", "MBUX", "EQ"] },
  { name: "Audi", short: "AUDI", tagline: "Vorsprung durch Technik", desc: "Precision service for Audi's full range including RS models and e-tron electric vehicles.", tags: ["Quattro", "RS", "e-tron", "MMI"] },
  { name: "Porsche", short: "PORS", tagline: "There is no substitute", desc: "High-performance Porsche maintenance from 911 to Cayenne, Taycan and Panamera.", tags: ["911", "Taycan", "Cayenne", "PCM"] },
  { name: "Volkswagen", short: "VW", tagline: "Das Auto", desc: "Complete VW service including Golf GTI, Tiguan, Touareg and ID. series electric models.", tags: ["GTI", "ID.4", "Touareg"] },
  { name: "& More", short: "MORE", tagline: "Bentley · Lamborghini · Ferrari", desc: "Specialist services for other ultra-luxury and exotic European marques on request.", tags: ["Bentley", "Lamborghini", "Maserati"] },
];

export const CARS = [
  { id: 1, brand: "BMW", model: "BMW 5 Series 530d M Sport", year: 2021, km: "38,000", fuel: "Diesel", trans: "Automatic", price: "₹52,00,000", badge: "Featured", image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80", plate: "TN 09 BM 5530" },
  { id: 2, brand: "Mercedes", model: "Mercedes-Benz C 300d AMG Line", year: 2022, km: "22,000", fuel: "Diesel", trans: "Automatic", price: "₹48,00,000", badge: "Hot Deal", image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80", plate: "TN 09 MB 3000" },
  { id: 3, brand: "Audi", model: "Audi Q7 45 TDI Premium Plus", year: 2021, km: "41,000", fuel: "Diesel", trans: "Automatic", price: "₹68,00,000", badge: "Family SUV", image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80", plate: "TN 09 AQ 7007" },
  { id: 4, brand: "Porsche", model: "Porsche Cayenne S Diesel", year: 2019, km: "55,000", fuel: "Diesel", trans: "PDK", price: "₹85,00,000", badge: "Premium", image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80", plate: "TN 09 PC 1911" },
  { id: 5, brand: "BMW", model: "BMW X5 xDrive30d M Sport", year: 2020, km: "48,000", fuel: "Diesel", trans: "Automatic", price: "₹62,00,000", badge: "", image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80", plate: "TN 09 BX 5000" },
  { id: 6, brand: "Mercedes", model: "Mercedes-Benz E 220d Exclusive", year: 2023, km: "12,000", fuel: "Diesel", trans: "Automatic", price: "₹55,00,000", badge: "Nearly New", image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80", plate: "TN 09 ME 2230" },
];

export const PARTS = [
  { id: 1, brand: "BMW", name: "M Sport Brake Discs", oem: "34116797600", price: "₹28,500", emoji: "⭕" },
  { id: 2, brand: "Mercedes", name: "AMG Air Filter Set", oem: "A6420940304", price: "₹9,800", emoji: "💨" },
  { id: 3, brand: "Audi", name: "Quattro CV Joint", oem: "8K0498099B", price: "₹34,000", emoji: "⚙️" },
  { id: 4, brand: "Porsche", name: "Cayenne Shock Absorber", oem: "99633305702", price: "₹52,000", emoji: "🔩" },
  { id: 5, brand: "BMW", name: "N54 Turbo Actuator", oem: "11657580549", price: "₹42,000", emoji: "💨" },
  { id: 6, brand: "Mercedes", name: "W222 Air Suspension Strut", oem: "2223209413", price: "₹68,000", emoji: "🔧" },
  { id: 7, brand: "Audi", name: "RS6 Ceramic Pad Set", oem: "4M0615601S", price: "₹19,500", emoji: "⭕" },
  { id: 8, brand: "BMW", name: "OBD Sensor Kit", oem: "13627585713", price: "₹14,500", emoji: "📡" },
];

export const REVIEWS = [
  { id: 1, name: "Rajesh Kumar", car: "BMW 5 Series", text: "Outstanding service! My BMW 530d was perfectly diagnosed and fixed within a day. The team is knowledgeable and very professional. Best German car specialist in Chennai.", stars: 5, init: "R" },
  { id: 2, name: "Priya Venkataraman", car: "Mercedes C-Class", text: "Excellent experience from start to finish. Transparent pricing, genuine parts, and the car was returned cleaner than I left it. Highly recommended!", stars: 5, init: "P" },
  { id: 3, name: "Arun Krishnamurthy", car: "Audi Q7", text: "The only place I trust for my Audi Q7. Factory-level diagnostics, honest advice and no unnecessary upselling. Real experts in German vehicles.", stars: 5, init: "A" },
  { id: 4, name: "Suresh Natarajan", car: "Porsche Cayenne", text: "Brought my Cayenne here after bad experience elsewhere. German Mechatronics solved a complex suspension issue other workshops couldn't. Worth every rupee.", stars: 5, init: "S" },
  { id: 5, name: "Kavitha Balasubramanian", car: "BMW X5", text: "Quick turnaround, genuine OEM parts and the staff keep you updated throughout. My X5 drives perfectly now. Very happy with the service.", stars: 5, init: "K" },
  { id: 6, name: "Dinesh Chandrasekaran", car: "Mercedes E-Class", text: "Premium service at a fair price. The team explained every issue clearly and showed me the worn parts before replacing. Trustworthy and professional.", stars: 5, init: "D" },
];

export const FAQS = [
  { q: "Do you use genuine OEM parts?", a: "Yes. We source genuine OEM parts directly from manufacturer-approved distributors in India. We also offer certified aftermarket alternatives where appropriate, and always inform you before using them." },
  { q: "Which German car brands do you service?", a: "We specialise in BMW, Mercedes-Benz, Audi, Porsche, and Volkswagen. We also service other European luxury brands including Bentley, Lamborghini, and Maserati on request." },
  { q: "How long does a typical service take?", a: "A standard oil change and inspection takes 2–3 hours. More complex services such as transmission work or suspension overhauls may require 1–2 days. We'll give you an accurate estimate upfront." },
  { q: "Where are you located in Chennai?", a: "We are located at 10, Vallimayil Market City, Red Hills, Chennai – Naravarikuppam, Tamil Nadu 600052. Easily accessible from Red Hills and the Ponneri highway." },
  { q: "Do you provide vehicle engine diagnostics?", a: "Yes. We use advanced OBD-II and factory-level diagnostic equipment specific to German vehicles to accurately identify engine faults, electrical issues, and ECU errors." },
  { q: "Do you buy used luxury cars?", a: "Yes, we assess and purchase quality used German luxury vehicles. Call us at 099401 55888 or WhatsApp us with your vehicle details for a professional appraisal." },
];

export const VEHICLE_MODELS: Record<string, string[]> = {
  BMW: ["1 Series", "3 Series", "5 Series", "7 Series", "M3", "M5", "X3", "X5", "X7"],
  "Mercedes-Benz": ["A-Class", "C-Class", "E-Class", "S-Class", "GLC", "GLE", "AMG GT", "EQS"],
  Audi: ["A3", "A4", "A6", "A8", "Q5", "Q7", "RS6", "TT", "e-tron"],
  Porsche: ["911", "Cayenne", "Panamera", "Macan", "Taycan", "718"],
  Volkswagen: ["Golf", "Passat", "Tiguan", "Touareg", "Arteon", "ID.4"],
};
