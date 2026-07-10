"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Brands", href: "/#brands" },
  { label: "Services", href: "/services" },
  { label: "Luxury Cars", href: "/cars" },
  { label: "Parts", href: "/parts" },
  { label: "Hours", href: "/#hours" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-[5%] transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md h-[60px]"
            : "bg-transparent h-[72px]"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center font-rajdhani font-bold text-sm tracking-wider"
            style={{ borderColor:"#DD0000", color:"#DD0000" }}>
            GM
          </div>
          <span className="font-rajdhani font-bold text-[18px] tracking-[2px] uppercase"
            style={{ color: scrolled ? "#111" : "#fff" }}>
            <span style={{ color:"#DD0000" }}>German</span> Mechatronics
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9 list-none">
          {links.map((l) => (
            <li key={l.label}>
              <Link
                href={l.href}
                className="text-xs tracking-[1.5px] uppercase font-medium transition-colors relative group no-underline hover:text-red-600"
                style={{ color: scrolled ? "#555" : "rgba(255,255,255,.75)" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ background:"#DD0000" }} />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href="/booking"
          className="hidden lg:inline-flex btn-primary text-[11px] px-6 py-2.5 no-underline"
        >
          Book Service
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`w-6 h-[1.5px] bg-gold block transition-all ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`w-6 h-[1.5px] bg-gold block transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[1.5px] bg-gold block transition-all ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[60px] left-0 w-full bg-black/98 backdrop-blur-xl border-b border-gold/10 z-40 lg:hidden"
          >
            <ul className="list-none p-8 flex flex-col gap-6">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-white text-sm tracking-[2px] uppercase font-medium no-underline hover:text-gold transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/booking" onClick={() => setMenuOpen(false)} className="btn-primary text-[11px] inline-flex no-underline">
                  Book Service
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
