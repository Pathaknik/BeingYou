import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { PRODUCTS } from "@/lib/products";
import { Product } from "@shared/api";
import { getWishlist, removeFromWishlist } from "@/lib/wishlist";
import { Heart, ChevronLeft, ShoppingBag } from "lucide-react";

export default function Wishlist() {
  const navigate = useNavigate();
  const [wishlistedProducts, setWishlistedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = () => {
    const wishlistIds = getWishlist();
    const allProducts = PRODUCTS();
    const wishlisted = allProducts.filter((p) =>
      wishlistIds.includes(p.id)
    );
    setWishlistedProducts(wishlisted);
    setLoading(false);
  };

  const handleRemoveFromWishlist = (productId: string) => {
    removeFromWishlist(productId);
    loadWishlist();
  };

  const handleAddToCart = (product: Product) => {
    // This would integrate with your cart system
    navigate(`/products/${product.id}`);
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <button
              onClick={() => navigate("/products")}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Products
            </button>
          </div>
        </div>

        {/* Wishlist Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground flex items-center gap-3 mb-2">
              <Heart className="w-10 h-10 fill-red-500 text-red-500" />
              My Wishlist
            </h1>
            <p className="text-muted-foreground">
              {wishlistedProducts.length}{" "}
              {wishlistedProducts.length === 1 ? "item" : "items"} saved
            </p>
          </div>

          {wishlistedProducts.length === 0 ? (
            <div className="bg-card border border-border rounded-2xl p-16 text-center">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-6 opacity-50" />
              <h2 className="text-2xl font-serif font-bold text-foreground mb-2">
                Your Wishlist is Empty
              </h2>
              <p className="text-muted-foreground mb-8">
                Start adding your favorite products! Click the heart icon on any
                product to save it.
              </p>
              <button
                onClick={() => navigate("/products")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition"
              >
                Explore Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col h-full group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden bg-muted aspect-square">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

                    {/* Category Badge */}
                    <div className="absolute bottom-3 left-3">
                      <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>

                    {/* Remove from Wishlist Button */}
                    <button
                      onClick={() => handleRemoveFromWishlist(product.id)}
                      className="absolute top-3 right-3 p-2 bg-red-500 hover:bg-red-600 rounded-full transition"
                      title="Remove from wishlist"
                    >
                      <Heart className="w-5 h-5 fill-white text-white" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition text-sm line-clamp-2 mb-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-muted-foreground line-clamp-2 mb-4">
                      {product.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-4 mt-auto">
                      <span className="text-lg font-bold text-foreground">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-green-600 font-semibold">
                        {product.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigate(`/products/${product.id}`)}
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-2 rounded-lg font-semibold transition text-sm flex items-center justify-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        View & Buy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
