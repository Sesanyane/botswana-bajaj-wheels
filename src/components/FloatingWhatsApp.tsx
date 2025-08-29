import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const FloatingWhatsApp = () => {
  const phoneNumber = "26773103312"; // Bajaj Gaborone WhatsApp number
  const message = "Hi! I'm interested in Bajaj motorcycles. Can you help me?";

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className={cn(
          "w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300",
          "bg-[#25D366] hover:bg-[#20BD5A] text-white border-0",
          "animate-pulse hover:animate-none hover:scale-110"
        )}
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default FloatingWhatsApp;