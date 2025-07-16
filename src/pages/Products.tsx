
import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Car, Wrench, Shirt, Package } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'qute',
      title: 'Qute Quadricycle',
      description: 'The world\'s most fuel-efficient quadricycle, perfect for urban mobility and commercial use.',
      image: '/lovable-uploads/5b1e45f2-144c-4cb1-ad0e-3e7999880948.png',
      icon: Car,
      features: ['Fuel Efficient', 'Compact Design', 'Commercial Ready', 'Safe & Reliable']
    },
    {
      id: 'boxer',
      title: 'Boxer 150',
      description: 'Powerful and reliable motorcycle designed for both urban commuting and long-distance travel.',
      image: '/lovable-uploads/6d6abcda-200e-437d-9950-04dee7349156.png',
      icon: Car,
      features: ['150cc Engine', 'Fuel Efficient', 'Comfortable Ride', 'Durable Build']
    },
    {
      id: 'parts',
      title: 'Genuine Spare Parts',
      description: 'Authentic Bajaj spare parts to keep your vehicle running at peak performance.',
      image: '/lovable-uploads/73018cb6-25e8-46d5-b5c3-5aff659578a8.png',
      icon: Wrench,
      features: ['100% Genuine', 'Quality Assured', 'Wide Range', 'Expert Installation']
    },
    {
      id: 'gear',
      title: 'Rider Gear',
      description: 'Premium safety gear and accessories for the ultimate riding experience.',
      image: '/lovable-uploads/cbed80e8-405a-4d08-aded-ae7ea6c13fb7.png',
      icon: Shirt,
      features: ['Safety First', 'Comfort Designed', 'Durable Materials', 'Stylish Look']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        ease: "easeOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block p-3 bg-primary/20 rounded-full mb-6"
              >
                <Package className="h-8 w-8 text-primary" />
              </motion.div>
              <h1 className="text-5xl font-bold mb-6">Our Products</h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our comprehensive range of premium vehicles, genuine parts, and accessories designed for excellence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-64 object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <div className="flex flex-wrap gap-2">
                        {product.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="p-2 bg-primary/20 rounded-lg"
                      >
                        <product.icon className="h-5 w-5 text-primary" />
                      </motion.div>
                      <CardTitle className="text-2xl">{product.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        className="w-full" 
                        size="lg"
                        asChild
                      >
                        <Link to={`/product/${product.id}`}>
                          Learn More
                        </Link>
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <ScrollReveal>
        <section className="py-16 bg-muted/50">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our experts are here to help you find the perfect product for your needs.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" asChild>
                  <Link to="/contact">Contact Our Experts</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
};

export default Products;
