
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-blue-700 to-blue-900 flex items-center justify-center">
      <div className="text-center text-white max-w-lg mx-auto px-4">
        <div className="w-24 h-24 bg-white rounded-lg flex items-center justify-center mx-auto mb-8">
          <span className="text-primary font-bold text-4xl">B</span>
        </div>
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">PAGE NOT FOUND</h2>
        <p className="text-xl text-blue-100 mb-8">
          Oops! The page you're looking for doesn't exist. Let's get you back on track.
        </p>
        <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-blue-50">
          <a href="/" className="inline-flex items-center">
            <Home className="w-5 h-5 mr-2" />
            RETURN TO HOME
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
