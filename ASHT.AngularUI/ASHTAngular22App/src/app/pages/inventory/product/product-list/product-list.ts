import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Product } from '../../../../shared/models/product';
import { ProductService } from '../../../../shared/services/product-service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {

  @Output() addClicked = new EventEmitter<void>();
  @Output() editClicked = new EventEmitter<number>();

  searchText = '';

  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {

    this.productService.getAllProducts().subscribe({

      next: (products: Product[]) => {

        this.products = products;
        this.cdr.detectChanges();

      },

      error: (err) => {

        console.error(err);
        this.products = [];

      }

    });

  }

  get totalProducts(): number {

    return this.products.length;

  }

  addProduct(): void {

    this.addClicked.emit();

  }

  editProduct(product: Product): void {

    this.editClicked.emit(product.id);

  }

  deleteProduct(product: Product): void {

    console.log('Delete', product);

    // this.productService.deleteProduct(product.id).subscribe(...)

  }

}