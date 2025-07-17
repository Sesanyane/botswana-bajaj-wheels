
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, MapPin, Phone, Target, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";
import { motion, AnimatePresence } from "framer-motion";
import { MobileNav } from "@/components/MobileNav";
import { ScooterLoader } from "@/components/animations/ScooterLoader";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const teamMembers = [
    {
      name: "John Motsepe",
      role: "General Manager",
      experience: "15+ years in automotive industry",
      image: "/lovable-uploads/aa464419-9ba3-4545-95f5-b14942351b60.png"
    },
    {
      name: "Sarah Kgomo",
      role: "Service Manager", 
      experience: "12+ years in motorcycle service",
      image: "/lovable-uploads/5495a6c9-3277-492a-8829-ec5b297f1b55.png"
    },
    {
      name: "David Thato",
      role: "Sales Consultant",
      experience: "8+ years in sales",
      image: "/lovable-uploads/2cb64d5e-8870-4195-a654-0b1aca1da155.png"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers", icon: Users },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Support Available", icon: Phone },
    { number: "1", label: "Location in Gaborone", icon: MapPin }
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
                <Link to="/">
                  <motion.img 
                    src="/lovable-uploads/1aa16d4b-0dc9-49f4-b043-994bf0c03efd.png" 
                    alt="Bajaj Gaborone"
                    className="h-12 w-auto hover:scale-105 transition-transform duration-200"
                    whileHover={{ scale: 1.05 }}
                    style={{
                      filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))"
                    }}
                  />
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</Link>
                <Link to="/about" className="text-white hover:text-blue-200 transition-colors font-medium bg-white/20 px-3 py-1 rounded">ABOUT</Link>
                <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium">PRODUCTS</Link>
                <Link to="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</Link>
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Learn more about Bajaj Gaborone and our commitment to serving you
                </p>
              </div>
            </div>
          </div>
        </SlideIn>

        <div className="container mx-auto px-4 py-12">
          {/* Our Mission */}
          <section className="mb-16">
            <ScrollReveal>
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  To provide reliable, affordable, and innovative transportation solutions to the people of Botswana
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal>
                <FadeIn>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    transform: "perspective(1000px) rotateX(2deg)"
                  }}>
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">Customer Satisfaction</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We prioritize our customers and strive to exceed their expectations in every interaction
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <FadeIn>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    transform: "perspective(1000px) rotateX(2deg)"
                  }}>
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">Quality Products</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">
                        We offer a wide range of high-quality Bajaj vehicles that are built to last
                      </p>
                    </CardContent>
                  </Card>
                </FadeIn>
              </ScrollReveal>
            </div>
          </section>

          {/* Our Vision */}
          <ScrollReveal>
            <section className="mb-16">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  To be the leading provider of motorcycles and quadricycles in Botswana, empowering individuals and businesses with reliable transportation
                </p>
              </div>
            </section>
          </ScrollReveal>
            
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal>
              <FadeIn>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transform: "perspective(1000px) rotateX(2deg)"
                }}>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">Innovation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We embrace innovation and constantly seek new ways to improve our products and services
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <FadeIn>
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  transform: "perspective(1000px) rotateX(2deg)"
                }}>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">Community Engagement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We are committed to giving back to the community and supporting local initiatives
                    </p>
                  </CardContent>
                </Card>
              </FadeIn>
            </ScrollReveal>
          </div>

          {/* Our Team */}
          <ScrollReveal>
            <section className="mb-16">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Our dedicated team is here to provide you with exceptional service and support
                </p>
              </div>
            </section>
          </ScrollReveal>
            
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <HoverScale>
                  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1" style={{
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    transform: "perspective(1000px) rotateX(2deg)"
                  }}>
                    <CardHeader className="text-center">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
                        style={{
                          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))"
                        }}
                      />
                      <CardTitle className="text-xl text-gray-900">{member.name}</CardTitle>
                      <CardDescription className="text-gray-600">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-center">{member.experience}</p>
                    </CardContent>
                  </Card>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>

          {/* Our Stats */}
          <ScrollReveal>
            <section className="bg-gray-50 rounded-2xl p-8">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-primary mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Bajaj Gaborone By The Numbers</h2>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  We're proud of our track record and commitment to excellence
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <ScrollReveal key={index} delay={index * 0.2}>
                    <HoverScale>
                      <div className="text-center">
                        <motion.div 
                          whileHover={{ y: -5, rotate: 5 }}
                          className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4"
                          style={{
                            boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                          }}
                        >
                          <stat.icon className="w-10 h-10 text-white" />
                        </motion.div>
                        <h3 className="text-3xl font-bold text-gray-900">{stat.number}</h3>
                        <p className="text-gray-600">{stat.label}</p>
                      </div>
                    </HoverScale>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* CTA Section */}
          <ScrollReveal>
            <HoverScale scale={1.02}>
              <section className="mt-16 bg-primary rounded-2xl p-8 text-center text-white" style={{
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}>
                <h3 className="text-3xl font-bold mb-4">Ready to Experience the Bajaj Difference?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Visit our showroom today and let our team help you find the perfect vehicle for your needs
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <HoverScale>
                    <Link to="/products">
                      <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                        View Our Products
                      </Button>
                    </Link>
                  </HoverScale>
                  <HoverScale>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                        Contact Us
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

export default About;
