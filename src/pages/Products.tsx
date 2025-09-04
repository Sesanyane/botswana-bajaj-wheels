import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bike, Truck, Fuel, Gauge, Users, Phone, Car, Package, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";
import { motion } from "framer-motion";

// Import high-quality product images from uploads
import bajajaQuteYellow from "/lovable-uploads/4077b8b6-f6fb-4324-a8a3-0e858215bc0f.png";
import bajajQuteBlue from "/lovable-uploads/179b63a1-0171-4c6a-8999-54e0352a1b17.png";
import bajajQuteBlueWithParts from "/lovable-uploads/d0f922d9-89a5-4c3e-84bd-23a9e693295b.png";
import bajajBoxer150Black from "/lovable-uploads/634473d2-626e-48be-a6fe-974c5ddb6f5f.png";
import motorcycleHelmets from "/lovable-uploads/d6fda7d5-9fb4-4478-97e4-442fb77efb31.png";
import ridingJackets from "/lovable-uploads/e3323c21-df89-47ef-a6ca-1f2957253817.png";
import ridingGlovesGear from "/lovable-uploads/5063b4d3-be53-4fdf-92f3-fec884781202.png";
import engineComponents from "/lovable-uploads/b896238e-1990-44d9-a2ef-bcb7815270d9.png";
import electricalComponents from "/lovable-uploads/73018cb6-25e8-46d5-b5c3-5aff659578a8.png";
import bodyChassisParts from "/lovable-uploads/eb6732d3-23d4-4db0-83ae-eb7134b3787e.png";

const Products = () => {
  // Combined vehicles array including all transportation options
  const vehicles = [
    {
      id: "bajaj-qute",
      name: "Bajaj Qute Quadricycle",
      category: "Quadricycle",
      engine: "217cc",
      mileage: "36 kmpl",
      fuelRange: "300+ km range on full tank",
      power: "13.2 BHP",
      capacity: "4 Seater",
      maxSpeed: "70 kmph",
      storage: "191L",
      image: bajajaQuteYellow,
      gallery: [
        bajajaQuteYellow,
        bajajQuteBlue,
        bajajQuteBlueWithParts
      ],
      features: ["DTS-i Technology", "WVTA Certified", "Monocoque Body", "850L Storage (Folded)", "European Standards"],
      description: "First and last mile transportation solution with European certification and advanced manufacturing quality"
    },
    {
      id: "bajaj-boxer-150",
      name: "Bajaj Boxer 150",
      category: "Motorcycle",
      engine: "149.5cc",
      mileage: "70 kmpl",
      fuelRange: "450+ km range on full tank",
      power: "12 BHP",
      image: "/lovable-uploads/634473d2-626e-48be-a6fe-974c5ddb6f5f.png",
      gallery: [
        "/lovable-uploads/634473d2-626e-48be-a6fe-974c5ddb6f5f.png", // Black Boxer 150
        "/lovable-uploads/adcc6458-be1d-4f86-aa77-44463abb9c47.png", // Red Boxer 150  
        "/lovable-uploads/bd6f35ea-7612-482b-9d15-7b116ae04cd1.png"  // Another variant
      ],
      colors: ["Black", "Red", "Silver"],
      features: ["Electric Start", "Tubeless Tyres", "LED Headlamp", "DTS-i Technology"],
      description: "Perfect for daily commuting with excellent fuel efficiency"
    },
    {
      id: "bajaj-tuk-tuk",
      name: "Bajaj RE Auto Rickshaw (Tuk Tuk)",
      category: "Three Wheeler",
      engine: "236cc",
      mileage: "35-40 kmpl",
      fuelRange: "300+ km range on full tank",
      power: "8.1 BHP",
      image: "/lovable-uploads/50d089c2-f609-4d5e-84ac-903a3177f409.png",
      features: ["Compact Design", "High Fuel Efficiency", "Low Maintenance", "Weather Protection"],
      description: "Perfect commercial vehicle for passenger transport and last-mile connectivity"
    }
  ];

  const riderGear = [
    {
      id: "helmets",
      name: "Protective Helmets",
      category: "Rider Gear",
      image: motorcycleHelmets,
      features: ["ISI Certified", "Multiple Sizes", "Ventilation System", "Anti-fog Visor"],
      description: "Premium safety helmets for motorcycle riders"
    },
    {
      id: "riding-jackets",
      name: "Riding Jackets",
      category: "Rider Gear",
      image: ridingJackets,
      features: ["Weather Resistant", "Protective Padding", "Reflective Strips", "Multiple Pockets"],
      description: "Durable and comfortable riding jackets"
    },
    {
      id: "gloves-gear",
      name: "Riding Gloves & Gear",
      category: "Rider Gear",
      image: ridingGlovesGear,
      features: ["Grip Enhancement", "Knuckle Protection", "Breathable Material", "Knee Pads"],
      description: "Essential protective gear for safe riding"
    }
  ];

  const spareParts = [
    {
      id: "engine-components",
      name: "Engine Components",
      category: "Spare Parts",
      image: engineComponents,
      features: ["Engine Oil", "Oil Filters", "Air Filters", "Spark Plugs"],
      description: "Genuine engine parts for optimal performance"
    },
    {
      id: "electrical-components",
      name: "Electrical Components",
      category: "Spare Parts",
      image: electricalComponents,
      features: ["Batteries", "Headlights", "Wiring Harnesses", "Alternators"],
      description: "Complete electrical system components"
    },
    {
      id: "body-chassis",
      name: "Body & Chassis",
      category: "Spare Parts",
      image: bodyChassisParts,
      features: ["Bumpers", "Mirrors", "Suspension Components", "Tires"],
      description: "Body and chassis parts for structural integrity"
    }
  ];

  // Unified VehicleCard component to handle all vehicle types
  const VehicleCard = ({ product }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Determine if this is a tuk tuk for routing
    const isThreeWheeler = product.category === "Three Wheeler";
    
    // Determine grid layout based on vehicle type
    const isQuadricycle = product.category === "Quadricycle";
    
    return (
      <HoverScale scale={1.03}>
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <div className="relative overflow-hidden">
            <img 
              src={product.gallery ? product.gallery[currentImageIndex] : product.image} 
              alt={product.name}
              className={`w-full object-cover group-hover:scale-105 transition-transform duration-300 ${
                isQuadricycle ? 'h-64' : 'h-48'
              }`}
            />
            <Badge className="absolute top-3 left-3 bg-primary text-white">
              {product.category}
            </Badge>
            {product.gallery && (
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2">
                {product.gallery.map((_, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
              </div>
            </div>
            <p className="text-gray-600 text-sm">{product.description}</p>
          </CardHeader>
          <CardContent>
            {/* Adaptive grid based on vehicle type */}
            {isQuadricycle ? (
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Gauge className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <p className="text-xs text-gray-500">Engine</p>
                  <p className="text-sm font-semibold">{product.engine}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Fuel className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <p className="text-xs text-gray-500">Fuel Range</p>
                  <p className="text-sm font-semibold">{product.fuelRange}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <p className="text-xs text-gray-500">Capacity</p>
                  <p className="text-sm font-semibold">{product.capacity}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Truck className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <p className="text-xs text-gray-500">Storage</p>
                  <p className="text-sm font-semibold">{product.storage}</p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Gauge className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <p className="text-xs text-gray-500">Engine</p>
                  <p className="text-sm font-semibold">{product.engine}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Fuel className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <p className="text-xs text-gray-500">Fuel Range</p>
                  <p className="text-sm font-semibold">{product.fuelRange}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Truck className="h-4 w-4 text-primary mr-1" />
                  </div>
                  <p className="text-xs text-gray-500">Power</p>
                  <p className="text-sm font-semibold">{product.power}</p>
                </div>
              </div>
            )}
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
              <div className="flex flex-wrap gap-1">
                {product.features.map((feature, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
            
            {/* Color Showcase for vehicles with color options */}
            {product.colors && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Colors:</h4>
                <div className="flex gap-2">
                  {product.colors.map((color, index) => (
                    <div key={color} className="flex items-center space-x-2">
                      <div className={`w-4 h-4 rounded-full border border-gray-300 ${
                        color.toLowerCase() === 'red' ? 'bg-red-500' :
                        color.toLowerCase() === 'black' ? 'bg-black' :
                        color.toLowerCase() === 'silver' ? 'bg-gray-300' :
                        color.toLowerCase() === 'blue' ? 'bg-blue-500' :
                        'bg-gray-400'
                      }`}></div>
                      <span className="text-xs text-gray-600">{color}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex gap-2">
              <Link to="/contact" className="flex-1">
                <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                  Get Quote
                </Button>
              </Link>
              <Link to={isThreeWheeler ? "/tuk-tuk-details" : `/product/${product.id}`} className="flex-1">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </HoverScale>
    );
  };

  const AccessoryCard = ({ product }) => (
    <HoverScale scale={1.03}>
      <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Badge className="absolute top-3 left-3 bg-secondary text-primary">
            {product.category}
          </Badge>
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
            </div>
          </div>
          <p className="text-gray-600 text-sm">{product.description}</p>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Includes:</h4>
            <div className="flex flex-wrap gap-1">
              {product.features.map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-2">
            <Link to="/contact" className="flex-1">
              <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                Order Now
              </Button>
            </Link>
            <Link to="/contact" className="flex-1">
              <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                Get Info
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </HoverScale>
  );

  return (
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
              <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium bg-white/20 px-3 py-1 rounded">PRODUCTS</Link>
              <Link to="/accessories" className="text-white hover:text-blue-200 transition-colors font-medium">ACCESSORIES</Link>
              <Link to="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</Link>
              <Link to="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT US</Link>
            </div>
            <Link to="/contact">
              <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </Link>
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
                🚗 All Vehicles • 🛠️ Genuine Spare Parts • 🧤 Rider Gear
              </p>
            </div>
          </div>
        </div>
      </SlideIn>

      <div className="container mx-auto px-4 py-12">
        {/* Vehicles Section - All Transportation Options */}
        <section className="mb-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Car className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vehicles</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Complete range of Bajaj vehicles - from quadricycles to motorcycles and three-wheelers
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vehicles.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <VehicleCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Rider Gear Section */}
        <section className="mb-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Package className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">🧤 Rider Gear</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Premium protective gear and accessories for safe and comfortable riding
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {riderGear.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <AccessoryCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Spare Parts Section */}
        <section className="mb-16">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <Wrench className="h-8 w-8 text-primary mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Genuine Spare Parts</h2>
              </div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Original equipment parts for optimal performance and reliability
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spareParts.map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <AccessoryCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <ScrollReveal>
          <HoverScale scale={1.02}>
            <section className="mt-16 bg-primary rounded-2xl p-8 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Experience Bajaj?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Visit our showroom in Botswana to explore our complete range or get a personalized quote
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HoverScale>
                  <Link to="/contact">
                    <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                      Schedule Test Ride
                    </Button>
                  </Link>
                </HoverScale>
                <HoverScale>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                      Contact Dealer
                    </Button>
                  </Link>
                </HoverScale>
              </div>
            </section>
          </HoverScale>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Products;
