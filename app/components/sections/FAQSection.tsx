"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS } from "../../lib/data";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-[5%] bg-dark-2">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div>
          <div className="section-label"><span>FAQ</span></div>
          <h2 className="font-playfair text-[clamp(32px,4vw,48px)] font-bold mb-4">
            Common <span className="text-gold">Questions</span>
          </h2>
          <div className="gold-line" />
          <p className="text-[15px] text-white/55 leading-[1.8]">Everything you need to know about our services and processes.</p>
        </div>

        <div className="lg:col-span-2 flex flex-col gap-[2px]">
          {FAQS.map((f, i) => (
            <div key={i} className={`border overflow-hidden transition-colors duration-200 ${open === i ? "border-gold/20" : "border-gold/[0.08]"} bg-dark-3`}>
              <button className="w-full flex justify-between items-center px-7 py-5 text-left gap-4 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}>
                <span className={`text-[15px] font-medium transition-colors ${open === i ? "text-gold" : "text-white"}`}>{f.q}</span>
                <span className={`w-6 h-6 border rounded-full flex items-center justify-center flex-shrink-0 text-gold text-sm transition-all duration-300 ${open === i ? "bg-gold text-black border-gold rotate-45" : "border-gold/30"}`}>+</span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                    transition={{ duration: 0.35 }} className="overflow-hidden">
                    <div className="px-7 pb-5">
                      <p className="text-[13px] text-gray-500 leading-[1.8]">{f.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
