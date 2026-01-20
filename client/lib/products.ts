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
      "https://images.unsplash.com/photo-1544716278-ca5e3af4abd8?w=500&h=500&fit=crop&q=80",
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
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500&h=500&fit=crop&q=80",
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
      "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=500&h=500&fit=crop&q=80",
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
      "https://images.unsplash.com/photo-1441701494784-dc2738aa9142?w=500&h=500&fit=crop&q=80",
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
  {
    id: "p9",
    name: "Rose Gold Makeup Brush Set",
    category: "Beauty",
    price: 42.99,
    image:
      "https://images.unsplash.com/photo-1596462502278-af242a95b598?w=500&h=500&fit=crop&q=80",
    description:
      "Professional 12-piece makeup brush set with rose gold handles. Perfect for flawless makeup application.",
    rating: 4.9,
    reviewCount: 298,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Chelsea B.",
        rating: 5,
        text: "Best brushes I've ever used! The quality is amazing for the price.",
        date: "2024-01-18",
      },
      {
        id: "r2",
        author: "Erin M.",
        rating: 5,
        text: "Beautiful set and the brushes are so soft. Highly recommend!",
        date: "2024-01-16",
      },
      {
        id: "r3",
        author: "Harper L.",
        rating: 4,
        text: "Great quality. Takes a while to get used to them but worth it.",
        date: "2024-01-14",
      },
    ],
  },
  {
    id: "p10",
    name: "Trendy Crossbody Sling Bag",
    category: "Fashion",
    price: 64.99,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop&q=80",
    description:
      "Stylish mini crossbody bag with adjustable strap. Perfect for day trips and casual outings.",
    rating: 4.6,
    reviewCount: 187,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Sophia J.",
        rating: 5,
        text: "Cute and practical. Perfect size for everyday essentials.",
        date: "2024-01-17",
      },
      {
        id: "r2",
        author: "Maya K.",
        rating: 4,
        text: "Good quality bag. Adjustable strap is a plus.",
        date: "2024-01-15",
      },
      {
        id: "r3",
        author: "Nina R.",
        rating: 5,
        text: "Love the color and style. Very Instagram-worthy!",
        date: "2024-01-12",
      },
    ],
  },
  {
    id: "p11",
    name: "Hydrating Face Moisturizer",
    category: "Beauty",
    price: 35.99,
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=500&fit=crop&q=80",
    description:
      "Lightweight hydrating moisturizer with hyaluronic acid. Suitable for all skin types.",
    rating: 4.8,
    reviewCount: 412,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Grace T.",
        rating: 5,
        text: "This moisturizer is a lifesaver! My skin feels so hydrated.",
        date: "2024-01-18",
      },
      {
        id: "r2",
        author: "Lucy W.",
        rating: 5,
        text: "Absorbs quickly and doesn't leave greasy residue.",
        date: "2024-01-16",
      },
      {
        id: "r3",
        author: "Bella M.",
        rating: 4,
        text: "Good product. A little goes a long way.",
        date: "2024-01-14",
      },
    ],
  },
  {
    id: "p12",
    name: "Luxury Hair Care Serum",
    category: "Beauty",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop&q=80",
    description:
      "Premium argan oil hair serum that adds shine and reduces frizz. Perfect for all hair types.",
    rating: 4.7,
    reviewCount: 323,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Victoria P.",
        rating: 5,
        text: "My hair has never looked shinier! This serum is magical.",
        date: "2024-01-17",
      },
      {
        id: "r2",
        author: "Amber H.",
        rating: 4,
        text: "Great product. A little goes a long way. Recommend!",
        date: "2024-01-15",
      },
      {
        id: "r3",
        author: "Sienna G.",
        rating: 5,
        text: "Reduces frizz so well. Love using this before styling.",
        date: "2024-01-12",
      },
    ],
  },
  {
    id: "p13",
    name: "Oversized Linen Blazer",
    category: "Fashion",
    price: 94.99,
    image:
      "https://images.unsplash.com/photo-1539533057440-7bf6ad799eae?w=500&h=500&fit=crop&q=80",
    description:
      "Chic oversized linen blazer. Perfect for casual and formal occasions. Breathable and comfortable.",
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Jennifer S.",
        rating: 5,
        text: "This blazer is so versatile! Looks great with anything.",
        date: "2024-01-18",
      },
      {
        id: "r2",
        author: "Lauren D.",
        rating: 4,
        text: "Comfortable and stylish. A wardrobe staple!",
        date: "2024-01-16",
      },
      {
        id: "r3",
        author: "Megan C.",
        rating: 5,
        text: "Perfect for summer. Lightweight and breathable.",
        date: "2024-01-13",
      },
    ],
  },
  {
    id: "p14",
    name: "Wellness Vitamin Supplement Pack",
    category: "Wellness",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=500&fit=crop&q=80",
    description:
      "Complete daily vitamin and mineral supplement pack. Supports immune system and overall health.",
    rating: 4.6,
    reviewCount: 289,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Jessica N.",
        rating: 5,
        text: "I feel more energetic since taking these. Great value!",
        date: "2024-01-17",
      },
      {
        id: "r2",
        author: "Rachel T.",
        rating: 4,
        text: "Good quality supplements. Easy to take daily.",
        date: "2024-01-15",
      },
      {
        id: "r3",
        author: "Sophia L.",
        rating: 5,
        text: "Noticeable difference in my energy levels. Highly recommend!",
        date: "2024-01-12",
      },
    ],
  },
  {
    id: "p15",
    name: "Gold-Plated Jewelry Set",
    category: "Fashion",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=500&fit=crop&q=80",
    description:
      "Elegant gold-plated jewelry set with necklace, bracelet, and earrings. Perfect for gifting.",
    rating: 4.8,
    reviewCount: 234,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Olivia R.",
        rating: 5,
        text: "Gorgeous set! Looks way more expensive than the price.",
        date: "2024-01-18",
      },
      {
        id: "r2",
        author: "Emma V.",
        rating: 5,
        text: "Beautiful jewelry. Great gift for any occasion.",
        date: "2024-01-16",
      },
      {
        id: "r3",
        author: "Ava K.",
        rating: 4,
        text: "Great quality for the price. Highly satisfied!",
        date: "2024-01-13",
      },
    ],
  },
  {
    id: "p16",
    name: "Wellness Yoga Mat",
    category: "Wellness",
    price: 44.99,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&h=500&fit=crop&q=80",
    description:
      "Premium non-slip yoga mat with carrying strap. Perfect for yoga, pilates, and meditation.",
    rating: 4.9,
    reviewCount: 378,
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Natalie H.",
        rating: 5,
        text: "Best yoga mat I've owned! Super comfortable and stable.",
        date: "2024-01-18",
      },
      {
        id: "r2",
        author: "Katie F.",
        rating: 5,
        text: "Non-slip surface is amazing. Highly recommend!",
        date: "2024-01-16",
      },
      {
        id: "r3",
        author: "Sophie B.",
        rating: 4,
        text: "Great quality. Perfect for home workouts.",
        date: "2024-01-14",
      },
    ],
  },
];
