
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScooterLoader } from "@/components/animations/ScooterLoader";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyBajajSection } from "@/components/sections/WhyBajajSection";
import { Boxer150Section } from "@/components/sections/Boxer150Section";
import { HustleSection } from "@/components/sections/HustleSection";
import { TestimonialBanner } from "@/components/sections/TestimonialBanner";
import { DealerNetworkSection } from "@/components/sections/DealerNetworkSection";

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
      
      <div className="min-h-screen bg-white">
        <Navigation />
        <HeroSection />
        <WhyBajajSection />
        <Boxer150Section />
        <HustleSection />
        <TestimonialBanner />
        <DealerNetworkSection />
      </div>
    </>
  );
};

export default Index;
