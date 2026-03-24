import AboutSection from "./components/AboutSection";
import CTABanner from "./components/CTABanner";
import ContactSection from "./components/ContactSection";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Footer from "./components/Footer";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import Navbar from "./components/Navbar";
import SpecialDishes from "./components/SpecialDishes";
import TestimonialsSection from "./components/TestimonialsSection";

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0B0B0C" }}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CTABanner
          title="A Legacy of Flavour"
          subtitle="Six decades of culinary excellence, served with love"
          ctaText="Explore Our Menu"
          ctaHref="#menu"
        />
        <MenuSection />
        <SpecialDishes />
        <CTABanner
          title="Experience the Taste of Tradition"
          subtitle="Reserve your table and create memories that last a lifetime"
          ctaText="Order on WhatsApp"
          ctaHref="https://wa.me/919876543210"
          external
        />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
