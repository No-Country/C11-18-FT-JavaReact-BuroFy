export interface Consultation {
  id: string | number;
  idClient: string | number;
  idProfessional: string | number;
  idPay: string | number;
  type: string;
  date: Date;
  comments: string;
}
