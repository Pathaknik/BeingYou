import { Product } from "@shared/api";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  addedAt: string;
}

const CART_KEY = "luxe_cart";

export function getCart(): CartItem[] {
  try {
    const stored = localStorage.getItem(CART_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to load cart:", error);
    return [];
  }
}

export function addToCart(product: Product, quantity: number = 1): CartItem[] {
  const cart = getCart();
  const existingItem = cart.find((item) => item.productId === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
      addedAt: new Date().toISOString(),
    });
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return cart;
}

export function removeFromCart(productId: string): CartItem[] {
  const cart = getCart().filter((item) => item.productId !== productId);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return cart;
}

export function updateCartQuantity(productId: string, quantity: number): CartItem[] {
  const cart = getCart();
  const item = cart.find((item) => item.productId === productId);
  
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(productId);
    }
    item.quantity = quantity;
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  return cart;
}

export function clearCart(): void {
  localStorage.setItem(CART_KEY, JSON.stringify([]));
}

export function getCartTotal(): number {
  return getCart().reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getCartCount(): number {
  return getCart().reduce((count, item) => count + item.quantity, 0);
}
