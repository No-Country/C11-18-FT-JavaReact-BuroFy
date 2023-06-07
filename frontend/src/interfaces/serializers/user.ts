export type Interview = "remote" | "onSite";

export type Rating =  "20%" | "40%" |  "60%" |  "80%" |   "100%"  ;  

export interface UserClientContent {
  occupation?: string | null;
  payment?: UserPayment;
}

export interface UserProfessionalContent {
  dni?: string | null;
  enrollment?: string | null;
  price?: string | null;
  rating?: Rating | null;
  experience?: string | null;
  training?: string | null;
  certification?: string | null;
  typeJob?: string[] | Interview[];
}

export interface UserPayment {
  stripe?: string | null;
}
