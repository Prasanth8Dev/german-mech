"use client";
import toast from "react-hot-toast";
import { PARTS } from "../lib/data";

const CATS = ["All Parts","BMW Parts","Mercedes Parts","Audi Parts","Engine","Brakes","Electrical","Accessories"];

export default function PartsPage() {
  return (
    <main className="pt-24" style={{ background:"#F5F6F8", minHeight:"100vh" }}>
      {/* Header */}
      <div className="px-[5%] py-16" style={{ background:"#111" }}>
        <div className="section-label"><span>Parts Store</span></div>
        <h1 className="font-playfair font-bold text-white mb-4" style={{ fontSize:"clamp(32px,4vw,56px)" }}>
          Spare <span style={{ color:"#DD0000" }}>Parts</span>
        </h1>
        <div className="red-line" />
        <p className="text-sm leading-relaxed max-w-xl" style={{ color:"rgba(255,255,255,.55)" }}>
          Genuine OEM and certified aftermarket parts for all German vehicles. All prices in INR.
          Call <a href="tel:09940155888" className="font-bold no-underline" style={{ color:"#DD0000" }}>099401 55888</a> to check availability.
        </p>
      </div>

      <div className="px-[5%] py-12">
        {/* Category filters */}
        <div className="flex gap-2 flex-wrap mb-10">
          {CATS.map((c, i) => (
            <button key={c} className="border text-xs tracking-widest uppercase px-4 py-2 rounded-sm transition-all duration-200 font-semibold cursor-pointer"
              style={{
                borderColor: i===0 ? "#DD0000" : "#E0E0E0",
                background: i===0 ? "rgba(221,0,0,.06)" : "#fff",
                color: i===0 ? "#DD0000" : "#666"
              }}>
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PARTS.map((p, i) => (
            <div key={p.id} className="bg-white rounded-sm overflow-hidden group cursor-pointer"
              style={{ border:"1px solid #E8E8E8", boxShadow:"0 2px 10px rgba(0,0,0,.05)", transition:"all .3s" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 12px 36px rgba(0,0,0,.12)";(e.currentTarget as HTMLElement).style.transform="translateY(-3px)";(e.currentTarget as HTMLElement).style.borderColor="rgba(221,0,0,.2)";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 2px 10px rgba(0,0,0,.05)";(e.currentTarget as HTMLElement).style.transform="translateY(0)";(e.currentTarget as HTMLElement).style.borderColor="#E8E8E8";}}>
              {/* Image area */}
              <div className="h-[120px] flex items-center justify-center text-5xl" style={{ background:"#F8F8F8", opacity:.6 }}>
                {p.emoji}
              </div>
              <div className="p-5">
                <div className="text-[10px] tracking-[2px] uppercase font-semibold mb-1.5" style={{ color:"#DD0000" }}>{p.brand}</div>
                <div className="text-[15px] font-semibold mb-1" style={{ color:"#111" }}>{p.name}</div>
                <div className="text-xs mb-4" style={{ color:"#999" }}>OEM: {p.oem}</div>
                <div className="flex items-center justify-between">
                  <div className="font-playfair text-xl font-bold" style={{ color:"#DD0000" }}>{p.price}</div>
                  <button onClick={() => toast.success("Enquiry sent! We'll call you.")}
                    className="text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-sm text-white border-0 cursor-pointer transition-all duration-200"
                    style={{ background:"linear-gradient(135deg,#DD0000,#AA0000)" }}
                    onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.boxShadow="0 4px 16px rgba(221,0,0,.4)";}}
                    onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.boxShadow="none";}}>
                    Enquire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
