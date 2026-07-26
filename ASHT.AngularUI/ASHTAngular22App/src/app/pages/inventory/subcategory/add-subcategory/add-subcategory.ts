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
import { CategoryService } from '../../../../shared/services/category-service';
import { SubCategoryService } from '../../../../shared/services/sub-category-service';
import { SubCategory } from '../../../../shared/models/sub-category';

@Component({
  selector: 'app-add-subcategory',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-subcategory.html',
  styleUrl: './add-subcategory.css'
})
export class AddSubcategoryComponent implements OnInit {

  subCategoryForm!: FormGroup;

  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService
  ) { }

  ngOnInit(): void {

    this.buildForm();
    this.loadCategories();

  }

  buildForm(): void {

    this.subCategoryForm = this.fb.group({

      subCategoryName: ['', Validators.required],

      categoryId: [null, Validators.required]

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

  save(): void {

    if (this.subCategoryForm.invalid) {

      this.subCategoryForm.markAllAsTouched();
      return;

    }

    const formValue = this.subCategoryForm.value;

    const subCategory: SubCategory = {

      id: 0,
      subCategoryName: formValue.subCategoryName,
      categoryId: formValue.categoryId,
      categoryName: ''

    };

    this.subCategoryService.createSubCategory(subCategory).subscribe({

      next: () => {

        alert('Subcategory saved successfully.');
        this.router.navigate(['/subcategories']);

      },

      error: err => console.error(err)

    });

  }

  cancel(): void {

    this.router.navigate(['/subcategories']);

  }

}