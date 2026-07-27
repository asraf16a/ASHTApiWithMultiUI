import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Patient } from '../../../../shared/models/patient';
import { PatientService } from '../../../../shared/services/patient-service';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.css'
})
export class PatientListComponent implements OnInit {

  @Output() addClicked = new EventEmitter<void>();

  @Output() editClicked = new EventEmitter<number>();

  searchText = '';

  patients: Patient[] = [];

  constructor(
    private patientService: PatientService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {

    this.loadPatients();

  }

  loadPatients(): void {

    this.patientService.getAllPatients().subscribe({

      next: (patients: Patient[]) => {

        this.patients = patients;

        this.cdr.detectChanges();

      },

      error: err => {

        console.error(err);

        this.patients = [];

      }

    });

  }

  get totalPatients(): number {

    return this.patients.length;

  }

  get activePatients(): number {

    return this.patients.filter(x => x.isActive).length;

  }

  get inactivePatients(): number {

    return this.patients.filter(x => !x.isActive).length;

  }

  addPatient(): void {

    this.addClicked.emit();

  }

  editPatient(patient: Patient): void {

    this.editClicked.emit(patient.id);

  }

  deletePatient(patient: Patient): void {

    if (!confirm('Delete this patient?')) return;

    this.patientService.deletePatient(patient.id).subscribe({

      next: () => {

        this.loadPatients();

      },

      error: err => console.error(err)

    });

  }

}