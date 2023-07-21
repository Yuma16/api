export interface IFloor {
  level: number;
}

export interface IConsultingRoom {
  id: number;
  office_code: string;
  floor: IFloor;
}

export interface ISpeciality {
  id: number;
  speciality_name: string;
}

export interface IDoctor {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  consulting_room: IConsultingRoom;
  speciality: ISpeciality;
};

export interface IPatient {
  id: number;
  first_name: string;
  last_name: string;
  birth_date: Date;
  phone: number;
}

export interface IAppointmentStates {
  id: number;
  status: string;
}

export interface IAppointment {
  id?: number;
  doctor: IDoctor;
  patient: IPatient;
  appointment_date: Date;
  appointment_state: IAppointmentStates;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface IAppointmentPayload {
  id_doctor: number;
  id_patient: number;
  appointment_date: string;
  appointment_state: number;
}

