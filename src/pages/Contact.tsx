import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Facebook, Send, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { MobileNav } from "@/components/MobileNav";
import { ScooterLoader } from "@/components/animations/ScooterLoader";
import { AnimatePresence } from "framer-motion";
import { supabase, type ContactSubmission } from "@/lib/supabase";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Validate required fields
      if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields (Name, Email, and Message).",
          variant: "destructive",
        });
        return;
      }

      // Submit to Supabase
      const submission: Omit<ContactSubmission, 'id' | 'created_at'> = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        subject: formData.subject.trim() || null,
        message: formData.message.trim(),
      };

      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([submission])
        .select();

      if (error) {
        console.error('Supabase error:', error);
        // Fallback to mailto if database submission fails
        const subject = encodeURIComponent(formData.subject || "Inquiry from Bajaj Gaborone Website");
        const body = encodeURIComponent(
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n\n` +
          `Message:\n${formData.message}`
        );
        
        const mailtoLink = `mailto:info@bajajgaborone.com?subject=${subject}&body=${body}`;
        window.open(mailtoLink, '_blank');
        
        toast({
          title: "Fallback: Email Client Opened",
          description: "We couldn't save your message online, but your email client is ready to send it.",
        });
      } else {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
        });
      }
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <ScooterLoader />}
      </AnimatePresence>
      
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
                <Link to="/services" className="text-white hover:text-blue-200 transition-colors font-medium">SERVICES</Link>
                <Link to="/contact" className="text-white hover:text-blue-200 transition-colors font-medium bg-white/20 px-3 py-1 rounded">CONTACT US</Link>
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="secondary" className="bg-white text-primary hover:bg-blue-50 hidden md:flex">
                  <Phone className="w-4 h-4 mr-2" />
                  +267 395 0000 4019
                </Button>
                <MobileNav />
              </div>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="bg-primary text-white py-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Get in touch with Bajaj Gaborone for all your motorcycle needs
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+267 xxx xxxx"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Get in Touch</CardTitle>
                  <CardDescription>
                    Visit us, call us, or connect with us online
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                       <h3 className="font-semibold text-gray-900">Our Location</h3>
                       <p className="text-gray-600">Unit 5, Plot 22052 Kgomokasitwa RD</p>
                       <p className="text-gray-600">Gaborone West Industrial</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+267 395 0000 4019</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">info@bajajgaborone.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">Mon-Fri: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Saturday: 8:00 AM - 1:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Follow Us</h3>
                      <a 
                        href="https://facebook.com/bajajgaborone" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        @bajajgaborone
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Find Us</CardTitle>
                  <CardDescription>
                    We're located in the heart of Gaborone
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 rounded-lg p-8 text-center">
                    <MapPin className="h-20 w-20 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bajaj Gaborone</h3>
                    <p className="text-gray-600 mb-4">Unit 5, Plot 22052 Kgomokasitwa RD</p>
                    <p className="text-gray-600 mb-4">Gaborone West Industrial</p>
                    <p className="text-sm text-gray-500 mb-4">
                      Easy to find location with ample parking available
                    </p>
                    <Button 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => window.open('https://maps.google.com/?q=Gaborone+Central+Business+District', '_blank')}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Quick Actions */}
          <section className="mt-16 bg-primary rounded-2xl p-8 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Call us directly or visit our showroom for immediate help with sales, service, or parts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => window.location.href = 'tel:+2673950000401'}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.open('https://facebook.com/bajajgaborone', '_blank')}
              >
                <Facebook className="w-4 h-4 mr-2" />
                Message on Facebook
              </Button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Contact;
