export interface MenuItem {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image?: string | null;
  featured?: boolean;
  bestSeller?: boolean;
  soldOut?: boolean;
  available?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string | null;
  items: MenuItem[];
}

export interface Topping {
  id: string;
  name: string;
  price: number;
}

export interface MenuData {
  categories: MenuCategory[];
  toppings: Topping[];
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  phone: string;
  hours: {
    weekday: string;
    weekend: string;
  };
  skipTheDishes?: string;
  mapEmbed?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

