import HeroSection from "../components/home/HeroSection";
import ServiceSection from "../components/home/ServiceSection";
import SolutionsGrid from "../components/home/SolutionsGrid";
import ProductSpotlight from "../components/home/ProductSpotlight";
import ProductCatalog from "../components/home/ProductCatalog";
import BrandsCarousel from "../components/home/BrandsCarousel";
import EnergySection from "../components/home/EnergySection";
import ContactSection from "../components/home/ContactSection";
import Footer from "../components/home/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <SolutionsGrid />
      <ProductSpotlight />
      <ProductCatalog />
      <BrandsCarousel />
      <EnergySection />
      <ContactSection />
      <Footer />
    </>
  );
}
