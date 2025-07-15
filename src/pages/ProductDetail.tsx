
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Phone } from "lucide-react";
import ProductImageCarousel from "@/components/ProductImageCarousel";

const ProductDetail = () => {
  const { id } = useParams();

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
      colors: ["Yellow", "Red", "Green", "Black", "White", "Blue"],
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

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center text-primary hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <ProductImageCarousel images={product.images} productName={product.name} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-3">{product.category}</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
              <p className="text-xl text-gray-600 mb-4">{product.description}</p>
              <p className="text-3xl font-bold text-primary">{product.price}</p>
            </div>

            {/* Key Features */}
            <Card>
              <CardHeader>
                <CardTitle>Key Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  {product.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Colors */}
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

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="flex-1">
                <Button size="lg" className="w-full">
                  Get Quote
                </Button>
              </Link>
              <Link to="/contact" className="flex-1">
                <Button size="lg" variant="outline" className="w-full">
                  Schedule Test Drive
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">Complete Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-3 px-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-gray-900">{key}</span>
                  <span className="text-gray-600">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Warranty Info */}
        <Card className="mt-8">
          <CardContent className="py-6">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-2">Warranty Coverage</h3>
              <p className="text-gray-600">{product.warranty}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetail;
