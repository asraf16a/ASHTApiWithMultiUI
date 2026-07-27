export interface Patient {

  id: number;

  firstName: string;

  lastName: string;

  dateOfBirth: Date;

  gender: string;

  phoneNumber: string;

  email: string;

  address: string;

  bloodType: string;

  allergies: string;

  medicalHistory: string;

  currentMedications: string;

  insuranceProvider: string;

  insuranceNumber: string;

  createdDate: Date;

  createdBy: string;

  isActive: boolean;

}