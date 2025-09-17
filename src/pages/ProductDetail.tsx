import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone } from "lucide-react";
import ProductImageCarousel from "@/components/ProductImageCarousel";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "@/components/MobileNav";
import { ScooterLoader } from "@/components/animations/ScooterLoader";

// Import high-quality product images from uploads
import bajajaQuteYellow from "/lovable-uploads/5b1e45f2-144c-4cb1-ad0e-3e7999880948.png";
import bajajQuteRed from "/lovable-uploads/6d6abcda-200e-437d-9950-04dee7349156.png";
import bajajQuteInterior from "/lovable-uploads/aa464419-9ba3-4545-95f5-b14942351b60.png";
import bajajQuteBlue from "/lovable-uploads/dc01e482-351e-479d-8992-77c742b4fc49.png";

// Import new Boxer 150 color variants
import boxer150White from "@/assets/boxer-150-white.png";
import boxer150RedGraphics from "@/assets/boxer-150-red-graphics.png";
import boxer150BlackYellow from "@/assets/boxer-150-black-yellow.png";
import boxer150Blue from "@/assets/boxer-150-blue.png";
import boxer150BlackRed from "@/assets/boxer-150-black-red.png";

const ProductDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedColor, setSelectedColor] = useState(id === 'bajaj-qute' ? "Yellow" : "Cocktail Wine Red");

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
      
      description: "Europe's first quadricycle designed for efficient urban transportation",
      images: [
        bajajaQuteYellow,
        bajajQuteRed,
        bajajQuteInterior,
        bajajQuteBlue
      ],
      colorVariants: {
        "Yellow": bajajaQuteYellow,
        "Red": bajajQuteRed,
        "Green": "/lovable-uploads/59e96b62-ccb0-40ad-bf73-dec1cd1773f5.png",
        "Orange": "/lovable-uploads/9569cc90-fb47-43ce-8752-17eb27989767.png",
        "Black": "/lovable-uploads/f988bdaa-eab5-48a8-9572-c9c855f68736.png",
        "Blue": bajajQuteBlue
      },
      keyFeatures: [
        "217cc DTS-i Engine",
        "13.46 PS Power Output",
        "19.6 Nm Torque", 
        "5 Forward + 1 Reverse",
        "70 kmph Max Speed",
        "191L Storage (850L folded)",
        "36 kmpl Fuel Efficiency",
        "European WVTA Certified"
      ],
      specifications: {
        "Engine": "217cc Petrol",
        "Power": "13.46 PS",
        "Torque": "19.6 Nm",
        "Transmission": "5 Forward + 1 Reverse",
        "Max Speed": "70 kmph",
        "Kerb Weight": "399 kg",
        "Seating": "Driver + 3",
        "Storage": "191L (850L folded)",
        "Ground Clearance": "180 mm",
        "Turning Radius": "3.5 m",
        "Fuel Efficiency": "36 kmpl"
      },
      colors: ["Yellow", "Red", "Green", "Orange", "Black", "Blue"]
    },
    "bajaj-boxer-150": {
      name: "Bajaj Boxer 150",
      category: "Motorcycle", 
      
      description: "Reliable motorcycle perfect for daily commuting",
      images: [
        "/lovable-uploads/27be35c3-a415-472c-a799-9106a96853f1.png",
        "/lovable-uploads/78f73a7f-9ed0-43a3-ab86-25fa5bf8e082.png",
        "/lovable-uploads/3512316a-b32b-4050-a234-481f204277d3.png",
        "/lovable-uploads/e3a1931d-1bc5-4d5b-86db-68053cf5c48c.png",
        "/lovable-uploads/42209c07-fdb2-42e7-8c78-b825ad9faa15.png"
      ],
      colorVariants: {
        "Cocktail Wine Red": boxer150RedGraphics,
        "Arctic White": boxer150White,
        "Ebony Black": boxer150BlackYellow,
        "Ebony Black Gray": boxer150Blue,
        "Ebony Black Red": boxer150BlackRed
      },
      gallery: [
        {
          url: "/lovable-uploads/54752007-219c-40bb-bef1-cb3f0c18a928.png",
          title: "Boxer BM 150",
          description: "Detailed view of the Boxer BM 150 showing the engine and stylish design"
        },
        {
          url: "/lovable-uploads/bb26b42f-5bb6-4668-a990-07bc5c5dc7ff.png",
          title: "Engine Detail",
          description: "Close-up view of the BM 150 engine and suspension system"
        },
        {
          url: "/lovable-uploads/3d9ce1f3-2efb-48e3-bd5e-28accd8174e1.png",
          title: "Suspension System",
          description: "Detailed view of the dual-coil rear suspension with red springs"
        },
        {
          url: "/lovable-uploads/69bbfe64-d77d-43f2-8c2c-c09c14087f42.png",
          title: "Engine Assembly",
          description: "Complete view of the engine assembly and chassis design"
        },
        {
          url: "/lovable-uploads/15a663e0-7552-4d25-97e2-69fcedf74784.png",
          title: "Fuel Tank Design",
          description: "Stylish fuel tank with Boxer branding and sporty graphics"
        },
        {
          url: "/lovable-uploads/3685ca1e-1fe8-4e41-94d0-b8897b07d65e.png",
          title: "Dashboard & Controls",
          description: "Clear instrument cluster with speedometer and odometer"
        },
        {
          url: "/lovable-uploads/2493b1d5-24af-423e-b251-3270b4323062.png",
          title: "17\" Alloy Wheels",
          description: "Stylish 17-inch alloy wheels with added mud-grip and raised mud-guard"
        },
        {
          url: "/lovable-uploads/9d728dc6-acf8-4801-bc4b-7f295a311b9f.png",
          title: "Handlebar Controls",
          description: "Ergonomic handlebar setup with easy-to-reach controls"
        },
        {
          url: "/lovable-uploads/36072f51-0ad0-4d19-a9fa-53fd4e561fc4.png",
          title: "Side Profile",
          description: "Complete side view showcasing the sporty design and robust build"
        },
        {
          url: "/lovable-uploads/258247d8-616f-460a-ae45-b85fa2377c08.png",
          title: "Street Ready",
          description: "The Boxer BM 150 in its natural environment, ready for urban rides"
        },
        {
          url: "/lovable-uploads/12485d64-b46b-4347-9f03-4c06cf5bc41c.png",
          title: "Commercial Ready",
          description: "Equipped with delivery box for commercial use and business applications"
        }
      ],
      keyFeatures: [
        "144.8cc Engine",
        "12 PS @ 7500 rpm",
        "12.55 Nm @ 5000 rpm", 
        "5-Speed Transmission",
        "17\" Alloy Wheels",
        "USB Charging Port",
        "Telescopic Front Fork",
        "SNS Rear Suspension",
        "5 Years / 100,000 kms Warranty"
      ],
      specifications: {
        "Engine": "144.8cc 4-Stroke, Natural Air Cooled",
        "Power": "12 PS @ 7500 rpm", 
        "Torque": "12.55 Nm @ 5000 rpm",
        "Transmission": "5-Speed Manual",
        "Fuel Tank": "11L (2.5L Reserve)",
        "Kerb Weight": "125 kg",
        "Wheels": "17\" Alloy with Tubeless Tires",
        "Brakes": "130mm Drum Front & Rear",
        "Warranty": "5 Years / 100,000 KMs"
      },
      colors: ["Cocktail Wine Red", "Arctic White", "Ebony Black", "Ebony Black Gray", "Ebony Black Red"]
    },
    "bajaj-re4s": {
      name: "Bajaj RE4S",
      category: "Three Wheeler",
      description: "The Bajaj RE4S or Bajaj Tuk Tuk is a compact and efficient three-wheeler with a powerful petrol engine, offering excellent performance and reliability for urban commuting. It is equipped with modern features and comfortable seating, making it a popular choice for both commercial and personal use.",
      images: [
        "/lovable-uploads/e5b3b2ad-da74-4f80-9967-4acc603ce3cb.png",
        "/lovable-uploads/170b89df-f9d6-47f9-9340-dfd038b078d4.png",
        "/lovable-uploads/13b01f22-5d0c-4332-9264-78cbdcbd676c.png"
      ],
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
        },
        {
          url: "/lovable-uploads/170b89df-f9d6-47f9-9340-dfd038b078d4.png",
          title: "Side Profile",
          description: "Complete side view showcasing the RE4S design and build quality"
        },
        {
          url: "/lovable-uploads/e8a3517e-cb0f-4c3a-838d-f00d9a84f31d.png",
          title: "Engine Compartment",
          description: "Powerful and reliable petrol engine for urban performance"
        },
        {
          url: "/lovable-uploads/13b01f22-5d0c-4332-9264-78cbdcbd676c.png",
          title: "Rear Design",
          description: "Sturdy rear construction with Twin Spark branding"
        },
        {
          url: "/lovable-uploads/de6cca21-9eac-4d27-822f-f15d2fa6d8ca.png",
          title: "Driver Controls",
          description: "Intuitive driver controls and pedal system"
        }
      ],
      keyFeatures: [
        "199.5cc Petrol Engine",
        "35 kmpl Fuel Efficiency", 
        "4-Stroke Engine",
        "Hydraulic Shock Absorbers",
        "12V Electrical System",
        "MP3/Radio/USB System"
      ],
      specifications: {
        "Engine": "199.5cc Single Cylinder, Air Cooled",
        "Power": "8.1 BHP @ 6500 rpm",
        "Torque": "12.5 Nm @ 4500 rpm", 
        "Transmission": "4-Speed Manual",
        "Fuel Tank": "8.5 Liters",
        "Seating": "Driver + 3 Passengers",
        "Weight": "365 kg",
        "Ground Clearance": "155 mm"
      },
      colors: ["Red"]
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
                  <img 
                    src="/lovable-uploads/bajaj-logo-optimized.webp" 
                    alt="Bajaj Gaborone"
                    className="h-12 w-auto cursor-pointer"
                    width="120" 
                    height="48"
                    loading="lazy"
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
                {(id === 'bajaj-qute' || id === 'bajaj-boxer-150') ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <motion.img
                        key={selectedColor}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        src={(product as any).colorVariants[selectedColor]}
                        alt={`${product.name} in ${selectedColor}`}
                        className="w-full h-96 object-cover rounded-lg shadow-lg"
                      />
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full px-3 py-1"
                      >
                        <span className="text-white text-sm font-medium">{selectedColor}</span>
                      </motion.div>
                    </div>
                    
                    {/* Color Dots */}
                    <div className="flex justify-center gap-3 mt-4">
                      {product.colors.map((color, index) => (
                        <motion.button
                          key={color}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          onClick={() => setSelectedColor(color)}
                          className={`w-4 h-4 rounded-full border-2 transition-all duration-300 hover:scale-125 ${
                            selectedColor === color 
                              ? 'border-primary ring-2 ring-primary/30 shadow-lg' 
                              : 'border-gray-300 hover:border-gray-500'
                          } ${
                            color.toLowerCase().includes('red') || color.toLowerCase().includes('wine') ? 'bg-red-500' :
                            color.toLowerCase().includes('black') || color.toLowerCase().includes('ebony') ? 'bg-black' :
                            color.toLowerCase().includes('white') || color.toLowerCase().includes('arctic') ? 'bg-white border-gray-400' :
                            color.toLowerCase() === 'blue' ? 'bg-blue-500' :
                            color.toLowerCase().includes('yellow') ? 'bg-yellow-400' :
                            color.toLowerCase() === 'green' ? 'bg-green-500' :
                            color.toLowerCase() === 'orange' ? 'bg-orange-500' :
                            color.toLowerCase().includes('gray') ? 'bg-gray-600' :
                            'bg-gray-400'
                          }`}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                ) : (
                  <ProductImageCarousel images={(product as any).images} productName={(product as any).name} />
                )}
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
                  </div>
                </FadeIn>

                {/* Key Features */}
                <ScrollReveal delay={0.4}>
                  <HoverScale scale={1.02}>
                    <Card>
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
              <Card className="mt-12">
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


          {/* Gallery Section - For Boxer 150 and RE4S */}
          {(id === 'bajaj-boxer-150' || id === 'bajaj-re4s') && 'gallery' in product && (
            <ScrollReveal delay={0.8}>
              <Card className="mt-12">
                <CardHeader>
                  <CardTitle className="text-center">Detailed Gallery</CardTitle>
                  <p className="text-center text-gray-600 mt-2">
                    {id === 'bajaj-boxer-150' 
                      ? "Explore every detail of the Bajaj Boxer BM 150"
                      : "Explore every detail of the Bajaj RE4S Tuk Tuk"
                    }
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(product as any).gallery.map((item: any, index: number) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        whileHover={{ y: -5 }}
                        className="group"
                      >
                        <HoverScale scale={1.03}>
                          <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="aspect-video bg-gradient-to-br from-gray-50 to-white overflow-hidden">
                              <img
                                src={item.url}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="p-4">
                              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                              <p className="text-sm text-gray-600">{item.description}</p>
                            </div>
                          </div>
                        </HoverScale>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          )}

        </div>
      </div>
    </>
  );
};

export default ProductDetail;
