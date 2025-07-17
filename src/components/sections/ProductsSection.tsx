
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";

const products = [
  {
    id: "bajaj-qute",
    name: "Bajaj Qute Quadricycle",
    category: "Quadricycle",
    price: "From P 85,000",
    description: "Europe's first quadricycle designed for efficient urban transportation",
    image: "/lovable-uploads/14fd21c4-d6c7-4b63-a09d-0d1395111e7c.png",
    keyFeatures: ["217cc DTS-i Engine", "36 kmpl Fuel Efficiency", "4-Seater Capacity", "191L Storage Space"],
    badge: "Most Popular"
  },
  {
    id: "bajaj-boxer-150",
    name: "Bajaj Boxer 150",
    category: "Motorcycle",
    price: "From P 15,000",
    description: "Reliable motorcycle perfect for daily commuting",
    image: "/lovable-uploads/adcc6458-be1d-4f86-aa77-44463abb9c47.png",
    keyFeatures: ["149.5cc Engine", "70 kmpl Fuel Efficiency", "5-Speed Transmission", "Telescopic Front Fork"],
    badge: "Best Value"
  }
];

export const ProductsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Featured Products</h2>
            <p className="text-gray-600">Explore our range of reliable and efficient Bajaj motorcycles</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.2}>
              <HoverScale scale={1.03}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                        <CardDescription className="text-primary font-semibold text-lg">
                          {product.price}
                        </CardDescription>
                      </div>
                      {product.badge && (
                        <Badge className="bg-green-500 text-white">{product.badge}</Badge>
                      )}
                    </div>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="mt-4 rounded-md"
                    />
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="list-disc pl-5 text-gray-600">
                      {product.keyFeatures.map((feature, i) => (
                        <li key={i} className="text-sm">{feature}</li>
                      ))}
                    </ul>
                    <Link to={`/product/${product.id}`}>
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                        Learn More <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </HoverScale>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
