import { Component, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { Appointment } from '../../../../shared/models/appointment';
import { AppointmentService } from '../../../../shared/services/appointment-service';
import { Patient } from '../../../../shared/models/patient';
import { Doctor } from '../../../../shared/models/doctor';
import { PatientService } from '../../../../shared/services/patient-service';
import { DoctorService } from '../../../../shared/services/doctor-service';

@Component({
  selector: 'app-add-appointment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-appointment.html',
  styleUrl: './add-appointment.css'
})
export class AddAppointmentComponent {

  appointmentForm!: FormGroup;

  patients: Patient[] = [];

  doctors: Doctor[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.buildForm();

    this.loadPatients();

    this.loadDoctors();

  }

  buildForm(): void {

    this.appointmentForm = this.fb.group({

      patientId: [null, Validators.required],

      doctorId: [null, Validators.required],

      appointmentDate: ['', Validators.required],

      visitType: ['', Validators.required],

      notes: [''],

      diagonosis: ['']

    });

  }

  loadPatients(): void {

    this.patientService.getAllPatients().subscribe({

      next: (patients: Patient[]) => {

        this.patients = patients;

        this.cdr.detectChanges();

      },

      error: err => console.error(err)

    });

  }

  loadDoctors(): void {

    this.doctorService.getAllDoctors().subscribe({

      next: (doctors: Doctor[]) => {

        this.doctors = doctors;

        this.cdr.detectChanges();

      },

      error: err => console.error(err)

    });

  }

  save(): void {

    if (this.appointmentForm.invalid) {

      this.appointmentForm.markAllAsTouched();

      return;

    }

    const value = this.appointmentForm.value;

    const appointment: Appointment = {

      id: 0,

      patientId: value.patientId,

      doctorId: value.doctorId,

      appointmentDate: value.appointmentDate,

      visitType: value.visitType,

      notes: value.notes,

      diagonosis: value.diagonosis

    };

    this.appointmentService.createAppointment(appointment).subscribe({

      next: () => {

        alert('Appointment Saved Successfully');

        this.router.navigate(['/appointments']);

      },

      error: err => console.error(err)

    });

  }

  cancel(): void {

    this.router.navigate(['/appointments']);

  }

}