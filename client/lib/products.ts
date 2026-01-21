import { Product } from "@shared/api";
import { getProducts } from "./storage";

// Products are now loaded from localStorage
// This reference will be evaluated when imported
let cachedProducts: Product[] | null = null;

export function PRODUCTS(): Product[] {
  if (cachedProducts === null) {
    cachedProducts = getProducts();
  }
  return cachedProducts;
}

export function refreshProducts(): void {
  cachedProducts = getProducts();
}

export function updateCachedProducts(products: Product[]): void {
  cachedProducts = products;
}

// Re-export the getProducts for direct access
export { getProducts } from "./storage";
