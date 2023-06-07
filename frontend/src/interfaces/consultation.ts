type Status = "progreso" | "cerrado" | "contestado";

export interface Consultation {
  id: string | number;
  idClient: string | number;
  idProfessional: string | number;
  status: Status;
  type: string;
  date: Date;
  comments: string;
  avatar: string | null;
  experience : string;
}
