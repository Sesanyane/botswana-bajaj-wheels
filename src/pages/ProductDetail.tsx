
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone, Gauge, Fuel, Users, Truck } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();

  const productData = {
    "bajaj-qute": {
      name: "Bajaj Qute Quadricycle",
      category: "Passenger Vehicle",
      price: "From P 85,000",
      engine: "217cc",
      mileage: "36 kmpl",
      power: "13.2 BHP",
      capacity: "4 Seater",
      maxSpeed: "70 kmph",
      storage: "191L",
      mainImage: "/lovable-uploads/14fd21c4-d6c7-4b63-a09d-0d1395111e7c.png",
      description: "An idea whose time has come - Europe's first quadricycle for first and last mile transportation",
      heroTitle: "INTRODUCING QUTE - AN IDEA WHOSE TIME HAS COME",
      heroSubtitle: "Having already established itself as the most trusted three-wheeler brand in more than 25 countries, Bajaj has pushed the boundary of innovation in intra-city transportation with Qute - a compact quadricycle.",
      detailedFeatures: [
        {
          title: "BAJAJ AUTO - THE WORLD LEADER IN FIRST AND LAST MILE TRANSPORTATION",
          description: "The Bajaj RE is the most trusted 3-wheeler brand in the world. Over 58 million passengers travel in a Bajaj RE across the world every day. Sold in over 25 countries, the Bajaj RE is the most popular vehicle for first and last mile transportation. Known as Bajaj in Indonesia, Bajaj in Sri Lanka, Keke in Nigeria, Hind Tuk Tuk in Egypt, Torito in Peru and Motocarro in Mexico, the Bajaj RE is loved the world over. Providing livelihood to thousands of drivers, fleet owners, mechanics and dealers alike.",
          image: "/lovable-uploads/2cb64d5e-8870-4195-a654-0b1aca1da155.png",
          bgColor: "bg-green-500"
        },
        {
          title: "INTRODUCING QUTE - AN IDEA WHOSE TIME HAS COME",
          description: "Qute is an eco-friendly, fuel efficient and economically competitive vehicle for first and last mile transportation. What's more, it's a safe and affordable mode of transport for the commuter and provides employment for drivers and fleet owners.",
          image: "/lovable-uploads/eb6732d3-23d4-4db0-83ae-eb7134b3787e.png",
          bgColor: "bg-blue-500"
        },
        {
          title: "MAKING OF QUTE",
          description: "The Qute has been rigorously tested on multiple parameters, terrain and weather conditions in India. From the hot deserts of Rajasthan to the cold altitudes of the Himalayas, from rural roads to city traffic, Qute has been put through over 3.2 million kms of testing. These tests check for structural durability, suspension, performance, handling, efficiency and all forms of abuse. Qute is made at a state-of-the-art assembly plant that uses the latest robotics for precision manufacturing. The entire process is supervised and quality checked by expert engineers.",
          image: "/lovable-uploads/ba3a5cea-8a4a-42cd-9981-a7a66e9cd8fb.png",
          bgColor: "bg-gray-100"
        },
        {
          title: "POWERED BY WORLD-CLASS DTS-i TECHNOLOGY",
          description: "Digital Twin and Triple Spark Ignition system is a patented Bajaj Auto technology that ensures optimal combustion of air fuel mixture leading to better performance, greater efficiency and lower emissions. With an output of 13.46 Ps power and 19.6 Nm torque, Qute can surprise you with its ability to go up inclines and carry small loads.",
          image: "/lovable-uploads/dc01e482-351e-479d-8992-77c742b4fc49.png",
          bgColor: "bg-yellow-400"
        },
        {
          title: "SMART & SENSIBLE DESIGN",
          description: "Weighing at just 399 kgs, its compact dimensions makes Qute the right size to weave through traffic and park anywhere. With a turning radius of just 3.5 m, Qute is very easy to manoeuvre in dense traffic conditions. Qute has been designed with great ergonomics for both driver and passengers. The strong suspension and ergonomic seats provide great comfort for your daily commute.",
          image: "/lovable-uploads/aa464419-9ba3-4545-95f5-b14942351b60.png",
          bgColor: "bg-gray-100"
        },
        {
          title: "HIGH ON SAFETY",
          description: "Qute has a high strength, monocoque body and impact-resistant plastic closures and doors. Apart from this a hard rooftop, front and rear seat-belts and a restricted top speed of 70 kmph, provide ample safety for the occupants.",
          image: "/lovable-uploads/cde510ba-0057-4823-bec9-8e1d76d0cfe6.png",
          bgColor: "bg-gray-100"
        },
        {
          title: "SPACE. AND MORE SPACE",
          description: "Qute has ample storage space for your luggage. 191 litres, to be precise. And the options are spread all across - in the front bonnet, glove box, under the seat and rear. But wait. If you fold the rear seats, you get a whopping 850 litres of space. Over and above this there are roof rails to carry extra luggage. Whichever way you look at it, the Qute is smart, practical and incredibly multipurpose.",
          image: "/lovable-uploads/7288dbad-cbd4-420d-8285-f5449f1f046d.png",
          bgColor: "bg-red-500"
        },
        {
          title: "A TRULY VERSATILE VEHICLE",
          description: "Qute is designed for multiple use cases - Family Vehicle, Tourist Vehicle, Passenger Carrier, and School Transport. Its versatility makes it perfect for various transportation needs in urban and rural environments.",
          image: "/lovable-uploads/b896238e-1990-44d9-a2ef-bcb7815270d9.png",
          bgColor: "bg-yellow-400"
        }
      ],
      specifications: {
        "Engine Type": "4-Stroke, Single Cylinder, Liquid Cooled",
        "Displacement": "217cc",
        "Max Power": "13.2 BHP @ 5500 rpm", 
        "Max Torque": "18.9 Nm @ 4000 rpm",
        "Transmission": "5-Speed Manual",
        "Top Speed": "70 kmph",
        "Fuel Efficiency": "36 kmpl",
        "Seating Capacity": "4 Passengers",
        "Storage Space": "191L (850L with folded seats)",
        "Turning Radius": "3.5 m",
        "Kerb Weight": "399 kg",
        "Fuel Tank": "8 Liters",
        "Ground Clearance": "180 mm",
        "Body Type": "Monocoque",
        "Certification": "European WVTA Certified"
      },
      colors: ["Yellow", "Red", "Green", "Black", "White", "Blue"],
      warranty: "12 months warranty with comprehensive service support",
      globalPresence: "Available in 25+ countries worldwide"
    },
    "bajaj-boxer-150": {
      name: "Bajaj Boxer 150",
      category: "Motorcycle",
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
          image: "/lovable-uploads/a04abcf5-27ca-4a0e-921a-d05fc3b14c6b.png",
          bgColor: "bg-gray-100"
        },
        {
          title: "5-Gear Powered Engine", 
          description: "With the advanced 5-gear powered engine in Boxer 150, ride long distances without worrying about fuel expenses. The engine's gear ratios are tuned for optimal mileage.",
          image: "/lovable-uploads/a04abcf5-27ca-4a0e-921a-d05fc3b14c6b.png",
          bgColor: "bg-gray-100"
        },
        {
          title: "Telescopic Front Fork with SNS Rear Suspension",
          description: "Front forks and superior SNS rear suspension in Boxer 150 ensure you're comfortable, with the highest ground clearance to keep the engine safe over uneven terrain.",
          image: "/lovable-uploads/bd6f35ea-7612-482b-9d15-7b116ae04cd1.png",
          bgColor: "bg-gray-100"
        },
        {
          title: "Longer-Wider Seat",
          description: "Boxer 150 features an elongated, widened seat for enhanced utility on every ride.",
          image: "/lovable-uploads/bd6f35ea-7612-482b-9d15-7b116ae04cd1.png",
          bgColor: "bg-gray-100"
        },
        {
          title: "USB Charger and Gear Indicator",
          description: "Charge your phone on the go with the USB charging slot in Boxer 150 and save fuel by shifting gears at the right moment.",
          image: "/lovable-uploads/88721d32-20fd-47e4-9130-d4424967607d.png",
          bgColor: "bg-gray-100"
        },
        {
          title: "Striking 12V Headlamp",
          description: "Boxer 150 comes equipped with a striking 12V headlamp that lights up your route.",
          image: "/lovable-uploads/88721d32-20fd-47e4-9130-d4424967607d.png",
          bgColor: "bg-gray-100"
        },
        {
          title: "Alloy Wheels with Tubeless Tires",
          description: "Boxer 150 boasts large 17\" alloy wheels and tubeless tyres, offering excellent stability and a worry-free riding experience.",
          image: "/lovable-uploads/9fb3cc3f-a297-40f9-a15b-4b4977601ca7.png",
          bgColor: "bg-gray-100"
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
  const isQute = id === "bajaj-qute";

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
      <div className={`py-16 ${isQute ? 'bg-gradient-to-br from-yellow-100 to-orange-50' : 'bg-gradient-to-b from-gray-900 to-gray-800'}`}>
        <div className="container mx-auto px-4 text-center">
          <img 
            src={product.mainImage} 
            alt={product.name}
            className="mx-auto max-w-full h-auto max-h-96 object-contain"
          />
          {isQute && (product as any).heroTitle && (
            <div className="mt-8 max-w-4xl mx-auto text-gray-800">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{(product as any).heroTitle}</h2>
              <p className="text-lg leading-relaxed">{(product as any).heroSubtitle}</p>
            </div>
          )}
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
              {isQute ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <Gauge className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Engine</h3>
                    <p className="text-2xl font-bold text-primary">{product.engine}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <Fuel className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Mileage</h3>
                    <p className="text-2xl font-bold text-primary">{(product as any).mileage}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <Users className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Capacity</h3>
                    <p className="text-2xl font-bold text-primary">{(product as any).capacity}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <Truck className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">Storage</h3>
                    <p className="text-2xl font-bold text-primary">{(product as any).storage}</p>
                  </div>
                </div>
              ) : (
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
              )}
            </CardContent>
          </Card>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {isQute ? "The Complete Qute Story" : "Features"}
          </h2>
          <div className="space-y-12">
            {product.detailedFeatures.map((feature, index) => (
              <div key={index} className="relative">
                {isQute && (feature as any).bgColor ? (
                  <div className={`${(feature as any).bgColor} text-white rounded-2xl overflow-hidden`}>
                    <div className={`flex flex-col lg:flex-row items-center gap-8 p-8 md:p-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      <div className="lg:w-1/2">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-64 md:h-80 object-cover rounded-lg"
                        />
                      </div>
                      <div className="lg:w-1/2">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">{feature.title}</h3>
                        <p className="text-lg leading-relaxed opacity-95">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
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
                )}
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

        {/* Colors & Additional Info */}
        <section className="mb-16">
          <div className={`grid grid-cols-1 ${isQute ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-8`}>
            <Card>
              <CardHeader>
                <CardTitle>Available Colors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
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
            {isQute && (product as any).globalPresence && (
              <Card>
                <CardHeader>
                  <CardTitle>Global Presence</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{(product as any).globalPresence}</p>
                </CardContent>
              </Card>
            )}
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
