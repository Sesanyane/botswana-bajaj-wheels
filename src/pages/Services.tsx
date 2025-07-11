
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Users, Clock, Shield, Phone, CheckCircle, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      name: "Regular Maintenance",
      description: "Keep your Bajaj running smoothly with our comprehensive maintenance packages",
      icon: Wrench,
      features: ["Oil Change", "Filter Replacement", "Brake Inspection", "Chain Lubrication"],
      price: "From P 200"
    },
    {
      name: "Genuine Parts",
      description: "Only authentic Bajaj parts for guaranteed quality and performance",
      icon: Shield,
      features: ["OEM Quality", "Warranty Coverage", "Perfect Fit", "Competitive Pricing"],
      price: "Varies"
    },
    {
      name: "Emergency Repairs",
      description: "Quick and reliable repairs to get you back on the road",
      icon: Clock,
      features: ["Fast Service", "Expert Technicians", "Quality Guarantee", "Roadside Assistance"],
      price: "From P 150"
    },
    {
      name: "Test Rides",
      description: "Experience any Bajaj model before making your decision",
      icon: Users,
      features: ["All Models Available", "Expert Guidance", "Safety Briefing", "No Obligation"],
      price: "Free"
    }
  ];

  const whyChooseUs = [
    {
      title: "Certified Technicians",
      description: "Our team is trained and certified by Bajaj to handle all repairs and maintenance",
      icon: CheckCircle
    },
    {
      title: "Genuine Parts Only",
      description: "We use only authentic Bajaj parts to ensure quality and reliability",
      icon: Shield
    },
    {
      title: "Quick Turnaround",
      description: "Most services completed within 24 hours to minimize your downtime",
      icon: Clock
    },
    {
      title: "Competitive Pricing",
      description: "Fair and transparent pricing with no hidden costs",
      icon: Star
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-primary backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/1aa16d4b-0dc9-49f4-b043-994bf0c03efd.png" 
                alt="Bajaj Gaborone"
                className="h-12 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-blue-200 transition-colors font-medium">HOME</Link>
              <Link to="/about" className="text-white hover:text-blue-200 transition-colors font-medium">ABOUT</Link>
              <Link to="/products" className="text-white hover:text-blue-200 transition-colors font-medium">PRODUCTS</Link>
              <Link to="/services" className="text-white hover:text-blue-200 transition-colors font-medium bg-white/20 px-3 py-1 rounded">SERVICES</Link>
              <Link to="/contact" className="text-white hover:text-blue-200 transition-colors font-medium">CONTACT US</Link>
            </div>
            <Link to="/contact">
              <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Professional service and maintenance for your Bajaj vehicles in Gaborone
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Services Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete service solutions to keep your Bajaj running at its best
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-gray-900">{service.name}</CardTitle>
                      <CardDescription className="text-primary font-semibold">
                        {service.price}
                      </CardDescription>
                    </div>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Includes:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-primary mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Book Service
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best service experience for all Bajaj owners
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Location Section */}
        <section className="mb-16 bg-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Service Center</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Gaborone for easy access
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-primary mr-3" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Bajaj Gaborone</h3>
                  <p className="text-gray-600">Central Business District, Gaborone</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-600">
                <p><strong>Phone:</strong> +267 395 0000 4019</p>
                <p><strong>Hours:</strong> Mon-Fri 8:00 AM - 5:00 PM</p>
                <p><strong>Saturday:</strong> 8:00 AM - 1:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <MapPin className="h-20 w-20 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Find Us</h3>
              <p className="text-gray-600 mb-4">Easy to locate in central Gaborone</p>
              <Link to="/contact">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  Get Directions
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary rounded-2xl p-8 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Service Your Bajaj?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Book your service appointment today and keep your Bajaj running smoothly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Book Service Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Contact Us
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
