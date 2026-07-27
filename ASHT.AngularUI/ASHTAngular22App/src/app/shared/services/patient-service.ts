import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'https://localhost:7241/api/Patient';

  constructor(private http: HttpClient) { }

  getAllPatients(): Observable<Patient[]> {

    return this.http.get<any>(`${this.apiUrl}/GetAll`).pipe(
        map(response => response.data));

  }

  getPatientById(id: number): Observable<Patient> {

    return this.http.get<Patient>(
      `${this.apiUrl}/GetById/${id}`
    );

  }

  createPatient(patient: Patient): Observable<any> {

    return this.http.post(
      `${this.apiUrl}/AddAsync`,
      patient
    );

  }

  updatePatient(patient: Patient): Observable<any> {

    return this.http.put(
      `${this.apiUrl}/UpdateAsync`,
      patient
    );

  }

  deletePatient(id: number): Observable<any> {

    return this.http.delete(
      `${this.apiUrl}/DeleteAsync/${id}`
    );

  }

}