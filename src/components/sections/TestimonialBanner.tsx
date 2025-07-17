
import { ScrollReveal } from "@/components/animations/ScrollReveal";

export const TestimonialBanner = () => {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center">
            <blockquote className="text-2xl lg:text-3xl font-light italic mb-4">
              "My Boxer gets me through every pothole in Gabs and never gives me issues."
            </blockquote>
            <cite className="text-lg opacity-80">— Thabo, Delivery Driver</cite>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
