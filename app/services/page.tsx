"use client";
import Link from "next/link";
import { SERVICES } from "../lib/data";

export default function ServicesPage() {
  return (
    <main className="pt-24" style={{ background:"#F5F6F8", minHeight:"100vh" }}>
      {/* Header */}
      <div className="px-[5%] py-16" style={{ background:"#111" }}>
        <div className="section-label"><span>What We Offer</span></div>
        <h1 className="font-playfair font-bold text-white mb-4" style={{ fontSize:"clamp(32px,4vw,56px)" }}>
          Our <span style={{ color:"#DD0000" }}>Services</span>
        </h1>
        <div className="red-line" />
        <p className="text-sm leading-relaxed max-w-xl" style={{ color:"rgba(255,255,255,.55)" }}>
          Every service performed with OEM-grade parts and factory-level diagnostics.
          Book online or call <a href="tel:09940155888" className="font-bold no-underline" style={{ color:"#DD0000" }}>099401 55888</a>.
        </p>
      </div>

      <div className="px-[5%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div key={s.id} className="bg-white rounded-sm p-8 group cursor-pointer relative overflow-hidden"
              style={{ border:"1px solid #E8E8E8", boxShadow:"0 2px 12px rgba(0,0,0,.05)", transition:"all .3s" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 16px 40px rgba(0,0,0,.12)";(e.currentTarget as HTMLElement).style.transform="translateY(-4px)";(e.currentTarget as HTMLElement).style.borderColor="rgba(221,0,0,.2)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 2px 12px rgba(0,0,0,.05)";(e.currentTarget as HTMLElement).style.transform="translateY(0)";(e.currentTarget as HTMLElement).style.borderColor="#E8E8E8";}}>
              {/* Red left border on hover via pseudo-element workaround */}
              <div className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-full transition-all duration-500"
                style={{ background:"linear-gradient(to bottom,#DD0000,transparent)" }} />
              <div className="absolute top-4 right-5 font-rajdhani text-5xl font-bold" style={{ color:"rgba(221,0,0,.05)", lineHeight:1 }}>
                {String(i+1).padStart(2,"0")}
              </div>
              <div className="text-4xl mb-5">{s.icon}</div>
              <h3 className="font-playfair text-xl font-bold mb-3 group-hover:text-red-600 transition-colors" style={{ color:"#111" }}>{s.name}</h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color:"#666" }}>{s.desc}</p>
              <Link href="/booking" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-bold no-underline transition-all duration-200"
                style={{ color:"#DD0000" }}>
                Book This Service <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center py-16 rounded-sm" style={{ background:"#111" }}>
          <p className="text-xs tracking-[4px] uppercase mb-4 font-semibold" style={{ color:"#DD0000" }}>Ready to Book?</p>
          <h2 className="font-playfair text-3xl font-bold text-white mb-6">Schedule Your Service Today</h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/booking" className="btn-primary no-underline">Book Online</Link>
            <a href="tel:09940155888" className="no-underline inline-flex items-center gap-2 font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm border transition-all duration-300"
              style={{ borderColor:"rgba(255,255,255,.3)", color:"#fff" }}>
              📞 099401 55888
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
