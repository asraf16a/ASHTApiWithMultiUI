import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Appointment } from '../../../../shared/models/appointment';
import { AppointmentService } from '../../../../shared/services/appointment-service';

@Component({
  selector: 'app-appointment-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.css'
})
export class AppointmentListComponent implements OnInit {

  @Output() addClicked = new EventEmitter<void>();

  @Output() editClicked = new EventEmitter<number>();

  searchText = '';

  appointments: Appointment[] = [];

  constructor(
    private appointmentService: AppointmentService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.loadAppointments();

  }

  loadAppointments(): void {

    this.appointmentService.getAllAppointments().subscribe({

      next: (appointments: Appointment[]) => {

        this.appointments = appointments;

        this.cdr.detectChanges();

      },

      error: err => {

        console.error(err);

        this.appointments = [];

      }

    });

  }

  get totalAppointments(): number {

    return this.appointments.length;

  }

  get todayAppointments(): number {

    const today = new Date().toDateString();

    return this.appointments.filter(x =>
      new Date(x.appointmentDate).toDateString() === today
    ).length;

  }

  get upcomingAppointments(): number {

    const today = new Date();

    return this.appointments.filter(x =>
      new Date(x.appointmentDate) > today
    ).length;

  }

  addAppointment(): void {

    this.addClicked.emit();

  }

  editAppointment(appointment: Appointment): void {

    this.editClicked.emit(appointment.id);

  }

  deleteAppointment(appointment: Appointment): void {

    if (!confirm('Delete this appointment?')) {

      return;

    }

    this.appointmentService.deleteAppointment(appointment.id).subscribe({

      next: () => {

        this.loadAppointments();

      },

      error: err => console.error(err)

    });

  }

}