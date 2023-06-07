export interface Address {
  location: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export interface Phone {
  phone?: string | null;
}
