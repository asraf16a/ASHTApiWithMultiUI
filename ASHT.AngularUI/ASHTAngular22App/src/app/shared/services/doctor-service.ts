import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private apiUrl = 'https://localhost:7241/api/Doctor';

  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<Doctor[]> {
    return this.http
      .get<any>(`${this.apiUrl}/GetAll`)
      .pipe(map(res => res.data));
  }

  getDoctorById(id: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.apiUrl}/GetById/${id}`);
  }

  createDoctor(doctor: Doctor): Observable<any> {
    return this.http.post(`${this.apiUrl}/AddAsync`, doctor);
  }

  updateDoctor(doctor: Doctor): Observable<any> {
    return this.http.put(`${this.apiUrl}/UpdateAsync`, doctor);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/DeleteAsync/${id}`);
  }

}