import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentListComponent } from './appointment-list/appointment-list';
import { AddAppointmentComponent } from './add-appointment/add-appointment';
import { EditAppointmentComponent } from './edit-appointment/edit-appointment';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [
    CommonModule,
    AppointmentListComponent,
    AddAppointmentComponent,
    EditAppointmentComponent
  ],
  templateUrl: './appointment.html',
  styleUrl: './appointment.css'
})
export class AppointmentComponent {

  currentPage: 'list' | 'add' | 'edit' = 'list';

  selectedAppointmentId = 0;

  addAppointment(): void {

    this.currentPage = 'add';

  }

  editAppointment(id: number): void {

    this.selectedAppointmentId = id;

    this.currentPage = 'edit';

  }

  backToList(): void {

    this.currentPage = 'list';

  }

}