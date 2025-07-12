
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bike, Truck, Fuel, Gauge, Users, Phone, Car, Package, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const quadricycles = [
    {
      id: "bajaj-qute",
      name: "Bajaj Qute Quadricycle",
      category: "Passenger Vehicle",
      price: "From P 85,000",
      engine: "217cc",
      mileage: "36 kmpl",
      power: "13.2 BHP",
      capacity: "4 Seater",
      maxSpeed: "70 kmph",
      storage: "191L",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      features: ["DTS-i Technology", "WVTA Certified", "Monocoque Body", "850L Storage (Folded)", "European Standards"],
      description: "First and last mile transportation solution with European certification"
    }
  ];

  const motorcycles = [
    {
      id: "bajaj-boxer-150",
      name: "Bajaj Boxer 150",
      category: "Commuter",
      price: "From P 15,000",
      engine: "149.5cc",
      mileage: "70 kmpl",
      power: "12 BHP",
      image: "/lovable-uploads/adcc6458-be1d-4f86-aa77-44463abb9c47.png",
      features: ["Electric Start", "Tubeless Tyres", "LED Headlamp"],
      description: "Perfect for daily commuting with excellent fuel efficiency"
    },
    {
      id: "bajaj-pulsar-150",
      name: "Bajaj Pulsar 150",
      category: "Sports",
      price: "From P 22,000",
      engine: "149.5cc",
      mileage: "50 kmpl",
      power: "14 BHP",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=500&h=300&fit=crop",
      features: ["DTS-i Engine", "Digital Console", "Split Seats"],
      description: "Sporty performance with aggressive styling"
    },
    {
      id: "bajaj-pulsar-220f",
      name: "Bajaj Pulsar 220F",
      category: "Sports",
      price: "From P 35,000",
      engine: "220cc",
      mileage: "40 kmpl",
      power: "20.4 BHP",
      image: "https://images.unsplash.com/photo-1558897515-d6f9a962d4ed?w=500&h=300&fit=crop",
      features: ["Oil Cooled Engine", "Full Fairing", "Projector Headlamp"],
      description: "Premium sports motorcycle with superior performance"
    },
    {
      id: "bajaj-discover-125",
      name: "Bajaj Discover 125",
      category: "Commuter",
      price: "From P 18,000",
      engine: "124.6cc",
      mileage: "65 kmpl",
      power: "11 BHP",
      image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=500&h=300&fit=crop",
      features: ["LED DRL", "Electric Start", "Disc Brake"],
      description: "Reliable commuter with modern features"
    },
    {
      id: "bajaj-dominar-400",
      name: "Bajaj Dominar 400",
      category: "Touring",
      price: "From P 45,000",
      engine: "373.3cc",
      mileage: "35 kmpl",
      power: "40 BHP",
      image: "https://images.unsplash.com/photo-1558897512-d0f8db7ff8d5?w=500&h=300&fit=crop",
      features: ["Liquid Cooled", "USD Forks", "LED Lighting"],
      description: "Adventure touring motorcycle for long rides"
    },
    {
      id: "bajaj-avenger-220",
      name: "Bajaj Avenger 220",
      category: "Cruiser",
      price: "From P 28,000",
      engine: "220cc",
      mileage: "45 kmpl",
      power: "19 BHP",
      image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=500&h=300&fit=crop",
      features: ["Cruiser Styling", "Comfortable Seating", "Chrome Finish"],
      description: "Classic cruiser for relaxed highway rides"
    }
  ];

  const threeWheelers = [
    {
      id: "bajaj-re-compact",
      name: "Bajaj RE Compact",
      category: "Passenger",
      price: "From P 45,000",
      engine: "198.5cc",
      capacity: "3+1 Seater",
      payload: "295 kg",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=500&h=300&fit=crop",
      features: ["Water Cooled Engine", "Front Disc Brake", "Digital Meter"],
      description: "Compact auto-rickshaw perfect for city transport"
    },
    {
      id: "bajaj-re-4s",
      name: "Bajaj RE 4S",
      category: "Passenger",
      price: "From P 55,000",
      engine: "216.6cc",
      capacity: "4+1 Seater",
      payload: "340 kg",
      image: "/lovable-uploads/bb787c09-261c-40ef-b1c1-a58286037ba0.png",
      features: ["4-Stroke Engine", "Hydraulic Shock Absorbers", "Side Doors"],
      description: "Spacious and comfortable passenger vehicle"
    },
    {
      id: "bajaj-re-maxima",
      name: "Bajaj RE Maxima",
      category: "Cargo",
      price: "From P 48,000",
      engine: "236.2cc",
      capacity: "Cargo",
      payload: "500 kg",
      image: "https://images.unsplash.com/photo-1594736797933-d0a9df08e6d3?w=500&h=300&fit=crop",
      features: ["High Payload", "Robust Chassis", "Easy Loading"],
      description: "Heavy-duty cargo carrier for business needs"
    }
  ];

  const accessories = [
    {
      id: "exterior-accessories",
      name: "Exterior Accessories",
      category: "Accessories",
      price: "From P 500",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=300&fit=crop",
      features: ["Roof Rails", "Protection Guards", "LED Upgrades", "Chrome Kits"],
      description: "Enhance your vehicle's exterior appeal and functionality"
    },
    {
      id: "interior-accessories",
      name: "Interior Accessories",
      category: "Accessories",
      price: "From P 300",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
      features: ["Seat Covers", "Floor Mats", "Dashboard Covers", "Phone Holders"],
      description: "Comfort and convenience accessories for your vehicle"
    },
    {
      id: "safety-security",
      name: "Safety & Security",
      category: "Accessories",
      price: "From P 800",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
      features: ["GPS Tracking", "Reverse Camera", "Anti-theft Alarms", "First Aid Kits"],
      description: "Advanced safety and security solutions"
    }
  ];

  const spareParts = [
    {
      id: "engine-components",
      name: "Engine Components",
      category: "Spare Parts",
      price: "From P 150",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=300&fit=crop",
      features: ["Engine Oil", "Oil Filters", "Air Filters", "Spark Plugs"],
      description: "Genuine engine parts for optimal performance"
    },
    {
      id: "electrical-components",
      name: "Electrical Components",
      category: "Spare Parts",
      price: "From P 200",
      image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=500&h=300&fit=crop",
      features: ["Batteries", "Headlights", "Wiring Harnesses", "Alternators"],
      description: "Complete electrical system components"
    },
    {
      id: "body-chassis",
      name: "Body & Chassis",
      category: "Spare Parts",
      price: "From P 400",
      image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&h=300&fit=crop",
      features: ["Bumpers", "Mirrors", "Suspension Components", "Tires"],
      description: "Body and chassis parts for structural integrity"
    }
  ];

  const QuadricycleCard = ({ product }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-primary text-white">
          {product.category}
        </Badge>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
            <CardDescription className="text-primary font-semibold text-lg">
              {product.price}
            </CardDescription>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </CardHeader>
      <CardContent>
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
            <p className="text-xs text-gray-500">Mileage</p>
            <p className="text-sm font-semibold">{product.mileage}</p>
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
        
        <div className="flex gap-2">
          <Link to="/contact" className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Get Quote
            </Button>
          </Link>
          <Link to={`/product/${product.id}`} className="flex-1">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
              Learn More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  const ProductCard = ({ product, isThreeWheeler = false }) => (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 left-3 bg-primary text-white">
          {product.category}
        </Badge>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
            <CardDescription className="text-primary font-semibold text-lg">
              {product.price}
            </CardDescription>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </CardHeader>
      <CardContent>
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
              {isThreeWheeler ? (
                <Users className="h-4 w-4 text-primary mr-1" />
              ) : (
                <Fuel className="h-4 w-4 text-primary mr-1" />
              )}
            </div>
            <p className="text-xs text-gray-500">
              {isThreeWheeler ? "Capacity" : "Mileage"}
            </p>
            <p className="text-sm font-semibold">
              {isThreeWheeler ? product.capacity : product.mileage}
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1">
              <Truck className="h-4 w-4 text-primary mr-1" />
            </div>
            <p className="text-xs text-gray-500">
              {isThreeWheeler ? "Payload" : "Power"}
            </p>
            <p className="text-sm font-semibold">
              {isThreeWheeler ? product.payload : product.power}
            </p>
          </div>
        </div>
        
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
        
        <div className="flex gap-2">
          <Link to="/contact" className="flex-1">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white">
              Get Quote
            </Button>
          </Link>
          <Link to={`/product/${product.id}`} className="flex-1">
            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
              Learn More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  const AccessoryCard = ({ product }) => (
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
            <CardDescription className="text-primary font-semibold text-lg">
              {product.price}
            </CardDescription>
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
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary backdrop-blur-sm">
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
            <Link to="/contact">
              <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Discover our complete range of vehicles, accessories, and genuine parts designed for Gaborone roads
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Quadricycles Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Car className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Quadricycles</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              European certified four-wheeler for first and last mile transportation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quadricycles.map((product, index) => (
              <QuadricycleCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* Motorcycles Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Bike className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Motorcycles</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From efficient commuters to powerful sports bikes, find the perfect motorcycle for your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {motorcycles.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* Three Wheelers Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Truck className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Three Wheelers</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              World's most trusted three-wheelers for passenger transport and cargo delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threeWheelers.map((product, index) => (
              <ProductCard key={index} product={product} isThreeWheeler={true} />
            ))}
          </div>
        </section>

        {/* Accessories Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Package className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Accessories</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your vehicle with genuine accessories for style, comfort, and safety
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accessories.map((product, index) => (
              <AccessoryCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* Spare Parts Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Wrench className="h-8 w-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Genuine Spare Parts</h2>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Original equipment parts for optimal performance and reliability
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spareParts.map((product, index) => (
              <AccessoryCard key={index} product={product} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 bg-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Bajaj?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Visit our showroom in Gaborone West Industrial to explore our complete range or get a personalized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Schedule Test Ride
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Dealer
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Products;
