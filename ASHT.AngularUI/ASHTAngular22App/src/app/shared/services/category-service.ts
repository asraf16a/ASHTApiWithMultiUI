import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, map } from 'rxjs';

import { Category } from '../models/category';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiUrl = `${environment.apiUrl}/Category`;

  constructor(private http: HttpClient) { }

  // Get All Categories
  getAllCategoryList(): Observable<Category[]> {

    return this.http.get<any>(`${this.apiUrl}/GetAllCategoryList`).pipe(

      map(res => {
        return res.data;
      })

    );

  }

  // Get Category By Id
  getCategoryById(id: number): Observable<Category> {

    return this.http.get<Category>(`${this.apiUrl}/${id}`);

  }

  // Create Category
  createCategory(category: Category): Observable<Category> {

    return this.http.post<Category>(`${this.apiUrl}/AddAsync`, category);

  }

  // Update Category
  updateCategory(id: number, category: Category): Observable<Category> {

    return this.http.put<Category>(`${this.apiUrl}/${id}`, category);

  }

  // Delete Category
  deleteCategory(id: number): Observable<void> {

    return this.http.delete<void>(`${this.apiUrl}/${id}`);

  }

}