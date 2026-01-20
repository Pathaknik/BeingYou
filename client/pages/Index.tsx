import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { ArrowRight, Sparkles, Heart, Zap } from "lucide-react";

export default function Index() {
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <>
      <Header />
      <div className="bg-background">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
          </div>

          <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
            <div className="max-w-3xl">
              <div className="inline-block mb-4 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Welcome to LUXE
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                Discover Your <span className="text-primary">Perfect Look</span>
              </h1>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Curated beauty, fashion, and wellness products handpicked for Instagram's most-loved
                trends. Elevate your self-care routine with products trusted by influencers worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition"
                >
                  Shop Now
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/products?category=Beauty"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary/5 font-semibold rounded-lg transition"
                >
                  Explore Beauty
                  <Sparkles className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category Highlights */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Beauty Category */}
            <Link
              to="/products?category=Beauty"
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-red-500/20 group-hover:from-pink-500/30 group-hover:to-red-500/30 transition" />
              <img
                src="https://images.unsplash.com/photo-1596724181169-82b517e5c5ba?w=600&h=600&fit=crop"
                alt="Beauty"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="text-2xl font-serif font-bold text-white">Beauty</h3>
                  <p className="text-white/90 mt-2">Skincare & Makeup</p>
                </div>
              </div>
            </Link>

            {/* Fashion Category */}
            <Link
              to="/products?category=Fashion"
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition" />
              <img
                src="https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop"
                alt="Fashion"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Sparkles className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="text-2xl font-serif font-bold text-white">Fashion</h3>
                  <p className="text-white/90 mt-2">Clothing & Accessories</p>
                </div>
              </div>
            </Link>

            {/* Wellness Category */}
            <Link
              to="/products?category=Wellness"
              className="group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-300 h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 group-hover:from-green-500/30 group-hover:to-emerald-500/30 transition" />
              <img
                src="https://images.unsplash.com/photo-1584857300282-a8eec600fc35?w=600&h=600&fit=crop"
                alt="Wellness"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <Zap className="w-8 h-8 text-white mx-auto mb-3" />
                  <h3 className="text-2xl font-serif font-bold text-white">Wellness</h3>
                  <p className="text-white/90 mt-2">Health & Self-Care</p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Featured Products */}
        <div className="border-t border-border bg-gradient-to-b from-background to-muted">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-2">
                  Featured Collections
                </h2>
                <p className="text-muted-foreground">
                  Top-rated products loved by Instagram influencers
                </p>
              </div>
              <Link
                to="/products"
                className="hidden md:flex items-center gap-2 px-6 py-2 text-primary hover:text-primary/80 font-semibold transition"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <Link
              to="/products"
              className="md:hidden flex items-center justify-center gap-2 px-6 py-2 w-full text-primary font-semibold transition"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="inline-block p-3 bg-primary/10 rounded-lg mb-3">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Trusted by 100K+</h3>
              <p className="text-sm text-muted-foreground">Happy customers</p>
            </div>

            <div>
              <div className="inline-block p-3 bg-secondary/10 rounded-lg mb-3">
                <Sparkles className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Verified Reviews</h3>
              <p className="text-sm text-muted-foreground">Authentic feedback</p>
            </div>

            <div>
              <div className="inline-block p-3 bg-primary/10 rounded-lg mb-3">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Fast Shipping</h3>
              <p className="text-sm text-muted-foreground">2-3 business days</p>
            </div>

            <div>
              <div className="inline-block p-3 bg-secondary/10 rounded-lg mb-3">
                <ArrowRight className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day guarantee</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border-t border-border">
          <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Stay Updated
              </h2>
              <p className="text-muted-foreground mb-8">
                Subscribe to get exclusive deals and product launches straight to your inbox
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-input text-foreground placeholder:text-muted-foreground px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-lg transition whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
