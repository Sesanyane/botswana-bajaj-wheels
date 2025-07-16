
import { motion } from "framer-motion";

export const ScooterLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-primary/90 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="relative">
        {/* Scooter SVG Animation */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <svg
            width="120"
            height="80"
            viewBox="0 0 120 80"
            fill="none"
            className="text-white"
          >
            {/* Scooter Body */}
            <motion.path
              d="M20 40 L80 40 L85 30 L90 30 L95 40 L100 40"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            
            {/* Front Wheel */}
            <motion.circle
              cx="90"
              cy="50"
              r="12"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "loop" }}
            />
            
            {/* Back Wheel */}
            <motion.circle
              cx="30"
              cy="50"
              r="12"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              initial={{ scale: 0, rotate: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ duration: 1, delay: 1.2, repeat: Infinity, repeatType: "loop" }}
            />
            
            {/* Handlebar */}
            <motion.path
              d="M85 30 L85 25 L80 25 M85 25 L90 25"
              stroke="currentColor"
              strokeWidth="2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            />
          </svg>
        </motion.div>
        
        {/* Loading Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center mt-6"
        >
          <h3 className="text-white text-xl font-bold mb-2">Bajaj Gaborone</h3>
          <div className="flex justify-center space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-white rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
