import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientListComponent } from './patient-list/patient-list';
import { AddPatientComponent } from './add-patient/add-patient';
import { EditPatientComponent } from './edit-patient/edit-patient';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [
    CommonModule,
    PatientListComponent,
    AddPatientComponent,
    EditPatientComponent
  ],
  templateUrl: './patient.html',
  styleUrl: './patient.css'
})
export class PatientComponent {

  currentPage: 'list' | 'add' | 'edit' = 'list';

  selectedPatientId = 0;

  addPatient(): void {

    this.currentPage = 'add';

  }

  editPatient(id: number): void {

    this.selectedPatientId = id;

    this.currentPage = 'edit';

  }

  backToList(): void {

    this.currentPage = 'list';

  }

}