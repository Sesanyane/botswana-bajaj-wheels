
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import AnimatedHero from '@/components/AnimatedHero';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Car, Wrench, Shield, Users } from 'lucide-react';

const Index = () => {
  const features = [
    {
      icon: Car,
      title: "Premium Vehicles",
      description: "High-quality Bajaj vehicles designed for African roads and conditions."
    },
    {
      icon: Wrench,
      title: "Expert Service",
      description: "Professional maintenance and repair services by certified technicians."
    },
    {
      icon: Shield,
      title: "Genuine Parts",
      description: "Only authentic Bajaj spare parts to ensure optimal performance."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Dedicated customer service and support for all your needs."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <AnimatedHero
        subtitle="Welcome to Botswana Bajaj"
        title="Drive Your Dreams"
        description="Experience the perfect blend of performance, reliability, and style with our premium Bajaj vehicles and services."
        ctaText="Explore Products"
        ctaLink="/products"
        backgroundImage="/lovable-uploads/5b1e45f2-144c-4cb1-ad0e-3e7999880948.png"
      />

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing exceptional vehicles and services that exceed your expectations.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal
                key={feature.title}
                delay={index * 0.1}
                direction="up"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="mx-auto w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4"
                      >
                        <feature.icon className="h-6 w-6 text-primary-foreground" />
                      </motion.div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 opacity-90">
                Discover our range of premium vehicles and exceptional services today.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-3"
                  asChild
                >
                  <a href="/contact">Contact Us Today</a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Index;
