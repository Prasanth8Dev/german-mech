import Link from "next/link";

const serviceLinks = ["Oil Change","Brake Repair","Engine Diagnostics","Transmission","Air Conditioning"];
const quickLinks = [
  { label: "Supported Brands", href: "/#brands" },
  { label: "Used Cars", href: "/cars" },
  { label: "Spare Parts", href: "/parts" },
  { label: "Book Service", href: "/booking" },
  { label: "About Us", href: "/#about" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-2 border-t border-gold/[0.08] pt-[72px] pb-8 px-[5%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[60px] mb-[60px]">
        <div>
          <div className="font-rajdhani font-bold text-xl tracking-[2px] uppercase mb-4">
            <span className="text-gold">German</span> Mechatronics
          </div>
          <p className="text-sm text-gray-500 leading-[1.8] mb-6">
            Premium automotive service centre specialising in German luxury vehicles. Factory-trained technicians. OEM parts. Guaranteed results.
          </p>
          <p className="text-xs text-gold/50 tracking-wider">CERTIFIED · TRUSTED · EXCELLENT</p>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-6">Services</div>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link href="/services" className="text-gray-500 text-sm hover:text-gold transition-colors no-underline flex items-center gap-2">
                  <span className="text-gold/40 text-xs">→</span>{s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-6">Quick Links</div>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-gray-500 text-sm hover:text-gold transition-colors no-underline flex items-center gap-2">
                  <span className="text-gold/40 text-xs">→</span>{l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] uppercase text-gold font-semibold mb-6">Contact</div>
          <ul className="flex flex-col gap-3">
            {[
              { label: "+49 89 1234 5678", href: "tel:+4989123456789" },
              { label: "info@germanmechatronics.de", href: "mailto:info@germanmechatronics.de" },
              { label: "Munich, Bavaria, Germany", href: "/#contact" },
              { label: "Mon–Fri 07:00–19:00", href: "#" },
            ].map((c) => (
              <li key={c.label}>
                <Link href={c.href} className="text-gray-500 text-sm hover:text-gold transition-colors no-underline flex items-center gap-2">
                  <span className="text-gold/40 text-xs">→</span>{c.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5 pt-7 flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap">
        <p className="text-xs text-gray-500">
          © 2026 <span className="text-gold">German Mechatronics</span>. All rights reserved.
        </p>
        <p className="text-xs text-gray-500">Crafted with precision · Privacy Policy · Terms</p>
      </div>
    </footer>
  );
}
