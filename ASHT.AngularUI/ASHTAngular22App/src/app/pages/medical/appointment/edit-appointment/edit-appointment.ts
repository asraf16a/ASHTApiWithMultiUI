import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { AppointmentService } from '../../../../shared/services/appointment-service';
import { PatientService } from '../../../../shared/services/patient-service';
import { DoctorService } from '../../../../shared/services/doctor-service';

import { Patient } from '../../../../shared/models/patient';
import { Doctor } from '../../../../shared/models/doctor';
import { Appointment } from '../../../../shared/models/appointment';

@Component({
  selector: 'app-edit-appointment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-appointment.html',
  styleUrl: './edit-appointment.css'
})
export class EditAppointmentComponent implements OnInit {

  @Input() appointmentIdInput!: number;

  appointmentForm!: FormGroup;

  appointmentId = 0;

  patients: Patient[] = [];

  doctors: Doctor[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private appointmentService: AppointmentService,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.appointmentId = this.appointmentIdInput ||
      Number(this.route.snapshot.paramMap.get('id'));

    this.buildForm();

    this.loadPatients();

    this.loadDoctors();

    this.loadAppointment();

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

  loadAppointment(): void {

    // Replace this with your API call

    const appointment: Appointment = {

      id: this.appointmentId,

      patientId: 1,

      doctorId: 1,

      appointmentDate: '2025-07-20T10:30',

      visitType: 'Consultation',

      notes: 'Patient has fever for three days.',

      diagonosis: 'Viral Fever'

    };

    this.appointmentForm.patchValue(appointment);

  }

  update(): void {

    if (this.appointmentForm.invalid) {

      this.appointmentForm.markAllAsTouched();

      return;

    }

    const value = this.appointmentForm.value;

    const appointment: Appointment = {

      id: this.appointmentId,

      patientId: value.patientId,

      doctorId: value.doctorId,

      appointmentDate: value.appointmentDate,

      visitType: value.visitType,

      notes: value.notes,

      diagonosis: value.diagonosis

    };

    this.appointmentService.updateAppointment(appointment).subscribe({

      next: () => {

        alert('Appointment Updated Successfully');

        this.router.navigate(['/appointments']);

      },

      error: err => console.error(err)

    });

  }

  cancel(): void {

    this.router.navigate(['/appointments']);

  }

}