import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../../../../shared/models/category';
import { Product } from '../../../../shared/models/product';

import { CategoryService } from '../../../../shared/services/category-service';
import { ProductService } from '../../../../shared/services/product-service';
import { SubCategoryService } from '../../../../shared/services/sub-category-service';
import { SubCategory } from '../../../../shared/models/sub-category';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-product.html',
  styleUrl: './edit-product.css'
})
export class EditProductComponent implements OnInit {

  @Input() productIdInput!: number;

  productForm!: FormGroup;

  productId = 0;

  categories: Category[] = [];
  subCategories: SubCategory[] = [];

  selectedImage: string |undefined;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {

    this.productId =
      this.productIdInput ||
      Number(this.route.snapshot.paramMap.get('id'));

    this.buildForm();

    this.loadCategories();

    if (this.productId > 0) {
      this.loadProduct();
    }

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

  loadSubCategories(categoryId: number): void {

    this.subCategoryService.getAllSubCategoryList().subscribe({

      next: (data: SubCategory[]) => {

        this.subCategories =
          data.filter(x => x.categoryId == categoryId);

        this.cdr.detectChanges();

      },

      error: err => console.error(err)

    });

  }

  loadProduct(): void {

    this.productService.getProductById(this.productId).subscribe({

      next: (product: Product) => {

        this.productForm.patchValue({

          name: product.name,
          categoryId: product.categoryId,
          subCategoryId: product.subCategoryId,
          description: product.description,
          feature: product.feature,
          purchasePrice: product.purchasePrice

        });

        this.selectedImage = product.imageContent;

        this.loadSubCategories(product.categoryId);

        this.cdr.detectChanges();

      },

      error: err => console.error(err)

    });

  }

  onCategoryChange(): void {

    const categoryId = this.productForm.value.categoryId;

    this.loadSubCategories(categoryId);

    this.productForm.patchValue({

      subCategoryId: null

    });

  }

  onImageSelected(event: any): void {

    const file = event.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {

      this.selectedImage = new Uint8Array(reader.result as ArrayBuffer);

    };

    reader.readAsArrayBuffer(file);

  }

  update(): void {

    if (this.productForm.invalid) {

      this.productForm.markAllAsTouched();

      return;

    }

    const value = this.productForm.value;

    const product: Product = {

      id: this.productId,

      name: value.name,

      categoryId: value.categoryId,

      subCategoryId: value.subCategoryId,

      description: value.description,

      feature: value.feature,

      purchasePrice: value.purchasePrice,

      categoryName: '',

      subCategoryName: '',

      imageContent: this.selectedImage

    };

    this.productService.updateProduct(product).subscribe({

      next: () => {

        alert('Product Updated Successfully');

        this.router.navigate(['/products']);

      },

      error: err => console.error(err)

    });

  }

  cancel(): void {

    this.router.navigate(['/products']);

  }

}