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
  features: string[];
  status: "active" | "pending" | "sold";
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "client" | "agent";
}

export interface Inquiry {
  id: string;
  propertyId: string;
  clientName: string;
  clientEmail: string;
  status: "new" | "review" | "contacted";
  date: string;
}
