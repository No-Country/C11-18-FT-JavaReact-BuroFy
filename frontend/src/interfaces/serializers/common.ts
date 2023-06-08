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

export interface PersonalInformation extends Phone {
  location?: string;
  avatar?: string;
  occupation?: string;
}