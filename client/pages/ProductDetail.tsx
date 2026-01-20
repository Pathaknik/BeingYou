import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { PRODUCTS } from "@/lib/products";
import { Star, Heart, ShoppingBag, ChevronLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = PRODUCTS.find((p) => p.id === id);
  const [isAdded, setIsAdded] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (!product) {
      navigate("/products");
    }
  }, [product, navigate]);

  const trackActivity = async (action: "view" | "add_to_cart" | "purchase") => {
    const user = localStorage.getItem("user");
    if (user && product) {
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

  useEffect(() => {
    if (product) {
      trackActivity("view");
    }
  }, [product?.id]);

  if (!product) {
    return null;
  }

  const handleAddToCart = () => {
    trackActivity("add_to_cart");
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const handlePurchase = () => {
    trackActivity("purchase");
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

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

        {/* Product Detail */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="bg-muted rounded-2xl overflow-hidden aspect-square flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block bg-primary text-primary-foreground text-sm font-semibold px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>

              <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? "fill-secondary text-secondary"
                          : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-foreground">
                  {product.rating}
                </span>
                <span className="text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <span className="text-5xl font-bold text-foreground">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg mb-8">
                {product.description}
              </p>

              {/* Stock Status */}
              <div className="mb-8">
                <span
                  className={`inline-block font-semibold ${
                    product.inStock
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className={`flex-1 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${
                    isAdded
                      ? "bg-green-500 text-white"
                      : product.inStock
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                      : "bg-muted text-muted-foreground cursor-not-allowed"
                  }`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  {isAdded ? "Added to Cart!" : "Add to Cart"}
                </button>

                <button
                  onClick={() => {
                    setIsWishlisted(!isWishlisted);
                  }}
                  className="px-6 py-3 rounded-lg font-semibold border-2 border-primary hover:bg-primary/10 transition flex items-center justify-center gap-2"
                >
                  <Heart
                    className={`w-5 h-5 ${
                      isWishlisted
                        ? "fill-red-500 text-red-500"
                        : "text-primary"
                    }`}
                  />
                  Wishlist
                </button>
              </div>

              <button
                onClick={handlePurchase}
                disabled={!product.inStock}
                className={`py-3 rounded-lg font-semibold transition ${
                  product.inStock
                    ? "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    : "bg-muted text-muted-foreground cursor-not-allowed"
                }`}
              >
                Buy Now
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="border-t border-border pt-12 mb-16">
            <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
              Customer Reviews
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {product.reviews.map((review) => (
                <div key={review.id} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? "fill-secondary text-secondary"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-foreground font-semibold mb-2">
                    {review.author}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3">
                    {review.text}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-border pt-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
                Related Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition cursor-pointer"
                    onClick={() => navigate(`/products/${relatedProduct.id}`)}
                  >
                    <div className="aspect-square bg-muted overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-foreground mb-2 line-clamp-2">
                        {relatedProduct.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-foreground">
                          ${relatedProduct.price}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-secondary text-secondary" />
                          <span className="text-sm text-foreground font-medium">
                            {relatedProduct.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
