import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = `${environment.apiUrl}/Product`;

  constructor(private http: HttpClient) { }

  // Get All Products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/GetAll`);
  }

  // Get Product By Id
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/GetById/${id}`);
  }

  // Create Product
  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.apiUrl}/Create`, product);
  }

  // Update Product
  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.apiUrl}/Update`, product);
  }

  // Delete Product
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/Delete/${id}`);
  }

}