import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list';
import { AddProductComponent } from './add-product/add-product';
import { EditProductComponent } from './edit-product/edit-product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductListComponent,
    AddProductComponent,
    EditProductComponent
  ],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class ProductComponent {

  currentPage: 'list' | 'add' | 'edit' = 'list';

  selectedProductId = 0;

  addProduct(): void {
    this.currentPage = 'add';
  }

  editProduct(id: number): void {
    this.selectedProductId = id;
    this.currentPage = 'edit';
  }

  backToList(): void {
    this.currentPage = 'list';
  }

}