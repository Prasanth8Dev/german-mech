"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// THREE is loaded dynamically inside useEffect to prevent SSR issues

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

    const count = 1200;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) pos[i] = (Math.random() - 0.5) * 20;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    const mat = new THREE.PointsMaterial({ color: 0xc9a84c, size: 0.04, transparent: true, opacity: 0.6 });
    const points = new THREE.Points(geo, mat);
    scene.add(points);

    for (let i = 0; i < 3; i++) {
      const rg = new THREE.TorusGeometry(2 + i * 0.8, 0.005 + i * 0.003, 8, 120);
      const rm = new THREE.MeshBasicMaterial({ color: 0xc9a84c, transparent: true, opacity: 0.08 - i * 0.02 });
      const ring = new THREE.Mesh(rg, rm);
      ring.rotation.x = Math.PI / 2 + i * 0.3;
      ring.rotation.y = i * 0.5;
      scene.add(ring);
    }

    const grid = new THREE.GridHelper(20, 20, 0xc9a84c, 0xc9a84c);
    (grid.material as { opacity: number; transparent: boolean }).opacity = 0.04;
    (grid.material as { opacity: number; transparent: boolean }).transparent = true;
    grid.position.y = -3;
    scene.add(grid);

    let mouseX = 0, mouseY = 0;
    const onMouse = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    document.addEventListener("mousemove", onMouse);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let t = 0;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.005;
      points.rotation.y = t * 0.1 + mouseX * 0.05;
      points.rotation.x = mouseY * 0.03;
      scene.children.forEach((c, i) => {
        if (c instanceof THREE.Mesh) { c.rotation.z = t * 0.05 + i * 0.1; c.rotation.y = t * 0.03; }
      });
      grid.position.z = ((t * 2) % 10) - 5;
      renderer.render(scene, camera);
    };
    animate();
    }); // end import

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  const wordVariants = {
    hidden: { y: 80, opacity: 0 },
    visible: (i: number) => ({ y: 0, opacity: 1, transition: { delay: 0.6 + i * 0.12, duration: 0.9, ease: [0.16, 1, 0.3, 1] } }),
  };

  const words = [
    { text: "German", gold: false }, { text: "Engineering.", gold: true },
    { text: "Luxury", gold: false }, { text: "Performance.", gold: false },
    { text: "Perfect", gold: false }, { text: "Maintenance.", gold: true },
  ];

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-[1]" style={{ background: "linear-gradient(135deg,rgba(0,0,0,.85) 0%,rgba(0,0,0,.4) 50%,rgba(0,0,0,.7) 100%)" }} />
      <div className="absolute inset-0 z-[2]" style={{ backgroundImage: "linear-gradient(rgba(201,168,76,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,.03) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="relative z-[3] px-[8%] max-w-[900px]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 border border-gold/40 px-5 py-2 rounded-full mb-8"
        >
          <span className="w-1.5 h-1.5 bg-gold rounded-full animate-[pulse-gold_2s_infinite]" />
          <span className="text-[11px] tracking-[3px] uppercase text-gold font-semibold">Premium Automotive Specialists</span>
        </motion.div>

        {/* Title */}
        <h1 className="font-playfair text-[clamp(42px,7vw,90px)] font-black leading-[1.05] mb-6">
          {[0, 2, 4].map((row) => (
            <span key={row} className="block overflow-hidden">
              {words.slice(row, row + 2).map((w, wi) => (
                <motion.span
                  key={w.text}
                  custom={row + wi}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={`inline-block mr-4 ${w.gold ? "text-gold" : ""}`}
                >
                  {w.text}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-[clamp(12px,1.5vw,15px)] text-white/60 tracking-[2px] uppercase mb-12"
        >
          Premium Service for{" "}
          {["BMW", "Mercedes-Benz", "Audi", "Porsche"].map((b, i) => (
            <span key={b}><span className="text-gold">{b}</span>{i < 3 ? " | " : ""}</span>
          ))}
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex gap-4 flex-wrap"
        >
          <Link href="/booking" className="btn-primary no-underline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Book Service
          </Link>
          <Link href="/cars" className="btn-secondary no-underline">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v2"/></svg>
            Explore Cars
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[3px] uppercase text-gray-500">Scroll</span>
        <div className="w-px h-[60px]" style={{ background: "linear-gradient(to bottom, #C9A84C, transparent)", animation: "scrollLine 2s infinite" }} />
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute right-[5%] bottom-20 z-[3] hidden lg:flex flex-col gap-6"
      >
        {[{ num: "15+", label: "Years Experience" }, { num: "5,000+", label: "Cars Serviced" }, { num: "98%", label: "Client Satisfaction" }].map((s) => (
          <div key={s.label} className="text-right">
            <div className="font-playfair text-3xl font-bold text-gold">{s.num}</div>
            <div className="text-[10px] tracking-[2px] uppercase text-gray-500">{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
