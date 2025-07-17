import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, MapPin, Clock, Wrench, Shield, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "@/components/MobileNav";
import { ScooterLoader } from "@/components/animations/ScooterLoader";

const Index = () => {
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

  const services = [
    {
      title: "Regular Maintenance",
      description: "Keep your Bajaj vehicle running smoothly with our comprehensive maintenance packages",
      icon: Wrench,
      features: ["Oil Change", "Filter Replacement", "Brake Inspection", "Chain Lubrication"],
      price: "From P 150"
    },
    {
      title: "Emergency Repairs",
      description: "Quick and reliable repair services for unexpected breakdowns",
      icon: Shield,
      features: ["Engine Diagnostics", "Electrical Repairs", "Brake Service", "Emergency Roadside"],
      price: "Call for Quote"
    }
  ];

  const testimonials = [
    {
      name: "Thabo Mbeki",
      text: "Bajaj Gaborone has been instrumental in keeping my fleet running smoothly. Their service is top-notch!",
      stars: 5
    },
    {
      name: "Neo Molefe",
      text: "I bought a Bajaj Boxer 150 from them and it's been the most reliable bike I've ever owned. Highly recommended!",
      stars: 4
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

        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <SlideIn direction="left">
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">
                    Your Trusted Partner for Bajaj Motorcycles in Gaborone
                  </h1>
                  <p className="text-xl text-blue-100 mb-8">
                    Delivering quality, reliability, and exceptional service to our valued customers
                  </p>
                  <Link to="/products">
                    <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                      Explore Our Products
                    </Button>
                  </Link>
                </div>
              </SlideIn>
              <SlideIn direction="right">
                <img
                  src="/lovable-uploads/69f79593-595d-4a94-8b8c-535663306501.png"
                  alt="Bajaj Motorcycles"
                  className="rounded-lg shadow-lg"
                />
              </SlideIn>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Our Featured Products</h2>
                <p className="text-gray-600">Explore our range of reliable and efficient Bajaj motorcycles</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <ScrollReveal key={product.id} delay={index * 0.2}>
                  <HoverScale scale={1.03}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                            <CardDescription className="text-primary font-semibold text-lg">
                              {product.price}
                            </CardDescription>
                          </div>
                          {product.badge && (
                            <Badge className="bg-green-500 text-white">{product.badge}</Badge>
                          )}
                        </div>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="mt-4 rounded-md"
                        />
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <ul className="list-disc pl-5 text-gray-600">
                          {product.keyFeatures.map((feature, i) => (
                            <li key={i} className="text-sm">{feature}</li>
                          ))}
                        </ul>
                        <Link to={`/product/${product.id}`}>
                          <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
                <p className="text-gray-600">Comprehensive support and maintenance for your Bajaj vehicle</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 0.2}>
                  <HoverScale scale={1.03}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                            <CardDescription className="text-primary font-semibold text-lg">
                              {service.price}
                            </CardDescription>
                          </div>
                          <service.icon className="h-8 w-8 text-primary" />
                        </div>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </CardHeader>
                      <CardContent>
                        <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                        <ul className="list-disc pl-5 text-gray-600">
                          {service.features.map((feature, index) => (
                            <li key={index} className="text-sm">{feature}</li>
                          ))}
                        </ul>
                        <Link to="/services">
                          <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                            Learn More
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
                <p className="text-gray-600">Read testimonials from our satisfied customers</p>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.name} delay={index * 0.2}>
                  <HoverScale scale={1.02}>
                    <Card className="bg-blue-50">
                      <CardHeader>
                        <CardTitle className="text-xl text-gray-900">{testimonial.name}</CardTitle>
                        <div className="flex items-center mt-2">
                          {[...Array(testimonial.stars)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500" />
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{testimonial.text}</p>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-primary text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <SlideIn direction="left">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Us Today</h2>
                  <p className="text-xl text-blue-100 mb-8">
                    Get in touch for sales, service, or any inquiries. We're here to help!
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </SlideIn>
              <SlideIn direction="right">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-blue-100" />
                    <span>Central Business District, Gaborone</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 mr-2 text-blue-100" />
                    <span>+267 395 0000 4019</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-6 h-6 mr-2 text-blue-100" />
                    <span>Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 1:00 PM</span>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
