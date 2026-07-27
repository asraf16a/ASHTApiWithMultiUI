export interface Appointment {

  id: number;

  patientId: number;

  patientName?: string;

  doctorId: number;

  doctorName?: string;

  appointmentDate: string;

  visitType: string;

  notes: string;

  diagonosis: string;

}