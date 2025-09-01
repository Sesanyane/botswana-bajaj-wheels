import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedHeroMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(prev => !prev);
    }, 15000); // Toggle every 15 seconds (show 15s, hide 15s)

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
          >
            <motion.span
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              className="block"
            >
              BUILT FOR BOTSWANA.
            </motion.span>
            <motion.span
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
              className="block text-blue-200"
            >
              READY FOR ANYTHING.
            </motion.span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Affordable, tough, and ready for your hustle. Experience world-class motorcycles designed for Botswana's roads.
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedHeroMessage;