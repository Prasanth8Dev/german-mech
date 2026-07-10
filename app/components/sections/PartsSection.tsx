"use client";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { PARTS } from "../../lib/data";

export default function PartsSection() {
  return (
    <section id="parts" className="py-24 px-[5%] bg-dark-2">
      <div className="section-label"><span>Parts Store</span></div>
      <h2 className="font-playfair text-[clamp(32px,4vw,56px)] font-bold mb-4">
        Spare <span className="text-gold">Parts</span>
      </h2>
      <div className="gold-line" />
      <p className="text-[15px] text-white/55 max-w-[520px] leading-[1.8] mb-10">
        Genuine OEM and aftermarket parts for all premium German vehicles.
      </p>

      <div className="flex gap-2 flex-wrap mb-12">
        {["All Parts","BMW Parts","Mercedes Parts","Audi Parts","Engine","Brakes","Electrical","Accessories"].map((f, i) => (
          <button key={f} className={`border text-[11px] tracking-[1.5px] uppercase px-5 py-2 rounded-sm transition-all duration-200 ${i === 0 ? "border-gold bg-gold/[0.08] text-gold" : "border-gold/15 text-gray-500 hover:border-gold hover:text-gold"}`}>
            {f}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
        {PARTS.map((p, i) => (
          <motion.div key={p.id}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.7 }} whileHover={{ y: -3 }}
            className="bg-dark-3 border border-gold/[0.06] p-7 cursor-pointer relative overflow-hidden group hover:border-gold/15 transition-all duration-300">
            <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-500" />
            <div className="h-[120px] flex items-center justify-center text-5xl opacity-25 mb-5">{p.emoji}</div>
            <div className="text-[10px] tracking-[2px] uppercase text-gold mb-2">{p.brand}</div>
            <div className="text-[15px] font-semibold mb-1">{p.name}</div>
            <div className="text-[11px] text-gray-500 mb-4">OEM: {p.oem}</div>
            <div className="flex items-center justify-between">
              <div className="font-playfair text-xl font-bold text-gold">{p.price}</div>
              <button onClick={() => toast.success("Added to cart!")}
                className="bg-gradient-to-r from-gold to-gold-dark text-black border-0 px-4 py-2 text-[11px] font-bold tracking-[1.5px] uppercase cursor-pointer rounded-sm hover:shadow-[0_4px_20px_rgba(201,168,76,.4)] transition-all duration-200">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
