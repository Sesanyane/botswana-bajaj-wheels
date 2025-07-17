
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { SlideIn } from "@/components/animations/SlideIn";

export const HeroSection = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <SlideIn direction="left">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Your Trusted Partner for Bajaj Motorcycles in Gaborone
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Delivering quality, reliability, and exceptional service to our valued customers
              </p>
              <Link to="/products">
                <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                  Explore Our Products
                </Button>
              </Link>
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <img
              src="/lovable-uploads/69f79593-595d-4a94-8b8c-535663306501.png"
              alt="Bajaj Motorcycles"
              className="rounded-lg shadow-lg"
            />
          </SlideIn>
        </div>
      </div>
    </section>
  );
};
