"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import toast from "react-hot-toast";
import { CARS } from "../../lib/data";

const FILTERS = ["All", "BMW", "Mercedes", "Audi", "Porsche"];

export default function CarsSection() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? CARS : CARS.filter((c) => c.brand === active);

  return (
    <section id="cars" className="py-24 px-[5%]" style={{ background:"#F5F6F8" }}>
      <div className="flex justify-between items-end mb-8 flex-wrap gap-6">
        <div>
          <div className="section-label"><span>Luxury Inventory</span></div>
          <h2 className="section-title mb-2">Used <span className="red">Luxury Cars</span></h2>
          <div className="red-line" />
          <p className="text-sm leading-relaxed max-w-lg" style={{ color:"#666" }}>
            All vehicles serviced and certified by our German-trained technicians.
          </p>
        </div>
        <Link href="/cars" className="btn-secondary no-underline text-[11px]">View All →</Link>
      </div>

      <div className="flex gap-2 flex-wrap mb-10">
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setActive(f)}
            className="border text-xs tracking-widest uppercase px-5 py-2 rounded-sm transition-all duration-200 font-semibold cursor-pointer"
            style={{
              borderColor: active===f ? "#DD0000" : "#DDD",
              background: active===f ? "rgba(221,0,0,.06)" : "#fff",
              color: active===f ? "#DD0000" : "#666"
            }}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map((c, i) => (
          <motion.div key={c.id} layout
            initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }}
            transition={{ delay:i*0.07, duration:.6 }}
            className="bg-white rounded-sm overflow-hidden cursor-pointer group"
            style={{ border:"1px solid #E8E8E8", boxShadow:"0 2px 12px rgba(0,0,0,.06)", transition:"all .3s" }}
            onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 16px 48px rgba(0,0,0,.15)";(e.currentTarget as HTMLElement).style.transform="translateY(-5px)";(e.currentTarget as HTMLElement).style.borderColor="rgba(221,0,0,.2)";}}
            onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 2px 12px rgba(0,0,0,.06)";(e.currentTarget as HTMLElement).style.transform="translateY(0)";(e.currentTarget as HTMLElement).style.borderColor="#E8E8E8";}}>

            <div className="relative h-[210px] overflow-hidden">
              <img src={c.image} alt={c.model}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              {c.badge && (
                <div className="absolute top-3 left-3 text-white text-[9px] font-bold tracking-[2px] uppercase px-2.5 py-1 rounded-sm"
                  style={{ background:"linear-gradient(135deg,#DD0000,#AA0000)" }}>{c.badge}</div>
              )}
              <div className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm"
                style={{ background:"rgba(0,0,0,.65)", color:"#DD0000", backdropFilter:"blur(6px)" }}>{c.brand}</div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white border-2 border-gray-700 px-3 py-0.5 text-[10px] font-bold tracking-widest text-black rounded-sm">
                {c.plate}
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-playfair text-lg font-bold mb-1" style={{ color:"#111" }}>{c.model}</h3>
              <p className="text-xs tracking-wider uppercase mb-4" style={{ color:"#999" }}>{c.year} · {c.fuel} · {c.trans}</p>

              <div className="grid grid-cols-3 gap-3 py-4 mb-4" style={{ borderTop:"1px solid #F0F0F0", borderBottom:"1px solid #F0F0F0" }}>
                {[{l:"Mileage",v:`${c.km} km`},{l:"Fuel",v:c.fuel},{l:"Gearbox",v:c.trans}].map(s=>(
                  <div key={s.l}>
                    <div className="text-[9px] tracking-[2px] uppercase mb-1" style={{ color:"#aaa" }}>{s.l}</div>
                    <div className="text-xs font-semibold" style={{ color:"#111" }}>{s.v}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-playfair text-xl font-bold" style={{ color:"#DD0000" }}>{c.price}</div>
                  <div className="text-[10px]" style={{ color:"#aaa" }}>Negotiable</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => toast.success("Test drive booked!")}
                    className="text-[11px] font-bold tracking-wider uppercase px-3 py-2 rounded-sm cursor-pointer transition-all duration-200 border"
                    style={{ borderColor:"#DD0000", color:"#DD0000", background:"transparent" }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.background="#DD0000";(e.currentTarget as HTMLElement).style.color="#fff";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.background="transparent";(e.currentTarget as HTMLElement).style.color="#DD0000";}}>
                    Test Drive
                  </button>
                  <a href="https://wa.me/919940155888" target="_blank" rel="noopener noreferrer"
                    className="text-[11px] font-bold tracking-wider uppercase px-3 py-2 rounded-sm no-underline"
                    style={{ background:"#25D366", color:"#fff" }}>
                    WA
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
