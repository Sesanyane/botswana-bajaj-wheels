
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 }
  };

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="text-white hover:bg-white/20"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-80 bg-primary z-50 shadow-xl"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-white/20">
                  <img 
                    src="/lovable-uploads/1aa16d4b-0dc9-49f4-b043-994bf0c03efd.png" 
                    alt="Bajaj Gaborone"
                    className="h-8 w-auto"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/20"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>
                
                <nav className="flex flex-col flex-1 p-6 space-y-6">
                  <Link 
                    to="/" 
                    className="text-white hover:text-blue-200 transition-colors font-medium text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    HOME
                  </Link>
                  <Link 
                    to="/about" 
                    className="text-white hover:text-blue-200 transition-colors font-medium text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    ABOUT
                  </Link>
                  <Link 
                    to="/products" 
                    className="text-white hover:text-blue-200 transition-colors font-medium text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    PRODUCTS
                  </Link>
                  <Link 
                    to="/services" 
                    className="text-white hover:text-blue-200 transition-colors font-medium text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    SERVICES
                  </Link>
                  <Link 
                    to="/contact" 
                    className="text-white hover:text-blue-200 transition-colors font-medium text-lg py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    CONTACT US
                  </Link>
                  
                  <div className="pt-6 border-t border-white/20">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-white text-primary hover:bg-blue-50">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
