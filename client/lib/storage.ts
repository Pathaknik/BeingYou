import { Product } from "@shared/api";

const PRODUCTS_STORAGE_KEY = "luxe_products";

// Default products (fallback if localStorage is empty)
const DEFAULT_PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Radiant Glow Serum",
    category: "Beauty",
    price: 3800,
    image:
      "https://images.unsplash.com/photo-1570545063211-8476ceeb722d?w=500&h=500&fit=crop&q=80",
    description:
      "Vitamin C-infused serum that brightens and evens skin tone. Perfect for achieving a luminous complexion with regular use.",
    rating: 4.8,
    reviewCount: 324,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Sarah M.",
        rating: 5,
        text: "This serum is absolutely amazing! My skin has never looked better. Highly recommended!",
        date: "2024-01-15",
      },
      {
        id: "r2",
        author: "Jessica L.",
        rating: 4,
        text: "Great product, though it takes a few weeks to see results. Worth the investment.",
        date: "2024-01-12",
      },
      {
        id: "r3",
        author: "Emma R.",
        rating: 5,
        text: "The texture is silky and absorbs quickly. I use it every morning!",
        date: "2024-01-10",
      },
    ],
  },
];

export function getProducts(): Product[] {
  try {
    const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Failed to load products from storage:", error);
  }
  return DEFAULT_PRODUCTS;
}

export function saveProducts(products: Product[]): void {
  try {
    localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
  } catch (error) {
    console.error("Failed to save products to storage:", error);
  }
}

export function initializeStorage(): void {
  const stored = localStorage.getItem(PRODUCTS_STORAGE_KEY);
  if (!stored) {
    saveProducts(DEFAULT_PRODUCTS);
  }
}
