import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { getCart, removeFromCart, updateCartQuantity, clearCart, getCartTotal } from "@/lib/cart";
import { CartItem } from "@/lib/cart";
import { Trash2, Plus, Minus, ChevronLeft } from "lucide-react";

export default function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = () => {
    const cartItems = getCart();
    setItems(cartItems);
    setTotal(getCartTotal());
  };

  const handleRemoveItem = (productId: string) => {
    removeFromCart(productId);
    loadCart();
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    updateCartQuantity(productId, quantity);
    loadCart();
  };

  const handleClearCart = () => {
    if (window.confirm("Clear entire cart?")) {
      clearCart();
      loadCart();
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) {
      alert("Your cart is empty");
      return;
    }
    alert(
      `Order placed! Total: ₹${total.toLocaleString("en-IN")}\n\nThank you for your purchase!`
    );
    clearCart();
    loadCart();
    navigate("/products");
  };

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
              Continue Shopping
            </button>
          </div>
        </div>

        {/* Cart Content */}
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
            Shopping Cart
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              {items.length === 0 ? (
                <div className="bg-card border border-border rounded-2xl p-12 text-center">
                  <p className="text-muted-foreground text-lg mb-6">
                    Your cart is empty
                  </p>
                  <button
                    onClick={() => navigate("/products")}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.productId}
                      className="bg-card border border-border rounded-lg p-6 flex gap-6"
                    >
                      {/* Image */}
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-lg">
                          {item.name}
                        </h3>
                        <p className="text-primary font-bold mt-2">
                          ₹{item.price.toLocaleString("en-IN")}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 mt-4">
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.productId, item.quantity - 1)
                            }
                            className="p-1 hover:bg-muted rounded transition"
                          >
                            <Minus className="w-4 h-4 text-foreground" />
                          </button>
                          <span className="font-semibold text-foreground w-8 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleUpdateQuantity(item.productId, item.quantity + 1)
                            }
                            className="p-1 hover:bg-muted rounded transition"
                          >
                            <Plus className="w-4 h-4 text-foreground" />
                          </button>
                        </div>
                      </div>

                      {/* Subtotal & Delete */}
                      <div className="text-right flex flex-col justify-between">
                        <div>
                          <p className="text-sm text-muted-foreground">Subtotal</p>
                          <p className="text-lg font-bold text-foreground">
                            ₹
                            {(item.price * item.quantity).toLocaleString("en-IN")}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.productId)}
                          className="p-2 hover:bg-red-100 rounded-lg transition self-end"
                        >
                          <Trash2 className="w-5 h-5 text-red-500" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Summary */}
            <div>
              <div className="bg-card border border-border rounded-2xl p-6 sticky top-20">
                <h2 className="text-xl font-serif font-bold text-foreground mb-6">
                  Order Summary
                </h2>

                {items.length > 0 && (
                  <>
                    <div className="space-y-3 mb-6 pb-6 border-b border-border">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span className="font-semibold text-foreground">
                          ₹{total.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="font-semibold text-foreground">Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span className="font-semibold text-foreground">Included</span>
                      </div>
                    </div>

                    <div className="flex justify-between mb-6">
                      <span className="font-bold text-lg text-foreground">Total</span>
                      <span className="font-bold text-lg text-primary">
                        ₹{total.toLocaleString("en-IN")}
                      </span>
                    </div>

                    <button
                      onClick={handleCheckout}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 rounded-lg transition mb-3"
                    >
                      Checkout
                    </button>

                    <button
                      onClick={handleClearCart}
                      className="w-full border-2 border-muted text-muted-foreground hover:bg-muted font-semibold py-3 rounded-lg transition"
                    >
                      Clear Cart
                    </button>
                  </>
                )}

                {items.length === 0 && (
                  <p className="text-muted-foreground text-sm">
                    Your cart is currently empty.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
