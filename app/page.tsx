import Hero from "./components/sections/Hero";
import BrandsSection from "./components/sections/BrandsSection";
import ServicesSection from "./components/sections/ServicesSection";
import BookingSection from "./components/sections/BookingSection";
import CarsSection from "./components/sections/CarsSection";
import PartsSection from "./components/sections/PartsSection";
import DiagnosticSection from "./components/sections/DiagnosticSection";
import AboutSection from "./components/sections/AboutSection";
import ReviewsSection from "./components/sections/ReviewsSection";
import FAQSection from "./components/sections/FAQSection";
import ContactSection from "./components/sections/ContactSection";
import NewsletterSection from "./components/sections/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandsSection />
      <ServicesSection />
      <BookingSection />
      <CarsSection />
      <PartsSection />
      <DiagnosticSection />
      <AboutSection />
      <ReviewsSection />
      <FAQSection />
      <ContactSection />
      <NewsletterSection />
    </>
  );
}
