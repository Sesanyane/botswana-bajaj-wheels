
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SlideIn } from "@/components/animations/SlideIn";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-600 to-gray-400 text-white py-32 overflow-hidden">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: "url('/lovable-uploads/69f79593-595d-4a94-8b8c-535663306501.png')"
        }}
      />
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <SlideIn direction="left">
            <div className="max-w-lg">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                BUILT FOR BOTSWANA.
                <br />
                READY FOR ANYTHING.
              </h1>
              <p className="text-xl mb-8 text-gray-200">
                Affordable, tough, and ready for your hustle
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/products">
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold">
                    EXPLORE BOXER 150
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold">
                    FIND A DEALER
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold">
                    BOOK A TEST RIDE
                  </Button>
                </Link>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};
