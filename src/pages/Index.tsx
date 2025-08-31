
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Wrench, Users, Zap, Shield, Clock, Star, ChevronRight, CheckCircle, Truck, Mountain, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { FadeIn } from "@/components/animations/FadeIn";
import { SlideIn } from "@/components/animations/SlideIn";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";
import { MobileNav } from "@/components/MobileNav";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-primary backdrop-blur-sm"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <img 
                src="/lovable-uploads/1aa16d4b-0dc9-49f4-b043-994bf0c03efd.png" 
                alt="Bajaj Botswana"
                className="h-12 w-auto"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="hidden md:flex items-center space-x-8"
            >
              <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium bg-white/20 px-3 py-1 rounded">HOME</Link>
              <Link to="/about" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</Link>
              <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium">PRODUCTS</Link>
              <Link to="/accessories" className="text-white hover:text-blue-200 transition-colors font-medium">ACCESSORIES</Link>
              <Link to="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</Link>
              <Link to="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT US</Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <div className="hidden md:block">
                <Link to="/contact">
                  <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </Link>
              </div>
              <MobileNav />
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden min-h-[80vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-125 contrast-125 saturate-110"
          style={{
            backgroundImage: `url(/lovable-uploads/ace6f99e-805a-4eae-baa2-9afd3bc62b2a.png)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/60 via-primary/40 to-primary/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-8">
                <FadeIn delay={0.2}>
                  <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                    🎉 Now Available in Botswana
                  </Badge>
                </FadeIn>
                <SlideIn direction="left" delay={0.4}>
                  <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    BUILT FOR BOTSWANA.{" "}
                    <span className="block text-blue-200">
                      READY FOR ANYTHING.
                    </span>
                  </h2>
                </SlideIn>
                <FadeIn delay={0.6}>
                  <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                    Affordable, tough, and ready for your hustle. Experience world-class motorcycles designed for Botswana's roads.
                  </p>
                </FadeIn>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <HoverScale>
                    <Link to="/products">
                      <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-blue-50 px-6 py-3 text-sm sm:text-base w-full sm:w-auto">
                        <span className="mr-2">EXPLORE BOXER 150</span>
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </HoverScale>
                  <HoverScale>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3 text-sm sm:text-base w-full sm:w-auto">
                        FIND A DEALER
                      </Button>
                    </Link>
                  </HoverScale>
                  <HoverScale>
                    <Link to="/contact">
                      <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-3 text-sm sm:text-base w-full sm:w-auto">
                        BOOK A TEST RIDE
                      </Button>
                    </Link>
                  </HoverScale>
                </motion.div>
              </div>
              <SlideIn direction="right" delay={0.5}>
                <div className="lg:col-span-4 relative flex justify-end">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 w-48">
                    <div className="text-white text-center">
                      <Zap className="w-8 h-8 mx-auto mb-2 text-blue-200" />
                      <h3 className="text-sm font-bold mb-1">Experience Our Range</h3>
                      <p className="text-blue-100 text-xs">Motorcycles & Three-wheelers built for every journey</p>
                    </div>
                  </div>
                </div>
              </SlideIn>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bajaj Gaborone */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">WHY BAJAJ BOTSWANA?</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: CheckCircle, title: "GLOBAL", subtitle: "QUALITY | GLOBAL FOCUS", desc: "Trusted worldwide for quality and reliability" },
              { icon: Mountain, title: "BUILT FOR", subtitle: "BOTSWANA TERRAIN", desc: "Designed specifically for local conditions" },
              { icon: Zap, title: "UNBEATABLE", subtitle: "FUEL ECONOMY", desc: "Maximum efficiency for every kilometer" }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <HoverScale>
                  <div className="text-center">
                    <motion.div 
                      whileHover={{ rotate: 5 }}
                      className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <item.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-sm font-medium text-gray-600 mb-2">{item.subtitle}</p>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product - Boxer 150 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-4xl font-bold text-primary mb-6">BOXER 150</h2>
                  <ul className="space-y-4 mb-8">
                    {[
                      { label: "150cc", desc: "Powerful performance" },
                      { label: "RUGGED BUILD", desc: "Built to last" },
                      { label: "FUEL SAVER", desc: "Excellent economy" },
                      { label: "RELIABLE", desc: "Dependable transport" }
                    ].map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="flex items-center text-lg"
                      >
                        <CheckCircle className="w-6 h-6 text-primary mr-3" />
                        <span><strong>{feature.label}</strong> - {feature.desc}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <HoverScale>
                    <Link to="/products">
                      <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-3">
                        VIEW FULL SPECS
                      </Button>
                    </Link>
                  </HoverScale>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <HoverScale scale={1.02}>
                  <div className="relative">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border overflow-hidden">
                      <img 
                        src="/lovable-uploads/adcc6458-be1d-4f86-aa77-44463abb9c47.png" 
                        alt="Bajaj Boxer 150"
                        className="w-full h-auto object-contain"
                      />
                      <div className="text-center mt-4">
                        <h3 className="text-2xl font-bold text-primary mb-2">Boxer 150 HD</h3>
                        <p className="text-gray-600">The perfect companion for your daily journey</p>
                      </div>
                    </div>
                  </div>
                </HoverScale>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for Every Hustle */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">PERFECT FOR EVERY HUSTLE</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: Truck, title: "DELIVERY", desc: "Perfect for delivery services and logistics" },
              { icon: Users, title: "PERSONAL", desc: "Daily commuting made easy and efficient" },
              { icon: Mountain, title: "RURAL TRAVEL", desc: "Built for all terrain and conditions" },
              { icon: UserCheck, title: "YOUNG HUSTLERS", desc: "Affordable transport for entrepreneurs" }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <HoverScale>
                  <div className="text-center">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4"
                    >
                      <item.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </HoverScale>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <ScrollReveal>
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.blockquote 
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl font-medium text-white mb-6"
              >
                "My Boxer gets me through every pothole in Gabs and never gives me issues."
              </motion.blockquote>
              <FadeIn delay={0.3}>
                <p className="text-blue-200">— Thabo, Delivery Driver</p>
              </FadeIn>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Dealer Network */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div>
                  <h2 className="text-4xl font-bold text-primary mb-6">OUR DEALER NETWORK</h2>
                  <h3 className="text-2xl font-bold text-primary mb-6">IN BOTSWANA</h3>
                  <p className="text-lg text-gray-600 mb-8">
                    Visit our authorized Bajaj dealer in Botswana for sales, service, and genuine spare parts.
                  </p>
                  <HoverScale>
                    <Link to="/contact">
                      <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-3">
                        FIND YOUR NEAREST DEALER
                      </Button>
                    </Link>
                  </HoverScale>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <HoverScale scale={1.02}>
                  <div className="relative">
                    <div className="bg-white rounded-2xl p-8 shadow-xl border">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                          <h3 className="text-xl font-bold text-primary mb-2">Bajaj Gaborone</h3>
                          <p className="text-gray-600 mb-2">Unit 5, Plot 22052 Kgomokasitwa RD</p>
                          <p className="text-gray-600 mb-2">Gaborone West Industrial</p>
                          <p className="text-sm text-gray-500">+267 73103 312</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverScale>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ScrollReveal>
        <footer className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <img 
                    src="/lovable-uploads/1aa16d4b-0dc9-49f4-b043-994bf0c03efd.png" 
                    alt="Bajaj Botswana"
                    className="h-8 w-auto"
                  />
                </div>
                <p className="text-blue-100 mb-4">
                  Bringing reliable mobility solutions to Botswana with world-class motorcycles and three-wheelers.
                </p>
              </motion.div>
              {[
                { title: "ABOUT US", links: [{ text: "Our Story", to: "/about" }, { text: "Commitment", to: "/about" }] },
                { title: "CONTACT", links: [{ text: "Botswana Office", to: "#" }, { text: "+267 73103 312", to: "#" }] },
                { title: "QUICK LINKS", links: [{ text: "Products", to: "/products" }, { text: "Services", to: "/services" }, { text: "Contact", to: "/contact" }] }
              ].map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                >
                  <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                  <ul className="space-y-2 text-blue-100">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        {link.to.startsWith('/') ? (
                          <Link to={link.to} className="hover:text-white transition-colors">{link.text}</Link>
                        ) : (
                          <span>{link.text}</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="border-t border-blue-600 mt-12 pt-8 text-center text-blue-200"
            >
              <p>&copy; 2024 Bajaj Gaborone. All rights reserved.</p>
            </motion.div>
          </div>
        </footer>
      </ScrollReveal>
    </div>
  );
};

export default Index;
