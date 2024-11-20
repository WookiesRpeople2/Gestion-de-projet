import { MenuItem, Ticket } from "./types";

export const tickets: Ticket[] = [
  {
    id: "1",
    name: "Early Bird",
    price: 49.99,
    description: "Get the best price with our early bird tickets",
    available: 100,
  },
  {
    id: "2",
    name: "Regular",
    price: 79.99,
    description: "Standard admission ticket",
    available: 200,
  },
  {
    id: "3",
    name: "VIP",
    price: 149.99,
    description: "VIP access with exclusive perks",
    available: 50,
  },
];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Artisan Burger",
    price: 15.99,
    description: "Premium beef patty with artisanal toppings",
    category: "food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800",
    inStock: false,
  },
  {
    id: "2",
    name: "Craft Beer",
    price: 8.99,
    description: "Local IPA with citrus notes",
    category: "drink",
    image:
      "https://images.unsplash.com/photo-1535958636474-b021ee887b13?auto=format&fit=crop&w=800",
    inStock: true,
  },
  {
    id: "3",
    name: "Gourmet Pizza",
    price: 18.99,
    description: "Wood-fired pizza with fresh ingredients",
    category: "food",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800",
    inStock: false,
  },
];
