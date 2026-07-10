"use client";
import { motion } from "framer-motion";
import { REVIEWS } from "../../lib/data";

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 px-[5%] bg-black">
      <div className="text-center mb-4">
        <div className="section-label justify-center"><span>Testimonials</span></div>
        <h2 className="font-playfair text-[clamp(32px,4vw,56px)] font-bold">
          Client <span className="text-gold">Reviews</span>
        </h2>
        <div className="gold-line mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2px] mt-16">
        {REVIEWS.map((r, i) => (
          <motion.div key={r.id}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }} whileHover={{ y: -4 }}
            className="bg-dark-2 border border-gold/[0.06] p-9 relative overflow-hidden hover:border-gold/15 transition-all duration-300">
            <div className="absolute top-5 right-6 text-[80px] text-gold/[0.04] leading-none font-serif">❝</div>
            <div className="flex gap-0.5 mb-5">
              {"★★★★★".split("").map((s, j) => <span key={j} className="text-gold text-sm">{s}</span>)}
            </div>
            <p className="text-[14px] text-white/70 leading-[1.8] mb-7 italic">"{r.text}"</p>
            <div className="flex items-center gap-3.5">
              <div className="w-[42px] h-[42px] rounded-full flex items-center justify-center font-bold text-black text-sm flex-shrink-0"
                style={{ background: "linear-gradient(135deg,#C9A84C,#9A7A2E)" }}>{r.init}</div>
              <div>
                <div className="text-[14px] font-semibold">{r.name}</div>
                <div className="text-[11px] text-gold tracking-wider uppercase">{r.car} Owner</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
