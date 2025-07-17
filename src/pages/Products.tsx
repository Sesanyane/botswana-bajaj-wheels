import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Fuel, Users, Zap, Phone, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "@/components/MobileNav";
import { ScooterLoader } from "@/components/animations/ScooterLoader";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      id: "bajaj-qute",
      name: "Bajaj Qute Quadricycle",
      category: "Quadricycle",
      price: "From P 85,000",
      description: "Europe's first quadricycle designed for efficient urban transportation",
      image: "/lovable-uploads/14fd21c4-d6c7-4b63-a09d-0d1395111e7c.png",
      keyFeatures: ["217cc DTS-i Engine", "36 kmpl Fuel Efficiency", "4-Seater Capacity", "191L Storage Space"],
      badge: "Most Popular"
    },
    {
      id: "bajaj-boxer-150",
      name: "Bajaj Boxer 150",
      category: "Motorcycle",
      price: "From P 15,000",
      description: "Reliable motorcycle perfect for daily commuting",
      image: "/lovable-uploads/adcc6458-be1d-4f86-aa77-44463abb9c47.png",
      keyFeatures: ["149.5cc Engine", "70 kmpl Fuel Efficiency", "5-Speed Transmission", "Telescopic Front Fork"],
      badge: "Best Value"
    }
  ];

  return (
    <>
      <AnimatePresence>
        {isLoading && <ScooterLoader />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
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
                <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</Link>
                <Link to="/about" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</Link>
                <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium bg-white/20 px-3 py-1 rounded">PRODUCTS</Link>
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

        {/* Header */}
        <SlideIn direction="down">
          <div className="bg-primary text-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Explore our range of Bajaj motorcycles and quadricycles available in Gaborone
                </p>
              </div>
            </div>
          </div>
        </SlideIn>

        <div className="container mx-auto px-4 py-12">
          {/* Products Section */}
          <section className="mb-16">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Zap className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Explore Our Range</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Discover the perfect Bajaj vehicle for your needs, from efficient quadricycles to reliable motorcycles
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 0.1}>
                  <HoverScale scale={1.03}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="relative">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="rounded-md w-full h-48 object-cover" 
                          />
                          {product.badge && (
                            <Badge className="absolute top-2 right-2">{product.badge}</Badge>
                          )}
                        </div>
                        <CardTitle className="text-xl text-gray-900 mt-4">{product.name}</CardTitle>
                        <CardDescription className="text-primary font-semibold text-lg">
                          {product.price}
                        </CardDescription>
                        <p className="text-gray-600 text-sm">{product.description}</p>
                      </CardHeader>
                      <CardContent>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 text-gray-600">
                          {product.keyFeatures.map((feature, index) => (
                            <li key={index} className="text-sm">{feature}</li>
                          ))}
                        </ul>
                        <Link to={`/product/${product.id}`}>
                          <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                            View Details <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Why Choose Bajaj Section */}
          <ScrollReveal>
            <section className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Fuel className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Why Choose Bajaj?</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experience the benefits of Bajaj vehicles: fuel efficiency, reliability, and affordability
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Fuel, title: "Fuel Efficiency", desc: "Save money with our fuel-efficient engines" },
                  { icon: Users, title: "Reliability", desc: "Dependable vehicles built to last" },
                  { icon: Star, title: "Affordability", desc: "Get the best value for your money" }
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <HoverScale>
                      <div className="text-center">
                        <motion.div 
                          whileHover={{ y: -5, rotate: 5 }}
                          className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <item.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </HoverScale>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal delay={0.3}>
            <HoverScale scale={1.02}>
              <section className="mt-16 bg-primary rounded-2xl p-8 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Ride?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Explore our product range and contact us today to schedule a test ride or get a quote
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <HoverScale>
                    <Link to="/contact">
                      <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                        Get a Quote
                      </Button>
                    </Link>
                  </HoverScale>
                  <HoverScale>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                        Schedule Test Ride
                      </Button>
                    </Link>
                  </HoverScale>
                </div>
              </section>
            </HoverScale>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
};

export default Products;
