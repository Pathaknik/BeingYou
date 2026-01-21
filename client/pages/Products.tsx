import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { PRODUCTS } from "@/lib/products";
import { Product } from "@shared/api";
import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, X } from "lucide-react";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high" | "rating">("featured");

  const selectedCategory = searchParams.get("category");

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = PRODUCTS();

    if (selectedCategory) {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    const sorted = [...filtered];
    switch (sortBy) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return sorted;
  }, [selectedCategory, sortBy]);

  const categories = ["All", "Beauty", "Fashion", "Wellness"] as const;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        {/* Page Header */}
        <div className="border-b border-border bg-gradient-to-br from-background to-muted">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
              Our Collection
            </h1>
            <p className="text-muted-foreground">
              Discover our curated selection of beauty, fashion, and wellness products
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex gap-6">
            {/* Sidebar - Desktop */}
            <div className="hidden md:block w-56 flex-shrink-0">
              <div className="sticky top-20">
                {/* Categories */}
                <div className="mb-8">
                  <h3 className="font-semibold text-foreground mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => {
                          if (cat === "All") {
                            setSearchParams({});
                          } else {
                            setSearchParams({ category: cat });
                          }
                        }}
                        className={`w-full text-left px-3 py-2 rounded-lg transition ${
                          (cat === "All" && !selectedCategory) ||
                          (cat !== "All" && selectedCategory === cat)
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Sort By</h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="w-full bg-input text-foreground px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Button */}
              <div className="md:hidden mb-6 flex items-center justify-between">
                <button
                  onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
                  className="flex items-center gap-2 px-4 py-2 bg-muted text-foreground rounded-lg"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </button>
                <span className="text-sm text-muted-foreground">
                  {filteredAndSortedProducts.length} products
                </span>
              </div>

              {/* Mobile Filter Panel */}
              {mobileFilterOpen && (
                <div className="md:hidden mb-6 p-4 bg-card border border-border rounded-lg space-y-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold">Filters</h3>
                    <button
                      onClick={() => setMobileFilterOpen(false)}
                      className="p-1 hover:bg-muted rounded"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-3">Categories</h4>
                    <div className="space-y-2">
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => {
                            if (cat === "All") {
                              setSearchParams({});
                            } else {
                              setSearchParams({ category: cat });
                            }
                            setMobileFilterOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 rounded-lg transition text-sm ${
                            (cat === "All" && !selectedCategory) ||
                            (cat !== "All" && selectedCategory === cat)
                              ? "bg-primary text-primary-foreground font-medium"
                              : "text-foreground hover:bg-muted"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-sm mb-3">Sort By</h4>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as any)}
                      className="w-full bg-input text-foreground px-3 py-2 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Highest Rated</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Products Grid */}
              <div>
                <div className="hidden md:block mb-4 text-sm text-muted-foreground">
                  Showing {filteredAndSortedProducts.length} products
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredAndSortedProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {filteredAndSortedProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No products found in this category.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
