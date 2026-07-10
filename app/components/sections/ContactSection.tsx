"use client";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-[5%] bg-black relative overflow-hidden">
      <div className="absolute left-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(201,168,76,.04),transparent)" }} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div className="section-label"><span>Get In Touch</span></div>
          <h2 className="font-playfair text-[clamp(32px,4vw,56px)] font-bold mb-4">
            Visit Our <span className="text-gold">Workshop</span>
          </h2>
          <div className="gold-line" />

          <div className="flex flex-col gap-8 mt-10">
            {[
              { icon: "📍", label: "Workshop Address", val: "Automotive Quarter, Munich\nBavaria, Germany 80331" },
              { icon: "📞", label: "Phone", val: "+49 89 1234 5678\n+49 89 8765 4321" },
              { icon: "✉️", label: "Email", val: "info@germanmechatronics.de\nservice@germanmechatronics.de" },
              { icon: "🕐", label: "Working Hours", val: "Mon – Fri: 07:00 – 19:00\nSaturday: 08:00 – 16:00" },
            ].map((c) => (
              <div key={c.label} className="flex gap-5 items-start">
                <div className="w-12 h-12 border border-gold/20 flex items-center justify-center text-xl flex-shrink-0 rounded-sm">{c.icon}</div>
                <div>
                  <div className="text-[11px] tracking-[2px] uppercase text-gold mb-1.5">{c.label}</div>
                  <div className="text-[14px] text-white leading-[1.6] whitespace-pre-line">{c.val}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="https://wa.me/4989123456789" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 mt-6 px-7 py-3.5 rounded-sm text-white text-[12px] font-bold tracking-[2px] uppercase no-underline transition-all duration-300 hover:shadow-[0_8px_30px_rgba(37,211,102,.3)]"
            style={{ background: "#25D366" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
          </a>

          <div className="flex gap-3 mt-6">
            {["f","in","ig","yt"].map((s) => (
              <a key={s} href="#" className="w-10 h-10 border border-gold/20 flex items-center justify-center text-gold text-sm no-underline rounded-sm hover:bg-gold hover:text-black transition-all duration-200">{s}</a>
            ))}
          </div>
        </div>

        <div>
          <div className="bg-white/[0.02] border border-gold/10 p-12 rounded-sm">
            <h3 className="font-playfair text-[28px] mb-2">Send Message</h3>
            <p className="text-[13px] text-gray-500 mb-9">We'll respond within 2 business hours.</p>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div><label className="form-label">Full Name</label><input type="text" className="form-control" placeholder="Your Name" /></div>
              <div><label className="form-label">Phone</label><input type="tel" className="form-control" placeholder="+49 000 000" /></div>
            </div>
            <div className="mb-5"><label className="form-label">Email</label><input type="email" className="form-control" placeholder="you@example.com" /></div>
            <div className="mb-5">
              <label className="form-label">Subject</label>
              <select className="form-control">
                {["Service Enquiry","Vehicle for Sale","Spare Parts","General Question"].map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="mb-7"><label className="form-label">Message</label><textarea className="form-control resize-none" rows={4} placeholder="How can we help?" /></div>
            <button onClick={() => toast.success("Message sent! We'll reply within 2 hours.")} className="btn-primary w-full justify-center">Send Message →</button>
          </div>

          <div className="mt-6 h-[220px] bg-dark-2 border border-gold/10 flex items-center justify-center text-[13px] text-gray-500 tracking-[2px] uppercase rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{ background: "linear-gradient(135deg,rgba(201,168,76,.3),transparent)" }} />
            <span>📍 Google Maps · Munich Automotive Quarter</span>
          </div>
        </div>
      </div>
    </section>
  );
}
