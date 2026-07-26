import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { Category } from '../../../../shared/models/category';
import { Product } from '../../../../shared/models/product';

import { CategoryService } from '../../../../shared/services/category-service';
import { ProductService } from '../../../../shared/services/product-service';
import { SubCategory } from '../../../../shared/models/sub-category';
import { SubCategoryService } from '../../../../shared/services/sub-category-service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css'
})
export class AddProductComponent implements OnInit {

  productForm!: FormGroup;

  categories: Category[] = [];
  subCategories: SubCategory[] = [];

  selectedImage: Uint8Array | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {

    this.buildForm();

    this.loadCategories();

  }

  buildForm(): void {

    this.productForm = this.fb.group({

      name: ['', Validators.required],

      categoryId: [null, Validators.required],

      subCategoryId: [null, Validators.required],

      description: [''],

      feature: [''],

      purchasePrice: [0, Validators.required]

    });

  }

  loadCategories(): void {

    this.categoryService.getAllCategoryList().subscribe({

      next: (data: Category[]) => {

        this.categories = data;
        this.cdr.detectChanges();

      },

      error: err => console.error(err)

    });

  }

  onCategoryChange(): void {

    const categoryId = this.productForm.value.categoryId;

    this.subCategoryService.getAllSubCategoryList().subscribe({

      next: (data: SubCategory[]) => {

        this.subCategories =
          data.filter(x => x.categoryId == categoryId);

        this.productForm.patchValue({
          subCategoryId: null
        });

        this.cdr.detectChanges();

      },

      error: err => console.error(err)

    });

  }

  onImageSelected(event: any): void {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

      this.selectedImage =
        new Uint8Array(reader.result as ArrayBuffer);

    };

    reader.readAsArrayBuffer(file);

  }

  save(): void {

    if (this.productForm.invalid) {

      this.productForm.markAllAsTouched();

      return;

    }

    const value = this.productForm.value;

    const product: Product = {

      id: 0,

      name: value.name,

      categoryId: value.categoryId,

      categoryName: '',

      subCategoryId: value.subCategoryId,

      subCategoryName: '',

      description: value.description,

      feature: value.feature,

      purchasePrice: value.purchasePrice,

      imageContent: this.selectedImage

    };

    this.productService.createProduct(product).subscribe({

      next: () => {

        alert('Product Saved Successfully');

        this.router.navigate(['/products']);

      },

      error: err => console.error(err)

    });

  }

  cancel(): void {

    this.router.navigate(['/products']);

  }

}