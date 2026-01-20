/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

/**
 * Authentication types
 */
export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  name: string;
}

export interface AuthResponse {
  success: boolean;
  user?: {
    id: string;
    email: string;
    name: string;
  };
  message?: string;
}

/**
 * Product types
 */
export interface Product {
  id: string;
  name: string;
  category: "Beauty" | "Fashion" | "Wellness";
  price: number;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

/**
 * Activity tracking types
 */
export interface ActivityTrackingRequest {
  email: string;
  productId: string;
  productName: string;
  action: "view" | "add_to_cart" | "purchase";
  timestamp: string;
}

export interface ActivityTrackingResponse {
  success: boolean;
  message?: string;
}
