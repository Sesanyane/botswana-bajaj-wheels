
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Wrench, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";

const services = [
  {
    title: "Regular Maintenance",
    description: "Keep your Bajaj vehicle running smoothly with our comprehensive maintenance packages",
    icon: Wrench,
    features: ["Oil Change", "Filter Replacement", "Brake Inspection", "Chain Lubrication"],
    price: "From P 150"
  },
  {
    title: "Emergency Repairs",
    description: "Quick and reliable repair services for unexpected breakdowns",
    icon: Shield,
    features: ["Engine Diagnostics", "Electrical Repairs", "Brake Service", "Emergency Roadside"],
    price: "Call for Quote"
  }
];

export const ServicesSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
            <p className="text-gray-600">Comprehensive support and maintenance for your Bajaj vehicle</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.2}>
              <HoverScale scale={1.03}>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                        <CardDescription className="text-primary font-semibold text-lg">
                          {service.price}
                        </CardDescription>
                      </div>
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="list-disc pl-5 text-gray-600">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm">{feature}</li>
                      ))}
                    </ul>
                    <Link to="/services">
                      <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                        Learn More
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
