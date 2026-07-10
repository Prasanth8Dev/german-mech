"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const LINEUP = [
  { src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80", label: "BMW 5 Series" },
  { src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80", label: "Mercedes C-Class" },
  { src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80", label: "Audi Q7" },
  { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", label: "Porsche 911" },
  { src: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=600&q=80", label: "BMW X5" },
  { src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&q=80", label: "Mercedes E-Class" },
  // duplicated for seamless loop
  { src: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80", label: "BMW 5 Series" },
  { src: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80", label: "Mercedes C-Class" },
  { src: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80", label: "Audi Q7" },
  { src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80", label: "Porsche 911" },
  { src: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=600&q=80", label: "BMW X5" },
  { src: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=600&q=80", label: "Mercedes E-Class" },
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let rafId: number;

    import("three").then((THREE) => {
      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(window.innerWidth, window.innerHeight);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
      camera.position.set(0, 0, 5);

      const count = 1000;
      const pos = new Float32Array(count * 3);
      for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 20;
      const geo = new THREE.BufferGeometry();
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ color: 0xDD0000, size: 0.035, transparent: true, opacity: 0.4 });
      const points = new THREE.Points(geo, mat);
      scene.add(points);

      const pos2 = new Float32Array(400 * 3);
      for (let i = 0; i < 400 * 3; i++) pos2[i] = (Math.random() - 0.5) * 20;
      const geo2 = new THREE.BufferGeometry();
      geo2.setAttribute("position", new THREE.BufferAttribute(pos2, 3));
      const mat2 = new THREE.PointsMaterial({ color: 0xFFCE00, size: 0.025, transparent: true, opacity: 0.25 });
      scene.add(new THREE.Points(geo2, mat2));

      for (let i = 0; i < 3; i++) {
        const rg = new THREE.TorusGeometry(2 + i * 0.8, 0.004, 8, 120);
        const rm = new THREE.MeshBasicMaterial({ color: 0xDD0000, transparent: true, opacity: 0.05 - i * 0.01 });
        const ring = new THREE.Mesh(rg, rm);
        ring.rotation.x = Math.PI / 2 + i * 0.3;
        scene.add(ring);
      }

      let mouseX = 0, mouseY = 0;
      const onMouse = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      };
      window.addEventListener("mousemove", onMouse);
      window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });

      let t = 0;
      const animate = () => {
        rafId = requestAnimationFrame(animate);
        t += 0.004;
        points.rotation.y = t * 0.08 + mouseX * 0.03;
        points.rotation.x = mouseY * 0.02;
        scene.children.forEach((c, i) => {
          if (c instanceof THREE.Mesh) { c.rotation.z = t * 0.03 + i * 0.1; }
        });
        renderer.render(scene, camera);
      };
      animate();
    });

    return () => { cancelAnimationFrame(rafId); };
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ background: "linear-gradient(135deg,#0a0a0a 0%,#1a0000 60%,#0a0a0a 100%)" }}>
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />

        {/* Grid overlay */}
        <div className="absolute inset-0 z-[1]"
          style={{ backgroundImage: "linear-gradient(rgba(221,0,0,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(221,0,0,.04) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        {/* Content */}
        <div className="relative z-[3] px-[6%] pt-28 pb-12 max-w-[860px]">
          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:.2, duration:.8 }}
            className="inline-flex items-center gap-2 border px-5 py-2 rounded-full mb-8"
            style={{ borderColor:"rgba(221,0,0,.4)" }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background:"#DD0000", animation:"pulse-red 2s infinite" }} />
            <span className="text-[11px] tracking-[3px] uppercase font-semibold" style={{ color:"#DD0000" }}>
              Chennai's Premier German Car Specialists
            </span>
          </motion.div>

          <h1 className="font-playfair font-black leading-[1.05] text-white mb-6"
            style={{ fontSize:"clamp(40px,6.5vw,86px)" }}>
            {[
              { text:"German", gold:false }, { text:"Engineering.", red:true },
              { text:"Luxury", gold:false }, { text:"Performance.", gold:false },
              { text:"Perfect", gold:false }, { text:"Maintenance.", gold:true },
            ].reduce<React.ReactNode[][]>((rows, w, i) => {
              const rowIdx = Math.floor(i / 2);
              if (!rows[rowIdx]) rows[rowIdx] = [];
              rows[rowIdx].push(
                <motion.span key={w.text} initial={{ y:80, opacity:0 }}
                  animate={{ y:0, opacity:1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.9, ease:[0.16,1,0.3,1] }}
                  className="inline-block mr-3"
                  style={{ color: w.red ? "#DD0000" : w.gold ? "#FFCE00" : "#fff" }}>
                  {w.text}
                </motion.span>
              );
              return rows;
            }, []).map((row, i) => <span key={i} className="block overflow-hidden">{row}</span>)}
          </h1>

          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.2, duration:.8 }}
            className="text-sm tracking-[2px] uppercase mb-10" style={{ color:"rgba(255,255,255,.55)" }}>
            Premium Service for{" "}
            {["BMW","Mercedes-Benz","Audi","Porsche"].map((b,i) => (
              <span key={b}><span style={{ color:"#DD0000" }}>{b}</span>{i<3?" | ":""}</span>
            ))}
          </motion.p>

          <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.4 }}
            className="flex gap-4 flex-wrap">
            <Link href="/booking" className="btn-primary no-underline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Book Service
            </Link>
            <Link href="/cars" className="no-underline inline-flex items-center gap-2 font-bold text-xs tracking-widest uppercase px-8 py-4 rounded-sm border transition-all duration-300"
              style={{ borderColor:"rgba(255,255,255,.25)", color:"#fff" }}
              onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.borderColor="#DD0000";(e.currentTarget as HTMLElement).style.color="#DD0000";}}
              onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.borderColor="rgba(255,255,255,.25)";(e.currentTarget as HTMLElement).style.color="#fff";}}>
              Browse Cars →
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.8 }}
            className="flex gap-10 mt-14 flex-wrap">
            {[{n:"4.7★",l:"Google Rating"},{n:"88+",l:"Reviews"},{n:"10+",l:"Years in Chennai"},{n:"099401 55888",l:"Call Us Now"}].map(s=>(
              <div key={s.l}>
                <div className="font-playfair text-2xl font-bold" style={{ color:"#DD0000" }}>{s.n}</div>
                <div className="text-[10px] tracking-[2px] uppercase" style={{ color:"rgba(255,255,255,.45)" }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2.2 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[3px] uppercase" style={{ color:"rgba(255,255,255,.35)" }}>Scroll</span>
          <div className="w-px h-12" style={{ background:"linear-gradient(to bottom,#DD0000,transparent)", animation:"scrollLine 2s infinite" }} />
        </motion.div>
      </section>

      {/* ── CAR LINEUP STRIP ── */}
      <section className="py-14 overflow-hidden" style={{ background:"#111" }}>
        <div className="text-center mb-8">
          <p className="text-[11px] tracking-[4px] uppercase font-semibold" style={{ color:"#DD0000" }}>
            Luxury Cars Available Now
          </p>
        </div>

        {/* Infinite scroll strip */}
        <div className="relative overflow-hidden">
          <div className="flex gap-4"
            style={{ animation:"carSlide 28s linear infinite", width:"max-content" }}>
            {LINEUP.map((car, i) => (
              <div key={i} className="relative flex-shrink-0 rounded-sm overflow-hidden group cursor-pointer"
                style={{ width:320, height:200, border:"1px solid rgba(221,0,0,.15)" }}>
                <img src={car.src} alt={car.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter:"brightness(.85)" }}/>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white text-sm font-semibold tracking-wider">{car.label}</span>
                </div>
                {/* Red bottom bar */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-400"
                  style={{ background:"#DD0000" }} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/cars" className="btn-primary no-underline text-[11px]">
            View All Cars →
          </Link>
        </div>
      </section>
    </>
  );
}
