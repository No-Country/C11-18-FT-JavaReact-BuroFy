export type Interview = "remote" | "onSite";

export type Review =  "20" | "40%" |  "60%" |  "80%" |   "100%"  ;  

export interface UserClientContent {
  occupation?: string | null;
  payment?: UserPayment;
}

export interface UserProfessionalContent {
  dni?: string | null;
  enrollment?: string | null;
  price?: string | null;
  review?: Review | null;
  category?: string | null,
  experience?: string | null;
  training?: string | null;
  certification?: string | null;
  typeJob?: string[] | Interview[];
}

export interface UserPayment {
  stripe?: string | null;
}
