const WISHLIST_KEY = "luxe_wishlist";

export interface WishlistItem {
  productId: string;
  addedAt: string;
}

export function getWishlist(): string[] {
  try {
    const stored = localStorage.getItem(WISHLIST_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to load wishlist:", error);
    return [];
  }
}

export function isInWishlist(productId: string): boolean {
  return getWishlist().includes(productId);
}

export function addToWishlist(productId: string): string[] {
  const wishlist = getWishlist();
  
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }
  
  return wishlist;
}

export function removeFromWishlist(productId: string): string[] {
  const wishlist = getWishlist().filter((id) => id !== productId);
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  return wishlist;
}

export function toggleWishlist(productId: string): boolean {
  if (isInWishlist(productId)) {
    removeFromWishlist(productId);
    return false;
  } else {
    addToWishlist(productId);
    return true;
  }
}

export function clearWishlist(): void {
  localStorage.setItem(WISHLIST_KEY, JSON.stringify([]));
}

export function getWishlistCount(): number {
  return getWishlist().length;
}
