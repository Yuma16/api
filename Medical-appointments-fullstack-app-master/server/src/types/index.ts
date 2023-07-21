export interface IErrorMessage {
  message: string;
  object: string;
}

export interface IPatient {
  first_name: string;
  last_name: string;
  birth_date: Date;
  phone: number;
};

export interface IDoctor {
  first_name: string;
  last_name: string;
  email: string;
  id_office_number: number;
  id_speciality: number;
};