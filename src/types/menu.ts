export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
  featured?: boolean;
  available?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  description: string;
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

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  category?: string;
}
