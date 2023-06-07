import { Review } from "./serializers/user";
export interface Search {
  idProfessional: string | number;
  fullName: string; 
  avatar: string | null;
  category: string;
  review :  Review | null;
  address : string | null;
  price: string
}

export interface ObjectSearch {
  searchs: Search[]
}