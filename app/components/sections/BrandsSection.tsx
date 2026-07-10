"use client";
import { motion } from "framer-motion";
import { BRANDS } from "../../lib/data";

export default function BrandsSection() {
  return (
    <section id="brands" className="py-24 px-[5%]" style={{ background:"#F5F6F8" }}>
      <div className="flex justify-between items-end mb-16 flex-wrap gap-6">
        <div>
          <div className="section-label"><span>Supported Brands</span></div>
          <h2 className="font-playfair text-[clamp(32px,4vw,52px)] font-bold mb-4" style={{ color:"#111" }}>
            Germany&apos;s <span style={{ color:"#FFCE00" }}>Finest</span>
          </h2>
          <div className="gold-line" />
          <p className="text-[15px] max-w-[520px] leading-[1.8]" style={{ color:"#666" }}>
            Certified specialists for all major German luxury and performance brands.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px]">
        {BRANDS.map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="relative bg-white p-10 border cursor-pointer overflow-hidden group rounded-sm"
            style={{ borderColor:"#E8E8E8", boxShadow:"0 2px 10px rgba(0,0,0,.05)", transition:"all .3s" }}
          >
            <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
              style={{ background: "linear-gradient(to right, #FFCE00, #E8C96A)" }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: "linear-gradient(135deg,rgba(255,206,0,.04),transparent)" }} />

            <div className="absolute top-8 right-8 w-8 h-8 border rounded-full flex items-center justify-center text-sm transition-all duration-300 group-hover:bg-[#FFCE00] group-hover:text-black group-hover:border-[#FFCE00]"
              style={{ borderColor:"rgba(255,206,0,.3)", color:"#FFCE00" }}>→</div>

            <div className="w-16 h-16 rounded-full border-[1.5px] flex items-center justify-center mb-6 font-rajdhani font-bold text-[13px] tracking-wider transition-all duration-300 group-hover:border-[#FFCE00] group-hover:shadow-[0_0_20px_rgba(255,206,0,.2)]"
              style={{ borderColor:"rgba(255,206,0,.3)", color:"#FFCE00" }}>
              {b.short}
            </div>
            <h3 className="font-playfair text-[22px] font-bold mb-1" style={{ color:"#111" }}>{b.name}</h3>
            <div className="text-[11px] tracking-[2px] uppercase mb-4 font-semibold" style={{ color:"#FFCE00" }}>{b.tagline}</div>
            <p className="text-[13px] leading-[1.7] mb-6" style={{ color:"#777" }}>{b.desc}</p>
            <div className="flex flex-wrap gap-1.5">
              {b.tags.map((t) => (
                <span key={t} className="text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-sm border"
                  style={{ borderColor:"rgba(255,206,0,.25)", color:"rgba(180,150,0,.8)" }}>{t}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
