export interface Address {
  location: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
}

export interface Phone {
  phone?: string;
}

export interface PersonalInformation {
  location?: string;
  avatar?: string;
  result?: string;
  phone?: Phone;
  occupation?: string;
}
