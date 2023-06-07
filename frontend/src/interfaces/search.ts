import { Rating } from "./serializers/user";
export interface Search {
  id: string | number;
  fullName: string; 
  avatar: string | null;
  experience: string;
  rating :  Rating | null;
  location : string | null;
  price: string
}

export interface ObjectSearch {
  searchs: Search[]
}