"use client";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const HOURS = [
  { day: "Monday",    time: "10:00 am – 9:30 pm" },
  { day: "Tuesday",   time: "9:30 am – 9:45 pm" },
  { day: "Wednesday", time: "9:45 am – 8:45 pm" },
  { day: "Thursday",  time: "9:45 am – 10:45 pm" },
  { day: "Friday",    time: "9:45 am – 9:45 pm" },
  { day: "Saturday",  time: "10:00 am – 10:00 pm" },
  { day: "Sunday",    time: "11:00 am – 5:45 pm" },
];

export default function ContactSection() {
  const today = new Date().toLocaleDateString("en-IN", { weekday: "long" });

  return (
    <section id="contact" className="py-24 px-[5%] bg-black relative overflow-hidden">
      {/* Germany flag stripe at top */}
      <div className="flag-stripe absolute top-0 left-0 w-full" />

      <div className="absolute left-[-200px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: "radial-gradient(circle,rgba(221,0,0,.04),transparent)" }} />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left Column */}
        <div>
          <div className="section-label"><span>Get In Touch</span></div>
          <h2 className="font-playfair text-[clamp(32px,4vw,56px)] font-bold text-white mb-4">
            Visit Our <span style={{ color:"#DD0000" }}>Workshop</span>
          </h2>
          <div className="red-line" />
          <p className="text-sm mb-2" style={{ color:"#FFCE00", fontWeight:600, letterSpacing:"1px" }}>
            ★ 4.7 / 5 &nbsp;·&nbsp; 88 Reviews &nbsp;·&nbsp; Car Dealer
          </p>

          <div className="flex flex-col gap-7 mt-8">
            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 border flex items-center justify-center text-xl flex-shrink-0 rounded-sm"
                style={{ borderColor:"rgba(221,0,0,.3)" }}>📍</div>
              <div>
                <div className="text-[11px] tracking-[2px] uppercase mb-1.5 font-semibold" style={{ color:"#DD0000" }}>Workshop Address</div>
                <a href="https://maps.app.goo.gl/qGLhFUwJEbNqGz9n7" target="_blank" rel="noopener noreferrer"
                  className="text-[14px] leading-[1.7] no-underline hover:underline" style={{ color:"#ddd" }}>
                  10, Vallimayil Market City, Red Hills<br/>
                  Chennai, Naravarikuppam<br/>
                  Tamil Nadu 600052
                </a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 border flex items-center justify-center text-xl flex-shrink-0 rounded-sm"
                style={{ borderColor:"rgba(221,0,0,.3)" }}>📞</div>
              <div>
                <div className="text-[11px] tracking-[2px] uppercase mb-1.5 font-semibold" style={{ color:"#DD0000" }}>Phone</div>
                <a href="tel:09940155888" className="text-[14px] text-white no-underline hover:text-red-400">099401 55888</a>
              </div>
            </div>

            <div className="flex gap-5 items-start">
              <div className="w-12 h-12 border flex items-center justify-center text-xl flex-shrink-0 rounded-sm"
                style={{ borderColor:"rgba(221,0,0,.3)" }}>📸</div>
              <div>
                <div className="text-[11px] tracking-[2px] uppercase mb-1.5 font-semibold" style={{ color:"#DD0000" }}>Instagram</div>
                <a href="https://www.instagram.com/germanmechatronics/" target="_blank" rel="noopener noreferrer"
                  className="text-[14px] no-underline hover:underline" style={{ color:"#ddd" }}>
                  @germanmechatronics
                </a>
              </div>
            </div>
          </div>

          {/* Hours table */}
          <div id="hours" className="mt-10 border rounded-sm overflow-hidden" style={{ borderColor:"rgba(221,0,0,.2)" }}>
            <div className="px-5 py-3 text-[11px] tracking-[2px] uppercase font-bold" style={{ background:"#DD0000", color:"#fff" }}>
              Working Hours
            </div>
            {HOURS.map((h) => (
              <div key={h.day} className="flex justify-between items-center px-5 py-2.5 border-b text-sm"
                style={{
                  borderColor:"rgba(255,255,255,.06)",
                  background: h.day === today ? "rgba(221,0,0,.08)" : "transparent",
                  color: h.day === today ? "#DD0000" : "#ccc",
                  fontWeight: h.day === today ? 600 : 400,
                }}>
                <span>{h.day}</span>
                <span>{h.time}</span>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            <a href="https://wa.me/919940155888" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm text-white text-[12px] font-bold tracking-[2px] uppercase no-underline"
              style={{ background: "#25D366" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp
            </a>
            <a href="https://www.instagram.com/germanmechatronics/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-sm text-white text-[12px] font-bold tracking-[2px] uppercase no-underline border"
              style={{ borderColor:"rgba(221,0,0,.3)", background:"transparent" }}>
              📸 Instagram
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div>
          {/* Google Maps embed */}
          <div className="mb-6 rounded-sm overflow-hidden" style={{ border:"1px solid rgba(221,0,0,.2)", height:"220px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.3!2d80.17!3d13.19!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x8e0756eba7ed5b4!2sGerman%20Mechatronics!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%" height="100%" style={{ border:0 }} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="German Mechatronics Location" />
          </div>

          {/* Contact Form */}
          <div className="border p-8 rounded-sm" style={{ background:"rgba(255,255,255,.02)", borderColor:"rgba(221,0,0,.15)" }}>
            <h3 className="font-playfair text-[24px] text-white mb-1">Send a Message</h3>
            <p className="text-[13px] mb-7" style={{ color:"#666" }}>We'll respond within 2 business hours.</p>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div><label className="form-label" style={{ color:"#888" }}>Full Name</label><input type="text" className="form-control" placeholder="Your Name" /></div>
              <div><label className="form-label" style={{ color:"#888" }}>Phone</label><input type="tel" className="form-control" placeholder="+91 00000 00000" /></div>
            </div>
            <div className="mb-4"><label className="form-label" style={{ color:"#888" }}>Email</label><input type="email" className="form-control" placeholder="you@example.com" /></div>
            <div className="mb-4">
              <label className="form-label" style={{ color:"#888" }}>Service</label>
              <select className="form-control">
                {["Service Enquiry","Vehicle for Sale","Spare Parts","General Question"].map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div className="mb-6"><label className="form-label" style={{ color:"#888" }}>Message</label><textarea className="form-control resize-none" rows={4} placeholder="How can we help?" /></div>
            <button onClick={() => toast.success("Message sent! We'll reply within 2 hours.")}
              className="btn-primary w-full justify-center">
              Send Message →
            </button>
          </div>
        </div>
      </div>

      {/* Germany flag stripe at bottom */}
      <div className="flag-stripe absolute bottom-0 left-0 w-full" />
    </section>
  );
}
