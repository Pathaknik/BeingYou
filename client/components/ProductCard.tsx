import { Link } from "react-router-dom";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Product } from "@shared/api";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart }: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const trackActivity = async (action: "view" | "add_to_cart") => {
    const user = localStorage.getItem("user");
    if (user) {
      const userData = JSON.parse(user);
      try {
        await fetch("/api/activity/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: userData.email,
            productId: product.id,
            productName: product.name,
            action,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (error) {
        console.error("Failed to track activity:", error);
      }
    }
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    trackActivity("add_to_cart");
    if (onAddToCart) {
      onAddToCart(product);
    }
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handleViewProduct = () => {
    trackActivity("view");
  };

  return (
    <Link
      to={`/products/${product.id}`}
      onClick={handleViewProduct}
      className="group"
    >
      <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-muted aspect-square">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

          {/* Wishlist Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsWishlisted(!isWishlisted);
            }}
            className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur rounded-full hover:bg-background transition"
          >
            <Heart
              className={`w-5 h-5 ${
                isWishlisted ? "fill-red-500 text-red-500" : "text-foreground"
              }`}
            />
          </button>

          {/* Category Badge */}
          <div className="absolute bottom-3 left-3">
            <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition text-sm line-clamp-2">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-secondary text-secondary"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              {product.rating} ({product.reviewCount} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-auto mb-3">
            <span className="text-lg font-bold text-foreground">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-2.5 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
              isAdded
                ? "bg-green-500 text-white"
                : "bg-primary hover:bg-primary/90 text-primary-foreground"
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            {isAdded ? "Added!" : "Add to Cart"}
          </button>
        </div>
      </div>
    </Link>
  );
}
