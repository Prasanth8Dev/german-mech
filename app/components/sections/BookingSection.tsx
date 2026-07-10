"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { VEHICLE_MODELS } from "../../lib/data";

const STEPS = [
  "Select Car Brand","Select Vehicle Model","Choose Service","Select Date & Time","Customer Details","Confirm Booking"
];
const SLOTS = ["08:00","09:00","10:00","11:00","14:00","15:00"];

export default function BookingSection() {
  const [activeStep, setActiveStep] = useState(0);
  const [brand, setBrand] = useState("");
  const [slot, setSlot] = useState("");

  const advance = (n: number) => setActiveStep(Math.max(activeStep, n));

  const submit = () => {
    setActiveStep(6);
    toast.success("Booking confirmed! We'll contact you shortly.");
  };

  return (
    <section id="booking" className="py-24 px-[5%] bg-dark-2 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30" style={{ background: "repeating-linear-gradient(45deg,#1a1a1a 0,#1a1a1a 1px,#111 1px,#111 8px)" }} />
      <div className="relative z-10">
        <div className="section-label"><span>Online Booking</span></div>
        <h2 className="font-playfair text-[clamp(32px,4vw,56px)] font-bold mb-4">
          Book Your <span className="text-gold">Appointment</span>
        </h2>
        <div className="gold-line" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-14">
          {/* Steps */}
          <div>
            <p className="text-[15px] text-white/55 leading-[1.8] mb-10">Six simple steps to schedule your premium automotive service.</p>
            <div className="flex flex-col">
              {STEPS.map((s, i) => (
                <div key={i} className={`flex gap-5 py-5 border-b border-gold/[0.08] last:border-b-0 ${i === activeStep ? "opacity-100" : i < activeStep ? "opacity-60" : "opacity-30"}`}>
                  <div className={`w-9 h-9 rounded-full border-[1.5px] flex items-center justify-center font-rajdhani font-bold text-sm flex-shrink-0 transition-all duration-300 ${i <= activeStep ? "bg-gold text-black border-gold shadow-[0_0_20px_rgba(201,168,76,.4)]" : "border-gold/30 text-gold"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="text-[11px] tracking-[2px] uppercase text-gray-500 mb-1">Step {i + 1}</div>
                    <div className="text-[15px] font-semibold">{s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="bg-white/[0.02] border border-gold/10 p-12 rounded-sm">
            <h3 className="font-playfair text-[28px] mb-2">Schedule Service</h3>
            <p className="text-[13px] text-gray-500 mb-9">Fill in the details below and our team will confirm your appointment.</p>

            <div className="mb-5">
              <label className="form-label">Car Brand</label>
              <select className="form-control" value={brand} onChange={(e) => { setBrand(e.target.value); advance(1); }}>
                <option value="">Select Brand</option>
                {Object.keys(VEHICLE_MODELS).map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>

            <div className="mb-5">
              <label className="form-label">Vehicle Model</label>
              <select className="form-control" onChange={() => advance(2)}>
                <option>Select Model</option>
                {brand && VEHICLE_MODELS[brand]?.map((m) => <option key={m}>{m}</option>)}
              </select>
            </div>

            <div className="mb-5">
              <label className="form-label">Service Required</label>
              <select className="form-control" onChange={() => advance(3)}>
                <option>Select Service</option>
                {["Oil Change","Brake Repair","Engine Diagnostics","Air Conditioning","Battery Service","Transmission","General Maintenance"].map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="form-label">Preferred Date</label>
                <input type="date" className="form-control" onChange={() => advance(3)} min={new Date().toISOString().split("T")[0]} />
              </div>
              <div>
                <label className="form-label">Time Slot</label>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {SLOTS.map((s) => (
                    <button key={s} onClick={() => { setSlot(s); advance(4); }}
                      className={`border text-xs py-2.5 rounded-sm transition-all duration-200 ${slot === s ? "border-gold bg-gold/10 text-gold" : "border-gold/12 text-gray-500 hover:border-gold hover:text-gold"}`}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-5">
              <div><label className="form-label">Full Name</label><input type="text" className="form-control" placeholder="Your Name" onChange={() => advance(5)} /></div>
              <div><label className="form-label">Phone</label><input type="tel" className="form-control" placeholder="+49 000 000" /></div>
            </div>
            <div className="mb-5"><label className="form-label">Email</label><input type="email" className="form-control" placeholder="you@example.com" /></div>
            <div className="mb-7"><label className="form-label">Additional Notes</label><textarea className="form-control resize-none" rows={3} placeholder="Describe your issue…" /></div>

            <button onClick={submit} className="btn-primary w-full justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
              Confirm Booking
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
