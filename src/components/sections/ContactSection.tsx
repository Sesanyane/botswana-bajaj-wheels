
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { SlideIn } from "@/components/animations/SlideIn";

export const ContactSection = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <SlideIn direction="left">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Us Today</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get in touch for sales, service, or any inquiries. We're here to help!
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                  Contact Us
                </Button>
              </Link>
            </div>
          </SlideIn>
          <SlideIn direction="right">
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-blue-100" />
                <span>Central Business District, Gaborone</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-2 text-blue-100" />
                <span>+267 395 0000 4019</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-2 text-blue-100" />
                <span>Mon-Fri: 8:00 AM - 5:00 PM, Sat: 8:00 AM - 1:00 PM</span>
              </div>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  );
};
