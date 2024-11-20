export interface Ticket {
  id: string;
  name: string;
  price: number;
  description: string;
  available: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: "food" | "drink";
  image: string;
  inStock: boolean;
}
