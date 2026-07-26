import { Component, OnInit, Input } from '@angular/core';
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

@Component({
  selector: 'app-edit-category',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './edit-category.html',
  styleUrl: './edit-category.css'
})
export class EditCategoryComponent implements OnInit {

  @Input() categoryIdInput!: number;

  categoryForm!: FormGroup;

  categoryId = 0;

  constructor(
    private categoryService: CategoryService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.categoryId =
      this.categoryIdInput || Number(this.route.snapshot.paramMap.get('id'));

    this.categoryForm = this.fb.group({

      name: ['', Validators.required]

    });

    this.loadCategory();

  }

  loadCategory(): void {

    this.categoryService.getCategoryById(this.categoryId).subscribe({

      next: (category: Category) => {

        this.categoryForm.patchValue({

          name: category.name

        });

      },

      error: (err) => {

        console.error(err);

      }

    });

  }

  update(): void {

    if (this.categoryForm.invalid) {

      this.categoryForm.markAllAsTouched();

      return;

    }

    const category: Category = {

      id: this.categoryId,

      name: this.categoryForm.value.name

    };

    this.categoryService.updateCategory(this.categoryId, category).subscribe({

      next: () => {

        alert('Category Updated Successfully');

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