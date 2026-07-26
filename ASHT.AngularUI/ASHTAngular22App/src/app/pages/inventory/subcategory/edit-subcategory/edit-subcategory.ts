import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../../../shared/services/category-service';
import { SubCategoryService } from '../../../../shared/services/sub-category-service';


@Component({
  selector: 'app-edit-subcategory',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-subcategory.html',
  styleUrl: './edit-subcategory.css'
})
export class EditSubcategoryComponent implements OnInit {

  @Input() subcategoryIdInput!: number;

  subCategoryForm!: FormGroup;

  subCategoryId = 0;

  categories: Category[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private categoryService: CategoryService,
    private subCategoryService: SubCategoryService
  ) { }

  ngOnInit(): void {

    this.subCategoryId =
      this.subcategoryIdInput ||
      Number(this.route.snapshot.paramMap.get('id'));

    this.buildForm();

    this.loadCategories();

    if (this.subCategoryId > 0) {
      this.loadSubCategory();
    }

  }

  buildForm(): void {

    this.subCategoryForm = this.fb.group({

      subCategoryName: ['', Validators.required],

      categoryId: [null, Validators.required]

    });

  }

  loadCategories(): void {

    this.categoryService.getAllCategories().subscribe({

      next: (data: Category[]) => {

        this.categories = data;
        this.cdr.detectChanges();

      },

      error: err => console.error(err)

    });

  }

  loadSubCategory(): void {

    this.subCategoryService
      .getSubCategoryById(this.subCategoryId)
      .subscribe({

        next: (subCategory: SubCategory) => {

          this.subCategoryForm.patchValue({

            subCategoryName: subCategory.subCategoryName,
            categoryId: subCategory.categoryId

          });

          this.cdr.detectChanges();

        },

        error: err => console.error(err)

      });

  }

  update(): void {

    if (this.subCategoryForm.invalid) {

      this.subCategoryForm.markAllAsTouched();

      return;

    }

    const formValue = this.subCategoryForm.value;

    const model: SubCategory = {

      id: this.subCategoryId,

      subCategoryName: formValue.subCategoryName,

      categoryId: formValue.categoryId,

      categoryName: ''

    };

    this.subCategoryService.updateSubCategory(model).subscribe({

      next: () => {

        alert('Subcategory Updated Successfully');

        this.router.navigate(['/subcategories']);

      },

      error: err => console.error(err)

    });

  }

  cancel(): void {

    this.router.navigate(['/subcategories']);

  }

}