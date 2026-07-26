import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../../../shared/services/category-service';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-category.html',
  styleUrl: './add-category.css'
})
export class AddCategoryComponent implements OnInit {

  categoryForm!: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.cdr.detectChanges();
  }

  buildForm(): void {

    this.categoryForm = this.fb.group({

      name: ['', Validators.required]

    });

  }

  save(): void {

    if (this.categoryForm.invalid) {
      this.categoryForm.markAllAsTouched();
      return;
    }

    const category: Category = {

      id: 0,
      name: this.categoryForm.value.name

    };

    this.categoryService.createCategory(category).subscribe({

      next: () => {

        alert('Category saved successfully.');
        this.categoryForm.reset();

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  cancel(): void {

    this.router.navigate(['/categories']);

  }

}