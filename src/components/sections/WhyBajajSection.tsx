
import { CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const WhyBajajSection = () => {
  const features = [
    {
      title: "GLOBAL",
      subtitle: "QUALITY GLOBAL FOCUS",
      description: "World-class manufacturing standards"
    },
    {
      title: "BUILT FOR",
      subtitle: "BOTSWANA TERRAIN", 
      description: "Designed for local conditions"
    },
    {
      title: "UNBEATABLE",
      subtitle: "FUEL ECONOMY",
      description: "Maximum efficiency for your money"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-8">WHY BAJAJ BOTSWANA?</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.2}>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{feature.title}</h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-2">{feature.subtitle}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
