import BookingSection from "../components/sections/BookingSection";

export default function BookingPage() {
  return (
    <main className="pt-24" style={{ background:"#F5F6F8", minHeight:"100vh" }}>
      <div className="px-[5%] py-16" style={{ background:"#111" }}>
        <div className="section-label"><span>Online Booking</span></div>
        <h1 className="font-playfair font-bold text-white mb-4" style={{ fontSize:"clamp(32px,4vw,56px)" }}>
          Book Your <span style={{ color:"#DD0000" }}>Appointment</span>
        </h1>
        <div className="red-line" />
        <p className="text-sm leading-relaxed max-w-xl" style={{ color:"rgba(255,255,255,.55)" }}>
          Or call us directly: <a href="tel:09940155888" className="font-bold no-underline" style={{ color:"#DD0000" }}>099401 55888</a>
        </p>
      </div>
      <BookingSection />
    </main>
  );
}
