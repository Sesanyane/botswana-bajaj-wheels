
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MobileNav } from "@/components/MobileNav";

export const Navigation = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-primary backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/1aa16d4b-0dc9-49f4-b043-994bf0c03efd.png" 
              alt="Bajaj Gaborone"
              className="h-12 w-auto"
            />
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium bg-white/20 px-3 py-1 rounded">HOME</Link>
            <Link to="/about" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</Link>
            <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium">PRODUCTS</Link>
            <Link to="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</Link>
            <Link to="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT US</Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/contact" className="hidden md:block">
              <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </Link>
            <MobileNav />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
