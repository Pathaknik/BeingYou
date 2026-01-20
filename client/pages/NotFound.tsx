import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted">
        <div className="text-center px-4">
          <div className="mb-6">
            <h1 className="text-7xl md:text-8xl font-serif font-bold text-primary mb-2">
              404
            </h1>
            <div className="h-1 w-24 bg-primary mx-auto mb-6" />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Page Not Found
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. Let's get you back to shopping!
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
