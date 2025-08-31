import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wrench, Calendar, Truck, Shield, Clock, Phone, MapPin, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "@/components/MobileNav";
import { ScooterLoader } from "@/components/animations/ScooterLoader";

const Services = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      title: "Regular Maintenance",
      description: "Keep your Bajaj vehicle running smoothly with our comprehensive maintenance packages",
      icon: Wrench,
      features: ["Oil Change", "Filter Replacement", "Brake Inspection", "Chain Lubrication"]
    },
    {
      title: "Spare Parts",
      description: "Genuine Bajaj spare parts to ensure optimal performance and longevity",
      icon: Truck,
      features: ["Genuine Parts Only", "Warranty Included", "Quick Delivery", "Expert Installation"]
    },
    {
      title: "Test Rides",
      description: "Experience our motorcycles before you buy with complimentary test rides",
      icon: Calendar,
      features: ["All Models Available", "Professional Guidance", "Safety Equipment", "Flexible Timing"]
    }
  ];

  return (
    <>
      <AnimatePresence>
        {isLoading && <ScooterLoader />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="sticky top-0 z-50 bg-primary backdrop-blur-sm"
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/1aa16d4b-0dc9-49f4-b043-994bf0c03efd.png" 
                  alt="Bajaj Botswana"
                  className="h-12 w-auto"
                />
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</Link>
                <Link to="/about" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</Link>
                <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium">PRODUCTS</Link>
                <Link to="/accessories" className="text-white hover:text-blue-200 transition-colors font-medium">ACCESSORIES</Link>
                <Link to="/services" className="text-white hover:text-blue-200 transition-colors font-medium bg-white/20 px-3 py-1 rounded">SERVICES</Link>
                <Link to="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT US</Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link to="/contact" className="hidden md:block">
                  <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </Link>
                <MobileNav />
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Header */}
        <SlideIn direction="down">
          <div className="bg-primary text-white py-16">
            <div className="container mx-auto px-4">
              <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Comprehensive support and maintenance for your Bajaj vehicle in Botswana
                </p>
              </div>
            </div>
          </div>
        </SlideIn>

        <div className="container mx-auto px-4 py-12">
          {/* Services Section */}
          <section className="mb-16">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Wrench className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Expertise</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  From routine maintenance to complex repairs, trust our skilled technicians to keep you on the road
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <HoverScale scale={1.03}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                          </div>
                          <motion.div
                            whileHover={{ rotate: 5, scale: 1.1 }}
                            transition={{ duration: 0.2 }}
                          >
                            <service.icon className="h-8 w-8 text-primary" />
                          </motion.div>
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
                        <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white">
                          Learn More
                        </Button>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </ScrollReveal>
              ))}
            </div>
          </section>

          {/* Why Choose Us Section */}
          <ScrollReveal>
            <section className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Why Choose Bajaj Botswana Service?</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Experience the difference with our certified technicians, genuine parts, and commitment to customer satisfaction
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: Wrench, title: "Expert Technicians", desc: "Certified professionals trained to service Bajaj vehicles" },
                  { icon: Truck, title: "Genuine Parts", desc: "Only authentic Bajaj spare parts for optimal performance" },
                  { icon: Users, title: "Customer Satisfaction", desc: "Committed to providing exceptional service and support" }
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <HoverScale>
                      <div className="text-center">
                        <motion.div 
                          whileHover={{ y: -5, rotate: 5 }}
                          className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                        >
                          <item.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </HoverScale>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* Location & Hours */}
          <ScrollReveal delay={0.3}>
            <section className="mt-16 bg-primary rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FadeIn>
                  <div>
                    <div className="flex items-center mb-6">
                      <MapPin className="w-6 h-6 mr-2 text-blue-100" />
                      <h3 className="text-2xl font-bold">Visit Our Service Center</h3>
                    </div>
                    <p className="text-blue-100 mb-4">
                      Conveniently located in Botswana for all your service needs
                    </p>
                    <p className="text-blue-100">
                      Gaborone West Industrial, Botswana
                    </p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div>
                    <div className="flex items-center mb-6">
                      <Clock className="w-6 h-6 mr-2 text-blue-100" />
                      <h3 className="text-2xl font-bold">Service Hours</h3>
                    </div>
                    <p className="text-blue-100 mb-4">
                      We're here to serve you six days a week
                    </p>
                    <p className="text-blue-100">
                      Mon-Fri: 8:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </FadeIn>
              </div>
            </section>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal delay={0.4}>
            <HoverScale scale={1.02}>
              <section className="mt-16 bg-primary rounded-2xl p-8 text-center text-white">
                <h3 className="text-3xl font-bold mb-4">Ready to Experience Top-Notch Service?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Schedule your service appointment today and let our experts take care of your Bajaj vehicle
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <HoverScale>
                    <Link to="/contact">
                      <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                        Book an Appointment
                      </Button>
                    </Link>
                  </HoverScale>
                  <HoverScale>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                        Contact Service
                      </Button>
                    </Link>
                  </HoverScale>
                </div>
              </section>
            </HoverScale>
          </ScrollReveal>
        </div>
      </div>
    </>
  );
};

export default Services;
