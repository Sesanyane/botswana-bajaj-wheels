import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowLeft, Truck, Users, Fuel, Gauge, CheckCircle, Star } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";
import { ScooterLoader } from "@/components/animations/ScooterLoader";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "@/components/MobileNav";

// Import Qute images
import bajajQuteInterior from "/lovable-uploads/4751daea-1071-496f-9ec5-e36092fc6e9f.png";
import bajajQuteSeating from "/lovable-uploads/6681bb68-7bec-4e37-965a-b83f8bb5f63b.png";
import bajajQuteStorage from "/lovable-uploads/25dd41d0-1687-42bc-a8cc-86b3529aed6a.png";
import bajajQuteFeatures from "/lovable-uploads/fa7bb9a5-d403-4f3c-9a28-2b01771632ba.png";
import bajajQuteYellow from "/lovable-uploads/5b1e45f2-144c-4cb1-ad0e-3e7999880948.png";

const TukTukDetails = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const tukTukData = {
    name: "Bajaj Qute Quadricycle",
    category: "Quadricycle",
    description: "Europe's first quadricycle designed for efficient urban transportation",
    images: [bajajQuteYellow, bajajQuteInterior, bajajQuteSeating, bajajQuteStorage, bajajQuteFeatures],
    keyFeatures: [
      "217cc DTS-i Engine",
      "36 kmpl Fuel Efficiency", 
      "4-Seater Capacity",
      "191L Storage Space",
      "70 kmph Max Speed",
      "European WVTA Certified"
    ],
    specifications: {
      "Engine": "217cc Single Cylinder, Liquid Cooled",
      "Power": "13.2 BHP @ 5500 rpm",
      "Torque": "18.9 Nm @ 4000 rpm",
      "Transmission": "5-Speed Manual",
      "Fuel Tank": "8 Liters",
      "Seating": "4 Passengers",
      "Storage": "191L (850L with folded seats)",
      "Weight": "399 kg",
      "Top Speed": "70 kmph",
      "Certification": "European WVTA"
    },
    colors: ["Yellow", "Red", "Green", "Black", "White", "Blue"],
    benefits: [
      "Low operating costs",
      "Easy financing options",
      "Quick return on investment", 
      "Suitable for narrow roads",
      "Weather-resistant body",
      "Proven reliability"
    ]
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
                  <img 
                    src="/lovable-uploads/1aa16d4b-0dc9-49f4-b043-994bf0c03efd.png" 
                    alt="Bajaj Botswana"
                    className="h-12 w-auto"
                  />
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
                  <Badge className="mb-4 bg-white/20 text-white border-white/30">{tukTukData.category}</Badge>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{tukTukData.name}</h1>
                  <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                    {tukTukData.description}
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
                    <ProductImageCarousel images={tukTukData.images} productName={tukTukData.name} />
                  </div>
                </SlideIn>

                {/* Product Info */}
                <SlideIn direction="right" delay={0.2}>
                  <div className="space-y-6">
                    <FadeIn delay={0.3}>
                      <div>
                        <Badge className="mb-3">{tukTukData.category}</Badge>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">{tukTukData.name}</h1>
                        <p className="text-xl text-gray-600 mb-4">{tukTukData.description}</p>
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
                              {tukTukData.keyFeatures.map((feature, index) => (
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
                            <div className="flex gap-3">
                              {tukTukData.colors.map((color, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ scale: 0 }}
                                  whileInView={{ scale: 1 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.1, duration: 0.3 }}
                                  className="text-center"
                                >
                                  <div className={`w-8 h-8 rounded-full border-2 border-gray-300 mb-1 bg-${color.toLowerCase()}-500`} />
                                  <span className="text-xs text-gray-600">{color}</span>
                                </motion.div>
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
                        {Object.entries(tukTukData.specifications).map(([key, value], index) => (
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
                        {tukTukData.benefits.map((benefit, index) => (
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
                        src="/lovable-uploads/1aa16d4b-0dc9-49f4-b043-994bf0c03efd.png" 
                        alt="Bajaj Botswana"
                        className="h-8 w-auto"
                      />
                    </div>
                    <p className="text-blue-100 mb-4">
                      Bringing reliable mobility solutions to Botswana with world-class motorcycles and three-wheelers.
                    </p>
                  </motion.div>
                  {[
                    { title: "ABOUT US", links: [{ text: "Our Story", to: "/about" }, { text: "Commitment", to: "/about" }] },
                    { title: "CONTACT", links: [{ text: "Botswana Office", to: "#" }, { text: "+267 73103 312", to: "#" }, { text: "+267 71886633", to: "#" }] },
                    { title: "QUICK LINKS", links: [{ text: "Products", to: "/products" }, { text: "Services", to: "/services" }, { text: "Contact", to: "/contact" }] }
                  ].map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                    >
                      <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                      <ul className="space-y-2">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link to={link.to} className="text-blue-100 hover:text-white transition-colors">
                              {link.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
                <div className="border-t border-blue-800 mt-12 pt-8 text-center">
                  <p className="text-blue-100">
                    © 2024 Bajaj Botswana. All rights reserved. | Since 1948 | Present in +100 countries
                  </p>
                </div>
              </div>
            </footer>
          </ScrollReveal>
        </div>
      </AnimatePresence>
    </>
  );
};

export default TukTukDetails;