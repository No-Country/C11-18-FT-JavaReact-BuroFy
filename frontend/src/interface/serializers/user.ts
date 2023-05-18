export type Interview = "remote" | "onSite";

export interface UserClientContent {
  occupation?: string | null;
  payment?: UserPayment
}

export interface UserProfessionalContent {
  professionalDocument?: string | null;
  experience?: string | null;
  training?: string | null;
  diploma?: string | null;
  typeJob?: string[] | Interview[]
}

export interface UserPayment {
    stripe?: string | null
}