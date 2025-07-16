
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface AnimatedHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
}

const AnimatedHero = ({ 
  title, 
  subtitle, 
  description, 
  ctaText = "Learn More",
  ctaLink = "#",
  backgroundImage 
}: AnimatedHeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={backgroundImage}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      )}
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-lg font-medium tracking-wider uppercase"
          >
            {subtitle}
          </motion.h2>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            {title}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed"
          >
            {description}
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="pt-4"
          >
            <Button
              size="lg"
              className="group"
              asChild
            >
              <a href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AnimatedHero;
