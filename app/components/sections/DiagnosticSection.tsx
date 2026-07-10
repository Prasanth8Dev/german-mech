"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const HEALTH = [
  { name: "Engine Health", pct: 92, cls: "good" },
  { name: "Battery Status", pct: 78, cls: "warn" },
  { name: "Brake Condition", pct: 85, cls: "good" },
  { name: "Transmission", pct: 96, cls: "good" },
  { name: "Tyre Pressure", pct: 45, cls: "bad" },
];

const barColor = (cls: string) =>
  cls === "good" ? "linear-gradient(to right,#2ecc71,#27ae60)"
  : cls === "warn" ? "linear-gradient(to right,#C9A84C,#9A7A2E)"
  : "linear-gradient(to right,#e74c3c,#c0392b)";

export default function DiagnosticSection() {
  const [reg, setReg] = useState("");
  const [show, setShow] = useState(false);

  const run = () => {
    if (!reg) { toast.error("Please enter a registration number."); return; }
    setShow(true);
    toast.success("Diagnostic complete. Score: 87/100");
  };

  return (
    <section id="diagnostic" className="py-24 px-[5%] bg-black relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 50%,rgba(201,168,76,.04) 0%,transparent 70%)" }} />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <div className="section-label"><span>Vehicle Health</span></div>
          <h2 className="font-playfair text-[clamp(32px,4vw,56px)] font-bold mb-4">
            Free <span className="text-gold">Diagnostics</span>
          </h2>
          <div className="gold-line" />
          <p className="text-[15px] text-white/55 max-w-[520px] leading-[1.8] mb-10">
            Enter your vehicle details for an instant health overview and maintenance recommendations.
          </p>
          <div className="bg-white/[0.02] border border-gold/10 p-12 rounded-sm">
            <div className="mb-5"><label className="form-label">Registration Number</label><input type="text" className="form-control" value={reg} onChange={(e) => setReg(e.target.value)} placeholder="e.g. M AB 1234" /></div>
            <div className="mb-5"><label className="form-label">VIN / Chassis Number</label><input type="text" className="form-control" placeholder="17-character VIN" /></div>
            <div className="mb-7"><label className="form-label">Vehicle Brand</label>
              <select className="form-control">
                {["BMW","Mercedes-Benz","Audi","Porsche"].map((b) => <option key={b}>{b}</option>)}
              </select>
            </div>
            <button onClick={run} className="btn-primary w-full justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              Run Diagnostics
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-center mb-10">
            <div className="w-[280px] h-[280px] rounded-full border-2 border-gold/10 flex items-center justify-center relative">
              <div className="absolute inset-3 rounded-full border border-gold/[0.05]" />
              <div className="absolute inset-6 rounded-full border border-dashed border-gold/[0.08]" />
              <div className="text-center">
                <div className="font-playfair text-[56px] font-bold text-gold">{show ? "87" : "—"}</div>
                <div className="text-[12px] tracking-[2px] uppercase text-gray-500">Health Score</div>
              </div>
            </div>
          </div>

          {show && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="space-y-6 mb-10">
              {HEALTH.map((h, i) => (
                <div key={h.name}>
                  <div className="flex justify-between mb-2.5">
                    <span className="text-[13px] font-medium">{h.name}</span>
                    <span className="text-[13px] font-bold text-gold">{h.pct}%</span>
                  </div>
                  <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <motion.div className="h-full rounded-full" initial={{ width: 0 }} animate={{ width: `${h.pct}%` }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 1.2, ease: "easeOut" }}
                      style={{ background: barColor(h.cls) }} />
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          <div className="grid grid-cols-2 gap-4">
            {[{icon:"⚡",label:"Live OBD Check"},{icon:"📋",label:"Service History"},{icon:"🔧",label:"Fault Codes"},{icon:"📅",label:"Next Service Date"}].map((f) => (
              <div key={f.label} className="bg-dark-2 border border-gold/[0.08] p-5 rounded-sm text-center">
                <div className="text-2xl mb-2">{f.icon}</div>
                <div className="text-[11px] tracking-[1.5px] uppercase text-gray-500">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
