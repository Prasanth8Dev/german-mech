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
    <section id="cars" className="py-24 px-[5%] bg-black">
      <div className="flex justify-between items-end mb-12 flex-wrap gap-6">
        <div>
          <div className="section-label"><span>Luxury Inventory</span></div>
          <h2 className="font-playfair text-[clamp(32px,4vw,56px)] font-bold mb-2">
            Used <span className="text-gold">Luxury Cars</span>
          </h2>
          <div className="gold-line" />
        </div>
        <Link href="/cars" className="btn-secondary no-underline text-[11px]">View All Inventory →</Link>
      </div>

      <div className="flex gap-2 flex-wrap mb-10">
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setActive(f)}
            className={`border text-[11px] tracking-[1.5px] uppercase px-5 py-2 rounded-sm transition-all duration-200 ${active === f ? "border-gold bg-gold/[0.08] text-gold" : "border-gold/15 text-gray-500 hover:border-gold hover:text-gold"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2px]">
        {filtered.map((c, i) => (
          <motion.div
            key={c.id}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.6 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-dark-2 border border-gold/[0.06] overflow-hidden cursor-pointer group hover:border-gold/20 transition-all duration-300 hover:shadow-[0_20px_60px_rgba(0,0,0,.5)]"
          >
            <div className="relative h-[220px] overflow-hidden bg-gradient-to-br from-[#111] to-[#1a1a1a] flex items-center justify-center">
              <div className="text-[80px] opacity-[0.15]">{c.emoji}</div>
              {c.badge && <div className="absolute top-4 left-4 bg-gradient-to-r from-gold to-gold-dark text-black text-[9px] font-bold tracking-[2px] uppercase px-2.5 py-1">{c.badge}</div>}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur border border-gold/20 text-gold text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1">{c.brand}</div>
            </div>

            <div className="p-7">
              <h3 className="font-playfair text-xl font-bold mb-1">{c.model}</h3>
              <p className="text-[12px] text-gray-500 tracking-wider uppercase mb-5">{c.year} · {c.fuel} · {c.trans}</p>

              <div className="grid grid-cols-3 gap-4 py-5 border-t border-b border-white/[0.05] mb-5">
                {[{l:"Mileage",v:`${c.km} km`},{l:"Fuel",v:c.fuel},{l:"Gearbox",v:c.trans}].map((s) => (
                  <div key={s.l}>
                    <div className="text-[9px] tracking-[2px] uppercase text-gray-500 mb-1">{s.l}</div>
                    <div className="text-[13px] font-semibold">{s.v}</div>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-playfair text-2xl font-bold text-gold">{c.price}</div>
                  <div className="text-[11px] text-gray-500">OBO</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => toast.success("Test drive request sent!")} className="w-9 h-9 border border-gold/20 text-gold hover:bg-gold hover:text-black transition-all duration-200 flex items-center justify-center rounded-sm text-sm">🚗</button>
                  <button onClick={() => toast.success("Connecting you to our team…")} className="w-9 h-9 border border-gold/20 text-gold hover:bg-gold hover:text-black transition-all duration-200 flex items-center justify-center rounded-sm text-sm">📞</button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
