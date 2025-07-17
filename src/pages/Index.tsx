
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScooterLoader } from "@/components/animations/ScooterLoader";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <ScooterLoader />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <HeroSection />
        <ProductsSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Index;
