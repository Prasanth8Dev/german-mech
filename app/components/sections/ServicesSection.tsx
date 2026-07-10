"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { SERVICES } from "../../lib/data";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-[5%]" style={{ background:"#fff" }}>
      <div className="text-center mb-16">
        <div className="section-label justify-center"><span>What We Offer</span></div>
        <h2 className="font-playfair text-[clamp(32px,4vw,52px)] font-bold mb-4" style={{ color:"#111" }}>
          Premium <span style={{ color:"#FFCE00" }}>Services</span>
        </h2>
        <div className="gold-line mx-auto" />
        <p className="text-[15px] max-w-[520px] mx-auto leading-[1.8]" style={{ color:"#666" }}>
          Every service performed with OEM-grade parts and factory-level diagnostics.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-[2px] mt-12">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.05, duration: 0.7 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="relative bg-white p-8 border cursor-pointer overflow-hidden group rounded-sm"
            style={{ borderColor:"#E8E8E8", boxShadow:"0 2px 10px rgba(0,0,0,.05)" }}
          >
            <div className="absolute top-0 left-0 w-[3px] h-0 group-hover:h-full transition-all duration-500"
              style={{ background: "linear-gradient(to bottom, #FFCE00, transparent)" }} />
            <div className="absolute top-5 right-5 font-rajdhani text-[40px] font-bold leading-none"
              style={{ color:"rgba(255,206,0,.08)" }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="text-4xl mb-5">{s.icon}</div>
            <h3 className="font-playfair text-[16px] font-bold mb-2 transition-colors group-hover:text-[#FFCE00]"
              style={{ color:"#111" }}>{s.name}</h3>
            <p className="text-[13px] leading-[1.7] mb-6" style={{ color:"#777" }}>{s.desc}</p>
            <Link href="/booking"
              className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase font-semibold no-underline"
              style={{ color:"#DD0000" }}>
              Book Service
              <span className="group-hover:translate-x-1.5 transition-transform duration-200 inline-block">→</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
