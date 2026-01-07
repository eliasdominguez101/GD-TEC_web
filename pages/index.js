import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ServiceSection from '@/components/home/ServiceSection';
import SolutionsGrid from '@/components/home/SolutionsGrid';
import ProductSpotlight from '@/components/home/ProductSpotlight';
import ProductCatalog from '@/components/home/ProductCatalog';
import BrandsCarousel from '@/components/home/BrandsCarousel';
import EnergySection from '@/components/home/EnergySection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="bg-[#0a0a14]">
      <HeroSection />
      
      <ServiceSection
        tag="Servicios"
        title={<>Diseñamos sistemas <span className="font-medium">eficientes</span>, un servicio con personal calificado</>}
        description="Somos un grupo de profesionales que está en los detalles, analizamos cada aspecto de tu proyecto para brindarte la mejor solución."
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
      />

      <ServiceSection
        tag="Obras"
        title={<>Soluciones especiales para <span className="font-medium">casas en barrios cerrados</span></>}
        description="Ya sea para las áreas comunes o la comodidad de tu hogar. Soluciones para cada uso y ambiente."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        reverse
      />

      <SolutionsGrid />

      <ProductSpotlight />

      <ProductCatalog />

      <ServiceSection
        tag="Tecnología"
        title={<>Soluciones de <span className="font-medium">climatización eficiente</span> con tecnología de vanguardia</>}
        description="Sabemos de tecnología, estamos en permanente actualización con las últimas novedades del mercado."
        image="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
      />

      <EnergySection />

      <BrandsCarousel />

      <ContactSection />

      <Footer />
    </div>
  );
}
