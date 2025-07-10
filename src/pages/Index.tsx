import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Wrench, Users, Zap, Shield, Clock, Star, ChevronRight, CheckCircle, Truck, Mountain, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">BAJAJ</h1>
                <p className="text-sm text-blue-200">Botswana</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</Link>
              <Link to="/about" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</Link>
              <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium">PRODUCTS</Link>
              <Link to="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</Link>
              <Link to="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT US</Link>
            </div>
            <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50">
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(/lovable-uploads/ace6f99e-805a-4eae-baa2-9afd3bc62b2a.png)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  🎉 Now Available in Botswana
                </Badge>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  BUILT FOR BOTSWANA.{" "}
                  <span className="block text-blue-200">
                    READY FOR ANYTHING.
                  </span>
                </h2>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                  Affordable, tough, and ready for your hustle. Experience world-class motorcycles designed for Botswana's roads.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-blue-50 px-8 py-3">
                    EXPLORE BOXER 150
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                    FIND A DEALER
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                    BOOK A TEST RIDE
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-white text-center">
                    <Zap className="w-20 h-20 mx-auto mb-4 text-blue-200" />
                    <h3 className="text-2xl font-bold mb-4">Experience Our Range</h3>
                    <p className="text-blue-100">Motorcycles & Three-wheelers built for every journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bajaj Botswana */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">WHY BAJAJ BOTSWANA?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">GLOBAL</h3>
              <p className="text-sm font-medium text-gray-600 mb-2">QUALITY | GLOBAL FOCUS</p>
              <p className="text-gray-600">Trusted worldwide for quality and reliability</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Mountain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">BUILT FOR</h3>
              <p className="text-sm font-medium text-gray-600 mb-2">BOTSWANA TERRAIN</p>
              <p className="text-gray-600">Designed specifically for local conditions</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">UNBEATABLE</h3>
              <p className="text-sm font-medium text-gray-600 mb-2">FUEL ECONOMY</p>
              <p className="text-gray-600">Maximum efficiency for every kilometer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product - Boxer 150 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">BOXER 150</h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-lg">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    <span><strong>150cc</strong> - Powerful performance</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    <span><strong>RUGGED BUILD</strong> - Built to last</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    <span><strong>FUEL SAVER</strong> - Excellent economy</span>
                  </li>
                  <li className="flex items-center text-lg">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    <span><strong>RELIABLE</strong> - Dependable transport</span>
                  </li>
                </ul>
                <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-3">
                  VIEW FULL SPECS
                </Button>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border">
                  <div className="text-center">
                    <Zap className="w-32 h-32 mx-auto mb-4 text-primary" />
                    <h3 className="text-2xl font-bold text-primary mb-4">Boxer 150</h3>
                    <p className="text-gray-600">High-quality motorcycle image will be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect for Every Hustle */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">PERFECT FOR EVERY HUSTLE</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">DELIVERY</h3>
              <p className="text-gray-600">Perfect for delivery services and logistics</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">PERSONAL</h3>
              <p className="text-gray-600">Daily commuting made easy and efficient</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mountain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">RURAL TRAVEL</h3>
              <p className="text-gray-600">Built for all terrain and conditions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">YOUNG HUSTLERS</h3>
              <p className="text-gray-600">Affordable transport for entrepreneurs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-white mb-6">
              "My Boxer gets me through every pothole in Gabs and never gives me issues."
            </blockquote>
            <p className="text-blue-200">— Thabo, Delivery Driver</p>
          </div>
        </div>
      </section>

      {/* Dealer Network */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">OUR DEALER NETWORK</h2>
                <h3 className="text-2xl font-bold text-primary mb-6">ACROSS BOTSWANA</h3>
                <p className="text-lg text-gray-600 mb-8">
                  Find authorized Bajaj dealers across Botswana for sales, service, and genuine spare parts.
                </p>
                <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-3">
                  FIND YOUR NEAREST DEALER
                </Button>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-xl border">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-medium text-primary">Gaborone</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-medium text-primary">Francistown</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-medium text-primary">Maun</p>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-medium text-primary">Kasane</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-primary font-bold">B</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">BAJAJ</h3>
                  <p className="text-sm text-blue-200">Botswana</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                Bringing reliable mobility solutions to Botswana with world-class motorcycles and three-wheelers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">ABOUT US</h4>
              <ul className="space-y-2 text-blue-100">
                <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Commitment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">CONTACT</h4>
              <ul className="space-y-2 text-blue-100">
                <li>Gaborone Office</li>
                <li>395 0000 4019</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-blue-100">
                <li><Link to="/" className="hover:text-white transition-colors">A Class of Bajaj</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Brochure</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Build Sheet</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-blue-600 mt-12 pt-8 text-center text-blue-200">
            <p>&copy; Copy Detectives. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
