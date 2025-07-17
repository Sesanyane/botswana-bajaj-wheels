
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Palette } from "lucide-react";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "@/components/MobileNav";
import { ScooterLoader } from "@/components/animations/ScooterLoader";

const ProductDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState("Yellow");
  const { id } = useParams();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const productData = {
    "bajaj-qute": {
      name: "Bajaj Qute Quadricycle",
      category: "Quadricycle",
      price: "From P 85,000",
      description: "Europe's first quadricycle designed for efficient urban transportation",
      images: [
        "/lovable-uploads/14fd21c4-d6c7-4b63-a09d-0d1395111e7c.png",
        "/lovable-uploads/5b1e45f2-144c-4cb1-ad0e-3e7999880948.png",
        "/lovable-uploads/73018cb6-25e8-46d5-b5c3-5aff659578a8.png",
        "/lovable-uploads/6d6abcda-200e-437d-9950-04dee7349156.png",
        "/lovable-uploads/cbed80e8-405a-4d08-aded-ae7ea6c13fb7.png"
      ],
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
      colors: [
        { name: "Yellow", hex: "#FFD700", rgb: "255, 212, 0" },
        { name: "Red", hex: "#DC2626", rgb: "220, 38, 38" },
        { name: "Green", hex: "#16A34A", rgb: "22, 163, 74" },
        { name: "Black", hex: "#1F2937", rgb: "31, 41, 55" },
        { name: "White", hex: "#F9FAFB", rgb: "249, 250, 251" },
        { name: "Blue", hex: "#2563EB", rgb: "37, 99, 235" }
      ],
      warranty: "12 months comprehensive warranty"
    },
    "bajaj-boxer-150": {
      name: "Bajaj Boxer 150",
      category: "Motorcycle", 
      price: "From P 15,000",
      description: "Reliable motorcycle perfect for daily commuting",
      images: ["/lovable-uploads/adcc6458-be1d-4f86-aa77-44463abb9c47.png"],
      keyFeatures: [
        "149.5cc Engine",
        "70 kmpl Fuel Efficiency",
        "5-Speed Transmission", 
        "Telescopic Front Fork",
        "17\" Alloy Wheels",
        "USB Charging Port"
      ],
      specifications: {
        "Engine": "149.5cc Single Cylinder, Air Cooled",
        "Power": "12 BHP @ 7500 rpm", 
        "Torque": "12.8 Nm @ 4500 rpm",
        "Transmission": "5-Speed Manual",
        "Fuel Tank": "11.5 Liters",
        "Weight": "140 kg",
        "Wheels": "17\" Alloy with Tubeless Tires"
      },
      colors: [
        { name: "Red", hex: "#DC2626", rgb: "220, 38, 38" },
        { name: "Black", hex: "#1F2937", rgb: "31, 41, 55" }
      ],
      warranty: "12 months warranty for 30,000 KMs"
    }
  };

  const product = productData[id as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    );
  }

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
                <Link to="/">
                  <motion.img 
                    src="/lovable-uploads/1aa16d4b-0dc9-49f4-b043-994bf0c03efd.png" 
                    alt="Bajaj Gaborone"
                    className="h-12 w-auto hover:scale-105 transition-transform duration-200"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
                    }}
                  />
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</Link>
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

        
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <FadeIn>
            <Link to="/products" className="inline-flex items-center text-primary hover:text-blue-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <SlideIn direction="left">
              <div>
                <div 
                  className="relative"
                  style={{
                    filter: `hue-rotate(${selectedColor === 'Red' ? '0deg' : selectedColor === 'Blue' ? '240deg' : selectedColor === 'Green' ? '120deg' : selectedColor === 'Black' ? '0deg' : selectedColor === 'White' ? '0deg' : '45deg'}) saturate(${selectedColor === 'Black' ? '0%' : selectedColor === 'White' ? '20%' : '100%'}) brightness(${selectedColor === 'Black' ? '30%' : selectedColor === 'White' ? '150%' : '100%'})`,
                    transform: "perspective(1000px) rotateX(5deg) rotateY(-5deg)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                  }}
                >
                  <ProductImageCarousel images={product.images} productName={product.name} />
                </div>
              </div>
            </SlideIn>

            {/* Product Info */}
            <SlideIn direction="right" delay={0.2}>
              <div className="space-y-6">
                <FadeIn delay={0.3}>
                  <div>
                    <Badge className="mb-3">{product.category}</Badge>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
                    <p className="text-xl text-gray-600 mb-4">{product.description}</p>
                    <p className="text-3xl font-bold text-primary">{product.price}</p>
                  </div>
                </FadeIn>

                {/* Color Picker */}
                <ScrollReveal delay={0.35}>
                  <HoverScale scale={1.02}>
                    <Card style={{
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      transform: "perspective(1000px) rotateX(2deg)"
                    }}>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Palette className="w-5 h-5 mr-2" />
                          Choose Your Color
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-3">
                          {product.colors.map((color, index) => (
                            <motion.button
                              key={color.name}
                              onClick={() => setSelectedColor(color.name)}
                              className={`w-12 h-12 rounded-full border-4 transition-all duration-300 ${
                                selectedColor === color.name ? 'border-primary scale-110' : 'border-gray-300 hover:border-gray-400'
                              }`}
                              style={{ 
                                backgroundColor: color.hex,
                                boxShadow: `0 4px 12px rgba(${color.rgb}, 0.3)`
                              }}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              title={color.name}
                            />
                          ))}
                        </div>
                        <p className="mt-3 text-sm text-gray-600">
                          Selected: <span className="font-medium text-primary">{selectedColor}</span>
                        </p>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </ScrollReveal>

                {/* Key Features */}
                <ScrollReveal delay={0.4}>
                  <HoverScale scale={1.02}>
                    <Card style={{
                      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                      transform: "perspective(1000px) rotateX(2deg)"
                    }}>
                      <CardHeader>
                        <CardTitle>Key Features</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                          {product.keyFeatures.map((feature, index) => (
                            <motion.div 
                              key={index} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span className="text-sm">{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </ScrollReveal>

                {/* CTA Buttons */}
                <ScrollReveal delay={0.6}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <HoverScale className="flex-1">
                      <Link to="/contact" className="flex-1">
                        <Button size="lg" className="w-full">
                          Get Quote
                        </Button>
                      </Link>
                    </HoverScale>
                    <HoverScale className="flex-1">
                      <Link to="/contact" className="flex-1">
                        <Button size="lg" variant="outline" className="w-full">
                          Schedule Test Drive
                        </Button>
                      </Link>
                    </HoverScale>
                  </div>
                </ScrollReveal>
              </div>
            </SlideIn>
          </div>

          {/* Specifications */}
          <ScrollReveal delay={0.7}>
            <HoverScale scale={1.01}>
              <Card className="mt-12" style={{
                boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                transform: "perspective(1000px) rotateX(1deg)"
              }}>
                <CardHeader>
                  <CardTitle className="text-center">Complete Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(product.specifications).map(([key, value], index) => (
                      <motion.div 
                        key={key} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        whileHover={{ scale: 1.02 }}
                        className="flex justify-between py-3 px-4 bg-gray-50 rounded-lg"
                        style={{
                          boxShadow: "0 4px 8px rgba(0,0,0,0.05)"
                        }}
                      >
                        <span className="font-medium text-gray-900">{key}</span>
                        <span className="text-gray-600">{value}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </HoverScale>
          </ScrollReveal>

          {/* Warranty Info */}
          <ScrollReveal delay={0.8}>
            <HoverScale scale={1.02}>
              <Card className="mt-8" style={{
                boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                transform: "perspective(1000px) rotateX(2deg)"
              }}>
                <CardContent className="py-6">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold mb-2">Warranty Coverage</h3>
                    <p className="text-gray-600">{product.warranty}</p>
                  </div>
                </CardContent>
              </Card>
            </HoverScale>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
