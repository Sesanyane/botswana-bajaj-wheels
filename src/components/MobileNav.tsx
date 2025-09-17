
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Home, Info, Package, Wrench, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: { 
      opacity: 0, 
      x: "100%",
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40
      }
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40
      }
    }
  };

  const linkVariants = {
    closed: { x: 20, opacity: 0 },
    open: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        type: "spring" as const,
        stiffness: 400,
        damping: 25
      }
    })
  };

  const menuItems = [
    { to: "/", label: "HOME", icon: Home },
    { to: "/about", label: "ABOUT", icon: Info },
    { to: "/products", label: "PRODUCTS", icon: Package },
    { to: "/accessories", label: "ACCESSORIES", icon: Package },
    { to: "/services", label: "SERVICES", icon: Wrench },
    { to: "/contact", label: "CONTACT US", icon: Mail },
  ];

  return (
    <div className="md:hidden">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMenu}
          className="text-white hover:bg-white/20 transition-all duration-200"
        >
          <motion.div
            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.div>
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu */}
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 border-l border-border z-50 shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-primary to-blue-600">
                  <img 
                    src="/lovable-uploads/bajaj-logo-optimized.webp" 
                    alt="Bajaj Botswana"
                    className="h-10 w-auto"
                    width="111" 
                    height="40"
                    loading="lazy"
                  />
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/20 rounded-full"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </motion.div>
                </div>
                
                {/* Navigation */}
                <nav className="flex flex-col flex-1 p-6 space-y-2 bg-white dark:bg-gray-900">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      custom={index}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        to={item.to}
                        className="flex items-center space-x-4 text-gray-700 hover:text-primary hover:bg-blue-50 transition-all duration-200 font-medium text-lg py-3 px-4 rounded-lg group"
                        onClick={() => setIsOpen(false)}
                      >
                        <motion.div
                          whileHover={{ rotate: 5 }}
                          className="w-6 h-6 text-primary group-hover:text-primary"
                        >
                          <item.icon className="w-6 h-6" />
                        </motion.div>
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
                
                {/* Call to Action */}
                <div className="p-6 border-t border-gray-100 bg-gray-50 dark:bg-gray-800">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
