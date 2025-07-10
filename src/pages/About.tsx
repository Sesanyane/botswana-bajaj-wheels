
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Users, Globe, Target, Eye, Award, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Bajaj Auto</h1>
                <p className="text-sm text-gray-600">Botswana</p>
              </div>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors">Home</Link>
              <Link to="/about" className="text-orange-600 font-medium">About</Link>
              <Link to="/products" className="text-gray-700 hover:text-orange-600 transition-colors">Products</Link>
              <Link to="/services" className="text-gray-700 hover:text-orange-600 transition-colors">Services</Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-50 via-white to-red-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-orange-100 text-orange-700 border-orange-200">
              About Bajaj Auto Botswana
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Bringing{" "}
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                World-Class Mobility
              </span>{" "}
              to Botswana
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
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
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Botswana Journey</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Launched in 2024</h3>
                    <p className="text-gray-600">
                      We're excited to bring Bajaj's proven track record of reliable, 
                      fuel-efficient vehicles to Botswana's growing transportation market.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Strategic Location</h3>
                    <p className="text-gray-600">
                      Our showroom and service center are strategically located in Gaborone, 
                      making it convenient for customers across the country to access our products and services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
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
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-blue-900">Global Presence</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-blue-900 mb-2">70+</p>
                  <p className="text-blue-700">Countries Worldwide</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-green-900">Experience</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-3xl font-bold text-green-900 mb-2">75+</p>
                  <p className="text-green-700">Years of Excellence</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Driving Botswana forward with reliable, sustainable mobility solutions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-2 bg-gradient-to-r from-orange-500 to-red-600"></div>
              <CardHeader className="text-center pt-8">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-orange-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Our Mission</CardTitle>
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
              <div className="h-2 bg-gradient-to-r from-blue-500 to-blue-700"></div>
              <CardHeader className="text-center pt-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-10 h-10 text-blue-600" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Our Vision</CardTitle>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Connected to Excellence</h2>
              <p className="text-xl text-gray-600">
                Backed by Bajaj Auto Limited, India's leading automotive manufacturer
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Heritage & Trust</h3>
                <p className="text-gray-600">
                  Founded in 1945, Bajaj Auto has built a legacy of trust and reliability 
                  that spans generations across the globe.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation Leader</h3>
                <p className="text-gray-600">
                  Continuous innovation in design, technology, and manufacturing 
                  ensures our vehicles meet the highest global standards.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Network</h3>
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
      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join the Bajaj Family</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Experience the difference that 75 years of automotive excellence can make. 
            Visit us today and become part of the Bajaj Auto story in Botswana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-50 px-8 py-3">
              Visit Our Showroom
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-3">
              Learn About Products
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">B</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Bajaj Auto</h3>
                  <p className="text-sm text-gray-400">Botswana</p>
                </div>
              </Link>
              <p className="text-gray-400 mb-4">
                Bringing reliable mobility solutions to Botswana with world-class motorcycles and three-wheelers.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/products" className="hover:text-white transition-colors">Motorcycles</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Three-wheelers</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Spare Parts</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/services" className="hover:text-white transition-colors">Service Centers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Customer Care</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Warranty</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bajaj Auto Botswana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
