
import { Package, Users, Map, User } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const HustleSection = () => {
  const hustleTypes = [
    {
      icon: Package,
      title: "DELIVERY",
      description: "Perfect for delivery services"
    },
    {
      icon: Users,
      title: "PERSONAL",
      subtitle: "COMMUTING",
      description: "Daily commute made easy"
    },
    {
      icon: Map,
      title: "RURAL TRAVEL",
      description: "Navigate any terrain"
    },
    {
      icon: User,
      title: "YOUNG HUSTLERS",
      description: "Start your business journey"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary">PERFECT FOR EVERY HUSTLE</h2>
          </div>
        </ScrollReveal>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {hustleTypes.map((hustle, index) => (
            <ScrollReveal key={hustle.title} delay={index * 0.1}>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <hustle.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="font-bold text-primary mb-1">{hustle.title}</h3>
                {hustle.subtitle && (
                  <h4 className="font-bold text-primary mb-2">{hustle.subtitle}</h4>
                )}
                <p className="text-sm text-gray-600">{hustle.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
