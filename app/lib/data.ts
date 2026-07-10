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
  { id: 1, brand: "BMW", model: "BMW M5 Competition", year: 2022, km: "18,000", fuel: "Petrol", trans: "Automatic", price: "€89,000", badge: "Featured", emoji: "🚗" },
  { id: 2, brand: "Mercedes", model: "Mercedes C63 AMG", year: 2021, km: "24,500", fuel: "Petrol", trans: "Automatic", price: "€72,500", badge: "Hot Deal", emoji: "🚘" },
  { id: 3, brand: "Audi", model: "Audi RS6 Avant", year: 2023, km: "9,200", fuel: "Hybrid", trans: "Automatic", price: "€95,000", badge: "New Arrival", emoji: "🚙" },
  { id: 4, brand: "Porsche", model: "Porsche 911 Carrera", year: 2020, km: "32,000", fuel: "Petrol", trans: "PDK", price: "€105,000", badge: "Premium", emoji: "🏎️" },
  { id: 5, brand: "BMW", model: "BMW X5 M50i", year: 2022, km: "21,000", fuel: "Petrol", trans: "Automatic", price: "€78,000", badge: "", emoji: "🚗" },
  { id: 6, brand: "Mercedes", model: "Mercedes S580 4MATIC", year: 2023, km: "6,800", fuel: "Hybrid", trans: "Automatic", price: "€142,000", badge: "Nearly New", emoji: "🚘" },
];

export const PARTS = [
  { id: 1, brand: "BMW", name: "M Sport Brake Discs", oem: "34116797600", price: "€280", emoji: "⭕" },
  { id: 2, brand: "Mercedes", name: "AMG Air Filter Set", oem: "A6420940304", price: "€95", emoji: "💨" },
  { id: 3, brand: "Audi", name: "Quattro CV Joint", oem: "8K0498099B", price: "€340", emoji: "⚙️" },
  { id: 4, brand: "Porsche", name: "911 Shock Absorber", oem: "99633305702", price: "€520", emoji: "🔩" },
  { id: 5, brand: "BMW", name: "N54 Turbo Actuator", oem: "11657580549", price: "€420", emoji: "💨" },
  { id: 6, brand: "Mercedes", name: "W222 Air Strut", oem: "2223209413", price: "€680", emoji: "🔧" },
  { id: 7, brand: "Audi", name: "RS6 Ceramic Pad Set", oem: "4M0615601S", price: "€195", emoji: "⭕" },
  { id: 8, brand: "BMW", name: "OBD Sensor Kit", oem: "13627585713", price: "€145", emoji: "📡" },
];

export const REVIEWS = [
  { id: 1, name: "Klaus Weber", car: "BMW M3", text: "Absolutely outstanding service. My M3 hasn't felt this good since new. Their diagnostic team found an issue three other workshops missed.", stars: 5, init: "K" },
  { id: 2, name: "Sophie Müller", car: "Mercedes S-Class", text: "The most professional automotive workshop I've encountered. Every detail was attended to with precision. Worth every euro.", stars: 5, init: "S" },
  { id: 3, name: "Hans Richter", car: "Audi RS6", text: "Transparent pricing, factory-level quality, and the team explains everything clearly. This is exactly how premium service should feel.", stars: 5, init: "H" },
  { id: 4, name: "Elena Braun", car: "Porsche 911", text: "I trust German Mechatronics with my 911 and nothing else. Their Porsche knowledge is second to none.", stars: 5, init: "E" },
  { id: 5, name: "Markus Schmidt", car: "BMW X5", text: "Booked online, dropped off the X5, received live updates, picked it up perfect. Seamless experience from start to finish.", stars: 5, init: "M" },
  { id: 6, name: "Anna Fischer", car: "Mercedes GLE", text: "Finally a workshop that treats your vehicle as if it were their own. The attention to detail and customer care is exceptional.", stars: 5, init: "A" },
];

export const FAQS = [
  { q: "Do you use genuine OEM parts?", a: "Yes. We source genuine OEM parts directly from manufacturer-approved suppliers. We also offer certified aftermarket alternatives where appropriate." },
  { q: "Will servicing with you void my warranty?", a: "No. EU Block Exemption Regulations allow you to service your vehicle at any qualified workshop without voiding the manufacturer warranty, as long as correct parts and procedures are used." },
  { q: "How long does a typical service take?", a: "A standard oil change and inspection takes 2–3 hours. More complex services such as transmission work or suspension overhauls may require 1–2 days." },
  { q: "Do you offer a collection and delivery service?", a: "Yes, we offer a premium collection and delivery service within the Munich area. Please request this when booking your appointment." },
  { q: "Can I get a loaner car while mine is being serviced?", a: "We maintain a fleet of courtesy vehicles available for bookings expected to exceed one business day. Subject to availability." },
  { q: "Do you buy used vehicles?", a: "Yes, we assess and purchase quality used luxury vehicles. Contact us with your vehicle details for a professional appraisal." },
];

export const VEHICLE_MODELS: Record<string, string[]> = {
  BMW: ["1 Series", "3 Series", "5 Series", "7 Series", "M3", "M5", "X3", "X5", "X7"],
  "Mercedes-Benz": ["A-Class", "C-Class", "E-Class", "S-Class", "GLC", "GLE", "AMG GT", "EQS"],
  Audi: ["A3", "A4", "A6", "A8", "Q5", "Q7", "RS6", "TT", "e-tron"],
  Porsche: ["911", "Cayenne", "Panamera", "Macan", "Taycan", "718"],
  Volkswagen: ["Golf", "Passat", "Tiguan", "Touareg", "Arteon", "ID.4"],
};
