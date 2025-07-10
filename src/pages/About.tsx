
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Globe, Target, Eye, Award, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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
              <Link to="/about" className="text-blue-200 font-medium">ABOUT</Link>
              <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium">PRODUCTS</Link>
              <Link to="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</Link>
              <Link to="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT US</Link>
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
                    <h3 className="text-xl font-semibold text-primary mb-2">LAUNCHED IN 2024</h3>
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
                      Our showroom and service center are strategically located in Gaborone, 
                      making it convenient for customers across the country to access our products and services.
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
                  <p className="text-3xl font-bold text-primary mb-2">70+</p>
                  <p className="text-blue-700">Countries Worldwide</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-primary">EXPERIENCE</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-primary mb-2">75+</p>
                  <p className="text-blue-700">Years of Excellence</p>
                </CardContent>
              </Card>
            </div>
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
                  contribute to the country's economic growth.
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
                  Founded in 1945, Bajaj Auto has built a legacy of trust and reliability 
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

export default About;
