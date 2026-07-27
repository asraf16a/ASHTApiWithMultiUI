import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorListComponent } from './doctor-list/doctor-list';
import { AddDoctorComponent } from './add-doctor/add-doctor';
import { EditDoctorComponent } from './edit-doctor/edit-doctor';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [
    CommonModule,
    DoctorListComponent,
    AddDoctorComponent,
    EditDoctorComponent
  ],
  templateUrl: './doctor.html',
  styleUrl: './doctor.css'
})
export class DoctorComponent {

  currentPage: 'list' | 'add' | 'edit' = 'list';

  selectedDoctorId = 0;

  addDoctor() {
    this.currentPage = 'add';
  }

  editDoctor(id: number) {
    this.selectedDoctorId = id;
    this.currentPage = 'edit';
  }

  backToList() {
    this.currentPage = 'list';
  }

}