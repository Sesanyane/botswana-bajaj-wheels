import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, ArrowLeft, Truck, Users, Fuel, Gauge, CheckCircle, Star, Cog, Shield, Car } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";
import { ScooterLoader } from "@/components/animations/ScooterLoader";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "@/components/MobileNav";


const TukTukDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("Red");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const colorVariants = {
    "Red": {
      images: [
        "/lovable-uploads/e5b3b2ad-da74-4f80-9967-4acc603ce3cb.png",
        "/lovable-uploads/170b89df-f9d6-47f9-9340-dfd038b078d4.png",
        "/lovable-uploads/13b01f22-5d0c-4332-9264-78cbdcbd676c.png",
        "/lovable-uploads/cc8669b5-f9fc-47c9-8d80-9d5d58e7dbdc.png",
        "/lovable-uploads/2d2c0b4a-d231-4946-af9c-f12ed989862a.png"
      ],
      colorCode: "#ef4444" // red-500
    },
    "Yellow": {
      images: [
        "/lovable-uploads/687f7cfe-56a2-401e-8da0-fd33342cd237.png",
        "/lovable-uploads/170b89df-f9d6-47f9-9340-dfd038b078d4.png",
        "/lovable-uploads/13b01f22-5d0c-4332-9264-78cbdcbd676c.png",
        "/lovable-uploads/cc8669b5-f9fc-47c9-8d80-9d5d58e7dbdc.png",
        "/lovable-uploads/2d2c0b4a-d231-4946-af9c-f12ed989862a.png"
      ],
      colorCode: "#eab308" // yellow-500
    },
    "Blue": {
      images: [
        "/lovable-uploads/5e7c58f2-74f4-46c0-82a2-4f88edb11219.png",
        "/lovable-uploads/170b89df-f9d6-47f9-9340-dfd038b078d4.png",
        "/lovable-uploads/13b01f22-5d0c-4332-9264-78cbdcbd676c.png",
        "/lovable-uploads/cc8669b5-f9fc-47c9-8d80-9d5d58e7dbdc.png",
        "/lovable-uploads/2d2c0b4a-d231-4946-af9c-f12ed989862a.png"
      ],
      colorCode: "#3b82f6" // blue-500
    }
  };

  const tukTukData = {
    name: "Bajaj RE4S Auto Rickshaw",
    category: "Three Wheeler",
    description: "The Bajaj RE4S or Bajaj Tuk Tuk is a compact and efficient three-wheeler with a powerful petrol engine, offering excellent performance and reliability for urban commuting.",
    images: colorVariants[selectedColor].images,
    gallery: [
      {
        url: "/lovable-uploads/e5b3b2ad-da74-4f80-9967-4acc603ce3cb.png",
        title: "Interior Seating",
        description: "Comfortable passenger seating with modern interior design"
      },
      {
        url: "/lovable-uploads/cc8669b5-f9fc-47c9-8d80-9d5d58e7dbdc.png", 
        title: "Side Mirror",
        description: "Wide-angle side mirrors for enhanced safety and visibility"
      },
      {
        url: "/lovable-uploads/2d2c0b4a-d231-4946-af9c-f12ed989862a.png",
        title: "Wheel & Suspension",
        description: "Robust wheel design with reliable suspension system"
      },
      {
        url: "/lovable-uploads/4977b2f0-435d-45e0-a6ad-1f2a63a96438.png",
        title: "Fuel System",
        description: "Efficient fuel tank and delivery system"
      },
      {
        url: "/lovable-uploads/086898f1-e238-4fa1-b65a-cabdd2231024.png",
        title: "Rear View Mirror",
        description: "Clear rear visibility for safe maneuvering"
      },
      {
        url: "/lovable-uploads/e7482b20-708f-4830-945d-ee0e7a0cfb80.png",
        title: "Dashboard & Controls",
        description: "Modern dashboard with MP3/Radio/USB entertainment system"
      }
    ],
    keyFeatures: [
      "200cc DTS-i Engine Technology",
      "7.0 kW Power Output", 
      "17Nm Torque Performance",
      "Reinforced Steel Chassis",
      "Car-Type Comfort Seating",
      "35 kmpl Fuel Efficiency",
      "Hydraulic Shock Absorbers",
      "12V Electrical System",
      "MP3/Radio/USB System"
    ],
    advancedFeatures: [
      {
        title: "DTS-I Technology",
        description: "Powered by the 200cc DTS-i engine, the RE is powerful in performance with 7.0 kW power and 17Nm torque, making it unmatched in its ability to carry passengers and loads.",
        icon: "engine"
      },
      {
        title: "Strong Chassis",
        description: "A reinforced high-strength steel alloy chassis enhances the Re's structural rigidity, improving load-carrying ability and increasing life.",
        icon: "shield"
      },
      {
        title: "Car Type Seats", 
        description: "New car-type seats of the RE offer maximum comfort to the driver as well as the passengers. Heavy cushioning with contours helps reduce fatigue for both.",
        icon: "seat"
      }
    ],
    specifications: {
      "Engine": "200cc DTS-i Single Cylinder, Air Cooled",
      "Power": "7.0 kW @ 6500 rpm",
      "Torque": "17 Nm @ 4500 rpm", 
      "Transmission": "4-Speed Manual",
      "Fuel Tank": "8.5 Liters",
      "Seating": "Driver + 3 Passengers",
      "Weight": "365 kg",
      "Ground Clearance": "155 mm"
    },
    colors: ["Red", "Yellow", "Blue"],
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
                     {/* Main Slideshow with smooth transitions */}
                     <motion.div
                       key={selectedColor}
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.5, ease: "easeOut" }}
                     >
                       <ProductImageCarousel images={tukTukData.images} productName={tukTukData.name} />
                     </motion.div>
                     
                     {/* Color Selection Dots */}
                     <div className="flex justify-center gap-3 py-4">
                       {Object.entries(colorVariants).map(([color, variant]) => (
                         <motion.button
                           key={color}
                           onClick={() => setSelectedColor(color)}
                           className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                             selectedColor === color 
                               ? 'ring-2 ring-primary ring-offset-2 border-white shadow-lg scale-110' 
                               : 'border-gray-300 hover:scale-105'
                           }`}
                           style={{ backgroundColor: variant.colorCode }}
                           whileHover={{ scale: selectedColor === color ? 1.1 : 1.05 }}
                           whileTap={{ scale: 0.95 }}
                           title={`${color} variant`}
                         />
                       ))}
                     </div>
                     
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
                                   <div 
                                     className={`w-8 h-8 rounded-full border-2 mb-1 ${
                                       selectedColor === color ? 'border-primary ring-2 ring-primary/30' : 'border-gray-300'
                                     }`}
                                     style={{ backgroundColor: colorVariants[color]?.colorCode || '#6b7280' }}
                                   />
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

              {/* Advanced Features Section */}
              <ScrollReveal delay={0.65}>
                <HoverScale scale={1.01}>
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle className="text-2xl">Advanced Features</CardTitle>
                      <CardDescription>Premium technologies that set the RE4S apart</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {tukTukData.advancedFeatures.map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-white border border-blue-100"
                          >
                             <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center">
                               {feature.icon === "engine" && <Cog className="w-8 h-8 text-white" />}
                               {feature.icon === "shield" && <Shield className="w-8 h-8 text-white" />}
                               {feature.icon === "seat" && <Car className="w-8 h-8 text-white" />}
                             </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </ScrollReveal>

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
                          <CardTitle className="text-2xl">Why Choose RE4S Tuk Tuk?</CardTitle>
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
                        src="/lovable-uploads/bajaj-logo-optimized.webp" 
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