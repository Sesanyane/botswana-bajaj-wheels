
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Gauge, Fuel, Users, Truck } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();

  const productData = {
    "bajaj-boxer-150": {
      name: "Bajaj Boxer 150",
      category: "Commuter",
      price: "From P 15,000",
      engine: "149.5cc",
      mileage: "70 kmpl",
      power: "12 BHP",
      mainImage: "/lovable-uploads/adcc6458-be1d-4f86-aa77-44463abb9c47.png",
      description: "Perfect for daily commuting with excellent fuel efficiency and reliability",
      detailedFeatures: [
        {
          title: "4-Stroke Natural Air-Cooled Engine",
          description: "Ride the Boxer 150 with utmost dependability, powered by the muscle to push forward on just about any terrain, with no hitch.",
          image: "/lovable-uploads/a04abcf5-27ca-4a0e-921a-d05fc3b14c6b.png"
        },
        {
          title: "5-Gear Powered Engine", 
          description: "With the advanced 5-gear powered engine in Boxer 150, ride long distances without worrying about fuel expenses. The engine's gear ratios are tuned for optimal mileage.",
          image: "/lovable-uploads/a04abcf5-27ca-4a0e-921a-d05fc3b14c6b.png"
        },
        {
          title: "Telescopic Front Fork with SNS Rear Suspension",
          description: "Front forks and superior SNS rear suspension in Boxer 150 ensure you're comfortable, with the highest ground clearance to keep the engine safe over uneven terrain.",
          image: "/lovable-uploads/bd6f35ea-7612-482b-9d15-7b116ae04cd1.png"
        },
        {
          title: "Longer-Wider Seat",
          description: "Boxer 150 features an elongated, widened seat for enhanced utility on every ride.",
          image: "/lovable-uploads/bd6f35ea-7612-482b-9d15-7b116ae04cd1.png"
        },
        {
          title: "USB Charger and Gear Indicator",
          description: "Charge your phone on the go with the USB charging slot in Boxer 150 and save fuel by shifting gears at the right moment.",
          image: "/lovable-uploads/88721d32-20fd-47e4-9130-d4424967607d.png"
        },
        {
          title: "Striking 12V Headlamp",
          description: "Boxer 150 comes equipped with a striking 12V headlamp that lights up your route.",
          image: "/lovable-uploads/88721d32-20fd-47e4-9130-d4424967607d.png"
        },
        {
          title: "Alloy Wheels with Tubeless Tires",
          description: "Boxer 150 boasts large 17\" alloy wheels and tubeless tyres, offering excellent stability and a worry-free riding experience.",
          image: "/lovable-uploads/9fb3cc3f-a297-40f9-a15b-4b4977601ca7.png"
        }
      ],
      specifications: {
        "Engine Type": "4-Stroke, Single Cylinder, Air Cooled",
        "Displacement": "149.5cc",
        "Max Power": "12 BHP @ 7500 rpm",
        "Max Torque": "12.8 Nm @ 4500 rpm",
        "Transmission": "5-Speed Manual",
        "Front Suspension": "Telescopic Fork",
        "Rear Suspension": "SNS (Spring in Spring)",
        "Front Brake": "Drum",
        "Rear Brake": "Drum",
        "Wheel Size": "17 inch Alloy",
        "Fuel Tank": "11.5 Liters",
        "Mileage": "70 kmpl",
        "Weight": "140 kg"
      },
      colors: ["Red", "Black"],
      warranty: "12 months warranty for 30,000 KMs"
    },
    "bajaj-re-4s": {
      name: "Bajaj RE 4S",
      category: "Passenger",
      price: "From P 55,000",
      engine: "216.6cc",
      capacity: "4+1 Seater",
      payload: "340 kg",
      mainImage: "/lovable-uploads/bb787c09-261c-40ef-b1c1-a58286037ba0.png",
      description: "Spacious and comfortable passenger vehicle with advanced features",
      detailedFeatures: [
        {
          title: "4 Stroke Engine",
          description: "Powered by the 236.2cc DTS-i engine, the Bajaj Re 4S Petrol is powerful in performance with 7.6kW power and 19.2 Nm torque, making it unmatched in its ability to carry passengers and loads.",
          image: "/lovable-uploads/bb787c09-261c-40ef-b1c1-a58286037ba0.png"
        },
        {
          title: "Ergonomically designed cabin",
          description: "The cabin of the RE is ergonomically designed to reduce driver fatigue and offer a comfortable riding experience.",
          image: "/lovable-uploads/5c6ac1e2-10fe-4f7e-8069-dd5cc326c6ee.png"
        },
        {
          title: "Muscular Scudo Design",
          description: "A Muscular Scudo Design with high-grade molded plastics makes the RE aesthetic. Dual headlamps help with better on-road visibility.",
          image: "/lovable-uploads/5c6ac1e2-10fe-4f7e-8069-dd5cc326c6ee.png"
        },
        {
          title: "Reinforced Chassis",
          description: "Bajaj RE 4S Petrol features a reinforced high-strength steel alloy chassis, enhancing structural rigidity for improved load-carrying capacity and extended durability.",
          image: "/lovable-uploads/c28c0d80-1236-4847-bead-eb51a991fc0b.png"
        },
        {
          title: "Car Type Seats",
          description: "New car type seats of the RE offer maximum comfort to driver as well as the passengers. Heavy cushioning with contours helps reduce fatigue for both.",
          image: "/lovable-uploads/c28c0d80-1236-4847-bead-eb51a991fc0b.png"
        }
      ],
      specifications: {
        "Engine Type": "4-Stroke, Single Cylinder, Water Cooled",
        "Displacement": "216.6cc",
        "Max Power": "7.6 kW @ 5500 rpm",
        "Max Torque": "19.2 Nm @ 4000 rpm",
        "Transmission": "4-Speed Manual",
        "Front Suspension": "Telescopic Fork",
        "Rear Suspension": "Leaf Spring",
        "Front Brake": "Hydraulic Disc",
        "Rear Brake": "Hydraulic Drum",
        "Passenger Capacity": "4+1",
        "Payload": "340 kg",
        "Fuel Tank": "8 Liters",
        "Mileage": "35 kmpl",
        "Kerb Weight": "410 kg"
      },
      colors: ["Blue", "Green", "Yellow"],
      warranty: "12 months warranty"
    }
  };

  const product = productData[id as keyof typeof productData];

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const isThreeWheeler = product.category === "Passenger" || product.category === "Cargo";

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
              <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium">PRODUCTS</Link>
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
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <Link to="/products" className="inline-flex items-center text-blue-200 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <Badge className="mb-3 bg-white text-primary">{product.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
              <p className="text-xl text-blue-100 mb-4">{product.description}</p>
              <p className="text-2xl font-semibold text-blue-100">{product.price}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Product Image */}
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <img 
            src={product.mainImage} 
            alt={product.name}
            className="mx-auto max-w-full h-auto max-h-96 object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Key Specs */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Key Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Gauge className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Engine</h3>
                  <p className="text-2xl font-bold text-primary">{product.engine}</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    {isThreeWheeler ? (
                      <Users className="h-8 w-8 text-primary" />
                    ) : (
                      <Fuel className="h-8 w-8 text-primary" />
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {isThreeWheeler ? "Capacity" : "Mileage"}
                  </h3>
                  <p className="text-2xl font-bold text-primary">
                    {isThreeWheeler ? (product as any).capacity : (product as any).mileage}
                  </p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-3">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {isThreeWheeler ? "Payload" : "Power"}
                  </h3>
                  <p className="text-2xl font-bold text-primary">
                    {isThreeWheeler ? (product as any).payload : (product as any).power}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Features</h2>
          <div className="space-y-12">
            {product.detailedFeatures.map((feature, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Specifications Table */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Complete Specifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-200">
                    <span className="font-medium text-gray-900">{key}</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Colors & Warranty */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Available Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <Badge key={color} variant="secondary">{color}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Warranty</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{product.warranty}</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="bg-primary text-white">
            <CardContent className="py-12">
              <h3 className="text-3xl font-bold mb-4">Interested in the {product.name}?</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Get a personalized quote or schedule a test ride at our Gaborone showroom
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                    Get Quote
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                    Schedule Test Ride
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ProductDetail;
