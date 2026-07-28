import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Category } from '../../../../shared/models/category';
import { CategoryService } from '../../../../shared/services/category-service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './category-list.html',
  styleUrl: './category-list.css'
})
export class CategoryListComponent implements OnInit {

  @Output() addClicked = new EventEmitter<void>();
  @Output() editClicked = new EventEmitter<number>();

  searchText = '';
  categories: Category[] = [];

  constructor(
    private categoryService: CategoryService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadCategories();
  }

  loadCategories(): void {

    this.categoryService.getAllCategoryList().subscribe({

      next: (categories: Category[]) => {
        this.categories = categories;
        this.cdr.detectChanges();
      },

      error: (err) => {
        console.error(err);
        this.categories = [];
      }

    });

  }

  get filteredCategories(): Category[] {
      if (!this.searchText) {
        return this.categories;
      }
      const search = this.searchText.toLowerCase();
      return this.categories.filter(r =>
        r.name?.toLowerCase().includes(search)        
      );
    }
  

  get totalCategories(): number {
    return this.categories.length;
  }

  addCategory(): void {
    this.addClicked.emit();
  }

  editCategory(category: Category): void {
    this.editClicked.emit(category.id);
  }

  deleteCategory(category: Category): void {
    console.log('Delete', category);
  }

}