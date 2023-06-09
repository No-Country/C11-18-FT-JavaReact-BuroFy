type Status = "progreso" | "cerrado" | "contestado" | "";

export interface Consultation {
  avatar?: string;
  fullName?: string;
  occupation?: string;
  experience?: string;
  date?: string;
  id?: string;
  idProfessional?: string;
  idClient?: string;
  status?: Status;
  price?: string;
  phone?: string;
  email?: string;
  location?: string;
  comments?: string;
}

export interface ObjectConsultation {
  consults: Consultation[];
}
