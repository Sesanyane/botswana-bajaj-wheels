
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const Boxer150Section = () => {
  const specs = [
    "150cc",
    "RUGGED BUILD", 
    "FUEL SAVER",
    "RELIABLE"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">BOXER 150</h2>
              <ul className="space-y-4 mb-8">
                {specs.map((spec, index) => (
                  <li key={index} className="flex items-center text-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                    <span className="font-semibold text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="text-center">
              <img
                src="/lovable-uploads/adcc6458-be1d-4f86-aa77-44463abb9c47.png"
                alt="Bajaj Boxer 150"
                className="max-w-full h-auto mx-auto mb-6"
              />
              <Link to="/products">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                  VIEW FULL SPECS
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
