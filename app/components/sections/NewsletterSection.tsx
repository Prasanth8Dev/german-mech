"use client";
import toast from "react-hot-toast";

export default function NewsletterSection() {
  return (
    <section className="py-[72px] px-[5%] bg-dark-3 border-t border-b border-gold/10">
      <div className="flex justify-between items-center gap-12 flex-wrap">
        <div>
          <div className="section-label"><span>Stay Updated</span></div>
          <h2 className="font-playfair text-[32px] font-bold">Get Exclusive <span className="text-gold">Offers</span></h2>
        </div>
        <div>
          <div className="flex max-w-[440px] w-full">
            <input type="email" placeholder="Enter your email address"
              className="flex-1 bg-white/[0.04] border border-gold/20 border-r-0 text-white px-5 py-3.5 text-sm font-inter outline-none rounded-l-sm placeholder-gray-500 focus:border-gold" />
            <button onClick={() => toast.success("Subscribed! Welcome to German Mechatronics.")}
              className="bg-gradient-to-r from-gold to-gold-dark text-black border-0 px-7 py-3.5 text-[11px] font-bold tracking-[2px] uppercase cursor-pointer rounded-r-sm hover:shadow-[0_4px_20px_rgba(201,168,76,.4)] transition-all duration-200 whitespace-nowrap">
              Subscribe
            </button>
          </div>
          <p className="text-[12px] text-gray-500 mt-2.5">Service reminders, seasonal offers & industry news. No spam.</p>
        </div>
      </div>
    </section>
  );
}
