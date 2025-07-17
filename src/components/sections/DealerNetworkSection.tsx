
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const DealerNetworkSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">
                OUR DEALER NETWORK
                <br />
                ACROSS BOTSWANA
              </h2>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3">
                  FIND YOUR NEAREST DEALER
                </Button>
              </Link>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <div className="relative">
              {/* Simplified map representation */}
              <div className="bg-gray-200 h-64 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-200"></div>
                {/* Map pins */}
                <MapPin className="absolute top-1/4 left-1/3 w-6 h-6 text-primary" />
                <MapPin className="absolute top-1/2 right-1/3 w-6 h-6 text-primary" />
                <MapPin className="absolute bottom-1/4 left-1/2 w-6 h-6 text-primary" />
                <MapPin className="absolute top-1/3 right-1/4 w-6 h-6 text-primary" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
