import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowLeft, Car, Users, Fuel, Gauge, CheckCircle, Star } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";
import { ScooterLoader } from "@/components/animations/ScooterLoader";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "@/components/MobileNav";

const QuteDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("Yellow");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const quteData = {
    name: "Bajaj Qute Quadricycle",
    category: "Quadricycle",
    description: "The Bajaj Qute is an ultra-modern quadricycle designed for urban mobility. With its efficient CNG engine and compact design, it offers an economical and eco-friendly transportation solution.",
    colorVariants: {
      "Yellow": "/lovable-uploads/5b1e45f2-144c-4cb1-ad0e-3e7999880948.png",
      "Red": "/lovable-uploads/6d6abcda-200e-437d-9950-04dee7349156.png",
      "Blue": "/lovable-uploads/dc01e482-351e-479d-8992-77c742b4fc49.png",
      "Green": "/lovable-uploads/59e96b62-ccb0-40ad-bf73-dec1cd1773f5.png",
      "Black": "/lovable-uploads/f988bdaa-eab5-48a8-9572-c9c855f68736.png"
    },
    gallery: [
      {
        url: "/lovable-uploads/4751daea-1071-496f-9ec5-e36092fc6e9f.png",
        title: "Interior View",
        description: "Spacious and comfortable interior with modern dashboard"
      },
      {
        url: "/lovable-uploads/6681bb68-7bec-4e37-965a-b83f8bb5f63b.png",
        title: "Seating Configuration",
        description: "Comfortable seating for driver plus 3 passengers"
      },
      {
        url: "/lovable-uploads/fa7bb9a5-d403-4f3c-9a28-2b01771632ba.png",
        title: "Features & Controls",
        description: "Modern features and easy-to-use controls"
      },
      {
        url: "/lovable-uploads/4077b8b6-f6fb-4324-a8a3-0e858215bc0f.png",
        title: "Yellow Variant",
        description: "Bright yellow color option for better visibility"
      },
      {
        url: "/lovable-uploads/179b63a1-0171-4c6a-8999-54e0352a1b17.png",
        title: "Blue Variant",
        description: "Elegant blue color with modern styling"
      },
      {
        url: "/lovable-uploads/d0f922d9-89a5-4c3e-84bd-23a9e693295b.png",
        title: "Detailed View",
        description: "Complete vehicle overview with all features visible"
      }
    ],
    keyFeatures: [
      "216.6cc CNG Engine",
      "35 km/kg Fuel Efficiency",
      "4-Stroke Single Cylinder",
      "191L Storage Space",
      "Hydraulic Shock Absorbers",
      "12V Electrical System"
    ],
    specifications: {
      "Engine": "216.6cc Single Cylinder, Liquid Cooled",
      "Power": "8.1 BHP @ 5500 rpm",
      "Torque": "18.9 Nm @ 4000 rpm",
      "Transmission": "5-Speed Manual",
      "Fuel Type": "CNG",
      "Fuel Tank": "37 Liters (CNG)",
      "Seating": "Driver + 3 Passengers",
      "Kerb Weight": "400 kg",
      "Ground Clearance": "180 mm",
      "Storage": "191 Liters"
    },
    colors: ["Yellow", "Red", "Blue", "Green", "Black"],
    benefits: [
      "Ultra-low running costs with CNG",
      "Zero road tax in most states",
      "Compact size for city driving",
      "Weather protection",
      "Easy parking",
      "Low maintenance costs",
      "Eco-friendly emission levels",
      "Commercial vehicle benefits"
    ]
  };

  const getCurrentImage = () => {
    return quteData.colorVariants[selectedColor] || quteData.colorVariants["Yellow"];
  };

  if (isLoading) {
    return <ScooterLoader />;
  }

  return (
    <>
      <AnimatePresence>
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
                  <Link to="/">
                    <img 
                      src="/lovable-uploads/bajaj-logo-optimized.webp" 
                      alt="Bajaj Botswana"
                      className="h-12 w-auto cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-8">
                  <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</Link>
                  <Link to="/about" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</Link>
                  <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium">PRODUCTS</Link>
                  <Link to="/accessories" className="text-white hover:text-blue-200 transition-colors font-medium">ACCESSORIES</Link>
                  <Link to="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</Link>
                  <Link to="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT US</Link>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="hidden md:block">
                    <Link to="/contact">
                      <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </Button>
                    </Link>
                  </div>
                  <MobileNav />
                </div>
              </div>
            </div>
          </motion.nav>

          {/* Header */}
          <SlideIn direction="down">
            <div className="bg-primary text-white py-8">
              <div className="container mx-auto px-4">
                <div className="flex items-center gap-4 mb-4">
                  <Link to="/products">
                    <Button variant="secondary" size="sm" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back to Products
                    </Button>
                  </Link>
                </div>
                <div className="text-center">
                  <Badge className="mb-4 bg-white/20 text-white border-white/30">{quteData.category}</Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{quteData.name}</h1>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                    {quteData.description}
                  </p>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Product Details */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                {/* Product Images */}
                <SlideIn direction="left" delay={0.1}>
                  <div className="space-y-4">
                    <ProductImageCarousel images={[getCurrentImage()]} productName={quteData.name} />
                    
                    {/* Gallery Section */}
                    <div className="mt-12">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">Gallery</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {quteData.gallery.map((item, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            whileHover={{ scale: 1.05 }}
                            className="group cursor-pointer"
                          >
                            <div className="relative overflow-hidden rounded-lg shadow-md">
                              <img
                                src={item.url}
                                alt={item.title}
                                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center text-white p-2">
                                  <h4 className="font-semibold text-sm">{item.title}</h4>
                                  <p className="text-xs mt-1">{item.description}</p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </SlideIn>

                {/* Product Info */}
                <SlideIn direction="right" delay={0.2}>
                  <div className="space-y-6">
                    <FadeIn delay={0.3}>
                      <div>
                        <Badge className="mb-3">{quteData.category}</Badge>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{quteData.name}</h1>
                        <p className="text-xl text-gray-600 mb-4">{quteData.description}</p>
                      </div>
                    </FadeIn>

                    {/* Key Features */}
                    <ScrollReveal delay={0.4}>
                      <HoverScale scale={1.02}>
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Star className="w-5 h-5 text-primary" />
                              Key Features
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid grid-cols-2 gap-3">
                              {quteData.keyFeatures.map((feature, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.1, duration: 0.5 }}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </motion.div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </HoverScale>
                    </ScrollReveal>

                    {/* Available Colors */}
                    <ScrollReveal delay={0.5}>
                      <HoverScale scale={1.02}>
                        <Card>
                          <CardHeader>
                            <CardTitle>Available Colors</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              {quteData.colors.map((color, index) => (
                                <motion.button
                                  key={color}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.1, duration: 0.5 }}
                                  onClick={() => setSelectedColor(color)}
                                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-200 w-full ${
                                    selectedColor === color 
                                      ? 'bg-primary/10 border-2 border-primary shadow-md' 
                                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                                  }`}
                                >
                                  <div className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                                    selectedColor === color ? 'border-primary ring-2 ring-primary/20' : 'border-gray-300'
                                  } ${
                                    color === 'Yellow' ? 'bg-yellow-400' :
                                    color === 'Red' ? 'bg-red-500' :
                                    color === 'Blue' ? 'bg-blue-500' :
                                    color === 'Green' ? 'bg-green-500' :
                                    color === 'Black' ? 'bg-gray-800' : 'bg-gray-400'
                                  }`} />
                                  <span className={`text-sm font-medium transition-colors duration-200 ${
                                    selectedColor === color ? 'text-primary' : 'text-gray-900'
                                  }`}>
                                    {color}
                                  </span>
                                  {selectedColor === color && (
                                    <motion.div
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="ml-auto"
                                    >
                                      <CheckCircle className="w-5 h-5 text-primary" />
                                    </motion.div>
                                  )}
                                </motion.button>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      </HoverScale>
                    </ScrollReveal>

                    {/* Action Buttons */}
                    <ScrollReveal delay={0.6}>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <HoverScale>
                          <Link to="/contact" className="flex-1">
                            <Button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3">
                              Get Quote
                            </Button>
                          </Link>
                        </HoverScale>
                        <HoverScale>
                          <Link to="/contact" className="flex-1">
                            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white px-6 py-3">
                              Schedule Test Drive
                            </Button>
                          </Link>
                        </HoverScale>
                      </div>
                    </ScrollReveal>
                  </div>
                </SlideIn>
              </div>

              {/* Complete Specifications */}
              <ScrollReveal delay={0.7}>
                <HoverScale scale={1.01}>
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="text-2xl">Complete Specifications</CardTitle>
                      <CardDescription>Detailed technical specifications</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {Object.entries(quteData.specifications).map(([key, value], index) => (
                          <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex justify-between items-center py-2 border-b border-gray-100"
                          >
                            <span className="font-medium text-gray-700">{key}</span>
                            <span className="text-gray-900">{value}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </ScrollReveal>

              {/* Benefits */}
              <ScrollReveal delay={0.8}>
                <HoverScale scale={1.01}>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Why Choose Bajaj Qute?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {quteData.benefits.map((benefit, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span>{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            </div>
          </div>

          {/* Footer */}
          <ScrollReveal>
            <footer className="bg-primary text-white py-16">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-3 mb-6">
                      <img 
                        src="/lovable-uploads/bajaj-logo-optimized.webp" 
                        alt="Bajaj Botswana"
                        className="h-12 w-auto"
                      />
                    </div>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      Your trusted partner for quality Bajaj vehicles in Botswana. Experience the perfect blend of performance, reliability, and affordability.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-blue-100">
                      <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                      <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                      <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                      <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                      <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-lg font-semibold mb-4">Products</h3>
                    <ul className="space-y-2 text-blue-100">
                      <li><Link to="/product/bajaj-qute" className="hover:text-white transition-colors">Bajaj Qute</Link></li>
                      <li><Link to="/product/bajaj-boxer-150" className="hover:text-white transition-colors">Bajaj Boxer 150</Link></li>
                      <li><Link to="/tuk-tuk-details" className="hover:text-white transition-colors">RE4S Tuk Tuk</Link></li>
                      <li><Link to="/accessories" className="hover:text-white transition-colors">Accessories</Link></li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                    <div className="text-blue-100 space-y-2">
                      <p className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        +267 123 4567
                      </p>
                      <p>Monday - Friday: 8:00 - 17:00</p>
                      <p>Saturday: 8:00 - 13:00</p>
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="border-t border-blue-300 mt-12 pt-8 text-center text-blue-200"
                >
                  <p>&copy; 2024 Bajaj Botswana. All rights reserved.</p>
                </motion.div>
              </div>
            </footer>
          </ScrollReveal>
        </div>
      </AnimatePresence>
    </>
  );
};

export default QuteDetails;