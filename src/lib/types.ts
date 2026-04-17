export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  description: string;
  type: "house" | "land" | "apartment";
  offer: "buy" | "rent";
  beds?: number;
  baths?: number;
  area: string;
  imageUrl: string;
  images: string[];
  features: string[];
  status: string;
}
