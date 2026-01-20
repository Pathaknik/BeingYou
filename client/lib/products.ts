import { Product } from "@shared/api";

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Radiant Glow Serum",
    category: "Beauty",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
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
  {
    id: "p2",
    name: "Luxe Leather Crossbody Bag",
    category: "Fashion",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop",
    description:
      "Italian leather crossbody bag with adjustable strap. Classic and versatile for everyday use.",
    rating: 4.9,
    reviewCount: 512,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Michelle W.",
        rating: 5,
        text: "Beautiful quality leather and perfect size. I get compliments all the time!",
        date: "2024-01-18",
      },
      {
        id: "r2",
        author: "Rachel T.",
        rating: 5,
        text: "Worth every penny. The craftsmanship is incredible.",
        date: "2024-01-16",
      },
      {
        id: "r3",
        author: "Victoria K.",
        rating: 4,
        text: "Great bag, minor color difference from photos but still beautiful.",
        date: "2024-01-14",
      },
    ],
  },
  {
    id: "p3",
    name: "Anti-Aging Face Mask",
    category: "Beauty",
    price: 38.99,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop",
    description:
      "Collagen-rich face mask that reduces fine lines and improves skin elasticity in just one application.",
    rating: 4.7,
    reviewCount: 287,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Lisa P.",
        rating: 5,
        text: "My skin felt so plump and hydrated after using this. Amazing results!",
        date: "2024-01-17",
      },
      {
        id: "r2",
        author: "Amanda H.",
        rating: 4,
        text: "Good mask but a bit pricey. Great for special occasions.",
        date: "2024-01-13",
      },
      {
        id: "r3",
        author: "Sophie D.",
        rating: 5,
        text: "This is now a staple in my skincare routine. Highly recommend!",
        date: "2024-01-11",
      },
    ],
  },
  {
    id: "p4",
    name: "Premium Wellness Journal",
    category: "Wellness",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1507842217343-583f20270319?w=500&h=500&fit=crop&q=60",
    description:
      "Beautifully designed wellness journal with guided prompts for mindfulness and self-reflection.",
    rating: 4.6,
    reviewCount: 198,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Natalie G.",
        rating: 5,
        text: "This journal has really helped me focus on my mental health. Love the design!",
        date: "2024-01-16",
      },
      {
        id: "r2",
        author: "Anna B.",
        rating: 4,
        text: "Great quality paper and thoughtful prompts. Perfect for daily reflections.",
        date: "2024-01-14",
      },
      {
        id: "r3",
        author: "Claire M.",
        rating: 5,
        text: "Best purchase I've made this year. Highly therapeutic!",
        date: "2024-01-09",
      },
    ],
  },
  {
    id: "p5",
    name: "Designer Sunglasses",
    category: "Fashion",
    price: 149.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",
    description:
      "Premium UV-protective sunglasses with UV400 lenses. Iconic style that suits every face shape.",
    rating: 4.8,
    reviewCount: 423,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Diana L.",
        rating: 5,
        text: "These sunglasses are stunning! Great protection and so stylish.",
        date: "2024-01-15",
      },
      {
        id: "r2",
        author: "Rebecca S.",
        rating: 5,
        text: "Best sunglasses I've ever owned. Comfortable to wear all day.",
        date: "2024-01-12",
      },
      {
        id: "r3",
        author: "Kate N.",
        rating: 4,
        text: "Beautiful design. Slightly snug at first but perfect after wearing in.",
        date: "2024-01-10",
      },
    ],
  },
  {
    id: "p6",
    name: "Aromatherapy Essential Oil Set",
    category: "Wellness",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop",
    description:
      "6-piece essential oil collection with lavender, eucalyptus, peppermint, and more for relaxation.",
    rating: 4.9,
    reviewCount: 356,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Monica C.",
        rating: 5,
        text: "These oils smell amazing! Perfect for aromatherapy and meditation.",
        date: "2024-01-18",
      },
      {
        id: "r2",
        author: "Olivia T.",
        rating: 5,
        text: "Great quality oils at a fair price. Love the variety pack!",
        date: "2024-01-16",
      },
      {
        id: "r3",
        author: "Nia J.",
        rating: 4,
        text: "Good quality. Scents are potent and last a long time.",
        date: "2024-01-13",
      },
    ],
  },
  {
    id: "p7",
    name: "Silk Sleep Pillowcase",
    category: "Wellness",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1584857300282-a8eec600fc35?w=500&h=500&fit=crop",
    description:
      "100% mulberry silk pillowcase that reduces hair breakage and keeps skin hydrated while sleeping.",
    rating: 4.7,
    reviewCount: 267,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Tanya V.",
        rating: 5,
        text: "My hair has never been better! This pillowcase is a game-changer.",
        date: "2024-01-17",
      },
      {
        id: "r2",
        author: "Mariah P.",
        rating: 4,
        text: "Great quality silk. Definitely worth the price for beauty benefits.",
        date: "2024-01-15",
      },
      {
        id: "r3",
        author: "Zoe L.",
        rating: 5,
        text: "Feels so luxurious! My skin looks more hydrated in the morning.",
        date: "2024-01-12",
      },
    ],
  },
  {
    id: "p8",
    name: "Premium Athletic Leggings",
    category: "Fashion",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1506629082632-401ba63c6711?w=500&h=500&fit=crop",
    description:
      "High-waisted leggings with moisture-wicking fabric. Perfect for gym, yoga, and everyday wear.",
    rating: 4.8,
    reviewCount: 445,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Jasmine R.",
        rating: 5,
        text: "These leggings are so comfortable! I wear them almost every day.",
        date: "2024-01-18",
      },
      {
        id: "r2",
        author: "Keisha M.",
        rating: 5,
        text: "Great fit and quality. No pilling after multiple washes.",
        date: "2024-01-16",
      },
      {
        id: "r3",
        author: "Priya S.",
        rating: 4,
        text: "Very comfortable for workouts. True to size.",
        date: "2024-01-14",
      },
    ],
  },
];
