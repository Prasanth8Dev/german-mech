"use client";
import { motion } from "framer-motion";

const STATS = [
  { num: "15+", label: "Years in Business" },
  { num: "5K+", label: "Cars Serviced" },
  { num: "98%", label: "Satisfaction Rate" },
  { num: "20+", label: "Master Technicians" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-[5%] bg-dark-2 relative overflow-hidden">
      <div className="absolute right-[-200px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold/[0.05]" />
      <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-gold/[0.08]" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        <div>
          <div className="section-label"><span>Our Story</span></div>
          <h2 className="font-playfair text-[clamp(32px,4vw,56px)] font-bold mb-4">
            Precision <span className="text-gold">German</span> Engineering
          </h2>
          <div className="gold-line" />
          <p className="text-[15px] text-white/55 max-w-[520px] leading-[1.8] mb-5">
            We specialize in servicing premium vehicles with advanced diagnostics, genuine quality parts, and experienced technicians trained to the highest European standards.
          </p>
          <p className="text-[15px] text-white/55 max-w-[520px] leading-[1.8]">
            Founded on the principles of German engineering excellence, German Mechatronics has grown to become the most trusted name in luxury automotive care.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {["OEM Certified Parts","Factory Diagnostics","Warranty Preserved","24-Month Guarantee"].map((t) => (
              <span key={t} className="border border-gold/15 text-gold/70 px-4 py-2 text-[11px] tracking-[1.5px] uppercase rounded-sm">{t}</span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-[2px] mt-12">
            {STATS.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-dark-3 border border-gold/[0.06] p-8 hover:border-gold/20 hover:bg-gold/[0.03] transition-all duration-300">
                <div className="font-playfair text-[42px] font-bold text-gold mb-1">{s.num}</div>
                <div className="text-[11px] tracking-[2px] uppercase text-gray-500">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] bg-dark-3 border border-gold/10 flex items-center justify-center text-[120px] opacity-[0.08] relative overflow-hidden">
            <div className="absolute inset-0" style={{ background: "linear-gradient(135deg,rgba(201,168,76,.05),transparent)" }} />
            🔧
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="absolute -bottom-5 -right-5 p-7 text-black"
            style={{ background: "linear-gradient(135deg,#C9A84C,#9A7A2E)" }}>
            <div className="font-playfair text-4xl font-black">15+</div>
            <div className="text-[11px] font-bold tracking-[2px] uppercase">Years<br/>Excellence</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
