
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { HoverScale } from "@/components/animations/HoverScale";

const testimonials = [
  {
    name: "Thabo Mbeki",
    text: "Bajaj Gaborone has been instrumental in keeping my fleet running smoothly. Their service is top-notch!",
    stars: 5
  },
  {
    name: "Neo Molefe",
    text: "I bought a Bajaj Boxer 150 from them and it's been the most reliable bike I've ever owned. Highly recommended!",
    stars: 4
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
            <p className="text-gray-600">Read testimonials from our satisfied customers</p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.2}>
              <HoverScale scale={1.02}>
                <Card className="bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{testimonial.name}</CardTitle>
                    <div className="flex items-center mt-2">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500" />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </HoverScale>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
