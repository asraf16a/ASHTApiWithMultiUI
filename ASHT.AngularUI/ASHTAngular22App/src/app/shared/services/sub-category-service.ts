import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SubCategory } from '../models/sub-category';



@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  private apiUrl = 'https://localhost:5001/api/SubCategory';

  constructor(private http: HttpClient) { }

  getAllSubCategoryList(): Observable<SubCategory[]> {

    return this.http.get<SubCategory[]>(`${this.apiUrl}/GetAll`);

  }

  getSubCategoryById(id: number): Observable<SubCategory> {

    return this.http.get<SubCategory>(`${this.apiUrl}/GetById/${id}`);

  }

  createSubCategory(model: SubCategory): Observable<any> {

    return this.http.post(`${this.apiUrl}/Create`, model);

  }

  updateSubCategory(model: SubCategory): Observable<any> {

    return this.http.put(`${this.apiUrl}/Update`, model);

  }

  deleteSubCategory(id: number): Observable<any> {

    return this.http.delete(`${this.apiUrl}/Delete/${id}`);

  }

}