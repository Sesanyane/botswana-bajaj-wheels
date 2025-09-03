import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Globe, Target, Eye, Award, Handshake, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { MobileNav } from "@/components/MobileNav";
import { ScooterLoader } from "@/components/animations/ScooterLoader";
import { AnimatePresence } from "framer-motion";

const About = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <ScooterLoader />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-primary backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Link to="/">
                  <img 
                    src="/lovable-uploads/bajaj-logo-optimized.webp" 
                    alt="Bajaj Botswana"
                    className="h-12 w-auto cursor-pointer"
                  />
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</Link>
                <Link to="/about" className="text-white hover:text-blue-200 transition-colors font-medium bg-white/20 px-3 py-1 rounded">ABOUT</Link>
                <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium">PRODUCTS</Link>
                <Link to="/accessories" className="text-white hover:text-blue-200 transition-colors font-medium">ACCESSORIES</Link>
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
        </nav>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary via-blue-700 to-blue-900 py-20">
          <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                About Bajaj Auto Botswana
              </Badge>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                BRINGING{" "}
                <span className="text-blue-200">
                  WORLD-CLASS MOBILITY
                </span>{" "}
                TO BOTSWANA
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                With over 75 years of innovation and excellence, Bajaj Auto is proud to introduce 
                our reliable motorcycles and three-wheelers to the beautiful nation of Botswana.
              </p>
            </div>
          </div>
        </section>

        {/* Branch Info */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">OUR BOTSWANA JOURNEY</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">SINCE 1948</h3>
                      <p className="text-gray-600">
                        We're excited to bring Bajaj's proven track record of reliable, 
                        fuel-efficient vehicles to Botswana's growing transportation market.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">STRATEGIC LOCATION</h3>
                      <p className="text-gray-600">
                        Located at Unit 5, Plot 22052 Kgomokasitwa RD, Gaborone West Industrial, 
                        our showroom and service center are strategically positioned to serve customers across Botswana.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">LOCAL EXPERTISE</h3>
                      <p className="text-gray-600">
                        Our team combines international Bajaj standards with local knowledge 
                        to provide the best service experience for our Botswana customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-primary">GLOBAL PRESENCE</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold text-primary mb-2">+100</p>
                    <p className="text-blue-700">Countries Worldwide</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-primary">MOTORCYCLES</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-3xl font-bold text-primary mb-2">18M+</p>
                    <p className="text-blue-700">Motorcycles Sold</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">ABOUT BAJAJ AUTO</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Born in India. Loved by the World - The World's Favourite Indian
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 mb-8">
                <CardContent className="p-8">
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    Bajaj Auto Ltd (BAL) is the world's third-largest motorcycle manufacturer and the world's largest three-wheeler manufacturer.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Under the able leadership of Mr. Rahul Bajaj, Bajaj Auto Ltd has established its expertise in segments of utility, commuter and sports vehicles.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Boasting a line-up of petrol, diesel, compressed natural gas (CNG) and EV (electric vehicles) in the offering, Bajaj is widely recognised as a global leader of ESG driven mobility solutions.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Bajaj is established across Asia, Africa & Latin America with a footprint of over 100 countries.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-4">The World's Favourite Indian</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    With more than 18 million motorcycles sold in over 100 countries, the Bajaj brand is truly 'The World's Favourite Indian'.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    From motorcycles to three-wheelers and now quadricycles, from Mumbai to Mexico City and Bogota to Bengaluru, there's a Bajaj for everyone.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">BAJAJ JOURNEY</h2>
              <p className="text-xl text-gray-600">
                Milestones that define our legacy
              </p>
            </div>
            <div className="max-w-6xl mx-auto">
              <img 
                src="/lovable-uploads/5495a6c9-3277-492a-8829-ec5b297f1b55.png" 
                alt="Bajaj Timeline" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4">OUR MISSION & VISION</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Driving Botswana forward with reliable, sustainable mobility solutions
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-2 bg-primary"></div>
                <CardHeader className="text-center pt-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Target className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">OUR MISSION</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <p className="text-gray-600 leading-relaxed">
                    To provide affordable, reliable, and fuel-efficient mobility solutions 
                    that empower the people of Botswana to achieve their aspirations and 
                    contribute to the nation's economic growth.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-2 bg-primary"></div>
                <CardHeader className="text-center pt-8">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Eye className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-2xl text-primary">OUR VISION</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <p className="text-gray-600 leading-relaxed">
                    To be the leading mobility brand in Botswana, recognized for quality, 
                    innovation, and customer satisfaction, while supporting sustainable 
                    transportation for a better tomorrow.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Connection to Bajaj India */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-primary mb-4">CONNECTED TO EXCELLENCE</h2>
                <p className="text-xl text-gray-600">
                  Backed by Bajaj Auto Limited, India's leading automotive manufacturer
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Handshake className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">HERITAGE & TRUST</h3>
                  <p className="text-gray-600">
                    Founded in 1948, Bajaj Auto has built a legacy of trust and reliability 
                    that spans generations across the globe.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">INNOVATION LEADER</h3>
                  <p className="text-gray-600">
                    Continuous innovation in design, technology, and manufacturing 
                    ensures our vehicles meet the highest global standards.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-4">GLOBAL NETWORK</h3>
                  <p className="text-gray-600">
                    Access to Bajaj's global supply chain, quality standards, 
                    and technical expertise ensures consistent excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">JOIN THE BAJAJ FAMILY</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Experience the difference that 75 years of automotive excellence can make. 
              Visit us today and become part of the Bajaj Auto story in Botswana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-blue-50 px-8 py-3">
                VISIT OUR SHOWROOM
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3">
                LEARN ABOUT PRODUCTS
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <img 
                    src="/lovable-uploads/bajaj-logo-optimized.webp" 
                    alt="Bajaj Botswana"
                    className="h-8 w-auto"
                  />
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
                  <li>Unit 5, Plot 22052 Kgomokasitwa RD</li>
                  <li>Gaborone West Industrial</li>
                  <li>+267 73103 312</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">QUICK LINKS</h4>
                <ul className="space-y-2 text-blue-100">
                  <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                  <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
                  <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-blue-600 mt-12 pt-8 text-center text-blue-200">
              <p>&copy; 2024 Bajaj Gaborone. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
