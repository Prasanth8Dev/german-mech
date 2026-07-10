import Link from "next/link";

const serviceLinks = ["Oil Change","Brake Repair","Engine Diagnostics","Air Conditioning","Transmission","Battery Service","Steering & Suspension"];
const quickLinks = [
  { label: "Supported Brands", href: "/#brands" },
  { label: "Used Cars", href: "/cars" },
  { label: "Spare Parts", href: "/parts" },
  { label: "Book Service", href: "/booking" },
  { label: "Working Hours", href: "/#hours" },
];

export default function Footer() {
  return (
    <footer style={{ background:"#0A0A0A", borderTop:"1px solid rgba(221,0,0,.12)" }} className="pt-[72px] pb-8 px-[5%]">
      {/* Germany flag stripe */}
      <div className="flag-stripe mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[60px] mb-[60px]">
        <div>
          <div className="font-rajdhani font-bold text-xl tracking-[2px] uppercase mb-1 text-white">
            <span style={{ color:"#DD0000" }}>German</span> Mechatronics
          </div>
          <div className="text-xs mb-4" style={{ color:"rgba(255,206,0,.6)", letterSpacing:"1px" }}>
            ★ 4.7 / 5 · 88 Reviews · Car Dealer
          </div>
          <p className="text-sm leading-[1.8] mb-5" style={{ color:"#555" }}>
            Premium automotive service centre specialising in German luxury vehicles in Chennai. Factory-trained technicians. Genuine OEM parts. Guaranteed results.
          </p>
          <p className="text-xs font-semibold tracking-wider" style={{ color:"rgba(255,206,0,.4)" }}>CERTIFIED · TRUSTED · EXCELLENCE</p>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] uppercase font-semibold mb-6" style={{ color:"#FFCE00" }}>Our Services</div>
          <ul className="flex flex-col gap-3">
            {serviceLinks.map((s) => (
              <li key={s}>
                <Link href="/services" className="text-sm no-underline flex items-center gap-2 transition-colors hover:text-white" style={{ color:"#555" }}>
                  <span style={{ color:"rgba(221,0,0,.5)" }} className="text-xs">→</span>{s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] uppercase font-semibold mb-6" style={{ color:"#FFCE00" }}>Quick Links</div>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-sm no-underline flex items-center gap-2 transition-colors hover:text-white" style={{ color:"#555" }}>
                  <span style={{ color:"rgba(221,0,0,.5)" }} className="text-xs">→</span>{l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[11px] tracking-[3px] uppercase font-semibold mb-6" style={{ color:"#FFCE00" }}>Contact Us</div>
          <ul className="flex flex-col gap-3">
            {[
              { label: "099401 55888", href: "tel:09940155888" },
              { label: "10, Vallimayil Market City", href: "https://maps.app.goo.gl/qGLhFUwJEbNqGz9n7" },
              { label: "Red Hills, Chennai 600052", href: "/#contact" },
              { label: "@germanmechatronics", href: "https://www.instagram.com/germanmechatronics/" },
            ].map((c) => (
              <li key={c.label}>
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-sm no-underline flex items-center gap-2 transition-colors hover:text-white" style={{ color:"#555" }}>
                  <span style={{ color:"rgba(221,0,0,.5)" }} className="text-xs">→</span>{c.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="https://wa.me/919940155888" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-[11px] font-bold tracking-[2px] uppercase no-underline px-4 py-2.5 rounded-sm"
            style={{ background:"#25D366", color:"#fff" }}>
            💬 WhatsApp Us
          </a>
        </div>
      </div>

      <div className="germany-divider mb-6" />
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 flex-wrap">
        <p className="text-xs" style={{ color:"#444" }}>
          © 2026 <span style={{ color:"#DD0000" }}>German Mechatronics Private Limited</span>. All rights reserved.
        </p>
        <p className="text-xs" style={{ color:"#444" }}>Chennai, Tamil Nadu · India · GST Registered</p>
      </div>
    </footer>
  );
}
