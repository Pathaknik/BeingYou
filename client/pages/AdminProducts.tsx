import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { PRODUCTS, updateCachedProducts } from "@/lib/products";
import { saveProducts, getProducts } from "@/lib/storage";
import { Product } from "@shared/api";
import { Trash2, Plus, Edit2, Save, X } from "lucide-react";

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    category: "Beauty" as const,
    price: 0,
    image: "",
    description: "",
    inStock: true,
  });

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleAddProduct = () => {
    if (!formData.name.trim() || !formData.image.trim()) {
      alert("Please fill in product name and image URL");
      return;
    }

    const newProduct: Product = {
      id: `p${Date.now()}`,
      ...formData,
      rating: 4.8,
      reviewCount: 0,
      reviews: [
        {
          id: "r1",
          author: "Customer",
          rating: 5,
          text: "Great product!",
          date: new Date().toISOString().split("T")[0],
        },
      ],
    };

    const updated = [...products, newProduct];
    setProducts(updated);
    saveProducts(updated);
    updateCachedProducts(updated);

    setFormData({
      name: "",
      category: "Beauty",
      price: 0,
      image: "",
      description: "",
      inStock: true,
    });
    setIsAdding(false);
  };

  const handleDeleteProduct = (id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updated = products.filter((p) => p.id !== id);
      setProducts(updated);
      saveProducts(updated);
      updateCachedProducts(updated);
    }
  };

  const handleUpdateProduct = (id: string, updates: Partial<Product>) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, ...updates } : p
    );
    setProducts(updated);
    saveProducts(updated);
    updateCachedProducts(updated);
    setEditingId(null);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-4xl font-serif font-bold text-foreground">
                Product Management
              </h1>
              <button
                onClick={() => setIsAdding(true)}
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition"
              >
                <Plus className="w-5 h-5" />
                Add Product
              </button>
            </div>

            {/* Add Product Form */}
            {isAdding && (
              <div className="bg-card border border-border rounded-2xl p-6 mb-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Add New Product
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Product Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., Luxury Face Cleanser"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          category: e.target.value as any,
                        })
                      }
                      className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option>Beauty</option>
                      <option>Fashion</option>
                      <option>Wellness</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Price (INR)
                    </label>
                    <input
                      type="number"
                      value={formData.price}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          price: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="e.g., 1500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      In Stock
                    </label>
                    <select
                      value={formData.inStock ? "true" : "false"}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          inStock: e.target.value === "true",
                        })
                      }
                      className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="true">In Stock</option>
                      <option value="false">Out of Stock</option>
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Image URL
                    </label>
                    <input
                      type="url"
                      value={formData.image}
                      onChange={(e) =>
                        setFormData({ ...formData, image: e.target.value })
                      }
                      className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="https://images.unsplash.com/..."
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Use Unsplash URLs: https://images.unsplash.com/...
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Description
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Product description..."
                      rows={3}
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handleAddProduct}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-semibold transition"
                  >
                    <Save className="w-4 h-4" />
                    Save Product
                  </button>
                  <button
                    onClick={() => setIsAdding(false)}
                    className="flex items-center gap-2 bg-muted hover:bg-muted/80 text-foreground px-6 py-2 rounded-lg font-semibold transition"
                  >
                    <X className="w-4 h-4" />
                    Cancel
                  </button>
                </div>
              </div>
            )}

            {/* Products List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Products ({products.length})
              </h2>

              {products.length === 0 ? (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No products yet. Click "Add Product" to get started.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  {products.map((product) => (
                    <div
                      key={product.id}
                      className="bg-card border border-border rounded-lg p-6 flex items-start justify-between hover:border-primary/50 transition"
                    >
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-lg">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {product.category} • ₹{product.price.toLocaleString(
                            "en-IN"
                          )}
                        </p>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <span
                            className={`inline-block px-2 py-1 rounded text-xs font-semibold ${
                              product.inStock
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {product.inStock ? "In Stock" : "Out of Stock"}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ID: {product.id}
                          </span>
                        </div>
                      </div>

                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={() => setEditingId(product.id)}
                          className="p-2 hover:bg-muted rounded-lg transition"
                          title="Edit product"
                        >
                          <Edit2 className="w-4 h-4 text-foreground" />
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          className="p-2 hover:bg-red-100 rounded-lg transition"
                          title="Delete product"
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
