import { Link, useNavigate } from "react-router-dom";
import { Heart, ShoppingBag, User, LogOut, Search, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { getCartCount } from "@/lib/cart";
import { getWishlistCount } from "@/lib/wishlist";

interface User {
  id: string;
  email: string;
  name: string;
}

export function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-serif font-bold">L</span>
          </div>
          <span className="font-serif font-bold text-lg hidden sm:inline text-foreground">
            LUXE
          </span>
        </Link>

        {/* Center - Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="w-full relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-muted text-foreground placeholder:text-muted-foreground px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/products?category=Beauty" className="text-foreground hover:text-primary transition">
            Beauty
          </Link>
          <Link to="/products?category=Fashion" className="text-foreground hover:text-primary transition">
            Fashion
          </Link>
          <Link to="/products?category=Wellness" className="text-foreground hover:text-primary transition">
            Wellness
          </Link>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="md:hidden p-2 hover:bg-muted rounded-lg transition"
          >
            <Search className="w-5 h-5" />
          </button>

          <button className="p-2 hover:bg-muted rounded-lg transition">
            <Heart className="w-5 h-5" />
          </button>

          <button className="p-2 hover:bg-muted rounded-lg transition">
            <ShoppingBag className="w-5 h-5" />
          </button>

          {user ? (
            <div className="flex items-center gap-2">
              <Link to="/profile">
                <Button variant="ghost" size="sm" className="gap-2">
                  <User className="w-4 h-4" />
                  <span className="hidden sm:inline">{user.name}</span>
                </Button>
              </Link>
              <Link to="/admin/products" title="Manage Products">
                <Button variant="ghost" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLogout}
                className="gap-2"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to="/login">
                <Button variant="ghost" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="md:hidden border-t border-border bg-background p-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-muted text-foreground placeholder:text-muted-foreground px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      )}
    </header>
  );
}
